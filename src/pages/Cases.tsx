import React from 'react';
import { WordPressPostsList } from '@/components/wordpress/WordPressPostsList';
import { Briefcase } from 'lucide-react';
import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";

const Cases = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader />
      
      {/* Modern Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col overflow-hidden bg-gradient-to-b from-white via-white to-white">
        {/* Background Splashes - Similar to Home */}
        <div className="absolute inset-0">
          {/* Large Blue splash - top right */}
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#3893af]/20 rounded-full blur-3xl animate-pulse"></div>
          
          {/* Large Orange splash - bottom left */}
          <div className="absolute -bottom-32 -left-32 w-[700px] h-[700px] bg-[#f78504]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Medium accent splashes */}
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#3893af]/15 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-[450px] h-[450px] bg-[#f78504]/15 rounded-full blur-2xl"></div>
          
          {/* Seamless gradient transition to white */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-white/40 to-white"></div>
        </div>

        <div className="flex-1 flex items-center relative z-10 pt-32 pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              {/* Title with High Contrast */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                <span className="text-gray-900">Cases de Transformação </span>
                <span style={{ color: '#3893af' }}>Digital</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                Descubra como revolucionamos negócios através de soluções tecnológicas inovadoras que geram resultados mensuráveis
              </p>

              {/* Subtle accent elements */}
              <div className="flex items-center justify-center gap-8 opacity-60">
                <div className="w-12 h-1 bg-gradient-to-r from-[#f78504] to-[#3893af] rounded-full"></div>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                  Resultados Comprovados
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-[#3893af] to-[#f78504] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative bg-white">
        {/* Content Background - Seamless transition */}
        <div className="absolute inset-0 bg-white"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-12">
          {/* Section Header */}
          <div className="text-center mb-12">
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
              showSearch={false}
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