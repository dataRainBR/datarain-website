import { CloudIcon, DatabaseIcon, BrainCircuitIcon, ShieldCheckIcon } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { Button } from "./ui/button";

const ServicesSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-accent/5 to-white"></div>
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-semibold mb-4">
            Expertise
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
            Nossas Soluções
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Oferecemos soluções completas em tecnologia para transformar e 
            impulsionar seu negócio no ambiente digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-12">
          <ServiceCard 
            title="Cloud" 
            description="Soluções em nuvem escaláveis e seguras para otimizar recursos e acelerar a inovação."
            icon={<CloudIcon className="h-6 w-6 md:h-7 md:w-7" />}
          />
          
          <ServiceCard 
            title="Dados" 
            description="Estratégias de dados que transformam informações em insights valiosos para seu negócio."
            icon={<DatabaseIcon className="h-6 w-6 md:h-7 md:w-7" />}
          />
          
          <ServiceCard 
            title="Inteligência Artificial" 
            description="Soluções de IA que automatizam processos e potencializam a tomada de decisões."
            icon={<BrainCircuitIcon className="h-6 w-6 md:h-7 md:w-7" />}
          />
          
          <ServiceCard 
            title="Segurança" 
            description="Proteção abrangente para garantir a integridade dos seus dados e aplicações."
            icon={<ShieldCheckIcon className="h-6 w-6 md:h-7 md:w-7" />}
          />
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="sm:text-lg">
            Ver Todas as Soluções
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;