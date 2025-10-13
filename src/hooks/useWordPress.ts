import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { WORDPRESS_CONFIG, getWordPressUrl, WordPressPost, WordPressPage, WordPressMedia, WordPressCategory, WordPressTag } from '@/lib/wordpress';

// Hook para buscar posts do WordPress
export const useWordPressPosts = (params: {
  per_page?: number;
  page?: number;
  category?: number;
  tag?: number;
  search?: string;
} = {}) => {
  const queryString = new URLSearchParams();
  
  if (params.per_page) queryString.append('per_page', params.per_page.toString());
  if (params.page) queryString.append('page', params.page.toString());
  if (params.category) queryString.append('categories', params.category.toString());
  if (params.tag) queryString.append('tags', params.tag.toString());
  if (params.search) queryString.append('search', params.search);

  return useQuery({
    queryKey: ['wordpress-posts', params],
    queryFn: async () => {
      const response = await fetch(getWordPressUrl(`/posts?${queryString}`));
      if (!response.ok) throw new Error('Erro ao buscar posts');
      return response.json() as Promise<WordPressPost[]>;
    },
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
};

// Hook para buscar um post específico
export const useWordPressPost = (id: number | string) => {
  return useQuery({
    queryKey: ['wordpress-post', id],
    queryFn: async () => {
      const response = await fetch(getWordPressUrl(`/posts/${id}`));
      if (!response.ok) throw new Error('Erro ao buscar post');
      return response.json() as Promise<WordPressPost>;
    },
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutos
  });
};

// Hook para buscar páginas do WordPress
export const useWordPressPages = (params: {
  per_page?: number;
  page?: number;
  search?: string;
} = {}) => {
  const queryString = new URLSearchParams();
  
  if (params.per_page) queryString.append('per_page', params.per_page.toString());
  if (params.page) queryString.append('page', params.page.toString());
  if (params.search) queryString.append('search', params.search);

  return useQuery({
    queryKey: ['wordpress-pages', params],
    queryFn: async () => {
      const response = await fetch(getWordPressUrl(`/pages?${queryString}`));
      if (!response.ok) throw new Error('Erro ao buscar páginas');
      return response.json() as Promise<WordPressPage[]>;
    },
    staleTime: 10 * 60 * 1000, // 10 minutos
  });
};

// Hook para buscar uma página específica
export const useWordPressPage = (id: number | string) => {
  return useQuery({
    queryKey: ['wordpress-page', id],
    queryFn: async () => {
      const response = await fetch(getWordPressUrl(`/pages/${id}`));
      if (!response.ok) throw new Error('Erro ao buscar página');
      return response.json() as Promise<WordPressPage>;
    },
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutos
  });
};

// Hook para buscar mídia do WordPress
export const useWordPressMedia = (id: number) => {
  return useQuery({
    queryKey: ['wordpress-media', id],
    queryFn: async () => {
      const response = await fetch(getWordPressUrl(`/media/${id}`));
      if (!response.ok) throw new Error('Erro ao buscar mídia');
      return response.json() as Promise<WordPressMedia>;
    },
    enabled: !!id,
    staleTime: 30 * 60 * 1000, // 30 minutos
  });
};

// Hook para buscar categorias
export const useWordPressCategories = () => {
  return useQuery({
    queryKey: ['wordpress-categories'],
    queryFn: async () => {
      const response = await fetch(getWordPressUrl('/categories'));
      if (!response.ok) throw new Error('Erro ao buscar categorias');
      return response.json() as Promise<WordPressCategory[]>;
    },
    staleTime: 60 * 60 * 1000, // 1 hora
  });
};

// Hook para buscar tags
export const useWordPressTags = () => {
  return useQuery({
    queryKey: ['wordpress-tags'],
    queryFn: async () => {
      const response = await fetch(getWordPressUrl('/tags'));
      if (!response.ok) throw new Error('Erro ao buscar tags');
      return response.json() as Promise<WordPressTag[]>;
    },
    staleTime: 60 * 60 * 1000, // 1 hora
  });
};

// Hook para buscar posts por slug
export const useWordPressPostBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['wordpress-post-slug', slug],
    queryFn: async () => {
      const response = await fetch(getWordPressUrl(`/posts?slug=${slug}`));
      if (!response.ok) throw new Error('Erro ao buscar post por slug');
      const posts = await response.json() as WordPressPost[];
      return posts[0] || null;
    },
    enabled: !!slug,
    staleTime: 10 * 60 * 1000, // 10 minutos
  });
};

// Hook para buscar página por slug
export const useWordPressPageBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['wordpress-page-slug', slug],
    queryFn: async () => {
      const response = await fetch(getWordPressUrl(`/pages?slug=${slug}`));
      if (!response.ok) throw new Error('Erro ao buscar página por slug');
      const pages = await response.json() as WordPressPage[];
      return pages[0] || null;
    },
    enabled: !!slug,
    staleTime: 10 * 60 * 1000, // 10 minutos
  });
};

// Hook para buscar posts por tag slug com fallback
export const useWordPressPostsByTagSlug = (tagSlug: string, params: {
  per_page?: number;
  page?: number;
  search?: string;
} = {}) => {
  return useQuery({
    queryKey: ['wordpress-posts-tag-slug', tagSlug, params],
    queryFn: async () => {
      try {
        // Primeiro buscar a tag pelo slug
        const tagsResponse = await fetch(getWordPressUrl(`/tags?slug=${tagSlug}`));
        
        if (tagsResponse.ok) {
          const tags = await tagsResponse.json() as WordPressTag[];
          
          if (tags.length > 0) {
            const tagId = tags[0].id;
            
            // Buscar posts por tag ID
            const queryString = new URLSearchParams();
            if (params.per_page) queryString.append('per_page', params.per_page.toString());
            if (params.page) queryString.append('page', params.page.toString());
            if (params.search) queryString.append('search', params.search);
            queryString.append('tags', tagId.toString());
            
            const postsResponse = await fetch(getWordPressUrl(`/posts?${queryString}`));
            if (postsResponse.ok) {
              return postsResponse.json() as Promise<WordPressPost[]>;
            }
          }
        }
        
        // Fallback: buscar todos os posts se a busca por tag falhar
        console.warn(`Falha ao buscar posts por tag "${tagSlug}", usando busca geral como fallback`);
        const queryString = new URLSearchParams();
        if (params.per_page) queryString.append('per_page', params.per_page.toString());
        if (params.page) queryString.append('page', params.page.toString());
        if (params.search) queryString.append('search', params.search);
        
        const fallbackResponse = await fetch(getWordPressUrl(`/posts?${queryString}`));
        if (!fallbackResponse.ok) throw new Error('Erro ao buscar posts');
        return fallbackResponse.json() as Promise<WordPressPost[]>;
        
      } catch (error) {
        // Último fallback: buscar todos os posts
        console.error(`Erro ao buscar posts por tag "${tagSlug}":`, error);
        const queryString = new URLSearchParams();
        if (params.per_page) queryString.append('per_page', params.per_page.toString());
        if (params.page) queryString.append('page', params.page.toString());
        if (params.search) queryString.append('search', params.search);
        
        const fallbackResponse = await fetch(getWordPressUrl(`/posts?${queryString}`));
        if (!fallbackResponse.ok) throw new Error('Erro ao buscar posts');
        return fallbackResponse.json() as Promise<WordPressPost[]>;
      }
    },
    enabled: !!tagSlug,
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
};

// Hook para buscar posts por category slug com fallback
export const useWordPressPostsByCategorySlug = (categorySlug: string, params: {
  per_page?: number;
  page?: number;
  search?: string;
} = {}) => {
  return useQuery({
    queryKey: ['wordpress-posts-category-slug', categorySlug, params],
    queryFn: async () => {
      try {
        // Primeiro buscar a categoria pelo slug
        const categoriesResponse = await fetch(getWordPressUrl(`/categories?slug=${categorySlug}`));
        
        if (categoriesResponse.ok) {
          const categories = await categoriesResponse.json() as WordPressCategory[];
          
          if (categories.length > 0) {
            const categoryId = categories[0].id;
            
            // Buscar posts por category ID
            const queryString = new URLSearchParams();
            if (params.per_page) queryString.append('per_page', params.per_page.toString());
            if (params.page) queryString.append('page', params.page.toString());
            if (params.search) queryString.append('search', params.search);
            queryString.append('categories', categoryId.toString());
            
            const postsResponse = await fetch(getWordPressUrl(`/posts?${queryString}`));
            if (postsResponse.ok) {
              return postsResponse.json() as Promise<WordPressPost[]>;
            }
          }
        }
        
        // Fallback: buscar todos os posts se a busca por categoria falhar
        console.warn(`Falha ao buscar posts por categoria "${categorySlug}", usando busca geral como fallback`);
        const queryString = new URLSearchParams();
        if (params.per_page) queryString.append('per_page', params.per_page.toString());
        if (params.page) queryString.append('page', params.page.toString());
        if (params.search) queryString.append('search', params.search);
        
        const fallbackResponse = await fetch(getWordPressUrl(`/posts?${queryString}`));
        if (!fallbackResponse.ok) throw new Error('Erro ao buscar posts');
        return fallbackResponse.json() as Promise<WordPressPost[]>;
        
      } catch (error) {
        // Último fallback: buscar todos os posts
        console.error(`Erro ao buscar posts por categoria "${categorySlug}":`, error);
        const queryString = new URLSearchParams();
        if (params.per_page) queryString.append('per_page', params.per_page.toString());
        if (params.page) queryString.append('page', params.page.toString());
        if (params.search) queryString.append('search', params.search);
        
        const fallbackResponse = await fetch(getWordPressUrl(`/posts?${queryString}`));
        if (!fallbackResponse.ok) throw new Error('Erro ao buscar posts');
        return fallbackResponse.json() as Promise<WordPressPost[]>;
      }
    },
    enabled: !!categorySlug,
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
};
