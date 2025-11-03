import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SolutionCard from "@/components/SolutionCard";
import { BookOpen, TrendingUp, Database, Brain, Shield } from "lucide-react";
import immersionImage from "@/assets/hero-people-technology.jpg";
import migrationImage from "@/assets/solutions/cloud-migration.jpg";
import finopsImage from "@/assets/solutions/finops.jpg";
import dataImage from "@/assets/solutions/data-architecture.jpg";
import aiImage from "@/assets/solutions/pilot-ai.jpg";
import gaasImage from "@/assets/solutions/gaas.jpg";

const Academy = () => {
  const trilhas = [
    {
      title: "Migração (Migration)",
      description: "Desmistifique a jornada para a nuvem com frameworks consolidados e casos práticos. Sua equipe vai entender como planejar, executar e escalar migrações com segurança, eficiência e baixo risco.",
      image: migrationImage,
      link: "#migration",
      color: "#3893af",
      benefits: [
        "Estratégias de avaliação e readiness",
        "Definição de landing zone e arquitetura alvo",
        "Execução de migração com mínimas interrupções",
        "Incentivos AWS e como economizar na sua migração"
      ]
    },
    {
      title: "FinOps",
      description: "Transforme o custo da nuvem em valor de negócio. Essa trilha mostra como criar uma cultura de responsabilidade financeira, com visibilidade, governança e otimização contínua do consumo em cloud.",
      image: finopsImage,
      link: "#finops",
      color: "#f78504",
      benefits: [
        "Fundamentos de FinOps e modelos operacionais",
        "Análise de custos e identificação de desperdícios",
        "Estratégias de otimização em tempo real",
        "KPIs e métricas para governança financeira"
      ]
    },
    {
      title: "Data",
      description: "Domine o ciclo de vida dos dados — da ingestão à análise. Ideal para times que desejam construir pipelines eficientes, governar dados com segurança e extrair insights de verdade.",
      image: dataImage,
      link: "#data",
      color: "#3893af",
      benefits: [
        "Arquiteturas modernas de dados (Data Lakes, Lakehouse, etc.)",
        "Ingestão e processamento em tempo real",
        "Governança e catalogação com AWS Glue, Lake Formation",
        "Ferramentas de visualização e análise (QuickSight, Athena)"
      ]
    },
    {
      title: "AI (Artificial Intelligence)",
      description: "Prepare sua equipe para aplicar inteligência artificial com propósito e escalabilidade. Da modelagem ao deployment, passando por boas práticas de MLOps.",
      image: aiImage,
      link: "#ai",
      color: "#f78504",
      benefits: [
        "Fundamentos de machine learning e deep learning",
        "Como treinar, validar e implantar modelos na AWS",
        "Uso de serviços como SageMaker, Bedrock, Rekognition",
        "Governança e monitoramento de modelos em produção"
      ]
    },
    {
      title: "GaaS (Governança como Serviço)",
      description: "Governança não precisa ser um freio — pode ser um acelerador. Essa trilha mostra como estruturar governança desde o início, com automações e políticas que garantem segurança, compliance e agilidade.",
      image: gaasImage,
      link: "#gaas",
      color: "#3893af",
      benefits: [
        "Estruturação de landing zones com boas práticas",
        "Controle de acessos, identidades e políticas (IAM, SCPs)",
        "Monitoramento, auditoria e respostas a incidentes",
        "Automação de compliance com ferramentas nativas da AWS"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0">
          <div className="absolute -top-32 -right-32 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-28 pt-28 sm:pt-32 md:pt-36">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 md:mb-8 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              DataRain Academy
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6 md:mb-8">
              Aprenda. Aplique. Transforme.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Na DataRain, o conhecimento é combustível para inovação. Criamos experiências de aprendizado sob medida para empresas que desejam acelerar sua transformação digital — com foco em prática, estratégia e as tecnologias mais avançadas do mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Immersion Days Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={immersionImage} 
                  alt="Immersion Days DataRain"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-2xl font-bold">Immersion Days DataRain</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                  Aprendizado profundo, aplicado à sua realidade.
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  Uma imersão prática e estratégica conduzida por especialistas certificados, pensada para equipes que precisam resolver desafios reais com velocidade e precisão.
                </p>
                <div className="bg-card rounded-xl p-6 border border-border/20 shadow-lg">
                  <p className="text-lg font-semibold text-primary mb-2">
                    Escolha sua trilha:
                  </p>
                  <p className="text-muted-foreground">
                    Oferecemos cinco trilhas especializadas para atender às necessidades específicas da sua equipe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trilhas Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Nossas Trilhas de Aprendizado
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Cada trilha é desenhada para transformar conhecimento em ação, com foco total no seu contexto de negócio.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {trilhas.map((trilha, index) => (
                <SolutionCard
                  key={index}
                  {...trilha}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formato Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border/20">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-xl flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Formato: Presencial
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Em sua empresa ou em nossos espaços parceiros
              </p>
              <div className="bg-primary/5 rounded-xl p-6 mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Na prática, é onde a inovação acontece.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Com os Immersion Days, sua equipe sai do modo "teoria" para o modo "execução". 
                  Mais do que aprender, é sobre experimentar soluções, prototipar ideias e sair com um plano claro de ação.
                </p>
              </div>
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