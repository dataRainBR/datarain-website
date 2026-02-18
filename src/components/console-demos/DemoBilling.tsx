import { useState } from "react";
import ConsoleShell from "./ConsoleShell";
import {
  ChevronDown, ArrowUpDown, TrendingUp, TrendingDown, Filter, MousePointerClick
} from "lucide-react";

const invoices = [
  { month: "Jan/2026", account: "Produção (1234)", org: "DataRain Corp", total: 48520, change: 3.2 },
  { month: "Dez/2025", account: "Produção (1234)", org: "DataRain Corp", total: 47015, change: -2.1 },
  { month: "Nov/2025", account: "Produção (1234)", org: "DataRain Corp", total: 48025, change: 5.4 },
  { month: "Jan/2026", account: "Staging (5678)", org: "DataRain Corp", total: 12340, change: 1.8 },
  { month: "Dez/2025", account: "Staging (5678)", org: "DataRain Corp", total: 12120, change: -0.5 },
  { month: "Jan/2026", account: "Dev (9012)", org: "DataRain Labs", total: 5680, change: 12.3 },
  { month: "Dez/2025", account: "Dev (9012)", org: "DataRain Labs", total: 5055, change: -1.2 },
];

const barData = [
  { label: "EC2", value: 38, color: "bg-[#3893af]" },
  { label: "RDS", value: 22, color: "bg-[#f78504]" },
  { label: "S3", value: 15, color: "bg-purple-500" },
  { label: "Lambda", value: 10, color: "bg-emerald-500" },
  { label: "CloudFront", value: 8, color: "bg-rose-500" },
  { label: "Outros", value: 7, color: "bg-amber-500" },
];

const DemoBilling = ({ onNavigate, user, onLogin, onLogout }: { onNavigate?: (id: string) => void; user: string | null; onLogin: (email: string) => void; onLogout: () => void }) => {
  const [filterAccount, setFilterAccount] = useState("all");
  const [filterOrg, setFilterOrg] = useState("all");
  const [sortBy, setSortBy] = useState<"month" | "total">("month");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [showAccountFilter, setShowAccountFilter] = useState(false);
  const [showOrgFilter, setShowOrgFilter] = useState(false);
  const [activeTab, setActiveTab] = useState<"table" | "charts">("charts");

  const accounts = ["all", ...new Set(invoices.map((i) => i.account))];
  const orgs = ["all", ...new Set(invoices.map((i) => i.org))];

  let filtered = invoices
    .filter((i) => filterAccount === "all" || i.account === filterAccount)
    .filter((i) => filterOrg === "all" || i.org === filterOrg);
  filtered = [...filtered].sort((a, b) => {
    if (sortBy === "total") return sortDir === "desc" ? b.total - a.total : a.total - b.total;
    return sortDir === "desc" ? b.month.localeCompare(a.month) : a.month.localeCompare(b.month);
  });

  const totalGeral = filtered.reduce((a, i) => a + i.total, 0);
  const toggleSort = (col: "month" | "total") => {
    if (sortBy === col) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortBy(col); setSortDir("desc"); }
  };

  return (
    <ConsoleShell activeId="billing" title="Billing" subtitle="Dashboards de Custos AWS" onNavigate={onNavigate} user={user} onLogin={onLogin} onLogout={onLogout}>
      {/* KPIs */}
      <div className="grid grid-cols-3 gap-2.5 mb-4">
        <div className="bg-[#3893af]/10 border border-[#3893af]/20 rounded-xl p-3">
          <div className="text-[9px] text-white/30 mb-1">Total Filtrado</div>
          <div className="text-sm font-bold text-[#3893af]">R$ {totalGeral.toLocaleString("pt-BR")}</div>
        </div>
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-3">
          <div className="text-[9px] text-white/30 mb-1">Contas</div>
          <div className="text-sm font-bold text-purple-400">{new Set(filtered.map((f) => f.account)).size}</div>
        </div>
        <div className="bg-[#f78504]/10 border border-[#f78504]/20 rounded-xl p-3">
          <div className="text-[9px] text-white/30 mb-1">Invoices</div>
          <div className="text-sm font-bold text-[#f78504]">{filtered.length}</div>
        </div>
      </div>

      {/* tabs */}
      <div className="flex gap-1 mb-4 bg-white/[0.03] rounded-xl p-1">
        {([["charts", "Gráficos"], ["table", "Tabela"]] as const).map(([key, label]) => (
          <button key={key} data-demo-action={key === "table" ? "tab-tabela" : undefined} onClick={() => setActiveTab(key)} className={`flex-1 px-3 py-1.5 rounded-lg text-[10px] font-semibold transition-all ${activeTab === key ? "bg-[#3893af]/20 text-[#3893af] shadow" : "text-white/35 hover:text-white/50"}`}>
            {label}
          </button>
        ))}
      </div>

      {activeTab === "charts" && (
        <div className="grid grid-cols-2 gap-3">
          {/* bar chart - Top Serviços */}
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3">
            <div className="text-[10px] font-semibold text-white/60 mb-1">Top Serviços AWS</div>
            <div className="text-[8px] text-white/25 mb-3">Principais serviços por custo</div>
            <div className="space-y-2">
              {barData.map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[8px] text-white/35 w-14 text-right font-mono">{b.label}</span>
                  <div className="flex-1 h-4 bg-white/[0.03] rounded overflow-hidden">
                    <div className={`h-full ${b.color} rounded transition-all duration-1000`} style={{ width: `${b.value}%` }} />
                  </div>
                  <span className="text-[8px] text-white/40 w-8 font-mono">{b.value}%</span>
                </div>
              ))}
            </div>
          </div>
          {/* pie chart - Custos por Categoria */}
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3">
            <div className="text-[10px] font-semibold text-white/60 mb-1">Custos por Categoria</div>
            <div className="text-[8px] text-white/25 mb-3">Distribuição por tipo de serviço</div>
            <div className="flex items-center justify-center mb-3">
              <svg viewBox="0 0 100 100" className="w-24 h-24">
                <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="18" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#3893af" strokeWidth="18" strokeDasharray="95.5 155.5" strokeDashoffset="0" transform="rotate(-90 50 50)" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#f78504" strokeWidth="18" strokeDasharray="55.3 195.7" strokeDashoffset="-95.5" transform="rotate(-90 50 50)" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#a855f7" strokeWidth="18" strokeDasharray="37.7 213.3" strokeDashoffset="-150.8" transform="rotate(-90 50 50)" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="18" strokeDasharray="62.5 188.5" strokeDashoffset="-188.5" transform="rotate(-90 50 50)" />
              </svg>
            </div>
            <div className="grid grid-cols-2 gap-1">
              {[
                { label: "Compute", color: "bg-[#3893af]", pct: "38%" },
                { label: "Database", color: "bg-[#f78504]", pct: "22%" },
                { label: "Storage", color: "bg-purple-500", pct: "15%" },
                { label: "Outros", color: "bg-emerald-500", pct: "25%" },
              ].map((l, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${l.color}`} />
                  <span className="text-[8px] text-white/35">{l.label}</span>
                  <span className="text-[8px] text-white/50 font-mono ml-auto">{l.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "table" && (
        <>
          {/* filters */}
          <div className="flex gap-2 mb-3 flex-wrap">
            <div className="relative">
              <button onClick={() => { setShowAccountFilter(!showAccountFilter); setShowOrgFilter(false); }} className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] text-white/50 hover:bg-white/8 transition-colors">
                <Filter className="w-3 h-3" /> Conta: {filterAccount === "all" ? "Todas" : filterAccount.split(" (")[0]} <ChevronDown className="w-3 h-3" />
              </button>
              {showAccountFilter && (
                <div className="absolute top-full left-0 mt-1 bg-[#141d30] border border-white/10 rounded-lg overflow-hidden z-20 shadow-xl min-w-[140px]">
                  {accounts.map((a) => (
                    <div key={a} onClick={() => { setFilterAccount(a); setShowAccountFilter(false); }} className={`px-3 py-1.5 text-[10px] cursor-pointer transition-colors ${filterAccount === a ? "bg-[#3893af]/20 text-[#3893af]" : "text-white/40 hover:bg-white/5"}`}>
                      {a === "all" ? "Todas" : a}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => { setShowOrgFilter(!showOrgFilter); setShowAccountFilter(false); }} className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] text-white/50 hover:bg-white/8 transition-colors">
                Org: {filterOrg === "all" ? "Todas" : filterOrg} <ChevronDown className="w-3 h-3" />
              </button>
              {showOrgFilter && (
                <div className="absolute top-full left-0 mt-1 bg-[#141d30] border border-white/10 rounded-lg overflow-hidden z-20 shadow-xl min-w-[140px]">
                  {orgs.map((o) => (
                    <div key={o} onClick={() => { setFilterOrg(o); setShowOrgFilter(false); }} className={`px-3 py-1.5 text-[10px] cursor-pointer transition-colors ${filterOrg === o ? "bg-[#3893af]/20 text-[#3893af]" : "text-white/40 hover:bg-white/5"}`}>
                      {o === "all" ? "Todas" : o}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* table */}
          <div className="bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden">
            <div className="grid grid-cols-12 gap-2 px-3 py-2 border-b border-white/5 bg-white/[0.02]">
              <button onClick={() => toggleSort("month")} className="col-span-3 flex items-center gap-1 text-[8px] font-semibold text-white/35 uppercase tracking-wider hover:text-white/50">Período <ArrowUpDown className="w-2.5 h-2.5" /></button>
              <div className="col-span-3 text-[8px] font-semibold text-white/35 uppercase tracking-wider">Conta</div>
              <div className="col-span-3 text-[8px] font-semibold text-white/35 uppercase tracking-wider">Org</div>
              <button onClick={() => toggleSort("total")} className="col-span-2 flex items-center gap-1 text-[8px] font-semibold text-white/35 uppercase tracking-wider hover:text-white/50 justify-end">Total <ArrowUpDown className="w-2.5 h-2.5" /></button>
              <div className="col-span-1 text-[8px] font-semibold text-white/35 uppercase tracking-wider text-right">Var.</div>
            </div>
            <div className="max-h-[160px] overflow-y-auto">
              {filtered.map((inv, i) => (
                <div key={i} className="grid grid-cols-12 gap-2 px-3 py-2 border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors cursor-default">
                  <div className="col-span-3 text-[10px] text-white/50 font-mono">{inv.month}</div>
                  <div className="col-span-3 text-[10px] text-white/40">{inv.account}</div>
                  <div className="col-span-3 text-[10px] text-white/30">{inv.org}</div>
                  <div className="col-span-2 text-[10px] text-white/60 font-semibold text-right font-mono">R$ {inv.total.toLocaleString("pt-BR")}</div>
                  <div className={`col-span-1 text-[9px] font-mono text-right flex items-center justify-end gap-0.5 ${inv.change >= 0 ? "text-red-400/60" : "text-emerald-400/60"}`}>
                    {inv.change >= 0 ? <TrendingUp className="w-2.5 h-2.5" /> : <TrendingDown className="w-2.5 h-2.5" />}
                    {Math.abs(inv.change)}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="mt-3 text-center">
        <span className="text-[9px] text-white/20 inline-flex items-center gap-1"><MousePointerClick className="w-3 h-3" /> Alterne entre Gráficos e Tabela, filtre por conta ou organização</span>
      </div>
    </ConsoleShell>
  );
};

export default DemoBilling;
