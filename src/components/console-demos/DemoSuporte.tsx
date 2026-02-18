import { useState } from "react";
import ConsoleShell from "./ConsoleShell";
import {
  Plus, Brain, Send, CheckCircle2, Clock,
  AlertCircle, MessageSquare, ChevronDown,
  ChevronRight, User, MousePointerClick
} from "lucide-react";

type TicketStatus = "aberto" | "em_andamento" | "resolvido";

interface Ticket {
  id: string;
  title: string;
  category: string;
  priority: "alta" | "média" | "baixa";
  status: TicketStatus;
  messages: { from: "user" | "agent" | "ai"; text: string; time: string }[];
}

const initialTickets: Ticket[] = [
  {
    id: "SUP-001", title: "Erro no deploy ECS Fargate", category: "DevOps", priority: "alta", status: "aberto",
    messages: [{ from: "user", text: "O deploy do serviço api-gateway está falhando com erro de health check timeout.", time: "14:32" }],
  },
  {
    id: "SUP-002", title: "Permissão IAM insuficiente", category: "Segurança", priority: "média", status: "em_andamento",
    messages: [
      { from: "user", text: "Usuário dev-team não consegue acessar o bucket s3://data-lake-prod.", time: "10:15" },
      { from: "agent", text: "Verificamos que a policy não inclui s3:GetObject. Vamos ajustar.", time: "10:28" },
    ],
  },
  {
    id: "SUP-003", title: "Custo S3 elevado inesperado", category: "FinOps", priority: "baixa", status: "resolvido",
    messages: [
      { from: "user", text: "O custo do S3 subiu 40% este mês sem mudança aparente.", time: "09:00" },
      { from: "ai", text: "Análise IA: Detectado aumento de 340% em requests PUT no bucket logs-archive. Recomendo lifecycle policy para Glacier após 30 dias.", time: "09:01" },
      { from: "agent", text: "Lifecycle policy configurada. Economia estimada: R$ 1.200/mês.", time: "11:45" },
    ],
  },
];

const statusConfig: Record<TicketStatus, { label: string; color: string; bg: string; icon: typeof Clock }> = {
  aberto: { label: "Aberto", color: "text-red-400", bg: "bg-red-500/15", icon: AlertCircle },
  em_andamento: { label: "Em andamento", color: "text-amber-400", bg: "bg-amber-500/15", icon: Clock },
  resolvido: { label: "Resolvido", color: "text-emerald-400", bg: "bg-emerald-500/15", icon: CheckCircle2 },
};

const priorityColor = { alta: "text-red-400 bg-red-500/15", média: "text-amber-400 bg-amber-500/15", baixa: "text-blue-400 bg-blue-500/15" };

const DemoSuporte = ({ onNavigate, user, onLogin, onLogout }: { onNavigate?: (id: string) => void; user: string | null; onLogin: (email: string) => void; onLogout: () => void }) => {
  const [tickets, setTickets] = useState(initialTickets);
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [showFilter, setShowFilter] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [aiTyping, setAiTyping] = useState(false);
  const [creating, setCreating] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const filtered = filterStatus === "all" ? tickets : tickets.filter((t) => t.status === filterStatus);
  const activeTicket = tickets.find((t) => t.id === selectedTicket);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedTicket) return;
    const msg = newMessage;
    setNewMessage("");
    setTickets((prev) => prev.map((t) => t.id === selectedTicket ? { ...t, messages: [...t.messages, { from: "user" as const, text: msg, time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) }] } : t));
    setAiTyping(true);
    setTimeout(() => {
      setTickets((prev) => prev.map((t) => t.id === selectedTicket ? { ...t, messages: [...t.messages, { from: "user" as const, text: msg, time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) }, { from: "ai" as const, text: "Análise IA: Baseado no contexto, recomendo verificar os logs do CloudWatch no log group /ecs/api-gateway dos últimos 30 minutos.", time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) }] } : t));
      setAiTyping(false);
    }, 2000);
  };

  const handleCreateTicket = () => {
    if (!newTitle.trim()) return;
    const newTicket: Ticket = { id: `SUP-00${tickets.length + 1}`, title: newTitle, category: "Geral", priority: "média", status: "aberto", messages: [] };
    setTickets((prev) => [newTicket, ...prev]);
    setNewTitle("");
    setCreating(false);
    setSelectedTicket(newTicket.id);
    setAiTyping(true);
    setTimeout(() => {
      setTickets((prev) => prev.map((t) => t.id === newTicket.id ? { ...t, messages: [{ from: "ai" as const, text: `Análise IA: Chamado "${newTitle}" recebido. Classificado como prioridade média. Um especialista será notificado.`, time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) }] } : t));
      setAiTyping(false);
    }, 1500);
  };

  return (
    <ConsoleShell activeId="suporte" title="Suporte Técnico" subtitle="Chamados e atendimento 24/7" onNavigate={onNavigate} user={user} onLogin={onLogin} onLogout={onLogout}>
      {selectedTicket && activeTicket ? (
        <div>
          <button onClick={() => setSelectedTicket(null)} className="flex items-center gap-1 text-[10px] text-white/35 hover:text-white/50 mb-3 transition-colors">← Voltar</button>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] text-white/25 font-mono">{activeTicket.id}</span>
            <span className="text-[11px] font-semibold text-white/80">{activeTicket.title}</span>
          </div>
          <div className="space-y-2 max-h-[200px] overflow-y-auto pr-1 mb-3">
            {activeTicket.messages.map((m, i) => (
              <div key={i} className={`flex gap-2 ${m.from === "user" ? "justify-end" : ""}`}>
                {m.from !== "user" && (
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${m.from === "ai" ? "bg-purple-500/20" : "bg-[#3893af]/20"}`}>
                    {m.from === "ai" ? <Brain className="w-3 h-3 text-purple-400" /> : <User className="w-3 h-3 text-[#3893af]" />}
                  </div>
                )}
                <div className={`max-w-[80%] rounded-xl px-3 py-2 ${m.from === "user" ? "bg-[#3893af]/15 border border-[#3893af]/20" : m.from === "ai" ? "bg-purple-500/10 border border-purple-500/15" : "bg-white/5 border border-white/5"}`}>
                  <p className="text-[10px] text-white/50 leading-relaxed">{m.text}</p>
                  <span className="text-[8px] text-white/15 mt-1 block">{m.time}</span>
                </div>
              </div>
            ))}
            {aiTyping && (
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0"><Brain className="w-3 h-3 text-purple-400" /></div>
                <div className="bg-purple-500/10 border border-purple-500/15 rounded-xl px-3 py-2">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((d) => <div key={d} className="w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-bounce" style={{ animationDelay: `${d * 0.1}s` }} />)}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <input type="text" placeholder="Digite sua mensagem..." className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] text-white placeholder:text-white/20 outline-none focus:border-[#3893af]/30 transition-colors" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSendMessage()} />
            <button onClick={handleSendMessage} className="px-3 py-2 bg-[#f78504]/15 border border-[#f78504]/25 rounded-xl hover:bg-[#f78504]/25 transition-colors"><Send className="w-3.5 h-3.5 text-[#f78504]" /></button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="relative">
              <button onClick={() => setShowFilter(!showFilter)} className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] text-white/50 hover:bg-white/8 transition-colors">
                Status: {filterStatus === "all" ? "Todos" : statusConfig[filterStatus as TicketStatus]?.label} <ChevronDown className="w-3 h-3" />
              </button>
              {showFilter && (
                <div className="absolute top-full left-0 mt-1 bg-[#141d30] border border-white/10 rounded-lg overflow-hidden z-20 shadow-xl min-w-[120px]">
                  {["all", "aberto", "em_andamento", "resolvido"].map((s) => (
                    <div key={s} onClick={() => { setFilterStatus(s); setShowFilter(false); }} className={`px-3 py-1.5 text-[10px] cursor-pointer transition-colors ${filterStatus === s ? "bg-[#3893af]/20 text-[#3893af]" : "text-white/40 hover:bg-white/5"}`}>
                      {s === "all" ? "Todos" : statusConfig[s as TicketStatus].label}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button data-demo-action="new-ticket" onClick={() => setCreating(true)} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f78504]/15 border border-[#f78504]/25 rounded-lg text-[10px] text-[#f78504] font-medium hover:bg-[#f78504]/25 transition-colors">
              <Plus className="w-3 h-3" /> Novo Ticket
            </button>
          </div>

          {creating && (
            <div className="mb-3 bg-[#3893af]/10 border border-[#3893af]/20 rounded-xl p-3">
              <input type="text" placeholder="Título do chamado..." className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] text-white placeholder:text-white/20 outline-none focus:border-[#3893af]/30 mb-2 transition-colors" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleCreateTicket()} autoFocus />
              <div className="flex gap-2">
                <button onClick={handleCreateTicket} disabled={!newTitle.trim()} className="flex-1 px-3 py-1.5 bg-[#f78504]/15 border border-[#f78504]/25 rounded-lg text-[10px] text-[#f78504] font-medium hover:bg-[#f78504]/25 transition-all disabled:opacity-30">Criar Ticket</button>
                <button onClick={() => setCreating(false)} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] text-white/35 hover:bg-white/10 transition-colors">Cancelar</button>
              </div>
            </div>
          )}

          <div className="space-y-2 max-h-[240px] overflow-y-auto pr-1">
            {filtered.map((t) => {
              const st = statusConfig[t.status];
              const StIcon = st.icon;
              return (
                <div key={t.id} onClick={() => setSelectedTicket(t.id)} className="border border-white/5 bg-white/[0.02] rounded-xl p-3 hover:border-white/10 transition-all cursor-pointer group">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[9px] text-white/20 font-mono">{t.id}</span>
                    <span className="text-[11px] font-semibold text-white/80 flex-1">{t.title}</span>
                    <ChevronRight className="w-3 h-3 text-white/15 group-hover:text-white/30 transition-colors" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-medium ${st.bg} ${st.color} flex items-center gap-1`}><StIcon className="w-2.5 h-2.5" /> {st.label}</span>
                    <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-medium ${priorityColor[t.priority]}`}>{t.priority}</span>
                    <span className="text-[8px] text-white/15">{t.category}</span>
                    <span className="text-[8px] text-white/15 flex items-center gap-0.5 ml-auto"><MessageSquare className="w-2.5 h-2.5" /> {t.messages.length}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-3 text-center">
        <span className="text-[9px] text-white/20 inline-flex items-center gap-1"><MousePointerClick className="w-3 h-3" /> Crie tickets, abra conversas e veja a IA analisar automaticamente</span>
      </div>
    </ConsoleShell>
  );
};

export default DemoSuporte;
