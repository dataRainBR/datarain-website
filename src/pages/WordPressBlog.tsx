import React from 'react';
import { WordPressPostsList } from '@/components/wordpress/WordPressPostsList';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import UniversalHeader from '@/components/layout/UniversalHeader';

const WordPressBlog: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <>
      <UniversalHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        {/* Background splashes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Navigation */}
            <div className="mb-8">
              <Button
                variant="outline"
                onClick={handleGoHome}
                className="mb-6 bg-background/80 backdrop-blur-sm hover:bg-background/90"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao início
              </Button>
            </div>
            
            {/* Title */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <BookOpen className="h-12 w-12 text-primary" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Blog
              </h1>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Descubra artigos, insights e novidades sobre tecnologia, inovação e desenvolvimento
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="bg-gradient-to-b from-background via-background/95 to-background">
        <div className="container mx-auto px-4 py-16">
          {/* Lista de Posts */}
          <WordPressPostsList
            postsPerPage={9}
            showSearch={true}
            showFilters={true}
          />
        </div>
      </main>
    </>
  );
};

export default WordPressBlog;
