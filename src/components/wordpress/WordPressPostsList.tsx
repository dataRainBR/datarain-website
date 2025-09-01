import React, { useState } from 'react';
import { WordPressPostCard } from './WordPressPostCard';
import { useWordPressPosts } from '@/hooks/useWordPress';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Search, Filter } from 'lucide-react';
import { WordPressPost } from '@/lib/wordpress';

interface WordPressPostsListProps {
  postsPerPage?: number;
  showSearch?: boolean;
  showFilters?: boolean;
  categoryFilter?: number;
  tagFilter?: number;
}

export const WordPressPostsList: React.FC<WordPressPostsListProps> = ({
  postsPerPage = 6,
  showSearch = true,
  showFilters = true,
  categoryFilter,
  tagFilter,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>(categoryFilter);
  const [selectedTag, setSelectedTag] = useState<number | undefined>(tagFilter);

  const { data: posts, isLoading, error, isFetching } = useWordPressPosts({
    per_page: postsPerPage,
    page: currentPage,
    category: selectedCategory,
    tag: selectedTag,
    search: searchTerm || undefined,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value === "all" ? undefined : parseInt(value));
    setCurrentPage(1);
  };

  const handleTagChange = (value: string) => {
    setSelectedTag(value === "all" ? undefined : parseInt(value));
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSelectedCategory(undefined);
    setSelectedTag(undefined);
    setSearchTerm('');
    setCurrentPage(1);
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
      {/* Filtros e Busca */}
      {(showSearch || showFilters) && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filtros e Busca
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Busca */}
            {showSearch && (
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
            )}

            {/* Filtros */}
            {showFilters && (
              <div className="flex gap-4 flex-wrap">
                <div className="flex-1 min-w-[200px]">
                  <Select value={selectedCategory?.toString() || "all"} onValueChange={handleCategoryChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Filtrar por categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas as categorias</SelectItem>
                      {/* Aqui você pode adicionar as categorias disponíveis */}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex-1 min-w-[200px]">
                  <Select value={selectedTag?.toString() || "all"} onValueChange={handleTagChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Filtrar por tag" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas as tags</SelectItem>
                      {/* Aqui você pode adicionar as tags disponíveis */}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleClearFilters}
                >
                  Limpar filtros
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Loading */}
      {isLoading && (
        <div className="flex justify-center p-8">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      )}

      {/* Posts */}
      {posts && posts.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <WordPressPostCard
                key={post.id}
                post={post}
                showExcerpt={true}
                showCategories={true}
                showTags={false}
              />
            ))}
          </div>

          {/* Paginação */}
          <div className="flex justify-center gap-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              Anterior
            </Button>
            
            <span className="flex items-center px-4 py-2 text-sm">
              Página {currentPage}
            </span>
            
            <Button
              variant="outline"
              onClick={() => setCurrentPage(prev => prev + 1)}
              disabled={posts.length < postsPerPage}
            >
              Próxima
            </Button>
          </div>
        </>
      )}

      {/* Sem posts */}
      {posts && posts.length === 0 && !isLoading && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">
              Nenhum post encontrado com os filtros atuais.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Indicador de carregamento para paginação */}
      {isFetching && !isLoading && (
        <div className="flex justify-center p-4">
          <Loader2 className="h-6 w-6 animate-spin" />
        </div>
      )}
    </div>
  );
};
