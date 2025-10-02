import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import SolutionCard from "@/components/SolutionCard";
import arquiteturaImage from "@/assets/solutions/data-architecture.jpg";
import pilotImage from "@/assets/solutions/pilot-ai.jpg";
import lyaImage from "@/assets/solutions/lya.jpg";
import monalisaImage from "@/assets/solutions/monalisa.jpg";
import claraImage from "@/assets/solutions/clara.jpg";

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

      <Footer />
    </div>
  );
};

export default Dados;
