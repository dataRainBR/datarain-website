import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import SolutionCard from "@/components/SolutionCard";
import migracaoImage from "@/assets/solutions/cloud-migration-hero.jpg";
import finopsImage from "@/assets/solutions/finops-hero.jpg";
import devopsImage from "@/assets/solutions/devops-hero.jpg";
import arquiteturaCloudImage from "@/assets/solutions/cloud-architecture.jpg";
import landingZoneImage from "@/assets/solutions/landing-zone.jpg";
import gaasImage from "@/assets/solutions/gaas.jpg";
import assessmentImage from "@/assets/solutions/assessment.jpg";
import arquiteturaDadosImage from "@/assets/solutions/data-architecture-hero.jpg";
import pilotImage from "@/assets/solutions/pilot-ai-hero.jpg";

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
              IA e Dados, Cybersecurity e Cloud integrados em um ecossistema completo para sua transformação digital
            </p>

            {/* Global Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-border/50">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">300+</div>
                <div className="text-sm text-muted-foreground">Projetos Entregues</div>
              </div>
              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-border/50">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-border/50">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Especialistas</div>
              </div>
              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-border/50">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares Section */}
      <section className="bg-gradient-to-b from-background via-card/20 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Três Pilares, Uma Visão</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Integramos IA e Dados, Cybersecurity e Cloud para entregar transformação digital de ponta a ponta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* IA e Dados Pillar */}
            <a href="/solucoes/dados" className="group">
              <div className="relative bg-gradient-to-br from-primary/5 to-card rounded-2xl p-8 shadow-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 mb-6 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">IA e Dados</h3>
                  <p className="text-muted-foreground mb-6">
                    Arquitetura de dados e IA aplicada. De data lakes a soluções verticais inteligentes.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">Data Architecture</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">Pilot AI</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">ML/AI</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Cybersecurity Pillar */}
            <a href="/solucoes/cybersecurity" className="group">
              <div className="relative bg-gradient-to-br from-primary/5 to-card rounded-2xl p-8 shadow-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 mb-6 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Cybersecurity</h3>
                  <p className="text-muted-foreground mb-6">
                    Segurança cloud, governança e compliance. Proteja seus ativos desde o design.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">Landing Zone</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">GaaS (Governança como Serviço)</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">Assessment</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Cloud Pillar */}
            <a href="/solucoes/cloud" className="group">
              <div className="relative bg-gradient-to-br from-[#3893af]/5 to-card rounded-2xl p-8 shadow-lg border border-[#3893af]/20 hover:border-[#3893af]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#3893af]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 mb-6 bg-[#3893af]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-[#3893af]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#3893af]">Cloud</h3>
                  <p className="text-muted-foreground mb-6">
                    Migração, otimização e gestão de infraestrutura cloud com AWS. Do assessment à operação contínua.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-[#3893af]/10 text-[#3893af]">Migração AWS</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-[#3893af]/10 text-[#3893af]">FinOps</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-[#3893af]/10 text-[#3893af]">DevOps</span>
                  </div>
                </div>
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

          {/* IA e Dados Solutions */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-primary rounded-full"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary">IA e Dados</h3>
              <div className="flex-1 h-1 bg-primary/20 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <SolutionCard
                title="Arquitetura e Engenharia de Dados"
                description="Construa data lakes e warehouses escaláveis. Estruture seus dados para análises avançadas e decisões baseadas em dados."
                image={arquiteturaDadosImage}
                link="/solucoes/dados/arquitetura"
                benefits={[
                  "Data lakes otimizados",
                  "ETL pipelines automatizados",
                  "Governança de dados"
                ]}
              />
              <SolutionCard
                title="Pilot AI"
                description="Projetos piloto de IA personalizados para validar casos de uso. Teste hipóteses antes de investimentos maiores."
                image={pilotImage}
                link="/solucoes/dados/pilot-ai"
                benefits={[
                  "MVP em 4-8 semanas",
                  "ROI mensurável",
                  "Prova de conceito validada"
                ]}
              />
              <SolutionCard
                title="IA e ML"
                description="Soluções de inteligência artificial e machine learning para automatizar processos e potencializar decisões."
                image={pilotImage}
                link="/solucoes/dados/ia-ml"
                benefits={[
                  "Modelos personalizados",
                  "Automação inteligente",
                  "Insights preditivos"
                ]}
              />
            </div>
          </div>

          {/* Cybersecurity Solutions */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-primary rounded-full"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary">Cybersecurity</h3>
              <div className="flex-1 h-1 bg-primary/20 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <SolutionCard
                title="Landing Zone"
                description="Configure ambientes cloud seguros e escaláveis desde o início. Implementação de melhores práticas de segurança e governança."
                image={landingZoneImage}
                link="/solucoes/cybersecurity/landing-zone"
                benefits={[
                  "Segurança desde o design",
                  "Compliance automático",
                  "Governança integrada"
                ]}
              />
              <SolutionCard
                title="GaaS (Governança como Serviço)"
                description="Governança como Serviço completa. Monitore compliance, gerencie políticas e automatize controles de segurança."
                image={gaasImage}
                link="/solucoes/cybersecurity/gaas"
                benefits={[
                  "Compliance contínuo",
                  "Políticas automatizadas",
                  "Relatórios em tempo real"
                ]}
              />
              <SolutionCard
                title="Assessment de Segurança"
                description="Avaliação completa de segurança e vulnerabilidades. Identifique riscos, receba recomendações e implemente correções."
                image={assessmentImage}
                link="/solucoes/cybersecurity/assessment"
                benefits={[
                  "Análise completa de riscos",
                  "Recomendações priorizadas",
                  "Roadmap de segurança"
                ]}
              />
            </div>
          </div>

          {/* Cloud Solutions */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-[#3893af] rounded-full"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#3893af]">Cloud</h3>
              <div className="flex-1 h-1 bg-[#3893af]/20 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <SolutionCard
                title="Migração e Disaster Recovery"
                description="Assessoria e execução completa de migração para AWS com framework estruturado."
                image={migracaoImage}
                link="/solucoes/cloud/migracao"
                benefits={[
                  "Migration Evaluator e Hub",
                  "Framework AWS MAP",
                  "Alta disponibilidade"
                ]}
              />
              <SolutionCard
                title="Gestão de FinOps"
                description="Otimização de custos em cloud com visibilidade completa e controle de gastos."
                image={finopsImage}
                link="/solucoes/cloud/finops"
                benefits={[
                  "Redução média de 30%",
                  "Dashboards em tempo real",
                  "Alertas automáticos"
                ]}
              />
              <SolutionCard
                title="DevOps e Modernization"
                description="Acelere entregas com automação e integração contínua. Pipelines CI/CD robustos."
                image={devopsImage}
                link="/solucoes/cloud/devops"
                benefits={[
                  "Deploy em minutos",
                  "Automação completa",
                  "Rollback instantâneo"
                ]}
              />
              <SolutionCard
                title="Assessment de Arquitetura"
                description="Diagnóstico completo da arquitetura atual com roadmap técnico priorizado."
                image={arquiteturaCloudImage}
                link="/solucoes/cloud/arquitetura"
                benefits={[
                  "Diagnóstico de performance",
                  "Roadmap técnico",
                  "Melhores práticas AWS"
                ]}
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