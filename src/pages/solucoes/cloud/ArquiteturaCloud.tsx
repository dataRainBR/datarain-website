import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Cloud, ArrowRight, CheckCircle2, Search, Shield, TrendingUp, Target, FileCheck, Lightbulb } from "lucide-react";

const ArquiteturaCloud = () => {
  const pillarColor = "#f78504";
  
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Modern Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f78504]/5 via-background to-background">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-[#f78504]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-[#f78504]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#f78504]/5 rounded-full blur-2xl"></div>
          
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(${pillarColor} 1px, transparent 1px), linear-gradient(90deg, ${pillarColor} 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-40 sm:pt-44 md:pt-48 lg:pt-52 pb-16 md:pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 bg-[#f78504]/10 backdrop-blur-sm border border-[#f78504]/20 rounded-full px-5 py-2.5">
                <Cloud className="w-5 h-5 text-[#f78504]" />
                <span className="text-sm font-semibold text-[#f78504]">Cloud</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-center text-foreground">
              Assessment de{" "}
              <span className="text-[#f78504]">Arquitetura</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10 text-center">
              A base para crescer com segurança e eficiência. Antes de escalar, inovar ou migrar workloads para a nuvem, 
              é preciso garantir que sua arquitetura está preparada para sustentar o que vem pela frente.
            </p>

            <div className="flex justify-center">
              <a 
                href="/fale-conosco" 
                className="group inline-flex items-center gap-3 bg-[#f78504] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#d97203] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#f78504]/25"
              >
                Falar com Especialista
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Why Assessment Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#f78504]/10 rounded-full px-4 py-2 mb-4">
              <Target className="w-4 h-4 text-[#f78504]" />
              <span className="text-sm font-medium text-[#f78504]">Benefícios</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Por que o Assessment?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Decisões inteligentes e sustentáveis em Cloud, Dados e IA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { icon: Search, title: "Diagnóstico Completo", desc: "Entenda onde está, o que pode estar travando seu crescimento e quais os próximos passos." },
              { icon: Shield, title: "Segurança e Governança", desc: "Evolua com segurança, governança e performance garantidas." },
              { icon: TrendingUp, title: "Vantagem Competitiva", desc: "Uma arquitetura excelente gera vantagem competitiva real para o negócio." }
            ].map((item, index) => (
              <div key={index} className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-[#f78504]/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f78504]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#f78504] to-[#d97203] rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#f78504] transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote + How Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Quote */}
            <div className="bg-gradient-to-r from-[#f78504]/10 to-[#f78504]/5 border-l-4 border-[#f78504] rounded-r-2xl p-8 mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Uma boa arquitetura evita desperdícios.
              </h3>
              <p className="text-xl text-foreground mt-2">
                Uma arquitetura excelente gera vantagem competitiva.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* How we do it */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[#f78504]/10 rounded-full px-4 py-2 mb-6">
                  <FileCheck className="w-4 h-4 text-[#f78504]" />
                  <span className="text-sm font-medium text-[#f78504]">Metodologia</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Como fazemos isso?</h2>
                <div className="space-y-4">
                  {[
                    "Análise da arquitetura atual e alinhamento com melhores práticas AWS",
                    "Diagnóstico de gaps de performance, segurança e custo",
                    "Avaliação da maturidade da sua operação em cloud",
                    "Recomendações priorizadas e roadmap técnico com quick wins",
                    "Visão de arquitetura futura, integrada com dados, IA e segurança"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#f78504] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why dataRain */}
              <div className="bg-gradient-to-br from-[#f78504]/5 to-[#f78504]/10 rounded-3xl p-8 border border-[#f78504]/20">
                <div className="inline-flex items-center gap-2 bg-[#f78504]/10 rounded-full px-4 py-2 mb-6">
                  <Lightbulb className="w-4 h-4 text-[#f78504]" />
                  <span className="text-sm font-medium text-[#f78504]">Diferenciais</span>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Por que o Assessment da dataRain?</h3>
                <div className="space-y-4">
                  {[
                    "Diagnóstico técnico + visão estratégica de negócio",
                    "Metodologia validada em centenas de workloads AWS",
                    "Especialistas certificados com experiência em múltiplos setores",
                    "Plano de ação direto ao ponto, com foco em resultado",
                    "Integração total com governança, dados, IA e segurança"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#f78504] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
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

export default ArquiteturaCloud;
