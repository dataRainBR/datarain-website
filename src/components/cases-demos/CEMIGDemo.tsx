import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database, Layers, Zap, Globe, TestTube, Rocket,
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
    icon: Database,
    title: 'Dados massivos no SAP legado',
    narrative: 'A CEMIG acumulava mais de 76 milhões de registros de parceiros de negócios, 38M de endereços e 12M de instalações no SAP CCS, sem uma forma moderna de expor esses dados aos canais digitais.',
    before: 'Dados presos em sistemas SAP legados, inacessíveis para canais digitais',
    after: 'Dados centralizados em Data Lake AWS, prontos para consumo via APIs',
    highlight: '76M+ registros migrados',
    color: '#2563eb',
  },
  {
    id: 'architecture',
    icon: Layers,
    title: 'Data Lake em 8 camadas',
    narrative: 'A dataRain projetou uma arquitetura em 8 camadas com CDK: Infraestrutura, Armazenamento (S3), Ingestão (Glue), Processamento, Consumo (API Gateway + Lambda), Orquestração, Catálogo de Dados e Esteira CI/CD.',
    before: 'Sem arquitetura de dados moderna, consultas lentas e fragmentadas',
    after: 'Arquitetura em 8 camadas com S3, Glue, DynamoDB, API Gateway e Lambda',
    color: '#7c3aed',
  },
  {
    id: 'cdc',
    icon: Zap,
    title: 'CDC contínuo via SAP SLT',
    narrative: 'Change Data Capture implementado com SAP SLT + Data Intelligence + Cloud Connector para manter o Data Lake sempre sincronizado com o SAP em tempo real.',
    before: 'Dados desatualizados, sincronização manual e propensa a erros',
    after: 'Replicação contínua e automática do SAP para a AWS',
    color: '#dc2626',
  },
  {
    id: 'apis',
    icon: Globe,
    title: '20+ APIs para canais digitais',
    narrative: 'Mais de 20 operações de consulta especificadas e implementadas via barramento: débitos, instalações, parceiro de negócios, faturamento, tarifa social, geração distribuída e muito mais.',
    before: 'Canais digitais sem acesso direto aos dados do cliente',
    after: '20+ APIs REST com SLA 24/7 e tempo de resposta de 0,03s',
    highlight: 'SLA 24/7 — 0,03s em 85% das chamadas',
    color: '#d97706',
  },
  {
    id: 'tests',
    icon: TestTube,
    title: 'Validação com testes de stress',
    narrative: 'Piloto com a entidade Parceiro de Negócios validado com 10.000 acessos em 2 minutos (100 threads × 100 chamadas), executado em us-east-1 e sa-east-1.',
    before: 'Sem validação de performance em escala real',
    after: 'Testes de stress com 10k acessos/2min validando o SLA',
    color: '#0d9488',
  },
  {
    id: 'results',
    icon: Rocket,
    title: 'Atendimento digital transformado',
    narrative: 'Data Lake completo em produção, com CDC contínuo, 20+ APIs e modelo de dados canônico que desacopla os canais digitais da complexidade do SAP.',
    before: 'Atendimento limitado pela rigidez dos sistemas legados',
    after: 'Canais digitais alimentados em tempo real por Data Lake moderno na AWS',
    color: '#059669',
  },
];

export const CEMIGDemo: React.FC = () => {
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
                  {active && <motion.div className="absolute inset-0 rounded-full border-2" style={{ borderColor: `${s.color}25` }} animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />}
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
                <motion.div initial={{ opacity: 0, x: -15, y: 80 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="p-4 rounded-xl border border-red-200 bg-red-50"><div className="text-[10px] uppercase tracking-wider font-bold text-red-500 mb-2">Sem a transformação</div><p className="text-sm text-red-700/70 leading-relaxed">{step.before}</p></motion.div>
                <motion.div initial={{ opacity: 0, x: 15, y: 120 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="p-4 rounded-xl border border-emerald-200 bg-emerald-50"><div className="text-[10px] uppercase tracking-wider font-bold text-emerald-600 mb-2">Com a dataRain</div><p className="text-sm text-emerald-700/70 leading-relaxed">{step.after}</p></motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-between">
            <motion.button onClick={() => setActiveStep(prev => Math.max(0, prev - 1))} disabled={activeStep === 0} className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs border border-slate-200 text-slate-500 hover:text-slate-700 hover:border-slate-300 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><ChevronLeft className="w-3.5 h-3.5" /> Anterior</motion.button>
            <motion.button onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))} disabled={isLast} className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs border border-slate-200 text-slate-500 hover:text-slate-700 hover:border-slate-300 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Próxima <ChevronRight className="w-3.5 h-3.5" /></motion.button>
          </div>
          <div className="h-1 bg-slate-100 rounded-full overflow-hidden"><motion.div className="h-full rounded-full" style={{ backgroundColor: step.color }} animate={{ width: `${progressPct}%` }} transition={{ type: 'spring', stiffness: 200, damping: 25 }} /></div>
          {isLast && <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-4 rounded-xl bg-emerald-50 border border-emerald-200"><p className="text-sm text-emerald-700 font-medium">Data Lake em 8 camadas transformou o atendimento digital da CEMIG.</p><p className="text-xs text-slate-500 mt-1">76M+ registros SAP acessíveis via APIs com SLA de 0,03s.</p></motion.div>}
        </div>
      </div>
    </div>
  );
};
