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
      <header className="relative min-h-screen flex flex-col overflow-hidden">
        <img 
          src={heroBackground} 
          alt="DataRain Hero Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        
        {/* Navigation */}
        <nav className="relative z-50 pt-6">
          <div className="container mx-auto px-4">
            <div className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 py-4 px-6 shadow-2xl">
              <div className="flex justify-between items-center">
                <Logo className="text-white" />
                <div className="hidden lg:flex items-center gap-8">
                  <a href="#" className="text-white/80 hover:text-white transition-all duration-300 relative group">
                    <span className="relative z-10">Soluções</span>
                    <div className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 backdrop-blur-sm"></div>
                  </a>
                  <a href="#" className="text-white/80 hover:text-white transition-all duration-300 relative group">
                    <span className="relative z-10">Sobre</span>
                    <div className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 backdrop-blur-sm"></div>
                  </a>
                  <a href="#" className="text-white/80 hover:text-white transition-all duration-300 relative group">
                    <span className="relative z-10">Parceiros</span>
                    <div className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 backdrop-blur-sm"></div>
                  </a>
                  <a href="#" className="text-white/80 hover:text-white transition-all duration-300 relative group">
                    <span className="relative z-10">Blog</span>
                    <div className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 backdrop-blur-sm"></div>
                  </a>
                </div>
                <Button variant="accent" size="sm" className="shadow-xl backdrop-blur-sm">
                  <span className="hidden sm:inline">Fale Conosco</span>
                  <span className="sm:hidden">Contato</span>
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-5xl mx-auto">
              {/* Main Hero Card */}
              <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                  Parceiro estratégico em
                  <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> cloud</span>
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Entregamos soluções em cloud, dados e inteligência artificial com segurança, 
                  agilidade e foco em resultados.
                </p>

                {/* Action Buttons */}
                <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <Button variant="hero" size="xl" className="w-full shadow-xl">
                    Conheça Nossas Soluções
                  </Button>
                  <Button variant="glass" size="xl" className="w-full shadow-xl">
                    Agende uma Demonstração
                  </Button>
                </div>
              </div>
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
          <div className="flex justify-center backdrop-blur-md bg-white/30 p-4 md:p-6 rounded-2xl border border-white/40 shadow-lg">
            <img 
              src={awsCertifications} 
              alt="AWS Certifications" 
              className="max-w-xs md:max-w-lg lg:max-w-2xl w-full"
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
          <div className="backdrop-blur-md bg-white/30 p-4 md:p-8 rounded-2xl border border-white/40 shadow-lg overflow-hidden">
            <div className="animate-scroll-infinite flex items-center gap-8 md:gap-12">
              <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$qg47aiybhz"
                alt="Client Logos" 
                className="h-12 md:h-16 lg:h-20 w-auto opacity-80 flex-shrink-0"
              />
              <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$3xxdv2t83wy"
                alt="Client Logos" 
                className="h-12 md:h-16 lg:h-20 w-auto opacity-80 flex-shrink-0"
              />
              <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$ua279g4u52p"
                alt="Client Logos" 
                className="h-12 md:h-16 lg:h-20 w-auto opacity-80 flex-shrink-0"
              /> 
              <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$qlh5euyua6"
                alt="Client Logos" 
                className="h-12 md:h-16 lg:h-20 w-auto opacity-80 flex-shrink-0"
              />
              {/* Duplicated logos for smoother carousel */}
              <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$qg47aiybhz"
                alt="Client Logos" 
                className="h-12 md:h-16 lg:h-20 w-auto opacity-80 flex-shrink-0"
              />
              <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$3xxdv2t83wy"
                alt="Client Logos" 
                className="h-12 md:h-16 lg:h-20 w-auto opacity-80 flex-shrink-0"
              />
              <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$ua279g4u52p"
                alt="Client Logos" 
                className="h-12 md:h-16 lg:h-20 w-auto opacity-80 flex-shrink-0"
              /> 
              <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$qlh5euyua6"
                alt="Client Logos" 
                className="h-12 md:h-16 lg:h-20 w-auto opacity-80 flex-shrink-0"
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