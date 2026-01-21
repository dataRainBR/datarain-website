import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SolutionHero from "@/components/solutions/SolutionHero";
import { Lightbulb, CheckCircle2, Database, Shield, Lock, BarChart3, Users, Layers, Server, Zap } from "lucide-react";

const ArquiteturaDados = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      <SolutionHero
        pillarLabel="GenAI e Dados"
        pillarIcon={Lightbulb}
        title="Arquitetura e Engenharia de"
        highlightedText="Dados"
        description="A chave para o sucesso em uma economia baseada em dados é ter as informações certas, no momento certo, nas mãos das pessoas certas."
        pillarColor="#3893af"
      />

      {/* Challenge + Solution Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[#3893af]/10 rounded-full px-4 py-2 mb-6">
                  <Database className="w-4 h-4 text-[#3893af]" />
                  <span className="text-sm font-medium text-[#3893af]">O Desafio</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Gerenciar dados em escala
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Com o crescimento exponencial no volume e variedade de dados, gerenciá-los pode se tornar um desafio complexo. 
                  É aí que entra a Arquitetura e Governança de Dados.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nossa abordagem estruturada ajuda as organizações a coletar, armazenar, gerenciar, compartilhar e utilizar dados 
                  de forma eficiente e segura através de uma combinação de pessoas, processos e tecnologia.
                </p>
              </div>

              {/* AWS Services */}
              <div className="bg-gradient-to-br from-[#3893af]/5 to-[#3893af]/10 rounded-3xl p-8 border border-[#3893af]/20">
                <div className="inline-flex items-center gap-2 bg-[#3893af]/10 rounded-full px-4 py-2 mb-6">
                  <Server className="w-4 h-4 text-[#3893af]" />
                  <span className="text-sm font-medium text-[#3893af]">Tecnologias</span>
                </div>
                <h3 className="text-xl font-bold mb-6 text-foreground">Serviços AWS</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Amazon S3",
                    "AWS Lake Formation",
                    "Amazon Athena",
                    "AWS Glue"
                  ].map((service, index) => (
                    <div key={index} className="bg-card/60 backdrop-blur-sm rounded-xl p-4 border border-border/30 text-center">
                      <span className="font-semibold text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  Catalogação automatizada, taxonomia centralizada, controle de acesso granular e monitoramento contínuo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-[#3893af]/10 rounded-full px-4 py-2 mb-4">
                <Zap className="w-4 h-4 text-[#3893af]" />
                <span className="text-sm font-medium text-[#3893af]">Vantagens</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Os benefícios são significativos</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Segurança Aprimorada", desc: "Acesso controlado e proteção de dados sensíveis" },
                { icon: Lock, title: "Conformidade Facilitada", desc: "Alinhamento com regulamentos de privacidade" },
                { icon: Layers, title: "Governança Centralizada", desc: "Políticas consistentes em toda a organização" },
                { icon: Users, title: "Democratização Responsável", desc: "Dados acessíveis para análise de forma segura" },
                { icon: BarChart3, title: "Qualidade e Integridade", desc: "Taxonomia unificada mantém a consistência" },
                { icon: Zap, title: "Eficiência Operacional", desc: "Automação do gerenciamento de dados" }
              ].map((item, index) => (
                <div key={index} className="group bg-card rounded-2xl p-6 border border-border/50 hover:border-[#3893af]/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#3893af]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#3893af]/20 transition-colors">
                    <item.icon className="w-6 h-6 text-[#3893af]" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Colaboração Interna", desc: "Linguagem comum aprimora o trabalho em equipe" },
                { title: "Rastreabilidade Completa", desc: "Auditoria e conformidade garantidas" },
                { title: "Redução de Custos", desc: "Eliminação de redundância e desperdício" },
                { title: "Escalabilidade Elástica", desc: "Infraestrutura que cresce com a demanda" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-card/50 rounded-xl p-5 border border-border/30">
                  <CheckCircle2 className="w-6 h-6 text-[#3893af] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#3893af]/5 to-[#3893af]/10 rounded-3xl p-8 md:p-12 border border-[#3893af]/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground text-center">
                Histórias de Sucesso
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-8">
                Já ajudamos companhias nos setores de serviços financeiros, saúde e agronegócio a liberar o poder dos seus dados. 
                Elas agora tomam melhores decisões, lançam novos produtos e servem melhor seus clientes.
              </p>
              <div className="text-center">
                <p className="text-lg font-semibold text-foreground">
                  Não perca mais tempo lutando para dar sentido aos seus dados.
                </p>
                <p className="text-[#3893af] font-bold text-xl mt-2">
                  Permita que nossa expertise libere seu potencial de transformação.
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

export default ArquiteturaDados;
