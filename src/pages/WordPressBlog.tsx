import React, { useState } from 'react';
import { WordPressPostsList } from '@/components/wordpress/WordPressPostsList';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Search, TrendingUp, Clock, Users, ArrowRight } from 'lucide-react';
import UniversalHeader from '@/components/layout/UniversalHeader';
import Footer from '@/components/Footer';

const WordPressBlog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSearch, setActiveSearch] = useState('');

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
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Modern Background with Large Splashes */}
        <div className="absolute inset-0">
          {/* Large Blue splash - top right */}
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#3893af]/20 rounded-full blur-3xl animate-pulse"></div>
          
          {/* Large Orange splash - bottom left */}
          <div className="absolute -bottom-32 -left-32 w-[700px] h-[700px] bg-[#f78504]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Medium accent splashes */}
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#3893af]/15 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-[450px] h-[450px] bg-[#f78504]/15 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-24 lg:py-28 pt-40 md:pt-44 lg:pt-48">
          <div className="max-w-5xl mx-auto">
            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Blog <span style={{ color: '#f78504' }}>dataRain</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Insights, tendências e conhecimento sobre tecnologia, cloud computing e transformação digital
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-10">
              <form onSubmit={handleSearch} className="relative">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-2 shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 flex items-center gap-3 px-4 py-3">
                        <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        <Input
                          type="text"
                          placeholder="Pesquisar artigos, tecnologias, tutoriais..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/70 text-base"
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="mr-1 bg-primary hover:bg-primary/90 gap-2"
                      >
                        Buscar
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gradient-to-b from-background via-background/95 to-background py-6 border-b border-border/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Categorias Populares</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary/50 transition-all cursor-pointer"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Posts Grid */}
      <main className="bg-gradient-to-b from-background via-background/95 to-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Últimos Artigos
              </h2>
              <p className="text-muted-foreground">
                Explore nosso conteúdo mais recente sobre tecnologia e inovação
              </p>
            </div>
            
            <WordPressPostsList
              postsPerPage={20}
              showSearch={false}
              showFilters={false}
              searchTerm={activeSearch}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WordPressBlog;
