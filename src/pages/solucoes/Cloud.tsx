import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import SolutionCard from "@/components/SolutionCard";
import migracaoImage from "@/assets/solutions/cloud-migration-hero.jpg";
import finopsImage from "@/assets/solutions/finops-hero.jpg";
import devopsImage from "@/assets/solutions/devops-hero.jpg";
import arquiteturaImage from "@/assets/solutions/cloud-architecture.jpg";

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <SolutionCard
              title="Migração para AWS"
              description="Assessoria e execução completa de migração de infraestrutura, aplicativos e dados para AWS. Framework estruturado com ferramentas especializadas para transformação ágil e segura."
              image={migracaoImage}
              link="/solucoes/cloud/migracao"
              color="#3893af"
              benefits={[
                "Migration Evaluator e Hub",
                "Framework AWS MAP",
                "Alta disponibilidade garantida"
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
              image={arquiteturaImage}
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
      </main>

      <Footer />
    </div>
  );
};

export default Cloud;
