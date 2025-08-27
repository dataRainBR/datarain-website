import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
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
      <header className="relative min-h-[85vh] flex flex-col overflow-hidden">
        <img 
          src={backgroundImage} 
          alt="DataRain Hero Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        
        {/* Hero Content */}
        <div className="flex-1 flex items-center relative z-10 pt-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh]">
              {/* Left side - Image placeholder */}
              <div className="flex justify-center lg:justify-start">
                <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 flex items-center justify-center shadow-2xl">
                  <div className="text-white/60 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm">Espaço para imagem</p>
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="flex justify-center lg:justify-end">
                <div className="max-w-xl">
                  <div className="backdrop-blur-xl bg-white/5 rounded-2xl md:rounded-3xl border border-white/10 p-6 md:p-8 lg:p-10 shadow-2xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                      Parceiro estratégico em
                      <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> cloud</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-10 leading-relaxed">
                      Entregamos soluções em cloud, dados e inteligência artificial com segurança, 
                      agilidade e foco em resultados.
                    </p>

                    <div className="flex flex-col gap-3 md:gap-4">
                      <Button variant="hero" size="xl" className="w-full shadow-xl">
                        <span className="hidden sm:inline">Conheça Nossas Soluções</span>
                        <span className="sm:hidden">Nossas Soluções</span>
                      </Button>
                      <Button variant="glass" size="xl" className="w-full shadow-xl">
                        <span className="hidden sm:inline">Agende uma Demonstração</span>
                        <span className="sm:hidden">Demonstração</span>
                      </Button>
                    </div>
                  </div>
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