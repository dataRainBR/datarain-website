import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";

const Cloud = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Modern Background with Large Splashes */}
        <div className="absolute inset-0">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#3893af]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-[700px] h-[700px] bg-[#3893af]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#3893af]/15 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-[450px] h-[450px] bg-[#3893af]/10 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-24 lg:py-28 pt-32 md:pt-36">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent text-center">
              Soluções Cloud
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-center">
              Transforme sua infraestrutura com nossas soluções especializadas em nuvem
            </p>
          </div>
        </div>
      </section>

      {/* Portfólio Cloud */}
      <main className="bg-gradient-to-b from-background via-background/95 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções Cloud</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Infraestrutura escalável e otimizada para sua transformação digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Migração */}
            <a href="/solucoes/cloud/migracao" className="group">
              <div className="bg-card rounded-xl p-6 shadow-lg border border-border/20 hover:border-[#3893af]/50 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="w-12 h-12 mb-4 bg-[#3893af]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 bg-[#3893af] rounded"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#3893af]">Migração</h3>
                <p className="text-sm text-muted-foreground">
                  Migração segura e eficiente para a nuvem
                </p>
              </div>
            </a>

            {/* FinOps */}
            <a href="/solucoes/cloud/finops" className="group">
              <div className="bg-card rounded-xl p-6 shadow-lg border border-border/20 hover:border-[#3893af]/50 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="w-12 h-12 mb-4 bg-[#3893af]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 bg-[#3893af] rounded"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#3893af]">FinOps</h3>
                <p className="text-sm text-muted-foreground">
                  Otimização de custos em cloud
                </p>
              </div>
            </a>

            {/* DevOps */}
            <a href="/solucoes/cloud/devops" className="group">
              <div className="bg-card rounded-xl p-6 shadow-lg border border-border/20 hover:border-[#3893af]/50 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="w-12 h-12 mb-4 bg-[#3893af]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 bg-[#3893af] rounded"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#3893af]">DevOps</h3>
                <p className="text-sm text-muted-foreground">
                  Automação e integração contínua
                </p>
              </div>
            </a>

            {/* Arquitetura */}
            <a href="/solucoes/cloud/arquitetura" className="group">
              <div className="bg-card rounded-xl p-6 shadow-lg border border-border/20 hover:border-[#3893af]/50 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="w-12 h-12 mb-4 bg-[#3893af]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 bg-[#3893af] rounded"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#3893af]">Arquitetura</h3>
                <p className="text-sm text-muted-foreground">
                  Design de arquiteturas escaláveis
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

export default Cloud;
