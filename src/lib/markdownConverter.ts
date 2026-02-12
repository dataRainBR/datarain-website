import { Post, ContentBlock } from '@/types/admin';
import { getAllBlogPosts, getAllCases, MarkdownPost } from './markdown';

/**
 * Converte um post Markdown para o formato do editor
 */
export function convertMarkdownToPost(markdownPost: MarkdownPost, type: 'blog' | 'case'): Post {
  const blocks = parseMarkdownToBlocks(markdownPost.content);
  
  return {
    id: `imported-${markdownPost.slug}`,
    title: markdownPost.title,
    slug: markdownPost.slug,
    excerpt: markdownPost.excerpt,
    coverImage: markdownPost.featuredImage,
    author: 'Migrado do WordPress',
    authorId: '0',
    type,
    status: 'published',
    blocks,
    tags: [],
    categories: markdownPost.categories.map(String),
    createdAt: markdownPost.date,
    updatedAt: markdownPost.date,
    publishedAt: markdownPost.date,
  };
}

/**
 * Converte conteúdo Markdown em blocos estruturados
 */
function parseMarkdownToBlocks(markdown: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  const lines = markdown.split('\n');
  let currentBlock: { type: string; content: string[] } | null = null;
  let blockCounter = 0;

  const finishCurrentBlock = () => {
    if (currentBlock && currentBlock.content.length > 0) {
      const content = currentBlock.content.join('\n').trim();
      if (content) {
        blocks.push(createBlock(currentBlock.type, content, blockCounter++));
      }
    }
    currentBlock = null;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();

    // Pular linhas vazias entre blocos
    if (!trimmedLine) {
      finishCurrentBlock();
      continue;
    }

    // Headers (# ## ### ####)
    const headerMatch = trimmedLine.match(/^(#{1,4})\s+(.+)$/);
    if (headerMatch) {
      finishCurrentBlock();
      const level = headerMatch[1].length;
      blocks.push({
        id: `block-${blockCounter++}`,
        type: 'header',
        content: headerMatch[2],
        order: blockCounter,
        metadata: { level },
      });
      continue;
    }

    // Imagens ![alt](url)
    const imageMatch = trimmedLine.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imageMatch) {
      finishCurrentBlock();
      blocks.push({
        id: `block-${blockCounter++}`,
        type: 'image',
        content: '',
        order: blockCounter,
        metadata: {
          imageUrl: imageMatch[2],
          imageAlt: imageMatch[1],
        },
      });
      continue;
    }

    // Citações (> texto)
    if (trimmedLine.startsWith('> ')) {
      if (currentBlock?.type !== 'quote') {
        finishCurrentBlock();
        currentBlock = { type: 'quote', content: [] };
      }
      currentBlock.content.push(trimmedLine.substring(2));
      continue;
    }

    // Código (```language)
    if (trimmedLine.startsWith('```')) {
      if (currentBlock?.type === 'code') {
        // Fim do bloco de código
        finishCurrentBlock();
      } else {
        // Início do bloco de código
        finishCurrentBlock();
        const language = trimmedLine.substring(3).trim();
        currentBlock = { type: 'code', content: [] };
        if (language) {
          (currentBlock as any).language = language;
        }
      }
      continue;
    }

    // Se estamos em um bloco de código, adicionar linha
    if (currentBlock?.type === 'code') {
      currentBlock.content.push(line);
      continue;
    }

    // Divisor (---)
    if (trimmedLine === '---' || trimmedLine === '***') {
      finishCurrentBlock();
      blocks.push({
        id: `block-${blockCounter++}`,
        type: 'divider',
        content: '',
        order: blockCounter,
      });
      continue;
    }

    // Texto normal
    if (currentBlock?.type !== 'text') {
      finishCurrentBlock();
      currentBlock = { type: 'text', content: [] };
    }
    currentBlock.content.push(line);
  }

  // Finalizar último bloco
  finishCurrentBlock();

  return blocks;
}

function createBlock(type: string, content: string, order: number): ContentBlock {
  const block: ContentBlock = {
    id: `block-${order}`,
    type: type as ContentBlock['type'],
    content,
    order,
  };

  if (type === 'code') {
    // Tentar extrair linguagem se houver
    const firstLine = content.split('\n')[0];
    if (firstLine && !firstLine.includes(' ')) {
      block.metadata = { language: firstLine };
      block.content = content.split('\n').slice(1).join('\n');
    }
  }

  return block;
}

/**
 * Importa todos os posts do blog existentes
 */
export function importAllBlogPosts(): Post[] {
  const markdownPosts = getAllBlogPosts();
  return markdownPosts.map(post => convertMarkdownToPost(post, 'blog'));
}

/**
 * Importa todos os cases existentes
 */
export function importAllCases(): Post[] {
  const markdownCases = getAllCases();
  return markdownCases.map(casePost => convertMarkdownToPost(casePost, 'case'));
}

/**
 * Mescla posts importados com posts criados no admin
 */
export function mergeImportedPosts(
  importedPosts: Post[],
  adminPosts: Post[]
): Post[] {
  const merged = [...importedPosts];
  const importedIds = new Set(importedPosts.map(p => p.id));

  // Adicionar posts criados no admin que não são importados
  adminPosts.forEach(post => {
    if (!importedIds.has(post.id)) {
      merged.push(post);
    }
  });

  // Ordenar por data (mais recente primeiro)
  return merged.sort((a, b) => 
    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}

/**
 * Salva um post editado (importado ou novo)
 */
export function savePost(post: Post, type: 'blog' | 'case'): void {
  const storageKey = type === 'blog' ? 'admin_blog_posts' : 'admin_cases';
  const stored = localStorage.getItem(storageKey);
  const adminPosts: Post[] = stored ? JSON.parse(stored) : [];

  // Se é um post importado, adicionar aos posts do admin
  if (post.id.startsWith('imported-')) {
    // Verificar se já existe
    const existingIndex = adminPosts.findIndex(p => p.id === post.id);
    if (existingIndex >= 0) {
      adminPosts[existingIndex] = post;
    } else {
      adminPosts.push(post);
    }
  } else {
    // Post criado no admin
    const existingIndex = adminPosts.findIndex(p => p.id === post.id);
    if (existingIndex >= 0) {
      adminPosts[existingIndex] = post;
    } else {
      adminPosts.push(post);
    }
  }

  localStorage.setItem(storageKey, JSON.stringify(adminPosts));
}

/**
 * Verifica se um post foi editado no admin
 */
export function isPostEdited(postId: string, type: 'blog' | 'case'): boolean {
  const storageKey = type === 'blog' ? 'admin_blog_posts' : 'admin_cases';
  const stored = localStorage.getItem(storageKey);
  if (!stored) return false;
  
  const adminPosts: Post[] = JSON.parse(stored);
  return adminPosts.some(p => p.id === postId);
}

/**
 * Obtém a versão editada de um post (se existir)
 */
export function getEditedPost(postId: string, type: 'blog' | 'case'): Post | null {
  const storageKey = type === 'blog' ? 'admin_blog_posts' : 'admin_cases';
  const stored = localStorage.getItem(storageKey);
  if (!stored) return null;
  
  const adminPosts: Post[] = JSON.parse(stored);
  return adminPosts.find(p => p.id === postId) || null;
}
