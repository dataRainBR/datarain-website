import React from 'react';
import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Rocket, Code2, Palette, Brain, Sparkles, Zap, 
  Globe, Smartphone, BarChart3, Shield, Cloud, 
  CheckCircle2, ArrowRight, Layers, Eye, Timer,
  Cpu, Lightbulb, Target, TrendingUp, Infinity
} from "lucide-react";
import { SEO } from "@/components/SEO";

const Desenvolvimento360 = () => {
  const capacidades = [
    {
      icon: Globe,
      title: "Plataformas Web",
      description: "Aplicações web modernas, responsivas e escaláveis — do SaaS ao marketplace.",
      color: "primary"
    },
    {
      icon: Smartphone,
      title: "Apps Mobile",
      description: "Experiências nativas e cross-platform que seus usuários vão amar.",
      color: "primary"
    },
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description: "Agentes de IA, automações inteligentes e modelos customizados integrados ao seu produto.",
      color: "primary"
    },
    {
      icon: BarChart3,
      title: "BI & Analytics",
      description: "Dashboards, pipelines de dados e insights que transformam decisões.",
      color: "primary"
    },
    {
      icon: Cloud,
      title: "Infraestrutura Cloud",
      description: "Arquitetura AWS nativa, serverless, escalável e otimizada desde o dia zero.",
      color: "primary"
    },
    {
      icon: Shield,
      title: "Segurança by Design",
      description: "Cada linha de código nasce com segurança, compliance e boas práticas embarcadas.",
      color: "primary"
    }
  ];

  const diferenciais = [
    {
      icon: Zap,
      title: "10x mais rápido",
      description: "Combinamos engenharia de ponta com IA generativa para entregar em semanas o que levaria meses.",
      stat: "10x"
    },
    {
      icon: Palette,
      title: "Design que converte",
      description: "UX/UI pensado para resultado. Cada pixel tem propósito, cada interação tem intenção.",
      stat: "UX"
    },
    {
      icon: Layers,
      title: "Full-stack de verdade",
      description: "Do design ao deploy, da ideia ao produto em produção. Sem gaps, sem handoffs perdidos.",
      stat: "360°"
    },
    {
      icon: TrendingUp,
      title: "Escala nativa",
      description: "Construímos sobre AWS com arquiteturas que crescem junto com seu negócio.",
      stat: "∞"
    }
  ];

  const processoSteps = [
    {
      number: "01",
      title: "Discovery & Ideação",
      description: "Mergulhamos no seu negócio. Entendemos o problema, mapeamos oportunidades e desenhamos a solução ideal.",
      icon: Lightbulb,
      color: "primary"
    },
    {
      number: "02",
      title: "Design & Prototipação",
      description: "Criamos protótipos interativos e validamos com usuários reais antes de escrever uma linha de código.",
      icon: Palette,
      color: "primary"
    },
    {
      number: "03",
      title: "Desenvolvimento Acelerado",
      description: "Engenharia moderna com IA como copiloto. Sprints curtos, entregas frequentes, qualidade inegociável.",
      icon: Code2,
      color: "primary"
    },
    {
      number: "04",
      title: "Deploy & Evolução",
      description: "Lançamento em produção com monitoramento, otimização contínua e evolução orientada por dados.",
      icon: Rocket,
      color: "primary"
    }
  ];

  const tecnologias = [
    "React", "Next.js", "TypeScript", "Node.js", "Python",
    "AWS Lambda", "DynamoDB", "S3", "CloudFront", "Bedrock",
    "Docker", "Terraform", "GenAI", "LangChain", "IoT"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Desenvolvimento 360" description="Desenvolvimento web, mobile, IA e cloud sob medida. Do conceito ao deploy com tecnologia de ponta." canonical="/servicos/desenvolvimento-360" />
      <UniversalHeader showHeroSection={false} />
      <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background animado mais elaborado */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/15"></div>
        <div className="absolute inset-0">
          <div className="absolute -top-32 -right-32 w-[500px] sm:w-[700px] md:w-[900px] h-[500px] sm:h-[700px] md:h-[900px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-[600px] sm:w-[800px] md:w-[1000px] h-[600px] sm:h-[800px] md:h-[1000px] bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 left-1/4 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-[150px] sm:w-[250px] md:w-[350px] h-[150px] sm:h-[250px] md:h-[350px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Grid pattern sutil */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h1v1H0V0zm20 0h1v1h-1V0zM0 20h1v1H0v-1zm20 0h1v1h-1v-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24 pt-40 sm:pt-44 md:pt-48 lg:pt-52">
          <div className="max-w-6xl mx-auto text-center">
            <div className="backdrop-blur-sm bg-card/20 rounded-3xl p-8 sm:p-10 md:p-16 border border-border/10 shadow-2xl">

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-6 sm:mb-8 text-foreground">
                Desenvolvimento
                <br />
                <span className="text-primary">
                  360°
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/90 mb-6 sm:mb-8 max-w-4xl mx-auto">
                Da ideia ao produto. Do design ao deploy.
                <br className="hidden sm:block" />
                Tudo em um só lugar.
              </p>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10">
                Unimos mais de 40 anos de experiência em design e tecnologia com a potência da nuvem AWS 
                para criar produtos digitais que transformam negócios — com velocidade que você nunca viu.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <a href="/fale-conosco">
                    Quero criar meu produto
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" asChild className="border-primary/30 hover:bg-primary/5">
                  <a href="/cases">
                    Ver Super Cases
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                  Não somos uma fábrica de software.
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6">
                  Somos um estúdio de criação digital. Cada projeto é tratado como único — 
                  porque é. Combinamos a criatividade de um estúdio de design com a engenharia 
                  de uma empresa de tecnologia de ponta.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Com a incorporação da Venture Labs à dataRain, unimos o melhor dos dois mundos: 
                  a capacidade de criar experiências digitais memoráveis com a solidez de quem é 
                  AWS Advanced Partner e já entregou mais de 200 projetos em nuvem.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">40+</div>
                  <div className="text-sm text-muted-foreground">anos de legado em design & tech</div>
                </div>
                <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">projetos AWS entregues</div>
                </div>
                <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10x</div>
                  <div className="text-sm text-muted-foreground">mais rápido com IA generativa</div>
                </div>
                <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">360°</div>
                  <div className="text-sm text-muted-foreground">cobertura completa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capacidades Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/5"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
                Tudo que seu produto digital precisa
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                De plataformas web a apps mobile, de IA a infraestrutura — entregamos o pacote completo
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {capacidades.map((cap, index) => {
                const Icon = cap.icon;
                const bgColor = cap.color === "primary" ? "bg-primary" : "bg-accent";
                return (
                  <div 
                    key={index}
                    className="group bg-card/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${bgColor} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-primary/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
                O que nos torna únicos
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {diferenciais.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-card/80 rounded-3xl p-6 sm:p-8 border border-primary/20 shadow-2xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-3 backdrop-blur-sm text-center"
                  >
                    <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                      {item.stat}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Processo Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
                Do zero ao produto em produção
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Um processo ágil, transparente e orientado a resultados
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
              <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-20"></div>
              
              {processoSteps.map((step, index) => {
                const StepIcon = step.icon;
                const bgColor = step.color === "primary" ? "bg-primary" : "bg-accent";
                const textColor = step.color === "primary" ? "text-primary" : "text-accent";
                const hoverColor = step.color === "primary" ? "group-hover:text-accent" : "group-hover:text-primary";
                const borderColor = step.color === "primary" ? "border-primary/20" : "border-accent/20";
                
                return (
                  <div key={index} className="relative">
                    <div className={`bg-card/80 rounded-3xl p-6 md:p-8 border ${borderColor} shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 backdrop-blur-sm group h-full flex flex-col`}>
                      <div className="flex items-start justify-between mb-6">
                        <div className="relative">
                          <div className={`text-7xl md:text-8xl font-bold ${textColor}/10 leading-none`}>
                            {step.number}
                          </div>
                          <div className={`absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl ${bgColor} shadow-xl flex items-center justify-center`}>
                            <StepIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                          </div>
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className={`text-xl md:text-2xl font-bold ${textColor} mb-4 ${hoverColor} transition-colors duration-300`}>
                          {step.title}
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {index < processoSteps.length - 1 && (
                      <div className="lg:hidden flex justify-center my-4">
                        <div className={`w-8 h-8 rounded-full ${bgColor}/10 flex items-center justify-center`}>
                          <svg className={`w-4 h-4 ${textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8">
              Tecnologias que usamos
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {tecnologias.map((tech, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 md:px-6 md:py-3 bg-card rounded-full border border-border/20 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 text-sm md:text-base font-medium text-foreground hover:text-primary"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card/80 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl border border-primary/20 backdrop-blur-sm">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Sua próxima grande ideia
                <br />
                <span className="text-accent">
                  começa aqui.
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
                Conte pra gente o que você quer construir. 
                A gente transforma em realidade — mais rápido do que você imagina.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <a href="/fale-conosco">
                    Vamos conversar
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Desenvolvimento360;
