import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";

const Solucoes = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-white">
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

      {/* Pilares Section */}
      <section className="bg-gradient-to-b from-background via-background/95 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Pilares</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estruturamos nossas soluções em três pilares fundamentais para transformação digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Cloud Pillar */}
            <a href="/solucoes/cloud" className="group">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="w-16 h-16 mb-6 bg-[#3893af]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-[#3893af] rounded"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#3893af]">Cloud</h3>
                <p className="text-muted-foreground">
                  Soluções completas em nuvem para migração, otimização e gestão de infraestrutura cloud.
                </p>
              </div>
            </a>

            {/* Dados Pillar */}
            <a href="/solucoes/dados" className="group">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="w-16 h-16 mb-6 bg-[#f78504]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-[#f78504] rounded"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#f78504]">Dados e IA</h3>
                <p className="text-muted-foreground">
                  Arquitetura de dados, inteligência artificial e machine learning para insights estratégicos.
                </p>
              </div>
            </a>

            {/* Cybersecurity Pillar */}
            <a href="/solucoes/cybersecurity" className="group">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="w-16 h-16 mb-6 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Cybersecurity</h3>
                <p className="text-muted-foreground">
                  Proteção completa com landing zones, GAAS e assessments de segurança avançados.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Portfólio Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Todas as Soluções</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça nosso portfólio completo de soluções tecnológicas
            </p>
          </div>

          {/* Cloud Solutions */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-[#3893af] text-center">Cloud</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <a href="/solucoes/cloud/migracao" className="group">
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border/20 hover:border-[#3893af]/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <h4 className="text-lg font-bold mb-2 text-[#3893af]">Migração</h4>
                  <p className="text-sm text-muted-foreground">Migração segura para a nuvem</p>
                </div>
              </a>
              <a href="/solucoes/cloud/finops" className="group">
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border/20 hover:border-[#3893af]/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <h4 className="text-lg font-bold mb-2 text-[#3893af]">FinOps</h4>
                  <p className="text-sm text-muted-foreground">Otimização de custos</p>
                </div>
              </a>
              <a href="/solucoes/cloud/devops" className="group">
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border/20 hover:border-[#3893af]/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <h4 className="text-lg font-bold mb-2 text-[#3893af]">DevOps</h4>
                  <p className="text-sm text-muted-foreground">Automação e CI/CD</p>
                </div>
              </a>
              <a href="/solucoes/cloud/arquitetura" className="group">
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border/20 hover:border-[#3893af]/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <h4 className="text-lg font-bold mb-2 text-[#3893af]">Arquitetura</h4>
                  <p className="text-sm text-muted-foreground">Design escalável</p>
                </div>
              </a>
            </div>
          </div>

          {/* Cybersecurity Solutions */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-primary text-center">Cybersecurity</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <a href="/solucoes/cybersecurity/landing-zone" className="group">
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <h4 className="text-lg font-bold mb-2 text-primary">Landing Zone</h4>
                  <p className="text-sm text-muted-foreground">Ambientes seguros</p>
                </div>
              </a>
              <a href="/solucoes/cybersecurity/gaas" className="group">
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <h4 className="text-lg font-bold mb-2 text-primary">GAAS</h4>
                  <p className="text-sm text-muted-foreground">Governança as a Service</p>
                </div>
              </a>
              <a href="/solucoes/cybersecurity/assessment" className="group">
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <h4 className="text-lg font-bold mb-2 text-primary">Assessment</h4>
                  <p className="text-sm text-muted-foreground">Avaliação de segurança</p>
                </div>
              </a>
            </div>
          </div>

          {/* Data & AI Solutions */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#f78504] text-center">Dados e IA</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              <a href="/solucoes/dados/arquitetura" className="group">
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border/20 hover:border-[#f78504]/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <h4 className="text-lg font-bold mb-2 text-[#f78504]">Arquitetura</h4>
                  <p className="text-sm text-muted-foreground">Estruturas de dados</p>
                </div>
              </a>
              <a href="/solucoes/dados/pilot-ai" className="group">
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border/20 hover:border-[#f78504]/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <h4 className="text-lg font-bold mb-2 text-[#f78504]">Pilot AI</h4>
                  <p className="text-sm text-muted-foreground">Projetos piloto de IA</p>
                </div>
              </a>
              <a href="/solucoes/dados/lya" className="group">
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border/20 hover:border-[#f78504]/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <h4 className="text-lg font-bold mb-2 text-[#f78504]">LYA</h4>
                  <p className="text-sm text-muted-foreground">RH com AI</p>
                </div>
              </a>
              <a href="/solucoes/dados/monalisa" className="group">
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border/20 hover:border-[#f78504]/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <h4 className="text-lg font-bold mb-2 text-[#f78504]">MonaLisa</h4>
                  <p className="text-sm text-muted-foreground">Prefeitura AI</p>
                </div>
              </a>
              <a href="/solucoes/dados/clara" className="group">
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border/20 hover:border-[#f78504]/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <h4 className="text-lg font-bold mb-2 text-[#f78504]">CLARA</h4>
                  <p className="text-sm text-muted-foreground">Clínica AI</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solucoes;