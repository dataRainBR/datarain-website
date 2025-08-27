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
    <section className="pt-8 pb-6 md:pt-12 md:pb-8 lg:pt-16 lg:pb-10 text-white relative overflow-hidden px-4 md:px-0">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full relative"
      >
        <CarouselContent className="-ml-0">
            {cases.map((caseStudy) => (
              <CarouselItem key={caseStudy.id} className="pl-0">
                <div className="relative bg-gradient-to-r from-primary/95 to-primary w-full">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20" 
                    style={{ backgroundImage: `url(${caseStudy.backgroundImage})` }} 
                  />
                  <div className="flex items-center h-[480px] sm:h-[420px] md:h-[480px] relative z-10">
                    <div className="w-full">
                      <div className="container mx-auto px-4 py-6 md:py-8 lg:py-12">
                      <div className="max-w-5xl text-left">
                        <div className="mb-6 md:mb-8">
                          <img
                            src={caseStudy.clientLogo}
                            alt={caseStudy.clientName}
                            className="h-10 md:h-16 w-auto bg-white/10 backdrop-blur-sm rounded-lg px-3 md:px-4 py-2"
                          />
                        </div>
                        
                        <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 lg:mb-8 leading-tight">
                          {caseStudy.title}
                        </h3>
                        
                        <p className="text-white/90 text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 lg:mb-10 max-w-3xl">
                          {caseStudy.description}
                        </p>
                        
                        <button className="text-accent hover:text-accent/80 font-semibold text-base md:text-lg inline-flex items-center gap-2 transition-colors">
                          <span className="hidden sm:inline">Leia o case completo</span>
                          <span className="sm:hidden">Ver case</span>
                          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="left-2 md:left-6 z-20 bg-white/10 border-white/20 text-white hover:bg-white/20 h-10 w-10 md:h-12 md:w-12" />
          <CarouselNext className="right-2 md:right-6 z-20 bg-white/10 border-white/20 text-white hover:bg-white/20 h-10 w-10 md:h-12 md:w-12" />
          
          {/* Indicadores de paginação */}
          <div className="flex justify-center gap-2 md:gap-3 mt-3 md:mt-4">
            {cases.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/40"
              />
            ))}
          </div>
        </Carousel>
    </section>
  );
}