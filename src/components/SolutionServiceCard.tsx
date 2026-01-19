import { Link } from "react-router-dom";

interface SolutionServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  variant: "ia" | "security" | "cloud";
  features?: string[];
}

// Cores atualizadas conforme requisição:
// IA e Dados: Azul #3893af (primary)
// Cybersecurity: Verde (emerald)
// Cloud: Laranja #f78504 (accent)
const variantStyles = {
  ia: {
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
  security: {
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
    accentLine: "bg-gradient-to-r from-emerald-500 to-teal-500",
    hoverBorder: "hover:border-emerald-400/60",
    decorativeOrb: "bg-emerald-500/30",
    textColor: "text-emerald-600",
    pattern: (
      <svg className="absolute right-0 top-0 w-32 h-32 text-emerald-500/10" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 10 L70 25 L70 50 L50 65 L30 50 L30 25 Z" strokeWidth="2" stroke="currentColor" fill="none" />
        <path d="M50 20 L60 28 L60 45 L50 53 L40 45 L40 28 Z" />
        <circle cx="50" cy="38" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  cloud: {
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
};

const SolutionServiceCard = ({
  title,
  description,
  icon,
  href,
  variant,
  features = [],
}: SolutionServiceCardProps) => {
  const styles = variantStyles[variant];

  return (
    <Link
      to={href}
      className={`group relative bg-card rounded-3xl overflow-hidden border border-border/50 ${styles.hoverBorder} transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 block`}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Decorative pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity duration-500">
        {styles.pattern}
      </div>

      {/* Decorative orb */}
      <div
        className={`absolute -bottom-20 -right-20 w-40 h-40 ${styles.decorativeOrb} rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
      />

      {/* Content */}
      <div className="relative z-10 p-8 md:p-10">
        {/* Accent line */}
        <div
          className={`absolute top-0 left-0 w-0 h-1 ${styles.accentLine} group-hover:w-full transition-all duration-500 ease-out`}
        />

        {/* Icon */}
        <div
          className={`w-16 h-16 ${styles.iconBg} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
        >
          {icon}
        </div>

        {/* Title */}
        <h3 className={`text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:${styles.textColor} transition-colors duration-300`}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-base text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>

        {/* Features list */}
        {features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${styles.iconBg}`}
                />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <div className={`flex items-center gap-2 ${styles.textColor} font-semibold group-hover:gap-4 transition-all duration-300`}>
          <span>Explorar soluções</span>
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default SolutionServiceCard;
