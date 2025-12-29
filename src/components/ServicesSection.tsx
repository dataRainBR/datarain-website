import { CloudIcon, DatabaseIcon, BrainCircuitIcon, ShieldCheckIcon } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { Button } from "./ui/button";

const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/20 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
            Expertise
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Nossas Soluções
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Oferecemos soluções completas em tecnologia para transformar e 
            impulsionar seu negócio no ambiente digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <ServiceCard 
            title="Inteligência Artificial" 
            description="Soluções de IA que automatizam processos e potencializam a tomada de decisões."
            icon={<BrainCircuitIcon className="h-6 w-6 md:h-7 md:w-7" />}
          />
          
          <ServiceCard 
            title="Dados" 
            description="Estratégias de dados que transformam informações em insights valiosos para seu negócio."
            icon={<DatabaseIcon className="h-6 w-6 md:h-7 md:w-7" />}
          />
          
          <ServiceCard 
            title="Segurança" 
            description="Proteção abrangente para garantir a integridade dos seus dados e aplicações."
            icon={<ShieldCheckIcon className="h-6 w-6 md:h-7 md:w-7" />}
          />
          
          <ServiceCard 
            title="Cloud" 
            description="Soluções em nuvem escaláveis e seguras para otimizar recursos e acelerar a inovação."
            icon={<CloudIcon className="h-6 w-6 md:h-7 md:w-7" />}
          />
        </div>
        
        <div className="text-center">
          <Button variant="default" size="lg" asChild>
            <a href="/solucoes">Ver Todas as Soluções</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;