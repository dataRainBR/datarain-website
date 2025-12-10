const ClientsSection = () => {
  const clientLogos = [
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
    },
    { 
      src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1765374457/$qu8c3afd6d", 
      alt: "Client logo 5" 
    },
    { 
      src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1765374457/$qrzdi5ftox", 
      alt: "Client logo 6" 
    },
    { 
      src: "https://d335luupugsy2.cloudfront.net/cms/files/734817/1765374457/$y257uj4zmvh", 
      alt: "Client logo 7" 
    }
  ];

  // Create 3 sets of logos for seamless animation
  const logoSets = Array(3).fill(clientLogos).flat();

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-8 md:mb-12">
          Alguns de Nossos Projetos
        </h2>
        <div className="backdrop-blur-md bg-white/30 p-4 md:p-8 rounded-2xl border border-white/40 shadow-lg overflow-hidden">
          <div className="overflow-hidden">
            <div className="marquee items-center gap-6 md:gap-8 lg:gap-12">
              {logoSets.map((logo, index) => (
                <div 
                  key={index}
                  className="h-12 sm:h-14 md:h-16 lg:h-20 w-24 sm:w-28 md:w-32 lg:w-40 flex-shrink-0 flex items-center justify-center"
                >
                  <img 
                    src={logo.src} 
                    alt={`${logo.alt} ${Math.floor(index / clientLogos.length) + 1}`} 
                    className="max-h-full max-w-full object-contain opacity-80" 
                  />
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