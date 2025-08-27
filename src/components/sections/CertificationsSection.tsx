import { Award, Star, Trophy, Target } from "lucide-react";

interface CertificationsSectionProps {
  certificationImage: string;
}

const achievements = [
  {
    icon: <Award className="h-6 w-6" />,
    title: "AWS Advanced Consulting Partner",
    description: "Parceiro oficial AWS com competências técnicas avançadas"
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "5 de 6 Quadrantes",
    description: "Líder reconhecido no ecossistema AWS"
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Certificações Técnicas",
    description: "Time altamente qualificado e certificado"
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Projetos de Sucesso",
    description: "Histórico comprovado de transformação digital"
  }
];

const CertificationsSection = ({ certificationImage }: CertificationsSectionProps) => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]">
          <div className="grid grid-cols-8 md:grid-cols-12 lg:grid-cols-16 gap-4 h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div 
                key={i}
                className="bg-primary rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '4s'
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header with distinctive styling */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#f78504] to-[#ff9524] bg-clip-text text-transparent mb-6 leading-tight">
            Algumas de nossas conquistas
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 rounded-full"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Reconhecimento e excelência que nos posicionam como 
            <span className="text-primary font-semibold"> líderes em transformação digital</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left side - Achievements cards */}
          <div className="lg:col-span-7">
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="group relative p-6 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl rounded-2xl border border-white/50 shadow-xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-1 hover:rotate-1"
                >
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300">
                        {achievement.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-primary/30 rounded-full group-hover:bg-accent transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Certification image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full">
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/70 to-white/50 p-4 md:p-6 rounded-2xl border border-white/60 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={certificationImage} 
                  alt="AWS Certifications e Conquistas" 
                  className="relative w-full h-auto max-h-80 object-contain rounded-xl shadow-lg transition-transform duration-500"
                />
                
                {/* Floating badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  <Star className="h-3 w-3 inline mr-1" />
                  Certificado
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;