import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { ShieldCheck, ArrowRight, CheckCircle2, Search, Lock, FileCheck, Target, AlertTriangle, Lightbulb } from "lucide-react";

const Assessment = () => {
  const pillarColor = "#e63946";
  
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Modern Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e63946]/5 via-background to-background">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-[#e63946]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-[#e63946]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#e63946]/5 rounded-full blur-2xl"></div>
          
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(${pillarColor} 1px, transparent 1px), linear-gradient(90deg, ${pillarColor} 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-40 sm:pt-44 md:pt-48 lg:pt-52 pb-16 md:pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 bg-[#e63946]/10 backdrop-blur-sm border border-[#e63946]/20 rounded-full px-5 py-2.5">
                <ShieldCheck className="w-5 h-5 text-[#e63946]" />
                <span className="text-sm font-semibold text-[#e63946]">Cybersecurity</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-center text-foreground">
              Assessment de{" "}
              <span className="text-[#e63946]">Segurança</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10 text-center">
              Assessment de Segurança que antecipa riscos e desbloqueia governança. 
              O primeiro passo para entender onde sua empresa está, onde precisa chegar — e o que precisa mudar.
            </p>

            <div className="flex justify-center">
              <a 
                href="/fale-conosco" 
                className="group inline-flex items-center gap-3 bg-[#e63946] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#c5303c] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#e63946]/25"
              >
                Falar com Especialista
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* How We Do Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#e63946]/10 rounded-full px-4 py-2 mb-4">
              <Target className="w-4 h-4 text-[#e63946]" />
              <span className="text-sm font-medium text-[#e63946]">Metodologia</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Como Fazemos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mapeamos vulnerabilidades e mostramos os riscos com dados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { icon: Search, title: "Diagnóstico Completo", desc: "Diagnóstico completo da arquitetura e das políticas de segurança." },
              { icon: FileCheck, title: "Análise de Conformidade", desc: "Análise de conformidade com LGPD, ISO 27001, PCI-DSS e outras normas." },
              { icon: Lock, title: "Plano de Ação", desc: "Plano de ação priorizado com recomendações práticas e roadmap." }
            ].map((item, index) => (
              <div key={index} className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-[#e63946]/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e63946]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#e63946] to-[#c5303c] rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#e63946] transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote + Deliverables Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Quote */}
            <div className="bg-[#e63946]/10 border-l-4 border-[#e63946] rounded-r-2xl p-8 mb-16">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-[#e63946] flex-shrink-0" />
                <p className="text-xl md:text-2xl font-semibold text-foreground">
                  Segurança não é apagar incêndios. É prevenir com inteligência.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* What we deliver */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[#e63946]/10 rounded-full px-4 py-2 mb-6">
                  <FileCheck className="w-4 h-4 text-[#e63946]" />
                  <span className="text-sm font-medium text-[#e63946]">Entregáveis</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">O que entregamos:</h2>
                <div className="space-y-5">
                  {[
                    "Diagnóstico completo da arquitetura e das políticas de segurança",
                    "Análise de conformidade com normas como LGPD, ISO 27001, PCI-DSS",
                    "Identificação de vulnerabilidades críticas e riscos operacionais",
                    "Plano de ação priorizado com recomendações práticas",
                    "Roadmap de segurança para curto, médio e longo prazo"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-[#e63946]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e63946]/20 transition-colors">
                        <div className="w-3 h-3 rounded-full bg-[#e63946]"></div>
                      </div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to action card */}
              <div className="bg-gradient-to-br from-[#e63946]/5 to-[#e63946]/10 rounded-3xl p-8 border border-[#e63946]/20">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  O primeiro passo para uma segurança real começa aqui.
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Muitas empresas só investem em segurança depois de um incidente. Com o Assessment da dataRain, 
                  você ganha visibilidade antes que os riscos virem problemas.
                </p>

                <div className="inline-flex items-center gap-2 bg-[#e63946]/10 rounded-full px-4 py-2 mb-6">
                  <Lightbulb className="w-4 h-4 text-[#e63946]" />
                  <span className="text-sm font-medium text-[#e63946]">Diferenciais</span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-foreground">Por que somos diferentes?</h4>
                <div className="space-y-3">
                  {[
                    "Análise técnica e estratégica, com foco real em impacto e compliance",
                    "Metodologia própria validada com dezenas de empresas",
                    "Especialistas certificados em segurança AWS",
                    "Foco na prevenção, não na remediação",
                    "Resultados acionáveis desde o primeiro dia"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#e63946] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
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
