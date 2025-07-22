import Logo from "./Logo";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Logo className="mb-4" />
            <p className="text-sm text-primary-foreground/80">
              DataRain é a parceira estratégica para empresas em tecnologia, 
              entregando soluções em cloud, dados e inteligência artificial.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Soluções</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent">Cloud</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent">Dados</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent">Inteligência Artificial</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent">Segurança</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent">Sobre nós</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent">Certificações</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent">Parcerias</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent">Carreiras</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Entre em contato conosco para saber mais sobre nossas soluções e como podemos ajudar sua empresa.
            </p>
            <Button variant="accent" size="lg">
              Fale Conosco
            </Button>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} DataRain. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-accent">Termos</a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent">Privacidade</a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;