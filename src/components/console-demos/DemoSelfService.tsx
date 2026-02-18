import { useState } from "react";
import ConsoleShell from "./ConsoleShell";
import {
  Rocket, Server, Cloud, Shield,
  DollarSign, Download, CheckCircle2, Play, MousePointerClick
} from "lucide-react";

const templates = [
  { id: "cicd", name: "CI/CD Pipeline", desc: "CodePipeline + CodeBuild + CodeDeploy", icon: Rocket, cost: "~R$ 85/mês", complexity: "Médio", color: "text-[#3893af]", bg: "bg-[#3893af]/10" },
  { id: "ecs", name: "ECS Fargate Cluster", desc: "Cluster containerizado serverless", icon: Server, cost: "~R$ 320/mês", complexity: "Alto", color: "text-purple-400", bg: "bg-purple-500/10" },
  { id: "serverless", name: "Serverless API", desc: "Lambda + API Gateway + DynamoDB", icon: Cloud, cost: "~R$ 45/mês", complexity: "Baixo", color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { id: "eks", name: "Kubernetes EKS", desc: "Cluster EKS gerenciado", icon: Server, cost: "~R$ 580/mês", complexity: "Alto", color: "text-[#f78504]", bg: "bg-[#f78504]/10" },
  { id: "budget", name: "Budget com Alertas", desc: "Alertas em 80%, 100% e 120%", icon: DollarSign, cost: "Grátis", complexity: "Baixo", color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { id: "security", name: "Security Baseline", desc: "GuardDuty + Config + CloudTrail", icon: Shield, cost: "~R$ 120/mês", complexity: "Médio", color: "text-rose-400", bg: "bg-rose-500/10" },
];

const complexityColor: Record<string, string> = {
  Baixo: "text-emerald-400 bg-emerald-500/15",
  Médio: "text-amber-400 bg-amber-500/15",
  Alto: "text-red-400 bg-red-500/15",
};

const DemoSelfService = ({ onNavigate, user, onLogin, onLogout }: { onNavigate?: (id: string) => void; user: string | null; onLogin: (email: string) => void; onLogout: () => void }) => {
  const [deploying, setDeploying] = useState(false);
  const [deployed, setDeployed] = useState<string[]>([]);
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const handleDeploy = (id: string) => {
    setSelected(id);
    setDeploying(true);
    setStep(1);
    setTimeout(() => setStep(2), 1000);
    setTimeout(() => setStep(3), 2000);
    setTimeout(() => {
      setDeployed((p) => [...p, id]);
      setDeploying(false);
      setStep(0);
      setSelected(null);
    }, 3000);
  };

  return (
    <ConsoleShell activeId="selfservice" title="Self-Service" subtitle="Deploy com CloudFormation" onNavigate={onNavigate} user={user} onLogin={onLogin} onLogout={onLogout}>
      {/* deploy progress */}
      {deploying && selected && (
        <div className="mb-4 bg-[#3893af]/10 border border-[#3893af]/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 border-2 border-[#3893af] border-t-transparent rounded-full animate-spin" />
            <span className="text-[11px] font-semibold text-[#3893af]">Deploying {templates.find((t) => t.id === selected)?.name}...</span>
          </div>
          <div className="space-y-2">
            {["Validando template...", "Criando stack...", "Provisionando recursos..."].map((label, i) => (
              <div key={i} className="flex items-center gap-2">
                {step > i ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : step === i ? <div className="w-3.5 h-3.5 border border-[#3893af] border-t-transparent rounded-full animate-spin" /> : <div className="w-3.5 h-3.5 rounded-full border border-white/10" />}
                <span className={`text-[10px] ${step >= i ? "text-white/50" : "text-white/15"}`}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* templates */}
      <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
        {templates.map((t) => {
          const isDeployed = deployed.includes(t.id);
          return (
            <div key={t.id} className={`border rounded-xl p-3 transition-all duration-300 ${isDeployed ? "border-emerald-500/20 bg-emerald-500/5" : "border-white/5 bg-white/[0.02] hover:border-white/10"}`}>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl ${t.bg} flex items-center justify-center flex-shrink-0`}>
                  <t.icon className={`w-4 h-4 ${t.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-white/80">{t.name}</span>
                    {isDeployed && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                  </div>
                  <p className="text-[9px] text-white/30">{t.desc}</p>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="text-[9px] text-emerald-400/60 font-mono">{t.cost}</span>
                    <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-medium ${complexityColor[t.complexity]}`}>{t.complexity}</span>
                  </div>
                </div>
                <div className="flex gap-1.5 flex-shrink-0">
                  <button className="p-1.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors" title="Download YAML">
                    <Download className="w-3 h-3 text-white/30" />
                  </button>
                  {!isDeployed ? (
                    <button data-demo-action={t.id === "cicd" ? "deploy-cicd" : undefined} onClick={() => handleDeploy(t.id)} disabled={deploying} className="flex items-center gap-1 px-2.5 py-1.5 bg-[#f78504]/15 border border-[#f78504]/25 rounded-lg text-[9px] text-[#f78504] font-medium hover:bg-[#f78504]/25 transition-all disabled:opacity-30">
                      <Play className="w-2.5 h-2.5" /> Deploy
                    </button>
                  ) : (
                    <span className="flex items-center gap-1 px-2.5 py-1.5 text-[9px] text-emerald-400/50">Deployed ✓</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 text-center">
        <span className="text-[9px] text-white/20 inline-flex items-center gap-1"><MousePointerClick className="w-3 h-3" /> Clique em "Deploy" para simular o provisionamento</span>
      </div>
    </ConsoleShell>
  );
};

export default DemoSelfService;
