const ClientsSection = () => {
  const clientLogos = [
    { 
      src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$qg47aiybhz", 
      alt: "Intelbras",
      name: "Intelbras"
    },
    { 
      src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$3xxdv2t83wy", 
      alt: "Prevent Senior",
      name: "Prevent Senior"
    },
    { 
      src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$ua279g4u52p", 
      alt: "Cemig",
      name: "Cemig"
    },
    { 
      src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$qlh5euyua6", 
      alt: "Cliente 4",
      name: ""
    },
    { 
      src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1765374457/$qu8c3afd6d", 
      alt: "Cliente 5",
      name: ""
    },
    { 
      src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1765374457/$qrzdi5ftox", 
      alt: "Cliente 6",
      name: ""
    },
    { 
      src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1765374457/$y257uj4zmvh", 
      alt: "Cliente 7",
      name: ""
    }
  ];

  // Create 3 sets of logos for seamless animation
  const logoSets = Array(3).fill(clientLogos).flat();

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-14">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
            Parceiros
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Alguns de Nossos Projetos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empresas que confiam na DataRain para sua transformação digital
          </p>
        </div>
        
          <div className="backdrop-blur-md bg-card/50 p-4 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl border border-border/50 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500">
            <div className="overflow-hidden">
              <div className="marquee items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24">
              {logoSets.map((logo, index) => (
                <div 
                  key={index}
                  className="group relative flex-shrink-0"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-10 sm:h-14 md:h-16 lg:h-20 xl:h-24 w-auto opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" 
                  />
                  {logo.name && (
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs font-medium text-primary whitespace-nowrap">{logo.name}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;