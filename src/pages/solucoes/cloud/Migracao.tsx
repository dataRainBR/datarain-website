import React from 'react';
import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SolutionHero from "@/components/solutions/SolutionHero";
import { Cloud, CheckCircle2, Zap, Shield, TrendingUp, Rocket, Settings, BarChart3 } from "lucide-react";

const Migracao = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      <SolutionHero
        pillarLabel="Cloud"
        pillarIcon={Cloud}
        title="Migração e"
        highlightedText="Disaster Recovery"
        description="Transforme seu negócio com a migração para a nuvem AWS. Nossa solução assessora e executa cada etapa necessária para migrar sua infraestrutura, aplicativos e dados com segurança, agilidade e eficiência."
        pillarColor="hsl(var(--pillar-cloud))"
      />

      {/* Benefits Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
              <Rocket className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Vantagens</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Benefícios da Migração</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A migração para a nuvem AWS oferece inúmeros benefícios para impulsionar a inovação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { icon: Zap, title: "Escalabilidade", desc: "Responda rapidamente a flutuações de tráfego, lance novos produtos com agilidade e inove de forma contínua." },
              { icon: Shield, title: "Segurança", desc: "Segurança reforçada por meio das melhores práticas do provedor, com alta disponibilidade garantida." },
              { icon: TrendingUp, title: "Economia", desc: "Economia de custos com infraestrutura e eficiência no uso de recursos financeiros e humanos." }
            ].map((item, index) => (
              <div key={index} className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-accent/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 p-8">
                  <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center text-accent-foreground mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
                  <Settings className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent">Metodologia</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Framework Estruturado
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Nossa solução de Migração para AWS assessora e executa cada etapa necessária para transacionar sua 
                  infraestrutura, aplicativos e dados para a nuvem, utilizando ferramentas especializadas.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Análise da infraestrutura atual",
                    "Planejamento da estratégia ideal",
                    "Preparação de pessoas e sistemas",
                    "Execução da migração com monitoramento",
                    "Validação e otimização pós-migração"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Tools */}
              <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl p-8 border border-accent/20">
                <h3 className="text-xl font-bold mb-6 text-foreground">Ferramentas AWS</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { name: "Migration Evaluator", desc: "Análise de custo-benefício" },
                    { name: "Migration Hub", desc: "Rastreamento centralizado" },
                    { name: "MAP", desc: "Migration Acceleration Program" }
                  ].map((tool, index) => (
                    <div key={index} className="bg-card/60 backdrop-blur-sm rounded-xl p-5 border border-border/30">
                      <h4 className="font-semibold text-foreground mb-1">{tool.name}</h4>
                      <p className="text-sm text-muted-foreground">{tool.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
                <BarChart3 className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Setores</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Aplicações por Setor</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Saúde", desc: "Diagnósticos precisos e tratamentos personalizados." },
                { title: "Agronegócio", desc: "Aumento da produtividade e sustentabilidade." },
                { title: "Financeiro", desc: "Detecção de fraudes e análise de riscos." },
                { title: "Varejo", desc: "Experiência do cliente aprimorada." }
              ].map((sector, index) => (
                <div key={index} className="group bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{sector.title}</h3>
                  <p className="text-sm text-muted-foreground">{sector.desc}</p>
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

export default Migracao;
