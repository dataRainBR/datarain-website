import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wallet, AlertCircle, Search, BarChart3, Siren, ShieldCheck,
  ChevronLeft, ChevronRight,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════════════ */

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
    id: 'scale',
    icon: Wallet,
    title: '12 milhões de clientes, zero visibilidade',
    narrative: 'O Bitz, carteira digital do Bradesco, atende 12 milhões de clientes com pagamentos via QR Code, transferências e cartão de débito. Mas a plataforma de microserviços cresceu sem uma camada de observabilidade adequada.',
    before: 'Plataforma de pagamentos sem monitoramento integrado dos microserviços',
    after: 'Observabilidade completa cobrindo APIs, bancos de dados, containers e dependências',
    color: '#d97706',
  },
  {
    id: 'blind',
    icon: AlertCircle,
    title: 'Problemas descobertos tarde demais',
    narrative: 'Erros e comportamentos anômalos nos microserviços só eram identificados em análises post-mortem — depois que o cliente já tinha sido impactado. Sem rastreamento, encontrar a causa raiz era um trabalho manual e demorado.',
    before: 'Incidentes descobertos apenas em post-mortem — cliente já impactado',
    after: 'Detecção preditiva de anomalias antes que afetem o serviço',
    color: '#dc2626',
  },
  {
    id: 'tracing',
    icon: Search,
    title: 'Rastreando cada microserviço',
    narrative: 'A dataRain implementou uma solução de observabilidade integrada à plataforma de pagamentos na AWS. Cada chamada entre APIs, bancos de dados e containers passou a ser rastreada e correlacionada.',
    before: 'Microserviços e dependências de terceiros sem rastreamento — pontos cegos por toda parte',
    after: 'Rastreamento contínuo de todas as dependências entre serviços internos e externos',
    color: '#2563eb',
  },
  {
    id: 'dashboards',
    icon: BarChart3,
    title: 'Dashboards técnicos e de negócio',
    narrative: 'Dashboards em tempo real foram criados para times técnicos e de negócio. A equipe de engenharia vê a saúde dos serviços; a liderança vê o impacto nas métricas de qualidade do produto.',
    before: 'Sem visibilidade em tempo real — decisões baseadas em relatórios atrasados',
    after: 'Dashboards técnicos e de negócio com visão em tempo real da plataforma',
    color: '#7c3aed',
  },
  {
    id: 'proactive',
    icon: Siren,
    title: 'Alarmes antes do impacto',
    narrative: 'Alarmes proativos passaram a identificar comportamentos anômalos antes que virem incidentes. O tempo para identificar (MTTI) e resolver (MTTR) problemas caiu drasticamente.',
    before: 'Reação tardia — MTTI e MTTR altos, impacto direto na experiência do cliente',
    after: 'Alarmes proativos reduzem MTTI e MTTR significativamente',
    highlight: 'MTTI e MTTR reduzidos drasticamente',
    color: '#0d9488',
  },
  {
    id: 'correlation',
    icon: ShieldCheck,
    title: '95% de precisão causa-efeito',
    narrative: 'A plataforma de observabilidade estabeleceu uma correlação superior a 95% entre causa e efeito dos incidentes. O Bitz agora se antecipa a problemas que antes impactavam milhões de clientes.',
    before: 'Correlação manual entre causa e efeito — lenta, imprecisa, incompleta',
    after: 'Correlação automática com mais de 95% de precisão — ação antes do impacto',
    highlight: '+95% correlação causa-efeito',
    color: '#059669',
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export const ObservabilidadeBitzDemo: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const step = steps[activeStep];
  const Icon = step.icon;
  const progressPct = ((activeStep + 1) / steps.length) * 100;
  const isLast = activeStep === steps.length - 1;

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="relative rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-lg">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ background: `radial-gradient(ellipse 60% 40% at 50% 20%, ${step.color}08 0%, transparent 70%)` }}
          transition={{ duration: 0.8 }}
        />

        <div className="relative p-5 md:p-8 space-y-6">

          <div className="flex items-center gap-1">
            {steps.map((s, i) => {
              const StepIcon = s.icon;
              const done = i < activeStep;
              const active = i === activeStep;
              return (
                <React.Fragment key={s.id}>
                  <motion.button
                    onClick={() => setActiveStep(i)}
                    className="relative shrink-0"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={s.title}
                  >
                    <motion.div
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300"
                      animate={{
                        borderColor: active ? s.color : done ? '#10b981' : '#e2e8f0',
                        backgroundColor: active ? `${s.color}12` : done ? 'rgba(16,185,129,0.08)' : 'white',
                      }}
                    >
                      {done ? (
                        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-emerald-500 text-xs font-bold">✓</motion.span>
                      ) : (
                        <StepIcon className="w-4 h-4" color={active ? s.color : '#94a3b8'} />
                      )}
                    </motion.div>
                    {active && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2"
                        style={{ borderColor: `${s.color}25` }}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.button>
                  {i < steps.length - 1 && (
                    <div className="flex-1 h-0.5 rounded-full overflow-hidden bg-slate-200">
                      <motion.div className="h-full bg-emerald-500" animate={{ width: done ? '100%' : '0%' }} transition={{ duration: 0.4 }} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="space-y-5"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shrink-0 border"
                  style={{ borderColor: `${step.color}25`, backgroundColor: `${step.color}10` }}
                  animate={{ boxShadow: [`0 0 10px ${step.color}10`, `0 0 20px ${step.color}18`, `0 0 10px ${step.color}10`] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Icon className="w-6 h-6" color={step.color} />
                </motion.div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-wider font-medium mb-1" style={{ color: step.color }}>
                    Etapa {activeStep + 1} de {steps.length}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.narrative}</p>
                </div>
              </div>

              {step.highlight && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-center py-3 rounded-xl border"
                  style={{ borderColor: `${step.color}20`, background: `linear-gradient(135deg, ${step.color}06 0%, transparent 100%)` }}
                >
                  <span className="text-base md:text-lg font-bold" style={{ color: step.color }}>
                    {step.highlight}
                  </span>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="p-4 rounded-xl border border-red-200 bg-red-50"
                >
                  <div className="text-[10px] uppercase tracking-wider font-bold text-red-500 mb-2">Sem a transformação</div>
                  <p className="text-sm text-red-700/70 leading-relaxed">{step.before}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="p-4 rounded-xl border border-emerald-200 bg-emerald-50"
                >
                  <div className="text-[10px] uppercase tracking-wider font-bold text-emerald-600 mb-2">Com a dataRain</div>
                  <p className="text-sm text-emerald-700/70 leading-relaxed">{step.after}</p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs border border-slate-200 text-slate-500 hover:text-slate-700 hover:border-slate-300 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Anterior
            </motion.button>
            <motion.button
              onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
              disabled={isLast}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs border border-slate-200 text-slate-500 hover:text-slate-700 hover:border-slate-300 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Próxima <ChevronRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: step.color }}
              animate={{ width: `${progressPct}%` }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            />
          </div>

          {isLast && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-4 rounded-xl bg-emerald-50 border border-emerald-200"
            >
              <p className="text-sm text-emerald-700 font-medium">
                A dataRain deu olhos à plataforma que serve 12 milhões de clientes.
              </p>
              <p className="text-xs text-slate-500 mt-1">De post-mortem a prevenção proativa com 95% de precisão.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
