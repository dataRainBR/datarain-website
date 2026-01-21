import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Cloud, ArrowRight, CheckCircle2, Zap, Users, Settings } from "lucide-react";

const DevOps = () => {
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
              DevOps e <br />
              <span className="text-[#f78504]">Modernization</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Revolucione a forma como você desenvolve, implanta e opera softwares. 
              Nossa oferta de DevOps irá ajudar sua empresa a alcançar todo o potencial de seus negócios.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios do DevOps</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Integre equipes e acelere entregas com automação
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
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-[#f78504] transition-colors duration-300">Entrega Contínua</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Automatização da compilação, teste e implantação de código para deploys frequentes.
                </p>
              </div>
            </div>

            <div className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-[#f78504]/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f78504]/20 via-orange-400/10 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#f78504]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative z-10 p-8 md:p-10">
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#f78504] to-orange-400 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="w-16 h-16 bg-gradient-to-br from-[#f78504] to-orange-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Settings className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-[#f78504] transition-colors duration-300">Confiabilidade</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Detecção antecipada de problemas e atualizações sem downtime para maior estabilidade.
                </p>
              </div>
            </div>

            <div className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-[#f78504]/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f78504]/20 via-orange-400/10 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#f78504]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative z-10 p-8 md:p-10">
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#f78504] to-orange-400 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="w-16 h-16 bg-gradient-to-br from-[#f78504] to-orange-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-[#f78504] transition-colors duration-300">Colaboração</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Colaboração aprimorada entre equipes de desenvolvimento e operações.
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
              <h3 className="text-2xl font-bold mb-6 text-foreground">Com nossa solução DevOps, você obterá:</h3>
              <ul className="space-y-3">
                {[
                  "Entrega contínua através da automatização da compilação, teste e implantação de código",
                  "Maior confiabilidade operacional com detecção antecipada de problemas",
                  "Atualizações sem downtime para manter serviços sempre disponíveis",
                  "Colaboração aprimorada entre as equipes de desenvolvimento e operações",
                  "Aumento de produtividade com a eliminação de tarefas manuais repetitivas"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#f78504] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border/20">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Ferramentas e Tecnologias
              </h3>
              <p className="text-muted-foreground mb-6">
                Criamos pipelines ágeis integrando as melhores ferramentas do mercado:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "AWS CodePipeline",
                  "Jenkins",
                  "Docker",
                  "Kubernetes",
                  "GitHub",
                  "Terraform"
                ].map((tool, index) => (
                  <div key={index} className="bg-muted/30 rounded-xl p-4 text-center">
                    <span className="font-semibold text-foreground">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border/20 mt-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Nossa Abordagem Personalizada
              </h3>
              <ul className="space-y-4">
                {[
                  "Avaliação aprofundada do seu ambiente e requisitos",
                  "Configuração e implementação da esteira de deploy ideal",
                  "Treinamento abrangente e suporte contínuo"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#f78504] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-muted-foreground pt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default DevOps;