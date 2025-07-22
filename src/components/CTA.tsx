import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl mb-10 text-muted-foreground">
            Entre em contato conosco e descubra como a DataRain pode impulsionar
            sua empresa com soluções tecnológicas inovadoras.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Agende uma Demonstração
            </Button>
            <Button 
              variant="outline" 
              size="xl"
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;