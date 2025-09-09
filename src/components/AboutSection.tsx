import { Button } from "./ui/button";
import aboutImage from "@/assets/about-datarain.jpg";

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
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border/20">
              <img 
                src={aboutImage} 
                alt="Equipe DataRain - Especialistas em Cloud, IA e Tecnologia"
                className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;