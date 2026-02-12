import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as http from 'http';

const WORDPRESS_URL = 'https://content.datarain.com.br';
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');
const CASES_DIR = path.join(process.cwd(), 'content', 'cases');
const IMAGES_DIR = path.join(process.cwd(), 'public', 'content-images');

interface WordPressPost {
  id: number;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  slug: string;
  categories: number[];
  tags: number[];
  author: number;
  link: string;
}

interface WordPressMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details?: {
    sizes?: {
      full?: { source_url: string };
      large?: { source_url: string };
      medium?: { source_url: string };
    };
  };
}

interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
}

// Criar diretórios se não existirem
function ensureDirectoryExists(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Baixar imagem
async function downloadImage(url: string, filepath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);
    
    protocol.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

// Buscar categoria por slug
async function getCategoryBySlug(slug: string): Promise<WordPressCategory | null> {
  try {
    const response = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/categories?slug=${slug}`);
    if (!response.ok) return null;
    const categories = await response.json() as WordPressCategory[];
    return categories.length > 0 ? categories[0] : null;
  } catch (error) {
    console.error(`Erro ao buscar categoria "${slug}":`, error);
    return null;
  }
}

// Buscar todos os posts de uma categoria
async function fetchPostsByCategory(categoryId: number): Promise<WordPressPost[]> {
  const allPosts: WordPressPost[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    try {
      const response = await fetch(
        `${WORDPRESS_URL}/wp-json/wp/v2/posts?categories=${categoryId}&per_page=100&page=${page}`
      );
      
      if (!response.ok) {
        hasMore = false;
        break;
      }

      const posts = await response.json() as WordPressPost[];
      
      if (posts.length === 0) {
        hasMore = false;
      } else {
        allPosts.push(...posts);
        page++;
      }
    } catch (error) {
      console.error(`Erro ao buscar posts da página ${page}:`, error);
      hasMore = false;
    }
  }

  return allPosts;
}

// Buscar mídia
async function fetchMedia(mediaId: number): Promise<WordPressMedia | null> {
  try {
    const response = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/media/${mediaId}`);
    if (!response.ok) return null;
    return await response.json() as WordPressMedia;
  } catch (error) {
    console.error(`Erro ao buscar mídia ${mediaId}:`, error);
    return null;
  }
}

// Converter HTML para Markdown básico
function htmlToMarkdown(html: string): string {
  let markdown = html;
  
  // Remover tags de script e style
  markdown = markdown.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  markdown = markdown.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  
  // Converter headings
  markdown = markdown.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '\n# $1\n');
  markdown = markdown.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '\n## $1\n');
  markdown = markdown.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '\n### $1\n');
  markdown = markdown.replace(/<h4[^>]*>(.*?)<\/h4>/gi, '\n#### $1\n');
  markdown = markdown.replace(/<h5[^>]*>(.*?)<\/h5>/gi, '\n##### $1\n');
  markdown = markdown.replace(/<h6[^>]*>(.*?)<\/h6>/gi, '\n###### $1\n');
  
  // Converter strong/bold
  markdown = markdown.replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**');
  markdown = markdown.replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**');
  
  // Converter em/italic
  markdown = markdown.replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*');
  markdown = markdown.replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*');
  
  // Converter links
  markdown = markdown.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)');
  
  // Converter imagens
  markdown = markdown.replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/gi, '![$2]($1)');
  markdown = markdown.replace(/<img[^>]*src="([^"]*)"[^>]*>/gi, '![]($1)');
  
  // Converter listas não ordenadas
  markdown = markdown.replace(/<ul[^>]*>/gi, '\n');
  markdown = markdown.replace(/<\/ul>/gi, '\n');
  markdown = markdown.replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n');
  
  // Converter listas ordenadas
  markdown = markdown.replace(/<ol[^>]*>/gi, '\n');
  markdown = markdown.replace(/<\/ol>/gi, '\n');
  
  // Converter parágrafos
  markdown = markdown.replace(/<p[^>]*>/gi, '\n');
  markdown = markdown.replace(/<\/p>/gi, '\n');
  
  // Converter quebras de linha
  markdown = markdown.replace(/<br\s*\/?>/gi, '\n');
  
  // Converter code blocks
  markdown = markdown.replace(/<pre[^>]*><code[^>]*>(.*?)<\/code><\/pre>/gis, '\n```\n$1\n```\n');
  markdown = markdown.replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`');
  
  // Converter blockquotes
  markdown = markdown.replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gis, (match, content) => {
    return '\n> ' + content.trim().replace(/\n/g, '\n> ') + '\n';
  });
  
  // Remover outras tags HTML
  markdown = markdown.replace(/<[^>]+>/g, '');
  
  // Decodificar entidades HTML
  markdown = markdown.replace(/&nbsp;/g, ' ');
  markdown = markdown.replace(/&amp;/g, '&');
  markdown = markdown.replace(/&lt;/g, '<');
  markdown = markdown.replace(/&gt;/g, '>');
  markdown = markdown.replace(/&quot;/g, '"');
  markdown = markdown.replace(/&#039;/g, "'");
  markdown = markdown.replace(/&rsquo;/g, "'");
  markdown = markdown.replace(/&lsquo;/g, "'");
  markdown = markdown.replace(/&rdquo;/g, '"');
  markdown = markdown.replace(/&ldquo;/g, '"');
  
  // Limpar múltiplas linhas em branco
  markdown = markdown.replace(/\n{3,}/g, '\n\n');
  
  return markdown.trim();
}

// Processar imagens no conteúdo
async function processContentImages(content: string, postSlug: string, type: 'blog' | 'cases'): Promise<string> {
  const imgRegex = /<img[^>]*src="([^"]*)"[^>]*>/gi;
  let match;
  const imageMap = new Map<string, string>();
  
  while ((match = imgRegex.exec(content)) !== null) {
    const originalUrl = match[1];
    
    // Pular se já processamos esta URL
    if (imageMap.has(originalUrl)) continue;
    
    try {
      const urlObj = new URL(originalUrl);
      const filename = path.basename(urlObj.pathname);
      const imageDir = path.join(IMAGES_DIR, type, postSlug);
      ensureDirectoryExists(imageDir);
      
      const localPath = path.join(imageDir, filename);
      const publicPath = `/content-images/${type}/${postSlug}/${filename}`;
      
      // Baixar imagem
      await downloadImage(originalUrl, localPath);
      console.log(`  ✓ Imagem baixada: ${filename}`);
      
      imageMap.set(originalUrl, publicPath);
    } catch (error) {
      console.error(`  ✗ Erro ao processar imagem ${originalUrl}:`, error);
    }
  }
  
  // Substituir URLs no conteúdo
  let processedContent = content;
  imageMap.forEach((localPath, originalUrl) => {
    processedContent = processedContent.replace(new RegExp(originalUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), localPath);
  });
  
  return processedContent;
}

// Salvar post como Markdown
async function savePostAsMarkdown(post: WordPressPost, type: 'blog' | 'cases') {
  const dir = type === 'blog' ? BLOG_DIR : CASES_DIR;
  const filename = `${post.slug}.md`;
  const filepath = path.join(dir, filename);
  
  console.log(`\nProcessando: ${post.title.rendered}`);
  
  // Processar imagens no conteúdo
  let content = post.content.rendered;
  content = await processContentImages(content, post.slug, type);
  
  // Converter para Markdown
  const markdownContent = htmlToMarkdown(content);
  const markdownExcerpt = htmlToMarkdown(post.excerpt.rendered);
  
  // Buscar imagem destacada
  let featuredImage = '';
  if (post.featured_media) {
    const media = await fetchMedia(post.featured_media);
    if (media) {
      const imageUrl = media.source_url;
      const filename = path.basename(new URL(imageUrl).pathname);
      const imageDir = path.join(IMAGES_DIR, type, post.slug);
      ensureDirectoryExists(imageDir);
      
      const localPath = path.join(imageDir, filename);
      const publicPath = `/content-images/${type}/${post.slug}/${filename}`;
      
      try {
        await downloadImage(imageUrl, localPath);
        featuredImage = publicPath;
        console.log(`  ✓ Imagem destacada baixada: ${filename}`);
      } catch (error) {
        console.error(`  ✗ Erro ao baixar imagem destacada:`, error);
      }
    }
  }
  
  // Criar frontmatter
  const frontmatter = `---
title: "${post.title.rendered.replace(/"/g, '\\"')}"
date: "${post.date}"
slug: "${post.slug}"
excerpt: "${markdownExcerpt.replace(/\n/g, ' ').replace(/"/g, '\\"')}"
featuredImage: "${featuredImage}"
categories: ${JSON.stringify(post.categories)}
tags: ${JSON.stringify(post.tags)}
author: ${post.author}
---

`;
  
  // Salvar arquivo
  fs.writeFileSync(filepath, frontmatter + markdownContent);
  console.log(`  ✓ Salvo: ${filename}`);
}

// Função principal
async function main() {
  console.log('🚀 Iniciando migração do WordPress para Markdown...\n');
  
  // Criar diretórios
  ensureDirectoryExists(BLOG_DIR);
  ensureDirectoryExists(CASES_DIR);
  ensureDirectoryExists(IMAGES_DIR);
  
  // Buscar categoria de blog
  console.log('📝 Buscando posts do blog...');
  const blogCategory = await getCategoryBySlug('blog');
  if (blogCategory) {
    console.log(`  ✓ Categoria "blog" encontrada (ID: ${blogCategory.id})`);
    const blogPosts = await fetchPostsByCategory(blogCategory.id);
    console.log(`  ✓ ${blogPosts.length} posts encontrados\n`);
    
    for (const post of blogPosts) {
      await savePostAsMarkdown(post, 'blog');
    }
  } else {
    console.log('  ✗ Categoria "blog" não encontrada');
  }
  
  // Buscar categoria de cases
  console.log('\n📁 Buscando cases...');
  let casesCategory = await getCategoryBySlug('cases');
  if (!casesCategory) {
    casesCategory = await getCategoryBySlug('case');
  }
  
  if (casesCategory) {
    console.log(`  ✓ Categoria de cases encontrada (ID: ${casesCategory.id})`);
    const casesPosts = await fetchPostsByCategory(casesCategory.id);
    console.log(`  ✓ ${casesPosts.length} cases encontrados\n`);
    
    for (const post of casesPosts) {
      await savePostAsMarkdown(post, 'cases');
    }
  } else {
    console.log('  ✗ Categoria de cases não encontrada');
  }
  
  console.log('\n✅ Migração concluída!');
  console.log(`\nArquivos salvos em:`);
  console.log(`  - Blog: ${BLOG_DIR}`);
  console.log(`  - Cases: ${CASES_DIR}`);
  console.log(`  - Imagens: ${IMAGES_DIR}`);
}

main().catch(console.error);
