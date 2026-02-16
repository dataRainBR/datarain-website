import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Landmark, FileStack, Globe, Clock, Leaf, Users,
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
    id: 'analog',
    icon: Landmark,
    title: 'Uma prefeitura no papel',
    narrative: 'Até março de 2020, todos os processos da Prefeitura de Americana eram tramitados de forma analógica. Cada solicitação exigia deslocamento presencial, filas e pilhas de papel.',
    before: 'Processos 100% em papel — burocracia, filas, deslocamento obrigatório do cidadão',
    after: 'Plataforma digital permite solicitações de casa, a qualquer hora do dia',
    color: '#d97706',
  },
  {
    id: 'bureaucracy',
    icon: FileStack,
    title: 'Burocracia que custa caro',
    narrative: 'Impressões, arquivamento físico e processos manuais geravam custos altos aos cofres públicos. Uma simples certidão negativa de débitos levava um tempo desproporcional para ser emitida.',
    before: 'Milhões de impressões, custos elevados e tempo de resposta lento',
    after: 'Mais de 10 milhões de impressões eliminadas — economia de R$ 1 milhão aos cofres públicos',
    highlight: 'R$ 1 milhão economizado',
    color: '#dc2626',
  },
  {
    id: 'digital',
    icon: Globe,
    title: '630 serviços ficam online',
    narrative: 'A plataforma 1Doc, hospedada na AWS com arquitetura de alta disponibilidade, digitalizou 630 serviços da prefeitura. A implantação foi 100% remota, com treinamento à distância.',
    before: 'Atendimento apenas presencial ou por telefone — acesso limitado',
    after: '630 serviços online — 85% de todos os atendimentos passaram a ser digitais',
    highlight: '85% dos atendimentos digitais',
    color: '#2563eb',
  },
  {
    id: 'speed',
    icon: Clock,
    title: 'Tempo cortado pela metade',
    narrative: 'Projetos de construção que demoravam semanas para aprovação agora tramitam digitalmente. A certidão negativa de débitos ficou 10x mais rápida. Mais de 6.000 projetos já foram analisados.',
    before: 'Aprovação de projetos demorada — certidões levavam dias para sair',
    after: '50% menos tempo na aprovação de projetos · Certidão 10x mais rápida',
    highlight: '50% mais rápido · 10x na certidão',
    color: '#7c3aed',
  },
  {
    id: 'paper',
    icon: Leaf,
    title: '10 milhões de folhas a menos',
    narrative: 'A digitalização eliminou mais de 10 milhões de impressões. Além da economia financeira, o impacto ambiental é significativo — menos papel, menos transporte, menos desperdício.',
    before: 'Montanhas de papel acumuladas em cada secretaria — impacto ambiental e logístico',
    after: 'Processos digitais de ponta a ponta — 99,9% dos projetos de construção são digitais',
    highlight: '10 milhões de impressões eliminadas',
    color: '#0d9488',
  },
  {
    id: 'citizen',
    icon: Users,
    title: 'O cidadão no centro',
    narrative: 'Com mais de 450 mil atendimentos digitais, o munícipe de Americana resolve demandas sem sair de casa. A ouvidoria digital já responde por quase 50% dos atendimentos — e o workplace é o mais acessado entre todos os clientes 1Doc.',
    before: 'Cidadão refém de horários, filas e deslocamento para resolver qualquer demanda',
    after: 'Atendimento 24h, de qualquer lugar — mais de 450 mil demandas resolvidas digitalmente',
    highlight: '450 mil+ atendimentos digitais',
    color: '#059669',
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export const PrefeituraAmericanaDemo: React.FC = () => {
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
          {/* Header */}

          {/* Timeline */}
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

          {/* Step content */}
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

          {/* Navigation */}
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
                A tecnologia transformou a relação entre o cidadão e o poder público.
              </p>
              <p className="text-xs text-slate-500 mt-1">De filas e papel a 630 serviços digitais disponíveis 24 horas.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
