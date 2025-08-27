import { Card, CardContent } from "@/components/ui/card";
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
    <section className="py-16 bg-gradient-to-r from-primary/95 to-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cases de <span className="text-accent">Sucesso</span>
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Transformamos negócios através de soluções inovadoras
          </p>
        </div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {cases.map((caseStudy) => (
              <CarouselItem key={caseStudy.id}>
                <div className="text-center px-4 md:px-12">
                  <div className="mb-8">
                    <img
                      src={caseStudy.clientLogo}
                      alt={caseStudy.clientName}
                      className="h-12 md:h-16 w-auto mx-auto bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2"
                    />
                  </div>
                  
                  <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                      {caseStudy.title}
                    </h3>
                    
                    <p className="text-white/90 text-lg leading-relaxed mb-8">
                      {caseStudy.description}
                    </p>
                    
                    <button className="text-accent hover:text-accent/80 font-semibold inline-flex items-center gap-2 transition-colors">
                      Leia o case completo
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="left-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
          <CarouselNext className="right-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
        </Carousel>
        
        {/* Indicadores de paginação */}
        <div className="flex justify-center gap-2 mt-8">
          {cases.map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full bg-white/30"
            />
          ))}
        </div>
      </div>
    </section>
  );
}