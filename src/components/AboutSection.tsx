import { Button } from "./ui/button";

const AboutSection = () => {
  return (
    <section className="pt-16 pb-8 md:pt-20 md:pb-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight">
                Sobre a DataRain
              </h2>
              <div className="w-12 h-1 bg-accent rounded-full"></div>
            </div>
            
            <div className="space-y-4 text-foreground">
              <p className="text-base md:text-lg leading-relaxed">
                A DataRain é a parceira estratégica para empresas em tecnologia, 
                entregando soluções em cloud, dados e inteligência artificial 
                com segurança, agilidade e foco em resultados.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Trabalhamos lado a lado com nossos clientes para impulsionar 
                inovação, acelerar a tomada de decisões e apoiar o crescimento 
                dos negócios.
              </p>
            </div>
            
            <Button variant="default" size="lg" className="mt-8">
              Conheça Nossa História
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-muted/50 rounded-2xl border-2 border-dashed border-border/30 aspect-square flex items-center justify-center hover:bg-muted/70 transition-colors">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-muted rounded-lg flex items-center justify-center">
                  <svg 
                    className="w-8 h-8 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                    />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  Placeholder para Imagem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;