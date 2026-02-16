import matter from 'gray-matter';
import { Post } from '@/types/admin';

export interface MarkdownPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  featuredImage: string;
  categories: number[];
  tags: (string | number)[];
  author: number;
  content: string;
  youtubeVideoId?: string;
  pilar?: string;
  oferta?: string;
  setor?: string;
}

export interface MarkdownPostMetadata {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  featuredImage: string;
  categories: number[];
  tags: (string | number)[];
  author: number;
}

// Importar todos os arquivos markdown de blog
const blogFiles = import.meta.glob('/content/blog/*.md', { query: '?raw', import: 'default', eager: true });

// Importar todos os arquivos markdown de cases
const casesFiles = import.meta.glob('/content/cases/*.md', { query: '?raw', import: 'default', eager: true });

// Converter Post do admin para MarkdownPost
function convertAdminPostToMarkdown(post: Post): MarkdownPost {
  // Converter blocos em markdown
  const content = post.blocks.map(block => {
    switch (block.type) {
      case 'header':
        const level = '#'.repeat(block.metadata?.level || 2);
        return `${level} ${block.content}`;
      case 'title':
        return `## ${block.content}`;
      case 'text':
        return block.content;
      case 'image':
        return `![${block.metadata?.imageAlt || ''}](${block.metadata?.imageUrl || ''})`;
      case 'quote':
        return `> ${block.content}`;
      case 'code':
        return `\`\`\`${block.metadata?.language || ''}\n${block.content}\n\`\`\``;
      case 'divider':
        return '---';
      default:
        return '';
    }
  }).join('\n\n');

  return {
    slug: post.slug,
    title: post.title,
    date: post.publishedAt || post.createdAt,
    excerpt: post.excerpt,
    featuredImage: post.coverImage,
    categories: post.categories.map(c => parseInt(c) || 0),
    tags: post.tags,
    author: parseInt(post.authorId) || 0,
    content,
  };
}

// Obter posts do admin do localStorage
function getAdminPosts(type: 'blog' | 'case'): MarkdownPost[] {
  const storageKey = type === 'blog' ? 'admin_blog_posts' : 'admin_cases';
  const stored = localStorage.getItem(storageKey);
  
  if (!stored) return [];
  
  try {
    const adminPosts: Post[] = JSON.parse(stored);
    return adminPosts
      .filter(post => post.status === 'published')
      .map(convertAdminPostToMarkdown);
  } catch (error) {
    console.error('Error loading admin posts:', error);
    return [];
  }
}

// Processar arquivos markdown
function processMarkdownFiles(files: Record<string, string>): MarkdownPost[] {
  return Object.entries(files).map(([filepath, content]) => {
    const { data, content: markdownContent } = matter(content);
    const slug = filepath.split('/').pop()?.replace('.md', '') || '';
    
    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      featuredImage: data.featuredImage || '',
      categories: data.categories || [],
      tags: data.tags || [],
      author: data.author || 0,
      content: markdownContent,
      youtubeVideoId: data.youtubeVideoId || undefined,
      pilar: data.pilar || undefined,
      oferta: data.oferta || undefined,
      setor: data.setor || undefined,
    };
  });
}

// Obter todos os posts do blog
export function getAllBlogPosts(): MarkdownPost[] {
  const markdownPosts = processMarkdownFiles(blogFiles);
  const adminPosts = getAdminPosts('blog');
  
  // Mesclar posts, dando prioridade aos posts do admin se tiverem o mesmo slug
  const allPosts = [...adminPosts];
  const adminSlugs = new Set(adminPosts.map(p => p.slug));
  
  markdownPosts.forEach(post => {
    if (!adminSlugs.has(post.slug)) {
      allPosts.push(post);
    }
  });
  
  return allPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Obter todos os cases
export function getAllCases(): MarkdownPost[] {
  const markdownCases = processMarkdownFiles(casesFiles);
  const adminCases = getAdminPosts('case');
  
  // Mesclar cases, dando prioridade aos cases do admin se tiverem o mesmo slug
  const allCases = [...adminCases];
  const adminSlugs = new Set(adminCases.map(c => c.slug));
  
  markdownCases.forEach(casePost => {
    if (!adminSlugs.has(casePost.slug)) {
      allCases.push(casePost);
    }
  });
  
  return allCases.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Obter post por slug
export function getPostBySlug(slug: string, type: 'blog' | 'cases'): MarkdownPost | null {
  const posts = type === 'blog' ? getAllBlogPosts() : getAllCases();
  return posts.find(post => post.slug === slug) || null;
}

// Buscar posts
export function searchPosts(posts: MarkdownPost[], searchTerm: string): MarkdownPost[] {
  if (!searchTerm) return posts;
  
  const term = searchTerm.toLowerCase();
  return posts.filter(post => 
    post.title.toLowerCase().includes(term) ||
    post.excerpt.toLowerCase().includes(term) ||
    post.content.toLowerCase().includes(term)
  );
}

// Obter metadados dos posts (sem conteúdo completo)
export function getPostsMetadata(posts: MarkdownPost[]): MarkdownPostMetadata[] {
  return posts.map(({ content, ...metadata }) => metadata);
}
