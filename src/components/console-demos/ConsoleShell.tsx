import {
  LayoutDashboard, Wrench, Boxes, Receipt,
  FolderKanban, Users, Headphones, Settings,
  ChevronRight, Bell,
  LogOut, ChevronDown, Lock, Mail, Eye, EyeOff
} from "lucide-react";
import { useState } from "react";

const sidebarItems = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { id: "autofix", icon: Wrench, label: "AutoFix", parent: "Ferramentas" },
  { id: "selfservice", icon: Boxes, label: "Self-Service", parent: "Ferramentas" },
  { id: "billing", icon: Receipt, label: "Billing" },
  { id: "projetos", icon: FolderKanban, label: "Projetos" },
  { id: "profissionais", icon: Users, label: "Serviços Profissionais" },
  { id: "suporte", icon: Headphones, label: "Suporte Técnico" },
];

export interface ConsoleShellProps {
  activeId: string;
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  onNavigate?: (id: string) => void;
  user: string | null;
  onLogin: (email: string) => void;
  onLogout: () => void;
}

export function getInitials(email: string) {
  const name = email.split("@")[0];
  const parts = name.split(/[._-]/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

export function getDisplayName(email: string) {
  const name = email.split("@")[0];
  return name
    .split(/[._-]/)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

const ConsoleShell = ({ activeId, children, title, subtitle, onNavigate, user, onLogin, onLogout }: ConsoleShellProps) => {
  const [emailInput, setEmailInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setLoggingIn(true);
    setTimeout(() => {
      onLogin(emailInput.trim());
      setLoggingIn(false);
    }, 1200);
  };

  /* ── Login screen ── */
  if (!user) {
    return (
      <div className="relative w-full rounded-2xl bg-[#0b1120] border border-white/10 overflow-hidden shadow-2xl flex" style={{ minHeight: 520 }}>
        {/* Left — branding */}
        <div className="hidden sm:flex flex-1 flex-col items-center justify-center relative overflow-hidden">
          {/* Animated orbs */}
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#3893af]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#f78504]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#3893af]/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "0.8s" }} />

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#3893af]/20 animate-pulse"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${15 + Math.random() * 70}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h1v1H0V0zm20 0h1v1h-1V0zM0 20h1v1H0v-1zm20 0h1v1h-1v-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

          {/* Decorative rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/[0.03]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-white/[0.02]" />

          <div className="relative z-10 text-center px-8" style={{ animation: "fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) both" }}>
            <img src="https://s3.sa-east-1.amazonaws.com/datarain.marketing/Site/DR_LOGO_WHITE.png" alt="dataRain" className="w-44 mx-auto mb-6" style={{ animation: "fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both" }} />
            <h2 className="text-lg font-bold text-white mb-1.5" style={{ animation: "fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s both" }}>DataRain Console</h2>
            <p className="text-[11px] text-white/30 leading-relaxed max-w-[200px] mx-auto" style={{ animation: "fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both" }}>Plataforma de Gestão Inteligente</p>
            <div className="flex items-center justify-center gap-3 mt-6" style={{ animation: "fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.6s both" }}>
              <div className="w-8 h-[2px] rounded-full bg-white/10" />
              <div className="w-2 h-2 rounded-full bg-[#3893af]/60 animate-pulse" />
              <div className="w-8 h-[2px] rounded-full bg-white/10" />
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="flex-1 flex items-center justify-center bg-[#0d1528]/50 px-6 py-10 relative overflow-hidden">
          {/* Subtle orb on form side */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#3893af]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#f78504]/5 rounded-full blur-3xl" />

          <div className="w-full max-w-[240px]" style={{ animation: "fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s both" }}>
            {/* mobile logo */}
            <div className="sm:hidden text-center mb-8">
              <img src="https://s3.sa-east-1.amazonaws.com/datarain.marketing/Site/DR_LOGO_WHITE.png" alt="dataRain" className="w-32 mx-auto mb-3" />
            </div>
            <div className="text-center mb-8">
              <h3 className="text-base font-bold text-white mb-1">Bem-vindo</h3>
              <p className="text-[11px] text-white/30">Acesse sua conta</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div style={{ animation: "fadeSlideUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.5s both" }}>
                <label className="text-[10px] text-white/40 mb-1.5 block">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
                  <input type="email" required placeholder="seu@email.com" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-[11px] text-white placeholder:text-white/20 focus:outline-none focus:border-[#3893af]/50 focus:ring-1 focus:ring-[#3893af]/25 transition-all" />
                </div>
              </div>
              <div style={{ animation: "fadeSlideUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.6s both" }}>
                <label className="text-[10px] text-white/40 mb-1.5 block">Senha</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
                  <input type={showPassword ? "text" : "password"} placeholder="Sua senha" defaultValue="demo1234" className="w-full pl-9 pr-9 py-2.5 bg-white/5 border border-white/10 rounded-lg text-[11px] text-white placeholder:text-white/20 focus:outline-none focus:border-[#3893af]/50 focus:ring-1 focus:ring-[#3893af]/25 transition-all" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/40 transition-colors">
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <p className="text-[9px] text-white/15 mt-1.5">Solicite uma senha para acessar a plataforma</p>
              </div>
              <button type="submit" disabled={loggingIn} className="w-full py-2.5 bg-gradient-to-r from-[#f78504] to-[#f78504]/80 text-white text-[11px] font-semibold rounded-lg hover:from-[#f78504]/90 hover:to-[#f78504]/70 hover:shadow-lg hover:shadow-[#f78504]/20 transition-all disabled:opacity-60 flex items-center justify-center gap-2 mt-2" style={{ animation: "fadeSlideUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.7s both" }}>
                {loggingIn ? (<><div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Entrando...</>) : (<>Entrar <ChevronRight className="w-3.5 h-3.5" /></>)}
              </button>
            </form>
            <div className="mt-6 text-center" style={{ animation: "fadeSlideUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.8s both" }}>
              <span className="text-[9px] text-white/15">Use qualquer e-mail para acessar a demo</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const initials = getInitials(user);
  const displayName = getDisplayName(user);

  /* ── Logged-in shell ── */
  return (
    <div className="relative w-full rounded-2xl bg-[#0b1120] border border-white/10 overflow-hidden shadow-2xl flex" style={{ minHeight: 420 }}>
      {/* Sidebar */}
      <div className="w-44 bg-[#0d1528] border-r border-white/5 flex-shrink-0 flex flex-col hidden sm:flex">
        <div className="px-3 py-4 border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="text-sm font-bold text-white leading-tight">dataRain</div>
            <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold">Console</span>
          </div>
        </div>
        <nav className="flex-1 py-2 px-2 space-y-0.5 overflow-y-auto">
          {sidebarItems.map((item) => {
            const isActive = item.id === activeId;
            return (
              <div key={item.id} onClick={() => onNavigate?.(item.id)} className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-[10px] font-medium transition-all ${onNavigate ? "cursor-pointer" : "cursor-default"} ${isActive ? "bg-[#3893af]/20 text-[#3893af]" : "text-white/40 hover:text-white/60 hover:bg-white/5"}`}>
                <item.icon className={`w-3.5 h-3.5 ${isActive ? "text-[#3893af]" : ""}`} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </nav>
        <div className="px-2 py-3 border-t border-white/5 space-y-0.5">
          <div className="flex items-center gap-2 px-2.5 py-1.5 text-[10px] text-white/30 cursor-default hover:text-white/50 transition-colors">
            <Settings className="w-3.5 h-3.5" /><span>Configurações</span>
          </div>
          <div onClick={onLogout} className="flex items-center gap-2 px-2.5 py-1.5 text-[10px] text-white/30 cursor-default transition-colors">
            <LogOut className="w-3.5 h-3.5" /><span>Sair</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="h-11 bg-[#0d1528] border-b border-white/5 flex items-center justify-between px-4 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="sm:hidden text-[10px] font-bold text-white">dR Console</span>
            <div className="hidden sm:flex items-center gap-1 text-[10px] text-white/30">
              <span>Console</span><ChevronRight className="w-3 h-3" /><span className="text-white/60">{title}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Bell className="w-3.5 h-3.5 text-white/30 cursor-default" />
            <div className="flex items-center gap-1.5 cursor-default">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#3893af] to-[#f78504] flex items-center justify-center">
                <span className="text-[8px] font-bold text-white">{initials}</span>
              </div>
              <span className="text-[10px] text-white/50 hidden md:inline">{displayName}</span>
              <ChevronDown className="w-3 h-3 text-white/20" />
            </div>
          </div>
        </div>
        <div className="px-4 sm:px-5 pt-4 pb-3">
          <h2 className="text-sm font-bold text-white">{title}</h2>
          {subtitle && <p className="text-[10px] text-white/30 mt-0.5">{subtitle}</p>}
        </div>
        <div className="flex-1 px-4 sm:px-5 pb-4 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ConsoleShell;
