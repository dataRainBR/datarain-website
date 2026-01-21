import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cloud, Database, Brain, Shield, Settings, Clock, CheckCircle2, AlertCircle, Zap, Target } from "lucide-react";

const Suporte = () => {
  const catalogoServicos = [
    {
      icon: Cloud,
      title: "Cloud & Plataformas",
      items: [
        "Monitoramento e alertas (CloudWatch, EventBridge, etc.)",
        "Incidentes e indisponibilidades (autoscaling, redes, storage, compute)",
        "Backups, restores e DR runbooks (RPO/RTO orientativos)",
        "Mudanças controladas (janela, comunicação, rollback)"
      ]
    },
    {
      icon: Database,
      title: "Dados & Analytics",
      items: [
        "Pipelines de ETL/ELT (falhas, latência, throughput)",
        "Data Lakes e Warehouses (catálogos, permissões, custos)",
        "Qualidade de dados (checks, reprocessos, SLAs)"
      ]
    },
    {
      icon: Brain,
      title: "IA & GenAI",
      items: [
        "Ambientes de modelos (deploy, latência, quedas)",
        "Custos e dimensionamento (GPU/CPU, endpoints)",
        "Observabilidade e guardrails (erros, inputs/outputs)"
      ]
    },
    {
      icon: Shield,
      title: "Segurança & Conformidade",
      items: [
        "IAM (acessos, rotação de credenciais, políticas)",
        "Postura em nuvem (config drifts, hardening)",
        "Resposta a eventos (findings de segurança, playbooks)"
      ]
    },
    {
      icon: Settings,
      title: "DevEx & Solicitações",
      items: [
        "Provisionamento (acessos, contas, ambientes)",
        "Integrações CI/CD e secrets",
        "Orientações de boas práticas (Well-Architected)"
      ]
    }
  ];

  const planos = [
    {
      name: "Essential",
      subtitle: "Para ambientes não críticos",
      cobertura: "12x5 (horário comercial)",
      mtta: "1h",
      prioridades: "P2–P4",
      canais: "Portal + e-mail",
      relatorio: "Mensal",
      features: [
        "Cobertura em horário comercial",
        "MTTA orientativo: 1 hora",
        "Prioridades P2 a P4",
        "Acesso via portal e e-mail",
        "Relatório mensal"
      ]
    },
    {
      name: "Advanced",
      subtitle: "Para operações com picos e janelas",
      cobertura: "16x5 + plantões P1",
      mtta: "30 min (P1) | 45 min (P2)",
      canais: "War room Slack/Teams",
      relatorio: "Quinzenal + recomendações",
      features: [
        "Cobertura estendida 16x5",
        "Plantões para P1",
        "MTTA: 30min (P1) | 45min (P2)",
        "War room Slack/Teams",
        "Relatório quinzenal com recomendações"
      ],
      destaque: true
    },
    {
      name: "Enterprise",
      subtitle: "Missão crítica / 24x7",
      cobertura: "24x7",
      mtta: "15 min (P1) | 30 min (P2)",
      canais: "On-call especializado",
      relatorio: "Executivo semanal",
      features: [
        "Cobertura completa 24x7",
        "MTTA: 15min (P1) | 30min (P2)",
        "On-call especializado (Cloud, Dados, Sec, GenAI)",
        "Pós-incidente com RCA e plano de ação",
        "Relatório executivo semanal completo"
      ]
    }
  ];

  const diferenciais = [
    {
      icon: Target,
      title: "Engenharia de ponta",
      description: "Arquitetos e especialistas AWS em todas as frentes"
    },
    {
      icon: Zap,
      title: "Do incidente à causa raiz",
      description: "Não apenas atende, resolve e previne"
    },
    {
      icon: CheckCircle2,
      title: "Documentação viva",
      description: "KB e playbooks versionados do seu ambiente"
    },
    {
      icon: Settings,
      title: "Flexibilidade",
      description: "De um único produto a portfólio multicloud/híbrido"
    }
  ];

  const processoSteps = [
    {
      number: "01",
      title: "Kickoff & Runbooks",
      description: "Escopo, criticidade, KPIs, contatos e janelas"
    },
    {
      number: "02",
      title: "Descoberta assistida",
      description: "Inventário, dependências, riscos"
    },
    {
      number: "03",
      title: "Integrações",
      description: "Monitoramento/alertas, ITSM, chatops"
    },
    {
      number: "04",
      title: "Playbooks P1–P3",
      description: "Tabela de escalonamento"
    },
    {
      number: "05",
      title: "Teste de prontidão",
      description: "Simulação de incidente"
    },
    {
      number: "06",
      title: "Go-Live",
      description: "Relatório de baseline"
    }
  ];

  const faqs = [
    {
      question: "Qual a diferença entre Suporte e Serviços Gerenciados?",
      answer: "Suporte = resposta rápida + resolução de incidentes/solicitações, com prevenção. Serviços Gerenciados = operação contínua (monitorar, operar, otimizar e governar). Muitos clientes usam ambos: Suporte para o dia a dia + Gerenciados para operação."
    },
    {
      question: "Vocês atendem apenas AWS?",
      answer: "AWS é nosso core. Atendemos integrações com on-premise e ferramentas de terceiros quando fazem parte do seu fluxo."
    },
    {
      question: "Como é a cobrança?",
      answer: "Assinatura por plano + add-ons (plantões, horas L3 extra, integrações, ambientes adicionais). Adequamos ao seu porte."
    },
    {
      question: "Podemos começar pequeno?",
      answer: "Sim. Começamos por um produto/serviço e ampliamos conforme a maturidade."
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
                Resposta rápida, solução definitiva.
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-6 sm:mb-8">
                24x7, com engenharia AWS por trás.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
                A tecnologia só cria valor quando funciona. Com o Suporte DataRain, você tem atendimento proativo e especializado para manter seus ambientes críticos seguros, estáveis e performáticos, sem fricção. A gente resolve o incidente, ataca a causa raiz e deixa documentado para não acontecer de novo.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground/90 max-w-3xl mx-auto mb-8">
                Para quem é: empresas em AWS (ou híbridas) que precisam de agilidade, rastreabilidade e confiança na operação, com visão de negócio.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="/fale-conosco">Conhecer Planos de Suporte</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo de Serviços */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Cobertura Completa
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                O que o Suporte cobre
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Catálogo completo de serviços especializados
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {catalogoServicos.map((servico, index) => {
                const Icon = servico.icon;
                return (
                  <div 
                    key={index}
                    className="bg-card rounded-2xl border border-border/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 p-6 md:p-8">
                      <div className="flex items-center gap-4 md:gap-6 flex-1">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">
                            {servico.title}
                          </h3>
                          <ul className="space-y-2">
                            {servico.items.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
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

      {/* Como Atendemos */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/5"></div>
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 rounded-full text-accent text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Processo
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Como atendemos
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Processo e fluxo estruturado para resolução eficiente
              </p>
            </div>

            <div className="bg-gradient-to-br from-card to-card/50 rounded-3xl p-6 md:p-10 border border-border/20 shadow-2xl backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Abertura simples</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Portal, e-mail ou integração (Jira/ServiceNow/Zendesk)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Triagem L1</h3>
                    <p className="text-sm md:text-base text-muted-foreground">MTTA conforme plano e classificação P1–P4</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Ação L2/L3</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Engenheiros especialistas (cloud, dados, segurança, IA)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Comunicação contínua</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Status, ETA, próximos passos</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Encerramento + pós-incidente</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Causa raiz, correções, lições aprendidas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Prevenção</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Ajustes de arquitetura, automações, alertas e playbooks</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border/20">
                <p className="text-sm md:text-base text-muted-foreground text-center">
                  <span className="font-semibold text-foreground">Padrões adotados:</span> ITIL (Incidente/Problema/Mudança), AWS Well-Architected, registros e trilhas de auditoria
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planos de Suporte */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Planos
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Planos de Suporte
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                SLAs e cobertura adequados ao seu negócio
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {planos.map((plano, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-card via-card to-card/50 rounded-3xl p-6 md:p-8 border ${plano.destaque ? 'border-primary shadow-2xl scale-105' : 'border-border/20 shadow-xl'} backdrop-blur-sm hover:shadow-3xl transition-all duration-300`}
                >
                  {plano.destaque && (
                    <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-semibold mb-4">
                      Mais Popular
                    </div>
                  )}
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {plano.name}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-6">
                    {plano.subtitle}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-2">
                      <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-primary">Cobertura</p>
                        <p className="text-sm text-muted-foreground">{plano.cobertura}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-primary">MTTA</p>
                        <p className="text-sm text-muted-foreground">{plano.mtta}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border/20 pt-6 mb-6">
                    <ul className="space-y-3">
                      {plano.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    variant={plano.destaque ? "hero" : "outline"} 
                    className="w-full"
                    size="lg"
                  >
                    Escolher Plano
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm md:text-base text-muted-foreground">
                P1/P2/P3/P4: definimos junto com você (impacto, urgência e critérios objetivos). Ajustamos RTO/RPO por serviço quando aplicável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 rounded-full text-accent text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Diferenciais
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Por que DataRain?
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

            <div className="mt-8 text-center">
              <p className="text-base sm:text-lg text-muted-foreground mb-2">
                <span className="font-semibold text-foreground">Evolução contínua:</span> revisões arquiteturais e health checks regulares
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 rounded-full text-accent text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Implantação Rápida
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Onboarding em até 10 dias
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {processoSteps.map((step, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-6 border border-border/20 shadow-xl backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                      <span className="text-white font-bold">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-bold text-primary">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Dúvidas
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Perguntas Frequentes
              </h2>
            </div>

            <div className="space-y-4 md:space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 md:p-8 border border-border/20 shadow-lg"
                >
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-card via-card to-card/50 rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl border border-border/20 backdrop-blur-sm">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Pronto para ter suporte de excelência?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed">
                Fale com a DataRain e descubra como nosso Suporte pode garantir a estabilidade e performance dos seus ambientes críticos.
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

export default Suporte;
