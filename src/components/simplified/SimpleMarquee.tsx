// Versão simplificada do Marquee para WordPress
const SimpleMarquee = () => {
  const clientLogos = [
    "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$qg47aiybhz",
    "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$3xxdv2t83wy",
    "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$ua279g4u52p",
    "https://d335luupugsy2.cloudfront.net/cms/files/734817/1750179431/$qlh5euyua6"
  ];

  // Criar 4 conjuntos para animação contínua
  const logoSets = Array(4).fill(clientLogos).flat();

  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">
          Alguns de Nossos Projetos
        </h2>
        <div className="section-glass p-8">
          <div className="marquee-container">
            <div className="marquee">
              {logoSets.map((logo, index) => (
                <img 
                  key={index}
                  src={logo} 
                  alt={`Cliente ${index + 1}`} 
                  className="marquee-logo" 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleMarquee;