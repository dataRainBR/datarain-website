import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, Container, Database, Shield, Network, Activity,
  ChevronLeft, ChevronRight,
} from 'lucide-react';

interface JourneyStep {
  id: string;
  icon: React.FC<{ className?: string; color?: string }>;
  title: string;
  narrative: string;
  before: string;
  after: string;
  highlight?: string;
  color: string;
}

const steps: JourneyStep[] = [
  {
    id: 'client',
    icon: Building2,
    title: 'Rede nacional de diagnóstico',
    narrative: 'O Grupo Sabin é uma das maiores redes de medicina diagnóstica do Brasil, com operações em escala nacional abrangendo análises clínicas, diagnóstico por imagem e serviços de saúde.',
    before: 'Infraestrutura fragmentada sem governança centralizada para múltiplas frentes',
    after: 'Arquitetura multi-account com 8+ contas AWS segregadas por função',
    color: '#0891b2',
  },
  {
    id: 'devops',
    icon: Container,
    title: 'DevOps com EKS e CI/CD',
    narrative: 'Amazon EKS com ECR para orquestração de containers e AWS CodePipeline para CI/CD automatizado do e-commerce, garantindo deploys contínuos e seguros.',
    before: 'Deploys manuais sem pipeline automatizado para plataformas digitais',
    after: 'EKS + CodePipeline com CI/CD automatizado para e-commerce',
    highlight: 'Containers orquestrados com deploy contínuo',
    color: '#7c3aed',
  },
  {
    id: 'datalake',
    icon: Database,
    title: 'Data Lake com Airflow e Redshift',
    narrative: 'Pipeline completo de dados: Apache Airflow para orquestração, Amazon Redshift para data warehouse, Glue e Athena para ETL, e API de alta performance em EC2 c5.9xlarge com 36 vCPUs.',
    before: 'Dados isolados em silos sem pipeline de analytics integrado',
    after: 'Data Lake completo: Airflow → S3 → Redshift → API de alta performance',
    highlight: 'API com 36 vCPUs para consultas analíticas',
    color: '#2563eb',
  },
  {
    id: 'security',
    icon: Shield,
    title: 'LGPD e DNSSEC',
    narrative: 'Compliance LGPD implementado com checklist de privacidade e segurança. DNSSEC configurado para proteção de múltiplos domínios. AD Connector para autenticação corporativa unificada.',
    before: 'Sem compliance LGPD estruturado e domínios sem proteção DNSSEC',
    after: 'LGPD atendido, DNSSEC ativo e autenticação AD integrada',
    color: '#dc2626',
  },
  {
    id: 'network',
    icon: Network,
    title: 'Multi-account e conectividade',
    narrative: 'AWS Organizations com 8+ contas segregadas. VPN Site-to-Site para conectividade com data centers. Backup multi-account e multi-região para continuidade de negócio.',
    before: 'Contas AWS sem segregação e backup centralizado',
    after: '8+ contas Organizations com backup multi-account e multi-região',
    color: '#059669',
  },
  {
    id: 'results',
    icon: Activity,
    title: 'Operação multi-região 24x7',
    narrative: 'Monitoramento 24x7 com CloudWatch, operação em multi-região (sa-east-1 e us-east-1), e todas as frentes — DevOps, Data Lake, Diagnóstica, Backup — integradas em uma arquitetura coesa.',
    before: 'Operação sem monitoramento centralizado e visibilidade limitada',
    after: 'Monitoramento 24x7 multi-região com todas as frentes integradas',
    color: '#d97706',
  },
];

export const SabinDemo: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const step = steps[activeStep];
  const Icon = step.icon;
  const progressPct = ((activeStep + 1) / steps.length) * 100;
  const isLast = activeStep === steps.length - 1;

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="relative rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-lg">
        <motion.div className="absolute inset-0 pointer-events-none" animate={{ background: `radial-gradient(ellipse 60% 40% at 50% 20%, ${step.color}08 0%, transparent 70%)` }} transition={{ duration: 0.8 }} />
        <div className="relative p-5 md:p-8 space-y-6">
          <div className="flex items-center gap-1">
            {steps.map((s, i) => { const StepIcon = s.icon; const done = i < activeStep; const active = i === activeStep; return (
              <React.Fragment key={s.id}>
                <motion.button onClick={() => setActiveStep(i)} className="relative shrink-0" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} aria-label={s.title}>
                  <motion.div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300" animate={{ borderColor: active ? s.color : done ? '#10b981' : '#e2e8f0', backgroundColor: active ? `${s.color}12` : done ? 'rgba(16,185,129,0.08)' : 'white' }}>
                    {done ? <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-emerald-500 text-xs font-bold">✓</motion.span> : <StepIcon className="w-4 h-4" color={active ? s.color : '#94a3b8'} />}
                  </motion.div>
                </motion.button>
                {i < steps.length - 1 && <div className="flex-1 h-0.5 rounded-full overflow-hidden bg-slate-200"><motion.div className="h-full bg-emerald-500" animate={{ width: done ? '100%' : '0%' }} transition={{ duration: 0.4 }} /></div>}
              </React.Fragment>
            ); })}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={step.id} initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40 }} transition={{ duration: 0.4, ease: "easeOut" }} className="space-y-5">
              <div className="flex items-start gap-4">
                <motion.div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shrink-0 border" style={{ borderColor: `${step.color}25`, backgroundColor: `${step.color}10` }} animate={{ boxShadow: [`0 0 10px ${step.color}10`, `0 0 20px ${step.color}18`, `0 0 10px ${step.color}10`] }} transition={{ duration: 2, repeat: Infinity }}>
                  <Icon className="w-6 h-6" color={step.color} />
                </motion.div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-wider font-medium mb-1" style={{ color: step.color }}>Etapa {activeStep + 1} de {steps.length}</div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.narrative}</p>
                </div>
              </div>
              {step.highlight && <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="text-center py-3 rounded-xl border" style={{ borderColor: `${step.color}20`, background: `linear-gradient(135deg, ${step.color}06 0%, transparent 100%)` }}><span className="text-base md:text-lg font-bold" style={{ color: step.color }}>{step.highlight}</span></motion.div>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <motion.div initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="p-4 rounded-xl border border-red-200 bg-red-50"><div className="text-[10px] uppercase tracking-wider font-bold text-red-500 mb-2">Antes</div><p className="text-sm text-red-700/70 leading-relaxed">{step.before}</p></motion.div>
                <motion.div initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="p-4 rounded-xl border border-emerald-200 bg-emerald-50"><div className="text-[10px] uppercase tracking-wider font-bold text-emerald-600 mb-2">Depois</div><p className="text-sm text-emerald-700/70 leading-relaxed">{step.after}</p></motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-between">
            <motion.button onClick={() => setActiveStep(prev => Math.max(0, prev - 1))} disabled={activeStep === 0} className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs border border-slate-200 text-slate-500 hover:text-slate-700 hover:border-slate-300 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><ChevronLeft className="w-3.5 h-3.5" /> Anterior</motion.button>
            <motion.button onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))} disabled={isLast} className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs border border-slate-200 text-slate-500 hover:text-slate-700 hover:border-slate-300 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Próxima <ChevronRight className="w-3.5 h-3.5" /></motion.button>
          </div>
          <div className="h-1 bg-slate-100 rounded-full overflow-hidden"><motion.div className="h-full rounded-full" style={{ backgroundColor: step.color }} animate={{ width: `${progressPct}%` }} transition={{ type: 'spring', stiffness: 200, damping: 25 }} /></div>
          {isLast && <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-4 rounded-xl bg-emerald-50 border border-emerald-200"><p className="text-sm text-emerald-700 font-medium">Grupo Sabin opera com arquitetura multi-account, Data Lake e DevOps integrados na AWS.</p></motion.div>}
        </div>
      </div>
    </div>
  );
};
