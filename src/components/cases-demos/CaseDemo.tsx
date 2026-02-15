import React, { lazy, Suspense } from 'react';

const GenomicaDemo = lazy(() => import('./GenomicaDemo').then(m => ({ default: m.GenomicaDemo })));
const SirioLibanesDemo = lazy(() => import('./SirioLibanesDemo').then(m => ({ default: m.SirioLibanesDemo })));
const AutoglassDemo = lazy(() => import('./AutoglassDemo').then(m => ({ default: m.AutoglassDemo })));
const BiomassaAmazonicaDemo = lazy(() => import('./BiomassaAmazonicaDemo').then(m => ({ default: m.BiomassaAmazonicaDemo })));
const CardiologiaDemo = lazy(() => import('./CardiologiaDemo').then(m => ({ default: m.CardiologiaDemo })));
const InRadDemo = lazy(() => import('./InRadDemo').then(m => ({ default: m.InRadDemo })));
const PrefeituraAmericanaDemo = lazy(() => import('./PrefeituraAmericanaDemo').then(m => ({ default: m.PrefeituraAmericanaDemo })));
const RnpLandingZoneDemo = lazy(() => import('./RnpLandingZoneDemo').then(m => ({ default: m.RnpLandingZoneDemo })));
const UnicampDemo = lazy(() => import('./UnicampDemo').then(m => ({ default: m.UnicampDemo })));
const ObservabilidadeBitzDemo = lazy(() => import('./ObservabilidadeBitzDemo').then(m => ({ default: m.ObservabilidadeBitzDemo })));
const DesenvolveSpDemo = lazy(() => import('./DesenvolveSpDemo').then(m => ({ default: m.DesenvolveSpDemo })));

// New demos
const PQDemo = lazy(() => import('./PQDemo').then(m => ({ default: m.PQDemo })));
const BitzMigracaoDemo = lazy(() => import('./BitzMigracaoDemo').then(m => ({ default: m.BitzMigracaoDemo })));
const BluePayDemo = lazy(() => import('./BluePayDemo').then(m => ({ default: m.BluePayDemo })));
const BitzDevOpsDemo = lazy(() => import('./BitzDevOpsDemo').then(m => ({ default: m.BitzDevOpsDemo })));
const BancoOtimoDemo = lazy(() => import('./BancoOtimoDemo').then(m => ({ default: m.BancoOtimoDemo })));
const PakmanDemo = lazy(() => import('./PakmanDemo').then(m => ({ default: m.PakmanDemo })));
const PreventSeniorDemo = lazy(() => import('./PreventSeniorDemo').then(m => ({ default: m.PreventSeniorDemo })));
const IntelbrasDemo = lazy(() => import('./IntelbrasDemo').then(m => ({ default: m.IntelbrasDemo })));
const SeadeDemo = lazy(() => import('./SeadeDemo').then(m => ({ default: m.SeadeDemo })));
const RnpConferenciaDemo = lazy(() => import('./RnpConferenciaDemo').then(m => ({ default: m.RnpConferenciaDemo })));
const SetorEletricoDemo = lazy(() => import('./SetorEletricoDemo').then(m => ({ default: m.SetorEletricoDemo })));
const IPDADemo = lazy(() => import('./IPDADemo').then(m => ({ default: m.IPDADemo })));
const ABITDemo = lazy(() => import('./ABITDemo').then(m => ({ default: m.ABITDemo })));

const demoMap: Record<string, React.LazyExoticComponent<React.FC>> = {
  // Existing demos
  'genomica-em-escala-a-transformacao-digital-no-hospital-das-clinicas': GenomicaDemo,
  'integracao-eficiente-de-dados-medicos-no-hospital-sirio-libanes': SirioLibanesDemo,
  'grupo-autoglass-eleva-governanca-e-seguranca-na-aws-com-implementacao-de-landing-zone': AutoglassDemo,
  'como-a-nuvem-acelerou-o-mapa-de-incertezas-da-biomassa-amazonica': BiomassaAmazonicaDemo,
  'revolucao-na-cardiologia-analise-de-dados-geneticos-e-fenotipicos-com-ia-na-aws': CardiologiaDemo,
  'transformacao-digital-no-inrad-automacao-de-pre-laudos-radiologicos-com-ia-generativa-e-aws': InRadDemo,
  'cases-prefeitura-americana': PrefeituraAmericanaDemo,
  'implementacao-de-landingzone-em-ambiente-de-nuvem-aws-na-rnp': RnpLandingZoneDemo,
  'nuvem-aws-impulsiona-eficiencia-da-unicamp-em-40-e-transforma-gestao-da-saude': UnicampDemo,
  'melhorando-o-mtti-e-mttr-atraves-de-uma-plataforma-de-observabilidade': ObservabilidadeBitzDemo,
  'sair-do-modelo-de-colocation-sem-possibilidade-de-escalar-e-alto-custo-para-nuvem-aws-de-forma-otimizada': DesenvolveSpDemo,
  // New demos
  'a-pq-moderniza-sua-infraestrutura-de-dados-industriais-com-uma-arquitetura-escalavel-na-aws': PQDemo,
  'bitz-acelera-sua-transformacao-digital-com-migracao-para-nuvem-aws-em-apenas-60-dias': BitzMigracaoDemo,
  'devops-com-mais-seguranca-e-escalabilidade-para-bluepay': BluePayDemo,
  'devops-garante-sucesso-na-migracao-do-bitz-carteira-digital-do-bradesco': BitzDevOpsDemo,
  'devops-traz-mais-seguranca-e-escalabilidade-ao-banco-otimo': BancoOtimoDemo,
  'escalabilidade-com-devops-na-pakman': PakmanDemo,
  'implementacao-de-devops-garante-economia-para-a-prevent-senior': PreventSeniorDemo,
  'intelbras-devops-transforma-infraestrutura-e-impulsiona-eficiencia-operacional': IntelbrasDemo,
  'modernizacao-tecnologica-com-maior-rapidez-no-acesso-aos-dados': SeadeDemo,
  'rnp-reduz-significativamente-custos-migrando-seu-servico-de-conferencia-web-para-da-nuvem-aws': RnpConferenciaDemo,
  'sistema-de-inteligencia-analitica-do-setor-eletrico': SetorEletricoDemo,
  'website-em-ambiente-de-alta-performance-disponibilidade-e-velocidade': IPDADemo,
  'website-institucional-instalado-em-ambiente-escalavel-seguro-e-de-alta-disponibilidade': ABITDemo,
};

interface CaseDemoProps {
  slug: string;
}

export const CaseDemo: React.FC<CaseDemoProps> = ({ slug }) => {
  const DemoComponent = demoMap[slug];
  if (!DemoComponent) return null;
  return (
    <Suspense fallback={<div className="w-full max-w-4xl mx-auto my-8 h-64 rounded-2xl bg-muted/30 animate-pulse" />}>
      <DemoComponent />
    </Suspense>
  );
};
