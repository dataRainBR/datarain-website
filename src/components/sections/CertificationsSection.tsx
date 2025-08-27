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
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Algumas de nossas conquistas
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Reconhecimento e excelência que nos posicionam como líderes em transformação digital
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Achievements cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="group p-6 backdrop-blur-md bg-white/60 rounded-2xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right side - Certification image */}
          <div className="flex justify-center lg:justify-end">
            <div className="backdrop-blur-md bg-white/40 p-6 md:p-8 rounded-3xl border border-white/40 shadow-2xl">
              <img 
                src={certificationImage} 
                alt="AWS Certifications e Conquistas" 
                className="max-w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;