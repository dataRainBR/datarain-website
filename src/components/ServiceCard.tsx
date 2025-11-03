interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-gradient-to-br from-card to-card/50 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 md:p-8 shadow-xl transition-all duration-300 hover:shadow-2xl border border-border/20 hover:border-primary/30 group hover:-translate-y-2">
      <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-all duration-300 border border-primary/10">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-primary mb-3 md:mb-4">{title}</h3>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;