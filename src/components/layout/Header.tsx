import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import heroPeopleImage from "@/assets/hero-people-technology.jpg";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  backgroundImage: string;
}

const Header = ({ backgroundImage }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Quem Somos", href: "#sobre" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Serviços Gerenciados", href: "#servicos" },
    { label: "Cases", href: "#cases" },
    { label: "Conteúdo", href: "#conteudo" },
    { label: "Academy", href: "#academy" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-transparent py-4 md:py-6'
      }`}>
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-white rounded-lg border border-border/20 py-3 px-4 md:px-6'
              : 'backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 py-4 px-4 md:px-6 shadow-2xl'
          }`}>
            <div className="flex justify-between items-center">
              <Logo variant={isScrolled ? 'original' : 'white'} />
              
              <div className="flex items-center gap-8">
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-6">
                  {navItems.map((item) => (
                    <a 
                      key={item.label}
                      href={item.href} 
                      className={`transition-all duration-300 relative group px-4 py-2 rounded-lg ${
                        isScrolled 
                          ? 'text-foreground/80 hover:text-primary' 
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      <span className="relative z-10">{item.label}</span>
                      <div className={`absolute inset-0 rounded-lg scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ${
                        isScrolled
                          ? 'bg-primary/10 border border-primary/20'
                          : 'bg-white/10 backdrop-blur-sm border border-white/20'
                      }`}></div>
                    </a>
                  ))}
                </div>

                {/* Desktop CTA */}
                <Button 
                  variant={isScrolled ? "default" : "accent"} 
                  size="sm" 
                  className="shadow-xl backdrop-blur-sm hidden lg:flex"
                >
                  Fale Conosco
                </Button>

                {/* Mobile menu button & Mobile CTA */}
                <div className="flex items-center gap-4 lg:hidden">
                  <Button 
                    variant={isScrolled ? "default" : "accent"} 
                    size="sm" 
                    className="shadow-xl backdrop-blur-sm"
                  >
                    <span className="hidden sm:inline">Fale Conosco</span>
                    <span className="sm:hidden">Contato</span>
                  </Button>
                  
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`p-2 rounded-lg transition-colors ${
                      isScrolled
                        ? 'text-foreground hover:bg-muted'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
              <div className={`lg:hidden mt-4 pt-4 border-t ${
                isScrolled ? 'border-border/20' : 'border-white/20'
              }`}>
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a 
                      key={item.label}
                      href={item.href} 
                      className={`transition-colors py-2 ${
                        isScrolled
                          ? 'text-foreground/80 hover:text-primary'
                          : 'text-white/80 hover:text-white'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[95vh] flex flex-col overflow-hidden bg-white">
        {/* Modern Background with Splashes */}
        <div className="absolute inset-0">
          {/* Blue splashes */}
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-64 h-64 bg-blue-600/15 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-0 w-48 h-48 bg-blue-400/20 rounded-full blur-xl"></div>
          
          {/* Orange splashes */}
          <div className="absolute top-40 left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-orange-400/15 rounded-full blur-2xl"></div>
          <div className="absolute top-20 left-1/3 w-56 h-56 bg-orange-600/20 rounded-full blur-xl"></div>
          
          {/* Additional subtle elements */}
          <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-orange-400/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-gradient-to-tl from-orange-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
        </div>
        
        {/* Hero Content */}
        <div className="flex-1 flex items-center relative z-10 pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              {/* Main Content */}
              <div className="text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">
                  <span className="text-gray-900">Seus desafios de</span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> tecnologia </span>
                  <span className="text-gray-900">estão travando</span>
                  <br />
                  <span className="text-gray-900">o seu </span>
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">crescimento?</span>
                </h1>
                
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-10 md:mb-12 leading-relaxed max-w-3xl">
                  A dataRain ajuda empresas a vencer os gargalos que impedem escala, performance e inovação.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 max-w-2xl">
                  <Button 
                    size="xl" 
                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="hidden sm:inline">Conheça Nossas Soluções</span>
                    <span className="sm:hidden">Nossas Soluções</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="xl" 
                    className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="hidden sm:inline">Agende uma Demonstração</span>
                    <span className="sm:hidden">Demonstração</span>
                  </Button>
                </div>

                {/* Subtle accent elements */}
                <div className="mt-16 flex items-center gap-8 opacity-60">
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full"></div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                    Transformação Digital Inteligente
                  </p>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;