import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SolutionHero from "@/components/solutions/SolutionHero";
import { 
  Lightbulb, 
  Brain, 
  TrendingUp, 
  Target,
  Cpu,
  Database,
  Zap,
  BarChart3,
  Sparkles,
  CheckCircle2,
  Server,
  Shield
} from "lucide-react";

const IAML = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      <SolutionHero
        pillarLabel="GenAI e Dados"
        pillarIcon={Lightbulb}
        title="GenAI e"
        highlightedText="Machine Learning"
        description="A Inteligência Artificial e o Machine Learning são duas das práticas mais transformadoras do nosso tempo. Elas têm o potencial de revolucionar a forma como as empresas operam."
        pillarColor="#3893af"
      />

      {/* Data-Driven Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#3893af]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-8 h-8 text-[#3893af]" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">A Era Data-Driven</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Em um mundo cada vez mais data-driven, as empresas que exploram eficazmente o potencial dos dados ganham uma vantagem competitiva notável. 
                    Essa abordagem não apenas atende às demandas do mercado, mas também antecipa tendências, identifica oportunidades e impulsiona a inovação.
                  </p>
                  <div className="bg-[#3893af]/10 rounded-xl p-4 border border-[#3893af]/20">
                    <p className="text-foreground font-medium">
                      Uma pesquisa da Harvard Business Review revelou que <span className="text-[#3893af] font-bold">48% das empresas</span> obtiveram êxito na redução de custos ao adotar uma cultura orientada a dados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AWS Solutions Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#3893af]/10 rounded-full px-4 py-2 mb-4">
              <Server className="w-4 h-4 text-[#3893af]" />
              <span className="text-sm font-medium text-[#3893af]">Soluções AWS</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Soluções de GenAI e ML</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              As soluções de GenAI e ML na AWS ajudam empresas de todos os tamanhos e setores a transformar dados em insights acionáveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Target, title: "Decisões Mais Informadas", desc: "As soluções de GenAI e ML podem ajudar as empresas a tomar decisões mais informadas, baseadas em dados." },
              { icon: Zap, title: "Otimização de Operações", desc: "Ajudar as empresas a otimizarem suas operações, reduzindo custos e aumentando a eficiência." },
              { icon: Sparkles, title: "Novos Produtos e Serviços", desc: "Desenvolvem novos produtos e serviços que atendam às necessidades dos clientes." }
            ].map((item, index) => (
              <div key={index} className="group bg-card rounded-2xl p-8 border border-border/50 hover:border-[#3893af]/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="w-14 h-14 bg-[#3893af]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3893af]/20 transition-colors">
                  <item.icon className="w-7 h-7 text-[#3893af]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#3893af]/10 rounded-full px-4 py-2 mb-4">
                <CheckCircle2 className="w-4 h-4 text-[#3893af]" />
                <span className="text-sm font-medium text-[#3893af]">Benefícios</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios da Solução</h2>
            </div>

            <div className="space-y-4">
              {[
                "Transformar dados em conhecimentos acionáveis, aprimorando a tomada de decisões e impulsionando a eficiência operacional.",
                "Ao montar esses modelos na plataforma AWS, garantindo produtos escaláveis, on-demand, seguros e de baixo custo.",
                "Extrair o máximo valor dos dados gerados por sua plataforma e aplicativos, descobrindo oportunidades que impulsionarão o crescimento de negócios."
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border/50">
                  <CheckCircle2 className="w-6 h-6 text-[#3893af] flex-shrink-0 mt-1" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI vs ML Explanation */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#3893af]/10 rounded-full px-4 py-2 mb-4">
              <Brain className="w-4 h-4 text-[#3893af]" />
              <span className="text-sm font-medium text-[#3893af]">Conceitos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Descomplicando GenAI e ML</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* IA Card */}
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#3893af]/10 rounded-xl flex items-center justify-center">
                  <Brain className="w-7 h-7 text-[#3893af]" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Inteligência Artificial (IA)</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                A IA refere-se à capacidade de sistemas computacionais realizar tarefas que normalmente exigiriam inteligência humana, incluindo aprendizado, raciocínio e interação com o ambiente.
              </p>
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-foreground">Aprendizado por Reforço</h4>
                  <p className="text-sm text-muted-foreground">
                    Um tipo de ML que permite que os sistemas aprendam com seus próprios erros. É usado em jogos, robótica e controle de tráfego.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-foreground">IA Generativa</h4>
                  <p className="text-sm text-muted-foreground">
                    Um tipo de ML que pode criar novos dados, como imagens, texto e música. É usado em marketing, design e entretenimento.
                  </p>
                </div>
              </div>
            </div>

            {/* ML Card */}
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#3893af]/10 rounded-xl flex items-center justify-center">
                  <Cpu className="w-7 h-7 text-[#3893af]" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Machine Learning (ML)</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                O ML, um subconjunto da IA, concentra-se em desenvolver algoritmos e modelos que aprendem e melhoram a partir de dados, sem programação explícita.
              </p>
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-foreground">Deep Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Um tipo de ML que usa redes neurais artificiais para aprender. É usado em visão computacional, reconhecimento de fala e tradução automática.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-foreground">Gen AI</h4>
                  <p className="text-sm text-muted-foreground">
                    A IA busca imitar funções humanas, enquanto o ML é uma técnica específica dentro da IA que permite a aprendizagem autônoma a partir de dados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#3893af]/10 rounded-full px-4 py-2 mb-4">
              <Target className="w-4 h-4 text-[#3893af]" />
              <span className="text-sm font-medium text-[#3893af]">Aplicações</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Casos de Uso</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: BarChart3,
                title: "Melhoria da Tomada de Decisões",
                items: [
                  { label: "Previsão de demanda", desc: "Garantir a quantidade certa de estoque e evitar desperdício" },
                  { label: "Risco de crédito", desc: "Avaliar o risco de crédito e reduzir inadimplência" },
                  { label: "Retenção de clientes", desc: "Identificar clientes em risco de cancelamento" }
                ]
              },
              {
                icon: Zap,
                title: "Otimização de Operações",
                items: [
                  { label: "Automatização de tarefas", desc: "Liberar funcionários para tarefas mais estratégicas" },
                  { label: "Melhoria da eficiência", desc: "Custos reduzidos e melhor desempenho" },
                  { label: "Prevenção de fraudes", desc: "Detectar fraudes e proteger negócios" }
                ]
              },
              {
                icon: Sparkles,
                title: "Novos Produtos e Serviços",
                items: [
                  { label: "Geração de ideias", desc: "Permanecer à frente da concorrência" },
                  { label: "Teste de produtos", desc: "Melhorar a probabilidade de sucesso" },
                  { label: "Personalização", desc: "Maior satisfação do cliente e aumento das vendas" }
                ]
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 border border-border/50">
                <div className="w-14 h-14 bg-[#3893af]/10 rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-7 h-7 text-[#3893af]" />
                </div>
                <h3 className="text-xl font-bold mb-6 text-foreground">{useCase.title}</h3>
                <div className="space-y-4">
                  {useCase.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-[#3893af] font-bold">•</span>
                      <div>
                        <span className="font-semibold text-foreground">{item.label}:</span>{" "}
                        <span className="text-muted-foreground text-sm">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#3893af]/10 rounded-full px-4 py-2 mb-4">
              <Database className="w-4 h-4 text-[#3893af]" />
              <span className="text-sm font-medium text-[#3893af]">Componentes</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Módulos e Componentes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              GenAI e ML são baseadas na plataforma AWS e incluem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: BarChart3, title: "Estatística Avançada", desc: "Técnicas de estatística para explorar e entender dados" },
              { icon: Database, title: "Análise de Dados", desc: "Transformar dados em entendimentos" },
              { icon: TrendingUp, title: "Machine Learning", desc: "Modelos preditivos e automação inteligente" }
            ].map((module, index) => (
              <div key={index} className="text-center bg-card rounded-2xl p-8 border border-border/50">
                <div className="w-16 h-16 bg-[#3893af]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <module.icon className="w-8 h-8 text-[#3893af]" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{module.title}</h3>
                <p className="text-sm text-muted-foreground">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default IAML;
