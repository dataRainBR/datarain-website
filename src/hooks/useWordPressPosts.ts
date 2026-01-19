import { useQuery } from '@tanstack/react-query';
import { getWordPressUrl, WordPressPost } from '@/lib/wordpress';
import { getCategoryIdBySlug } from '@/hooks/useWordPress';
import { sanitizeSearchTerm } from '@/lib/sanitize';

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
   * 
   * NOTA: Se `categorySlug` for fornecido, ele terá prioridade sobre `categories`.
   */
  categories?: number[];
  /**
   * Slug da categoria (ex.: "blog", "cases", "case").
   * O hook buscará automaticamente o ID da categoria pelo slug.
   * 
   * Útil quando você não sabe o ID da categoria, mas sabe o slug.
   * Tem prioridade sobre `categories` se ambos forem fornecidos.
   */
  categorySlug?: string;
  /**
   * Quando true, ignora o totalPosts e busca **todos** os posts
   * disponíveis na API (usando o header X-WP-Total para descobrir
   * quantos posts existem).
   */
  fetchAll?: boolean;
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
    categorySlug,
    fetchAll = false,
  } = options;

  // WordPress retorna no máximo 10 posts por página por padrão.
  // Aqui calculamos quantas páginas precisamos buscar para atingir o total desejado.
  const perPage = 10;
  const pagesNeeded = Math.ceil(totalPosts / perPage);

  return useQuery({
    queryKey: ['wordpress-posts-multi', totalPosts, search, categories, categorySlug, fetchAll],
    queryFn: async () => {
      // Se categorySlug foi fornecido, buscar o ID automaticamente
      let resolvedCategoryIds: number[] | undefined = categories;
      
      if (categorySlug) {
        const categoryId = await getCategoryIdBySlug(categorySlug);
        if (categoryId) {
          resolvedCategoryIds = [categoryId];
        } else {
          console.warn(`Categoria com slug "${categorySlug}" não encontrada no WordPress`);
          resolvedCategoryIds = undefined;
        }
      }
      // Se o modo for "buscar todos", usamos o header X-WP-Total
      // para descobrir quantos posts existem no WordPress.
      if (fetchAll) {
        const baseParams = new URLSearchParams();
        baseParams.append('per_page', '1');
        baseParams.append('page', '1');

        if (search) {
          const sanitizedSearch = sanitizeSearchTerm(search);
          if (sanitizedSearch) {
            baseParams.append('search', sanitizedSearch);
          }
        }

        if (resolvedCategoryIds && resolvedCategoryIds.length > 0) {
          baseParams.append('categories', resolvedCategoryIds.join(','));
        }

        const firstResponse = await fetch(getWordPressUrl(`/posts?${baseParams.toString()}`));
        if (!firstResponse.ok) {
          console.error('Error fetching first page to determine total posts');
          return [];
        }

        const totalHeader = firstResponse.headers.get('X-WP-Total');
        const totalAvailable = totalHeader ? parseInt(totalHeader, 10) : 0;

        // Se não houver posts, retorna vazio.
        if (!totalAvailable || Number.isNaN(totalAvailable)) {
          return [];
        }

        // Calcula quantas páginas precisamos buscar com per_page fixo.
        const totalPages = Math.ceil(totalAvailable / perPage);

        const pageNumbersAll = Array.from({ length: totalPages }, (_, i) => i + 1);

        const fetchAllPromises = pageNumbersAll.map(async (page) => {
          const params = new URLSearchParams();
          params.append('per_page', perPage.toString());
          params.append('page', page.toString());

          if (search) {
            const sanitizedSearch = sanitizeSearchTerm(search);
            if (sanitizedSearch) {
              params.append('search', sanitizedSearch);
            }
          }

          if (resolvedCategoryIds && resolvedCategoryIds.length > 0) {
            params.append('categories', resolvedCategoryIds.join(','));
          }

          const response = await fetch(getWordPressUrl(`/posts?${params.toString()}`));
          if (!response.ok) {
            console.error(`Error fetching page ${page}`);
            return [];
          }

          return response.json() as Promise<WordPressPost[]>;
        });

        const allResults = await Promise.all(fetchAllPromises);
        const allPosts = allResults.flat();

        const uniquePosts = allPosts.filter(
          (post, index, self) => index === self.findIndex((p) => p.id === post.id),
        );

        return uniquePosts;
      }

      // Modo "limitado": busca apenas o total solicitado.
      const pageNumbers = Array.from({ length: pagesNeeded }, (_, i) => i + 1);

      // Buscar todas as páginas em paralelo
      const fetchPromises = pageNumbers.map(async (page) => {
        const params = new URLSearchParams();
        params.append('per_page', perPage.toString());
        params.append('page', page.toString());

        if (search) {
          const sanitizedSearch = sanitizeSearchTerm(search);
          if (sanitizedSearch) {
            params.append('search', sanitizedSearch);
          }
        }

        // Filtro por categorias (ex.: apenas "blog" ou apenas "cases")
        if (resolvedCategoryIds && resolvedCategoryIds.length > 0) {
          params.append('categories', resolvedCategoryIds.join(','));
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
