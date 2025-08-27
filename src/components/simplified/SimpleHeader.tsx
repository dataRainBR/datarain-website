// Versão simplificada do Header para WordPress
import { useState } from "react";

interface SimpleHeaderProps {
  backgroundImage: string;
}

const SimpleHeader = ({ backgroundImage }: SimpleHeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="hero-section">
      <img 
        src={backgroundImage} 
        alt="DataRain Hero Background" 
        className="hero-background"
      />
      <div className="hero-overlay" />
      
      {/* Navigation */}
      <div className="nav-container">
        <div className="container">
          <div className="nav-glass">
            <div className="nav-flex">
              <div className="logo">
                <img src="/assets/datarain-logo.png" alt="DataRain" className="h-8" />
              </div>
              
              <div className="nav-links">
                <a href="#solucoes" className="nav-link">Soluções</a>
                <a href="#sobre" className="nav-link">Sobre</a>
                <a href="#parceiros" className="nav-link">Parceiros</a>
                <a href="#blog" className="nav-link">Blog</a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <a href="#contato" className="btn btn-hero">
                  Fale Conosco
                </a>
                
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="mobile-menu-btn"
                  style={{ display: 'block', background: 'none', border: 'none', color: 'white', fontSize: '1.5rem' }}
                >
                  ☰
                </button>
              </div>
            </div>
            
            {mobileMenuOpen && (
              <div className="mobile-menu" style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <a href="#solucoes" className="nav-link">Soluções</a>
                  <a href="#sobre" className="nav-link">Sobre</a>
                  <a href="#parceiros" className="nav-link">Parceiros</a>
                  <a href="#blog" className="nav-link">Blog</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-glass">
              <h1 className="hero-title">
                Parceiro estratégico em
                <span className="hero-gradient-text"> cloud</span>
              </h1>
              <p className="hero-subtitle">
                Entregamos soluções em cloud, dados e inteligência artificial com segurança, 
                agilidade e foco em resultados.
              </p>

              <div className="hero-buttons">
                <a href="#solucoes" className="btn btn-hero btn-xl">
                  Conheça Nossas Soluções
                </a>
                <a href="#demonstracao" className="btn btn-glass btn-xl">
                  Agende uma Demonstração
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleHeader;