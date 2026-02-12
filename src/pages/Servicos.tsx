import React from 'react';
import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Shield, TrendingDown, Lock, Cloud, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Servicos = () => {
  const servicos = [
    {
      icon: Shield,
      title: "Monitoramento e Suporte 24x7",
      description: "Detectamos e resolvemos incidentes antes que eles impactem o negócio."
    },
    {
      icon: TrendingDown,
      title: "FinOps e Otimização Contínua",
      description: "Reduzimos custos sem perder performance, com relatórios de economia real e previsibilidade financeira."
    },
    {
      icon: Lock,
      title: "Gestão de Segurança (SecOps)",
      description: "Aplicamos controles de identidade, compliance e automações para manter seus dados sempre protegidos."
    },
    {
      icon: Cloud,
      title: "Gestão de Ambientes Multicloud e Híbridos",
      description: "Seja AWS, on-premise ou híbrido, cuidamos da operação ponta a ponta."
    },
    {
      icon: FileText,
      title: "Relatórios e Governança",
      description: "Entregamos insights claros sobre disponibilidade, custos, uso e riscos, facilitando decisões estratégicas."
    }
  ];

  const diferenciais = [
    {
      title: "Especialistas AWS no Brasil",
      description: "Premier Consulting Partner, com mais de 200 certificações."
    },
    {
      title: "Modelo flexível",
      description: "Do monitoramento básico até operações críticas."
    },
    {
      title: "SLAs claros e mensuráveis",
      description: "Você sabe exatamente o que esperar — e o que vamos entregar."
    },
    {
      title: "Time dedicado",
      description: "Engenheiros, arquitetos e analistas que atuam como extensão da sua equipe."
    }
  ];

  const processoSteps = [
    {
      number: "01",
      title: "Avaliação inicial",
      description: "Diagnóstico gratuito da maturidade do seu ambiente."
    },
    {
      number: "02",
      title: "Onboarding rápido",
      description: "Integração do seu ambiente às nossas plataformas de monitoramento."
    },
    {
      number: "03",
      title: "Gestão contínua",
      description: "Operação diária, relatórios e recomendações de melhoria."
    },
    {
      number: "04",
      title: "Evolução constante",
      description: "Revisões periódicas para alinhar tecnologia e estratégia de negócio."
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
                Tecnologia que não para.
              </h1>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 sm:mb-8">
                Sua empresa também não pode parar.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
                Na dataRain, entendemos que o verdadeiro valor da tecnologia não está apenas em implementá-la, mas em mantê-la segura, eficiente e em constante evolução. Por isso, oferecemos Serviços Gerenciados que cuidam do seu ambiente em nuvem de ponta a ponta.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground/90 max-w-3xl mx-auto mb-8">
                Trabalhando junto com seu time e deixando espaço para ele focar em novos desafios.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="/fale-conosco">Falar com um Especialista</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* O que entregamos Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Nossa Oferta
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                O que entregamos?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Combinamos nossa experiência em +200 projetos na AWS com uma gestão contínua que se adapta ao momento da sua empresa
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {servicos.map((servico, index) => {
                const Icon = servico.icon;
                return (
                  <div 
                    key={index}
                    className="bg-card rounded-2xl border border-border/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 p-6 md:p-8">
                      <div className="flex items-center gap-4 md:gap-6 flex-1">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
                          <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 md:mb-3">
                            {servico.title}
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {servico.description}
                          </p>
                        </div>
                      </div>

                      <div className="ml-20 md:ml-0">
                        <div className="text-6xl md:text-7xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                          0{index + 1}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Por que escolher Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background"></div>
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
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
              {diferenciais.map((item, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-card to-card/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border/20 shadow-xl backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 rounded-full text-accent text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Jornada
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Como funciona?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Um processo simples e eficiente para transformar sua operação
              </p>
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
                        <div className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-accent to-accent/70 shadow-xl flex items-center justify-center">
                          <span className="text-white font-bold text-xl md:text-2xl">{step.number}</span>
                        </div>
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
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

            {/* Stats decorativo */}
            <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-card rounded-2xl p-4 md:p-6 border border-primary/20 text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">Rápido</div>
                <div className="text-xs md:text-sm text-muted-foreground">Onboarding ágil</div>
              </div>
              <div className="bg-card rounded-2xl p-4 md:p-6 border border-primary/20 text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">Simples</div>
                <div className="text-xs md:text-sm text-muted-foreground">Processo claro</div>
              </div>
              <div className="bg-card rounded-2xl p-4 md:p-6 border border-primary/20 text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">Eficiente</div>
                <div className="text-xs md:text-sm text-muted-foreground">Resultados rápidos</div>
              </div>
              <div className="bg-card rounded-2xl p-4 md:p-6 border border-primary/20 text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">Contínuo</div>
                <div className="text-xs md:text-sm text-muted-foreground">Evolução constante</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-card via-card to-card/50 rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl border border-border/20 backdrop-blur-sm">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Transforme sua TI de um centro de custo em um motor de crescimento.
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed">
                Fale com a dataRain e descubra como os Serviços Gerenciados podem trazer mais segurança, eficiência e inovação para o seu negócio.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="/fale-conosco">Quero falar com um especialista →</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicos;