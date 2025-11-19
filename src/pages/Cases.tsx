import React from "react";
import { WordPressPostsList } from "@/components/wordpress/WordPressPostsList";
import { Briefcase } from "lucide-react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";

const Cases = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader />

      {/* Modern Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex flex-col overflow-hidden">
        {/* Modern Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="absolute -top-20 -right-20 sm:-top-32 sm:-right-32 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 sm:-bottom-32 sm:-left-32 w-[350px] sm:w-[500px] md:w-[700px] h-[350px] sm:h-[500px] md:h-[700px] bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] md:w-[500px] h-[200px] sm:h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-2xl"></div>
        </div>

        <div className="flex-1 flex items-center relative z-10 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <div className="backdrop-blur-sm bg-card/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-border/20 shadow-2xl">
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-semibold mb-4">
                  Portfólio
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-primary">
                  Cases de Transformação Digital
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6">
                  Descubra como revolucionamos negócios através de soluções tecnológicas inovadoras que geram resultados mensuráveis
                </p>
                <div className="flex items-center justify-center gap-4 md:gap-6 opacity-70">
                  <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                  <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-medium">
                    Resultados Comprovados
                  </p>
                  <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative bg-background py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5"></div>

        <div className="relative z-10 container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 rounded-full text-accent text-xs sm:text-sm font-semibold mb-4">
              Explore
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
              Nossos Cases
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cada projeto conta uma história única de transformação e inovação
            </p>
          </div>

          {/* WordPress Posts List */}
          <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border/20 shadow-xl p-6 sm:p-8 md:p-10">
            <WordPressPostsList postsPerPage={20} showSearch={false} showFilters={true} categoryFilter="cases" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cases;
