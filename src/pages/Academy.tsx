import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { BookOpen } from "lucide-react";
import immersionImage from "@/assets/hero-people-technology.jpg";
import migrationImage from "@/assets/solutions/cloud-migration.jpg";
import finopsImage from "@/assets/solutions/finops.jpg";
import dataImage from "@/assets/solutions/data-architecture.jpg";
import aiImage from "@/assets/solutions/pilot-ai.jpg";
import gaasImage from "@/assets/solutions/gaas.jpg";

const Academy = () => {

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 md:mb-8 text-primary">
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

            {/* Migration */}
            <div className="mb-16 md:mb-24">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    Migração (Migration)
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Desmistifique a jornada para a nuvem com frameworks consolidados e casos práticos. 
                    Sua equipe vai entender como planejar, executar e escalar migrações com segurança, eficiência e baixo risco.
                  </p>
                  <div className="bg-card rounded-xl p-6 border border-border/20 shadow-lg">
                    <h4 className="text-xl font-semibold text-primary mb-4">Você vai aprender:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl">•</span>
                        <span>Estratégias de avaliação e readiness</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl">•</span>
                        <span>Definição de landing zone e arquitetura alvo</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl">•</span>
                        <span>Execução de migração com mínimas interrupções</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl">•</span>
                        <span>Incentivos AWS e como economizar na sua migração</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={migrationImage} 
                    alt="Migração para Cloud"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* FinOps */}
            <div className="mb-16 md:mb-24">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={finopsImage} 
                    alt="FinOps"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent"></div>
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-accent mb-4">
                    FinOps
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Transforme o custo da nuvem em valor de negócio. 
                    Essa trilha mostra como criar uma cultura de responsabilidade financeira, com visibilidade, governança e otimização contínua do consumo em cloud.
                  </p>
                  <div className="bg-card rounded-xl p-6 border border-border/20 shadow-lg">
                    <h4 className="text-xl font-semibold text-accent mb-4">Você vai aprender:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-accent mt-1 text-xl">•</span>
                        <span>Fundamentos de FinOps e modelos operacionais</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-accent mt-1 text-xl">•</span>
                        <span>Análise de custos e identificação de desperdícios</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-accent mt-1 text-xl">•</span>
                        <span>Estratégias de otimização em tempo real</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-accent mt-1 text-xl">•</span>
                        <span>KPIs e métricas para governança financeira</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Data */}
            <div className="mb-16 md:mb-24">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    Data
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Domine o ciclo de vida dos dados — da ingestão à análise. 
                    Ideal para times que desejam construir pipelines eficientes, governar dados com segurança e extrair insights de verdade.
                  </p>
                  <div className="bg-card rounded-xl p-6 border border-border/20 shadow-lg">
                    <h4 className="text-xl font-semibold text-primary mb-4">Você vai aprender:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl">•</span>
                        <span>Arquiteturas modernas de dados (Data Lakes, Lakehouse, etc.)</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl">•</span>
                        <span>Ingestão e processamento em tempo real</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl">•</span>
                        <span>Governança e catalogação com AWS Glue, Lake Formation</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl">•</span>
                        <span>Ferramentas de visualização e análise (QuickSight, Athena)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={dataImage} 
                    alt="Arquitetura de Dados"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* AI */}
            <div className="mb-16 md:mb-24">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={aiImage} 
                    alt="Inteligência Artificial"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent"></div>
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-accent mb-4">
                    AI (Artificial Intelligence)
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Prepare sua equipe para aplicar inteligência artificial com propósito e escalabilidade. 
                    Da modelagem ao deployment, passando por boas práticas de MLOps.
                  </p>
                  <div className="bg-card rounded-xl p-6 border border-border/20 shadow-lg">
                    <h4 className="text-xl font-semibold text-accent mb-4">Você vai aprender:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-accent mt-1 text-xl">•</span>
                        <span>Fundamentos de machine learning e deep learning</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-accent mt-1 text-xl">•</span>
                        <span>Como treinar, validar e implantar modelos na AWS</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-accent mt-1 text-xl">•</span>
                        <span>Uso de serviços como SageMaker, Bedrock, Rekognition</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-accent mt-1 text-xl">•</span>
                        <span>Governança e monitoramento de modelos em produção</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* GaaS */}
            <div className="mb-0">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    GaaS (Governança como Serviço)
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Governança não precisa ser um freio — pode ser um acelerador. 
                    Essa trilha mostra como estruturar governança desde o início, com automações e políticas que garantem segurança, compliance e agilidade.
                  </p>
                  <div className="bg-card rounded-xl p-6 border border-border/20 shadow-lg">
                    <h4 className="text-xl font-semibold text-primary mb-4">Você vai aprender:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl">•</span>
                        <span>Estruturação de landing zones com boas práticas</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl">•</span>
                        <span>Controle de acessos, identidades e políticas (IAM, SCPs)</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl">•</span>
                        <span>Monitoramento, auditoria e respostas a incidentes</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl">•</span>
                        <span>Automação de compliance com ferramentas nativas da AWS</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={gaasImage} 
                    alt="Governança como Serviço"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formato Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                Na prática, é onde a inovação acontece.
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Com os Immersion Days, sua equipe sai do modo "teoria" para o modo "execução".
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border border-border/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      Formato Presencial
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      Em sua empresa ou em nossos espaços parceiros
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8">
                  <div className="bg-background/50 rounded-xl p-6 border border-border/10">
                    <div className="text-4xl font-bold text-primary mb-2">01</div>
                    <h4 className="font-semibold text-foreground mb-2">Experimentar soluções</h4>
                    <p className="text-sm text-muted-foreground">Mais do que aprender, coloque a mão na massa com casos reais</p>
                  </div>
                  <div className="bg-background/50 rounded-xl p-6 border border-border/10">
                    <div className="text-4xl font-bold text-primary mb-2">02</div>
                    <h4 className="font-semibold text-foreground mb-2">Prototipar ideias</h4>
                    <p className="text-sm text-muted-foreground">Transforme conceitos em protótipos funcionais rapidamente</p>
                  </div>
                  <div className="bg-background/50 rounded-xl p-6 border border-border/10">
                    <div className="text-4xl font-bold text-primary mb-2">03</div>
                    <h4 className="font-semibold text-foreground mb-2">Plano de ação claro</h4>
                    <p className="text-sm text-muted-foreground">Saia com um roadmap prático para implementar na sua empresa</p>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                  <p className="text-lg text-center text-muted-foreground">
                    <span className="font-semibold text-foreground">Aprendizado aplicado.</span> Cada sessão é customizada para os desafios específicos da sua equipe e do seu negócio.
                  </p>
                </div>
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