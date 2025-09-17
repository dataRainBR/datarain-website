import React, { useState } from 'react';
import { WordPressPostsList } from '@/components/wordpress/WordPressPostsList';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BookOpen, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import UniversalHeader from '@/components/layout/UniversalHeader';

const WordPressBlog: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSearch, setActiveSearch] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveSearch(searchTerm);
  };

  return (
    <>
      <UniversalHeader />
      
      {/* Hero Section with Search */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        {/* Background splashes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <BookOpen className="h-12 w-12 text-primary" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Blog
              </h1>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Descubra artigos, insights e novidades sobre tecnologia, inovação e desenvolvimento
            </p>

            {/* Search Bar with Glassmorphism */}
            <div className="max-w-lg mx-auto">
              <form onSubmit={handleSearch} className="relative">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative bg-background/80 backdrop-blur-xl border border-white/20 rounded-xl p-1 shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 flex items-center gap-3 px-4 py-3">
                        <Search className="h-5 w-5 text-muted-foreground" />
                        <Input
                          type="text"
                          placeholder="Pesquisar artigos..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/70"
                        />
                      </div>
                      <Button
                        type="submit"
                        size="sm"
                        className="mr-1 bg-primary/90 hover:bg-primary"
                      >
                        Buscar
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="bg-gradient-to-b from-background via-background/95 to-background">
        <div className="container mx-auto px-4 py-16">
          {/* Lista de Posts */}
          <WordPressPostsList
            postsPerPage={9}
            showSearch={false}
            showFilters={false}
            tagSlug="blog"
            searchTerm={activeSearch}
          />
        </div>
      </main>
    </>
  );
};

export default WordPressBlog;
