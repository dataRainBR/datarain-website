import { Button } from "./ui/button";
import aboutImage from "@/assets/about-datarain.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold">
                Quem Somos
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Sobre a DataRain
              </h2>
            </div>
            
            <div className="space-y-6 text-foreground">
              <p className="text-lg md:text-xl leading-relaxed">
                A DataRain é a parceira estratégica para empresas em tecnologia, 
                entregando soluções em IA e Dados, Cybersecurity e Cloud
                com agilidade e foco em resultados.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Trabalhamos lado a lado com nossos clientes para impulsionar 
                inovação, acelerar a tomada de decisões e apoiar o crescimento 
                dos negócios.
              </p>
            </div>
            
            <Button variant="default" size="lg" asChild>
              <a href="/quem-somos">Conheça Nossa História</a>
            </Button>
          </div>
          
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-border/20">
              <img 
                src={aboutImage} 
                alt="Equipe DataRain - Especialistas em Cloud, IA e Tecnologia"
                className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;