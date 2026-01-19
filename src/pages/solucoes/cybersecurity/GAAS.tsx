import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import gaasImage from "@/assets/solutions/gaas.jpg";
import { Shield, Eye, FileCheck, Settings, Users, Clock, CheckCircle, TrendingUp, AlertTriangle, FileText, Headphones, Calendar } from "lucide-react";

const GAAS = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={gaasImage} 
            alt="Governance as a Service" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background/90 to-background"></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-[700px] h-[700px] bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-24 lg:py-28 pt-40 sm:pt-44 md:pt-48 lg:pt-52">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Cybersecurity</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-foreground">
              Governance as a Service
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Governança completa do seu ambiente AWS com visibilidade, controle e conformidade. 
              Proteja seus ativos com monitoramento contínuo e equipe especializada.
            </p>

            <a 
              href="/fale-conosco" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </section>

      {/* O que é Governança */}
      <section className="py-20 bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">O que é Governança?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Para garantir que seu ambiente seja bem administrado e se desenvolva de forma saudável, 
                é fundamental ter visibilidade, controle e conformidade.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 text-primary">Princípios Fundamentais</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Manter um registro de todos os ativos do ambiente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Capacidade de identificar as alterações que cada ativo sofre</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Acesso detalhado aos custos associados a cada um dos ativos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Definição de responsáveis pelas principais necessidades</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Implementação de controles preventivos e detectivos</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 text-primary">Em um Ambiente AWS</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Inventário completo de todos os ativos da nuvem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Registro de todas as alterações de configuração</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Segmentação adequada com contas AWS dedicadas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Políticas de segurança centralizadas (SCPs)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Monitoramento contínuo com AWS Security Hub</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Big Numbers */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold">Por que investir em prevenção?</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                <span className="text-primary font-bold">Empresas que investem em prevenção economizam até R$ 4 milhões por incidente.</span> 50% delas evitam mais de 70% dos custos enfrentados por quem age apenas após o ataque.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por que a dataRain */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que a dataRain?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vantagens de ter a dataRain como parceira em governança cloud
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Expertise</h3>
              <p className="text-sm text-muted-foreground">
                Equipe multidisciplinar e especializada, com vasta experiência prática na governança de ambientes AWS.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Disponibilidade</h3>
              <p className="text-sm text-muted-foreground">
                Equipe redundante e sempre disponível, sem impacto de férias, licenças ou afastamentos.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Atualização Constante</h3>
              <p className="text-sm text-muted-foreground">
                Equipe em constante evolução e treinamento, sempre alinhada às melhores práticas de segurança.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Flexibilidade</h3>
              <p className="text-sm text-muted-foreground">
                Serviço ajustável de acordo com a demanda, maturidade ou evolução da empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Solução */}
      <section className="py-20 bg-gradient-to-b from-card/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Solução GaaS</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Governança completa em três pilares fundamentais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Provisionamento Inicial</h3>
              <p className="text-muted-foreground">
                Configuração da infraestrutura de governança e políticas de segurança desde o início.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Manutenção Contínua</h3>
              <p className="text-muted-foreground">
                Atualizações e ajustes em contas, políticas e segurança de forma contínua.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Monitoramento</h3>
              <p className="text-muted-foreground">
                Verificação da conformidade com normas e frameworks via AWS Security Hub.
              </p>
            </div>
          </div>

          {/* Entregáveis */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Entregáveis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-primary/5 to-card rounded-2xl p-6 border border-primary/20">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold mb-2">Relatórios Quinzenais</h4>
                <p className="text-sm text-muted-foreground">
                  Avaliação de conformidade e principais desvios identificados no período.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-card rounded-2xl p-6 border border-primary/20">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold mb-2">Suporte Técnico</h4>
                <p className="text-sm text-muted-foreground">
                  Representante técnico disponível para dúvidas e solicitações do dia a dia.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-card rounded-2xl p-6 border border-primary/20">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold mb-2">Reuniões Mensais</h4>
                <p className="text-sm text-muted-foreground">
                  Apresentação de relatórios, definição de prioridades e esclarecimento de dúvidas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Resultados tangíveis para seu ambiente cloud
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300">
              <Eye className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Visibilidade</h3>
              <p className="text-muted-foreground">
                Acompanhamento longitudinal do Score de Segurança do ambiente com dashboards em tempo real.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300">
              <FileCheck className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Conformidade</h3>
              <p className="text-muted-foreground">
                Conformidade com exigências regulatórias e frameworks de segurança reconhecidos.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Controle</h3>
              <p className="text-muted-foreground">
                Elevação sensível da maturidade de segurança do ambiente de nuvem.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300">
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Redução de Overhead</h3>
              <p className="text-muted-foreground">
                Redução do overhead operacional com monitoramento, correções e tratamento de alertas.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Suporte Especializado</h3>
              <p className="text-muted-foreground">
                Suporte opcional com time de especialistas certificados AWS sempre disponível.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300">
              <Settings className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Automação</h3>
              <p className="text-muted-foreground">
                Políticas automatizadas e controles preventivos integrados ao seu ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* História de Sucesso */}
      <section className="py-20 bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">História de Sucesso</h2>
              <p className="text-lg text-muted-foreground">
                Veja como transformamos a governança cloud de nossos clientes
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Setor Automotivo</h3>
                  <p className="text-sm text-muted-foreground">Uma das maiores empresas brasileiras de peças automotivas</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">O Desafio</h4>
                  <p className="text-muted-foreground">
                    Falta de isolamento entre unidades de negócio, baixa visibilidade de custos e controles de segurança insuficientes.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">A Solução</h4>
                  <p className="text-muted-foreground">
                    Implementação de Landing Zone personalizada na AWS com segmentação em contas exclusivas por unidade de negócio, 
                    aplicação de políticas de segurança com SCPs, e configuração de serviços centralizados como AWS Control Tower, 
                    GuardDuty, CloudTrail e Security Hub.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Resultados</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Cada unidade de negócio ganhou liberdade e autonomia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Rastreabilidade total dos gastos por unidade via tagging estratégico</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Modelo de governança robusto e rastreável</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Capacitação do time interno com treinamentos práticos e documentação</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default GAAS;
