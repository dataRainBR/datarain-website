import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Brain, Zap, Shield,
  Lock, Sparkles,
  Database, Globe, ChevronRight, Play,
  Boxes, Wrench, Users, Receipt,
  Headphones, CheckCircle2,
  LayoutDashboard,
  FolderKanban, ClipboardList,
  FileText, Send, BarChart3
} from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import React from "react";
import { SEO } from "@/components/SEO";

/* ───────────────────────── scroll reveal ───────────────────────── */
const ScrollReveal = ({ children, className = "", delay = 0, direction = "up", simulateHover = false }: {
  children: React.ReactNode | ((hovered: boolean) => React.ReactNode);
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  simulateHover?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const hasSimulated = useRef(false);
  const showTimer = useRef<ReturnType<typeof setTimeout>>();
  const hideTimer = useRef<ReturnType<typeof setTimeout>>();
  const hideDebounce = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(hideDebounce.current);
          setIsVisible(true);
        } else {
          hideDebounce.current = setTimeout(() => setIsVisible(false), 300);
        }
      },
      { threshold: 0.3, rootMargin: "-10% 0px -5% 0px" }
    );
    observer.observe(el);
    return () => { observer.disconnect(); clearTimeout(hideDebounce.current); };
  }, []);

  useEffect(() => {
    if (!simulateHover) return;
    if (isVisible && !hasSimulated.current) {
      hasSimulated.current = true;
      showTimer.current = setTimeout(() => setHovered(true), delay + 600);
      hideTimer.current = setTimeout(() => setHovered(false), delay + 600 + 2000);
    }
    if (!isVisible) {
      hasSimulated.current = false;
      setHovered(false);
      clearTimeout(showTimer.current);
      clearTimeout(hideTimer.current);
    }
  }, [simulateHover, isVisible, delay]);

  useEffect(() => {
    return () => {
      clearTimeout(showTimer.current);
      clearTimeout(hideTimer.current);
    };
  }, []);

  const transforms = { up: "translateY(40px)", left: "translateX(60px)", right: "translateX(-60px)" };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0)" : transforms[direction],
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {typeof children === "function" ? children(hovered) : children}
    </div>
  );
};
import DemoDashboard from "@/components/console-demos/DemoDashboard";
import DemoAutoFix from "@/components/console-demos/DemoAutoFix";
import DemoSelfService from "@/components/console-demos/DemoSelfService";
import DemoBilling from "@/components/console-demos/DemoBilling";
import DemoProjetos from "@/components/console-demos/DemoProjetos";
import DemoProfissionais from "@/components/console-demos/DemoProfissionais";
import DemoSuporte from "@/components/console-demos/DemoSuporte";

/* ───────────────────────── animated counter ───────────────────────── */
const AnimatedCounter = ({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <div ref={ref}>{prefix}{count}{suffix}</div>;
};

/* ───────────────────────── modules ───────────────────────── */
const modules = [
  {
    id: "dashboard",
    badge: "Página Inicial",
    icon: LayoutDashboard,
    title: "dataRain Console",
    description: "A plataforma que centraliza a gestão do seu ambiente AWS e o relacionamento com a dataRain. Otimização automática, billing detalhado, acompanhamento de projetos, profissionais alocados e suporte técnico com IA. Tudo em uma interface moderna e segura.",
    highlights: ["Autenticação segura com Cognito + MFA", "RBAC: cada cliente vê apenas seus dados", "IA generativa via AWS Bedrock (Claude)", "Tema claro e escuro", "Suporte a múltiplas organizações AWS", "Multi-tenant com isolamento total"],
    color: "bg-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: "autofix",
    badge: "Economia Automática",
    icon: Wrench,
    title: "AutoFix: Otimização Automática",
    description: "Escaneia sua conta AWS, identifica desperdícios e aplica correções automaticamente. EC2, EBS, RDS, S3, Savings Plans, Network e CloudWatch. Tudo otimizado com um clique.",
    highlights: ["EC2 Rightsizing & Spot & Liga/Desliga", "EBS GP2→GP3 + delete de órfãos", "RDS Rightsizing automático", "S3 Lifecycle policies", "Savings Plans simulação", "Dashboard de savings consolidado"],
    color: "bg-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: "selfservice",
    badge: "Self-Service",
    icon: Boxes,
    title: "Deploy com CloudFormation",
    description: "Catálogo de templates prontos para deploy com poucos cliques. CI/CD, ECS Fargate, Serverless, EKS, Budgets com alertas automáticos e mais.",
    highlights: ["CI/CD, ECS, Lambda, EKS", "Budget com alertas 80/100/120%", "Custo estimado por template", "Formulário parametrizado", "Download YAML"],
    color: "bg-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: "billing",
    badge: "Financeiro",
    icon: Receipt,
    title: "Billing Detalhado",
    description: "Visão completa das faturas e custos AWS. Tabela de invoices com filtros avançados, contas vinculadas, monitor de performance e suporte multi-conta.",
    highlights: ["Invoices com filtros avançados", "Multi-conta e multi-org", "Performance de queries", "Contas vinculadas ao usuário"],
    color: "bg-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: "projetos",
    badge: "Projetos",
    icon: FolderKanban,
    title: "Acompanhamento e Solicitação de Projetos",
    description: "Acompanhe os projetos que a dataRain executa para sua empresa em tempo real. Solicite novos projetos diretamente pela plataforma com formulários técnicos específicos para cada tipo de serviço.",
    highlights: ["Status em tempo real", "Catálogo de 8 tipos de serviço", "Formulários técnicos detalhados", "Fluxo: Formulário → Proposta → Kickoff"],
    color: "bg-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: "profissionais",
    badge: "Serviços Profissionais",
    icon: Users,
    title: "Gestão de Profissionais Alocados",
    description: "Visualize todos os profissionais dataRain alocados na sua empresa. Currículo, escopo de trabalho, atividades semanais, KPIs e solicitação de novos profissionais direto pela plataforma.",
    highlights: ["Perfil completo (L4-L8)", "Timeline de atividades semanais", "KPIs: custo, horas, alocação", "Solicitar novos profissionais"],
    color: "bg-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: "suporte",
    badge: "Suporte 24/7",
    icon: Headphones,
    title: "Suporte Técnico Integrado",
    description: "Canal direto com o time dataRain. Abertura de tickets com IA que analisa o chamado automaticamente, histórico de conversas, filtros por status e acompanhamento completo. Disponível 24/7.",
    highlights: ["IA analisa chamados automaticamente", "Histórico de conversas", "Filtros e busca por texto", "Disponível 24/7"],
    color: "bg-primary",
    bgColor: "bg-primary/10",
  },
];

const diferenciais = [
  { icon: Zap, title: "AutoFix", description: "Economiza dinheiro automaticamente, sem intervenção manual." },
  { icon: Boxes, title: "Self-Service", description: "Deploys padronizados sem depender de engenheiros." },
  { icon: FolderKanban, title: "Projetos & Profissionais", description: "Acompanhe projetos, alocações e custos da sua parceria com a dataRain." },
  { icon: Brain, title: "IA no Suporte", description: "IA analisa chamados e acelera a resolução automaticamente." },
  { icon: ClipboardList, title: "Sem E-mail", description: "Solicite projetos e profissionais à dataRain direto pela plataforma." },
  { icon: Receipt, title: "Billing Transparente", description: "Visibilidade total dos custos AWS sem navegar no console da AWS." },
  { icon: Shield, title: "Multi-Tenant Seguro", description: "Cada cliente isolado com seus dados e permissões (RBAC + MFA)." },
  { icon: Sparkles, title: "IA Nativa", description: "AWS Bedrock (Claude) integrado nativamente em toda a plataforma." },
];

/* ───────────────────────── action pills ───────────────────────── */
const actionPills = [
  { id: "fix-ec2", label: "Corrigir EC2 ocioso", icon: Wrench, moduleId: "autofix", actionTarget: "fix-first", color: "bg-accent" },
  { id: "fix-all", label: "Corrigir Tudo", icon: Zap, moduleId: "autofix", actionTarget: "fix-all", color: "bg-accent" },
  { id: "deploy-cicd", label: "Deploy CI/CD", icon: Boxes, moduleId: "selfservice", actionTarget: "deploy-cicd", color: "bg-primary" },
  { id: "ver-fatura", label: "Ver Faturas", icon: Receipt, moduleId: "billing", actionTarget: "tab-tabela", color: "bg-accent" },
  { id: "abrir-ticket", label: "Abrir Ticket", icon: Headphones, moduleId: "suporte", actionTarget: "new-ticket", color: "bg-primary" },
  { id: "ver-projetos", label: "Ver Projetos", icon: FolderKanban, moduleId: "projetos", actionTarget: "tab-acompanhamento", color: "bg-primary" },
];

/* demo component factory */
const getDemoComponent = (id: string, onNavigate?: (id: string) => void, user?: string | null, onLogin?: (email: string) => void, onLogout?: () => void): React.ReactNode => {
  const authProps = { user: user ?? null, onLogin: onLogin ?? (() => {}), onLogout: onLogout ?? (() => {}) };
  const map: Record<string, React.ReactNode> = {
    dashboard: <DemoDashboard onNavigate={onNavigate} {...authProps} />,
    autofix: <DemoAutoFix onNavigate={onNavigate} {...authProps} />,
    selfservice: <DemoSelfService onNavigate={onNavigate} {...authProps} />,
    billing: <DemoBilling onNavigate={onNavigate} {...authProps} />,
    projetos: <DemoProjetos onNavigate={onNavigate} {...authProps} />,
    profissionais: <DemoProfissionais onNavigate={onNavigate} {...authProps} />,
    suporte: <DemoSuporte onNavigate={onNavigate} {...authProps} />,
  };
  return map[id] ?? null;
};

/* ───────────────────────── antes vs depois ───────────────────────── */
const antesDepois = [
  {
    area: "Solicitar Projeto",
    antes: { icon: FileText, items: ["E-mail para o comercial", "Reunião de briefing", "Proposta em 5-10 dias", "Sem rastreamento"] },
    depois: { icon: ClipboardList, items: ["Formulário técnico no Console", "Proposta em até 48h", "Tracking em tempo real", "Histórico completo"] },
  },
  {
    area: "Acompanhar Execução",
    antes: { icon: Send, items: ["Planilha compartilhada", "Status por e-mail semanal", "Sem visão de % concluído", "Cobranças manuais"] },
    depois: { icon: FolderKanban, items: ["Dashboard com progresso real", "Sprints e milestones visíveis", "Notificações automáticas", "KPIs do projeto"] },
  },
  {
    area: "Gestão de Custos",
    antes: { icon: Receipt, items: ["Fatura mensal por e-mail", "Sem breakdown por serviço", "Surpresas no billing", "Análise manual"] },
    depois: { icon: BarChart3, items: ["Billing detalhado por conta", "Alertas de anomalia com IA", "Histórico e tendências", "Savings automáticos"] },
  },
  {
    area: "Suporte Técnico",
    antes: { icon: Headphones, items: ["Telefone ou e-mail", "Sem priorização clara", "Histórico perdido", "Horário comercial"] },
    depois: { icon: Brain, items: ["Ticket com análise de IA", "Priorização automática", "Histórico centralizado", "Disponível 24/7"] },
  },
];

const AntesDepoisSection = () => {
  const [showDepois, setShowDepois] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const handleToggle = () => {
    setShowDepois(prev => !prev);
    setAnimKey(prev => prev + 1);
  };

  return (
    <div className="space-y-10">
      {/* Toggle */}
      <div className="flex items-center justify-center gap-4">
        <span className={`text-sm font-semibold transition-colors duration-500 ${!showDepois ? "text-red-400" : "text-muted-foreground/30"}`}>
          Antes
        </span>
        <button
          onClick={handleToggle}
          className={`relative w-16 h-8 rounded-full transition-all duration-500 shadow-inner ${showDepois ? "bg-primary/20 border-primary/30" : "bg-accent/15 border-accent/25"} border`}
          aria-label="Alternar entre antes e depois"
        >
          <div className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-500 shadow-lg ${showDepois ? "left-[calc(100%-28px)] bg-primary" : "left-1 bg-accent"}`} />
        </button>
        <span className={`text-sm font-semibold transition-colors duration-500 ${showDepois ? "text-primary" : "text-muted-foreground/30"}`}>
          Com o Console
        </span>
      </div>

      {/* Cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {antesDepois.map((item, idx) => {
          const data = showDepois ? item.depois : item.antes;
          const Icon = data.icon;
          return (
            <ScrollReveal key={idx} delay={idx * 100} direction="up" simulateHover>
            {(h: boolean) => (
            <div
              key={`${animKey}-${idx}`}
              className={`group relative bg-card rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full ${
                showDepois
                  ? `border-primary/20 hover:border-primary/50 ${h ? "border-primary/50 shadow-2xl -translate-y-2" : ""}`
                  : `border-red-500/10 hover:border-red-500/40 ${h ? "border-red-500/40 shadow-2xl -translate-y-2" : ""}`
              }`}
              style={{
                animation: `fadeSlideUp 0.5s cubic-bezier(0.16,1,0.3,1) ${idx * 80}ms both`,
              }}
            >
              {/* Background on hover */}
              <div className={`absolute inset-0 transition-opacity duration-500 group-hover:opacity-100 ${h ? "opacity-100" : "opacity-0"} ${
                showDepois ? "bg-primary/10" : "bg-accent/10"
              }`} />

              {/* Accent line top */}
              <div className={`absolute top-0 left-0 h-1 group-hover:w-full transition-all duration-500 ease-out ${h ? "w-full" : "w-0"} ${
                showDepois ? "bg-primary" : "bg-accent"
              }`} />

              {/* Decorative orb */}
              <div className={`absolute -bottom-16 -right-16 w-32 h-32 rounded-full blur-3xl group-hover:opacity-40 transition-opacity duration-500 ${h ? "opacity-40" : "opacity-0"} ${
                showDepois ? "bg-primary/30" : "bg-red-500/20"
              }`} />

              {/* Content */}
              <div className="relative z-10 p-6 sm:p-7">
                <div className={`w-12 h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ${h ? "scale-110 rotate-3" : ""} ${
                  showDepois ? "bg-primary" : "bg-accent"
                }`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <h4 className={`text-base font-bold mb-4 group-hover:text-primary transition-colors duration-300 ${h ? "text-primary" : "text-foreground"}`}>
                  {item.area}
                </h4>

                <ul className="space-y-2.5">
                  {data.items.map((text, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 transition-colors duration-500 ${
                        showDepois ? "bg-primary" : "bg-red-400/60"
                      }`} />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            )}
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
};

/* ───────────────────────── architecture diagram ───────────────────────── */
const archLayers = [
  {
    id: "auth",
    label: "Autenticação",
    icon: Lock,
    color: "from-[#3893af] to-[#3893af]",
    techs: ["AWS Cognito", "MFA", "OAuth 2.0"],
    description: "Login seguro com autenticação multifator. Cada sessão é validada via tokens JWT com expiração automática.",
  },
  {
    id: "rbac",
    label: "Controle de Acesso",
    icon: Shield,
    color: "from-[#3893af] to-[#4a93a0]",
    techs: ["RBAC", "Policies", "Tenant Isolation"],
    description: "Permissões granulares por papel. Cada cliente acessa apenas seus dados, com isolamento total entre tenants.",
  },
  {
    id: "api",
    label: "API & Backend",
    icon: Globe,
    color: "from-[#4a93a0] to-[#7a9070]",
    techs: ["API Gateway", "Lambda", "Step Functions"],
    description: "APIs serverless com escalabilidade automática. Cada requisição é autenticada e autorizada antes de processar.",
  },
  {
    id: "ai",
    label: "IA Generativa",
    icon: Brain,
    color: "from-[#c08520] to-[#f78504]",
    techs: ["AWS Bedrock", "Claude", "RAG"],
    description: "IA nativa em toda a plataforma. Análise de chamados, sugestões de otimização e insights automáticos via Bedrock.",
  },
  {
    id: "data",
    label: "Dados & Storage",
    icon: Database,
    color: "from-[#f78504] to-[#f78504]",
    techs: ["DynamoDB", "S3", "Athena"],
    description: "Dados criptografados em repouso e em trânsito. Queries otimizadas com Athena para billing e analytics.",
  },
];

const ArchitectureDiagram = () => {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative bg-card/50 rounded-2xl sm:rounded-3xl border border-border/30 p-6 sm:p-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

        <div className="relative z-10 space-y-0">
          {/* User entry point */}
          <div className="flex flex-col items-center mb-1">
            <div className="flex items-center gap-2 px-4 py-2 bg-foreground/10 rounded-full text-xs font-medium text-muted-foreground">
              <Users className="w-3.5 h-3.5" />
              Cliente acessa o Console
            </div>
            <div className="w-2 h-2 rounded-full bg-primary mt-3" />
            <div className="w-0.5 h-6 bg-primary/50" />
          </div>

          {/* Layers */}
          {archLayers.map((layer, idx) => {
            const LayerIcon = layer.icon;
            const isActive = activeLayer === layer.id;
            return (
              <div key={layer.id}>
                <button
                  onClick={() => setActiveLayer(isActive ? null : layer.id)}
                  className={`w-full text-left group relative rounded-xl sm:rounded-2xl overflow-hidden border transition-all duration-500 ${
                    isActive
                      ? "border-primary/50 shadow-lg shadow-primary/10"
                      : "border-border/30 hover:border-primary/30 hover:shadow-md"
                  }`}
                >
                  {/* Color bar left */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${layer.color} transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-30 group-hover:opacity-60"}`} />

                  <div className="relative z-10 p-3 sm:p-4 pl-4 sm:pl-5">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-gradient-to-r ${layer.color} ${isActive ? "shadow-md scale-105" : "opacity-70 group-hover:opacity-100"}`}>
                        <LayerIcon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-bold transition-colors duration-300 ${isActive ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
                            {layer.label}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {layer.techs.map((t) => (
                            <span key={t} className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full transition-colors duration-300 ${
                              isActive ? "bg-primary/15 text-primary" : "bg-foreground/5 text-muted-foreground"
                            }`}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 text-muted-foreground/40 transition-transform duration-300 flex-shrink-0 ${isActive ? "rotate-90 text-primary" : ""}`} />
                    </div>

                    {/* Expanded description */}
                    <div
                      className="overflow-hidden transition-all duration-500 ease-out"
                      style={{
                        maxHeight: isActive ? "120px" : "0px",
                        opacity: isActive ? 1 : 0,
                      }}
                    >
                      <p className="text-sm text-muted-foreground leading-relaxed mt-3 pl-12 sm:pl-14">
                        {layer.description}
                      </p>
                    </div>
                  </div>
                </button>

                {/* Arrow between layers */}
                {idx < archLayers.length - 1 && (
                  <div className="flex justify-center">
                    <div className={`w-0.5 h-2.5 transition-colors duration-300 ${isActive ? "bg-primary" : "bg-primary/50"}`} />
                  </div>
                )}
              </div>
            );
          })}

          {/* Bottom: protected data */}
          <div className="flex flex-col items-center mt-1">
            <div className="w-0.5 h-6 bg-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary mb-3" />
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-xs font-medium text-primary border border-primary/20">
              <Lock className="w-3.5 h-3.5" />
              Dados protegidos e isolados por tenant
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


/* ═══════════════════════════════════════════════════════════════════ */
/*                         MAIN COMPONENT                            */
/* ═══════════════════════════════════════════════════════════════════ */
const DataRainConsole = () => {
  const [activeModule, setActiveModule] = useState(1);
  const [consoleUser, setConsoleUser] = useState<string | null>("cliente@empresa.com.br");
  const demoRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number; visible: boolean }>({ x: 0, y: 0, visible: false });
  const [cursorTarget, setCursorTarget] = useState<{ x: number; y: number } | null>(null);
  const [activePill, setActivePill] = useState<string | null>(null);

  const triggerHighlight = () => {
    const el = demoRef.current;
    if (!el) return;
    el.classList.remove("demo-highlight");
    void el.offsetWidth;
    el.classList.add("demo-highlight");
  };

  const handleSidebarNavigate = (id: string) => {
    const idx = modules.findIndex((m) => m.id === id);
    if (idx !== -1) {
      setActiveModule(idx);
      setActivePill(null);
      setTimeout(triggerHighlight, 50);
    }
  };

  const handleActionPill = useCallback((pill: typeof actionPills[0]) => {
    const moduleIdx = modules.findIndex((m) => m.id === pill.moduleId);
    if (moduleIdx === -1) return;

    setActivePill(pill.id);
    setActiveModule(moduleIdx);

    // Wait for the new demo to render, then find the target and animate cursor
    setTimeout(() => {
      const container = demoRef.current;
      if (!container) return;

      const target = container.querySelector(`[data-demo-action="${pill.actionTarget}"]`) as HTMLElement | null;
      if (!target) return;

      const containerRect = container.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      // Start cursor from center of demo
      const startX = containerRect.width / 2;
      const startY = containerRect.height / 2;
      // End at center of target element
      const endX = targetRect.left - containerRect.left + targetRect.width / 2;
      const endY = targetRect.top - containerRect.top + targetRect.height / 2;

      setCursor({ x: startX, y: startY, visible: true });
      setCursorTarget(null);

      // Animate to target
      requestAnimationFrame(() => {
        setCursorTarget({ x: endX, y: endY });
      });

      // Click the target after cursor arrives
      setTimeout(() => {
        target.classList.add("demo-action-pulse");
        setTimeout(() => {
          target.click();
          target.classList.remove("demo-action-pulse");
        }, 300);
        // Hide cursor
        setTimeout(() => {
          setCursor((c) => ({ ...c, visible: false }));
          setCursorTarget(null);
        }, 600);
      }, 700);
    }, 150);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO title="dataRain Console" description="Plataforma de gestão cloud da dataRain. Dashboard, suporte, billing e automação em um só lugar." canonical="/console" />
      <UniversalHeader showHeroSection={false} />
      <section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[600px] sm:w-[800px] md:w-[1000px] h-[600px] sm:h-[800px] md:h-[1000px] bg-primary/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-[700px] sm:w-[900px] md:w-[1100px] h-[700px] sm:h-[900px] md:h-[1100px] bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/4 left-1/3 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-1/4 right-1/3 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-emerald-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>
        {/* grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h1v1H0V0zm30 0h1v1h-1V0zM0 30h1v1H0v-1zm30 0h1v1h-1v-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        {/* floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 py-10 sm:py-12 md:py-16 pt-32 sm:pt-36 md:pt-40 lg:pt-44">
          <div className="max-w-6xl mx-auto text-center">
            <div className="backdrop-blur-md bg-card/20 rounded-3xl p-8 sm:p-10 md:p-16 border border-white/10 shadow-2xl">
              {/* product badge */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.92] mb-6 sm:mb-8 text-foreground tracking-tight">
                Seu ambiente AWS.
                <br />
                <span className="text-primary">
                  Sua parceria dataRain.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10">
                A plataforma que centraliza a gestão do seu ambiente AWS e o relacionamento com a dataRain.
                Otimização automática, billing detalhado, acompanhamento de projetos,
                profissionais alocados e suporte técnico com IA. Tudo em uma interface única.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <a href="/fale-conosco">
                    Solicitar Acesso
                    <Play className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" asChild className="border-primary/30 hover:bg-primary/5">
                  <a href="#modulos">
                    Explorar Módulos
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ─────────────── STATS BAR ─────────────── */}
      <section className="py-8 sm:py-10 relative overflow-hidden border-y border-border/10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: 200, suffix: "+", label: "Clientes ativos" },
              { value: 50, prefix: "R$", suffix: "M+", label: "Gerenciados/mês" },
              { value: 7, suffix: "", label: "Módulos integrados" },
              { value: 24, suffix: "/7", label: "Suporte com IA" },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── MODULES SHOWCASE ─────────────── */}
      <section id="modulos" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/3 to-background" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
                Explore o Console.
                <br className="hidden sm:block" />
                <span className="text-accent"> Clique, navegue e teste.</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
                Essa é uma demo 100% funcional do dataRain Console. Clique nos botões abaixo para testar cada módulo na prática.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                <Zap className="w-4 h-4" />
                <span>Totalmente interativo — experimente agora</span>
              </div>
            </div>

            {/* Quick actions bar - Horizontal at top */}
            <div className="bg-card/80 rounded-2xl border border-border/20 p-4 shadow-lg backdrop-blur-sm mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Ações Rápidas</h3>
                  <p className="text-xs text-muted-foreground">Clique para testar funcionalidades específicas</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {actionPills.map((pill) => {
                  const PillIcon = pill.icon;
                  return (
                    <button
                      key={pill.id}
                      onClick={() => handleActionPill(pill)}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        activePill === pill.id
                          ? "bg-primary text-white shadow-md shadow-primary/20"
                          : "bg-card border border-border/20 text-foreground hover:border-primary/30 hover:bg-primary/5 hover:scale-105 active:scale-100"
                      }`}
                    >
                      <PillIcon className="w-4 h-4" />
                      <span>{pill.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Demo layout - Console on left, Module info on right */}
            <div className="grid lg:grid-cols-[1fr_380px] gap-6 items-start">
              {/* Demo container - Left side */}
              <div className="space-y-4">
                {/* Demo box */}
                <div className="group/demo bg-gradient-to-br from-card/50 to-card/30 rounded-2xl border-2 border-border/20 p-4 shadow-xl backdrop-blur-sm hover:border-primary/30 transition-all duration-500">
                  {/* Interactive indicator */}
                  <div className="flex items-center justify-between mb-3 px-2">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                        <div className="w-2 h-2 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                      </div>
                      <span className="text-xs font-medium text-primary">Demo Interativa</span>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      Ativo
                    </span>
                  </div>
                  
                  <div ref={demoRef} className="min-w-0 rounded-xl overflow-hidden relative bg-background shadow-inner border border-border/10">
                    {getDemoComponent(modules[activeModule].id, handleSidebarNavigate, consoleUser, setConsoleUser, () => {})}
                    {/* Animated cursor */}
                    {cursor.visible && (
                      <div
                        className="absolute z-50 pointer-events-none transition-all duration-700 ease-out"
                        style={{
                          left: cursorTarget ? cursorTarget.x : cursor.x,
                          top: cursorTarget ? cursorTarget.y : cursor.y,
                          transform: "translate(-2px, -1px)",
                        }}
                      >
                        <svg width="12" height="18" viewBox="0 0 12 18" fill="none" className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                          <path d="M1 1v15.5l3.93-3.93h5.24L1 1z" fill="white" stroke="#222" strokeWidth="1" strokeLinejoin="round" />
                        </svg>
                        <div className="absolute top-2.5 left-1.5 w-2 h-2 bg-[#3893af]/50 rounded-full animate-ping" />
                      </div>
                    )}
                  </div>
                  
                  {/* Interaction hint */}
                  <div className="mt-3 px-2 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                      Clique nos elementos para interagir
                    </span>
                  </div>
                </div>
              </div>

              {/* Module info - Right side */}
              <div className="order-1 lg:order-2">
                <div className="bg-card/80 rounded-2xl border border-border/20 p-6 shadow-lg backdrop-blur-sm sticky top-24">
                  {(() => {
                    const mod = modules[activeModule];
                    const Icon = mod.icon;
                    return (
                      <>
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-5 pb-5 border-b border-border/20">
                          <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${mod.color} shadow-lg`}>
                            <Icon className="w-7 h-7 text-white" />
                            {/* Pulse ring */}
                            <div className={`absolute inset-0 rounded-xl ${mod.color} opacity-50 animate-ping`} style={{ animationDuration: "2s" }} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-2 ${mod.bgColor} text-primary border border-primary/20`}>
                              {mod.badge}
                            </div>
                            <h3 className="text-xl font-bold text-foreground leading-tight">
                              {mod.title}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                          {mod.description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-2.5">
                          {mod.highlights.map((h, hi) => (
                            <div key={hi} className="flex items-start gap-2.5 text-sm text-foreground/80 group/item">
                              <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-primary mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
                              <span className="leading-relaxed">{h}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── ANTES VS DEPOIS ─────────────── */}
      <section className="py-10 sm:py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <ScrollReveal>
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
                Como era.
                <br />
                <span className="text-accent">Como é com o Console.</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Alterne o toggle e veja a diferença na prática.
              </p>
            </div>
            </ScrollReveal>

            <AntesDepoisSection />
          </div>
        </div>
      </section>

      {/* ─────────────── DIFERENCIAIS ─────────────── */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
                Por que o Console muda o jogo
                <br />
                <span className="text-accent">para nossos clientes?</span>
              </h2>
            </div>
            </ScrollReveal>

            {/* Timeline alternating layout */}
            <div className="relative">
              {/* Vertical center line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-accent/15 to-primary/20 hidden md:block" />

              <div className="space-y-3 md:space-y-[-1px]">
                {diferenciais.map((item, index) => {
                  const Icon = item.icon;
                  const isLeft = index % 2 === 0;
                  return (
                    <ScrollReveal key={index} delay={index * 100} direction={isLeft ? "right" : "left"} simulateHover>
                    {(hovered: boolean) => {
                      const h = hovered; // shorthand for active-hover state
                      return (
                    <div className="relative md:flex md:items-center md:min-h-[80px]">
                      {/* Center node */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex">
                        <div className={`w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg transition-transform duration-500 ${h ? "scale-110" : ""}`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      {/* Left content */}
                      <div className={`md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pr-12 md:invisible"}`}>
                        {isLeft && (
                          <div className={`group relative bg-card rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 ${h ? "border-primary/40 shadow-xl -translate-y-1" : "border-border/50"}`}>
                            <div className={`absolute inset-0 bg-primary/5 transition-opacity duration-500 group-hover:opacity-100 ${h ? "opacity-100" : "opacity-0"}`} />
                            <div className={`absolute top-0 right-0 h-0.5 bg-primary transition-all duration-500 ease-out group-hover:w-full ${h ? "w-full" : "w-0"}`} />
                            <div className={`absolute -bottom-12 -left-12 w-24 h-24 bg-primary/15 rounded-full blur-2xl transition-opacity duration-500 group-hover:opacity-50 ${h ? "opacity-50" : "opacity-0"}`} />
                            <div className="relative z-10 p-4 sm:p-5 flex items-center gap-3 md:flex-row-reverse">
                              <div className={`w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 shadow-md md:hidden transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${h ? "scale-110 rotate-3" : ""}`}>
                                <Icon className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1">
                                <h3 className={`text-sm font-bold mb-0.5 transition-colors duration-300 group-hover:text-primary ${h ? "text-primary" : "text-foreground"}`}>{item.title}</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Right content */}
                      <div className={`md:w-1/2 ${!isLeft ? "md:pl-12" : "md:pl-12 md:invisible"}`}>
                        {!isLeft && (
                          <div className={`group relative bg-card rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 ${h ? "border-primary/40 shadow-xl -translate-y-1" : "border-border/50"}`}>
                            <div className={`absolute inset-0 bg-primary/5 transition-opacity duration-500 group-hover:opacity-100 ${h ? "opacity-100" : "opacity-0"}`} />
                            <div className={`absolute top-0 left-0 h-0.5 bg-primary transition-all duration-500 ease-out group-hover:w-full ${h ? "w-full" : "w-0"}`} />
                            <div className={`absolute -bottom-12 -right-12 w-24 h-24 bg-primary/15 rounded-full blur-2xl transition-opacity duration-500 group-hover:opacity-50 ${h ? "opacity-50" : "opacity-0"}`} />
                            <div className="relative z-10 p-4 sm:p-5 flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 shadow-md md:hidden transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${h ? "scale-110 rotate-3" : ""}`}>
                                <Icon className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1">
                                <h3 className={`text-sm font-bold mb-0.5 transition-colors duration-300 group-hover:text-primary ${h ? "text-primary" : "text-foreground"}`}>{item.title}</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                      );
                    }}
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── ARQUITETURA & SEGURANÇA ─────────────── */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
                Segurança em cada camada.
                <br />
                <span className="text-accent">Do login ao dado.</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Clique em cada camada para entender como o Console protege seus dados.
              </p>
            </div>
            </ScrollReveal>

            <ArchitectureDiagram />
          </div>
        </div>
      </section>

      {/* ─────────────── FINAL CTA ─────────────── */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card/80 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl border border-primary/20 backdrop-blur-sm">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Seu ambiente e sua parceria.
                <br />
                <span className="text-accent">
                  Em um só lugar.
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
                Solicite acesso ao dataRain Console e tenha visibilidade total do seu ambiente AWS,
                dos projetos em andamento e dos profissionais alocados na sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <a href="/fale-conosco">
                    Solicitar Acesso
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" asChild className="border-primary/30 hover:bg-primary/5">
                  <a href="/fale-conosco">
                    Falar com Especialista
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

export default DataRainConsole;
