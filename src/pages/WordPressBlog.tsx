import React, { useState } from 'react';
import { MarkdownPostsList } from '@/components/markdown/MarkdownPostsList';
import { getAllBlogPosts } from '@/lib/markdown';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Search, TrendingUp, Clock, Users, ArrowRight } from 'lucide-react';
import UniversalHeader from '@/components/layout/UniversalHeader';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';

const WordPressBlog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSearch, setActiveSearch] = useState('');
  
  // Carregar todos os posts do blog
  const blogPosts = getAllBlogPosts();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveSearch(searchTerm);
  };

  const blogStats = [
    { icon: BookOpen, label: "Artigos", value: "100+" },
    { icon: Users, label: "Leitores", value: "10K+" },
    { icon: Clock, label: "Atualizado", value: "Diário" }
  ];

  const categories = [
    "Cloud Computing",
    "DevOps",
    "Segurança",
    "IA & Machine Learning",
    "Desenvolvimento",
    "Infraestrutura"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog"
        description="Artigos sobre cloud computing, IA, dados, cybersecurity e transformação digital. Insights e tendências do mercado de tecnologia."
        canonical="/blog"
      />
      <UniversalHeader showHeroSection={false} />

      {/* Header com busca e categorias na mesma linha */}
      <section className="relative bg-gradient-to-b from-white via-white to-background pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-8 sm:pb-10 md:pb-12 overflow-hidden">
        {/* Modern Background with Large Splashes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Blue splash - top right */}
          <div className="absolute -top-20 sm:-top-32 -right-20 sm:-right-32 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-[#3893af]/20 rounded-full blur-3xl animate-pulse"></div>
          
          {/* Large Orange splash - bottom left */}
          <div className="absolute -bottom-20 sm:-bottom-32 -left-20 sm:-left-32 w-[350px] sm:w-[500px] md:w-[700px] h-[350px] sm:h-[500px] md:h-[700px] bg-[#f78504]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Blog <span style={{ color: '#f78504' }}>dataRain</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                Insights, tendências e conhecimento sobre tecnologia, cloud computing e transformação digital
              </p>
            </div>

            {/* Search Bar e Categorias na mesma linha */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start lg:items-center">
                {/* Search Bar */}
                <div className="w-full lg:flex-1 lg:max-w-md">
                  <form onSubmit={handleSearch} className="relative">
                    <div className="relative group">
                      <div className="flex items-center gap-2 bg-background border border-border/50 rounded-xl p-2 hover:border-primary/40 transition-all">
                        <Search className="h-4 w-4 text-muted-foreground flex-shrink-0 ml-2" />
                        <Input
                          type="text"
                          placeholder="Buscar artigos..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/70 text-sm h-9 px-2"
                        />
                        <Button
                          type="submit"
                          size="sm"
                          className="bg-primary hover:bg-primary/90 h-9 px-4"
                        >
                          <span className="hidden sm:inline">Buscar</span>
                          <ArrowRight className="h-4 w-4 sm:ml-2" />
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>

                {/* Divider vertical - apenas em desktop */}
                <div className="hidden lg:block w-px h-10 bg-border/50"></div>

                {/* Categorias Populares */}
                <div className="w-full lg:flex-1">
                  <div className="flex items-center gap-3 mb-3 lg:mb-0">
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground whitespace-nowrap">Categorias:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {categories.slice(0, 4).map((category, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="px-3 py-1 text-xs hover:bg-primary/10 hover:border-primary/50 transition-all cursor-pointer whitespace-nowrap"
                        >
                          {category}
                        </Badge>
                      ))}
                      {categories.length > 4 && (
                        <Badge 
                          variant="outline" 
                          className="px-3 py-1 text-xs hover:bg-primary/10 hover:border-primary/50 transition-all cursor-pointer"
                        >
                          +{categories.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Posts Grid */}
      <main className="bg-gradient-to-b from-background via-background/95 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-foreground mb-2">
                Últimos Artigos
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Explore nosso conteúdo mais recente sobre tecnologia e inovação
              </p>
            </div>
            
            <MarkdownPostsList
              posts={blogPosts}
              showSearch={false}
              searchTerm={activeSearch}
              routePrefix="/blog"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WordPressBlog;
