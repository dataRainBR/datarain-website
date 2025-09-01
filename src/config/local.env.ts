// Configuração local para WordPress
// Copie estas configurações para um arquivo .env na raiz do projeto

export const LOCAL_CONFIG = {
  WORDPRESS_URL: 'http://localhost/wordpress',
  POSTS_PER_PAGE: 6,
  ENABLE_CACHE: true,
  CACHE_TIME: 300000,
};

// Para usar, crie um arquivo .env na raiz com:
// VITE_WORDPRESS_URL=http://localhost/wordpress
