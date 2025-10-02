import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";

const Migracao = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#3893af]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-[700px] h-[700px] bg-[#3893af]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-24 lg:py-28 pt-32 md:pt-36">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent text-center">
              Migração Cloud
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-center">
              Migração segura e eficiente para a nuvem
            </p>
          </div>
        </div>
      </section>

      <main className="bg-gradient-to-b from-background via-background/95 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card rounded-2xl p-12 shadow-lg border border-border/20">
              <h2 className="text-2xl font-bold text-[#3893af] mb-4">Migração Cloud</h2>
              <p className="text-muted-foreground">Conteúdo em desenvolvimento</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Migracao;
