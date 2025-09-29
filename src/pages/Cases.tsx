import React from 'react';
import { WordPressPostsList } from '@/components/wordpress/WordPressPostsList';
import { Briefcase, Sparkles, TrendingUp } from 'lucide-react';
import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";

const Cases = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader />
      
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary"></div>
        
        {/* Animated Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center text-white">
          <div className="max-w-5xl mx-auto">
            {/* Icon and Badge */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Casos de Sucesso</span>
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Transformações
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-accent/90 to-white bg-clip-text text-transparent">
                Digitais Reais
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
              Descubra como revolucionamos negócios através de soluções tecnológicas inovadoras que geram resultados mensuráveis
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="h-6 w-6 text-accent" />
                  <span className="text-3xl font-bold">50+</span>
                </div>
                <p className="text-white/70 text-sm">Projetos Entregues</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles className="h-6 w-6 text-accent" />
                  <span className="text-3xl font-bold">98%</span>
                </div>
                <p className="text-white/70 text-sm">Taxa de Sucesso</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Briefcase className="h-6 w-6 text-accent" />
                  <span className="text-3xl font-bold">5+</span>
                </div>
                <p className="text-white/70 text-sm">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative">
        {/* Content Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Nossos Cases
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada projeto conta uma história única de transformação e inovação
            </p>
          </div>

          {/* WordPress Posts List */}
          <div className="bg-background/80 backdrop-blur-sm rounded-3xl border border-border/50 shadow-lg p-8">
            <WordPressPostsList
              postsPerPage={9}
              showSearch={true}
              showFilters={false}
              tagSlug="cases"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cases;