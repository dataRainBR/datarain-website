interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
      <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-gradient-modern group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;