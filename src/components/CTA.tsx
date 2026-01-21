import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground leading-tight">
          Pronto para transformar<br />seu negócio?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Descubra como a dataRain pode ajudar sua empresa a alcançar novos patamares em tecnologia e inovação.
        </p>
        <div className="flex justify-center">
          <Button variant="accent" size="xl" asChild>
            <a href="/fale-conosco">Agendar Demonstração</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;