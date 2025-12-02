import { useQuery } from '@tanstack/react-query';
import { getWordPressUrl, WordPressPost } from '@/lib/wordpress';

interface UseWordPressPostsParams {
  totalPosts?: number; // How many posts to fetch total
  search?: string;
}

// Simple hook that fetches multiple pages to get the desired number of posts
export const useWordPressPosts = ({ totalPosts = 20, search }: UseWordPressPostsParams = {}) => {
  // WordPress returns max 10 posts per page, calculate pages needed
  const pagesNeeded = Math.ceil(totalPosts / 10);

  return useQuery({
    queryKey: ['wordpress-posts-multi', totalPosts, search],
    queryFn: async () => {
      // Create array of page numbers to fetch
      const pageNumbers = Array.from({ length: pagesNeeded }, (_, i) => i + 1);
      
      // Fetch all pages in parallel
      const fetchPromises = pageNumbers.map(async (page) => {
        const params = new URLSearchParams();
        params.append('per_page', '10');
        params.append('page', page.toString());
        if (search) params.append('search', search);
        
        const response = await fetch(getWordPressUrl(`/posts?${params}`));
        if (!response.ok) {
          console.error(`Error fetching page ${page}`);
          return [];
        }
        return response.json() as Promise<WordPressPost[]>;
      });

      // Wait for all pages to load
      const results = await Promise.all(fetchPromises);
      
      // Combine all posts into a single array
      const allPosts = results.flat();
      
      // Remove duplicates by ID (just in case)
      const uniquePosts = allPosts.filter(
        (post, index, self) => index === self.findIndex(p => p.id === post.id)
      );

      // Return only the requested number of posts
      return uniquePosts.slice(0, totalPosts);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
