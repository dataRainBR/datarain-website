import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import SolutionCard from "@/components/SolutionCard";
import landingZoneImage from "@/assets/solutions/landing-zone-hero.jpg";
import gaasImage from "@/assets/solutions/gaas.jpg";
import assessmentImage from "@/assets/solutions/assessment-hero.jpg";

const Cybersecurity = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Modern Background with Large Splashes */}
        <div className="absolute inset-0">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-[700px] h-[700px] bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-[450px] h-[450px] bg-primary/10 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-24 lg:py-28 pt-32 md:pt-36">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent text-center">
              Cybersecurity
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-center">
              Proteção avançada e gestão de segurança para sua infraestrutura digital
            </p>
          </div>
        </div>
      </section>

      {/* Portfólio Cybersecurity */}
      <main className="bg-gradient-to-b from-background via-background/95 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções de Cybersecurity</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proteção avançada e governança de segurança
            </p>
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
              title="GAAS - Governança as a Service"
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
              title="Assessment de Segurança"
              description="Antecipe riscos e desbloqueie governança. Diagnóstico completo com análise de conformidade, identificação de vulnerabilidades e roadmap priorizado."
              image={assessmentImage}
              link="/solucoes/cybersecurity/assessment"
              color="#8b5cf6"
              benefits={[
                "Conformidade LGPD, ISO 27001, PCI-DSS",
                "Vulnerabilidades críticas mapeadas",
                "Roadmap de segurança estratégico"
              ]}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cybersecurity;
