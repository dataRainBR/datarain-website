import { WORDPRESS_CONFIG as CONFIG } from '@/config/wordpress.config';

// Configuração para integração com WordPress tradicional
export const WORDPRESS_CONFIG = {
  // URL base do seu WordPress (ex: http://localhost/wordpress ou https://seusite.com)
  BASE_URL: CONFIG.BASE_URL,
  
  // Endpoint da API REST do WordPress
  API_ENDPOINT: '/wp-json/wp/v2',
  
  // Endpoint para autenticação (se necessário)
  AUTH_ENDPOINT: '/wp-json/jwt-auth/v1/token',
  
  // Configurações padrão para requisições
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
  }
};

// Tipos para os dados do WordPress
export interface WordPressPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  slug: string;
  categories: number[];
  tags: number[];
  author: number;
  link: string;
}

export interface WordPressPage {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  slug: string;
  link: string;
}

export interface WordPressMedia {
  id: number;
  source_url: string;
  alt_text: string;
  caption: {
    rendered: string;
  };
  media_details: {
    sizes: {
      thumbnail?: { source_url: string };
      medium?: { source_url: string };
      large?: { source_url: string };
      full?: { source_url: string };
    };
  };
}

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface WordPressTag {
  id: number;
  name: string;
  slug: string;
  count: number;
}

// Funções utilitárias para WordPress
export const getWordPressUrl = (endpoint: string) => {
  return `${WORDPRESS_CONFIG.BASE_URL}${WORDPRESS_CONFIG.API_ENDPOINT}${endpoint}`;
};

export const getMediaUrl = (mediaId: number) => {
  return `${WORDPRESS_CONFIG.BASE_URL}/wp-json/wp/v2/media/${mediaId}`;
};

export const getFeaturedImageUrl = (mediaId: number, size: 'thumbnail' | 'medium' | 'large' | 'full' = 'medium') => {
  return `${WORDPRESS_CONFIG.BASE_URL}/wp-json/wp/v2/media/${mediaId}`;
};
