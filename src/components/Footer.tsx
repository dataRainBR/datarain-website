import React from 'react';
import Logo from "./Logo";
import { Button } from "./ui/button";
import awsPartnerBadge from "@/assets/aws-partner-badge.png";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/datarainconsulting/posts/?feedView=all",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/datarainconsulting",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@dataRainConsulting",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-muted/50 to-muted/80 text-foreground py-12 sm:py-16 md:py-20 border-t border-border overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 mb-10 sm:mb-12 md:mb-16">
          <div className="sm:col-span-2 lg:col-span-2 space-y-6">
            <Logo variant="original" className="mb-6" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Parceira estratégica para empresas em tecnologia, entregando soluções em GenAI e Dados, Cybersecurity e Cloud.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold mb-6 text-foreground">Soluções</h3>
            <ul className="space-y-4">
              <li><a href="/solucoes/dados" className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"><span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all group-hover:after:w-full">GenAI e Dados</span></a></li>
              <li><a href="/solucoes/cybersecurity" className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"><span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all group-hover:after:w-full">Cybersecurity</span></a></li>
              <li><a href="/solucoes/cloud" className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"><span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all group-hover:after:w-full">Cloud</span></a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold mb-6 text-foreground">Serviços</h3>
            <ul className="space-y-4">
              <li><a href="/servicos/desenvolvimento-360" className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"><span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all group-hover:after:w-full">Desenvolvimento 360</span></a></li>
              <li><a href="/servicos/squad-alocacao" className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"><span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all group-hover:after:w-full">Squad Alocação</span></a></li>
              <li><a href="/servicos/suporte" className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"><span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all group-hover:after:w-full">Suporte</span></a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold mb-6 text-foreground">Produtos</h3>
            <ul className="space-y-4">
              <li><a href="/produtos/rainconsole" className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"><span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all group-hover:after:w-full">RainConsole</span></a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold mb-6 text-foreground">Empresa</h3>
            <ul className="space-y-4">
              <li><a href="/quem-somos" className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"><span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all group-hover:after:w-full">Sobre nós</span></a></li>
              <li><a href="/academy" className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"><span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all group-hover:after:w-full">Academy</span></a></li>
              <li><a href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"><span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all group-hover:after:w-full">Blog</span></a></li>
            </ul>
          </div>
          
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-base font-semibold mb-6 text-foreground">Contato</h3>
            <Button variant="default" size="default" className="w-full group" asChild>
              <a href="/fale-conosco" className="flex items-center justify-center gap-2">
                Fale Conosco
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
        
        {/* AWS Partner Badge */}
        <div className="flex justify-end mb-6">
          <img 
            src={awsPartnerBadge} 
            alt="AWS Partner - Advanced Tier Services" 
            className="h-16 sm:h-20 w-auto object-contain"
          />
        </div>

        <div className="pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} dataRain. Todos os direitos reservados.
          </p>
          <a href="/privacidade" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;