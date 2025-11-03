import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  clientName: string;
  clientLogo: string;
  backgroundImage: string;
}

const cases: CaseStudy[] = [
  {
    id: 1,
    title: "DevOps transforma infraestrutura e impulsiona eficiência operacional",
    description: "A Intelbras precisava estabelecer uma infraestrutura capaz de acompanhar o crescimento e as demandas do seu negócio de energia. Carecia de uma boa abordagem que garantisse escalabilidade, segurança e confiabilidade em seu ambiente de TI.",
    clientName: "Intelbras",
    clientLogo: "https://datarain.com.br/wp-content/uploads/2024/01/Copia-de-Intelbras.png",
    backgroundImage: "https://datarain.com.br/wp-content/uploads/2024/02/Modernizacao.png"
  },
  {
    id: 2,
    title: "Implementação de DevOps garante economia",
    description: "A empresa incorpora tecnologia de ponta em suas práticas médicas, incluindo equipamentos avançados de diagnóstico, terapias inovadoras e soluções médicas baseadas em evidências científicas. Além de investir em telemedicina e IA",
    clientName: "Prevent Senior",
    clientLogo: "https://datarain.com.br/wp-content/uploads/2024/01/Copia-de-Intelbras.png",
    backgroundImage: "https://datarain.com.br/wp-content/uploads/2024/02/Modernizacao.png"
  },
  {
    id: 3,
    title: "Centralização de dados com Amazon Glue",
    description: "Um dos desafios mais significativos enfrentados pela Cemig foi lidar com 160 operações de consulta a diferentes sistemas distribuídos. Para superar esse desafio, foi implementado o Amazon Glue",
    clientName: "Cemig",
    clientLogo: "https://datarain.com.br/wp-content/uploads/2024/01/Copia-de-Intelbras.png",
    backgroundImage: "https://datarain.com.br/wp-content/uploads/2024/02/Modernizacao.png"
  },
];

export default function CasesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full text-white text-xs sm:text-sm font-semibold mb-4 backdrop-blur-sm">
            Cases de Sucesso
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Transformações que Inspiram
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Conheça como ajudamos empresas a alcançarem resultados extraordinários
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {cases.map((caseStudy) => (
              <CarouselItem key={caseStudy.id} className="pl-4">
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-10" 
                    style={{ backgroundImage: `url(${caseStudy.backgroundImage})` }} 
                  />
                  <div className="relative z-10 p-8 md:p-10 lg:p-12 min-h-[400px] md:min-h-[450px] flex flex-col justify-between">
                    <div>
                      <div className="mb-6 md:mb-8">
                        <img
                          src={caseStudy.clientLogo}
                          alt={caseStudy.clientName}
                          className="h-10 md:h-14 w-auto bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg"
                        />
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight">
                        {caseStudy.title}
                      </h3>
                      
                      <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-3xl">
                        {caseStudy.description}
                      </p>
                    </div>
                    
                    <button className="text-accent hover:text-white font-semibold text-base md:text-lg inline-flex items-center gap-2 transition-colors self-start bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl backdrop-blur-sm">
                      <span className="hidden sm:inline">Leia o case completo</span>
                      <span className="sm:hidden">Ver case</span>
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="left-2 md:left-4 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm h-10 w-10 md:h-12 md:w-12" />
          <CarouselNext className="right-2 md:right-4 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm h-10 w-10 md:h-12 md:w-12" />
        </Carousel>
      </div>
    </section>
  );
}