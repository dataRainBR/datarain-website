interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="backdrop-blur-md bg-white/40 rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl border border-white/40 group">
      <div className="w-14 h-14 backdrop-blur-md bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-gradient-modern group-hover:text-white transition-all duration-300 border border-white/20">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;