import { CloudIcon, DatabaseIcon, BrainCircuitIcon, ShieldCheckIcon } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { Button } from "./ui/button";

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Nossas Soluções
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Oferecemos soluções completas em tecnologia para transformar e 
            impulsionar seu negócio no ambiente digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          <ServiceCard 
            title="Cloud" 
            description="Soluções em nuvem escaláveis e seguras para otimizar recursos e acelerar a inovação."
            icon={<CloudIcon className="h-6 w-6" />}
          />
          
          <ServiceCard 
            title="Dados" 
            description="Estratégias de dados que transformam informações em insights valiosos para seu negócio."
            icon={<DatabaseIcon className="h-6 w-6" />}
          />
          
          <ServiceCard 
            title="Inteligência Artificial" 
            description="Soluções de IA que automatizam processos e potencializam a tomada de decisões."
            icon={<BrainCircuitIcon className="h-6 w-6" />}
          />
          
          <ServiceCard 
            title="Segurança" 
            description="Proteção abrangente para garantir a integridade dos seus dados e aplicações."
            icon={<ShieldCheckIcon className="h-6 w-6" />}
          />
        </div>
        
        <div className="text-center">
          <Button variant="default" size="lg">
            Ver Todas as Soluções
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;