import { ArrowRight } from "lucide-react";

interface SolutionCardProps {
  title: string;
  description: string;
  link: string;
  pillar: "ia" | "cybersecurity" | "cloud";
}

// Ícones SVG por pilar (mesmos usados na seção "Três Pilares")
const PillarIcon = ({ pillar, className }: { pillar: "ia" | "cybersecurity" | "cloud"; className?: string }) => {
  switch (pillar) {
    case "ia":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case "cybersecurity":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "cloud":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
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
        {/* Background icon decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <PillarIcon 
            pillar={pillar}
            className="absolute -right-6 -bottom-6 w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] text-white/20 group-hover:text-white/30 group-hover:scale-110 transition-all duration-500 rotate-12"
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
