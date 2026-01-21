import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SolutionHero from "@/components/solutions/SolutionHero";
import { BookOpen, Cloud, Lightbulb, ShieldCheck } from "lucide-react";

type PillarKey = "cloud" | "data" | "cyber";

const PILLAR = {
  cloud: {
    label: "Cloud",
    color: "hsl(var(--pillar-cloud))",
    Icon: Cloud,
  },
  data: {
    label: "GenAI e Dados",
    color: "hsl(var(--pillar-data))",
    Icon: Lightbulb,
  },
  cyber: {
    label: "Cybersecurity",
    color: "hsl(var(--pillar-cyber))",
    Icon: ShieldCheck,
  },
} as const;

const tracks: Array<{
  slug: string;
  pillar: PillarKey;
  title: string;
  eyebrow: string;
  description: string;
  bullets: string[];
}> = [
  {
    slug: "migracao-dr",
    pillar: "cloud",
    eyebrow: "Cloud",
    title: "Migração e Disaster Recovery",
    description:
      "Planeje e execute migrações com segurança e previsibilidade — com foco em arquitetura alvo, landing zones e continuidade de negócios.",
    bullets: [
      "Readiness e estratégia de migração",
      "Landing zone e arquitetura alvo",
      "Execução com mínima interrupção",
      "DR: padrões, testes e governança",
    ],
  },
  {
    slug: "finops",
    pillar: "cloud",
    eyebrow: "Cloud",
    title: "Gestão de FinOps",
    description:
      "Transforme custo em decisão: visibilidade, governança e otimização contínua para escalar com responsabilidade financeira.",
    bullets: [
      "Fundamentos e modelo operacional",
      "Análise de custos e desperdícios",
      "Otimização e reservas / savings",
      "KPIs e rituais de governança",
    ],
  },
  {
    slug: "engenharia-dados",
    pillar: "data",
    eyebrow: "GenAI e Dados",
    title: "Arquitetura e Engenharia de Dados",
    description:
      "Do dado bruto ao insight: construa pipelines modernos, governança e plataformas analíticas com alto desempenho.",
    bullets: [
      "Lake, lakehouse e arquiteturas modernas",
      "Ingestão e processamento em tempo real",
      "Catálogo, qualidade e governança",
      "Observabilidade e confiabilidade",
    ],
  },
  {
    slug: "genai-ml",
    pillar: "data",
    eyebrow: "GenAI e Dados",
    title: "GenAI e ML",
    description:
      "Coloque modelos e agentes em produção com boas práticas: do caso de uso à operação, com segurança, métricas e MLOps.",
    bullets: [
      "Fundamentos de ML e GenAI",
      "RAG, agentes e avaliação",
      "MLOps/LLMOps e deploy",
      "Governança e monitoramento",
    ],
  },
  {
    slug: "gaas",
    pillar: "cyber",
    eyebrow: "Cybersecurity",
    title: "GaaS (Governança como Serviço)",
    description:
      "Governança que acelera: políticas, identidades, compliance e automações para reduzir risco sem travar a execução.",
    bullets: [
      "Identidade, acesso e políticas",
      "Auditoria e trilhas de evidência",
      "Automação de compliance",
      "Resposta a incidentes e runbooks",
    ],
  },
];

function TrackCard({
  pillar,
  title,
  eyebrow,
  description,
  bullets,
  href,
}: {
  pillar: PillarKey;
  title: string;
  eyebrow: string;
  description: string;
  bullets: string[];
  href: string;
}) {
  const { color, Icon } = PILLAR[pillar];
  const isLight = color.replace(/\s/g, "").toLowerCase() === "hsl(var(--pillar-cloud))";

  return (
    <article
      className="relative overflow-hidden rounded-3xl border border-primary-foreground/10 p-7 sm:p-8 transition-transform duration-300 hover:-translate-y-1"
      style={{ backgroundColor: color }}
    >
      {/* pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.10]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id={`academy-stars-${pillar}-${title}`.replace(/[^a-z0-9_-]/gi, "-")}
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M30 25 L31 29 L35 30 L31 31 L30 35 L29 31 L25 30 L29 29 Z"
                fill={isLight ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.8)"}
              />
              <circle
                cx="15"
                cy="15"
                r="1.5"
                fill={isLight ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.7)"}
              />
              <path
                d="M45 45 L45 42 M45 48 L45 45 M42 45 L48 45"
                stroke={isLight ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.7)"}
                strokeWidth="1.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill={`url(#${`academy-stars-${pillar}-${title}`.replace(/[^a-z0-9_-]/gi, "-")})`}
          />
        </svg>
      </div>

      {/* decorative icon */}
      <div className="pointer-events-none absolute -bottom-16 -right-16 opacity-[0.14]">
        <Icon className="h-64 w-64" strokeWidth={0.7} />
      </div>

      <div className="relative">
        <div
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold backdrop-blur-sm border ${
            isLight
              ? "bg-foreground/10 text-foreground border-foreground/20"
              : "bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20"
          }`}
        >
          <Icon className="h-4 w-4" />
          <span>{eyebrow}</span>
        </div>

        <h3
          className={`mt-5 text-2xl sm:text-3xl font-bold leading-tight ${
            isLight ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {title}
        </h3>

        <p
          className={`mt-3 text-sm sm:text-base leading-relaxed max-w-prose ${
            isLight ? "text-foreground/80" : "text-primary-foreground/80"
          }`}
        >
          {description}
        </p>

        <ul className="mt-6 space-y-2">
          {bullets.map((b) => (
            <li
              key={b}
              className={`text-sm ${isLight ? "text-foreground/85" : "text-primary-foreground/85"}`}
            >
              <span className="mr-2">•</span>
              {b}
            </li>
          ))}
        </ul>

        <a
          href={href}
          className={`mt-7 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5 ${
            isLight
              ? "bg-foreground text-background hover:bg-foreground/90"
              : "bg-primary-foreground hover:bg-primary-foreground/90"
          }`}
          style={{ color: isLight ? undefined : color }}
        >
          Quero essa trilha
        </a>
      </div>
    </article>
  );
}

const Academy = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />

      <SolutionHero
        pillarLabel="dataRain Academy"
        pillarIcon={BookOpen}
        pillarColor={"hsl(var(--pillar-data))"}
        title="Aprenda. Aplique."
        highlightedText="Transforme."
        description="Experiências de aprendizado sob medida para empresas que querem acelerar sua transformação digital — com prática, estratégia e tecnologia." 
        ctaText="Ver trilhas"
        ctaHref="#trilhas"
      />

      {/* Immersion Days */}
      <section className="py-16 md:py-20 lg:py-24 border-t border-border/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-secondary-foreground">
                  <BookOpen className="h-4 w-4" />
                  Experiência Imersiva
                </div>
                <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-foreground">
                  Immersion Days dataRain
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Uma imersão prática e estratégica conduzida por especialistas certificados, pensada para equipes que precisam resolver desafios reais com velocidade e precisão.
                </p>

                <div className="mt-8 rounded-2xl border border-border/30 bg-card p-6">
                  <p className="text-sm font-semibold text-foreground">O que torna imersivo</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li><span className="mr-2">•</span>Hands-on com contexto do seu negócio</li>
                    <li><span className="mr-2">•</span>Mentoria e direcionamento de especialistas</li>
                    <li><span className="mr-2">•</span>Saída com decisões e próximos passos claros</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-3xl border border-border/30 bg-card p-7 sm:p-8">
                <h3 className="text-xl font-bold text-foreground">Formato (em 3 passos)</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Em sua empresa ou em nossos espaços parceiros.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-accent/20 bg-background/60 p-5 hover:border-accent/40 transition-colors">
                    <div className="text-4xl font-bold text-accent">01</div>
                    <h4 className="mt-2 font-semibold text-foreground">Experimentar soluções</h4>
                    <p className="mt-1 text-sm text-muted-foreground">Mão na massa com casos reais.</p>
                  </div>
                  <div className="rounded-2xl border border-accent/20 bg-background/60 p-5 hover:border-accent/40 transition-colors">
                    <div className="text-4xl font-bold text-accent">02</div>
                    <h4 className="mt-2 font-semibold text-foreground">Prototipar ideias</h4>
                    <p className="mt-1 text-sm text-muted-foreground">Conceitos viram protótipos rapidamente.</p>
                  </div>
                  <div className="rounded-2xl border border-accent/20 bg-background/60 p-5 hover:border-accent/40 transition-colors sm:col-span-2">
                    <div className="text-4xl font-bold text-accent">03</div>
                    <h4 className="mt-2 font-semibold text-foreground">Plano de ação claro</h4>
                    <p className="mt-1 text-sm text-muted-foreground">Roadmap prático para implementar na empresa.</p>
                  </div>
                </div>

                <a
                  href="#trilhas"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
                >
                  Escolher trilha
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trilhas */}
      <section id="trilhas" className="py-16 md:py-20 lg:py-24 border-t border-border/20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <header className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-secondary-foreground">
                Trilhas
              </div>
              <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-foreground">
                Nossas trilhas de aprendizado
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                Cards no padrão dos pilares: Cloud, GenAI e Dados, e Cybersecurity — tudo 100% sem imagens.
              </p>
            </header>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tracks.map((t) => (
                <TrackCard
                  key={t.slug}
                  pillar={t.pillar}
                  title={t.title}
                  eyebrow={t.eyebrow}
                  description={t.description}
                  bullets={t.bullets}
                  href={`/fale-conosco?assunto=academy&trilha=${t.slug}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default Academy;