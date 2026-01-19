import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import SolutionCard from "@/components/SolutionCard";
import CTA from "@/components/CTA";
import landingZoneImage from "@/assets/solutions/landing-zone-hero.jpg";
import gaasImage from "@/assets/solutions/gaas.jpg";
import assessmentImage from "@/assets/solutions/assessment-hero.jpg";
import { Shield, Lock, Eye, CheckCircle2 } from "lucide-react";

const Cybersecurity = () => {

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

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-24 lg:py-28 pt-40 sm:pt-44 md:pt-48 lg:pt-52">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Cybersecurity</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-foreground">
              Segurança que <br />
              <span className="text-primary">Protege e Habilita</span>
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
      <section className="py-20 md:py-24 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-[#e63946]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#e63946]/5 rounded-full blur-3xl" />
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
            <div className="inline-block px-4 py-2 bg-[#e63946]/10 rounded-full text-[#e63946] text-sm font-semibold mb-6">
              Benefícios
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Por que Cybersecurity?</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Segurança não é custo, é investimento em continuidade e confiança
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-[#e63946]/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
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
                  <Lock className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-[#e63946] transition-colors duration-300">Proteção Proativa</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Identifique e corrija vulnerabilidades antes que se tornem problemas. Prevenção é mais barata que remediação.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-[#e63946]/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
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
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-[#e63946] transition-colors duration-300">Visibilidade Total</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Monitoramento contínuo e dashboards em tempo real. Saiba exatamente o que está acontecendo na sua infraestrutura.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-[#e63946]/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
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
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-[#e63946] transition-colors duration-300">Compliance Garantido</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Atenda LGPD, ISO 27001, PCI-DSS e outras normas automaticamente. Auditorias sem estresse.
                </p>
              </div>
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
      <CTA />
      <Footer />
    </div>
  );
};

export default Cybersecurity;