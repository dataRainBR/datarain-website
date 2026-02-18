import React from 'react';
import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SolutionHero from "@/components/solutions/SolutionHero";
import { SEO } from "@/components/SEO";
import { Cloud, CheckCircle2, Zap, Users, Settings, GitBranch, Wrench, Layers } from "lucide-react";

const DevOps = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="DevOps e Modernization" description="Revolucione o desenvolvimento e operação de software com práticas DevOps e modernização na AWS." canonical="/solucoes/cloud/devops" />
      <UniversalHeader showHeroSection={false} />
      
      <SolutionHero
        pillarLabel="Cloud"
        pillarIcon={Cloud}
        title="DevOps e"
        highlightedText="Modernization"
        description="Revolucione a forma como você desenvolve, implanta e opera softwares. Nossa oferta de DevOps irá ajudar sua empresa a alcançar todo o potencial de seus negócios."
        pillarColor="#f78504"
      />

      {/* Benefits Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#f78504]/10 rounded-full px-4 py-2 mb-4">
              <GitBranch className="w-4 h-4 text-[#f78504]" />
              <span className="text-sm font-medium text-[#f78504]">Vantagens</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Benefícios do DevOps</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Integre equipes e acelere entregas com automação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { icon: Zap, title: "Entrega Contínua", desc: "Automatização da compilação, teste e implantação de código para deploys frequentes." },
              { icon: Settings, title: "Confiabilidade", desc: "Detecção antecipada de problemas e atualizações sem downtime para maior estabilidade." },
              { icon: Users, title: "Colaboração", desc: "Colaboração aprimorada entre equipes de desenvolvimento e operações." }
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

      {/* What You Get & Tools Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Checklist */}
              <div className="bg-gradient-to-br from-[#f78504]/5 to-[#f78504]/10 rounded-3xl p-8 border border-[#f78504]/20">
                <h3 className="text-2xl font-bold mb-8 text-foreground">Com nossa solução DevOps, você obterá:</h3>
                <div className="space-y-4">
                  {[
                    "Entrega contínua através da automatização da compilação, teste e implantação de código",
                    "Maior confiabilidade operacional com detecção antecipada de problemas",
                    "Atualizações sem downtime para manter serviços sempre disponíveis",
                    "Colaboração aprimorada entre as equipes de desenvolvimento e operações",
                    "Aumento de produtividade com a eliminação de tarefas manuais repetitivas"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#f78504] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Tools */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[#f78504]/10 rounded-full px-4 py-2 mb-6">
                  <Wrench className="w-4 h-4 text-[#f78504]" />
                  <span className="text-sm font-medium text-[#f78504]">Tecnologias</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Ferramentas e Tecnologias</h2>
                <p className="text-muted-foreground mb-8">
                  Criamos pipelines ágeis integrando as melhores ferramentas do mercado:
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "AWS CodePipeline",
                    "Jenkins",
                    "Docker",
                    "Kubernetes",
                    "GitHub",
                    "Terraform"
                  ].map((tool, index) => (
                    <div key={index} className="bg-card rounded-xl p-4 border border-border/50 text-center hover:border-[#f78504]/40 transition-all hover:shadow-md">
                      <span className="font-semibold text-foreground">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#f78504]/10 rounded-full px-4 py-2 mb-4">
                <Layers className="w-4 h-4 text-[#f78504]" />
                <span className="text-sm font-medium text-[#f78504]">Metodologia</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Abordagem Personalizada</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { num: 1, title: "Avaliação", desc: "Avaliação aprofundada do seu ambiente e requisitos" },
                { num: 2, title: "Implementação", desc: "Configuração e implementação da esteira de deploy ideal" },
                { num: 3, title: "Suporte", desc: "Treinamento abrangente e suporte contínuo" }
              ].map((step, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 border border-border/50 text-center group hover:border-[#f78504]/40 transition-all duration-300 hover:shadow-lg">
                  <div className="w-14 h-14 bg-[#f78504] rounded-xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
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

export default DevOps;
