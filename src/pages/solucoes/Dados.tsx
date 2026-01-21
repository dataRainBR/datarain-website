import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import SolutionCard from "@/components/SolutionCard";
import CTA from "@/components/CTA";
import { Brain, BarChart3, Sparkles, Database } from "lucide-react";

const Dados = () => {

  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3893af]/10 via-background to-background">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#3893af]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-[700px] h-[700px] bg-[#3893af]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#3893af]/15 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-24 lg:py-28 pt-40 sm:pt-44 md:pt-48 lg:pt-52">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#3893af]/10 rounded-full px-4 py-2 mb-6">
              <Brain className="w-5 h-5 text-[#3893af]" />
              <span className="text-sm font-medium text-[#3893af]">IA e Dados</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-foreground">
              Dados e IA que <br />
              <span style={{ color: '#3893af' }}>Transformam Negócios</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Transforme dados em insights estratégicos com arquitetura moderna e inteligência artificial. 
              Do data lake à IA generativa, construímos soluções que geram valor real.
            </p>
          </div>
        </div>
      </section>

      {/* Why Data & AI Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-[#3893af]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#3893af]/5 rounded-full blur-3xl" />
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
            <div className="inline-block px-4 py-2 bg-[#3893af]/10 rounded-full text-[#3893af] text-sm font-semibold mb-6">
              Benefícios
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Por que Dados e IA?</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Decisões baseadas em dados são 5x mais rápidas e 6x mais propensas ao sucesso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-[#3893af]/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3893af]/20 via-[#3893af]/10 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                <svg className="absolute right-0 top-0 w-32 h-32 text-[#3893af]/10" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="80" cy="20" r="8" />
                  <circle cx="60" cy="35" r="5" />
                  <circle cx="85" cy="45" r="4" />
                  <path d="M80 20 L60 35 L85 45" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
                </svg>
              </div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#3893af]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative z-10 p-8 md:p-10">
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#3893af] to-sky-500 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="w-16 h-16 bg-gradient-to-br from-[#3893af] to-sky-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-[#3893af] transition-colors duration-300">Insights em Tempo Real</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Acesse insights acionáveis instantaneamente. Dashboards inteligentes que transformam dados complexos em decisões claras.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-[#3893af]/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3893af]/20 via-[#3893af]/10 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                <svg className="absolute right-0 top-0 w-32 h-32 text-[#3893af]/10" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="80" cy="20" r="8" />
                  <circle cx="60" cy="35" r="5" />
                  <circle cx="85" cy="45" r="4" />
                  <path d="M80 20 L60 35 L85 45" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
                </svg>
              </div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#3893af]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative z-10 p-8 md:p-10">
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#3893af] to-sky-500 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="w-16 h-16 bg-gradient-to-br from-[#3893af] to-sky-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-[#3893af] transition-colors duration-300">IA que Aprende</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Modelos de machine learning que evoluem com seu negócio. Previsões cada vez mais precisas e automatizadas.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-[#3893af]/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3893af]/20 via-[#3893af]/10 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                <svg className="absolute right-0 top-0 w-32 h-32 text-[#3893af]/10" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="80" cy="20" r="8" />
                  <circle cx="60" cy="35" r="5" />
                  <circle cx="85" cy="45" r="4" />
                  <path d="M80 20 L60 35 L85 45" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
                </svg>
              </div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#3893af]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative z-10 p-8 md:p-10">
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#3893af] to-sky-500 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="w-16 h-16 bg-gradient-to-br from-[#3893af] to-sky-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Database className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-[#3893af] transition-colors duration-300">Arquitetura Escalável</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Data lakes e warehouses modernos que crescem com você. Governança e qualidade de dados garantidas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfólio Dados e IA */}
      <main className="bg-gradient-to-b from-card/20 via-background to-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções de Dados e IA</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Da arquitetura de dados à IA aplicada, temos a solução ideal para seu desafio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <SolutionCard
              title="Arquitetura e Engenharia de Dados"
              description="Construa data lakes e warehouses escaláveis. Estruture seus dados para análises avançadas e decisões baseadas em dados."
              link="/solucoes/dados/arquitetura"
              pillar="ia"
              benefits={[
                "Data lakes otimizados",
                "ETL pipelines automatizados",
                "Governança de dados"
              ]}
            />

            <SolutionCard
              title="Pilot AI"
              description="Projetos piloto de IA personalizados para validar casos de uso. Teste hipóteses antes de investimentos maiores."
              link="/solucoes/dados/pilot-ai"
              pillar="ia"
              benefits={[
                "MVP em 4-8 semanas",
                "ROI mensurável",
                "Prova de conceito validada"
              ]}
            />

            <SolutionCard
              title="GenAI e ML"
              description="Soluções de inteligência artificial e machine learning para automatizar processos e potencializar decisões."
              link="/solucoes/dados/ia-ml"
              pillar="ia"
              benefits={[
                "Modelos personalizados",
                "Automação inteligente",
                "Insights preditivos"
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

export default Dados;