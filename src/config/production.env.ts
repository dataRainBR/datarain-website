// Configuração para WordPress em produção (datarain.com.br)
// Copie estas configurações para um arquivo .env na raiz do projeto

export const PRODUCTION_CONFIG = {
  WORDPRESS_URL: 'https://datarain.com.br',
  POSTS_PER_PAGE: 6,
  ENABLE_CACHE: true,
  CACHE_TIME: 300000,
};

// Para usar, crie um arquivo .env na raiz com:
// VITE_WORDPRESS_URL=https://datarain.com.br
