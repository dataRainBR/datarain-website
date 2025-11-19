import { ArrowRight } from "lucide-react";

interface SolutionCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  benefits?: string[];
}

const SolutionCard = ({ title, description, image, link, benefits }: SolutionCardProps) => {
  return (
    <a href={link} className="group block h-full">
      <div className="bg-card rounded-3xl overflow-hidden shadow-sm border border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        <div className="relative h-48 md:h-56 overflow-hidden flex-shrink-0">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        </div>
        
        <div className="p-6 md:p-8 flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed flex-1">
            {description}
          </p>
          
          {benefits && benefits.length > 0 && (
            <ul className="space-y-3 mb-6">
              {benefits.slice(0, 3).map((benefit, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-3">
                  <span className="text-primary mt-0.5 text-lg">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          )}
          
          <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-4 transition-all">
            Saiba mais
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default SolutionCard;
