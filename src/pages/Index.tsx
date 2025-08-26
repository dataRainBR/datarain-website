import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import awsCertifications from "@/assets/aws-certifications.png";
import clientLogos from "@/assets/client-logos.png";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img 
          src={heroBackground} 
          alt="DataRain Hero Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        
        <div className="container relative z-10 mx-auto px-4">
          <nav className="absolute top-0 left-0 right-0 py-6 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center backdrop-blur-md bg-white/10 rounded-full border border-white/20 py-3 px-6 shadow-lg">
              <Logo className="text-white" />
              <div className="hidden md:flex items-center gap-8">
                <a href="#" className="text-white/90 hover:text-white transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-300">Soluções</a>
                <a href="#" className="text-white/90 hover:text-white transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-300">Sobre</a>
                <a href="#" className="text-white/90 hover:text-white transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-300">Parceiros</a>
                <a href="#" className="text-white/90 hover:text-white transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-300">Blog</a>
              </div>
              <Button variant="accent" size="lg" className="shadow-lg">
                Fale Conosco
              </Button>
            </div>
          </nav>

          <div className="max-w-4xl mx-auto text-center text-white mt-20 backdrop-blur-md bg-black/10 p-8 rounded-2xl border border-white/20 shadow-xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Parceiro estratégico em soluções de cloud
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90">
              Entregamos soluções em cloud, dados e inteligência artificial com segurança,
              agilidade e foco em resultados.
            </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Conheça Nossas Soluções
            </Button>
            <Button variant="glass" size="xl">
              Agende uma Demonstração
            </Button>
          </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Certifications Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 backdrop-blur-md bg-white/30 p-6 rounded-2xl border border-white/40 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Líder em Certificações AWS
            </h2>
            <p className="text-lg text-muted-foreground">
              Reconhecida como líder em 5 de 6 quadrantes no ecossistema AWS,
              garantindo excelência e qualidade em nossos serviços.
            </p>
          </div>
          <div className="flex justify-center backdrop-blur-md bg-white/30 p-6 rounded-2xl border border-white/40 shadow-lg">
            <img 
              src={awsCertifications} 
              alt="AWS Certifications" 
              className="max-w-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Alguns de Nossos Projetos
          </h2>
          <div className="backdrop-blur-md bg-white/30 p-8 rounded-2xl border border-white/40 shadow-lg overflow-hidden">
            <div className="animate-scroll-infinite flex items-center justify-center">
              <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$qg47aiybhz"
                alt="Client Logos" 
                className="max-w-4xl w-full opacity-80 flex-shrink-0"
              />
              <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$3xxdv2t83wy"
                alt="Client Logos" 
                className="max-w-4xl w-full opacity-80 flex-shrink-0 ml-8"
              />
              <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$ua279g4u52p"
                alt="Client Logos" 
                className="max-w-4xl w-full opacity-80 flex-shrink-0 ml-8"
              /> 
              <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$qlh5euyua6"
                alt="Client Logos" 
                className="max-w-4xl w-full opacity-80 flex-shrink-0 ml-8"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;