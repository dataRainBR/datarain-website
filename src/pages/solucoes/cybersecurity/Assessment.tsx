import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Shield, ArrowRight, CheckCircle2, Search, Lock, FileCheck } from "lucide-react";

const Assessment = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e63946]/10 via-background to-background">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#e63946]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-[700px] h-[700px] bg-[#e63946]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#e63946]/15 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-24 lg:py-28 pt-40 sm:pt-44 md:pt-48 lg:pt-52">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#e63946]/10 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-[#e63946]" />
              <span className="text-sm font-medium text-[#e63946]">Cybersecurity</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-foreground">
              Assessment de <br />
              <span className="text-[#e63946]">Segurança</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Assessment de Segurança que antecipa riscos e desbloqueia governança. 
              O primeiro passo para entender onde sua empresa está, onde precisa chegar — e o que precisa mudar.
            </p>

            <a 
              href="/fale-conosco" 
              className="inline-flex items-center gap-2 bg-[#e63946] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#c5303c] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Falar com Especialista
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Fazemos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mapeamos vulnerabilidades e mostramos os riscos com dados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-[#e63946]/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e63946]/20 via-rose-500/10 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#e63946]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative z-10 p-8 md:p-10">
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#e63946] to-rose-500 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="w-16 h-16 bg-gradient-to-br from-[#e63946] to-rose-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-[#e63946] transition-colors duration-300">Diagnóstico Completo</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Diagnóstico completo da arquitetura e das políticas de segurança.
                </p>
              </div>
            </div>

            <div className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-[#e63946]/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e63946]/20 via-rose-500/10 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#e63946]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative z-10 p-8 md:p-10">
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#e63946] to-rose-500 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="w-16 h-16 bg-gradient-to-br from-[#e63946] to-rose-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <FileCheck className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-[#e63946] transition-colors duration-300">Análise de Conformidade</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Análise de conformidade com LGPD, ISO 27001, PCI-DSS e outras normas.
                </p>
              </div>
            </div>

            <div className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-[#e63946]/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e63946]/20 via-rose-500/10 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#e63946]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative z-10 p-8 md:p-10">
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#e63946] to-rose-500 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="w-16 h-16 bg-gradient-to-br from-[#e63946] to-rose-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Lock className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-[#e63946] transition-colors duration-300">Plano de Ação</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Plano de ação priorizado com recomendações práticas e roadmap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#e63946]/10 border-l-4 border-[#e63946] rounded-r-xl p-6 mb-8">
              <p className="text-xl font-semibold text-foreground">
                Segurança não é apagar incêndios. É prevenir com inteligência.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border/20 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">O que entregamos:</h2>
              <div className="space-y-4">
                {[
                  "Diagnóstico completo da arquitetura e das políticas de segurança",
                  "Análise de conformidade com normas como LGPD, ISO 27001, PCI-DSS",
                  "Identificação de vulnerabilidades críticas e riscos operacionais",
                  "Plano de ação priorizado com recomendações práticas",
                  "Roadmap de segurança para curto, médio e longo prazo"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#e63946]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 rounded-full bg-[#e63946]"></div>
                    </div>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#e63946]/5 to-[#e63946]/10 rounded-2xl p-8 md:p-12 border border-[#e63946]/20 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                O primeiro passo para uma segurança real começa aqui.
              </h2>
              <p className="text-lg text-muted-foreground">
                Muitas empresas só investem em segurança depois de um incidente. Com o Assessment da dataRain, 
                você ganha visibilidade antes que os riscos virem problemas.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border/20">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Por que somos diferentes?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Análise técnica e estratégica, com foco real em impacto e compliance",
                  "Metodologia própria validada com dezenas de empresas",
                  "Especialistas certificados em segurança AWS, cloud e governança",
                  "Foco na prevenção, não na remediação",
                  "Resultados acionáveis desde o primeiro dia"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#e63946] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default Assessment;