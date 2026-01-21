import { ArrowRight, Network, Shield, Cloud } from "lucide-react";

interface SolutionCardProps {
  title: string;
  description: string;
  link: string;
  pillar: "ia" | "cybersecurity" | "cloud";
}

// Cores por pilar conforme padrão do site
const pillarStyles = {
  ia: {
    bgGradient: "from-[#3893af] to-[#2a7a94]",
    hoverBg: "group-hover:from-[#2a7a94] group-hover:to-[#1f6a82]",
    Icon: Network,
  },
  cybersecurity: {
    bgGradient: "from-[#e63946] to-[#c5303c]",
    hoverBg: "group-hover:from-[#c5303c] group-hover:to-[#a82833]",
    Icon: Shield,
  },
  cloud: {
    bgGradient: "from-[#f78504] to-[#d97203]",
    hoverBg: "group-hover:from-[#d97203] group-hover:to-[#b86002]",
    Icon: Cloud,
  },
};

const SolutionCard = ({ title, description, link, pillar }: SolutionCardProps) => {
  const styles = pillarStyles[pillar];
  const IconComponent = styles.Icon;

  return (
    <a href={link} className="group block h-full">
      <div 
        className={`relative bg-gradient-to-br ${styles.bgGradient} ${styles.hoverBg} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 h-full min-h-[220px] sm:min-h-[240px] flex flex-col`}
      >
        {/* Background icon decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <IconComponent 
            className="absolute -right-8 -bottom-8 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] text-white/15 group-hover:text-white/25 group-hover:scale-110 transition-all duration-500 rotate-12"
            strokeWidth={0.8}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 p-6 sm:p-8 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white leading-tight">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6 flex-1">
            {description}
          </p>
          
          {/* CTA Button */}
          <div className="mt-auto">
            <span className="inline-flex items-center gap-2 bg-white text-foreground font-semibold px-5 py-2.5 rounded-full shadow-md group-hover:gap-3 group-hover:shadow-lg transition-all duration-300 text-sm">
              Saiba mais
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default SolutionCard;
