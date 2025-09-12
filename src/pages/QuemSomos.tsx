import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import ClientsSection from "@/components/sections/ClientsSection";
import heroBackground from "@/assets/hero-background.jpg";

const QuemSomos = () => {
  const teamMembers = [
    {
      name: "João Silva",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/joaosilva"
    },
    {
      name: "Maria Santos",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=150&h=150&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/mariasantos"
    },
    {
      name: "Pedro Costa",
      role: "Head of Cloud",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/pedrocosta"
    },
    {
      name: "Ana Oliveira",
      role: "Head of AI",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/anaoliveira"
    },
    {
      name: "Carlos Lima",
      role: "Head of Security",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/carloslima"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader />

      {/* Hero Section - It's About People */}
      <header className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            It's About People
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed">
            A tecnologia por si só não move montanhas, mas as pessoas corretas sim, 
            e quando juntamos essas duas peças, essa união tem potencial de mudar o mundo.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              É nisso que a dataRain acredita
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              É por isso que somos a referência N°1 em nuvem AWS no Brasil. Com os melhores 
              profissionais em Cloud, IA & Dados e Cibersegurança. Ajudamos você a não apenas 
              resolver problemas com a tecnologia da sua empresa, mas nos tornamos sua parceira 
              estratégica, traçando um plano de desenvolvimento de maturidade para sua empresa 
              ganhar mais, gastar melhor e inovar sempre.
            </p>
            <p className="text-lg md:text-xl font-semibold text-primary">
              E quem afirma isso não somos nós, mas todos que já passaram por esse processo:
            </p>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <ClientsSection />

      {/* Explorar Cases Button */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <Button variant="hero" size="xl">
            Explorar Cases
          </Button>
        </div>
      </section>

      {/* Como conseguimos isso */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              E como conseguimos isso?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Se o processo com o desenvolvimento tecnológico da sua empresa parece complexo, 
              aqui nós facilitamos através de um método construído e validado com dezenas de 
              clientes, dos mais variados portes e setores. Uma jornada capaz de te guiar do 
              mais absoluto zero, até os mais avançados modelos de Inteligência Artificial.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/20 mt-12">
              <p className="text-lg md:text-xl font-semibold text-primary mb-6">
                Entre em contato agora e ganhe uma consultoria de 5h para receber o seu 
                diagnóstico gratuito e descubra onde a sua empresa está nessa jornada!
              </p>
              <Button variant="hero" size="xl">
                Fazer Avaliação
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Conheça quem faz a dataRain ser a maior especialista AWS do país:
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {teamMembers.map((member, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-4">
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/20 hover:shadow-xl transition-shadow text-center">
                        <Avatar className="w-24 h-24 mx-auto mb-4">
                          <AvatarImage src={member.image} alt={member.name} />
                          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                        <p className="text-muted-foreground mb-4">{member.role}</p>
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center backdrop-blur-md bg-white/40 p-8 rounded-2xl border border-white/40 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              Pronto para transformar seu negócio?
            </h2>
            <Button variant="hero" size="xl">
              Fale com um dos nossos especialistas
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;