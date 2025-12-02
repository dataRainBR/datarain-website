import React, { useState } from "react";
import { WordPressPostCard } from "./WordPressPostCard";
import { useWordPressPosts } from "@/hooks/useWordPressPosts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Search, Filter } from "lucide-react";

interface WordPressPostsListProps {
  postsPerPage?: number;
  showSearch?: boolean;
  showFilters?: boolean;
  searchTerm?: string;
}

export const WordPressPostsList: React.FC<WordPressPostsListProps> = ({
  postsPerPage = 20,
  showSearch = true,
  showFilters = false,
  searchTerm: externalSearchTerm,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const activeSearchTerm = externalSearchTerm || searchTerm;

  // Simple hook that fetches all posts at once
  const { data: posts, isLoading, error } = useWordPressPosts({
    totalPosts: postsPerPage,
    search: activeSearchTerm || undefined,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is reactive, just updating state triggers refetch
  };

  if (error) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-destructive">Erro ao carregar posts: {error.message}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Search */}
      {showSearch && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Busca
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                placeholder="Buscar posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="sm">
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Loading */}
      {isLoading && (
        <div className="flex justify-center p-8">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      )}

      {/* Posts Grid */}
      {posts && posts.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <WordPressPostCard
                key={post.id}
                post={post}
                showExcerpt={true}
                showCategories={false}
                showTags={false}
              />
            ))}
          </div>

          {/* Post counter */}
          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground">
              Mostrando {posts.length} {posts.length === 1 ? "post" : "posts"}
            </p>
          </div>
        </>
      )}

      {/* No posts */}
      {posts && posts.length === 0 && !isLoading && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">Nenhum post encontrado.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
