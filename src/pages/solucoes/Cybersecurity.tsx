import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import SolutionCard from "@/components/SolutionCard";
import TeamCarousel from "@/components/TeamCarousel";
import CTA from "@/components/CTA";
import landingZoneImage from "@/assets/solutions/landing-zone-hero.jpg";
import gaasImage from "@/assets/solutions/gaas.jpg";
import assessmentImage from "@/assets/solutions/assessment-hero.jpg";
import { Shield, Lock, Eye, CheckCircle2 } from "lucide-react";

const Cybersecurity = () => {
  const securityTeam = [
    {
      name: "Bruno Almeida",
      role: "Security Architect Lead",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Patricia Rocha",
      role: "Compliance Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Rafael Santos",
      role: "Cloud Security Engineer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Camila Dias",
      role: "Governance Analyst",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-[700px] h-[700px] bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-24 lg:py-28 pt-32 md:pt-36">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Cybersecurity</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Segurança que <br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Protege e Habilita
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Governança, compliance e proteção avançada para sua infraestrutura cloud. 
              Segurança desde o design até a operação contínua.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-border/50">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Assessments Realizados</div>
              </div>
              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-border/50">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">Zero</div>
                <div className="text-sm text-muted-foreground">Incidentes Críticos</div>
              </div>
              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-border/50">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoramento</div>
              </div>
              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-border/50">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Security Section */}
      <section className="py-16 bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que Cybersecurity?</h2>
            <p className="text-lg text-muted-foreground">
              Segurança não é custo, é investimento em continuidade e confiança
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Lock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Proteção Proativa</h3>
              <p className="text-muted-foreground">
                Identifique e corrija vulnerabilidades antes que se tornem problemas. Prevenção é mais barata que remediação.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Visibilidade Total</h3>
              <p className="text-muted-foreground">
                Monitoramento contínuo e dashboards em tempo real. Saiba exatamente o que está acontecendo na sua infraestrutura.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Compliance Garantido</h3>
              <p className="text-muted-foreground">
                Atenda LGPD, ISO 27001, PCI-DSS e outras normas automaticamente. Auditorias sem estresse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfólio Cybersecurity */}
      <main className="bg-gradient-to-b from-card/20 via-background to-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções de Cybersecurity</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proteção completa do design à operação, com governança integrada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              title="GAAS - Governança as a Service"
              description="Governança completa de segurança como serviço. Monitore compliance, gerencie políticas e automatize controles de segurança."
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
              description="Antecipe riscos e desbloqueie governança. Diagnóstico completo com análise de conformidade, identificação de vulnerabilidades e roadmap priorizado."
              image={assessmentImage}
              link="/solucoes/cybersecurity/assessment"
              benefits={[
                "Conformidade LGPD, ISO 27001, PCI-DSS",
                "Vulnerabilidades críticas mapeadas",
                "Roadmap de segurança estratégico"
              ]}
            />
          </div>
        </div>
      </main>

      {/* Team Carousel */}
      <TeamCarousel 
        members={securityTeam}
        title="Time de Cybersecurity"
        description="Especialistas em segurança cloud e compliance para proteger seu negócio"
      />

      <CTA />
      <Footer />
    </div>
  );
};

export default Cybersecurity;