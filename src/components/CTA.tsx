import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Entre em contato conosco e descubra como a DataRain pode impulsionar
            sua empresa com soluções tecnológicas inovadoras.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl">
              Agende uma Demonstração
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-white/10 border-white/20 hover:bg-white/20"
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