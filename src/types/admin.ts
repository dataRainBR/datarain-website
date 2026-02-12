// Tipos para o sistema admin

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'editor';
  createdAt: string;
  lastLogin?: string;
}

export interface ContentBlock {
  id: string;
  type: 'header' | 'title' | 'text' | 'image' | 'quote' | 'code' | 'divider';
  content: string;
  order: number;
  metadata?: {
    imageUrl?: string;
    imageAlt?: string;
    level?: number; // Para headers (h1, h2, h3, etc)
    language?: string; // Para code blocks
    alignment?: 'left' | 'center' | 'right';
  };
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  author: string;
  authorId: string;
  type: 'blog' | 'case';
  status: 'draft' | 'published';
  blocks: ContentBlock[];
  tags: string[];
  categories: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}
