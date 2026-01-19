import { ReactNode } from "react";
import { Link } from "react-router-dom";

type ColorVariant = "primary" | "accent" | "red" | "violet" | "slate";

interface ModernCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href?: string;
  features?: string[];
  variant?: ColorVariant;
  className?: string;
}

// Cores para cada variante, mantendo a estrutura visual consistente
const colorStyles: Record<ColorVariant, {
  gradient: string;
  iconBg: string;
  accentLine: string;
  hoverBorder: string;
  decorativeOrb: string;
  textColor: string;
  pattern: ReactNode;
}> = {
  // Azul primário #3893af - Para IA e Dados, e seções genéricas
  primary: {
    gradient: "from-[#3893af]/20 via-[#3893af]/10 to-sky-500/20",
    iconBg: "bg-gradient-to-br from-[#3893af] to-sky-600",
    accentLine: "bg-gradient-to-r from-[#3893af] to-sky-500",
    hoverBorder: "hover:border-[#3893af]/60",
    decorativeOrb: "bg-[#3893af]/30",
    textColor: "text-[#3893af]",
    pattern: (
      <svg className="absolute right-0 top-0 w-32 h-32 text-[#3893af]/10" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="80" cy="20" r="8" />
        <circle cx="60" cy="35" r="5" />
        <circle cx="85" cy="45" r="4" />
        <circle cx="70" cy="15" r="3" />
        <circle cx="50" cy="25" r="6" />
        <path d="M80 20 L60 35 L50 25 L85 45" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
      </svg>
    ),
  },
  // Laranja #f78504 - Para Cloud
  accent: {
    gradient: "from-[#f78504]/20 via-orange-400/10 to-amber-500/20",
    iconBg: "bg-gradient-to-br from-[#f78504] to-orange-500",
    accentLine: "bg-gradient-to-r from-[#f78504] to-orange-400",
    hoverBorder: "hover:border-[#f78504]/60",
    decorativeOrb: "bg-[#f78504]/30",
    textColor: "text-[#f78504]",
    pattern: (
      <svg className="absolute right-0 top-0 w-32 h-32 text-[#f78504]/10" viewBox="0 0 100 100" fill="currentColor">
        <path d="M25 55 Q25 40 40 40 Q45 25 60 30 Q80 30 80 50 Q90 50 90 60 Q90 70 80 70 L25 70 Q15 70 15 60 Q15 55 25 55" />
        <circle cx="45" cy="50" r="3" opacity="0.5" />
        <circle cx="60" cy="48" r="2" opacity="0.5" />
        <circle cx="70" cy="55" r="2.5" opacity="0.5" />
      </svg>
    ),
  },
  // Vermelho - Para Cybersecurity
  red: {
    gradient: "from-[#e63946]/20 via-rose-500/10 to-red-500/20",
    iconBg: "bg-gradient-to-br from-[#e63946] to-rose-600",
    accentLine: "bg-gradient-to-r from-[#e63946] to-rose-500",
    hoverBorder: "hover:border-[#e63946]/60",
    decorativeOrb: "bg-[#e63946]/30",
    textColor: "text-[#e63946]",
    pattern: (
      <svg className="absolute right-0 top-0 w-32 h-32 text-[#e63946]/10" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 10 L70 25 L70 50 L50 65 L30 50 L30 25 Z" strokeWidth="2" stroke="currentColor" fill="none" />
        <path d="M50 20 L60 28 L60 45 L50 53 L40 45 L40 28 Z" />
        <circle cx="50" cy="38" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  // Roxo - Para VentureLabs e seções especiais
  violet: {
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
    accentLine: "bg-gradient-to-r from-violet-500 to-purple-500",
    hoverBorder: "hover:border-violet-400/60",
    decorativeOrb: "bg-violet-500/30",
    textColor: "text-violet-600",
    pattern: (
      <svg className="absolute right-0 top-0 w-32 h-32 text-violet-500/10" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="80" cy="20" r="8" />
        <circle cx="60" cy="35" r="5" />
        <circle cx="85" cy="45" r="4" />
        <path d="M80 20 L60 35 L85 45" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
      </svg>
    ),
  },
  // Cinza - Para seções neutras
  slate: {
    gradient: "from-slate-500/20 via-slate-400/10 to-slate-500/20",
    iconBg: "bg-gradient-to-br from-slate-600 to-slate-700",
    accentLine: "bg-gradient-to-r from-slate-600 to-slate-500",
    hoverBorder: "hover:border-slate-400/60",
    decorativeOrb: "bg-slate-500/30",
    textColor: "text-slate-700",
    pattern: (
      <svg className="absolute right-0 top-0 w-32 h-32 text-slate-500/10" viewBox="0 0 100 100" fill="currentColor">
        <rect x="60" y="10" width="30" height="30" rx="4" />
        <rect x="70" y="50" width="20" height="20" rx="3" />
      </svg>
    ),
  },
};

const ModernCard = ({
  title,
  description,
  icon,
  href,
  features = [],
  variant = "primary",
  className = "",
}: ModernCardProps) => {
  const styles = colorStyles[variant];

  const cardContent = (
    <>
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Decorative pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity duration-500">
        {styles.pattern}
      </div>

      {/* Decorative orb */}
      <div className={`absolute -bottom-20 -right-20 w-40 h-40 ${styles.decorativeOrb} rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />

      {/* Content */}
      <div className="relative z-10 p-8 md:p-10">
        {/* Accent line */}
        <div className={`absolute top-0 left-0 w-0 h-1 ${styles.accentLine} group-hover:w-full transition-all duration-500 ease-out`} />

        {/* Icon */}
        <div className={`w-16 h-16 ${styles.iconBg} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
          {icon}
        </div>

        {/* Title */}
        <h3 className={`text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:${styles.textColor} transition-colors duration-300`}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>

        {/* Features list */}
        {features.length > 0 && (
          <ul className="space-y-2 mb-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className={`w-1.5 h-1.5 rounded-full ${styles.iconBg}`} />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* CTA for linked cards */}
        {href && (
          <div className={`flex items-center gap-2 ${styles.textColor} font-semibold mt-6 group-hover:gap-4 transition-all duration-300`}>
            <span>Saiba mais</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        )}
      </div>
    </>
  );

  const baseClasses = `group relative bg-card rounded-3xl overflow-hidden border border-border/50 ${styles.hoverBorder} transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${className}`;

  if (href) {
    return (
      <Link to={href} className={`${baseClasses} block`}>
        {cardContent}
      </Link>
    );
  }

  return <div className={baseClasses}>{cardContent}</div>;
};

export default ModernCard;
