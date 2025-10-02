import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import SolutionCard from "@/components/SolutionCard";
import migracaoImage from "@/assets/solutions/cloud-migration.jpg";
import finopsImage from "@/assets/solutions/finops.jpg";
import devopsImage from "@/assets/solutions/devops.jpg";
import arquiteturaCloudImage from "@/assets/solutions/cloud-architecture.jpg";
import landingZoneImage from "@/assets/solutions/landing-zone.jpg";
import gaasImage from "@/assets/solutions/gaas.jpg";
import assessmentImage from "@/assets/solutions/assessment.jpg";
import arquiteturaDadosImage from "@/assets/solutions/data-architecture.jpg";
import pilotImage from "@/assets/solutions/pilot-ai.jpg";
import lyaImage from "@/assets/solutions/lya.jpg";
import monalisaImage from "@/assets/solutions/monalisa.jpg";
import claraImage from "@/assets/solutions/clara.jpg";

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
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-[#3893af] rounded-full"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#3893af]">Cloud</h3>
              <div className="flex-1 h-1 bg-[#3893af]/20 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <SolutionCard
                title="Migração Cloud"
                description="Migre sua infraestrutura para a nuvem com segurança e zero downtime. Redução de até 40% nos custos operacionais com nossa metodologia comprovada."
                image={migracaoImage}
                link="/solucoes/cloud/migracao"
                color="#3893af"
                benefits={[
                  "Zero downtime durante migração",
                  "Redução de 40% nos custos",
                  "Suporte 24/7 durante todo processo"
                ]}
              />
              <SolutionCard
                title="FinOps"
                description="Otimização de custos em cloud com visibilidade completa. Controle gastos, preveja despesas e maximize ROI da sua infraestrutura cloud."
                image={finopsImage}
                link="/solucoes/cloud/finops"
                color="#3893af"
                benefits={[
                  "Redução média de 30% nos custos",
                  "Dashboards em tempo real",
                  "Alertas automáticos de gastos"
                ]}
              />
              <SolutionCard
                title="DevOps"
                description="Acelere entregas com automação e integração contínua. Implemente CI/CD pipelines robustos e aumente a velocidade de desenvolvimento."
                image={devopsImage}
                link="/solucoes/cloud/devops"
                color="#3893af"
                benefits={[
                  "Deploy em minutos, não semanas",
                  "Automação completa de pipelines",
                  "Rollback instantâneo"
                ]}
              />
              <SolutionCard
                title="Arquitetura Cloud"
                description="Design de arquiteturas escaláveis e resilientes. Soluções personalizadas com best practices de cloud-native e microservices."
                image={arquiteturaCloudImage}
                link="/solucoes/cloud/arquitetura"
                color="#3893af"
                benefits={[
                  "Alta disponibilidade garantida",
                  "Escalabilidade automática",
                  "Design cloud-native"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <SolutionCard
                title="Landing Zone"
                description="Configure ambientes cloud seguros e escaláveis desde o início. Implementação de melhores práticas de segurança e governança."
                image={landingZoneImage}
                link="/solucoes/cybersecurity/landing-zone"
                color="#8b5cf6"
                benefits={[
                  "Segurança desde o design",
                  "Compliance automático",
                  "Governança integrada"
                ]}
              />
              <SolutionCard
                title="GAAS"
                description="Governança completa de segurança como serviço. Monitore compliance, gerencie políticas e automatize controles de segurança."
                image={gaasImage}
                link="/solucoes/cybersecurity/gaas"
                color="#8b5cf6"
                benefits={[
                  "Compliance contínuo",
                  "Políticas automatizadas",
                  "Relatórios em tempo real"
                ]}
              />
              <SolutionCard
                title="Assessment"
                description="Avaliação completa de segurança e vulnerabilidades. Identifique riscos, receba recomendações e implemente correções."
                image={assessmentImage}
                link="/solucoes/cybersecurity/assessment"
                color="#8b5cf6"
                benefits={[
                  "Análise completa de riscos",
                  "Recomendações priorizadas",
                  "Roadmap de segurança"
                ]}
              />
            </div>
          </div>

          {/* Data & AI Solutions */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-[#f78504] rounded-full"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#f78504]">Dados e IA</h3>
              <div className="flex-1 h-1 bg-[#f78504]/20 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <SolutionCard
                title="Arquitetura de Dados"
                description="Construa data lakes e warehouses escaláveis. Estruture seus dados para análises avançadas e decisões baseadas em dados."
                image={arquiteturaDadosImage}
                link="/solucoes/dados/arquitetura"
                color="#f78504"
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
                color="#f78504"
                benefits={[
                  "MVP em 4-8 semanas",
                  "ROI mensurável",
                  "Prova de conceito validada"
                ]}
              />
              <SolutionCard
                title="LYA - RH com AI"
                description="Automatize processos de RH com inteligência artificial. Recrutamento inteligente, análise de performance e gestão de talentos."
                image={lyaImage}
                link="/solucoes/dados/lya"
                color="#f78504"
                benefits={[
                  "Recrutamento 70% mais rápido",
                  "Análise preditiva de turnover",
                  "Onboarding automatizado"
                ]}
              />
              <SolutionCard
                title="MonaLisa - Prefeitura AI"
                description="IA para gestão pública municipal. Atendimento ao cidadão, gestão de processos e análise de dados urbanos."
                image={monalisaImage}
                link="/solucoes/dados/monalisa"
                color="#f78504"
                benefits={[
                  "Atendimento 24/7 automatizado",
                  "Análise de dados urbanos",
                  "Redução de custos operacionais"
                ]}
              />
              <SolutionCard
                title="CLARA - Clínica AI"
                description="Inteligência artificial para gestão clínica. Triagem inteligente, agendamento automatizado e análise de prontuários."
                image={claraImage}
                link="/solucoes/dados/clara"
                color="#f78504"
                benefits={[
                  "Triagem inteligente de pacientes",
                  "Agendamento otimizado",
                  "Análise preditiva de saúde"
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