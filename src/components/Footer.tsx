import Logo from "./Logo";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted/30 text-foreground py-20 border-t border-border">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4 space-y-6">
            <Logo variant="original" className="mb-6" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Parceira estratégica para empresas em tecnologia, 
              entregando soluções em cloud, dados e inteligência artificial.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-base font-semibold mb-6 text-foreground">Soluções</h3>
            <ul className="space-y-4">
              <li><a href="/solucoes/cloud" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cloud</a></li>
              <li><a href="/solucoes/dados" className="text-sm text-muted-foreground hover:text-primary transition-colors">Dados</a></li>
              <li><a href="/solucoes/cybersecurity" className="text-sm text-muted-foreground hover:text-primary transition-colors">Segurança</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-base font-semibold mb-6 text-foreground">Serviços</h3>
            <ul className="space-y-4">
              <li><a href="/servicos/squad-alocacao" className="text-sm text-muted-foreground hover:text-primary transition-colors">Squad Alocação</a></li>
              <li><a href="/servicos/suporte" className="text-sm text-muted-foreground hover:text-primary transition-colors">Suporte</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-base font-semibold mb-6 text-foreground">Empresa</h3>
            <ul className="space-y-4">
              <li><a href="/quem-somos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sobre nós</a></li>
              <li><a href="/academy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Academy</a></li>
              <li><a href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-base font-semibold mb-6 text-foreground">Contato</h3>
            <Button variant="default" size="default" className="w-full" asChild>
              <a href="/contato">Fale Conosco</a>
            </Button>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} DataRain. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="/termos" className="text-xs text-muted-foreground hover:text-primary transition-colors">Termos de Uso</a>
            <a href="/privacidade" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacidade</a>
            <a href="/cookies" className="text-xs text-muted-foreground hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;