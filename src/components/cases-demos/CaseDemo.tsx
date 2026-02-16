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

// New cases demos - Batch 1
const CEMIGDemo = lazy(() => import('./CEMIGDemo').then(m => ({ default: m.CEMIGDemo })));
const FIEMGDemo = lazy(() => import('./FIEMGDemo').then(m => ({ default: m.FIEMGDemo })));
const BMGDemo = lazy(() => import('./BMGDemo').then(m => ({ default: m.BMGDemo })));
const AilosDemo = lazy(() => import('./AilosDemo').then(m => ({ default: m.AilosDemo })));
const CotrijalDemo = lazy(() => import('./CotrijalDemo').then(m => ({ default: m.CotrijalDemo })));
const JoaoGoulartDemo = lazy(() => import('./JoaoGoulartDemo').then(m => ({ default: m.JoaoGoulartDemo })));

// New cases demos - Batch 2
const IPPDemo = lazy(() => import('./IPPDemo').then(m => ({ default: m.IPPDemo })));
const CordVidaDemo = lazy(() => import('./CordVidaDemo').then(m => ({ default: m.CordVidaDemo })));
const SabareDemo = lazy(() => import('./SabareDemo').then(m => ({ default: m.SabareDemo })));
const IHSLDemo = lazy(() => import('./IHSLDemo').then(m => ({ default: m.IHSLDemo })));
const GrecaDemo = lazy(() => import('./GrecaDemo').then(m => ({ default: m.GrecaDemo })));
const BancoASADemo = lazy(() => import('./BancoASADemo').then(m => ({ default: m.BancoASADemo })));

// New cases demos - Batch 3
const SabinDemo = lazy(() => import('./SabinDemo').then(m => ({ default: m.SabinDemo })));
const TJSPDemo = lazy(() => import('./TJSPDemo').then(m => ({ default: m.TJSPDemo })));
const SMULDemo = lazy(() => import('./SMULDemo').then(m => ({ default: m.SMULDemo })));
const TrisulDemo = lazy(() => import('./TrisulDemo').then(m => ({ default: m.TrisulDemo })));
const XeroxDemo = lazy(() => import('./XeroxDemo').then(m => ({ default: m.XeroxDemo })));
const UTFPRDemo = lazy(() => import('./UTFPRDemo').then(m => ({ default: m.UTFPRDemo })));
const SEBRAEDemo = lazy(() => import('./SEBRAEDemo').then(m => ({ default: m.SEBRAEDemo })));
const SPIDemo = lazy(() => import('./SPIDemo').then(m => ({ default: m.SPIDemo })));
const SymbiomicsDemo = lazy(() => import('./SymbiomicsDemo').then(m => ({ default: m.SymbiomicsDemo })));

// New cases demos - Batch 4
const MaxionDemo = lazy(() => import('./MaxionDemo').then(m => ({ default: m.MaxionDemo })));
const CMSPDemo = lazy(() => import('./CMSPDemo').then(m => ({ default: m.CMSPDemo })));
const TelemedicinaSESDemo = lazy(() => import('./TelemedicinaSESDemo').then(m => ({ default: m.TelemedicinaSESDemo })));
const SynchroDemo = lazy(() => import('./SynchroDemo').then(m => ({ default: m.SynchroDemo })));
const MPRNDemo = lazy(() => import('./MPRNDemo').then(m => ({ default: m.MPRNDemo })));
const EstreDemo = lazy(() => import('./EstreDemo').then(m => ({ default: m.EstreDemo })));
const DoutorIEDemo = lazy(() => import('./DoutorIEDemo').then(m => ({ default: m.DoutorIEDemo })));
const ENEMedicalDemo = lazy(() => import('./ENEMedicalDemo').then(m => ({ default: m.ENEMedicalDemo })));
const AarinDemo = lazy(() => import('./AarinDemo').then(m => ({ default: m.AarinDemo })));
const BippCareDemo = lazy(() => import('./BippCareDemo').then(m => ({ default: m.BippCareDemo })));
const BorilliDemo = lazy(() => import('./BorilliDemo').then(m => ({ default: m.BorilliDemo })));
const IplanRioDemo = lazy(() => import('./IplanRioDemo').then(m => ({ default: m.IplanRioDemo })));
const NurnbergMesseDemo = lazy(() => import('./NurnbergMesseDemo').then(m => ({ default: m.NurnbergMesseDemo })));
const IntelbrasMarketplaceDemo = lazy(() => import('./IntelbrasMarketplaceDemo').then(m => ({ default: m.IntelbrasMarketplaceDemo })));
const VNCDemo = lazy(() => import('./VNCDemo').then(m => ({ default: m.VNCDemo })));

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
  // New cases
  'cemig-constroi-data-lake-na-aws-para-transformar-atendimento-ao-cliente': CEMIGDemo,
  'fiemg-implementa-pipeline-de-data-analytics-e-machine-learning-na-aws': FIEMGDemo,
  'bmg-eleva-maturidade-de-seguranca-na-aws-com-assessment-completo': BMGDemo,
  'ailos-transforma-atendimento-ao-cliente-com-ia-generativa-na-aws': AilosDemo,
  'cotrijal-protege-dados-criticos-com-backup-imutavel-na-aws': CotrijalDemo,
  'instituto-joao-goulart-implanta-moodle-na-aws-com-alta-disponibilidade-e-terraform': JoaoGoulartDemo,
  // Batch 2
  'ipp-migra-infraestrutura-para-aws-com-vpn-e-suporte-gerenciado': IPPDemo,
  'cordvida-implementa-alta-disponibilidade-na-aws-para-seus-portais-de-saude': CordVidaDemo,
  'hospital-sabare-protege-dados-pediatricos-com-backup-imutavel-na-aws': SabareDemo,
  'ihsl-gerencia-ambiente-hibrido-na-aws-para-hemoterapia-de-alta-complexidade': IHSLDemo,
  'greca-asfaltos-implementa-backup-multinivel-e-conectividade-segura-na-aws': GrecaDemo,
  'banco-asa-unifica-backup-de-multiplos-bancos-de-dados-com-veeam-na-aws': BancoASADemo,
  // Batch 3
  'sabin-moderniza-infraestrutura-multi-account-na-aws-com-devops-e-data-lake': SabinDemo,
  'tjsp-migra-ambiente-de-homologacao-do-e-saj-para-aws': TJSPDemo,
  'smul-implementa-arquitetura-serverless-para-urbanismo-digital-em-sao-paulo': SMULDemo,
  'trisul-consolida-infraestrutura-multi-cloud-na-aws': TrisulDemo,
  'xerox-opera-multiplos-projetos-na-aws-com-monitoramento-24x7': XeroxDemo,
  'utfpr-gerencia-29-instancias-com-suporte-aws-e-backup-100-porcento': UTFPRDemo,
  'sebrae-pr-responde-a-ataque-ddos-com-auto-scaling-na-aws': SEBRAEDemo,
  'spi-migra-servidores-e-oracle-para-aws-com-vpn-e-veeam': SPIDemo,
  'symbiomics-executa-pipeline-de-genomica-na-aws': SymbiomicsDemo,
  // Batch 4
  'maxion-migra-186-vms-do-azure-para-aws-com-landing-zone-enterprise': MaxionDemo,
  'prodesp-seduc-centro-de-midias-sp-streaming-educacional-na-aws': CMSPDemo,
  'prodesp-ses-sp-implementa-telemedicina-na-aws-com-elastic-beanstalk-e-waf': TelemedicinaSESDemo,
  'amazon-synchro-economiza-100k-com-otimizacao-s3-e-implementa-dr-na-aws': SynchroDemo,
  'mprn-implementa-eks-fargate-e-poc-de-rastreio-de-dados-pessoais': MPRNDemo,
  'estre-ambiental-otimiza-billing-aws-com-resizing-e-saving-plans': EstreDemo,
  'doutorie-projeta-dr-para-cluster-kubernetes-com-aws-drs-e-efs-replication': DoutorIEDemo,
  'ene-medical-implementa-backup-imutavel-com-veeam-e-saving-plans-na-aws': ENEMedicalDemo,
  'aarin-migra-gitlab-entre-instancias-com-automacao-via-api': AarinDemo,
  'bippcare-opera-app-de-saude-containerizado-na-aws': BippCareDemo,
  'borilli-pneus-provisiona-ambiente-aws-com-vpn-e-monitoramento': BorilliDemo,
  'iplanrio-opera-suporte-continuo-aws-com-gestao-de-tickets': IplanRioDemo,
  // Super Cases
  'nurnbergmesse-brasil-moderniza-gestao-de-eventos-com-plataformas-digitais': NurnbergMesseDemo,
  'intelbras-cria-marketplace-e-ecossistema-digital-para-revendedores': IntelbrasMarketplaceDemo,
  'vnc-private-homes-transforma-gestao-imobiliaria-de-luxo-com-plataformas-digitais': VNCDemo,
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
