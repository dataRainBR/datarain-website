import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SolutionHero from "@/components/solutions/SolutionHero";
import { ShieldCheck, CheckCircle2, Lock, Settings, Eye, Target, Layers, Server } from "lucide-react";

const LandingZone = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      <SolutionHero
        pillarLabel="Cybersecurity"
        pillarIcon={ShieldCheck}
        title="Landing"
        highlightedText="Zone"
        description="Configuração segura e escalável de ambientes cloud desde o início. A Landing Zone estabelece uma base segura e bem arquitetada na AWS, garantindo conformidade com as melhores práticas."
        pillarColor="#e63946"
      />

      {/* Features Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#e63946]/10 rounded-full px-4 py-2 mb-4">
              <Layers className="w-4 h-4 text-[#e63946]" />
              <span className="text-sm font-medium text-[#e63946]">Recursos</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Funcionalidades Chave</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fundação segura para sua infraestrutura cloud
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { icon: Lock, title: "Configuração Inicial", desc: "Implementação de estrutura de segurança robusta, incluindo controle de acesso e redes segmentadas." },
              { icon: Settings, title: "Governança e Conformidade", desc: "Serviços nativos da AWS para garantir conformidade contínua com normas e regulamentações." },
              { icon: Eye, title: "Gestão Centralizada", desc: "Gestão centralizada de identidades e políticas de acesso com federação." }
            ].map((item, index) => (
              <div key={index} className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-[#e63946]/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e63946]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#e63946] to-[#c5303c] rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#e63946] transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + Controls Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Benefits */}
              <div className="bg-gradient-to-br from-[#e63946]/5 to-[#e63946]/10 rounded-3xl p-8 border border-[#e63946]/20">
                <div className="inline-flex items-center gap-2 bg-[#e63946]/10 rounded-full px-4 py-2 mb-6">
                  <Target className="w-4 h-4 text-[#e63946]" />
                  <span className="text-sm font-medium text-[#e63946]">Vantagens</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">Benefícios</h2>
                <div className="space-y-5">
                  {[
                    { title: "Configuração de Segurança Robusta", desc: "Base segura desde o início com as melhores práticas de segurança." },
                    { title: "Automação e Eficiência", desc: "Ferramentas de IaC para automatizar configuração e reduzir erros." },
                    { title: "Conformidade Contínua", desc: "Ferramentas que garantem conformidade com normas e regulamentações." },
                    { title: "Monitoramento Proativo", desc: "Monitoramento contínuo e auditoria centralizada." },
                    { title: "Gestão Centralizada", desc: "AWS IAM Identity Center e Organizations para gestão simplificada." }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#e63946] mt-2.5 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Controls */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[#e63946]/10 rounded-full px-4 py-2 mb-6">
                  <Server className="w-4 h-4 text-[#e63946]" />
                  <span className="text-sm font-medium text-[#e63946]">Controles</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">Controles de Segurança</h2>
                <div className="bg-card rounded-2xl p-8 border border-border/50">
                  <div className="space-y-4">
                    {[
                      "Controle de acesso granular e políticas de segurança centralizadas",
                      "Redes segmentadas e monitoramento contínuo",
                      "Configuração de serviços de auditoria",
                      "Unidades lógicas segregadas para logs históricos",
                      "Ativação dos principais serviços de segurança AWS"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#e63946] flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
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

export default LandingZone;
