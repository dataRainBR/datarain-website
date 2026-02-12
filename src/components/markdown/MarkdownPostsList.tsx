import React, { useState, useMemo } from 'react';
import { MarkdownPostCard } from './MarkdownPostCard';
import { MarkdownPost, searchPosts, getPostsMetadata } from '@/lib/markdown';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface MarkdownPostsListProps {
  posts: MarkdownPost[];
  routePrefix?: string;
  showSearch?: boolean;
  searchTerm?: string;
  postsPerPage?: number;
}

export const MarkdownPostsList: React.FC<MarkdownPostsListProps> = ({
  posts,
  routePrefix = '/blog',
  showSearch = true,
  searchTerm: externalSearchTerm = '',
  postsPerPage,
}) => {
  const [internalSearchTerm, setInternalSearchTerm] = useState('');
  
  const activeSearchTerm = externalSearchTerm || internalSearchTerm;
  
  const filteredPosts = useMemo(() => {
    const filtered = searchPosts(posts, activeSearchTerm);
    return postsPerPage ? filtered.slice(0, postsPerPage) : filtered;
  }, [posts, activeSearchTerm, postsPerPage]);

  const postsMetadata = useMemo(() => 
    getPostsMetadata(filteredPosts), 
    [filteredPosts]
  );

  return (
    <div className="space-y-8">
      {showSearch && !externalSearchTerm && (
        <div className="max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar posts..."
              value={internalSearchTerm}
              onChange={(e) => setInternalSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      )}

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            Nenhum post encontrado.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {postsMetadata.map((post) => (
            <MarkdownPostCard
              key={post.slug}
              post={post}
              routePrefix={routePrefix}
            />
          ))}
        </div>
      )}
    </div>
  );
};
