import { Link } from "react-router-dom";

interface GenericCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  features?: string[];
  className?: string;
}

/**
 * Card genérico azul para seções que não são pilares da DataRain
 * Usado em seções como diferenciais, processos, features, etc.
 */
const GenericCard = ({
  title,
  description,
  icon,
  href,
  features = [],
  className = "",
}: GenericCardProps) => {
  const cardContent = (
    <>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Decorative pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity duration-500">
        <svg className="absolute right-0 top-0 w-32 h-32 text-primary/10" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="80" cy="20" r="6" />
          <circle cx="65" cy="35" r="4" />
          <circle cx="85" cy="40" r="3" />
          <circle cx="70" cy="50" r="5" />
        </svg>
      </div>

      {/* Decorative orb */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 p-8 md:p-10">
        {/* Accent line */}
        <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-sky-500 group-hover:w-full transition-all duration-500 ease-out" />

        {/* Icon */}
        <div className="w-14 h-14 bg-gradient-to-br from-primary to-sky-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>

        {/* Features list */}
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-primary to-sky-600" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* CTA for linked cards */}
        {href && (
          <div className="flex items-center gap-2 text-primary font-semibold mt-6 group-hover:gap-4 transition-all duration-300">
            <span>Saiba mais</span>
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
        )}
      </div>
    </>
  );

  const baseClasses = `group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${className}`;

  if (href) {
    return (
      <Link to={href} className={`${baseClasses} block`}>
        {cardContent}
      </Link>
    );
  }

  return <div className={baseClasses}>{cardContent}</div>;
};

export default GenericCard;
