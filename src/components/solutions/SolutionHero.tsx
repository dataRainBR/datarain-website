import { ArrowRight, LucideIcon } from "lucide-react";

interface SolutionHeroProps {
  pillarLabel: string;
  pillarIcon: LucideIcon;
  title: string;
  highlightedText: string;
  description: string;
  pillarColor: string;
  ctaText?: string;
  ctaHref?: string;
}

const SolutionHero = ({
  pillarLabel,
  pillarIcon: PillarIcon,
  title,
  highlightedText,
  description,
  pillarColor,
  ctaText = "Falar com Especialista",
  ctaHref = "/fale-conosco",
}: SolutionHeroProps) => {
  // Determine text color based on pillar color brightness
  const isLightColor = pillarColor === "#f78504"; // Orange needs dark text
  const textColor = isLightColor ? "text-gray-900" : "text-white";
  const mutedTextColor = isLightColor ? "text-gray-700" : "text-white/80";
  const badgeBg = isLightColor ? "bg-black/10" : "bg-white/10";
  const badgeBorder = isLightColor ? "border-black/20" : "border-white/20";
  const buttonBg = isLightColor ? "bg-gray-900 hover:bg-gray-800" : "bg-white hover:bg-white/90";
  const buttonText = isLightColor ? "text-white" : `text-[${pillarColor}]`;

  return (
    <section 
      className="relative min-h-[70vh] flex items-center overflow-hidden"
      style={{ backgroundColor: pillarColor }}
    >
      {/* Star Pattern Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg 
          className="absolute inset-0 w-full h-full" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern 
              id={`stars-${pillarColor.replace('#', '')}`}
              x="0" 
              y="0" 
              width="60" 
              height="60" 
              patternUnits="userSpaceOnUse"
            >
              {/* 4-pointed star */}
              <path 
                d="M30 25 L31 29 L35 30 L31 31 L30 35 L29 31 L25 30 L29 29 Z" 
                fill={isLightColor ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)"}
              />
              {/* Small dot */}
              <circle 
                cx="15" 
                cy="15" 
                r="1.5" 
                fill={isLightColor ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)"}
              />
              {/* Cross/plus */}
              <path 
                d="M45 45 L45 42 M45 48 L45 45 M42 45 L48 45" 
                stroke={isLightColor ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)"} 
                strokeWidth="1.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#stars-${pillarColor.replace('#', '')})`} />
        </svg>

        {/* Large decorative icon */}
        <div 
          className="absolute -bottom-20 -right-20 opacity-[0.1]"
          style={{ transform: 'rotate(15deg)' }}
        >
          <PillarIcon 
            className="w-[400px] h-[400px]" 
            strokeWidth={0.5}
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-40 sm:pt-44 md:pt-48 lg:pt-52 pb-16 md:pb-24">
        <div className="max-w-4xl">
          {/* Pillar Badge */}
          <div className="flex mb-8">
            <div className={`inline-flex items-center gap-2 ${badgeBg} backdrop-blur-sm border ${badgeBorder} rounded-full px-5 py-2.5`}>
              <PillarIcon className={`w-5 h-5 ${textColor}`} />
              <span className={`text-sm font-semibold ${textColor}`}>{pillarLabel}</span>
            </div>
          </div>
          
          {/* Title - Left aligned */}
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 ${textColor}`}>
            {title}{" "}
            <span className={`${mutedTextColor} block sm:inline`}>{highlightedText}</span>
          </h1>
          
          {/* Description - Left aligned */}
          <p className={`text-lg md:text-xl ${mutedTextColor} max-w-3xl leading-relaxed mb-10`}>
            {description}
          </p>

          {/* CTA Button */}
          <a 
            href={ctaHref}
            className={`group inline-flex items-center gap-3 ${buttonBg} px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
            style={{ color: isLightColor ? 'white' : pillarColor }}
          >
            {ctaText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionHero;
