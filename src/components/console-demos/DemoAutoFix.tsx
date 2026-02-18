import { useState } from "react";
import ConsoleShell from "./ConsoleShell";
import {
  Server, HardDrive, Database, Cloud,
  Activity, CheckCircle2,
  Zap, Play, ChevronDown, MousePointerClick
} from "lucide-react";

interface Finding {
  id: string;
  service: string;
  icon: typeof Server;
  issue: string;
  saving: string;
  savingNum: number;
  severity: "high" | "medium" | "low";
  fixed: boolean;
}

const initialFindings: Finding[] = [
  { id: "1", service: "EC2", icon: Server, issue: "3 instâncias ociosas (< 5% CPU por 7 dias)", saving: "R$ 2.340/mês", savingNum: 2340, severity: "high", fixed: false },
  { id: "2", service: "EBS", icon: HardDrive, issue: "12 volumes GP2 → converter para GP3", saving: "R$ 890/mês", savingNum: 890, severity: "medium", fixed: false },
  { id: "3", service: "EBS", icon: HardDrive, issue: "5 volumes órfãos sem instância", saving: "R$ 420/mês", savingNum: 420, severity: "high", fixed: false },
  { id: "4", service: "RDS", icon: Database, issue: "db.r5.xlarge → recomendado db.r5.large", saving: "R$ 1.150/mês", savingNum: 1150, severity: "medium", fixed: false },
  { id: "5", service: "S3", icon: Cloud, issue: "3 buckets sem lifecycle policy", saving: "R$ 310/mês", savingNum: 310, severity: "low", fixed: false },
  { id: "6", service: "CloudWatch", icon: Activity, issue: "Logs com retenção infinita → 30 dias", saving: "R$ 560/mês", savingNum: 560, severity: "medium", fixed: false },
];

const sevConfig = {
  high: { label: "Alto", color: "text-red-400", bg: "bg-red-500/15", border: "border-red-500/20" },
  medium: { label: "Médio", color: "text-amber-400", bg: "bg-amber-500/15", border: "border-amber-500/20" },
  low: { label: "Baixo", color: "text-blue-400", bg: "bg-blue-500/15", border: "border-blue-500/20" },
};

const DemoAutoFix = ({ onNavigate, user, onLogin, onLogout }: { onNavigate?: (id: string) => void; user: string | null; onLogin: (email: string) => void; onLogout: () => void }) => {
  const [findings, setFindings] = useState(initialFindings);
  const [filter, setFilter] = useState("all");
  const [fixing, setFixing] = useState<string | null>(null);
  const [showFilter, setShowFilter] = useState(false);

  const totalSavings = findings.filter((f) => f.fixed).reduce((a, f) => a + f.savingNum, 0);
  const potentialSavings = findings.filter((f) => !f.fixed).reduce((a, f) => a + f.savingNum, 0);
  const fixedCount = findings.filter((f) => f.fixed).length;

  const handleFix = (id: string) => {
    setFixing(id);
    setTimeout(() => {
      setFindings((p) => p.map((f) => (f.id === id ? { ...f, fixed: true } : f)));
      setFixing(null);
    }, 1500);
  };

  const handleFixAll = () => {
    const unfixed = findings.filter((f) => !f.fixed);
    unfixed.forEach((f, i) => {
      setTimeout(() => {
        setFixing(f.id);
        setTimeout(() => {
          setFindings((p) => p.map((ff) => (ff.id === f.id ? { ...ff, fixed: true } : ff)));
          setFixing(null);
        }, 800);
      }, i * 1000);
    });
  };

  const services = ["all", ...new Set(findings.map((f) => f.service))];
  const filtered = filter === "all" ? findings : findings.filter((f) => f.service === filter);

  return (
    <ConsoleShell activeId="autofix" title="AutoFix" subtitle="Otimização Automática de Recursos AWS" onNavigate={onNavigate} user={user} onLogin={onLogin} onLogout={onLogout}>
      {/* KPIs */}
      <div className="grid grid-cols-3 gap-2.5 mb-4">
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3">
          <div className="text-[9px] text-white/30 mb-1">Economia Gerada</div>
          <div className="text-base font-bold text-emerald-400">R$ {totalSavings.toLocaleString("pt-BR")}</div>
          <div className="text-[8px] text-emerald-400/40">/mês</div>
        </div>
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3">
          <div className="text-[9px] text-white/30 mb-1">Potencial</div>
          <div className="text-base font-bold text-amber-400">R$ {potentialSavings.toLocaleString("pt-BR")}</div>
          <div className="text-[8px] text-amber-400/40">/mês</div>
        </div>
        <div className="bg-[#3893af]/10 border border-[#3893af]/20 rounded-xl p-3">
          <div className="text-[9px] text-white/30 mb-1">Corrigidos</div>
          <div className="text-base font-bold text-[#3893af]">{fixedCount}/{findings.length}</div>
          <div className="text-[8px] text-[#3893af]/40">findings</div>
        </div>
      </div>

      {/* toolbar */}
      <div className="flex items-center justify-between mb-3">
        <div className="relative">
          <button onClick={() => setShowFilter(!showFilter)} className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] text-white/50 hover:bg-white/8 transition-colors">
            Filtrar: {filter === "all" ? "Todos" : filter}
            <ChevronDown className="w-3 h-3" />
          </button>
          {showFilter && (
            <div className="absolute top-full left-0 mt-1 bg-[#141d30] border border-white/10 rounded-lg overflow-hidden z-20 shadow-xl min-w-[100px]">
              {services.map((s) => (
                <div key={s} onClick={() => { setFilter(s); setShowFilter(false); }} className={`px-3 py-1.5 text-[10px] cursor-pointer transition-colors ${filter === s ? "bg-emerald-500/20 text-emerald-400" : "text-white/40 hover:bg-white/5"}`}>
                  {s === "all" ? "Todos" : s}
                </div>
              ))}
            </div>
          )}
        </div>
        <button data-demo-action="fix-all" onClick={handleFixAll} disabled={fixedCount === findings.length} className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/15 border border-emerald-500/25 rounded-lg text-[10px] text-emerald-400 font-medium hover:bg-emerald-500/25 transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
          <Zap className="w-3 h-3" /> Corrigir Tudo
        </button>
      </div>

      {/* findings */}
      <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
        {filtered.map((f) => {
          const sev = sevConfig[f.severity];
          const isFixing = fixing === f.id;
          return (
            <div key={f.id} className={`border rounded-xl p-3 transition-all duration-500 ${f.fixed ? "border-emerald-500/20 bg-emerald-500/5" : "border-white/5 bg-white/[0.02] hover:border-white/10"}`}>
              <div className="flex items-start gap-2.5">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${f.fixed ? "bg-emerald-500/20" : "bg-white/5"}`}>
                  {f.fixed ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <f.icon className="w-3.5 h-3.5 text-white/40" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-semibold text-white/70">{f.service}</span>
                    <span className={`text-[8px] px-1.5 py-0.5 rounded-full ${sev.bg} ${sev.color} font-medium`}>{sev.label}</span>
                  </div>
                  <p className="text-[10px] text-white/35 leading-relaxed">{f.issue}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[10px] font-semibold text-emerald-400">{f.saving}</span>
                    {!f.fixed && (
                      <button data-demo-action={f.id === "1" ? "fix-first" : undefined} onClick={() => handleFix(f.id)} disabled={isFixing} className="flex items-center gap-1 px-2 py-1 bg-emerald-500/15 border border-emerald-500/25 rounded-lg text-[9px] text-emerald-400 font-medium hover:bg-emerald-500/25 transition-all disabled:opacity-50">
                        {isFixing ? <><div className="w-2.5 h-2.5 border border-emerald-400 border-t-transparent rounded-full animate-spin" /> Corrigindo...</> : <><Play className="w-2.5 h-2.5" /> Corrigir</>}
                      </button>
                    )}
                    {f.fixed && <span className="text-[9px] text-emerald-400/50 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Corrigido</span>}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 text-center">
        <span className="text-[9px] text-white/20 inline-flex items-center gap-1"><MousePointerClick className="w-3 h-3" /> Clique em "Corrigir" nos findings ou "Corrigir Tudo"</span>
      </div>
    </ConsoleShell>
  );
};

export default DemoAutoFix;
