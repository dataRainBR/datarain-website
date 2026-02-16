import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Shield, Server, Coins, ChevronLeft, ChevronRight } from 'lucide-react';

interface JourneyStep { id: string; icon: React.FC<{ className?: string; color?: string }>; title: string; narrative: string; before: string; after: string; highlight?: string; color: string; }

const steps: JourneyStep[] = [
  { id: 'client', icon: Heart, title: 'Dispositivos médicos', narrative: 'ENE Medical é spin-off da SPI, comercializando produtos médico-hospitalares de alta tecnologia. Cliente dataRain desde 2023.', before: 'Sem infraestrutura AWS e sem backup', after: 'Infraestrutura AWS completa com backup imutável', color: '#00838f' },
  { id: 'veeam', icon: Shield, title: 'Veeam + S3 imutável', narrative: 'Veeam Backup for AWS via CloudFormation. Bucket S3 com Object Lock (imutabilidade WORM) para proteção contra ransomware.', before: 'Sem backup e sem proteção contra ransomware', after: 'Veeam + S3 Object Lock (imutabilidade WORM)', color: '#dc2626' },
  { id: 'infra', icon: Server, title: 'Infraestrutura completa', narrative: 'EC2 para aplicação, RDS para banco de dados, VPC com Security Groups e IAM com políticas de menor privilégio.', before: 'Sem infraestrutura cloud', after: 'EC2 + RDS + VPC + IAM operacionais', color: '#7c3aed' },
  { id: 'finops', icon: Coins, title: 'Saving Plans 1 ano', narrative: 'Migração de On-Demand para Saving Plans de 1 ano com redução significativa nos custos mensais.', before: 'Instâncias On-Demand sem desconto', after: 'Saving Plans 1 ano com redução de custos', color: '#059669' },
];

export const ENEMedicalDemo: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const step = steps[activeStep]; const Icon = step.icon;
  const progressPct = ((activeStep + 1) / steps.length) * 100; const isLast = activeStep === steps.length - 1;
  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="relative rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-lg">
        <motion.div className="absolute inset-0 pointer-events-none" animate={{ background: `radial-gradient(ellipse 60% 40% at 50% 20%, ${step.color}08 0%, transparent 70%)` }} transition={{ duration: 0.8 }} />
        <div className="relative p-5 md:p-8 space-y-6">
          <div className="flex items-center gap-1">{steps.map((s, i) => { const StepIcon = s.icon; const done = i < activeStep; const active = i === activeStep; return (<React.Fragment key={s.id}><motion.button onClick={() => setActiveStep(i)} className="relative shrink-0" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} aria-label={s.title}><motion.div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300" animate={{ borderColor: active ? s.color : done ? '#10b981' : '#e2e8f0', backgroundColor: active ? `${s.color}12` : done ? 'rgba(16,185,129,0.08)' : 'white' }}>{done ? <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-emerald-500 text-xs font-bold">✓</motion.span> : <StepIcon className="w-4 h-4" color={active ? s.color : '#94a3b8'} />}</motion.div></motion.button>{i < steps.length - 1 && <div className="flex-1 h-0.5 rounded-full overflow-hidden bg-slate-200"><motion.div className="h-full bg-emerald-500" animate={{ width: done ? '100%' : '0%' }} transition={{ duration: 0.4 }} /></div>}</React.Fragment>); })}</div>
          <AnimatePresence mode="wait"><motion.div key={step.id} initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40 }} transition={{ duration: 0.4 }} className="space-y-5">
            <div className="flex items-start gap-4"><motion.div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shrink-0 border" style={{ borderColor: `${step.color}25`, backgroundColor: `${step.color}10` }}><Icon className="w-6 h-6" color={step.color} /></motion.div><div className="min-w-0"><div className="text-[10px] uppercase tracking-wider font-medium mb-1" style={{ color: step.color }}>Etapa {activeStep + 1} de {steps.length}</div><h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">{step.title}</h3><p className="text-sm text-slate-500 leading-relaxed">{step.narrative}</p></div></div>
            {step.highlight && <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="text-center py-3 rounded-xl border" style={{ borderColor: `${step.color}20`, background: `linear-gradient(135deg, ${step.color}06 0%, transparent 100%)` }}><span className="text-base md:text-lg font-bold" style={{ color: step.color }}>{step.highlight}</span></motion.div>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3"><motion.div initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="p-4 rounded-xl border border-red-200 bg-red-50"><div className="text-[10px] uppercase tracking-wider font-bold text-red-500 mb-2">Antes</div><p className="text-sm text-red-700/70">{step.before}</p></motion.div><motion.div initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="p-4 rounded-xl border border-emerald-200 bg-emerald-50"><div className="text-[10px] uppercase tracking-wider font-bold text-emerald-600 mb-2">Depois</div><p className="text-sm text-emerald-700/70">{step.after}</p></motion.div></div>
          </motion.div></AnimatePresence>
          <div className="flex items-center justify-between"><motion.button onClick={() => setActiveStep(prev => Math.max(0, prev - 1))} disabled={activeStep === 0} className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs border border-slate-200 text-slate-500 hover:text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><ChevronLeft className="w-3.5 h-3.5" /> Anterior</motion.button><motion.button onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))} disabled={isLast} className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs border border-slate-200 text-slate-500 hover:text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Próxima <ChevronRight className="w-3.5 h-3.5" /></motion.button></div>
          <div className="h-1 bg-slate-100 rounded-full overflow-hidden"><motion.div className="h-full rounded-full" style={{ backgroundColor: step.color }} animate={{ width: `${progressPct}%` }} transition={{ type: 'spring', stiffness: 200, damping: 25 }} /></div>
          {isLast && <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-4 rounded-xl bg-emerald-50 border border-emerald-200"><p className="text-sm text-emerald-700 font-medium">Veeam com S3 imutável e Saving Plans operacionais para ENE Medical.</p></motion.div>}
        </div>
      </div>
    </div>
  );
};
