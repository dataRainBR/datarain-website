import { useState } from "react";
import ConsoleShell from "./ConsoleShell";
import {
  CheckCircle2, Plus, User, Calendar, Target, MousePointerClick,
  Rocket, Cloud, DollarSign, Building2, Shield, Landmark, BarChart3, Brain,
  type LucideIcon
} from "lucide-react";

type Tab = "acompanhamento" | "solicitar";

const projetos = [
  { name: "Migração Workloads Produção", status: "Em andamento", pct: 78, responsible: "Carlos M.", start: "Out/2025", end: "Mar/2026", obs: "Sprint 8 de 12 concluída", color: "bg-[#3893af]" },
  { name: "Landing Zone v2", status: "Em andamento", pct: 45, responsible: "Ana P.", start: "Dez/2025", end: "Abr/2026", obs: "Aguardando aprovação de security", color: "bg-amber-400" },
  { name: "FinOps Implementation", status: "Em andamento", pct: 92, responsible: "Pedro G.", start: "Set/2025", end: "Fev/2026", obs: "Fase final. Relatórios em validação", color: "bg-emerald-400" },
  { name: "Assessment de Segurança", status: "Concluído", pct: 100, responsible: "Julia R.", start: "Nov/2025", end: "Jan/2026", obs: "Entregue com 42 recomendações", color: "bg-emerald-400" },
];

const servicosCatalogo: { name: string; icon: LucideIcon }[] = [
  { name: "DevOps e Modernization", icon: Rocket },
  { name: "Migração e DR", icon: Cloud },
  { name: "Gestão de FinOps", icon: DollarSign },
  { name: "Assessment de Arquitetura", icon: Building2 },
  { name: "Assessment de Segurança", icon: Shield },
  { name: "Governança e Landing Zone", icon: Landmark },
  { name: "Eng. de Dados", icon: BarChart3 },
  { name: "GenAI & ML", icon: Brain },
];

const DemoProjetos = ({ onNavigate, user, onLogin, onLogout }: { onNavigate?: (id: string) => void; user: string | null; onLogin: (email: string) => void; onLogout: () => void }) => {
  const [tab, setTab] = useState<Tab>("acompanhamento");
  const [expandedProject, setExpandedProject] = useState<number | null>(0);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <ConsoleShell activeId="projetos" title="Projetos" subtitle="Acompanhamento e solicitação de projetos" onNavigate={onNavigate} user={user} onLogin={onLogin} onLogout={onLogout}>
      {/* tabs */}
      <div className="flex gap-1 mb-4 bg-white/[0.03] rounded-xl p-1">
        {([["acompanhamento", "Acompanhamento"], ["solicitar", "Solicitar Projeto"]] as const).map(([key, label]) => (
          <button key={key} data-demo-action={key === "acompanhamento" ? "tab-acompanhamento" : undefined} onClick={() => setTab(key)} className={`flex-1 px-3 py-2 rounded-lg text-[10px] font-semibold transition-all ${tab === key ? "bg-[#3893af]/20 text-[#3893af] shadow" : "text-white/35 hover:text-white/50"}`}>
            {label}
          </button>
        ))}
      </div>

      {tab === "acompanhamento" && (
        <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
          {projetos.map((p, i) => {
            const isExpanded = expandedProject === i;
            return (
              <div key={i} className={`border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${isExpanded ? "border-[#3893af]/20 bg-[#3893af]/5" : "border-white/5 bg-white/[0.02] hover:border-white/10"}`} onClick={() => setExpandedProject(isExpanded ? null : i)}>
                <div className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full ${p.color}`} />
                    <span className="text-[11px] font-semibold text-white/80 flex-1">{p.name}</span>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full font-medium ${p.pct === 100 ? "bg-emerald-500/15 text-emerald-400" : "bg-[#3893af]/15 text-[#3893af]"}`}>{p.status}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full transition-all duration-1000 ${p.pct === 100 ? "bg-emerald-400" : "bg-[#3893af]"}`} style={{ width: `${p.pct}%` }} />
                    </div>
                    <span className="text-[10px] text-white/40 font-mono w-8 text-right">{p.pct}%</span>
                  </div>
                </div>
                {isExpanded && (
                  <div className="px-3 pb-3 pt-1 border-t border-white/5 space-y-1.5">
                    <div className="flex items-center gap-2 text-[9px] text-white/35"><User className="w-3 h-3" /> {p.responsible}</div>
                    <div className="flex items-center gap-2 text-[9px] text-white/35"><Calendar className="w-3 h-3" /> {p.start} → {p.end}</div>
                    <div className="flex items-center gap-2 text-[9px] text-white/35"><Target className="w-3 h-3" /> {p.obs}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {tab === "solicitar" && (
        <div>
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-8 gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-sm font-semibold text-emerald-400">Solicitação enviada!</span>
              <span className="text-[10px] text-white/35">Nossa equipe entrará em contato em breve.</span>
            </div>
          ) : (
            <>
              <p className="text-[10px] text-white/35 mb-3">Selecione o tipo de serviço:</p>
              <div className="grid grid-cols-2 gap-2 mb-4 max-h-[200px] overflow-y-auto pr-1">
                {servicosCatalogo.map((s, i) => (
                  <div key={i} onClick={() => setSelectedService(i)} className={`border rounded-xl p-3 cursor-pointer transition-all duration-200 ${selectedService === i ? "border-[#3893af]/40 bg-[#3893af]/10" : "border-white/5 bg-white/[0.02] hover:border-white/10"}`}>
                    <s.icon className="w-4 h-4 text-[#3893af] mb-1" />
                    <span className="text-[10px] font-semibold text-white/60">{s.name}</span>
                  </div>
                ))}
              </div>
              <button onClick={handleSubmit} disabled={selectedService === null} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#f78504]/15 border border-[#f78504]/25 rounded-xl text-xs text-[#f78504] font-semibold hover:bg-[#f78504]/25 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
                <Plus className="w-3.5 h-3.5" /> Solicitar Projeto
              </button>
            </>
          )}
        </div>
      )}

      <div className="mt-3 text-center">
        <span className="text-[9px] text-white/20 inline-flex items-center gap-1"><MousePointerClick className="w-3 h-3" /> Alterne entre abas, expanda projetos e solicite novos serviços</span>
      </div>
    </ConsoleShell>
  );
};

export default DemoProjetos;
