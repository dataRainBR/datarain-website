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

      {/* Modern Hero Section - It's About People */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Background with subtle gradient splashes like home */}
        <div className="absolute inset-0">
          {/* Large Blue splash - top right */}
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
          
          {/* Large Orange splash - bottom left */}
          <div className="absolute -bottom-32 -left-32 w-[700px] h-[700px] bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Medium accent splashes */}
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-[450px] h-[450px] bg-accent/10 rounded-full blur-2xl"></div>
        </div>

        {/* Floating elements for additional depth */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-muted/20 rounded-full blur-2xl animate-pulse delay-500" />
        </div>

        {/* Content with modern glass card */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="backdrop-blur-sm bg-white/60 border border-border/20 rounded-3xl p-8 md:p-12 lg:p-16 shadow-primary">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  It's About
                </span>
                <br />
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent animate-pulse">
                  People
                </span>
              </h1>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed font-light">
                  A tecnologia por si só não move montanhas, mas as 
                  <span className="font-semibold text-accent"> pessoas corretas </span>
                  sim, e quando juntamos essas duas peças, essa união tem 
                  <span className="font-semibold text-primary"> potencial de mudar o mundo.</span>
                </p>
              </div>

              {/* Subtle call-to-action hint */}
              <div className="flex justify-center pt-8">
                <div className="w-1 h-16 bg-gradient-to-b from-primary/60 to-transparent rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-bounce" />
          </div>
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

      {/* AWS Partnership Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-8">
              Entre os melhores parceiros na América Latina
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center max-w-4xl mx-auto">
            <div className="flex justify-center">
              <img 
                src="https://datarain.com.br/wp-content/uploads/2024/01/DR_LOGO_WHITE.png" 
                alt="dataRain Logo" 
                className="h-12 md:h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="https://datarain.com.br/wp-content/uploads/2024/01/aws-logo-png.png" 
                alt="AWS Logo" 
                className="h-12 md:h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="https://datarain.com.br/wp-content/uploads/2025/05/nova-badge-e1746550889233.png" 
                alt="AWS Badge 1" 
                className="h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="https://datarain.com.br/wp-content/uploads/2025/05/nova-badge-2-e1746550979294.png" 
                alt="AWS Badge 2" 
                className="h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ISG Provider Lens Report Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-4">
              Líder
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground">
              ISG<br />
              PROVIDER<br />
              LENS<br />
              REPORT<br />
              2022 & <span className="text-accent">2023</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex justify-center">
              <img 
                src="https://datarain.com.br/wp-content/uploads/2024/01/65.png" 
                alt="ISG Report Badge 1" 
                className="max-w-full h-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform transition-transform"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="https://datarain.com.br/wp-content/uploads/2024/01/64.png" 
                alt="ISG Report Badge 2" 
                className="max-w-full h-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform transition-transform"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="https://datarain.com.br/wp-content/uploads/2024/01/62.png" 
                alt="ISG Report Badge 3" 
                className="max-w-full h-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform transition-transform"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="https://datarain.com.br/wp-content/uploads/2024/01/63.png" 
                alt="ISG Report Badge 4" 
                className="max-w-full h-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform transition-transform"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="https://datarain.com.br/wp-content/uploads/2024/01/699.png" 
                alt="ISG Report Badge 5" 
                className="max-w-full h-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform transition-transform"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="https://datarain.com.br/wp-content/uploads/2024/01/700.png" 
                alt="ISG Report Badge 6" 
                className="max-w-full h-auto opacity-90 hover:opacity-100 transition-opacity hover:scale-105 transform transition-transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Primeira empresa do mundo Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <img 
                src="https://datarain.com.br/wp-content/uploads/2024/01/Copy-of-Home-5.png" 
                alt="Primeiras empresas habilitadas" 
                className="w-full h-auto"
              />
            </div>
            <div className="lg:order-1">
              <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-8 leading-relaxed">
                Uma das primeiras empresas do<br />
                mundo habilitadas a<br />
                desenvolver com:
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Girls in Cloud Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Girls in Cloud
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Nosso projeto que impulsiona mulheres a entrarem na área da tecnologia e capacita-las para o mercado de trabalho.
              </p>
              
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">3600</div>
                  <div className="text-lg text-muted-foreground italic">inscritas</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">200</div>
                  <div className="text-lg text-muted-foreground italic">Selecionadas</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">180</div>
                  <div className="text-lg text-muted-foreground italic">Formadas</div>
                </div>
              </div>
              
              <div className="mt-8">
                <span className="text-6xl md:text-8xl font-bold text-accent/20 italic">2023</span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="https://datarain.com.br/wp-content/uploads/2024/02/Copy-of-Home-2-1.png" 
                alt="Girls in Cloud" 
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Muito além da nuvem
            </h2>
            <h3 className="text-xl md:text-2xl text-muted-foreground">
              Explore nossas áreas de atuação
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-border/20 hover:shadow-xl transition-shadow">
              <h4 className="text-2xl font-bold text-primary mb-4">Cloud</h4>
              <p className="text-muted-foreground">Soluções completas em nuvem AWS</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-border/20 hover:shadow-xl transition-shadow">
              <h4 className="text-2xl font-bold text-primary mb-4">Cyber Security</h4>
              <p className="text-muted-foreground">Proteção avançada para seus dados</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-border/20 hover:shadow-xl transition-shadow">
              <h4 className="text-2xl font-bold text-primary mb-4">AI & ML</h4>
              <p className="text-muted-foreground">Inteligência artificial aplicada</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
              Aqui todos somos certificados AWS, desde o estagiário até o CEO!
            </p>
          </div>
        </div>
      </section>

      {/* RainMaker Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8">
            Quer fazer parte do nosso time e se tornar um RainMaker?
          </h3>
          <Button variant="hero" size="xl" asChild>
            <a href="https://www.linkedin.com/company/datarainconsulting" target="_blank" rel="noopener noreferrer">
              VEJA NOSSAS VAGAS
            </a>
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Fale com um especialista
              </h2>
              <p className="text-lg text-muted-foreground">
                Preencha o formulário para que um de nossos consultores entre em contato com você, e possa agendar uma reunião com o especialista mais adequado para sua necessidade.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/20">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email corporativo*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Empresa*
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="employees" className="block text-sm font-medium text-foreground mb-2">
                      Número de funcionários*
                    </label>
                    <select
                      id="employees"
                      name="employees"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Selecione</option>
                      <option value="1-100">1 a 100</option>
                      <option value="101-500">101 a 500</option>
                      <option value="501-1500">501 a 1500</option>
                      <option value="1501-5000">1501 a 5000</option>
                      <option value="5000+">Mais de 5000</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-foreground mb-2">
                      Cargo*
                    </label>
                    <select
                      id="position"
                      name="position"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Selecione</option>
                      <option value="ceo">Presidência / CEO</option>
                      <option value="director">Diretoria</option>
                      <option value="manager">Gerência</option>
                      <option value="coordinator">Coordenação</option>
                      <option value="specialist">Especialista</option>
                      <option value="analyst">Analista</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="sector" className="block text-sm font-medium text-foreground mb-2">
                    Setor onde atua*
                  </label>
                  <select
                    id="sector"
                    name="sector"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Selecione</option>
                    <option value="admin">Administrativo/Financeiro</option>
                    <option value="hr">Recursos Humanos</option>
                    <option value="marketing">Marketing/Vendas</option>
                    <option value="logistics">Logística/Compras</option>
                    <option value="it">TI e Infraestrutura</option>
                    <option value="rd">Pesquisa e Desenvolvimento</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Celular
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="challenge" className="block text-sm font-medium text-foreground mb-2">
                    Qual seu principal desafio na tecnologia?
                  </label>
                  <textarea
                    id="challenge"
                    name="challenge"
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Já utiliza AWS?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="aws_usage" value="yes" className="mr-2" />
                      Sim
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="aws_usage" value="no" className="mr-2" />
                      Não
                    </label>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button type="submit" variant="hero" size="xl">
                    Submeter
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground text-center">
                  Prometemos não utilizar suas informações de contato para enviar qualquer tipo de SPAM.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;