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
  image: string;
  results: string[];
}

const cases: CaseStudy[] = [
  {
    id: 1,
    title: "Modernização de Infraestrutura Cloud",
    description: "Migração completa para AWS com redução de 40% nos custos operacionais e aumento de 99.9% na disponibilidade dos sistemas.",
    clientName: "Banco Digital Líder",
    clientLogo: "/placeholder.svg",
    image: "/placeholder.svg",
    results: ["40% redução de custos", "99.9% disponibilidade", "50% mais performance"]
  },
  {
    id: 2,
    title: "Implementação de Data Lake",
    description: "Construção de arquitetura de dados moderna para análises em tempo real e machine learning.",
    clientName: "Varejo Nacional",
    clientLogo: "/placeholder.svg", 
    image: "/placeholder.svg",
    results: ["10x mais velocidade", "Insights em tempo real", "ML automatizado"]
  },
  {
    id: 3,
    title: "Automação com IA Generativa",
    description: "Implementação de chatbots inteligentes e automação de processos com GPT, resultando em 60% de redução no tempo de atendimento.",
    clientName: "E-commerce Multinacional",
    clientLogo: "/placeholder.svg",
    image: "/placeholder.svg", 
    results: ["60% menos tempo", "24/7 atendimento", "95% satisfação"]
  },
  {
    id: 4,
    title: "Segurança e Compliance",
    description: "Implementação completa de governança, segurança e compliance em ambiente multi-cloud seguindo as melhores práticas.",
    clientName: "Fintech Inovadora",
    clientLogo: "/placeholder.svg",
    image: "/placeholder.svg",
    results: ["100% compliance", "Zero incidentes", "Auditoria aprovada"]
  }
];

export default function CasesSection() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Cases de <span className="text-accent">Sucesso</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça como transformamos negócios através de soluções inovadoras em cloud, dados e IA. 
            Resultados comprovados que falam por si só.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {cases.map((caseStudy) => (
              <CarouselItem key={caseStudy.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full transition-all duration-300 hover:shadow-primary group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <img
                          src={caseStudy.clientLogo}
                          alt={caseStudy.clientName}
                          className="h-8 w-auto bg-white/90 rounded px-2 py-1"
                        />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                        {caseStudy.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {caseStudy.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-primary text-sm">Resultados:</h4>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.results.map((result, index) => (
                            <span
                              key={index}
                              className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {result}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground">
                          Cliente: <span className="font-medium text-primary">{caseStudy.clientName}</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Quer saber como podemos transformar seu negócio também?
          </p>
          <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Fale com Nossos Especialistas
          </button>
        </div>
      </div>
    </section>
  );
}