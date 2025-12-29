import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface UniversalHeaderProps {
  backgroundImage?: string;
  showHeroSection?: boolean;
}

const UniversalHeader = ({ backgroundImage, showHeroSection = false }: UniversalHeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const solucoesItems = [
    { label: "IA e Dados", href: "/solucoes/dados" },
    { label: "Cybersecurity", href: "/solucoes/cybersecurity" },
    { label: "Cloud", href: "/solucoes/cloud" }
  ];

  const servicosItems = [
    { label: "Squad & Alocação", href: "/servicos/squad-alocacao" },
    { label: "Suporte e Sustentação", href: "/servicos/suporte" }
  ];

  const navItems = [
    { label: "Quem Somos", href: "/quem-somos", isRoute: true },
  ];

  const menuItemsOrder = [
    { type: 'simple', label: "Quem Somos", href: "/quem-somos" },
    { type: 'dropdown', label: "Soluções", href: "/solucoes", items: solucoesItems },
    { type: 'simple', label: "Cases", href: "/cases" },
    { type: 'simple', label: "Blog", href: "/blog" },
    { type: 'dropdown', label: "Serviços Gerenciados", href: "/servicos", items: servicosItems },
    { type: 'simple', label: "Academy", href: "/academy" }
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
              : 'backdrop-blur-md bg-white/75 rounded-2xl border border-white/30 py-4 px-4 md:px-6 shadow-lg'
          }`}>
            <div className="flex justify-between items-center">
              <Link to="/">
                <Logo variant="original" />
              </Link>
              
              <div className="flex items-center gap-8">
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-2">
                  {menuItemsOrder.map((menuItem) => (
                    menuItem.type === 'simple' ? (
                      <Link 
                        key={menuItem.label}
                        to={menuItem.href} 
                        className={`transition-all duration-300 relative group px-4 py-2 rounded-lg ${
                          isScrolled 
                            ? 'text-gray-700 hover:text-primary' 
                            : 'text-gray-700 hover:text-primary'
                        }`}
                      >
                        <span className="relative z-10">{menuItem.label}</span>
                        <div className={`absolute inset-0 rounded-lg scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ${
                          isScrolled
                            ? 'bg-primary/10 border border-primary/20'
                            : 'bg-primary/10 backdrop-blur-sm border border-primary/20'
                        }`}></div>
                      </Link>
                    ) : (
                      <div key={menuItem.label} className="relative group">
                        <Link 
                          to={menuItem.href}
                          className={`transition-all duration-300 relative px-4 py-2 rounded-lg flex items-center gap-1 ${
                            isScrolled 
                              ? 'text-gray-700 hover:text-primary' 
                              : 'text-gray-700 hover:text-primary'
                          }`}
                        >
                          <span className="relative z-10">{menuItem.label}</span>
                          <ChevronDown className="h-4 w-4" />
                          <div className={`absolute inset-0 rounded-lg scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ${
                            isScrolled
                              ? 'bg-primary/10 border border-primary/20'
                              : 'bg-primary/10 backdrop-blur-sm border border-primary/20'
                          }`}></div>
                        </Link>
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-border/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                          <div className="py-2">
                            {menuItem.items?.map((item) => (
                              <Link
                                key={item.label}
                                to={item.href}
                                className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )
                  ))}
                </div>

                {/* Desktop CTA */}
                <Link to="/fale-conosco">
                  <Button 
                    variant="default"
                    size="sm" 
                    className="shadow-xl backdrop-blur-sm hidden lg:flex"
                  >
                    Fale Conosco
                  </Button>
                </Link>

                {/* Mobile menu button & Mobile CTA */}
                <div className="flex items-center gap-4 lg:hidden">
                  <Link to="/fale-conosco">
                    <Button 
                      variant="default"
                      size="sm" 
                      className="shadow-xl backdrop-blur-sm"
                    >
                      <span className="hidden sm:inline">Fale Conosco</span>
                      <span className="sm:hidden">Contato</span>
                    </Button>
                  </Link>
                  
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`p-2 rounded-lg transition-colors ${
                      isScrolled
                        ? 'text-gray-700 hover:bg-muted'
                        : 'text-gray-700 hover:bg-white/20'
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
                isScrolled ? 'border-gray-300' : 'border-gray-300'
              }`}>
                <div className="flex flex-col gap-4">
                  {menuItemsOrder.map((menuItem) => (
                    menuItem.type === 'simple' ? (
                      <Link
                        key={menuItem.label}
                        to={menuItem.href} 
                        className={`transition-colors py-2 ${
                          isScrolled
                            ? 'text-gray-700 hover:text-primary'
                            : 'text-gray-700 hover:text-primary'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {menuItem.label}
                      </Link>
                    ) : (
                      <div key={menuItem.label} className="border-t border-gray-300 pt-4 mt-2">
                        <Link
                          to={menuItem.href}
                          className="font-semibold text-gray-900 block mb-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {menuItem.label}
                        </Link>
                        {menuItem.items?.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            className="block py-2 pl-4 text-gray-700 hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section - Only shown on home page */}
      {showHeroSection && (
        <header className="relative min-h-[90vh] sm:min-h-[95vh] flex flex-col overflow-hidden bg-white">
          {/* Modern Background with Large Splashes */}
          <div className="absolute inset-0">
            {/* Large Blue splash - top right */}
            <div className="absolute -top-32 -right-32 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#3893af]/20 rounded-full blur-3xl animate-pulse"></div>
            
            {/* Large Orange splash - bottom left */}
            <div className="absolute -bottom-32 -left-32 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-[#f78504]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Medium accent splashes */}
            <div className="absolute top-1/3 right-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#3893af]/15 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/3 left-1/3 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-[#f78504]/15 rounded-full blur-2xl"></div>
          </div>
          
          {/* Hero Content */}
          <div className="flex-1 flex items-center relative z-10 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl">
                {/* Main Content */}
                <div className="text-left">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-6 md:mb-8 leading-tight">
                    <span className="text-gray-900">Seus desafios de</span>
                    <br />
                    <span style={{ color: '#3893af' }}> tecnologia </span>
                    <span className="text-gray-900">estão travando</span>
                    <br />
                    <span className="text-gray-900">o seu </span>
                    <span style={{ color: '#f78504' }}>crescimento?</span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-3xl">
                    A dataRain ajuda empresas a vencer os gargalos que impedem escala, performance e inovação.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 max-w-2xl">
                    <Button 
                      size="xl" 
                      className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
                      asChild
                    >
                      <a href="/solucoes">
                        <span className="hidden sm:inline">Conheça Nossas Soluções</span>
                        <span className="sm:hidden">Nossas Soluções</span>
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="xl" 
                      className="flex-1 border-2 border-[#3893af] text-[#3893af] hover:bg-[#3893af] hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
                      asChild
                    >
                      <a href="/fale-conosco">
                        <span className="hidden sm:inline">Agende uma Demonstração</span>
                        <span className="sm:hidden">Demonstração</span>
                      </a>
                    </Button>
                  </div>

                  {/* Subtle accent elements */}
                  <div className="mt-12 sm:mt-16 flex items-center gap-4 sm:gap-8 opacity-60">
                    <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full"></div>
                    <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider font-medium">
                      Transformação Digital Inteligente
                    </p>
                    <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default UniversalHeader;