import React, { useState } from "react";
import ConsoleShell from "./ConsoleShell";
import {
  Search, Cloud, ShieldCheck, Brain, ChevronRight,
  Newspaper, Boxes, ClipboardCheck, Headphones,
  TrendingUp, Users, DollarSign, Receipt,
  MousePointerClick
} from "lucide-react";

const shortcuts = [
  { icon: Receipt, label: "Ver meus custos", color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { icon: Newspaper, label: "Informativos", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Boxes, label: "Self-Service", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: ClipboardCheck, label: "Well-Architected", color: "text-amber-400", bg: "bg-amber-500/10" },
];

const pillarData = [
  { icon: Cloud, label: "Cloud", color: "from-sky-500 to-blue-600", items: ["Migração e DR", "DevOps", "Assessment", "FinOps"] },
  { icon: ShieldCheck, label: "Cybersecurity", color: "from-rose-500 to-red-600", items: ["Landing Zone", "GaaS", "Assessment"] },
  { icon: Brain, label: "GenAI e Dados", color: "from-purple-500 to-violet-600", items: ["Eng. de Dados", "Pilot AI", "GenAI & ML"] },
];

const DemoDashboard = ({ onNavigate, user, onLogin, onLogout }: { onNavigate?: (id: string) => void; user: string | null; onLogin: (email: string) => void; onLogout: () => void }) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const suggestions = ["Billing", "AutoFix", "Projetos", "Suporte", "Self-Service", "Profissionais"];
  const filtered = searchValue ? suggestions.filter((s) => s.toLowerCase().includes(searchValue.toLowerCase())) : [];

  return (
    <ConsoleShell activeId="dashboard" title="Dashboard" subtitle="Visão geral do seu ambiente AWS" onNavigate={onNavigate} user={user} onLogin={onLogin} onLogout={onLogout}>
      {/* greeting */}
      <div className="mb-4">
        <h3 className="text-base font-bold text-white mb-0.5">Olá</h3>
        <p className="text-[10px] text-white/35">Bem-vindo ao seu painel de controle AWS</p>
      </div>

      {/* search */}
      <div className="relative mb-5">
        <div className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border transition-all duration-300 ${searchFocused ? "bg-white/10 border-[#3893af]/50 shadow-lg shadow-[#3893af]/10" : "bg-white/5 border-white/10"}`}>
          <Search className="w-3.5 h-3.5 text-white/30" />
          <input
            type="text"
            placeholder="Buscar módulo, serviço ou ação..."
            className="flex-1 bg-transparent text-[11px] text-white placeholder:text-white/25 outline-none"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
          />
        </div>
        {searchFocused && filtered.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-[#141d30] border border-white/10 rounded-xl overflow-hidden z-20 shadow-xl">
            {filtered.map((s, i) => (
              <div key={i} className="px-3 py-2 text-[11px] text-white/60 hover:bg-white/5 cursor-pointer flex items-center gap-2 transition-colors">
                <Search className="w-3 h-3 text-white/20" /> {s}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* metrics */}
      <div className="grid grid-cols-3 gap-2.5 mb-5">
        {[
          { label: "Clientes", value: "+200", icon: Users, color: "text-[#3893af]", bg: "bg-[#3893af]/10", border: "border-[#3893af]/20" },
          { label: "AWS Partner", value: "of the Year", icon: TrendingUp, color: "text-[#f78504]", bg: "bg-[#f78504]/10", border: "border-[#f78504]/20" },
          { label: "Gerenciados/mês", value: "R$ 50M+", icon: DollarSign, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
        ].map((m, i) => (
          <div key={i} className={`${m.bg} border ${m.border} rounded-xl p-3 hover:brightness-110 transition-all cursor-default`}>
            <div className={`w-6 h-6 rounded-lg ${m.bg} flex items-center justify-center mb-2`}>
              <m.icon className={`w-3.5 h-3.5 ${m.color}`} />
            </div>
            <div className={`text-sm font-bold ${m.color}`}>{m.value}</div>
            <div className="text-[9px] text-white/30">{m.label}</div>
          </div>
        ))}
      </div>

      {/* pillar flip cards */}
      <div className="grid grid-cols-3 gap-2.5 mb-5">
        {pillarData.map((p, i) => {
          const isFlipped = flippedCard === i;
          return (
            <div key={i} className="h-28 cursor-pointer [perspective:600px]" onClick={() => setFlippedCard(isFlipped ? null : i)}>
              <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}>
                <div className="absolute inset-0 [backface-visibility:hidden] bg-white/[0.03] border border-white/8 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-white/[0.06] transition-colors">
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center shadow-lg`}>
                    <p.icon className="w-4.5 h-4.5 text-white" />
                  </div>
                  <span className="text-[10px] font-semibold text-white/70">{p.label}</span>
                  <span className="text-[8px] text-white/25">Clique para ver →</span>
                </div>
                <div className={`absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br ${p.color} rounded-xl p-3 flex flex-col justify-center`}>
                  <span className="text-[9px] font-bold text-white/90 mb-2">{p.label}</span>
                  {p.items.map((item, j) => (
                    <div key={j} className="text-[8px] text-white/70 flex items-center gap-1.5 mb-0.5">
                      <div className="w-1 h-1 rounded-full bg-white/50" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* shortcuts */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {shortcuts.map((s, i) => (
          <div key={i} className={`${s.bg} border border-white/5 rounded-xl p-2.5 flex flex-col items-center gap-1.5 hover:brightness-125 transition-all cursor-pointer group`}>
            <s.icon className={`w-4 h-4 ${s.color} group-hover:scale-110 transition-transform`} />
            <span className="text-[8px] text-white/40 text-center leading-tight">{s.label}</span>
          </div>
        ))}
      </div>

      {/* support bar */}
      <div className="flex items-center justify-between bg-[#3893af]/10 border border-[#3893af]/20 rounded-xl px-3 py-2.5 cursor-pointer hover:bg-[#3893af]/15 transition-colors">
        <div className="flex items-center gap-2">
          <Headphones className="w-3.5 h-3.5 text-[#3893af]" />
          <span className="text-[10px] text-white/50">Suporte Técnico 24/7</span>
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
        </div>
        <ChevronRight className="w-3.5 h-3.5 text-white/20" />
      </div>

      {/* hint */}
      <div className="mt-4 text-center">
        <span className="text-[9px] text-white/20 inline-flex items-center gap-1"><MousePointerClick className="w-3 h-3" /> Interaja com a busca e clique nos cards dos pilares</span>
      </div>
    </ConsoleShell>
  );
};

export default DemoDashboard;
