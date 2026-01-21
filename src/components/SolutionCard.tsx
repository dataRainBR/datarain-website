import { ArrowRight } from "lucide-react";

interface SolutionCardProps {
  title: string;
  description: string;
  link: string;
  benefits?: string[];
  pillar: "ia" | "cybersecurity" | "cloud";
  // Mantemos image como opcional para backward compatibility
  image?: string;
}

// Cores por pilar conforme padrão do site
const pillarStyles = {
  ia: {
    bgColor: "bg-[#3893af]",
    bgGradient: "from-[#3893af] to-[#2a7a94]",
    hoverBg: "group-hover:from-[#2a7a94] group-hover:to-[#1f6a82]",
    overlayColor: "bg-[#2a7a94]",
    label: "IA e Dados",
    labelBg: "bg-white/20",
  },
  cybersecurity: {
    bgColor: "bg-[#e63946]",
    bgGradient: "from-[#e63946] to-[#c5303c]",
    hoverBg: "group-hover:from-[#c5303c] group-hover:to-[#a82833]",
    overlayColor: "bg-[#c5303c]",
    label: "Cybersecurity",
    labelBg: "bg-white/20",
  },
  cloud: {
    bgColor: "bg-[#f78504]",
    bgGradient: "from-[#f78504] to-[#d97203]",
    hoverBg: "group-hover:from-[#d97203] group-hover:to-[#b86002]",
    overlayColor: "bg-[#d97203]",
    label: "Cloud",
    labelBg: "bg-white/20",
  },
};

const SolutionCard = ({ title, description, link, benefits, pillar }: SolutionCardProps) => {
  const styles = pillarStyles[pillar];

  return (
    <a href={link} className="group block h-full">
      <div 
        className={`relative bg-gradient-to-br ${styles.bgGradient} ${styles.hoverBg} rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full min-h-[320px] sm:min-h-[360px] flex flex-col`}
      >
        {/* Geometric diagonal overlay - inspired by reference image */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main diagonal shape */}
          <div 
            className={`absolute -right-16 -bottom-16 w-[200px] sm:w-[280px] h-[200px] sm:h-[280px] ${styles.overlayColor} rounded-3xl transform rotate-12 opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500`}
          />
          {/* Secondary diagonal shape */}
          <div 
            className={`absolute -right-8 -bottom-8 w-[140px] sm:w-[200px] h-[140px] sm:h-[200px] ${styles.overlayColor} rounded-2xl transform rotate-6 opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500`}
          />
          {/* Subtle top accent */}
          <div 
            className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 p-6 sm:p-8 flex-1 flex flex-col">
          {/* Pillar badge */}
          <div className="mb-4">
            <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full ${styles.labelBg} text-white backdrop-blur-sm`}>
              {styles.label}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white leading-tight">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6 flex-1">
            {description}
          </p>
          
          {/* Benefits list */}
          {benefits && benefits.length > 0 && (
            <ul className="space-y-2 mb-6">
              {benefits.slice(0, 3).map((benefit, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-white/80 flex items-start gap-2">
                  <span className="text-white mt-0.5">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          )}
          
          {/* CTA Button */}
          <div className="mt-auto">
            <div className="inline-flex items-center gap-2 bg-white text-foreground font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-md group-hover:gap-3 group-hover:shadow-lg transition-all duration-300">
              <span className="text-sm sm:text-base">Saiba mais</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default SolutionCard;
