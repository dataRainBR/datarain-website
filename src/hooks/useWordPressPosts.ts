import { useQuery } from '@tanstack/react-query';
import { getWordPressUrl, WordPressPost } from '@/lib/wordpress';

interface UseWordPressPostsParams {
  /**
   * Quantidade total de posts que queremos trazer da API,
   * independente da quantidade por página que o WordPress retorna.
   */
  totalPosts?: number;
  /** Termo de busca a ser aplicado na API do WordPress */
  search?: string;
  /**
   * IDs das categorias que devem ser filtradas na API.
   * Ex.: categoria "blog" e categoria "case" possuem IDs diferentes.
   */
  categories?: number[];
}

/**
 * Hook responsável por buscar posts do WordPress, respeitando:
 * - Paginação da API (por padrão o WP retorna 10 por página)
 * - Filtro por categorias (para separar Blog x Cases)
 * - Filtro por termo de busca
 */
export const useWordPressPosts = (options: UseWordPressPostsParams = {}) => {
  const {
    totalPosts = 20,
    search,
    categories,
  } = options;

  // WordPress retorna no máximo 10 posts por página por padrão.
  // Aqui calculamos quantas páginas precisamos buscar para atingir o total desejado.
  const perPage = 10;
  const pagesNeeded = Math.ceil(totalPosts / perPage);

  return useQuery({
    queryKey: ['wordpress-posts-multi', totalPosts, search, categories],
    queryFn: async () => {
      // Array com os números das páginas que vamos buscar
      const pageNumbers = Array.from({ length: pagesNeeded }, (_, i) => i + 1);

      // Buscar todas as páginas em paralelo
      const fetchPromises = pageNumbers.map(async (page) => {
        const params = new URLSearchParams();
        params.append('per_page', perPage.toString());
        params.append('page', page.toString());

        if (search) {
          params.append('search', search);
        }

        // Filtro por categorias (ex.: apenas "blog" ou apenas "cases")
        if (categories && categories.length > 0) {
          params.append('categories', categories.join(','));
        }

        const response = await fetch(getWordPressUrl(`/posts?${params.toString()}`));
        if (!response.ok) {
          console.error(`Error fetching page ${page}`);
          return [];
        }
        return response.json() as Promise<WordPressPost[]>;
      });

      // Espera todas as páginas carregarem
      const results = await Promise.all(fetchPromises);

      // Junta todos os posts em um único array
      const allPosts = results.flat();

      // Remove duplicados por ID (por segurança)
      const uniquePosts = allPosts.filter(
        (post, index, self) => index === self.findIndex((p) => p.id === post.id),
      );

      // Retorna apenas a quantidade desejada
      return uniquePosts.slice(0, totalPosts);
    },
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
};
