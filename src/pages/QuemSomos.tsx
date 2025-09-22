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
      <UniversalHeader backgroundImage={heroBackground} showHeroSection={false} />

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

      {/* Nossa Historia - Cards com estatísticas */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-muted/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Lado esquerdo - Texto principal */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight">
                  Nossa História
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                É nisso que a dataRain acredita. É por isso que somos a referência N°1 em nuvem AWS no Brasil. 
                Com os melhores profissionais em Cloud, IA & Dados e Cibersegurança.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Ajudamos você a não apenas resolver problemas com a tecnologia da sua empresa, mas nos tornamos 
                sua parceira estratégica, traçando um plano de desenvolvimento de maturidade para sua empresa 
                <span className="font-semibold text-primary"> ganhar mais</span>, 
                <span className="font-semibold text-accent"> gastar melhor</span> e 
                <span className="font-semibold text-primary"> inovar sempre</span>.
              </p>
            </div>
            
            {/* Lado direito - Cards de estatísticas */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="backdrop-blur-sm bg-white/70 border border-border/30 rounded-2xl p-6 shadow-primary hover:shadow-accent transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">#1</div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    Referência AWS<br />no Brasil
                  </div>
                </div>
              </div>
              
              <div className="backdrop-blur-sm bg-white/70 border border-border/30 rounded-2xl p-6 shadow-primary hover:shadow-accent transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-accent">100%</div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    Certificados<br />AWS
                  </div>
                </div>
              </div>
              
              <div className="backdrop-blur-sm bg-white/70 border border-border/30 rounded-2xl p-6 shadow-primary hover:shadow-accent transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">200+</div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    Projetos<br />Entregues
                  </div>
                </div>
              </div>
              
              <div className="backdrop-blur-sm bg-white/70 border border-border/30 rounded-2xl p-6 shadow-primary hover:shadow-accent transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-accent">5+</div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    Anos de<br />Experiência
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Reorganizada para vir antes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Conheça nossa equipe
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Os especialistas que fazem a dataRain ser referência em tecnologia
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {teamMembers.map((member, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-4">
                      <div className="backdrop-blur-sm bg-white/60 border border-border/20 rounded-3xl p-8 shadow-primary hover:shadow-accent transition-all duration-300 text-center group">
                        <Avatar className="w-24 h-24 mx-auto mb-4 ring-2 ring-primary/20 group-hover:ring-accent/40 transition-all duration-300">
                          <AvatarImage src={member.image} alt={member.name} />
                          <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                        <p className="text-muted-foreground mb-4">{member.role}</p>
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
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

      {/* Nossa Metodologia - Layout moderno com steps */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
              Nossa Metodologia
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Se o processo com o desenvolvimento tecnológico da sua empresa parece complexo, 
              aqui nós facilitamos através de um método construído e validado com dezenas de clientes.
            </p>
          </div>
          
          {/* Steps da metodologia */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {/* Step 1 */}
            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="relative">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-2xl md:text-3xl font-bold text-white">1</span>
                </div>
                <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-primary/20 rounded-full mx-auto animate-pulse"></div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary">Diagnóstico</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Análise completa da infraestrutura atual
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-2xl md:text-3xl font-bold text-white">2</span>
                </div>
                <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-accent/20 rounded-full mx-auto animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary">Planejamento</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Estratégia personalizada para sua empresa
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-2xl md:text-3xl font-bold text-white">3</span>
                </div>
                <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-primary/20 rounded-full mx-auto animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary">Implementação</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Execução com acompanhamento contínuo
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-2xl md:text-3xl font-bold text-white">4</span>
                </div>
                <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-accent/20 rounded-full mx-auto animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary">Evolução</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Melhoria contínua e inovação
              </p>
            </div>
          </div>
          
          {/* CTA destacada */}
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-sm bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-8 md:p-12 shadow-2xl text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Jornada do Zero à IA Avançada
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Entre em contato agora e ganhe uma <span className="font-bold text-accent">consultoria de 5h</span> para 
                receber o seu diagnóstico gratuito e descubra onde a sua empresa está nessa jornada!
              </p>
              <Button variant="hero" size="xl" className="hover-scale">
                Fazer Avaliação Gratuita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados - Social Proof */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Resultados Comprovados
            </h2>
            <p className="text-lg md:text-xl font-semibold text-primary">
              E quem afirma isso não somos nós, mas todos que já passaram por esse processo:
            </p>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <ClientsSection />

      {/* AWS Partnership Section - Redesenhado */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-accent/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossos Reconhecimentos
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Entre os melhores parceiros na América Latina
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center max-w-5xl mx-auto">
            <div className="backdrop-blur-sm bg-white/60 border border-border/20 rounded-2xl p-6 shadow-primary hover:shadow-accent transition-all duration-300 group">
              <img 
                src="https://datarain.com.br/wp-content/uploads/2024/01/DR_LOGO_WHITE.png" 
                alt="dataRain Logo" 
                className="h-12 md:h-16 w-auto mx-auto opacity-80 group-hover:opacity-100 transition-opacity filter brightness-0"
              />
            </div>
            <div className="backdrop-blur-sm bg-white/60 border border-border/20 rounded-2xl p-6 shadow-primary hover:shadow-accent transition-all duration-300 group">
              <img 
                src="https://datarain.com.br/wp-content/uploads/2024/01/aws-logo-png.png" 
                alt="AWS Logo" 
                className="h-12 md:h-16 w-auto mx-auto opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="backdrop-blur-sm bg-white/60 border border-border/20 rounded-2xl p-6 shadow-primary hover:shadow-accent transition-all duration-300 group">
              <img 
                src="https://datarain.com.br/wp-content/uploads/2025/05/nova-badge-e1746550889233.png" 
                alt="AWS Badge 1" 
                className="h-16 md:h-20 w-auto mx-auto opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="backdrop-blur-sm bg-white/60 border border-border/20 rounded-2xl p-6 shadow-primary hover:shadow-accent transition-all duration-300 group">
              <img 
                src="https://datarain.com.br/wp-content/uploads/2025/05/nova-badge-2-e1746550979294.png" 
                alt="AWS Badge 2" 
                className="h-16 md:h-20 w-auto mx-auto opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ISG Provider Lens Report Section - Grid responsivo e organizável */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Líder ISG
            </h2>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white leading-tight">
              PROVIDER LENS REPORT 2022 & <span className="text-orange-400">2023</span>
            </h3>
          </div>
          
          {/* Grid responsivo e facilmente editável */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {/* Badge 1 */}
            <div className="flex justify-center items-center p-4">
              <img 
                src="https://datarain.com.br/wp-content/uploads/2024/01/65.png" 
                alt="ISG Report Badge - Cloud Migration Services" 
                className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-auto hover:scale-105 transition-transform duration-300 object-contain"
              />
            </div>
            
            {/* Badge 2 */}
            <div className="flex justify-center items-center p-4">
              <img 
                src="https://datarain.com.br/wp-content/uploads/2024/01/64.png" 
                alt="ISG Report Badge - Cloud Management Services" 
                className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-auto hover:scale-105 transition-transform duration-300 object-contain"
              />
            </div>
            
            {/* Badge 3 */}
            <div className="flex justify-center items-center p-4">
              <img 
                src="https://datarain.com.br/wp-content/uploads/2024/01/62.png" 
                alt="ISG Report Badge - Cloud Development Services" 
                className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-auto hover:scale-105 transition-transform duration-300 object-contain"
              />
            </div>
            
            {/* Badge 4 */}
            <div className="flex justify-center items-center p-4">
              <img 
                src="https://datarain.com.br/wp-content/uploads/2024/01/63.png" 
                alt="ISG Report Badge - Data Analytics Services" 
                className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-auto hover:scale-105 transition-transform duration-300 object-contain"
              />
            </div>
            
            {/* Badge 5 */}
            <div className="flex justify-center items-center p-4">
              <img 
                src="https://datarain.com.br/wp-content/uploads/2024/01/699.png" 
                alt="ISG Report Badge - AI Services" 
                className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-auto hover:scale-105 transition-transform duration-300 object-contain"
              />
            </div>
            
            {/* Badge 6 */}
            <div className="flex justify-center items-center p-4">
              <img 
                src="https://datarain.com.br/wp-content/uploads/2024/01/700.png" 
                alt="ISG Report Badge - Security Services" 
                className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-auto hover:scale-105 transition-transform duration-300 object-contain"
              />
            </div>
            
            {/* Badge 7 - Spanning 2 columns on larger screens for balance */}
            <div className="flex justify-center items-center p-4 col-span-2 sm:col-span-1 lg:col-span-2">
              <img 
                src="https://datarain.com.br/wp-content/uploads/2024/01/777.png" 
                alt="ISG Report Badge - Leader 2023" 
                className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-auto hover:scale-105 transition-transform duration-300 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Primeira empresa do mundo - Design moderno com cards */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Lado esquerdo - Texto e badges */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="bg-gradient-to-r from-accent/20 to-primary/20 text-accent border border-accent/30 px-4 py-2 rounded-full text-sm font-medium">
                    Pioneiros no Mundo
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Uma das primeiras empresas do mundo habilitadas a desenvolver com:
                </h3>
              </div>
              
              {/* Technology badges */}
              <div className="grid grid-cols-2 gap-4">
                <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-4 text-center hover-scale">
                  <div className="w-8 h-8 bg-accent/20 rounded-lg mx-auto mb-2"></div>
                  <div className="text-white font-medium text-sm">AWS GenAI</div>
                </div>
                <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-4 text-center hover-scale">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg mx-auto mb-2"></div>
                  <div className="text-white font-medium text-sm">Machine Learning</div>
                </div>
                <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-4 text-center hover-scale">
                  <div className="w-8 h-8 bg-accent/20 rounded-lg mx-auto mb-2"></div>
                  <div className="text-white font-medium text-sm">Cloud Native</div>
                </div>
                <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-4 text-center hover-scale">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg mx-auto mb-2"></div>
                  <div className="text-white font-medium text-sm">AI Solutions</div>
                </div>
              </div>
            </div>
            
            {/* Lado direito - Imagem com efeito */}
            <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-6 hover-scale">
                  <img 
                    src="https://datarain.com.br/wp-content/uploads/2024/01/Copy-of-Home-5.png" 
                    alt="Primeiras empresas habilitadas" 
                    className="w-full max-w-md lg:max-w-lg h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section com homem certificado - Parallax like no original */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <img 
              src="https://datarain.com.br/wp-content/uploads/2024/02/homem-certificado.png" 
              alt="Homem certificado AWS" 
              className="max-w-md lg:max-w-lg h-auto opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Girls in Cloud Section - Única seção responsiva */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Coluna da Esquerda - Texto e Estatísticas */}
            <div className="lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center lg:text-left">
                Girls in Cloud
              </h3>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-12 text-center lg:text-left">
                Nosso projeto que impulsiona mulheres a entrarem na área da tecnologia e capacita-las para o mercado de trabalho.
              </p>
              
              {/* Estatísticas - Grid responsivo */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-8">
                <div className="text-center lg:text-left">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-2">3600</div>
                  <div className="text-lg lg:text-xl text-slate-600 italic">inscritas</div>
                </div>
                
                <div className="text-center lg:text-left">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-2">200</div>
                  <div className="text-lg lg:text-xl text-slate-600 italic">Selecionadas</div>
                </div>
                
                <div className="text-center lg:text-left">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-2">180</div>
                  <div className="text-lg lg:text-xl text-slate-600 italic">Formadas</div>
                </div>
              </div>
            </div>
            
            {/* Coluna da Direita - Imagem e Ano */}
            <div className="lg:order-2 relative">
              {/* Ano em destaque */}
              <div className="absolute -top-8 right-8 lg:right-16 z-0">
                <span className="text-6xl md:text-8xl lg:text-9xl font-bold text-orange-400/30 italic">2023</span>
              </div>
              
              {/* Imagem principal */}
              <div className="flex justify-center relative z-10">
                <img 
                  src="https://datarain.com.br/wp-content/uploads/2024/02/Copy-of-Home-2-1.png" 
                  alt="Girls in Cloud" 
                  className="w-full max-w-sm md:max-w-md h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação - Design moderno com ícones e animações */}
      <section className="py-20 bg-gradient-to-br from-white to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Muito além da nuvem
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
            <h3 className="text-xl md:text-2xl text-slate-700 font-light">
              Explore nossas áreas de atuação
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
            {/* Cloud Card */}
            <div className="group relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl blur-xl transform group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative backdrop-blur-sm bg-white/80 border border-slate-200/50 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-slate-900">Cloud</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Soluções completas em nuvem AWS para modernizar sua infraestrutura
                  </p>
                  <div className="pt-4">
                    <span className="text-sm text-primary font-medium">AWS Certified Team</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cybersecurity Card */}
            <div className="group relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/10 rounded-3xl blur-xl transform group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative backdrop-blur-sm bg-white/80 border border-slate-200/50 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-slate-900">
                    Cyber<br />Security
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Proteção avançada e compliance para garantir a segurança dos seus dados
                  </p>
                  <div className="pt-4">
                    <span className="text-sm text-accent font-medium">Security Specialists</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AI & ML Card */}
            <div className="group relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl transform group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative backdrop-blur-sm bg-white/80 border border-slate-200/50 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-slate-900">AI & ML</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Inteligência artificial e machine learning para inovação empresarial
                  </p>
                  <div className="pt-4">
                    <span className="text-sm text-primary font-medium">AI Pioneers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quote destaque */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="backdrop-blur-sm bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
              <blockquote className="text-lg md:text-xl text-slate-700 italic font-light leading-relaxed">
                "Aqui todos somos certificados AWS, desde o estagiário até o CEO!"
              </blockquote>
              <div className="mt-4">
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trabalhe Conosco - Seção integrada com selo */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
            
            {/* Coluna esquerda - Selo de feedback */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="inline-block">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-6 hover-scale">
                    <img 
                      src="https://datarain.com.br/wp-content/uploads/2024/09/Selo-de-Feedback-12a-Edicao-1024x1024.png" 
                      alt="Selo de Feedback - 12ª Edição" 
                      className="w-32 md:w-40 lg:w-48 h-auto mx-auto lg:mx-0"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <h4 className="text-xl md:text-2xl font-bold text-white">
                  Reconhecimento
                </h4>
                <p className="text-white/70">
                  Avaliação excepcional dos nossos clientes
                </p>
              </div>
            </div>
            
            {/* Coluna central e direita - Conteúdo principal */}
            <div className="lg:col-span-2 space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-center lg:text-left space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Trabalhe Conosco
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-primary rounded-full mx-auto lg:mx-0"></div>
              </div>
              
              <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 md:p-10 lg:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center lg:text-left">
                  Quer fazer parte do nosso time e se tornar um RainMaker?
                </h3>
                
                <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 text-center lg:text-left">
                  Junte-se a uma equipe de especialistas apaixonados por tecnologia e inovação. 
                  Na dataRain, você terá a oportunidade de trabalhar com as tecnologias mais avançadas 
                  e fazer parte da transformação digital de grandes empresas.
                </p>
                
                {/* Stats em cards menores */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-4 text-center hover-scale">
                    <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-1">100%</div>
                    <div className="text-white/80 text-sm">Certificados AWS</div>
                  </div>
                  <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-4 text-center hover-scale">
                    <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-1">5+</div>
                    <div className="text-white/80 text-sm">Anos de Mercado</div>
                  </div>
                  <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-4 text-center hover-scale">
                    <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-1">200+</div>
                    <div className="text-white/80 text-sm">Projetos Entregues</div>
                  </div>
                </div>
                
                <div className="text-center lg:text-left">
                  <Button variant="default" size="xl" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 text-lg shadow-2xl hover-scale" asChild>
                    <a href="https://www.linkedin.com/company/datarainconsulting" target="_blank" rel="noopener noreferrer">
                      VEJA NOSSAS VAGAS
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default QuemSomos;