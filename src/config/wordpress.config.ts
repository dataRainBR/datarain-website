// Configurações do WordPress
export const WORDPRESS_CONFIG = {
  // URL base do seu WordPress
  // Exemplos:
  // - Desenvolvimento local: http://localhost/wordpress
  // - Produção: https://seusite.com
  BASE_URL: import.meta.env.VITE_WORDPRESS_URL || 'http://localhost/wordpress',
  
  // Configurações de posts
  POSTS_PER_PAGE: parseInt(import.meta.env.VITE_WORDPRESS_POSTS_PER_PAGE || '6'),
  
  // Configurações de cache
  ENABLE_CACHE: import.meta.env.VITE_WORDPRESS_ENABLE_CACHE !== 'false',
  CACHE_TIME: parseInt(import.meta.env.VITE_WORDPRESS_CACHE_TIME || '300000'), // 5 minutos
  
  // Endpoints da API
  ENDPOINTS: {
    POSTS: '/wp-json/wp/v2/posts',
    PAGES: '/wp-json/wp/v2/pages',
    MEDIA: '/wp-json/wp/v2/media',
    CATEGORIES: '/wp-json/wp/v2/categories',
    TAGS: '/wp-json/wp/v2/tags',
    USERS: '/wp-json/wp/v2/users',
  },
  
  // Configurações de mídia
  MEDIA_SIZES: ['thumbnail', 'medium', 'large', 'full'] as const,
  
  // Configurações de formatação
  DATE_FORMAT: 'dd MMM yyyy',
  LOCALE: 'pt-BR',
};

// Função para verificar se a configuração está válida
export const validateWordPressConfig = () => {
  const issues: string[] = [];
  
  if (!WORDPRESS_CONFIG.BASE_URL) {
    issues.push('VITE_WORDPRESS_URL não está configurado');
  }
  
  if (WORDPRESS_CONFIG.BASE_URL === 'http://localhost/wordpress') {
    issues.push('⚠️ Usando URL padrão localhost. Configure VITE_WORDPRESS_URL no seu .env');
  }
  
  return {
    isValid: issues.length === 0,
    issues,
  };
};

// Função para obter URL completa de um endpoint
export const getWordPressEndpoint = (endpoint: string) => {
  return `${WORDPRESS_CONFIG.BASE_URL}${endpoint}`;
};

// Função para obter URL de mídia
export const getMediaUrl = (mediaId: number, size: (typeof WORDPRESS_CONFIG.MEDIA_SIZES)[number] = 'medium') => {
  return `${WORDPRESS_CONFIG.BASE_URL}/wp-json/wp/v2/media/${mediaId}`;
};
