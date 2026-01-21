import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SolutionHero from "@/components/solutions/SolutionHero";
import { Cloud, CheckCircle2, TrendingDown, Eye, Target, BarChart3, Coins, LineChart } from "lucide-react";

const FinOps = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      <SolutionHero
        pillarLabel="Cloud"
        pillarIcon={Cloud}
        title="Gestão de"
        highlightedText="FinOps"
        description="Otimizar custos na nuvem nunca foi tão fácil. Com a Gestão de FinOps da dataRain, você obtém visibilidade completa dos seus gastos na nuvem e implementa estratégias eficientes para reduzir custos sem comprometer o desempenho."
        pillarColor="#f78504"
      />

      {/* Benefits Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#f78504]/10 rounded-full px-4 py-2 mb-4">
              <Coins className="w-4 h-4 text-[#f78504]" />
              <span className="text-sm font-medium text-[#f78504]">Resultados</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Benefícios do FinOps</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Resultados tangíveis para otimização de custos cloud
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { icon: TrendingDown, title: "Redução de Custos", desc: "Identificação e correção de ineficiências para reduzir significativamente seus gastos na nuvem." },
              { icon: Eye, title: "Visibilidade Total", desc: "Visibilidade completa do uso de recursos e gastos com dashboards em tempo real." },
              { icon: Target, title: "Alinhamento", desc: "Alinhamento perfeito entre gastos e objetivos de negócios com governança financeira aprimorada." }
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

      {/* What You Get Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Checklist */}
              <div className="bg-gradient-to-br from-[#f78504]/5 to-[#f78504]/10 rounded-3xl p-8 border border-[#f78504]/20">
                <h3 className="text-2xl font-bold mb-8 text-foreground">Com a Gestão de FinOps, você obtém:</h3>
                <div className="space-y-4">
                  {[
                    "Otimização contínua de custos na nuvem",
                    "Visibilidade completa do uso de recursos e gastos",
                    "Identificação de oportunidades de economia",
                    "Governança financeira aprimorada",
                    "Alinhamento entre equipes de negócios e tecnologia",
                    "Agilidade e inovação sustentáveis",
                    "Conscientização organizacional sobre custos"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#f78504] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Approach */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[#f78504]/10 rounded-full px-4 py-2 mb-6">
                  <LineChart className="w-4 h-4 text-[#f78504]" />
                  <span className="text-sm font-medium text-[#f78504]">Abordagem</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Nossa abordagem em três estágios</h2>
                
                <div className="space-y-6">
                  {[
                    { num: 1, title: "Avaliação", desc: "Avaliar a infraestrutura atual, estimar novos custos e identificar riscos." },
                    { num: 2, title: "Preparação", desc: "Discutir com os responsáveis e preparar a organização para as mudanças." },
                    { num: 3, title: "Execução", desc: "Executar as alterações seguindo a estratégia definida, validando resultados." }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-[#f78504] rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{step.title}</h4>
                        <p className="text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#f78504]/10 rounded-full px-4 py-2 mb-4">
                <BarChart3 className="w-4 h-4 text-[#f78504]" />
                <span className="text-sm font-medium text-[#f78504]">Resultados</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Resultados Comprovados</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { value: "30%", label: "Redução em bancos de dados", sector: "Financeiro" },
                { value: "25%", label: "Economia em aplicações", sector: "Saúde" },
                { value: "40%", label: "Economia em VMs", sector: "Agronegócio" }
              ].map((result, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 border border-border/50 text-center group hover:border-[#f78504]/40 transition-all duration-300 hover:shadow-lg">
                  <p className="text-5xl font-bold text-[#f78504] mb-3 group-hover:scale-110 transition-transform">{result.value}</p>
                  <p className="text-foreground font-medium mb-1">{result.label}</p>
                  <p className="text-sm text-muted-foreground">{result.sector}</p>
                </div>
              ))}
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
