import React from 'react';
import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SolutionHero from "@/components/solutions/SolutionHero";
import { SEO } from "@/components/SEO";
import { Lightbulb, Sparkles, Target, Clock, TrendingUp, CheckCircle2, Stethoscope, Landmark, Factory } from "lucide-react";

const PilotAI = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Pilot.AI" description="IA Generativa aplicada ao seu desafio de negócio. Projeto prático desenvolvido sob medida e financiado pela AWS." canonical="/solucoes/dados/pilot-ai" />
      <UniversalHeader showHeroSection={false} />
      
      <SolutionHero
        pillarLabel="GenAI e Dados"
        pillarIcon={Lightbulb}
        title="Pilot.AI"
        highlightedText="dataRain"
        description="IA Generativa em ação, aplicada ao seu desafio. Transforme um desafio real do seu negócio em um projeto prático de IA Generativa, desenvolvido sob medida e 100% financiado pela AWS."
        pillarColor="#3893af"
        ctaText="Agendar Reunião"
      />

      {/* What is Pilot.AI */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[#3893af]/10 rounded-full px-4 py-2 mb-6">
                  <Sparkles className="w-4 h-4 text-[#3893af]" />
                  <span className="text-sm font-medium text-[#3893af]">Sobre</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  O que é o Pilot.AI?
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Uma prova de conceito de IA Generativa, criada pela dataRain, para empresas que querem testar o valor real da GenAI antes de investir.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Você traz o desafio. A gente entrega uma solução funcional, personalizada para o seu contexto e com tecnologia AWS de ponta.
                </p>
              </div>

              {/* Benefits Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Target, title: "Baixo custo de investimento" },
                  { icon: Clock, title: "Resultados em até 4 semanas" },
                  { icon: Sparkles, title: "Aplicação prática e personalizada" },
                  { icon: TrendingUp, title: "ROI estimado e plano de evolução" }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-[#3893af]/5 to-[#3893af]/10 rounded-2xl p-6 border border-[#3893af]/20">
                    <item.icon className="w-8 h-8 text-[#3893af] mb-3" />
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-[#3893af]/10 rounded-full px-4 py-2 mb-4">
                <Target className="w-4 h-4 text-[#3893af]" />
                <span className="text-sm font-medium text-[#3893af]">Processo</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Como funciona o Pilot.AI</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: 1, title: "Diagnóstico", desc: "Identificamos, junto com você, um processo de alto impacto para aplicar IA Generativa." },
                { num: 2, title: "Desenho da Solução", desc: "Desenvolvemos a POC usando serviços como AWS Bedrock, SageMaker, Textract e mais." },
                { num: 3, title: "Implementação Real", desc: "Entregamos uma solução funcional, testada com seus dados e dentro da sua estrutura." },
                { num: 4, title: "Avaliação Estratégica", desc: "Você recebe um relatório com métricas de impacto, ROI e caminhos de escalabilidade." }
              ].map((step, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 border border-border/50 hover:border-[#3893af]/40 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-[#3893af] rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-[#3893af]/10 rounded-full px-4 py-2 mb-4">
                <TrendingUp className="w-4 h-4 text-[#3893af]" />
                <span className="text-sm font-medium text-[#3893af]">Resultados</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Histórias de Sucesso</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Stethoscope,
                  sector: "Saúde",
                  challenges: "Tempo excessivo com prontuários, autorizações e tarefas administrativas.",
                  solutions: ["Assistente GenAI para dúvidas clínicas", "Extração automatizada de dados médicos"],
                  impact: "+60% produtividade | menos erros manuais"
                },
                {
                  icon: Landmark,
                  sector: "Financeiro",
                  challenges: "Dados regulatórios, conformidade e suporte em larga escala.",
                  solutions: ["GenAI com NLP para consultas normativas", "Chatbot integrado para atendimento ágil"],
                  impact: "95% precisão | -70% esforço manual"
                },
                {
                  icon: Factory,
                  sector: "Indústria",
                  challenges: "Processos manuais, manutenção reativa, baixa análise de dados.",
                  solutions: ["Análise de sensores com GenAI para prever falhas", "Relatórios operacionais automatizados"],
                  impact: "-35% paradas não planejadas | +22% eficiência"
                }
              ].map((story, index) => (
                <div key={index} className="bg-gradient-to-br from-[#3893af]/5 to-[#3893af]/10 rounded-2xl p-8 border border-[#3893af]/20">
                  <story.icon className="w-10 h-10 text-[#3893af] mb-4" />
                  <h3 className="text-2xl font-bold text-[#3893af] mb-4">{story.sector}</h3>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-1">Desafios:</p>
                    <p className="text-sm text-muted-foreground">{story.challenges}</p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2">Soluções:</p>
                    <div className="space-y-2">
                      {story.solutions.map((solution, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#3893af] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-[#3893af]/20">
                    <p className="text-sm font-semibold text-foreground mb-1">Impacto:</p>
                    <p className="text-sm font-bold text-[#3893af]">{story.impact}</p>
                  </div>
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

export default PilotAI;
