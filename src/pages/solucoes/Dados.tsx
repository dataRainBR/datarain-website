import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";

const Dados = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Modern Background with Large Splashes */}
        <div className="absolute inset-0">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#f78504]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-[700px] h-[700px] bg-[#f78504]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#f78504]/15 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-[450px] h-[450px] bg-[#f78504]/10 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-24 lg:py-28 pt-32 md:pt-36">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent text-center">
              Dados e Inteligência Artificial
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-center">
              Arquitetura de dados e soluções de IA para transformação digital inteligente
            </p>
          </div>
        </div>
      </section>

      {/* Portfólio Dados e IA */}
      <main className="bg-gradient-to-b from-background via-background/95 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções de Dados e IA</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Inteligência artificial e arquitetura de dados para decisões estratégicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Arquitetura */}
            <a href="/solucoes/dados/arquitetura" className="group">
              <div className="bg-card rounded-xl p-6 shadow-lg border border-border/20 hover:border-[#f78504]/50 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="w-12 h-12 mb-4 bg-[#f78504]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 bg-[#f78504] rounded"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#f78504]">Arquitetura</h3>
                <p className="text-sm text-muted-foreground">
                  Estruturas de dados robustas e escaláveis
                </p>
              </div>
            </a>

            {/* Pilot AI */}
            <a href="/solucoes/dados/pilot-ai" className="group">
              <div className="bg-card rounded-xl p-6 shadow-lg border border-border/20 hover:border-[#f78504]/50 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="w-12 h-12 mb-4 bg-[#f78504]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 bg-[#f78504] rounded"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#f78504]">Pilot AI</h3>
                <p className="text-sm text-muted-foreground">
                  Projetos piloto de IA
                </p>
              </div>
            </a>

            {/* LYA */}
            <a href="/solucoes/dados/lya" className="group">
              <div className="bg-card rounded-xl p-6 shadow-lg border border-border/20 hover:border-[#f78504]/50 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="w-12 h-12 mb-4 bg-[#f78504]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 bg-[#f78504] rounded"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#f78504]">LYA</h3>
                <p className="text-sm text-muted-foreground">
                  RH com AI
                </p>
              </div>
            </a>

            {/* MonaLisa */}
            <a href="/solucoes/dados/monalisa" className="group">
              <div className="bg-card rounded-xl p-6 shadow-lg border border-border/20 hover:border-[#f78504]/50 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="w-12 h-12 mb-4 bg-[#f78504]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 bg-[#f78504] rounded"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#f78504]">MonaLisa</h3>
                <p className="text-sm text-muted-foreground">
                  Prefeitura AI
                </p>
              </div>
            </a>

            {/* CLARA */}
            <a href="/solucoes/dados/clara" className="group">
              <div className="bg-card rounded-xl p-6 shadow-lg border border-border/20 hover:border-[#f78504]/50 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="w-12 h-12 mb-4 bg-[#f78504]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 bg-[#f78504] rounded"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#f78504]">CLARA</h3>
                <p className="text-sm text-muted-foreground">
                  Clínica AI
                </p>
              </div>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dados;
