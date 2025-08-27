import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  backgroundImage: string;
}

const Header = ({ backgroundImage }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Soluções", href: "#" },
    { label: "Sobre", href: "#" },
    { label: "Parceiros", href: "#" },
    { label: "Blog", href: "#" }
  ];

  return (
    <header className="relative min-h-[85vh] flex flex-col overflow-hidden">
      <img 
        src={backgroundImage} 
        alt="DataRain Hero Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      
      {/* Navigation */}
      <nav className="relative z-50 pt-4 md:pt-6">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 py-4 px-4 md:px-6 shadow-2xl">
            <div className="flex justify-between items-center">
              <Logo className="text-white" />
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                {navItems.map((item) => (
                  <a 
                    key={item.label}
                    href={item.href} 
                    className="text-white/80 hover:text-white transition-all duration-300 relative group"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 backdrop-blur-sm"></div>
                  </a>
                ))}
              </div>

              {/* Mobile menu button & Desktop CTA */}
              <div className="flex items-center gap-4">
                <Button variant="accent" size="sm" className="shadow-xl backdrop-blur-sm">
                  <span className="hidden sm:inline">Fale Conosco</span>
                  <span className="sm:hidden">Contato</span>
                </Button>
                
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
            
            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden mt-4 pt-4 border-t border-white/20">
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a 
                      key={item.label}
                      href={item.href} 
                      className="text-white/80 hover:text-white transition-colors py-2"
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

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl md:rounded-3xl border border-white/10 p-6 md:p-8 lg:p-12 shadow-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Parceiro estratégico em
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> cloud</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                Entregamos soluções em cloud, dados e inteligência artificial com segurança, 
                agilidade e foco em resultados.
              </p>

              <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3 md:gap-4 max-w-2xl mx-auto">
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
    </header>
  );
};

export default Header;