import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import SolutionCard from "@/components/SolutionCard";
import TeamCarousel from "@/components/TeamCarousel";
import CTA from "@/components/CTA";
import arquiteturaImage from "@/assets/solutions/data-architecture.jpg";
import pilotImage from "@/assets/solutions/pilot-ai.jpg";
import lyaImage from "@/assets/solutions/lya.jpg";
import monalisaImage from "@/assets/solutions/monalisa.jpg";
import claraImage from "@/assets/solutions/clara.jpg";
import { Brain, BarChart3, Sparkles, Database } from "lucide-react";

const Dados = () => {
  const dataTeam = [
    {
      name: "Carlos Mendes",
      role: "Data Architect Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Julia Oliveira",
      role: "AI/ML Engineer",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Ricardo Ferreira",
      role: "Data Science Lead",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Fernanda Lima",
      role: "MLOps Specialist",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com"
    }
  ];

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

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-24 lg:py-28 pt-32 md:pt-36">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#f78504]/10 rounded-full px-4 py-2 mb-6">
              <Brain className="w-5 h-5 text-[#f78504]" />
              <span className="text-sm font-medium text-[#f78504]">Data & AI</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Dados e IA que <br />
              <span className="bg-gradient-to-r from-[#f78504] to-[#c96803] bg-clip-text text-transparent">
                Transformam Negócios
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Transforme dados em insights estratégicos com arquitetura moderna e inteligência artificial. 
              Do data lake à IA generativa, construímos soluções que geram valor real.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-border/50">
                <div className="text-3xl md:text-4xl font-bold text-[#f78504] mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projetos de IA</div>
              </div>
              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-border/50">
                <div className="text-3xl md:text-4xl font-bold text-[#f78504] mb-2">10PB+</div>
                <div className="text-sm text-muted-foreground">Dados Processados</div>
              </div>
              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-border/50">
                <div className="text-3xl md:text-4xl font-bold text-[#f78504] mb-2">70%</div>
                <div className="text-sm text-muted-foreground">Redução de Tempo</div>
              </div>
              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-border/50">
                <div className="text-3xl md:text-4xl font-bold text-[#f78504] mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Precisão dos Modelos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Data & AI Section */}
      <section className="py-16 bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que Dados e IA?</h2>
            <p className="text-lg text-muted-foreground">
              Decisões baseadas em dados são 5x mais rápidas e 6x mais propensas ao sucesso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-[#f78504]/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-[#f78504]/10 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-[#f78504]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Insights em Tempo Real</h3>
              <p className="text-muted-foreground">
                Acesse insights acionáveis instantaneamente. Dashboards inteligentes que transformam dados complexos em decisões claras.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-[#f78504]/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-[#f78504]/10 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-[#f78504]" />
              </div>
              <h3 className="text-xl font-bold mb-3">IA que Aprende</h3>
              <p className="text-muted-foreground">
                Modelos de machine learning que evoluem com seu negócio. Previsões cada vez mais precisas e automatizadas.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-[#f78504]/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-[#f78504]/10 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-7 h-7 text-[#f78504]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Arquitetura Escalável</h3>
              <p className="text-muted-foreground">
                Data lakes e warehouses modernos que crescem com você. Governança e qualidade de dados garantidas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfólio Dados e IA */}
      <main className="bg-gradient-to-b from-card/20 via-background to-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções de Dados e IA</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Da arquitetura de dados à IA aplicada, temos a solução ideal para seu desafio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <SolutionCard
              title="Arquitetura de Dados"
              description="Construa data lakes e warehouses escaláveis. Estruture seus dados para análises avançadas e decisões baseadas em dados."
              image={arquiteturaImage}
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
      </main>

      {/* Team Carousel */}
      <TeamCarousel 
        members={dataTeam}
        title="Time de Dados e IA"
        description="Cientistas de dados e engenheiros especializados em transformar dados em valor estratégico"
      />

      <CTA />
      <Footer />
    </div>
  );
};

export default Dados;