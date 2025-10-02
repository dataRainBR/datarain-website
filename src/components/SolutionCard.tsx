import { ArrowRight } from "lucide-react";

interface SolutionCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  color?: string;
  benefits?: string[];
}

const SolutionCard = ({ title, description, image, link, color = "#3893af", benefits }: SolutionCardProps) => {
  return (
    <a href={link} className="group block">
      <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 h-full">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors" style={{ color }}>
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {description}
          </p>
          
          {benefits && benefits.length > 0 && (
            <ul className="space-y-2 mb-4">
              {benefits.slice(0, 3).map((benefit, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          )}
          
          <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-4 transition-all" style={{ color }}>
            Saiba mais
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default SolutionCard;
