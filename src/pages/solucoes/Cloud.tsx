import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import SolutionCard from "@/components/SolutionCard";
import CTA from "@/components/CTA";
import migracaoImage from "@/assets/solutions/cloud-migration-hero.jpg";
import finopsImage from "@/assets/solutions/finops-hero.jpg";
import devopsImage from "@/assets/solutions/devops-hero.jpg";
import arquiteturaImage from "@/assets/solutions/cloud-architecture.jpg";
import { Cloud as CloudIcon, TrendingUp, Zap, Shield } from "lucide-react";

const Cloud = () => {

  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3893af]/10 via-background to-background">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#3893af]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-[700px] h-[700px] bg-[#3893af]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#3893af]/15 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-24 lg:py-28 pt-40 sm:pt-44 md:pt-48 lg:pt-52">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#3893af]/10 rounded-full px-4 py-2 mb-6">
              <CloudIcon className="w-5 h-5 text-[#3893af]" />
              <span className="text-sm font-medium text-[#3893af]">Cloud Infrastructure</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-foreground">
              Transforme sua Infraestrutura <br />
              <span style={{ color: '#3893af' }}>na Nuvem</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Migre, otimize e escale sua infraestrutura com segurança e eficiência. 
              Especialistas AWS para acelerar sua transformação digital.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-border/50">
                <div className="text-3xl md:text-4xl font-bold text-[#3893af] mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Migrações Completas</div>
              </div>
              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-border/50">
                <div className="text-3xl md:text-4xl font-bold text-[#3893af] mb-2">30%</div>
                <div className="text-sm text-muted-foreground">Redução de Custos</div>
              </div>
              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-border/50">
                <div className="text-3xl md:text-4xl font-bold text-[#3893af] mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Disponibilidade</div>
              </div>
              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-border/50">
                <div className="text-3xl md:text-4xl font-bold text-[#3893af] mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte Dedicado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cloud Section */}
      <section className="py-16 bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que Cloud?</h2>
            <p className="text-lg text-muted-foreground">
              A transformação digital começa com uma infraestrutura sólida e escalável
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-[#3893af]/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-[#3893af]/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-[#3893af]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Agilidade e Velocidade</h3>
              <p className="text-muted-foreground">
                Provisione recursos em minutos, não semanas. Acelere o time-to-market e responda rapidamente às demandas do negócio.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-[#3893af]/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-[#3893af]/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-[#3893af]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Escalabilidade Infinita</h3>
              <p className="text-muted-foreground">
                Cresça sem limites. Escale automaticamente recursos conforme a demanda, pagando apenas pelo que usar.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-[#3893af]/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-[#3893af]/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-[#3893af]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Segurança Empresarial</h3>
              <p className="text-muted-foreground">
                Proteção de nível corporativo com conformidade garantida. Certifications e compliance mantidos pela AWS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfólio Cloud */}
      <main className="bg-gradient-to-b from-card/20 via-background to-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossas Soluções Cloud</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Do planejamento à execução, cobrimos todo o ciclo de vida da sua jornada cloud
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <SolutionCard
              title="Migração e Disaster Recovery"
              description="Assessoria e execução completa de migração de infraestrutura, aplicativos e dados para AWS. Framework estruturado com ferramentas especializadas para transformação ágil e segura."
              image={migracaoImage}
              link="/solucoes/cloud/migracao"
              benefits={[
                "Migration Evaluator e Hub",
                "Framework AWS MAP",
                "Alta disponibilidade garantida"
              ]}
            />

            <SolutionCard
              title="Gestão de FinOps"
              description="Otimização de custos em cloud com visibilidade completa. Controle gastos, preveja despesas e maximize ROI da sua infraestrutura cloud."
              image={finopsImage}
              link="/solucoes/cloud/finops"
              benefits={[
                "Redução média de 30% nos custos",
                "Dashboards em tempo real",
                "Alertas automáticos de gastos"
              ]}
            />

            <SolutionCard
              title="DevOps e Modernization"
              description="Acelere entregas com automação e integração contínua. Implemente CI/CD pipelines robustos e aumente a velocidade de desenvolvimento."
              image={devopsImage}
              link="/solucoes/cloud/devops"
              benefits={[
                "Deploy em minutos, não semanas",
                "Automação completa de pipelines",
                "Rollback instantâneo"
              ]}
            />

            <SolutionCard
              title="Assessment de Arquitetura"
              description="A base para crescer com segurança e eficiência. Diagnóstico completo da arquitetura atual com roadmap técnico e quick wins para evolução sustentável."
              image={arquiteturaImage}
              link="/solucoes/cloud/arquitetura"
              benefits={[
                "Diagnóstico de performance e custos",
                "Roadmap técnico priorizado",
                "Melhores práticas AWS validadas"
              ]}
            />
          </div>
        </div>
      </main>
      <CTA />
      <Footer />
    </div>
  );
};

export default Cloud;