import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const FaleConosco = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@datarain.com.br",
      description: "Respondemos em até 24h úteis"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (11) 3456-7890",
      description: "Seg a Sex, 9h às 18h"
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "São Paulo, SP",
      description: "Brasil"
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Segunda a Sexta",
      description: "9h às 18h (Horário de Brasília)"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 sm:-top-32 sm:-right-32 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 sm:-bottom-32 sm:-left-32 w-[350px] sm:w-[500px] md:w-[700px] h-[350px] sm:h-[500px] md:h-[700px] bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] md:w-[500px] h-[200px] sm:h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24 pt-40 sm:pt-44 md:pt-48 lg:pt-52">
          <div className="max-w-5xl mx-auto text-center">
            <div className="backdrop-blur-sm bg-card/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-border/20 shadow-2xl">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Contato</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 text-foreground">
                Fale Conosco
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Estamos prontos para entender seus desafios e apresentar as melhores soluções para sua empresa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              
              {/* Form Section */}
              <div className="order-2 lg:order-1">
                <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-border/20 shadow-xl">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Envie sua mensagem
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Preencha o formulário abaixo e nossa equipe entrará em contato em breve.
                  </p>
                  
                  {/* RD Station Form Placeholder */}
                  <div 
                    id="rd-station-form" 
                    className="min-h-[400px] bg-muted/30 rounded-xl border-2 border-dashed border-border flex items-center justify-center"
                  >
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-muted-foreground text-lg font-medium mb-2">
                        Formulário RD Station
                      </p>
                      <p className="text-sm text-muted-foreground/70">
                        Cole aqui o código embed do RD Station
                      </p>
                    </div>
                  </div>
                  
                  {/* Uncomment and add your RD Station script below */}
                  {/* 
                  <script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></script>
                  <script type="text/javascript">
                    new RDStationForms('YOUR-FORM-ID', 'YOUR-PUBLIC-TOKEN').createForm();
                  </script>
                  */}
                </div>
              </div>

              {/* Contact Info Section */}
              <div className="order-1 lg:order-2">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                      Informações de Contato
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      Escolha o canal mais conveniente para você ou preencha o formulário ao lado.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <div 
                          key={index}
                          className="bg-card rounded-2xl p-6 border border-border/20 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-foreground mb-1">
                                {info.title}
                              </h3>
                              <p className="text-primary font-medium">
                                {info.value}
                              </p>
                              <p className="text-sm text-muted-foreground mt-1">
                                {info.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Additional CTA */}
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 md:p-8 border border-primary/20">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Precisa de atendimento urgente?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Para clientes com contrato ativo, acesse nosso portal de suporte dedicado.
                    </p>
                    <a 
                      href="/servicos/suporte" 
                      className="inline-flex items-center text-primary font-semibold hover:underline"
                    >
                      Acessar Suporte →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FaleConosco;