import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
      <div className="absolute top-1/4 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="backdrop-blur-sm bg-card/80 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 border border-border/20 shadow-2xl">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-semibold mb-6">
              Vamos Conversar
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-primary">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 lg:mb-12 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Entre em contato conosco e descubra como a DataRain pode impulsionar
              sua empresa com soluções tecnológicas inovadoras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Button variant="hero" size="lg" className="sm:text-lg">
                Agende uma Demonstração
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                className="!bg-primary/10 !text-primary hover:!bg-primary/20 sm:text-lg"
              >
                Entre em Contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;