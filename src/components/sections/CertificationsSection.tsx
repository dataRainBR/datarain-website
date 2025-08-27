interface CertificationsSectionProps {
  certificationImage: string;
}

const CertificationsSection = ({ certificationImage }: CertificationsSectionProps) => {
  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12 backdrop-blur-md bg-white/30 p-4 md:p-6 rounded-2xl border border-white/40 shadow-lg">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Líder em Certificações AWS
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Reconhecida como líder em 5 de 6 quadrantes no ecossistema AWS,
            garantindo excelência e qualidade em nossos serviços.
          </p>
        </div>
        <div className="flex justify-center backdrop-blur-md bg-white/30 p-4 md:p-6 rounded-2xl border border-white/40 shadow-lg">
          <img 
            src={certificationImage} 
            alt="AWS Certifications" 
            className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;