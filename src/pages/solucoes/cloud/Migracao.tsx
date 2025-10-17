import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import migracaoImage from "@/assets/solutions/cloud-migration.jpg";

const Migracao = () => {
  const benefits = [
    "Escalabilidade sob demanda",
    "Segurança reforçada com melhores práticas",
    "Alta disponibilidade garantida",
    "Economia de custos e eficiência operacional",
    "Análises avançadas de dados",
    "Inovação contínua e agilidade"
  ];

  const steps = [
    { 
      title: "Avaliação", 
      desc: "Análise completa dos ativos atuais com Migration Evaluator",
      icon: "🔍"
    },
    { 
      title: "Planejamento", 
      desc: "Estratégia ideal de migração com framework estruturado",
      icon: "📋"
    },
    { 
      title: "Preparação", 
      desc: "Preparação de pessoas e sistemas para a transição",
      icon: "⚙️"
    },
    { 
      title: "Execução", 
      desc: "Migração segura usando Migration Hub e MAP",
      icon: "🚀"
    }
  ];

  const useCases = [
    {
      area: "Saúde",
      desc: "Diagnósticos precisos e tratamentos personalizados"
    },
    {
      area: "Agronegócio",
      desc: "Aumento de produtividade e sustentabilidade"
    },
    {
      area: "Financeiro",
      desc: "Detecção de fraudes e análise de riscos aprimorada"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section with Image */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={migracaoImage} alt="Cloud Migration" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-[#3893af]/20 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-[#3893af] font-semibold">Cloud Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Migração para AWS
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Transforme seu negócio com a migração para a nuvem AWS. Nossa solução assessora e executa cada etapa necessária para migrar sua infraestrutura, aplicativos e dados com segurança, agilidade e eficiência.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#3893af] text-white rounded-lg font-semibold hover:bg-[#2d7a94] transition-all hover:shadow-xl flex items-center gap-2">
                Começar Migração <ArrowRight className="h-5 w-5" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30">
                Agendar Consultoria
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios da Migração para Nuvem</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A migração para AWS oferece vantagens significativas para impulsionar inovação e crescimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#3893af]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-[#3893af]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Escalabilidade</h3>
              <p className="text-muted-foreground">Responda rapidamente a flutuações de tráfego e lance produtos com agilidade</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#3893af]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-[#3893af]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Segurança Reforçada</h3>
              <p className="text-muted-foreground">Melhores práticas do provedor com proteção contínua</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#3893af]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-[#3893af]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Alta Disponibilidade</h3>
              <p className="text-muted-foreground">Serviços sempre ativos com redundância garantida</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#3893af]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-[#3893af]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Economia</h3>
              <p className="text-muted-foreground">Redução de custos com infraestrutura e eficiência operacional</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#3893af]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-[#3893af]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Inovação</h3>
              <p className="text-muted-foreground">Acelere a transformação digital com tecnologias de ponta</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#3893af]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-[#3893af]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Análise de Dados</h3>
              <p className="text-muted-foreground">Insights estratégicos com análises avançadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Framework Estruturado</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Processo completo de migração com ferramentas especializadas AWS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/20 h-full hover:border-[#3893af]/50 transition-all">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="w-12 h-12 bg-[#3893af] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#3893af]/30"></div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border/20">
              <h3 className="text-2xl font-bold mb-4 text-center">Ferramentas AWS Especializadas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#3893af]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="h-6 w-6 text-[#3893af]" />
                  </div>
                  <h4 className="font-semibold mb-2">Migration Evaluator</h4>
                  <p className="text-sm text-muted-foreground">Análise da infraestrutura atual</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#3893af]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="h-6 w-6 text-[#3893af]" />
                  </div>
                  <h4 className="font-semibold mb-2">Migration Hub</h4>
                  <p className="text-sm text-muted-foreground">Monitoramento e colaboração</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#3893af]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="h-6 w-6 text-[#3893af]" />
                  </div>
                  <h4 className="font-semibold mb-2">MAP</h4>
                  <p className="text-sm text-muted-foreground">Aceleração da migração</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Casos de Uso por Setor</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções em nuvem transformando diferentes indústrias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#3893af]/5 to-[#3893af]/10 rounded-2xl p-8 border border-[#3893af]/20">
                <h3 className="text-2xl font-bold text-[#3893af] mb-3">{useCase.area}</h3>
                <p className="text-muted-foreground">{useCase.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Benefícios Completos da Migração</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 rounded-xl bg-background/50 border border-border/20">
                  <CheckCircle2 className="h-6 w-6 text-[#3893af] flex-shrink-0 mt-1" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3893af] to-[#2d7a94]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            A dataRain entrega a expertise necessária para tirar o máximo proveito da nuvem AWS. Aproveite essa oportunidade de transformação digital e alavanque seus negócios para o próximo nível.
          </p>
          <button className="px-8 py-4 bg-white text-[#3893af] rounded-lg font-semibold hover:shadow-xl transition-all">
            Falar com Especialista
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Migracao;
