import Logo from "./Logo";
import { Button } from "./ui/button";
import { Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/datarainbr/",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/dataabordo/",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/@dataabordo",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-muted/50 to-muted/80 text-foreground py-20 border-t border-border overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4 space-y-6">
            <Logo variant="original" className="mb-6" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Parceira estratégica para empresas em tecnologia, entregando soluções em IA e Dados, Cybersecurity e Cloud.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* AWS Partner Badge */}
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-card/50 rounded-lg border border-border/50">
                <svg className="w-6 h-6 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.415-.287-.807-.414l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.176 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z"/>
                </svg>
                <span className="text-xs font-medium text-muted-foreground">AWS Premier Partner</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-base font-semibold mb-6 text-foreground">Soluções</h3>
            <ul className="space-y-4">
              <li><a href="/solucoes/dados" className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"><span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all group-hover:after:w-full">IA e Dados</span></a></li>
              <li><a href="/solucoes/cybersecurity" className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"><span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all group-hover:after:w-full">Cybersecurity</span></a></li>
              <li><a href="/solucoes/cloud" className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"><span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all group-hover:after:w-full">Cloud</span></a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-base font-semibold mb-6 text-foreground">Serviços</h3>
            <ul className="space-y-4">
              <li><a href="/servicos/squad-alocacao" className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"><span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all group-hover:after:w-full">Squad Alocação</span></a></li>
              <li><a href="/servicos/suporte" className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"><span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all group-hover:after:w-full">Suporte</span></a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-base font-semibold mb-6 text-foreground">Empresa</h3>
            <ul className="space-y-4">
              <li><a href="/quem-somos" className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"><span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all group-hover:after:w-full">Sobre nós</span></a></li>
              <li><a href="/academy" className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"><span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all group-hover:after:w-full">Academy</span></a></li>
              <li><a href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"><span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all group-hover:after:w-full">Blog</span></a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
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
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} DataRain. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="/privacidade" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;