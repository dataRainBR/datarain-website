import React from 'react';
import { CloudIcon, LightbulbIcon, ShieldCheckIcon } from "lucide-react";
import SolutionServiceCard from "./SolutionServiceCard";

const ServicesSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-muted/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Nossas Soluções
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Oferecemos soluções completas em tecnologia para transformar e 
            impulsionar seu negócio no ambiente digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <SolutionServiceCard 
            title="GenAI e Dados" 
            description="Soluções de inteligência artificial e estratégias de dados que automatizam processos e transformam informações em insights valiosos."
            icon={<LightbulbIcon className="h-7 w-7" />}
            href="/solucoes/dados"
            variant="ia"
            features={["Agentic AI", "Analytics Avançado", "Automação Inteligente"]}
          />
          
          <SolutionServiceCard 
            title="Cybersecurity" 
            description="Proteção abrangente para garantir a integridade dos seus dados e aplicações contra ameaças modernas."
            icon={<ShieldCheckIcon className="h-7 w-7" />}
            href="/solucoes/cybersecurity"
            variant="security"
            features={["Assessment de Segurança", "Landing Zone", "Governança"]}
          />
          
          <SolutionServiceCard 
            title="Cloud" 
            description="Soluções em nuvem escaláveis e seguras para otimizar recursos e acelerar a inovação."
            icon={<CloudIcon className="h-7 w-7" />}
            href="/solucoes/cloud"
            variant="cloud"
            features={["Migração", "Arquitetura", "FinOps"]}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;