import React, { lazy, Suspense } from 'react';

const GenomicaDemo = lazy(() =>
  import('./GenomicaDemo').then(m => ({ default: m.GenomicaDemo }))
);

const SirioLibanesDemo = lazy(() =>
  import('./SirioLibanesDemo').then(m => ({ default: m.SirioLibanesDemo }))
);

const AutoglassDemo = lazy(() =>
  import('./AutoglassDemo').then(m => ({ default: m.AutoglassDemo }))
);

const BiomassaAmazonicaDemo = lazy(() =>
  import('./BiomassaAmazonicaDemo').then(m => ({ default: m.BiomassaAmazonicaDemo }))
);

const CardiologiaDemo = lazy(() =>
  import('./CardiologiaDemo').then(m => ({ default: m.CardiologiaDemo }))
);

const InRadDemo = lazy(() =>
  import('./InRadDemo').then(m => ({ default: m.InRadDemo }))
);

const PrefeituraAmericanaDemo = lazy(() =>
  import('./PrefeituraAmericanaDemo').then(m => ({ default: m.PrefeituraAmericanaDemo }))
);

const RnpLandingZoneDemo = lazy(() =>
  import('./RnpLandingZoneDemo').then(m => ({ default: m.RnpLandingZoneDemo }))
);

const UnicampDemo = lazy(() =>
  import('./UnicampDemo').then(m => ({ default: m.UnicampDemo }))
);

const ObservabilidadeBitzDemo = lazy(() =>
  import('./ObservabilidadeBitzDemo').then(m => ({ default: m.ObservabilidadeBitzDemo }))
);

const DesenvolveSpDemo = lazy(() =>
  import('./DesenvolveSpDemo').then(m => ({ default: m.DesenvolveSpDemo }))
);

const demoMap: Record<string, React.LazyExoticComponent<React.FC>> = {
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
};

interface CaseDemoProps {
  slug: string;
}

export const CaseDemo: React.FC<CaseDemoProps> = ({ slug }) => {
  const DemoComponent = demoMap[slug];

  if (!DemoComponent) return null;

  return (
    <Suspense fallback={
      <div className="w-full max-w-4xl mx-auto my-8 h-64 rounded-2xl bg-muted/30 animate-pulse" />
    }>
      <DemoComponent />
    </Suspense>
  );
};
