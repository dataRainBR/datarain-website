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
        <div className="absolute inset-0 bg-gradient-to-br from-[#f78504]/10 via-background to-background">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#f78504]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-[700px] h-[700px] bg-[#f78504]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#f78504]/15 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-24 lg:py-28 pt-40 sm:pt-44 md:pt-48 lg:pt-52">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#f78504]/10 rounded-full px-4 py-2 mb-6">
              <CloudIcon className="w-5 h-5 text-[#f78504]" />
              <span className="text-sm font-medium text-[#f78504]">Cloud Infrastructure</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-foreground">
              Transforme sua Infraestrutura <br />
              <span style={{ color: '#f78504' }}>na Nuvem</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Migre, otimize e escale sua infraestrutura com segurança e eficiência. 
              Especialistas AWS para acelerar sua transformação digital.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-[#f78504]/20">
                <div className="text-3xl md:text-4xl font-bold text-[#f78504] mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Migrações Completas</div>
              </div>
              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-[#f78504]/20">
                <div className="text-3xl md:text-4xl font-bold text-[#f78504] mb-2">30%</div>
                <div className="text-sm text-muted-foreground">Redução de Custos</div>
              </div>
              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-[#f78504]/20">
                <div className="text-3xl md:text-4xl font-bold text-[#f78504] mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Disponibilidade</div>
              </div>
              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-[#f78504]/20">
                <div className="text-3xl md:text-4xl font-bold text-[#f78504] mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte Dedicado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cloud Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-[#f78504]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#f78504]/5 rounded-full blur-3xl" />
        </div>
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#f78504]/10 rounded-full text-[#f78504] text-sm font-semibold mb-6">
              Benefícios
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Por que Cloud?</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              A transformação digital começa com uma infraestrutura sólida e escalável
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-[#f78504]/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
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
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-[#f78504] transition-colors duration-300">Agilidade e Velocidade</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Provisione recursos em minutos, não semanas. Acelere o time-to-market e responda rapidamente às demandas do negócio.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-[#f78504]/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
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
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-[#f78504] transition-colors duration-300">Escalabilidade Infinita</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Cresça sem limites. Escale automaticamente recursos conforme a demanda, pagando apenas pelo que usar.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-[#f78504]/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
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
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-[#f78504] transition-colors duration-300">Segurança Empresarial</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Proteção de nível corporativo com conformidade garantida. Certifications e compliance mantidos pela AWS.
                </p>
              </div>
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