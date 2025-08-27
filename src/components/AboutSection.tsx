import { Button } from "./ui/button";

const AboutSection = () => {
  return (
    <section className="pt-16 pb-8 md:pt-20 md:pb-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight">
                Sobre a DataRain
              </h2>
              <div className="w-12 h-1 bg-accent rounded-full"></div>
            </div>
            
            <div className="space-y-4 text-foreground">
              <p className="text-base md:text-lg leading-relaxed">
                A DataRain é a parceira estratégica para empresas em tecnologia, 
                entregando soluções em cloud, dados e inteligência artificial 
                com segurança, agilidade e foco em resultados.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Trabalhamos lado a lado com nossos clientes para impulsionar 
                inovação, acelerar a tomada de decisões e apoiar o crescimento 
                dos negócios.
              </p>
            </div>
            
            <Button variant="default" size="lg" className="mt-8">
              Conheça Nossa História
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/20 relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent"></div>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm font-medium text-primary">AWS PARTNER</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                    Líder em <span className="text-accent">5 de 6</span> Quadrantes
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    No Ecossistema AWS
                  </p>
                </div>
                
                <div className="space-y-3">
                  {[
                    "Amazon DynamoDB Delivery",
                    "DevOps Services Competency", 
                    "Amazon EC2 for Windows Server Delivery",
                    "Migration and Modernization Services",
                    "Generative AI Services Competency"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                      <span className="text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;