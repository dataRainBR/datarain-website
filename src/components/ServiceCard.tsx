interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white border border-border rounded-lg p-6 shadow-primary transition-all hover:shadow-accent hover:translate-y-[-5px]">
      <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-accent mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;