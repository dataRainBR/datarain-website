import { Button } from "./ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6">
              Sobre a DataRain
            </h2>
            <p className="text-base md:text-lg mb-4 md:mb-6 text-foreground">
              A DataRain é a parceira estratégica para empresas em tecnologia, 
              entregando soluções em cloud, dados e inteligência artificial 
              com segurança, agilidade e foco em resultados.
            </p>
            <p className="text-base md:text-lg mb-6 md:mb-8 text-foreground">
              Trabalhamos lado a lado com nossos clientes para impulsionar 
              inovação, acelerar a tomada de decisões e apoiar o crescimento 
              dos negócios.
            </p>
            <Button variant="default" size="lg">
              Conheça Nossa História
            </Button>
          </div>
          
          <div className="backdrop-blur-md bg-primary/70 rounded-xl p-6 md:p-8 text-white shadow-lg border border-white/20">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
              <span className="text-accent">LÍDER</span> EM{" "}
              <span className="text-accent">5 DE 6</span> QUADRANTES
            </h3>
            <p className="text-lg md:text-xl mb-4">NO ECOSSISTEMA AWS</p>
            
            <ul className="space-y-3 md:space-y-4 mt-6 md:mt-8">
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-accent mr-3 flex-shrink-0"></div>
                <span className="text-sm md:text-base">Amazon DynamoDB Delivery</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-accent mr-3 flex-shrink-0"></div>
                <span className="text-sm md:text-base">DevOps Services Competency</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-accent mr-3 flex-shrink-0"></div>
                <span className="text-sm md:text-base">Amazon EC2 for Windows Server Delivery</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-accent mr-3 flex-shrink-0"></div>
                <span className="text-sm md:text-base">Migration and Modernization Services</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-accent mr-3 flex-shrink-0"></div>
                <span className="text-sm md:text-base">Generative AI Services Competency</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;