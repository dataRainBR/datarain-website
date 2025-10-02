import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import migracaoImage from "@/assets/solutions/cloud-migration.jpg";

const Migracao = () => {
  const benefits = [
    "Redução de até 40% nos custos de infraestrutura",
    "Zero downtime durante o processo de migração",
    "Escalabilidade automática e sob demanda",
    "Backup e recuperação automatizados"
  ];

  const steps = [
    { title: "Análise", desc: "Avaliação completa da infraestrutura atual" },
    { title: "Planejamento", desc: "Estratégia de migração personalizada" },
    { title: "Execução", desc: "Migração com zero downtime" },
    { title: "Otimização", desc: "Ajustes e melhorias contínuas" }
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
              Migração para Cloud
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Migre sua infraestrutura para a nuvem com segurança, velocidade e zero downtime. 
              Transforme custos fixos em variáveis e ganhe escalabilidade ilimitada.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que migrar para a nuvem?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforme seu negócio com os benefícios comprovados da computação em nuvem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3893af]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-[#3893af]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Redução de Custos</h3>
              <p className="text-muted-foreground">Até 40% de economia em infraestrutura</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#3893af]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-[#3893af]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Agilidade</h3>
              <p className="text-muted-foreground">Deploy em minutos, não em semanas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#3893af]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-[#3893af]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Segurança</h3>
              <p className="text-muted-foreground">Proteção enterprise-grade 24/7</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#3893af]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-[#3893af]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Zero Downtime</h3>
              <p className="text-muted-foreground">Migração sem interrupção de serviços</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Metodologia</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Processo estruturado e comprovado para migração segura
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/20 h-full">
                  <div className="w-12 h-12 bg-[#3893af] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#3893af]/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">O que está incluído</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 rounded-xl bg-background/50">
                <CheckCircle2 className="h-6 w-6 text-[#3893af] flex-shrink-0 mt-1" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3893af] to-[#2d7a94]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para migrar para a nuvem?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Fale com nossos especialistas e descubra como podemos acelerar sua transformação digital
          </p>
          <button className="px-8 py-4 bg-white text-[#3893af] rounded-lg font-semibold hover:shadow-xl transition-all">
            Agendar Consultoria Gratuita
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Migracao;
