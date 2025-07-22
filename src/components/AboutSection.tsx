import { Button } from "./ui/button";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Sobre a DataRain
            </h2>
            <p className="text-lg mb-6 text-foreground">
              A DataRain é a parceira estratégica para empresas em tecnologia, 
              entregando soluções em cloud, dados e inteligência artificial 
              com segurança, agilidade e foco em resultados.
            </p>
            <p className="text-lg mb-8 text-foreground">
              Trabalhamos lado a lado com nossos clientes para impulsionar 
              inovação, acelerar a tomada de decisões e apoiar o crescimento 
              dos negócios.
            </p>
            <Button variant="default" size="lg">
              Conheça Nossa História
            </Button>
          </div>
          
          <div className="bg-gradient-hero rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-accent">LÍDER</span> EM{" "}
              <span className="text-accent">5 DE 6</span> QUADRANTES
            </h3>
            <p className="text-xl mb-4">NO ECOSSISTEMA AWS</p>
            
            <ul className="space-y-4 mt-8">
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-accent mr-3"></div>
                <span>Amazon DynamoDB Delivery</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-accent mr-3"></div>
                <span>DevOps Services Competency</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-accent mr-3"></div>
                <span>Amazon EC2 for Windows Server Delivery</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-accent mr-3"></div>
                <span>Migration and Modernization Services</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-accent mr-3"></div>
                <span>Generative AI Services Competency</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;