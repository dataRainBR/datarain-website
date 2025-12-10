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
      <section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 sm:-top-32 sm:-right-32 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 sm:-bottom-32 sm:-left-32 w-[350px] sm:w-[500px] md:w-[700px] h-[350px] sm:h-[500px] md:h-[700px] bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] md:w-[500px] h-[200px] sm:h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24 pt-40 sm:pt-44 md:pt-48 lg:pt-52">
          <div className="max-w-5xl mx-auto text-center">
            <div className="backdrop-blur-sm bg-card/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-border/20 shadow-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 text-foreground">
                DataRain Academy
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4 sm:mb-6 md:mb-8">
                Aprenda. Aplique. Transforme.
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Na DataRain, o conhecimento é combustível para inovação. Criamos experiências de aprendizado sob medida para empresas que desejam acelerar sua transformação digital — com foco em prática, estratégia e as tecnologias mais avançadas do mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Immersion Days Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center">
              <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src={immersionImage} 
                  alt="Immersion Days DataRain"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 text-white">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Immersion Days DataRain</p>
                  <div className="w-16 sm:w-20 h-1 bg-accent"></div>
                </div>
              </div>
              
              <div>
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                  Experiência Imersiva
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                  Aprendizado profundo, aplicado à sua realidade.
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                  Uma imersão prática e estratégica conduzida por especialistas certificados, pensada para equipes que precisam resolver desafios reais com velocidade e precisão.
                </p>
                <div className="bg-gradient-to-br from-card to-card/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-border/20 shadow-xl backdrop-blur-sm">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">
                        Escolha sua trilha:
                      </p>
                      <p className="text-sm sm:text-base text-muted-foreground">
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 rounded-full text-accent text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Trilhas Especializadas
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Nossas Trilhas de Aprendizado
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Cada trilha é desenhada para transformar conhecimento em ação, com foco total no seu contexto de negócio.
              </p>
            </div>

            {/* Migration */}
            <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-32">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-block px-2.5 sm:px-3 py-1 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                    Cloud Migration
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
                    Migração (Migration)
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    Desmistifique a jornada para a nuvem com frameworks consolidados e casos práticos. 
                    Sua equipe vai entender como planejar, executar e escalar migrações com segurança, eficiência e baixo risco.
                  </p>
                  <div className="bg-gradient-to-br from-card to-card/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-primary/20 shadow-xl backdrop-blur-sm">
                    <h4 className="text-lg sm:text-xl font-semibold text-primary mb-4 sm:mb-6 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      Você vai aprender:
                    </h4>
                    <ul className="space-y-2.5 sm:space-y-3 md:space-y-4">
                      <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                        <span className="text-primary mt-0.5 sm:mt-1 text-lg sm:text-xl font-bold">•</span>
                        <span>Estratégias de avaliação e readiness</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                        <span className="text-primary mt-0.5 sm:mt-1 text-lg sm:text-xl font-bold">•</span>
                        <span>Definição de landing zone e arquitetura alvo</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                        <span className="text-primary mt-0.5 sm:mt-1 text-lg sm:text-xl font-bold">•</span>
                        <span>Execução de migração com mínimas interrupções</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                        <span className="text-primary mt-0.5 sm:mt-1 text-lg sm:text-xl font-bold">•</span>
                        <span>Incentivos AWS e como economizar na sua migração</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2 relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
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
            <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-32">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
                <div className="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
                  <img 
                    src={finopsImage} 
                    alt="FinOps"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/70 to-transparent"></div>
                </div>
                <div>
                  <div className="inline-block px-2.5 sm:px-3 py-1 bg-accent/10 rounded-full text-accent text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                    Cost Optimization
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-3 sm:mb-4">
                    FinOps
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    Transforme o custo da nuvem em valor de negócio. 
                    Essa trilha mostra como criar uma cultura de responsabilidade financeira, com visibilidade, governança e otimização contínua do consumo em cloud.
                  </p>
                  <div className="bg-gradient-to-br from-card to-card/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-accent/20 shadow-xl backdrop-blur-sm">
                    <h4 className="text-lg sm:text-xl font-semibold text-accent mb-4 sm:mb-6 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      Você vai aprender:
                    </h4>
                    <ul className="space-y-2.5 sm:space-y-3 md:space-y-4">
                      <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                        <span className="text-accent mt-0.5 sm:mt-1 text-lg sm:text-xl font-bold">•</span>
                        <span>Fundamentos de FinOps e modelos operacionais</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                        <span className="text-accent mt-0.5 sm:mt-1 text-lg sm:text-xl font-bold">•</span>
                        <span>Análise de custos e identificação de desperdícios</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                        <span className="text-accent mt-0.5 sm:mt-1 text-lg sm:text-xl font-bold">•</span>
                        <span>Estratégias de otimização em tempo real</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                        <span className="text-accent mt-0.5 sm:mt-1 text-lg sm:text-xl font-bold">•</span>
                        <span>KPIs e métricas para governança financeira</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Data */}
            <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-32">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-block px-2.5 sm:px-3 py-1 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                    Data Engineering
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
                    Data
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    Domine o ciclo de vida dos dados — da ingestão à análise. 
                    Ideal para times que desejam construir pipelines eficientes, governar dados com segurança e extrair insights de verdade.
                  </p>
                  <div className="bg-gradient-to-br from-card to-card/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-primary/20 shadow-xl backdrop-blur-sm">
                    <h4 className="text-lg sm:text-xl font-semibold text-primary mb-4 sm:mb-6 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      Você vai aprender:
                    </h4>
                    <ul className="space-y-2.5 sm:space-y-3 md:space-y-4">
                      <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                        <span className="text-primary mt-0.5 sm:mt-1 text-lg sm:text-xl font-bold">•</span>
                        <span>Arquiteturas modernas de dados (Data Lakes, Lakehouse, etc.)</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                        <span className="text-primary mt-0.5 sm:mt-1 text-lg sm:text-xl font-bold">•</span>
                        <span>Ingestão e processamento em tempo real</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                        <span className="text-primary mt-0.5 sm:mt-1 text-lg sm:text-xl font-bold">•</span>
                        <span>Governança e catalogação com AWS Glue, Lake Formation</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                        <span className="text-primary mt-0.5 sm:mt-1 text-lg sm:text-xl font-bold">•</span>
                        <span>Ferramentas de visualização e análise (QuickSight, Athena)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2 relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
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
            <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-32">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
                <div className="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
                  <img 
                    src={aiImage} 
                    alt="Inteligência Artificial"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/70 to-transparent"></div>
                </div>
                <div>
                  <div className="inline-block px-2.5 sm:px-3 py-1 bg-accent/10 rounded-full text-accent text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                    Machine Learning
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-3 sm:mb-4">
                    AI (Artificial Intelligence)
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    Prepare sua equipe para aplicar inteligência artificial com propósito e escalabilidade. 
                    Da modelagem ao deployment, passando por boas práticas de MLOps.
                  </p>
                  <div className="bg-gradient-to-br from-card to-card/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-accent/20 shadow-xl backdrop-blur-sm">
                    <h4 className="text-lg sm:text-xl font-semibold text-accent mb-4 sm:mb-6 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      Você vai aprender:
                    </h4>
                    <ul className="space-y-2.5 sm:space-y-3 md:space-y-4">
                      <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                        <span className="text-accent mt-0.5 sm:mt-1 text-lg sm:text-xl font-bold">•</span>
                        <span>Fundamentos de machine learning e deep learning</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                        <span className="text-accent mt-0.5 sm:mt-1 text-lg sm:text-xl font-bold">•</span>
                        <span>Como treinar, validar e implantar modelos na AWS</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                        <span className="text-accent mt-0.5 sm:mt-1 text-lg sm:text-xl font-bold">•</span>
                        <span>Uso de serviços como SageMaker, Bedrock, Rekognition</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                        <span className="text-accent mt-0.5 sm:mt-1 text-lg sm:text-xl font-bold">•</span>
                        <span>Governança e monitoramento de modelos em produção</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* GaaS */}
            <div className="mb-0">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-block px-2.5 sm:px-3 py-1 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                    Governance & Security
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
                    GaaS (Governança como Serviço)
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    Governança não precisa ser um freio — pode ser um acelerador. 
                    Essa trilha mostra como estruturar governança desde o início, com automações e políticas que garantem segurança, compliance e agilidade.
                  </p>
                  <div className="bg-gradient-to-br from-card to-card/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-primary/20 shadow-xl backdrop-blur-sm">
                    <h4 className="text-lg sm:text-xl font-semibold text-primary mb-4 sm:mb-6 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      Você vai aprender:
                    </h4>
                    <ul className="space-y-2.5 sm:space-y-3 md:space-y-4">
                      <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                        <span className="text-primary mt-0.5 sm:mt-1 text-lg sm:text-xl font-bold">•</span>
                        <span>Estruturação de landing zones com boas práticas</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                        <span className="text-primary mt-0.5 sm:mt-1 text-lg sm:text-xl font-bold">•</span>
                        <span>Controle de acessos, identidades e políticas (IAM, SCPs)</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                        <span className="text-primary mt-0.5 sm:mt-1 text-lg sm:text-xl font-bold">•</span>
                        <span>Monitoramento, auditoria e respostas a incidentes</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                        <span className="text-primary mt-0.5 sm:mt-1 text-lg sm:text-xl font-bold">•</span>
                        <span>Automação de compliance com ferramentas nativas da AWS</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2 relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
        <div className="absolute top-1/4 right-0 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Formato de Aprendizado
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Na prática, é onde a inovação acontece.
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                Com os Immersion Days, sua equipe sai do modo "teoria" para o modo "execução".
              </p>
            </div>

            <div className="bg-gradient-to-br from-card via-card to-card/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl border border-border/20 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-accent/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-3 sm:gap-4 mb-8 sm:mb-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                      Formato Presencial
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground">
                      Em sua empresa ou em nossos espaços parceiros
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                  <div className="bg-gradient-to-br from-background/80 to-background/40 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                    <div className="text-4xl sm:text-5xl font-bold text-primary mb-2 sm:mb-3">01</div>
                    <h4 className="font-semibold text-foreground mb-1.5 sm:mb-2 text-base sm:text-lg">Experimentar soluções</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">Mais do que aprender, coloque a mão na massa com casos reais</p>
                  </div>
                  <div className="bg-gradient-to-br from-background/80 to-background/40 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
                    <div className="text-4xl sm:text-5xl font-bold text-accent mb-2 sm:mb-3">02</div>
                    <h4 className="font-semibold text-foreground mb-1.5 sm:mb-2 text-base sm:text-lg">Prototipar ideias</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">Transforme conceitos em protótipos funcionais rapidamente</p>
                  </div>
                  <div className="bg-gradient-to-br from-background/80 to-background/40 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg sm:col-span-2 lg:col-span-1">
                    <div className="text-4xl sm:text-5xl font-bold text-primary mb-2 sm:mb-3">03</div>
                    <h4 className="font-semibold text-foreground mb-1.5 sm:mb-2 text-base sm:text-lg">Plano de ação claro</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">Saia com um roadmap prático para implementar na sua empresa</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-primary/20">
                  <p className="text-base sm:text-lg text-center text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground block mb-1 sm:mb-2">Aprendizado aplicado.</span> 
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