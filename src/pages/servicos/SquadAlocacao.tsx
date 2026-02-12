import React from 'react';
import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Database, Brain, Shield, Cloud, Layers, CheckCircle2, Users, Zap, TrendingUp, Target } from "lucide-react";

const SquadAlocacao = () => {
  const diferenciais = [
    {
      icon: Users,
      title: "Especialistas de ponta",
      description: "Profissionais certificados e atualizados nas tecnologias mais relevantes."
    },
    {
      icon: Target,
      title: "Formação sob medida",
      description: "Squads montados de acordo com as necessidades e objetivos do seu projeto."
    },
    {
      icon: Zap,
      title: "Entrega imediata",
      description: "Redução do tempo de ramp-up, com equipes prontas para executar."
    },
    {
      icon: TrendingUp,
      title: "Escalabilidade",
      description: "Flexibilidade para ampliar ou reduzir a equipe conforme a demanda."
    }
  ];

  const areas = [
    { name: "Dados", icon: Database },
    { name: "IA", icon: Brain },
    { name: "Cibersegurança", icon: Shield },
    { name: "Arquitetura", icon: Layers },
    { name: "Cloud", icon: Cloud }
  ];

  const processoSteps = [
    {
      number: "01",
      title: "Diagnóstico rápido",
      description: "Entendemos suas necessidades e objetivos."
    },
    {
      number: "02",
      title: "Seleção assertiva",
      description: "Apresentamos os perfis ideais ou estruturamos seu squad sob medida."
    },
    {
      number: "03",
      title: "Onboarding ágil",
      description: "Profissionais integrados em poucos dias."
    },
    {
      number: "04",
      title: "Acompanhamento contínuo",
      description: "Gestão próxima para garantir performance e resultados."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 sm:-top-32 sm:-right-32 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 sm:-bottom-32 sm:-left-32 w-[350px] sm:w-[500px] md:w-[700px] h-[350px] sm:h-[500px] md:h-[700px] bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] md:w-[500px] h-[200px] sm:h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24 pt-40 sm:pt-44 md:pt-48 lg:pt-52">
          <div className="max-w-5xl mx-auto text-center">
            <div className="backdrop-blur-sm bg-card/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-border/20 shadow-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 text-foreground">
                Squad & Alocação dataRain
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-6 sm:mb-8">
                Times sob medida para acelerar sua transformação digital.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
                Na dataRain, você encontra a flexibilidade que o seu negócio precisa: desde a alocação de especialistas até a formação de squads multidisciplinares, prontos para entregar valor desde o primeiro dia.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="/fale-conosco">Marcar uma Conversa</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Por que escolher Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 rounded-full text-accent text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Diferenciais
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Por que escolher a dataRain?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {diferenciais.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-card to-card/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border/20 shadow-xl backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Modelos de Atuação Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/5"></div>
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Flexibilidade Total
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Modelos de Atuação
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Alocação de Profissionais */}
              <div className="bg-gradient-to-br from-card via-card to-card/50 rounded-3xl p-8 md:p-10 border border-primary/20 shadow-2xl backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Alocação de Profissionais
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Quando o que você precisa é de especialistas integrados ao seu time, com foco total na sua operação.
                </p>
              </div>

              {/* Squads Multidisciplinares */}
              <div className="bg-gradient-to-br from-card via-card to-card/50 rounded-3xl p-8 md:p-10 border border-primary/20 shadow-2xl backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Squads Multidisciplinares
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  Equipes completas, autônomas e orientadas a resultados.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Do discovery à entrega, com metodologia ágil e liderança técnica para acelerar cada fase do seu projeto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas Disponíveis Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 rounded-full text-accent text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Expertise
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Áreas Disponíveis
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {areas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-6 md:p-8 border border-border/20 shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-300 flex flex-col items-center justify-center text-center group backdrop-blur-sm"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-primary">
                      {area.name}
                    </h3>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-10 sm:mt-12">
              <Button variant="hero" size="xl" asChild>
                <a href="/fale-conosco">Quero Contratar Especialistas!</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 rounded-full text-accent text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Jornada
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Como Funciona?
              </h2>
            </div>

            {/* Timeline Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
              {/* Linha conectora horizontal (desktop) */}
              <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-20"></div>
              
              {processoSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Card */}
                  <div className="bg-gradient-to-br from-card to-card/50 rounded-3xl p-6 md:p-8 border border-border/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 backdrop-blur-sm group h-full flex flex-col">
                    {/* Número grande no topo */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="relative">
                        <div className="text-7xl md:text-8xl font-bold text-primary/10 leading-none">
                          {step.number}
                        </div>
                        <div className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary shadow-xl flex items-center justify-center">
                          <span className="text-white font-bold text-xl md:text-2xl">{step.number}</span>
                        </div>
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Seta conectora (mobile/tablet) */}
                  {index < processoSteps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-card via-card to-card/50 rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl border border-border/20 backdrop-blur-sm">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Precisa acelerar resultados com tecnologia?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed">
                Conte com a dataRain para montar o time certo, no momento certo.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="/fale-conosco">Fale com um especialista →</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SquadAlocacao;
