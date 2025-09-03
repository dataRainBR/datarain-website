import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import heroBackground from "@/assets/hero-background.jpg";

const QuemSomos = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar consistente */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-lg py-2">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg border border-border/20 py-3 px-4 md:px-6">
            <div className="flex justify-between items-center">
              <div className="text-primary font-bold text-xl">dataRain</div>
              
              <div className="flex items-center gap-8">
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-6">
                  {["Quem Somos", "Soluções", "Serviços Gerenciados", "Cases", "Conteúdo", "Academy", "Blog"].map((item) => (
                    <a key={item} href="#" className="text-gray-700 hover:text-primary transition-colors px-4 py-2 rounded-lg">
                      {item}
                    </a>
                  ))}
                </div>
                
                {/* CTA Button */}
                <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  Fale Conosco
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section específica para Quem Somos */}
      <header className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Quem Somos
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Entre os melhores parceiros na América Latina
          </p>
        </div>
      </header>

      {/* Leadership Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Líder ISG Provider Lens Report 2022 & 2023
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow-lg border border-border/20 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Certificação {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Uma das primeiras empresas do mundo habilitadas a desenvolver com IA
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary rounded"></div>
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    Inovação em IA
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Pioneiros no desenvolvimento de soluções com inteligência artificial,
                  sempre à frente das principais tendências tecnológicas.
                </p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-2xl border-2 border-dashed border-border/30 aspect-square flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-muted rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  Imagem de Inovação
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Girls in Cloud Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-muted/50 rounded-2xl border-2 border-dashed border-border/30 aspect-square flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-muted rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  Girls in Cloud
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Girls in Cloud
                </h2>
                <div className="w-12 h-1 bg-accent rounded-full"></div>
              </div>
              
              <p className="text-lg text-foreground leading-relaxed">
                Nosso projeto que impulsiona mulheres a entrarem na área da tecnologia 
                e capacita-las para o mercado de trabalho.
              </p>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3600</div>
                  <p className="text-muted-foreground italic">inscritas</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">200</div>
                  <p className="text-muted-foreground italic">selecionadas</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">180</div>
                  <p className="text-muted-foreground italic">formadas</p>
                </div>
              </div>

              <div className="text-center mt-6">
                <span className="text-2xl font-bold text-accent italic">2023</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Muito além da nuvem
            </h2>
            <h3 className="text-xl md:text-2xl text-muted-foreground mb-8">
              Explore nossas áreas de atuação
            </h3>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Cloud", description: "Soluções completas em nuvem" },
              { title: "Cyber Security", description: "Proteção e segurança digital" },
              { title: "AI & ML", description: "Inteligência artificial e machine learning" }
            ].map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-border/20 hover:shadow-xl transition-shadow">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary rounded"></div>
                  </div>
                  <h4 className="text-xl font-bold text-primary">{area.title}</h4>
                  <p className="text-muted-foreground">{area.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground italic mb-8">
              Aqui todos somos certificados AWS, desde o estagiário até o CEO!
            </p>
            <Button variant="hero" size="xl">
              VEJA NOSSAS VAGAS
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center backdrop-blur-md bg-white/40 p-8 rounded-2xl border border-white/40 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Quer fazer parte do nosso time e se tornar um RainMaker?
            </h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Ver Vagas Disponíveis
              </Button>
              <Button 
                variant="glass" 
                size="xl"
                className="!bg-primary/10 !text-primary hover:!bg-primary/20"
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default QuemSomos;