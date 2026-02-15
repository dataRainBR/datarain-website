import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, TrendingUp, Cloud, Shield, Gauge, Rocket,
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
    id: 'challenge',
    icon: Building2,
    title: 'Pandemia derruba o website',
    narrative: 'Com a quarentena, os acessos ao site da IPDA dobraram de 150K para 310K/mês. A infraestrutura anterior não suportou o aumento, causando indisponibilidade.',
    before: 'Website indisponível com 310K acessos mensais durante a pandemia',
    after: 'Infraestrutura AWS escalável preparada para picos de tráfego',
    color: '#dc2626',
  },
  {
    id: 'scaling',
    icon: TrendingUp,
    title: 'Auto Scaling para picos de tráfego',
    narrative: 'Amazon Auto Scaling permite que a IPDA ajuste recursos automaticamente conforme a demanda. EC2 escala horizontalmente em picos de tráfego.',
    before: 'Recursos fixos que não acompanhavam variações de demanda',
    after: 'Auto Scaling automático com EC2 dimensionando conforme o tráfego',
    highlight: 'Escalabilidade automática',
    color: '#2563eb',
  },
  {
    id: 'cdn',
    icon: Cloud,
    title: '500% mais velocidade com CloudFront',
    narrative: 'Amazon CloudFront como CDN acelerou o carregamento das páginas em 500%. Conteúdo entregue com geolocalização e conexões HTTPS seguras.',
    before: 'Carregamento lento sem CDN — experiência ruim para os fiéis',
    after: 'CloudFront com 500% de aumento na velocidade de carregamento',
    highlight: '500% mais rápido',
    color: '#7c3aed',
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Segurança reforçada',
    narrative: 'Bloqueio de 2x mais tráfego malicioso que o ambiente anterior. ElastiCache alivia a carga nos bancos de dados e melhora o desempenho.',
    before: 'Segurança básica com vulnerabilidades a ataques',
    after: '2x mais bloqueio de tráfego malicioso + ElastiCache para performance',
    color: '#d97706',
  },
  {
    id: 'availability',
    icon: Gauge,
    title: '99,99% de disponibilidade',
    narrative: 'Com RDS, CloudWatch, ElastiCache e Auto Scaling, o site alcançou 99,99% de disponibilidade. O evento de aniversário virtual teve performance recorde.',
    before: 'Indisponibilidade frequente em momentos de alta demanda',
    after: '99,99% de disponibilidade — performance recorde no evento de aniversário',
    highlight: '99,99% uptime',
    color: '#0d9488',
  },
  {
    id: 'results',
    icon: Rocket,
    title: 'Pagamento sob demanda para ONG',
    narrative: 'Como organização sem fins lucrativos, o modelo pay-as-you-go da AWS foi ideal. Decisões sobre períodos sazonais ficaram mais fáceis e econômicas.',
    before: 'Recursos financeiros limitados com custos fixos de infraestrutura',
    after: 'Modelo pay-as-you-go ideal para organização sem fins lucrativos',
    color: '#059669',
  },
];

export const IPDADemo: React.FC = () => {
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
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-700">Jornada da IPDA — Website de Alta Performance na AWS</span>
            <span className="text-[10px] text-slate-400">{activeStep + 1} / {steps.length}</span>
          </div>
          <div className="flex items-center gap-1">
            {steps.map((s, i) => {
              const StepIcon = s.icon;
              const done = i < activeStep;
              const active = i === activeStep;
              return (
                <React.Fragment key={s.id}>
                  <motion.button onClick={() => setActiveStep(i)} className="relative shrink-0" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} aria-label={s.title}>
                    <motion.div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300" animate={{ borderColor: active ? s.color : done ? '#10b981' : '#e2e8f0', backgroundColor: active ? `${s.color}12` : done ? 'rgba(16,185,129,0.08)' : 'white' }}>
                      {done ? <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-emerald-500 text-xs font-bold">✓</motion.span> : <StepIcon className="w-4 h-4" color={active ? s.color : '#94a3b8'} />}
                    </motion.div>
                    {active && <motion.div className="absolute inset-0 rounded-full border-2" style={{ borderColor: `${s.color}25` }} animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />}
                  </motion.button>
                  {i < steps.length - 1 && <div className="flex-1 h-0.5 rounded-full overflow-hidden bg-slate-200"><motion.div className="h-full bg-emerald-500" animate={{ width: done ? '100%' : '0%' }} transition={{ duration: 0.4 }} /></div>}
                </React.Fragment>
              );
            })}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={step.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="space-y-5">
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
              {step.highlight && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="text-center py-3 rounded-xl border" style={{ borderColor: `${step.color}20`, background: `linear-gradient(135deg, ${step.color}06 0%, transparent 100%)` }}>
                  <span className="text-base md:text-lg font-bold" style={{ color: step.color }}>{step.highlight}</span>
                </motion.div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <motion.div initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="p-4 rounded-xl border border-red-200 bg-red-50">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-red-500 mb-2">Sem a transformação</div>
                  <p className="text-sm text-red-700/70 leading-relaxed">{step.before}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="p-4 rounded-xl border border-emerald-200 bg-emerald-50">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-emerald-600 mb-2">Com a dataRain</div>
                  <p className="text-sm text-emerald-700/70 leading-relaxed">{step.after}</p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-between">
            <motion.button onClick={() => setActiveStep(prev => Math.max(0, prev - 1))} disabled={activeStep === 0} className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs border border-slate-200 text-slate-500 hover:text-slate-700 hover:border-slate-300 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ChevronLeft className="w-3.5 h-3.5" /> Anterior
            </motion.button>
            <motion.button onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))} disabled={isLast} className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs border border-slate-200 text-slate-500 hover:text-slate-700 hover:border-slate-300 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Próxima <ChevronRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>
          <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full" style={{ backgroundColor: step.color }} animate={{ width: `${progressPct}%` }} transition={{ type: 'spring', stiffness: 200, damping: 25 }} />
          </div>
          {isLast && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <p className="text-sm text-emerald-700 font-medium">A dataRain garantiu 99,99% de disponibilidade e 500% mais velocidade para a IPDA.</p>
              <p className="text-xs text-slate-500 mt-1">De indisponibilidade na pandemia a performance recorde no aniversário.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
