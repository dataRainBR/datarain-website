import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Cloud, ArrowRight, CheckCircle2, TrendingDown, Eye, Target } from "lucide-react";

const FinOps = () => {
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
              Gestão de <br />
              <span className="text-[#f78504]">FinOps</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Otimizar custos na nuvem nunca foi tão fácil. Com a Gestão de FinOps da dataRain, você obtém visibilidade completa 
              dos seus gastos na nuvem e implementa estratégias eficientes para reduzir custos sem comprometer o desempenho.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios do FinOps</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Resultados tangíveis para otimização de custos cloud
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-[#f78504]/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f78504]/20 via-orange-400/10 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#f78504]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative z-10 p-8 md:p-10">
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#f78504] to-orange-400 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="w-16 h-16 bg-gradient-to-br from-[#f78504] to-orange-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <TrendingDown className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-[#f78504] transition-colors duration-300">Redução de Custos</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Identificação e correção de ineficiências para reduzir significativamente seus gastos na nuvem.
                </p>
              </div>
            </div>

            <div className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-[#f78504]/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f78504]/20 via-orange-400/10 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#f78504]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative z-10 p-8 md:p-10">
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#f78504] to-orange-400 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="w-16 h-16 bg-gradient-to-br from-[#f78504] to-orange-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-[#f78504] transition-colors duration-300">Visibilidade Total</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Visibilidade completa do uso de recursos e gastos com dashboards em tempo real.
                </p>
              </div>
            </div>

            <div className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-[#f78504]/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f78504]/20 via-orange-400/10 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#f78504]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative z-10 p-8 md:p-10">
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#f78504] to-orange-400 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="w-16 h-16 bg-gradient-to-br from-[#f78504] to-orange-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-[#f78504] transition-colors duration-300">Alinhamento</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Alinhamento perfeito entre gastos e objetivos de negócios com governança financeira aprimorada.
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
            <div className="bg-gradient-to-br from-[#f78504]/5 to-[#f78504]/10 rounded-2xl p-8 border border-[#f78504]/20 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Com a Gestão de FinOps, você obtém:</h3>
              <ul className="space-y-3">
                {[
                  "Otimização contínua de custos na nuvem",
                  "Visibilidade completa do uso de recursos e gastos",
                  "Identificação de oportunidades de economia",
                  "Governança financeira aprimorada",
                  "Alinhamento entre equipes de negócios e tecnologia",
                  "Agilidade e inovação sustentáveis",
                  "Conscientização organizacional sobre custos"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#f78504] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border/20">
              <h3 className="text-2xl font-bold mb-8 text-foreground">Nossa abordagem em três estágios:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#f78504] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    1
                  </div>
                  <h4 className="font-bold mb-2">Avaliação</h4>
                  <p className="text-sm text-muted-foreground">
                    Avaliar a infraestrutura atual, estimar novos custos e identificar riscos.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#f78504] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    2
                  </div>
                  <h4 className="font-bold mb-2">Preparação</h4>
                  <p className="text-sm text-muted-foreground">
                    Discutir com os responsáveis e preparar a organização para as mudanças.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#f78504] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    3
                  </div>
                  <h4 className="font-bold mb-2">Execução</h4>
                  <p className="text-sm text-muted-foreground">
                    Executar as alterações seguindo a estratégia definida, validando resultados.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border/20 mt-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Resultados Comprovados
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-muted/30 rounded-xl">
                  <p className="text-3xl font-bold text-[#f78504]">30%</p>
                  <p className="text-sm text-muted-foreground">Redução em bancos de dados (Financeiro)</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-xl">
                  <p className="text-3xl font-bold text-[#f78504]">25%</p>
                  <p className="text-sm text-muted-foreground">Economia em aplicações (Saúde)</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-xl">
                  <p className="text-3xl font-bold text-[#f78504]">40%</p>
                  <p className="text-sm text-muted-foreground">Economia em VMs (Agronegócio)</p>
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

export default FinOps;