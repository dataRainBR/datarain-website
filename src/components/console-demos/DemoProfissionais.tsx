import { useState } from "react";
import ConsoleShell from "./ConsoleShell";
import { Briefcase, ChevronDown, Plus, MousePointerClick } from "lucide-react";

const profissionais = [
  { name: "Carlos Mendes", role: "DevOps Engineer", level: "L6", fn: "DevOps", hrs: 8, cost: 185, project: "Migração Prod", avatar: "CM", activities: ["Pipeline CI/CD CodePipeline", "Migração ECS Fargate", "Terraform modules"] },
  { name: "Ana Paula Silva", role: "Cloud Architect", level: "L7", fn: "Arquitetura", hrs: 4, cost: 250, project: "Landing Zone v2", avatar: "AP", activities: ["Design multi-account", "Security baseline", "Network topology"] },
  { name: "Pedro Gutierrez", role: "Security Analyst", level: "L5", fn: "Security", hrs: 8, cost: 160, project: "Assessment Seg.", avatar: "PG", activities: ["GuardDuty analysis", "IAM review", "Compliance report"] },
  { name: "Julia Rodrigues", role: "Data Engineer", level: "L6", fn: "Data", hrs: 6, cost: 195, project: "Eng. de Dados", avatar: "JR", activities: ["Glue ETL pipelines", "Athena optimization", "S3 data lake"] },
  { name: "Rafael Costa", role: "ML Engineer", level: "L7", fn: "ML", hrs: 4, cost: 270, project: "GenAI & ML", avatar: "RC", activities: ["Bedrock fine-tuning", "SageMaker endpoints", "RAG pipeline"] },
];

const funcoes = ["Todos", "DevOps", "Arquitetura", "Security", "Data", "ML"];

const DemoProfissionais = ({ onNavigate, user, onLogin, onLogout }: { onNavigate?: (id: string) => void; user: string | null; onLogin: (email: string) => void; onLogout: () => void }) => {
  const [filterFn, setFilterFn] = useState("Todos");
  const [expanded, setExpanded] = useState<number | null>(0);
  const [showFilter, setShowFilter] = useState(false);

  const filtered = filterFn === "Todos" ? profissionais : profissionais.filter((p) => p.fn === filterFn);
  const totalCost = filtered.reduce((a, p) => a + p.cost * p.hrs * 22, 0);

  return (
    <ConsoleShell activeId="profissionais" title="Serviços Profissionais" subtitle="Gestão de profissionais alocados" onNavigate={onNavigate} user={user} onLogin={onLogin} onLogout={onLogout}>
      {/* KPIs */}
      <div className="grid grid-cols-3 gap-2.5 mb-4">
        <div className="bg-[#3893af]/10 border border-[#3893af]/20 rounded-xl p-3">
          <div className="text-[9px] text-white/30 mb-1">Profissionais</div>
          <div className="text-base font-bold text-[#3893af]">{filtered.length}</div>
        </div>
        <div className="bg-[#f78504]/10 border border-[#f78504]/20 rounded-xl p-3">
          <div className="text-[9px] text-white/30 mb-1">Custo Mensal</div>
          <div className="text-sm font-bold text-[#f78504]">R$ {(totalCost / 1000).toFixed(0)}k</div>
        </div>
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 flex items-center justify-center">
          <button className="flex items-center gap-1 text-[10px] text-emerald-400 font-semibold hover:text-emerald-300 transition-colors">
            <Plus className="w-3 h-3" /> Solicitar
          </button>
        </div>
      </div>

      {/* filter */}
      <div className="relative mb-3">
        <button onClick={() => setShowFilter(!showFilter)} className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] text-white/50 hover:bg-white/8 transition-colors">
          Função: {filterFn} <ChevronDown className="w-3 h-3" />
        </button>
        {showFilter && (
          <div className="absolute top-full left-0 mt-1 bg-[#141d30] border border-white/10 rounded-lg overflow-hidden z-20 shadow-xl min-w-[120px]">
            {funcoes.map((f) => (
              <div key={f} onClick={() => { setFilterFn(f); setShowFilter(false); }} className={`px-3 py-1.5 text-[10px] cursor-pointer transition-colors ${filterFn === f ? "bg-[#3893af]/20 text-[#3893af]" : "text-white/40 hover:bg-white/5"}`}>
                {f}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* list */}
      <div className="space-y-2 max-h-[240px] overflow-y-auto pr-1">
        {filtered.map((p, i) => {
          const isExpanded = expanded === i;
          return (
            <div key={i} className={`border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${isExpanded ? "border-[#3893af]/20 bg-[#3893af]/5" : "border-white/5 bg-white/[0.02] hover:border-white/10"}`} onClick={() => setExpanded(isExpanded ? null : i)}>
              <div className="p-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#3893af]/30 to-[#f78504]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-bold text-[#3893af]">{p.avatar}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-white/80">{p.name}</span>
                      <span className="text-[8px] px-1.5 py-0.5 rounded bg-white/10 text-white/35 font-mono">{p.level}</span>
                    </div>
                    <div className="text-[9px] text-white/30">{p.role}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-[10px] text-white/40 font-mono">{p.hrs}h/dia</div>
                    <div className="text-[9px] text-[#3893af]/50 font-mono">R$ {p.cost}/h</div>
                  </div>
                </div>
              </div>
              {isExpanded && (
                <div className="px-3 pb-3 pt-1 border-t border-white/5">
                  <div className="flex items-center gap-2 text-[9px] text-white/35 mb-2">
                    <Briefcase className="w-3 h-3" /> Projeto: {p.project}
                  </div>
                  <div className="text-[9px] text-white/25 mb-1.5">Atividades da semana:</div>
                  <div className="space-y-1">
                    {p.activities.map((a, j) => (
                      <div key={j} className="flex items-center gap-2 text-[9px] text-white/35">
                        <div className="w-1 h-1 rounded-full bg-[#3893af]/50" /> {a}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-3 text-center">
        <span className="text-[9px] text-white/20 inline-flex items-center gap-1"><MousePointerClick className="w-3 h-3" /> Filtre por função e expanda para ver atividades semanais</span>
      </div>
    </ConsoleShell>
  );
};

export default DemoProfissionais;
