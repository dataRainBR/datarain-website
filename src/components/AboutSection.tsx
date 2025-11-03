import { Button } from "./ui/button";
import aboutImage from "@/assets/about-datarain.jpg";

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background"></div>
      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-semibold mb-2">
                Quem Somos
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Sobre a DataRain
              </h2>
              <div className="w-16 h-1 bg-accent rounded-full"></div>
            </div>
            
            <div className="space-y-4 md:space-y-5 text-foreground">
              <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                A DataRain é a parceira estratégica para empresas em tecnologia, 
                entregando soluções em cloud, dados e inteligência artificial 
                com segurança, agilidade e foco em resultados.
              </p>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                Trabalhamos lado a lado com nossos clientes para impulsionar 
                inovação, acelerar a tomada de decisões e apoiar o crescimento 
                dos negócios.
              </p>
            </div>
            
            <Button variant="hero" size="lg" className="mt-4 md:mt-6 sm:text-lg">
              Conheça Nossa História
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