import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import SolutionCard from "@/components/SolutionCard";

const Solucoes = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3893af]/5 via-[#f78504]/5 to-background">
          <div className="absolute -top-32 -right-32 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#3893af]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-[#f78504]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primary/15 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-24 lg:py-28 pt-40 sm:pt-44 md:pt-48 lg:pt-52">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-foreground">
              Soluções que <br />
              Transformam Negócios
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              GenAI e Dados, Cybersecurity e Cloud integrados em um ecossistema completo para sua transformação digital
            </p>
          </div>
        </div>
      </section>

      {/* Pilares Section */}
      <section className="bg-gradient-to-b from-background via-card/20 to-background py-16 sm:py-20 md:py-24 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        </div>
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              Pilares
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Três Pilares, Uma Visão</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Integramos GenAI e Dados, Cybersecurity e Cloud para entregar transformação digital de ponta a ponta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* GenAI e Dados Pillar - Azul #3893af */}
            <a href="/solucoes/dados" className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-[#3893af]/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 block">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3893af]/20 via-[#3893af]/10 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                <svg className="absolute right-0 top-0 w-32 h-32 text-[#3893af]/10" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="80" cy="20" r="8" />
                  <circle cx="60" cy="35" r="5" />
                  <circle cx="85" cy="45" r="4" />
                  <path d="M80 20 L60 35 L85 45" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
                </svg>
              </div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#3893af]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative z-10 p-8 md:p-10">
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#3893af] to-sky-500 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="w-16 h-16 bg-gradient-to-br from-[#3893af] to-sky-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-[#3893af] transition-colors duration-300">GenAI e Dados</h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Arquitetura de dados e IA aplicada. De data lakes a soluções verticais inteligentes.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 rounded-full bg-[#3893af]/10 text-[#3893af]">Data Architecture</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#3893af]/10 text-[#3893af]">Pilot AI</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#3893af]/10 text-[#3893af]">ML/AI</span>
                </div>
                <div className="flex items-center gap-2 text-[#3893af] font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>Explorar soluções</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Cybersecurity Pillar - Vermelho #e63946 */}
            <a href="/solucoes/cybersecurity" className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-[#e63946]/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 block">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e63946]/20 via-rose-500/10 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                <svg className="absolute right-0 top-0 w-32 h-32 text-[#e63946]/10" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 10 L70 25 L70 50 L50 65 L30 50 L30 25 Z" strokeWidth="2" stroke="currentColor" fill="none" />
                  <path d="M50 20 L60 28 L60 45 L50 53 L40 45 L40 28 Z" />
                </svg>
              </div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#e63946]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative z-10 p-8 md:p-10">
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#e63946] to-rose-500 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="w-16 h-16 bg-gradient-to-br from-[#e63946] to-rose-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-[#e63946] transition-colors duration-300">Cybersecurity</h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Segurança cloud, governança e compliance. Proteja seus ativos desde o design.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 rounded-full bg-[#e63946]/10 text-[#e63946]">Landing Zone</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#e63946]/10 text-[#e63946]">GaaS</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#e63946]/10 text-[#e63946]">Assessment</span>
                </div>
                <div className="flex items-center gap-2 text-[#e63946] font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>Explorar soluções</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Cloud Pillar - Laranja #f78504 */}
            <a href="/solucoes/cloud" className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-[#f78504]/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 block">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f78504]/20 via-orange-400/10 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                <svg className="absolute right-0 top-0 w-32 h-32 text-[#f78504]/10" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M25 55 Q25 40 40 40 Q45 25 60 30 Q80 30 80 50 Q90 50 90 60 Q90 70 80 70 L25 70 Q15 70 15 60 Q15 55 25 55" />
                </svg>
              </div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#f78504]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative z-10 p-8 md:p-10">
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#f78504] to-orange-400 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="w-16 h-16 bg-gradient-to-br from-[#f78504] to-orange-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-[#f78504] transition-colors duration-300">Cloud</h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Migração, otimização e gestão de infraestrutura cloud com AWS. Do assessment à operação contínua.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 rounded-full bg-[#f78504]/10 text-[#f78504]">Migração AWS</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#f78504]/10 text-[#f78504]">FinOps</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#f78504]/10 text-[#f78504]">DevOps</span>
                </div>
                <div className="flex items-center gap-2 text-[#f78504] font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>Explorar soluções</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Portfólio Section */}
      <section className="bg-background py-12 sm:py-14 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Todas as Soluções</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça nosso portfólio completo de soluções tecnológicas
            </p>
          </div>

          {/* GenAI e Dados Solutions */}
          <div className="mb-14 sm:mb-16 md:mb-20">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-12 h-1 bg-[#3893af] rounded-full"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#3893af]">GenAI e Dados</h3>
              <div className="flex-1 h-1 bg-[#3893af]/20 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <SolutionCard
                title="Arquitetura e Engenharia de Dados"
                description="Construa data lakes e warehouses escaláveis. Estruture seus dados para análises avançadas e decisões baseadas em dados."
                link="/solucoes/dados/arquitetura"
                pillar="ia"
              />
              <SolutionCard
                title="Pilot AI"
                description="Projetos piloto de IA personalizados para validar casos de uso. Teste hipóteses antes de investimentos maiores."
                link="/solucoes/dados/pilot-ai"
                pillar="ia"
              />
              <SolutionCard
                title="GenAI e ML"
                description="Soluções de inteligência artificial e machine learning para automatizar processos e potencializar decisões."
                link="/solucoes/dados/ia-ml"
                pillar="ia"
              />
            </div>
          </div>

          {/* Cybersecurity Solutions */}
          <div className="mb-14 sm:mb-16 md:mb-20">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-12 h-1 bg-[#e63946] rounded-full"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#e63946]">Cybersecurity</h3>
              <div className="flex-1 h-1 bg-[#e63946]/20 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <SolutionCard
                title="Landing Zone"
                description="Configure ambientes cloud seguros e escaláveis desde o início. Implementação de melhores práticas de segurança e governança."
                link="/solucoes/cybersecurity/landing-zone"
                pillar="cybersecurity"
              />
              <SolutionCard
                title="GaaS (Governança como Serviço)"
                description="Governança como Serviço completa. Monitore compliance, gerencie políticas e automatize controles de segurança."
                link="/solucoes/cybersecurity/gaas"
                pillar="cybersecurity"
              />
              <SolutionCard
                title="Assessment de Segurança"
                description="Avaliação completa de segurança e vulnerabilidades. Identifique riscos, receba recomendações e implemente correções."
                link="/solucoes/cybersecurity/assessment"
                pillar="cybersecurity"
              />
            </div>
          </div>

          {/* Cloud Solutions */}
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-12 h-1 bg-[#f78504] rounded-full"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#f78504]">Cloud</h3>
              <div className="flex-1 h-1 bg-[#f78504]/20 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <SolutionCard
                title="Migração e Disaster Recovery"
                description="Assessoria e execução completa de migração para AWS com framework estruturado."
                link="/solucoes/cloud/migracao"
                pillar="cloud"
              />
              <SolutionCard
                title="Gestão de FinOps"
                description="Otimização de custos em cloud com visibilidade completa e controle de gastos."
                link="/solucoes/cloud/finops"
                pillar="cloud"
              />
              <SolutionCard
                title="DevOps e Modernization"
                description="Acelere entregas com automação e integração contínua. Pipelines CI/CD robustos."
                link="/solucoes/cloud/devops"
                pillar="cloud"
              />
              <SolutionCard
                title="Assessment de Arquitetura"
                description="Diagnóstico completo da arquitetura atual com roadmap técnico priorizado."
                link="/solucoes/cloud/arquitetura"
                pillar="cloud"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solucoes;