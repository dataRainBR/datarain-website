import React from "react";
import { Award, Star, Trophy, Target } from "lucide-react";

const achievements = [
  {
    icon: <Award className="h-7 w-7" />,
    title: "AWS Advanced Consulting Partner",
    description: "Parceiro oficial AWS com competências técnicas avançadas"
  },
  {
    icon: <Trophy className="h-7 w-7" />,
    title: "4 de 5 Quadrantes",
    description: "Líder reconhecido pelo ISG Provider Lens no ecossistema AWS"
  },
  {
    icon: <Star className="h-7 w-7" />,
    title: "Certificações Técnicas",
    description: "Time altamente qualificado e certificado"
  },
  {
    icon: <Target className="h-7 w-7" />,
    title: "Projetos de Sucesso",
    description: "Histórico comprovado de transformação digital"
  }
];

const CertificationsSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header with distinctive styling */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Algumas de nossas conquistas
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 rounded-full"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Reconhecimento e excelência que nos posicionam como <span className="text-primary font-semibold">líderes em transformação digital</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Decorative pattern */}
              <div className="absolute inset-0 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                <svg className="absolute right-0 top-0 w-24 h-24 text-primary/10" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="80" cy="20" r="6" />
                  <circle cx="65" cy="35" r="4" />
                  <circle cx="85" cy="40" r="3" />
                </svg>
              </div>

              {/* Decorative orb */}
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-primary/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 ease-out" />

                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-sky-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {achievement.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;