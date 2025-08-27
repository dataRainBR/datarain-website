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
    title: "Implementação de DevOps garante economia",
    description: "A empresa incorpora tecnologia de ponta em suas práticas médicas, incluindo equipamentos avançados de diagnóstico, terapias inovadoras e soluções médicas baseadas em evidências científicas. Além de investir em telemedicina e inteligência artificial.",
    clientName: "Preventiv Senior",
    clientLogo: "/placeholder.svg",
    backgroundImage: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Modernização completa de infraestrutura cloud",
    description: "Migração para AWS com arquitetura serverless resultou em redução de 60% nos custos operacionais e aumento significativo na performance e disponibilidade dos sistemas críticos.",
    clientName: "Banco Digital Leader",
    clientLogo: "/placeholder.svg",
    backgroundImage: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Data Lake e Analytics em tempo real",
    description: "Implementação de arquitetura moderna de dados permitindo análises avançadas e machine learning para tomada de decisões estratégicas baseadas em dados.",
    clientName: "Varejo Nacional",
    clientLogo: "/placeholder.svg",
    backgroundImage: "/placeholder.svg"
  },
  {
    id: 4,
    title: "IA Generativa transformando atendimento",
    description: "Chatbots inteligentes com GPT e automação de processos reduziram o tempo de atendimento em 70% e aumentaram a satisfação dos clientes para 95%.",
    clientName: "E-commerce Global",
    clientLogo: "/placeholder.svg",
    backgroundImage: "/placeholder.svg"
  }
];

export default function CasesSection() {
  return (
    <section className="py-16 text-white relative overflow-hidden">
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
                <div className="flex items-center h-[350px] relative z-10">
                  <div className="w-full">
                    <div className="container mx-auto px-4 py-8 md:py-12">
                      <div className="max-w-4xl text-left">
                        <div className="mb-8">
                          <img
                            src={caseStudy.clientLogo}
                            alt={caseStudy.clientName}
                            className="h-12 w-auto bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2"
                          />
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                          {caseStudy.title}
                        </h3>
                        
                        <p className="text-white/90 text-xl leading-relaxed mb-10 max-w-2xl">
                          {caseStudy.description}
                        </p>
                        
                        <button className="text-accent hover:text-accent/80 font-semibold text-lg inline-flex items-center gap-2 transition-colors">
                          Leia o case completo
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        
        <CarouselPrevious className="left-6 z-20 bg-white/10 border-white/20 text-white hover:bg-white/20 h-12 w-12" />
        <CarouselNext className="right-6 z-20 bg-white/10 border-white/20 text-white hover:bg-white/20 h-12 w-12" />
        
        {/* Indicadores de paginação */}
        <div className="flex justify-center gap-3 mt-8">
          {cases.map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full bg-white/40"
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}