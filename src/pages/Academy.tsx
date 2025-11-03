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
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
        <div className="absolute inset-0">
          <div className="absolute -top-32 -right-32 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-28 pt-28 sm:pt-32 md:pt-36">
          <div className="max-w-5xl mx-auto text-center">
            <div className="backdrop-blur-sm bg-card/30 rounded-3xl p-8 md:p-12 border border-border/20 shadow-2xl">
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
        </div>
      </section>

      {/* Immersion Days Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src={immersionImage} 
                  alt="Immersion Days DataRain"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-3xl font-bold mb-2">Immersion Days DataRain</p>
                  <div className="w-20 h-1 bg-accent"></div>
                </div>
              </div>
              
              <div>
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-4">
                  Experiência Imersiva
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                  Aprendizado profundo, aplicado à sua realidade.
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  Uma imersão prática e estratégica conduzida por especialistas certificados, pensada para equipes que precisam resolver desafios reais com velocidade e precisão.
                </p>
                <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-6 md:p-8 border border-border/20 shadow-xl backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-foreground mb-2">
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
          </div>
        </div>
      </section>

      {/* Trilhas Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold mb-4">
                Trilhas Especializadas
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                Nossas Trilhas de Aprendizado
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Cada trilha é desenhada para transformar conhecimento em ação, com foco total no seu contexto de negócio.
              </p>
            </div>

            {/* Migration */}
            <div className="mb-20 md:mb-32">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
                    Cloud Migration
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    Migração (Migration)
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Desmistifique a jornada para a nuvem com frameworks consolidados e casos práticos. 
                    Sua equipe vai entender como planejar, executar e escalar migrações com segurança, eficiência e baixo risco.
                  </p>
                  <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-6 md:p-8 border border-primary/20 shadow-xl backdrop-blur-sm">
                    <h4 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      Você vai aprender:
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl font-bold">•</span>
                        <span>Estratégias de avaliação e readiness</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl font-bold">•</span>
                        <span>Definição de landing zone e arquitetura alvo</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl font-bold">•</span>
                        <span>Execução de migração com mínimas interrupções</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl font-bold">•</span>
                        <span>Incentivos AWS e como economizar na sua migração</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2 relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
                  <img 
                    src={migrationImage} 
                    alt="Migração para Cloud"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* FinOps */}
            <div className="mb-20 md:mb-32">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
                  <img 
                    src={finopsImage} 
                    alt="FinOps"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/70 to-transparent"></div>
                </div>
                <div>
                  <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-semibold mb-4">
                    Cost Optimization
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-accent mb-4">
                    FinOps
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Transforme o custo da nuvem em valor de negócio. 
                    Essa trilha mostra como criar uma cultura de responsabilidade financeira, com visibilidade, governança e otimização contínua do consumo em cloud.
                  </p>
                  <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-6 md:p-8 border border-accent/20 shadow-xl backdrop-blur-sm">
                    <h4 className="text-xl font-semibold text-accent mb-6 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      Você vai aprender:
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-accent mt-1 text-xl font-bold">•</span>
                        <span>Fundamentos de FinOps e modelos operacionais</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-accent mt-1 text-xl font-bold">•</span>
                        <span>Análise de custos e identificação de desperdícios</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-accent mt-1 text-xl font-bold">•</span>
                        <span>Estratégias de otimização em tempo real</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-accent mt-1 text-xl font-bold">•</span>
                        <span>KPIs e métricas para governança financeira</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Data */}
            <div className="mb-20 md:mb-32">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
                    Data Engineering
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    Data
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Domine o ciclo de vida dos dados — da ingestão à análise. 
                    Ideal para times que desejam construir pipelines eficientes, governar dados com segurança e extrair insights de verdade.
                  </p>
                  <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-6 md:p-8 border border-primary/20 shadow-xl backdrop-blur-sm">
                    <h4 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      Você vai aprender:
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl font-bold">•</span>
                        <span>Arquiteturas modernas de dados (Data Lakes, Lakehouse, etc.)</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl font-bold">•</span>
                        <span>Ingestão e processamento em tempo real</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl font-bold">•</span>
                        <span>Governança e catalogação com AWS Glue, Lake Formation</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl font-bold">•</span>
                        <span>Ferramentas de visualização e análise (QuickSight, Athena)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2 relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
                  <img 
                    src={dataImage} 
                    alt="Arquitetura de Dados"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* AI */}
            <div className="mb-20 md:mb-32">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
                  <img 
                    src={aiImage} 
                    alt="Inteligência Artificial"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/70 to-transparent"></div>
                </div>
                <div>
                  <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-semibold mb-4">
                    Machine Learning
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-accent mb-4">
                    AI (Artificial Intelligence)
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Prepare sua equipe para aplicar inteligência artificial com propósito e escalabilidade. 
                    Da modelagem ao deployment, passando por boas práticas de MLOps.
                  </p>
                  <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-6 md:p-8 border border-accent/20 shadow-xl backdrop-blur-sm">
                    <h4 className="text-xl font-semibold text-accent mb-6 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      Você vai aprender:
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-accent mt-1 text-xl font-bold">•</span>
                        <span>Fundamentos de machine learning e deep learning</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-accent mt-1 text-xl font-bold">•</span>
                        <span>Como treinar, validar e implantar modelos na AWS</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-accent mt-1 text-xl font-bold">•</span>
                        <span>Uso de serviços como SageMaker, Bedrock, Rekognition</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-accent mt-1 text-xl font-bold">•</span>
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
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
                    Governance & Security
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    GaaS (Governança como Serviço)
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Governança não precisa ser um freio — pode ser um acelerador. 
                    Essa trilha mostra como estruturar governança desde o início, com automações e políticas que garantem segurança, compliance e agilidade.
                  </p>
                  <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-6 md:p-8 border border-primary/20 shadow-xl backdrop-blur-sm">
                    <h4 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      Você vai aprender:
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl font-bold">•</span>
                        <span>Estruturação de landing zones com boas práticas</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl font-bold">•</span>
                        <span>Controle de acessos, identidades e políticas (IAM, SCPs)</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl font-bold">•</span>
                        <span>Monitoramento, auditoria e respostas a incidentes</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 text-xl font-bold">•</span>
                        <span>Automação de compliance com ferramentas nativas da AWS</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2 relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
                  <img 
                    src={gaasImage} 
                    alt="Governança como Serviço"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formato Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-4">
                Formato de Aprendizado
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                Na prática, é onde a inovação acontece.
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Com os Immersion Days, sua equipe sai do modo "teoria" para o modo "execução".
              </p>
            </div>

            <div className="bg-gradient-to-br from-card via-card to-card/50 rounded-3xl p-8 md:p-12 shadow-2xl border border-border/20 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <BookOpen className="w-8 h-8 text-white" />
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
                  <div className="bg-gradient-to-br from-background/80 to-background/40 rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                    <div className="text-5xl font-bold text-primary mb-3">01</div>
                    <h4 className="font-semibold text-foreground mb-2 text-lg">Experimentar soluções</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Mais do que aprender, coloque a mão na massa com casos reais</p>
                  </div>
                  <div className="bg-gradient-to-br from-background/80 to-background/40 rounded-2xl p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
                    <div className="text-5xl font-bold text-accent mb-3">02</div>
                    <h4 className="font-semibold text-foreground mb-2 text-lg">Prototipar ideias</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Transforme conceitos em protótipos funcionais rapidamente</p>
                  </div>
                  <div className="bg-gradient-to-br from-background/80 to-background/40 rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                    <div className="text-5xl font-bold text-primary mb-3">03</div>
                    <h4 className="font-semibold text-foreground mb-2 text-lg">Plano de ação claro</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Saia com um roadmap prático para implementar na sua empresa</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 md:p-8 border border-primary/20">
                  <p className="text-lg text-center text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground block mb-2">Aprendizado aplicado.</span> 
                    Cada sessão é customizada para os desafios específicos da sua equipe e do seu negócio.
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