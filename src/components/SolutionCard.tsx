import { ArrowRight } from "lucide-react";

interface SolutionCardProps {
  title: string;
  description: string;
  link: string;
  pillar: "ia" | "cybersecurity" | "cloud";
}

// Padrões decorativos SVG por pilar (mesmos usados na seção "Três Pilares")
const DecorativePattern = ({ pillar, className }: { pillar: "ia" | "cybersecurity" | "cloud"; className?: string }) => {
  switch (pillar) {
    case "ia":
      // Círculos conectados (network pattern)
      return (
        <svg className={className} viewBox="0 0 100 100" fill="currentColor">
          <circle cx="80" cy="20" r="8" />
          <circle cx="60" cy="35" r="5" />
          <circle cx="85" cy="45" r="4" />
          <path d="M80 20 L60 35 L85 45" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
        </svg>
      );
    case "cybersecurity":
      // Hexágono/escudo
      return (
        <svg className={className} viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 10 L70 25 L70 50 L50 65 L30 50 L30 25 Z" strokeWidth="2" stroke="currentColor" fill="none" />
          <path d="M50 20 L60 28 L60 45 L50 53 L40 45 L40 28 Z" />
        </svg>
      );
    case "cloud":
      // Nuvem sólida
      return (
        <svg className={className} viewBox="0 0 100 100" fill="currentColor">
          <path d="M25 55 Q25 40 40 40 Q45 25 60 30 Q80 30 80 50 Q90 50 90 60 Q90 70 80 70 L25 70 Q15 70 15 60 Q15 55 25 55" />
        </svg>
      );
  }
};

// Cores por pilar conforme padrão do site
const pillarStyles = {
  ia: {
    bgGradient: "from-[#3893af] to-[#2a7a94]",
    hoverBg: "group-hover:from-[#2a7a94] group-hover:to-[#1f6a82]",
  },
  cybersecurity: {
    bgGradient: "from-[#e63946] to-[#c5303c]",
    hoverBg: "group-hover:from-[#c5303c] group-hover:to-[#a82833]",
  },
  cloud: {
    bgGradient: "from-[#f78504] to-[#d97203]",
    hoverBg: "group-hover:from-[#d97203] group-hover:to-[#b86002]",
  },
};

const SolutionCard = ({ title, description, link, pillar }: SolutionCardProps) => {
  const styles = pillarStyles[pillar];

  return (
    <a href={link} className="group block h-full">
      <div 
        className={`relative bg-gradient-to-br ${styles.bgGradient} ${styles.hoverBg} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 h-full min-h-[220px] sm:min-h-[240px] flex flex-col`}
      >
        {/* Background decorative pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DecorativePattern 
            pillar={pillar}
            className="absolute -right-4 -bottom-4 w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] text-white/20 group-hover:text-white/30 group-hover:scale-110 transition-all duration-500"
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
