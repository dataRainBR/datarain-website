import { useEffect } from "react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

declare global {
  interface Window {
    RDStationForms: new (formId: string, token: string) => { createForm: () => void };
  }
}

const FaleConosco = () => {
  useEffect(() => {
    // Load RD Station script
    const script = document.createElement('script');
    script.src = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
    script.async = true;
    script.onload = () => {
      // Initialize form after script loads
      if (window.RDStationForms) {
        new window.RDStationForms('site-datarain-73a5ac52fca43b4abd57', 'null').createForm();
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

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

      {/* Form Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-border/20 shadow-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Envie sua mensagem
              </h2>
              <p className="text-muted-foreground mb-8 text-center">
                Preencha o formulário abaixo e nossa equipe entrará em contato em breve.
              </p>
              
              {/* RD Station Form Container */}
              <div 
                role="main"
                id="site-datarain-73a5ac52fca43b4abd57" 
                className="min-h-[300px]"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FaleConosco;