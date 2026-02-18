import React from 'react';
import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SolutionHero from "@/components/solutions/SolutionHero";
import { SEO } from "@/components/SEO";
import { ShieldCheck, Eye, FileCheck, Settings, Users, Clock, CheckCircle, TrendingUp, AlertTriangle, FileText, Headphones, Calendar, Target, Shield } from "lucide-react";

const GAAS = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="GaaS — Governança como Serviço" description="Governança completa do seu ambiente AWS com visibilidade, controle, conformidade e monitoramento contínuo." canonical="/solucoes/cybersecurity/gaas" />
      <UniversalHeader showHeroSection={false} />
      
      <SolutionHero
        pillarLabel="Cybersecurity"
        pillarIcon={ShieldCheck}
        title="GaaS"
        highlightedText="(Governança como Serviço)"
        description="Governança completa do seu ambiente AWS com visibilidade, controle e conformidade. Proteja seus ativos com monitoramento contínuo e equipe especializada."
        pillarColor="#e63946"
      />

      {/* What is Governance */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-[#e63946]/10 rounded-full px-4 py-2 mb-4">
                <Target className="w-4 h-4 text-[#e63946]" />
                <span className="text-sm font-medium text-[#e63946]">Conceito</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">O que é Governança?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Para garantir que seu ambiente seja bem administrado e se desenvolva de forma saudável, 
                é fundamental ter visibilidade, controle e conformidade.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-[#e63946]/30 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 text-[#e63946]">Princípios Fundamentais</h3>
                <div className="space-y-4">
                  {[
                    "Manter um registro de todos os ativos do ambiente",
                    "Capacidade de identificar as alterações que cada ativo sofre",
                    "Acesso detalhado aos custos associados a cada um dos ativos",
                    "Definição de responsáveis pelas principais necessidades",
                    "Implementação de controles preventivos e detectivos"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-[#e63946]/30 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 text-[#e63946]">Em um Ambiente AWS</h3>
                <div className="space-y-4">
                  {[
                    "Inventário completo de todos os ativos da nuvem",
                    "Registro de todas as alterações de configuração",
                    "Segmentação adequada com contas AWS dedicadas",
                    "Políticas de segurança centralizadas (SCPs)",
                    "Monitoramento contínuo com AWS Security Hub"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#e63946] mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Prevention callout */}
            <div className="bg-gradient-to-br from-[#e63946]/10 to-[#e63946]/5 rounded-2xl p-8 border border-[#e63946]/20">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-10 h-10 text-[#e63946] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Por que investir em prevenção?</h3>
                  <p className="text-lg text-muted-foreground">
                    <span className="text-[#e63946] font-bold">Empresas que investem em prevenção economizam até R$ 4 milhões por incidente.</span>{" "}
                    50% delas evitam mais de 70% dos custos enfrentados por quem age apenas após o ataque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why dataRain */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#e63946]/10 rounded-full px-4 py-2 mb-4">
              <Users className="w-4 h-4 text-[#e63946]" />
              <span className="text-sm font-medium text-[#e63946]">Diferenciais</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Por que a dataRain?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vantagens de ter a dataRain como parceira em governança cloud
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Users, title: "Expertise", desc: "Equipe multidisciplinar e especializada, com vasta experiência prática na governança de ambientes AWS." },
              { icon: Clock, title: "Disponibilidade", desc: "Equipe redundante e sempre disponível, sem impacto de férias, licenças ou afastamentos." },
              { icon: TrendingUp, title: "Atualização Constante", desc: "Equipe em constante evolução e treinamento, sempre alinhada às melhores práticas de segurança." },
              { icon: Settings, title: "Flexibilidade", desc: "Serviço ajustável de acordo com a demanda, maturidade ou evolução da empresa." }
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border/50 hover:border-[#e63946]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-[#e63946]/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#e63946]" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Pillars */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#e63946]/10 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4 text-[#e63946]" />
              <span className="text-sm font-medium text-[#e63946]">Solução</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">A Solução GaaS</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Governança completa em três pilares fundamentais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              { icon: Settings, title: "Provisionamento Inicial", desc: "Configuração da infraestrutura de governança e políticas de segurança desde o início." },
              { icon: ShieldCheck, title: "Manutenção Contínua", desc: "Atualizações e ajustes em contas, políticas e segurança de forma contínua." },
              { icon: Eye, title: "Monitoramento", desc: "Verificação da conformidade com normas e frameworks via AWS Security Hub." }
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 border border-border/50 text-center hover:border-[#e63946]/40 transition-all duration-300 hover:shadow-lg">
                <div className="w-16 h-16 bg-[#e63946]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-[#e63946]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Deliverables */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Entregáveis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: FileText, title: "Relatórios Quinzenais", desc: "Avaliação de conformidade e principais desvios identificados no período." },
                { icon: Headphones, title: "Suporte Técnico", desc: "Representante técnico disponível para dúvidas e solicitações do dia a dia." },
                { icon: Calendar, title: "Reuniões Mensais", desc: "Apresentação de relatórios, definição de prioridades e esclarecimento de dúvidas." }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-[#e63946]/5 to-card rounded-2xl p-6 border border-[#e63946]/20">
                  <div className="w-12 h-12 bg-[#e63946]/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#e63946]" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#e63946]/10 rounded-full px-4 py-2 mb-4">
              <TrendingUp className="w-4 h-4 text-[#e63946]" />
              <span className="text-sm font-medium text-[#e63946]">Resultados</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Benefícios</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Resultados tangíveis para seu ambiente cloud
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Eye, title: "Visibilidade", desc: "Acompanhamento longitudinal do Score de Segurança do ambiente com dashboards em tempo real." },
              { icon: FileCheck, title: "Conformidade", desc: "Conformidade com exigências regulatórias e frameworks de segurança reconhecidos." },
              { icon: ShieldCheck, title: "Controle", desc: "Elevação sensível da maturidade de segurança do ambiente de nuvem." },
              { icon: TrendingUp, title: "Redução de Overhead", desc: "Redução do overhead operacional com monitoramento, correções e tratamento de alertas." },
              { icon: Users, title: "Suporte Especializado", desc: "Suporte opcional com time de especialistas certificados AWS sempre disponível." },
              { icon: Settings, title: "Automação", desc: "Políticas automatizadas e controles preventivos integrados ao seu ambiente." }
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 border border-border/50 hover:border-[#e63946]/40 transition-all duration-300 hover:shadow-lg">
                <item.icon className="w-10 h-10 text-[#e63946] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default GAAS;
