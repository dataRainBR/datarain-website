import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import heroBackground from "@/assets/hero-background.jpg";
import astronautImage from "@/assets/astronaut-venturelabs.png";
import wagnerPhoto from "@/assets/team/wagner-andrade.jpg";
import guilhermePhoto from "@/assets/team/guilherme-belinelo.jpg";
import leandroPhoto from "@/assets/team/leandro-gotz.jpg";
import pedroPhoto from "@/assets/team/pedro-guth.jpg";
import thaisPhoto from "@/assets/team/thais-lino.jpg";
import caioPhoto from "@/assets/team/caio-marini.jpg";
import joseSawadaPhoto from "@/assets/team/jose-sawada.jpg";
import gilsonSanchesPhoto from "@/assets/team/gilson-sanches.jpg";
import marceloTavaresPhoto from "@/assets/team/marcelo-tavares.jpg";
import awsCertificationsBg from "@/assets/aws-certifications-bg.png";
import { 
  Cloud, 
  Shield, 
  Lightbulb, 
  Users, 
  Award, 
  Target,
  Building2,
  Rocket,
  Heart,
  GraduationCap,
  Brain,
  Lock,
  ArrowRight
} from "lucide-react";

const QuemSomos = () => {
  const teamMembers = [
    {
      name: "Wagner Andrade",
      role: "CEO",
      image: wagnerPhoto,
      linkedin: "https://www.linkedin.com/in/wagnerandrades/"
    },
    {
      name: "Guilherme Belinelo",
      role: "CTO",
      image: guilhermePhoto,
      linkedin: "https://www.linkedin.com/in/guilherme-belinelo-645330/"
    },
    {
      name: "Gilson Sanches",
      role: "COO",
      image: gilsonSanchesPhoto,
      linkedin: "https://www.linkedin.com/feed/"
    },
    {
      name: "Leandro Götz",
      role: "CPO",
      image: leandroPhoto,
      linkedin: "https://www.linkedin.com/in/leandrogotz/"
    },
    {
      name: "José Sawada",
      role: "Business Development Lead",
      image: joseSawadaPhoto,
      linkedin: "https://www.linkedin.com/in/jos%C3%A9-guilherme-sawada-662220/"
    },
    {
      name: "Marcelo Tavares",
      role: "Engineering Lead",
      image: marceloTavaresPhoto,
      linkedin: "https://www.linkedin.com/in/marcelo-m-b794b968/"
    },
    {
      name: "Pedro Guth",
      role: "Solutions Lead",
      image: pedroPhoto,
      linkedin: "https://www.linkedin.com/in/pedroguth/"
    },
    {
      name: "Thais Lino",
      role: "AI & Data Lead",
      image: thaisPhoto,
      linkedin: "https://www.linkedin.com/in/thaislino/"
    },
    {
      name: "Victor Matioli",
      role: "Cybersecurity Lead",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHXeDgm3qD3EA/profile-displayphoto-crop_800_800/B4DZibSSnLG8AI-/0/1754951921399?e=1768435200&v=beta&t=cVIvnLikOIGfOfQX9pa3Jiq-WDYxOvVvEhM5imCpnTg",
      linkedin: "https://www.linkedin.com/in/victormatioli/"
    },
    {
      name: "Caio Marini",
      role: "Cloud Lead",
      image: caioPhoto,
      linkedin: "https://www.linkedin.com/in/caio-marini/"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader backgroundImage={heroBackground} showHeroSection={false} />

      {/* Hero Section Moderna e Humanizada */}
      <header className="relative pt-40 sm:pt-44 md:pt-48 lg:pt-52 pb-20 md:pb-24 lg:pb-28 overflow-hidden bg-white">
        {/* Modern Background with Large Splashes */}
        <div className="absolute inset-0">
          {/* Large Blue splash - top right */}
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#3893af]/20 rounded-full blur-3xl animate-pulse"></div>
          
          {/* Large Orange splash - bottom left */}
          <div className="absolute -bottom-32 -left-32 w-[700px] h-[700px] bg-[#f78504]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Medium accent splashes */}
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#3893af]/15 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-[450px] h-[450px] bg-[#f78504]/15 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            
            {/* Main content */}
            <div className="text-center space-y-8 md:space-y-12">
              
              {/* Heading section */}
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                  Quem <span style={{ color: '#f78504' }}>Somos</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Por trás da dataRain estão pessoas apaixonadas por tecnologia, 
                  inovação e pela oportunidade de fazer a diferença no mundo dos negócios.
                </p>
              </div>

              {/* Human elements */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
                <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-2xl bg-card/50 border border-border/50 hover:bg-card transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Paixão</h3>
                  <p className="text-sm text-muted-foreground">Pelo que fazemos e pelos resultados que entregamos</p>
                </div>
                
                <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-2xl bg-card/50 border border-border/50 hover:bg-card transition-colors">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground">Colaboração</h3>
                  <p className="text-sm text-muted-foreground">Trabalhamos juntos para superar desafios</p>
                </div>
                
                <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-2xl bg-card/50 border border-border/50 hover:bg-card transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Foco</h3>
                  <p className="text-sm text-muted-foreground">Em soluções que realmente fazem a diferença</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* Nossa Historia - Cards com estatísticas */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-muted/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-primary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Lado esquerdo - Texto principal */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight">
                  Nossa História
                </h2>
                <div className="w-24 h-1 bg-gradient-modern rounded-full"></div>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                É nisso que a dataRain acredita. É por isso que somos a referência N°1 em nuvem AWS no Brasil. 
                Com os melhores profissionais em IA e Dados, Cybersecurity e Cloud.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Ajudamos você a não apenas resolver problemas com a tecnologia da sua empresa, mas nos tornamos 
                sua parceira estratégica, traçando um plano de desenvolvimento de maturidade para sua empresa 
                <span className="font-semibold text-primary"> ganhar mais</span>, 
                <span className="font-semibold text-primary"> gastar melhor</span> e 
                <span className="font-semibold text-primary"> inovar sempre</span>.
              </p>
            </div>
            
            {/* Lado direito - Cards de estatísticas */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="backdrop-blur-sm bg-white/70 border border-border/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">#1</div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    Referência AWS<br />no Brasil
                  </div>
                </div>
              </div>
              
              <div className="backdrop-blur-sm bg-white/70 border border-border/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    Certificados<br />AWS
                  </div>
                </div>
              </div>
              
              <div className="backdrop-blur-sm bg-white/70 border border-border/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">200+</div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    Projetos<br />Entregues
                  </div>
                </div>
              </div>
              
              <div className="backdrop-blur-sm bg-white/70 border border-border/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">5+</div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    Anos de<br />Experiência
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VentureLabs Section - 60% White, 30% Black, 10% Purple */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* SVG Pattern Background - similar to VentureLabs */}
        <svg 
          aria-hidden="true" 
          className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
          style={{ zIndex: 0 }}
        >
          <defs>
            <pattern id="venturelabs-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <rect x="10" y="10" width="80" height="100" fill="none" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="1" transform="skewY(-10)" />
              <rect x="110" y="60" width="70" height="90" fill="none" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="1" transform="skewY(8)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#venturelabs-pattern)" />
        </svg>

        {/* Interactive background effects */}
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          {/* Gradient orbs with animation */}
          <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-gradient-radial from-purple-400/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-20 left-20 w-[350px] h-[350px] bg-gradient-radial from-purple-600/15 via-purple-400/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
          
          {/* Interactive geometric shapes - VentureLabs style */}
          <div className="geometric-shape absolute top-[20%] left-[8%] w-24 h-32 border-2 border-purple-400/40" style={{ transform: 'skewY(-8deg)', animationDelay: '0s' }}></div>
          <div className="geometric-shape absolute top-[50%] left-[12%] w-20 h-28 border-2 border-purple-500/40" style={{ transform: 'skewY(6deg)', animationDelay: '1.2s' }}></div>
          <div className="geometric-shape absolute top-[70%] left-[6%] w-28 h-36 border-2 border-purple-400/40" style={{ transform: 'skewY(-10deg)', animationDelay: '2.4s' }}></div>
          <div className="geometric-shape absolute top-[15%] right-[38%] w-22 h-30 border-2 border-purple-500/40" style={{ transform: 'skewY(8deg)', animationDelay: '0.8s' }}></div>
          <div className="geometric-shape absolute top-[45%] right-[42%] w-26 h-34 border-2 border-purple-400/40" style={{ transform: 'skewY(-6deg)', animationDelay: '1.6s' }}></div>
          <div className="geometric-shape absolute top-[65%] left-[20%] w-24 h-30 border-2 border-purple-500/40" style={{ transform: 'skewY(10deg)', animationDelay: '0.4s' }}></div>
          
          {/* Astronaut positioned on the right side - without border and animation */}
          <div className="absolute right-0 bottom-0 w-[400px] h-[600px] lg:w-[500px] lg:h-[700px] opacity-90 pointer-events-none hidden md:block" style={{ zIndex: 2 }}>
            <img 
              src={astronautImage} 
              alt="VentureLabs Astronaut" 
              className="w-full h-full object-contain object-bottom"
              style={{
                filter: 'drop-shadow(0 0 50px rgba(139, 92, 246, 0.4))',
                mixBlendMode: 'normal'
              }}
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20 animate-fade-in">
              <div className="inline-flex items-center gap-4 mb-6 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight">
                  Nossa Holding: <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">VentureLabs</span>
                </h2>
              </div>
              <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 rounded-full mx-auto shadow-lg shadow-purple-500/50"></div>
            </div>

            {/* Main content grid - Balanced layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left side - Main content */}
              <div className="space-y-6 animate-fade-in">
                <div className="group bg-white/80 backdrop-blur-sm border-2 border-black/10 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Rocket className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-purple-600 transition-colors duration-300">Estúdio de Inovação</h3>
                      <p className="text-gray-700 leading-relaxed text-base">
                        Por trás da dataRain, pulsa a VentureLabs — um estúdio de inovação que atua na 
                        interseção entre tecnologia, design e negócios.
                      </p>
                    </div>
                  </div>
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transition-all duration-500"></div>
                </div>

                <div className="group bg-white/80 backdrop-blur-sm border-2 border-black/10 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-purple-600 transition-colors duration-300">40+ Anos de Legado</h3>
                      <p className="text-gray-700 leading-relaxed text-base">
                        Com mais de 40 anos de legado em projetos tecnológicos e espírito "maker" no DNA, 
                        oferecemos suporte estratégico, operacional e criativo.
                      </p>
                    </div>
                  </div>
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transition-all duration-500"></div>
                </div>

                <div className="relative bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200/50 rounded-3xl p-6 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <p className="text-center text-gray-700 italic font-light text-base leading-relaxed relative z-10">
                    "Quando você escolhe trabalhar conosco, você está conectado a uma rede 
                    que fortalece nossas entregas"
                  </p>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent rounded-full"></div>
                </div>
              </div>

              {/* Right side - Benefits */}
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
                    Por que isso importa para você?
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed font-medium">
                    Cliente da dataRain
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="group bg-gradient-to-br from-white to-purple-50/30 border-2 border-black/10 rounded-2xl p-6 hover:scale-[1.03] hover:border-purple-500/50 transition-all duration-400 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-black text-lg">Mais Velocidade</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed pl-14 text-sm">
                      Rede de talentos e metodologias que aceleram entregas
                    </p>
                  </div>

                  <div className="group bg-gradient-to-br from-white to-purple-50/30 border-2 border-black/10 rounded-2xl p-6 hover:scale-[1.03] hover:border-purple-500/50 transition-all duration-400 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-black text-lg">Risco Calculado</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed pl-14 text-sm">
                      Cultura de inovação com decisões estratégicas fundamentadas
                    </p>
                  </div>

                  <div className="group bg-gradient-to-br from-white to-purple-50/30 border-2 border-black/10 rounded-2xl p-6 hover:scale-[1.03] hover:border-purple-500/50 transition-all duration-400 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        <Lightbulb className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-black text-lg">Mais Ambição</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed pl-14 text-sm">
                      Investimentos e ousadia para alcançar transformação digital completa
                    </p>
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
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                    <div className="p-4 h-full">
                      <div className="backdrop-blur-sm bg-white/60 border border-border/20 rounded-3xl p-8 shadow-primary hover:shadow-accent transition-all duration-300 text-center group h-full flex flex-col justify-between">
                        <Avatar className="w-24 h-24 mx-auto mb-4 ring-2 ring-primary/20 group-hover:ring-accent/40 transition-all duration-300">
                          <AvatarImage 
                            src={member.image} 
                            alt={member.name} 
                            className="object-cover"
                            style={{ 
                              objectPosition: (member.name === "Gilson Sanches" || member.name === "José Sawada") 
                                ? "center 5%"
                                : "center top" 
                            }}
                          />
                          <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                        <p className="text-muted-foreground mb-4">{member.role}</p>
                        <div className="flex justify-center">
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
                <div className="w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Target className="w-8 h-8 text-white" />
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
                <div className="w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-primary/20 rounded-full mx-auto animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary">Planejamento</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Estratégia personalizada para sua empresa
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Rocket className="w-8 h-8 text-white" />
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
                <div className="w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-primary/20 rounded-full mx-auto animate-pulse" style={{ animationDelay: '1.5s' }}></div>
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
              <Button variant="hero" size="xl" className="hover-scale" asChild>
                <a href="/fale-conosco">Fazer Avaliação Gratuita</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Comprovados - Integrado com Projetos */}
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
          
          {/* Carrossel de projetos integrado */}
          <div className="backdrop-blur-md bg-white/30 p-4 md:p-8 rounded-2xl border border-white/40 shadow-lg overflow-hidden">
            <div className="overflow-hidden">
              <div className="marquee items-center gap-6 md:gap-8 lg:gap-12">
                {[
                  { 
                    src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$qg47aiybhz", 
                    alt: "Client logo 1" 
                  },
                  { 
                    src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$3xxdv2t83wy", 
                    alt: "Client logo 2" 
                  },
                  { 
                    src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$ua279g4u52p", 
                    alt: "Client logo 3" 
                  },
                  { 
                    src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$qlh5euyua6", 
                    alt: "Client logo 4" 
                  }
                ].concat([
                  { 
                    src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$qg47aiybhz", 
                    alt: "Client logo 1" 
                  },
                  { 
                    src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$3xxdv2t83wy", 
                    alt: "Client logo 2" 
                  },
                  { 
                    src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$ua279g4u52p", 
                    alt: "Client logo 3" 
                  },
                  { 
                    src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$qlh5euyua6", 
                    alt: "Client logo 4" 
                  }
                ]).concat([
                  { 
                    src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$qg47aiybhz", 
                    alt: "Client logo 1" 
                  },
                  { 
                    src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$3xxdv2t83wy", 
                    alt: "Client logo 2" 
                  },
                  { 
                    src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$ua279g4u52p", 
                    alt: "Client logo 3" 
                  },
                  { 
                    src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$qlh5euyua6", 
                    alt: "Client logo 4" 
                  }
                ]).concat([
                  { 
                    src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$qg47aiybhz", 
                    alt: "Client logo 1" 
                  },
                  { 
                    src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$3xxdv2t83wy", 
                    alt: "Client logo 2" 
                  },
                  { 
                    src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$ua279g4u52p", 
                    alt: "Client logo 3" 
                  },
                  { 
                    src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$qlh5euyua6", 
                    alt: "Client logo 4" 
                  }
                ]).map((logo, index) => (
                  <img 
                    key={index}
                    src={logo.src} 
                    alt={`${logo.alt} ${Math.floor(index / 4) + 1}`} 
                    className="h-8 sm:h-10 md:h-14 lg:h-16 xl:h-20 w-auto opacity-80 flex-shrink-0" 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separador visual */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Amazon Bedrock - Design original com logo contrastado */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Lado esquerdo - Texto */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="bg-primary text-white px-6 py-3 rounded-full text-sm font-bold tracking-wide uppercase shadow-lg">
                    PIONEIROS NO MUNDO
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
                  Líder no desenvolvimento de soluções com:
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </div>
              
              {/* Technology badges originais */}
              <div className="grid grid-cols-2 gap-4">
                <div className="backdrop-blur-sm bg-white/60 border border-border/20 rounded-2xl p-6 text-center hover-scale group shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-accent transition-colors duration-300 shadow-md">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-foreground font-bold text-sm md:text-base">AWS GenAI</div>
                </div>
                <div className="backdrop-blur-sm bg-white/60 border border-border/20 rounded-2xl p-6 text-center hover-scale group shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-accent transition-colors duration-300 shadow-md">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-foreground font-bold text-sm md:text-base">Machine Learning</div>
                </div>
                <div className="backdrop-blur-sm bg-white/60 border border-border/20 rounded-2xl p-6 text-center hover-scale group shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-accent transition-colors duration-300 shadow-md">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-foreground font-bold text-sm md:text-base">Cloud Native</div>
                </div>
                <div className="backdrop-blur-sm bg-white/60 border border-border/20 rounded-2xl p-6 text-center hover-scale group shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-accent transition-colors duration-300 shadow-md">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-foreground font-bold text-sm md:text-base">AI Solutions</div>
                </div>
              </div>
              
              {/* Destaque adicional */}
              <div className="backdrop-blur-sm bg-primary/10 border border-primary/20 rounded-2xl p-6 shadow-lg">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  <span className="font-bold text-primary">Primeiro parceiro AWS</span> no Brasil 
                  habilitado para Amazon Bedrock e soluções de IA Generativa
                </p>
              </div>
            </div>
            
            {/* Lado direito - Imagem com fundo escuro para contraste do logo Amazon Bedrock */}
            <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
                <div className="relative bg-slate-900 border border-slate-700 rounded-3xl p-6 hover-scale shadow-xl">
                  <img 
                    src="https://datarain.com.br/wp-content/uploads/2024/01/Copy-of-Home-5.png" 
                    alt="Primeiras empresas habilitadas para Amazon Bedrock" 
                    className="w-full max-w-md lg:max-w-lg h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separador visual */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Section com certificações AWS */}
      <section className="pt-48 pb-0 relative overflow-hidden min-h-[500px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${awsCertificationsBg})` }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center items-end">
            <img 
              src="https://datarain.com.br/wp-content/uploads/2024/02/homem-certificado.png" 
              alt="Homem certificado AWS" 
              className="max-w-xs lg:max-w-sm h-auto"
            />
          </div>
        </div>
      </section>

      {/* Separador visual */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Girls in Cloud Section - Design mais limpo e focado */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            
            {/* Conteúdo centralizado */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="bg-accent text-white px-6 py-3 rounded-full text-sm font-bold tracking-wide uppercase shadow-lg">
                  PROJETO SOCIAL
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Girls in Cloud
                </span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary rounded-full mx-auto"></div>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto">
                Nosso projeto que <span className="font-bold text-accent">impulsiona mulheres</span> a entrarem na área da tecnologia e 
                <span className="font-bold text-primary"> capacita-las para o mercado de trabalho</span>.
              </p>
            </div>
            
            {/* Estatísticas em grid horizontal mais limpo */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center hover-scale group shadow-lg">
                <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">3.600</div>
                <div className="text-sm text-slate-600 font-medium">Inscritas</div>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center hover-scale group shadow-lg">
                <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">200</div>
                <div className="text-sm text-slate-600 font-medium">Selecionadas</div>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center hover-scale group shadow-lg">
                <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">180</div>
                <div className="text-sm text-slate-600 font-medium">Formadas</div>
              </div>
            </div>
            
            {/* Call-to-action simplificado */}
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-6 max-w-2xl mx-auto animate-fade-in shadow-lg" style={{ animationDelay: '0.4s' }}>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                <span className="font-bold text-accent">Transformando vidas</span> através da tecnologia e 
                <span className="font-bold text-primary"> criando oportunidades</span> no mercado de trabalho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação - Design moderno com ícones e animações */}
      <section className="py-20 bg-gradient-to-br from-white to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
              Muito além da nuvem
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
            <h3 className="text-xl md:text-2xl text-slate-600 font-light">
              Explore nossas áreas de atuação
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
            {/* IA e Dados Card */}
            <Link to="/solucoes/dados" className="group relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/10 rounded-3xl blur-xl transform group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative backdrop-blur-sm bg-white/80 border border-slate-200/50 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale h-full flex flex-col">
                <div className="text-center space-y-6 flex flex-col flex-1">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-slate-800 min-h-[80px] flex items-center justify-center">IA e Dados</h4>
                  <p className="text-slate-600 leading-relaxed flex-1">
                    Inteligência artificial e arquitetura de dados para inovação empresarial
                  </p>
                  <div className="pt-4">
                    <span className="text-sm text-accent font-medium">AI & Data Pioneers</span>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Cybersecurity Card */}
            <Link to="/solucoes/cybersecurity" className="group relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl blur-xl transform group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative backdrop-blur-sm bg-white/80 border border-slate-200/50 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale h-full flex flex-col">
                <div className="text-center space-y-6 flex flex-col flex-1">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-slate-800 min-h-[80px] flex items-center justify-center">
                    Cybersecurity
                  </h4>
                  <p className="text-slate-600 leading-relaxed flex-1">
                    Proteção avançada e compliance para garantir a segurança dos seus dados
                  </p>
                  <div className="pt-4">
                    <span className="text-sm text-primary font-medium">Security Specialists</span>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Cloud Card */}
            <Link to="/solucoes/cloud" className="group relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl blur-xl transform group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative backdrop-blur-sm bg-white/80 border border-slate-200/50 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale h-full flex flex-col">
                <div className="text-center space-y-6 flex flex-col flex-1">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-slate-800 min-h-[80px] flex items-center justify-center">Cloud</h4>
                  <p className="text-slate-600 leading-relaxed flex-1">
                    Soluções completas em nuvem AWS para modernizar sua infraestrutura
                  </p>
                  <div className="pt-4">
                    <span className="text-sm text-primary font-medium">AWS Certified Team</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Quote destaque */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="backdrop-blur-sm bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
              <blockquote className="text-lg md:text-xl text-slate-600 italic font-light leading-relaxed">
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
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
            
            {/* Coluna esquerda - Selo de feedback */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="inline-block">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
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
                <div className="w-24 h-1 bg-gradient-modern rounded-full mx-auto lg:mx-0"></div>
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
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">100%</div>
                    <div className="text-white/80 text-sm">Certificados AWS</div>
                  </div>
                  <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-4 text-center hover-scale">
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">5+</div>
                    <div className="text-white/80 text-sm">Anos de Mercado</div>
                  </div>
                  <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-4 text-center hover-scale">
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">200+</div>
                    <div className="text-white/80 text-sm">Projetos Entregues</div>
                  </div>
                </div>
                
                <div className="text-center lg:text-left">
                  <Button variant="default" size="xl" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 text-lg shadow-2xl hover-scale" asChild>
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