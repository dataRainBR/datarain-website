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
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
          <div className="grid grid-cols-8 md:grid-cols-12 lg:grid-cols-16 gap-4 h-full">
            {Array.from({ length: 128 }).map((_, i) => (
              <div 
                key={i}
                className="bg-primary rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-10 left-1/4 w-20 h-20 border-2 border-primary/20 rounded-full animate-bounce" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-accent/10 rotate-45 animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/3 right-10 w-12 h-12 border-2 border-accent/30 rotate-12 animate-spin" style={{ animationDuration: '8s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header with distinctive styling */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl mb-6 animate-pulse">
            <Trophy className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-8 leading-tight">
            Algumas de nossas
            <br />
            <span className="text-primary">conquistas</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-light">
            Reconhecimento e excelência que nos posicionam como 
            <span className="text-primary font-semibold"> líderes em transformação digital</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left side - Achievements cards with staggered layout */}
          <div className="lg:col-span-7">
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`group relative p-8 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-2 hover:rotate-1 ${
                    index % 2 === 1 ? 'md:mt-8' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-primary/25">
                      <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300">
                        {achievement.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full group-hover:bg-accent transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-8 bg-gradient-to-t from-primary/30 to-transparent rounded-full group-hover:from-accent/50 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Certification image with enhanced presentation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Decorative rings */}
              <div className="absolute -inset-8 border-2 border-primary/20 rounded-[2.5rem] animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute -inset-4 border border-accent/30 rounded-[2rem] animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/70 to-white/50 p-8 md:p-10 rounded-[2rem] border border-white/60 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={certificationImage} 
                  alt="AWS Certifications e Conquistas" 
                  className="relative max-w-full h-auto rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                  <Star className="h-4 w-4 inline mr-1" />
                  Certificado
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-20">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2 bg-primary/40 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;