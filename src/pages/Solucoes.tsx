import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";

const Solucoes = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        {/* Background splashes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-60 md:w-80 h-60 md:h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-24 lg:py-28 pt-32 md:pt-36">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent text-center">
              Soluções
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-center">
              Conheça nossas soluções tecnológicas inovadoras para transformar seu negócio
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <main className="bg-gradient-to-b from-background via-background/95 to-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card rounded-2xl p-12 shadow-lg border border-border/20">
              <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <div className="w-10 h-10 bg-primary rounded"></div>
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Página em Desenvolvimento
              </h2>
              <p className="text-muted-foreground">
                Esta página está sendo desenvolvida. Em breve você encontrará aqui todas as informações sobre nossas soluções tecnológicas.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Solucoes;