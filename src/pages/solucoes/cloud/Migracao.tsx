import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Cloud, ArrowRight, CheckCircle2, Zap, Shield, TrendingUp } from "lucide-react";

const Migracao = () => {
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
              <Cloud className="w-5 h-5 text-[#f78504]" />
              <span className="text-sm font-medium text-[#f78504]">Cloud</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-foreground">
              Migração e <br />
              <span className="text-[#f78504]">Disaster Recovery</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Transforme seu negócio com a migração para a nuvem AWS. Nossa solução assessora e executa cada etapa 
              necessária para migrar sua infraestrutura, aplicativos e dados com segurança, agilidade e eficiência.
            </p>

            <a 
              href="/fale-conosco" 
              className="inline-flex items-center gap-2 bg-[#f78504] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#d97203] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios da Migração</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A migração para a nuvem AWS oferece inúmeros benefícios para impulsionar a inovação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-[#f78504]/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f78504]/20 via-orange-400/10 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#f78504]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative z-10 p-8 md:p-10">
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#f78504] to-orange-400 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="w-16 h-16 bg-gradient-to-br from-[#f78504] to-orange-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-[#f78504] transition-colors duration-300">Escalabilidade</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Responda rapidamente a flutuações de tráfego, lance novos produtos com agilidade e inove de forma contínua.
                </p>
              </div>
            </div>

            <div className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-[#f78504]/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f78504]/20 via-orange-400/10 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#f78504]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative z-10 p-8 md:p-10">
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#f78504] to-orange-400 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="w-16 h-16 bg-gradient-to-br from-[#f78504] to-orange-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-[#f78504] transition-colors duration-300">Segurança</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Segurança reforçada por meio das melhores práticas do provedor, com alta disponibilidade garantida.
                </p>
              </div>
            </div>

            <div className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-[#f78504]/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f78504]/20 via-orange-400/10 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#f78504]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative z-10 p-8 md:p-10">
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#f78504] to-orange-400 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="w-16 h-16 bg-gradient-to-br from-[#f78504] to-orange-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-[#f78504] transition-colors duration-300">Economia</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Economia de custos com infraestrutura e eficiência no uso de recursos financeiros e humanos.
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
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Framework Estruturado
              </h2>
              
              <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
                <p>
                  Nossa solução de Migração para AWS <strong>assessora e executa cada etapa</strong> necessária para transacionar sua 
                  <strong> infraestrutura, aplicativos e dados</strong> para a nuvem.
                </p>
                
                <p>
                  O processo envolve o uso de ferramentas especializadas como <strong>Migration Evaluator</strong>, 
                  <strong> Migration Hub</strong> e o <strong>Migration Acceleration Program</strong>.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  "Análise da infraestrutura atual",
                  "Planejamento da estratégia ideal",
                  "Preparação de pessoas e sistemas",
                  "Execução da migração com monitoramento",
                  "Validação e otimização pós-migração"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#f78504] flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f78504]/5 to-[#f78504]/10 rounded-2xl p-8 md:p-12 border border-[#f78504]/20 mt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Aplicações por Setor
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Saúde</h3>
                  <p className="text-sm text-muted-foreground">
                    Diagnósticos precisos e tratamentos personalizados.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Agronegócio</h3>
                  <p className="text-sm text-muted-foreground">
                    Aumento da produtividade e sustentabilidade.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Financeiro</h3>
                  <p className="text-sm text-muted-foreground">
                    Detecção de fraudes e análise de riscos.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Varejo</h3>
                  <p className="text-sm text-muted-foreground">
                    Experiência do cliente aprimorada.
                  </p>
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

export default Migracao;