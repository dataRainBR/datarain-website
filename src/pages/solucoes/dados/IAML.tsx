import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  TrendingUp, 
  Lightbulb, 
  Target,
  Cpu,
  Database,
  Server,
  Shield,
  Zap,
  BarChart3,
  Users,
  Sparkles,
  CheckCircle2
} from "lucide-react";

const IAML = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-[700px] h-[700px] bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-24 lg:py-28 pt-40 sm:pt-44 md:pt-48 lg:pt-52">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Brain className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">GenAI e ML</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-foreground">
              Inteligência Artificial e <br />
              <span className="text-primary">Machine Learning</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              A Inteligência Artificial (IA) e o Machine Learning (ML) são duas das práticas mais transformadoras do nosso tempo. 
              Elas têm o potencial de revolucionar a forma como as empresas operam, desde a tomada de decisões até o desenvolvimento de novos produtos e serviços.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/fale-conosco">Fale com Especialista</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Data-Driven Section */}
      <section className="py-16 bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">A Era Data-Driven</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Em um mundo cada vez mais data-driven, as empresas que exploram eficazmente o potencial dos dados ganham uma vantagem competitiva notável. 
                    Essa abordagem não apenas atende às demandas do mercado, mas também antecipa tendências, identifica oportunidades e impulsiona a inovação.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Uma pesquisa conduzida pela Harvard Business Review revelou que, entre 1.000 empresas entrevistadas, aproximadamente 48% afirmaram ter obtido êxito na redução de custos ao adotar uma cultura orientada a dados em suas operações.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AWS Solutions Section */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções de GenAI e ML na AWS</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              As soluções de GenAI e ML na AWS ajudam empresas de todos os tamanhos e setores a transformar dados em insights acionáveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Decisões Mais Informadas</h3>
              <p className="text-muted-foreground">
                As soluções de GenAI e ML podem ajudar as empresas a tomar decisões mais informadas, baseadas em dados.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Otimização de Operações</h3>
              <p className="text-muted-foreground">
                Ajudar as empresas a otimizarem suas operações, reduzindo custos e aumentando a eficiência.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Novos Produtos e Serviços</h3>
              <p className="text-muted-foreground">
                Desenvolvem novos produtos e serviços que atendam às necessidades dos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios da Solução</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border/50">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Transformar dados em conhecimentos acionáveis, aprimorando a tomada de decisões e impulsionando a eficiência operacional.
                </p>
              </div>
              <div className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border/50">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Ao montar esses modelos na plataforma AWS, garantindo produtos escaláveis, on-demand, seguros e de baixo custo.
                </p>
              </div>
              <div className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border/50">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Extrair o máximo valor dos dados gerados por sua plataforma e aplicativos, descobrindo oportunidades que impulsionarão o crescimento de negócios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Descomplicando GenAI e ML */}
      <section className="py-16 bg-gradient-to-b from-card/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Descomplicando GenAI e ML</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* IA Card */}
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Brain className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Inteligência Artificial (IA)</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                A IA refere-se à capacidade de sistemas computacionais realizar tarefas que normalmente exigiriam inteligência humana, incluindo aprendizado, raciocínio e interação com o ambiente.
              </p>
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Aprendizado por Reforço</h4>
                  <p className="text-sm text-muted-foreground">
                    Um tipo de ML que permite que os sistemas aprendam com seus próprios erros. É usado em jogos, robótica e controle de tráfego.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">IA Generativa</h4>
                  <p className="text-sm text-muted-foreground">
                    Um tipo de ML que pode criar novos dados, como imagens, texto e música. É usado em marketing, design e entretenimento.
                  </p>
                </div>
              </div>
            </div>

            {/* ML Card */}
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Cpu className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Machine Learning (ML)</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                O ML, um subconjunto da IA, concentra-se em desenvolver algoritmos e modelos que aprendem e melhoram a partir de dados, sem programação explícita. Ele utiliza diferentes abordagens, como aprendizado supervisionado e não supervisionado.
              </p>
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Deep Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Um tipo de ML que usa redes neurais artificiais para aprender. É usado em visão computacional, reconhecimento de fala e tradução automática.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Gen AI</h4>
                  <p className="text-sm text-muted-foreground">
                    A IA busca imitar funções humanas, enquanto o ML é uma técnica específica dentro da IA que permite a aprendizagem autônoma a partir de dados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Casos de Uso</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Melhoria da tomada de decisões */}
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Melhoria da Tomada de Decisões</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Previsão de demanda:</strong> Garantir a quantidade certa de estoque e evitar desperdício</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Risco de crédito:</strong> Avaliar o risco de crédito e reduzir inadimplência</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Retenção de clientes:</strong> Identificar clientes em risco de cancelamento</span>
                </li>
              </ul>
            </div>

            {/* Otimização de operações */}
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Otimização de Operações</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Automatização de tarefas:</strong> Liberar funcionários para tarefas mais estratégicas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Melhoria da eficiência:</strong> Custos reduzidos e melhor desempenho</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Prevenção de fraudes:</strong> Detectar fraudes e proteger negócios</span>
                </li>
              </ul>
            </div>

            {/* Desenvolvimento de novos produtos */}
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Novos Produtos e Serviços</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Geração de ideias:</strong> Permanecer à frente da concorrência</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Teste de produtos:</strong> Melhorar a probabilidade de sucesso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Personalização:</strong> Maior satisfação do cliente e aumento das vendas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos e Componentes */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Módulos e Componentes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              GenAI e ML são baseadas na plataforma AWS e incluem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-card rounded-2xl p-8 border border-border/50">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Estatística Avançada</h3>
              <p className="text-sm text-muted-foreground">Técnicas de estatística para explorar e entender dados</p>
            </div>
            <div className="text-center bg-card rounded-2xl p-8 border border-border/50">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Análise de Dados</h3>
              <p className="text-sm text-muted-foreground">Transformar dados em entendimentos</p>
            </div>
            <div className="text-center bg-card rounded-2xl p-8 border border-border/50">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Modelos Preditivos</h3>
              <p className="text-sm text-muted-foreground">Criar modelos que podem prever resultados futuros</p>
            </div>
          </div>
        </div>
      </section>

      {/* Arquitetura Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Arquitetura da Solução</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Potencializando AI & ML na AWS com uma arquitetura moldada com base nos requisitos específicos de cada projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold">Treinamento de Modelos</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                O Amazon SageMaker fornece uma plataforma completa para o treinamento de modelos de machine learning com interface simplificada.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold">Armazenamento de Dados</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                O Amazon S3 para armazenar dados de forma eficiente, garantindo acesso rápido e confiável durante o treinamento e a inferência.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Server className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold">Instâncias Computacionais</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                O EC2 para instâncias computacionais permite que a capacidade de processamento seja ajustada conforme necessário.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold">Integração AWS</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Integração com Amazon RDS para bancos de dados, Amazon EMR para processamento de big data, e AWS Lambda para execução serverless.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold">Rede Segura</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Amazon VPC (Virtual Private Cloud) para isolamento e segurança de recursos, garantindo proteção de dados e processos.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold">Escalabilidade</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Arquitetura adaptável e escalável que permite soluções personalizadas, alinhadas com os objetivos de cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Público-alvo */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Público-Alvo</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Este segmento é destinado a empresas que aspiram à inovação por meio de modelos data-driven. 
                    Seja na esfera tecnológica, como startups, ou em qualquer outro setor, o enfoque aqui é proporcionar uma compreensão mais profunda sobre como alavancar negócios e aprimorar decisões através da geração de valor dos dados, com o suporte de Artificial Intelligence e Machine Learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforme Dados em Estratégias Vitoriosas
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              A Inteligência Artificial e o Machine Learning são tecnologias poderosas que podem ajudar a transformar dados em informação valiosa. 
              A dataRain oferece soluções abrangentes e personalizadas que permitem às empresas e setores aproveitarem o poder dos dados para impulsionar o crescimento e a inovação.
            </p>
            <Button size="lg" asChild>
              <a href="/fale-conosco">Fale com Especialista</a>
            </Button>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default IAML;