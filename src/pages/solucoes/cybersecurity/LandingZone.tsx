import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import landingZoneHero from "@/assets/solutions/landing-zone-hero.jpg";

const LandingZone = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section with Image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${landingZoneHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-24 lg:py-28 pt-32 md:pt-36">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6 text-foreground">
              Landing Zone
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Configuração segura e escalável de ambientes cloud desde o início
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-gradient-to-b from-background via-background/95 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A <strong>Landing Zone</strong> é uma solução projetada para criar um ambiente de nuvem seguro e escalável desde o início. A Landing Zone estabelece uma base segura e bem arquitetada na AWS, garantindo conformidade com as melhores práticas de segurança e regulamentações específicas. Esta solução é ideal para organizações que desejam implementar uma infraestrutura de nuvem com segurança incorporada desde a concepção, facilitando a expansão segura e a gestão eficiente de seus recursos na nuvem.
              </p>
            </div>

            {/* Funcionalidades Chave */}
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border/20">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Funcionalidades Chave</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-primary">Configuração Inicial</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Implementação de uma estrutura de segurança robusta, incluindo controle de acesso, redes segmentadas, e políticas de segurança. Configuração de serviços de monitoramento e auditoria. Criação de unidades lógicas segregadas para armazenamento de logs históricos, e outras estratégias de segurança à nível de organização.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-primary">Governança e Conformidade</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Utilização de serviços nativos da AWS para garantir conformidade contínua com normas e regulamentações de segurança.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-primary">Controles de Segurança em Nuvem</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Possibilidade da ativação dos principais serviços que vão aumentar o grau de maturidade de segurança em nuvem da estrutura de contas em AWS.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-primary">Gestão Centralizada de Identidades e Acessos</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Implementação de gestão centralizada de identidades e políticas de acesso. Possibilidade de federação com o provedor de identidades para concentrar a criação de usuários em um só lugar.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefícios */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Benefícios</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Configuração de Segurança Robusta</h3>
                      <p className="text-sm text-muted-foreground">
                        A solução estabelece uma base segura desde o início, garantindo que todos os recursos na nuvem sejam configurados de acordo com as melhores práticas de segurança.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Automação e Eficiência</h3>
                      <p className="text-sm text-muted-foreground">
                        Utilização de ferramentas de infraestrutura como código (IaC) para automatizar a configuração e monitoramento de segurança, aumentando a eficiência e reduzindo erros humanos.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Conformidade Contínua</h3>
                      <p className="text-sm text-muted-foreground">
                        Ferramentas e processos que garantem a conformidade contínua com normas e regulamentações de segurança, minimizando riscos de penalidades.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Monitoramento Proativo</h3>
                      <p className="text-sm text-muted-foreground">
                        Monitoramento contínuo e auditoria centralizada para identificar e responder rapidamente a incidentes de segurança.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Gestão Centralizada</h3>
                      <p className="text-sm text-muted-foreground">
                        Implementação de AWS IAM Identity Center e AWS Organizations para gestão centralizada de acessos, simplificando a administração e aumentando a segurança.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <CTA />
      <Footer />
    </div>
  );
};

export default LandingZone;