import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import assessmentHero from "@/assets/solutions/assessment-hero.jpg";

const Assessment = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section with Image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${assessmentHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-24 lg:py-28 pt-32 md:pt-36">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6 text-foreground">
              Assessment de Segurança
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Assessment de Segurança que antecipa riscos e desbloqueia governança
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-gradient-to-b from-background via-background/95 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Na dataRain, acreditamos que segurança de verdade começa com clareza sobre o que está em risco. 
                O Assessment de Segurança da dataRain é o primeiro passo para entender onde sua empresa está, onde precisa chegar — e o que precisa mudar para isso acontecer com segurança, eficiência e conformidade.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Mais do que um relatório, entregamos uma visão estratégica e priorizada da sua maturidade em segurança, com base nas melhores práticas da AWS, requisitos regulatórios e o que realmente funciona na prática.
              </p>
            </div>

            {/* Destaque */}
            <div className="bg-primary/10 border-l-4 border-primary rounded-r-xl p-6">
              <p className="text-xl font-semibold text-foreground">
                Segurança não é apagar incêndios. É prevenir com inteligência.
              </p>
            </div>

            {/* Como fazemos */}
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border/20">
              <p className="text-muted-foreground leading-relaxed mb-8">
                Não importa o seu estágio atual: nós mapeamos vulnerabilidades, avaliamos sua arquitetura e mostramos, com dados, os riscos que sua empresa corre — e como corrigi-los com estratégia.
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">E como fazemos isso?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Diagnóstico completo da arquitetura e das políticas de segurança
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Análise de conformidade com normas como LGPD, ISO 27001, PCI-DSS
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Identificação de vulnerabilidades críticas e riscos operacionais
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Plano de ação priorizado com recomendações práticas
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Roadmap de segurança para curto, médio e longo prazo
                  </p>
                </div>
              </div>
            </div>

            {/* Impacto */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                O primeiro passo para uma segurança real começa aqui.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Muitas empresas só investem em segurança depois de um incidente. Com o Assessment da dataRain, você ganha visibilidade antes que os riscos virem problemas.
              </p>
            </div>

            {/* Diferenciais */}
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border/20">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Por que o Assessment da dataRain é diferente?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Análise técnica e estratégica, com foco real em impacto e compliance
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Metodologia própria validada com dezenas de empresas
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Especialistas certificados em segurança AWS, cloud e governança
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Foco na prevenção, não na remediação
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Resultados acionáveis desde o primeiro dia
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <CTA />
      <Footer />
    </div>
  );
};

export default Assessment;