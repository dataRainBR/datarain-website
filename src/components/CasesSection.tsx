import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useWordPressPostsByCategorySlug } from "@/hooks/useWordPress";
import { Loader2 } from "lucide-react";

// Gradientes únicos para cada card
const cardGradients = [
  "from-primary/20 via-accent/10 to-primary/5",
  "from-accent/20 via-primary/10 to-accent/5",
  "from-primary/15 via-transparent to-accent/15",
  "from-accent/15 via-primary/5 to-transparent",
  "from-primary/25 via-accent/5 to-primary/10",
];

// Dados estáticos de fallback
const staticCases = [
  {
    id: 1,
    title: "DevOps transforma infraestrutura e impulsiona eficiência operacional",
    description: "A Intelbras precisava estabelecer uma infraestrutura capaz de acompanhar o crescimento e as demandas do seu negócio de energia.",
    clientName: "Intelbras",
  },
  {
    id: 2,
    title: "Implementação de DevOps garante economia",
    description: "A empresa incorpora tecnologia de ponta em suas práticas médicas, incluindo equipamentos avançados de diagnóstico e terapias inovadoras.",
    clientName: "Prevent Senior",
  },
  {
    id: 3,
    title: "Centralização de dados com Amazon Glue",
    description: "Um dos desafios mais significativos enfrentados pela Cemig foi lidar com 160 operações de consulta a diferentes sistemas distribuídos.",
    clientName: "Cemig",
  },
];

export default function CasesSection() {
  const navigate = useNavigate();
  const { data: wordpressCases, isLoading } = useWordPressPostsByCategorySlug("cases", {
    per_page: 6,
  });

  // Função para extrair texto limpo do conteúdo HTML
  const extractTextFromContent = (html: string, maxLength: number = 200): string => {
    // Remove tags HTML
    const text = html.replace(/<[^>]*>/g, " ")
      // Remove entidades HTML comuns
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&#8211;/g, "–")
      .replace(/&#8217;/g, "'")
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      // Remove espaços múltiplos
      .replace(/\s+/g, " ")
      .trim();
    
    // Retorna os primeiros caracteres
    if (text.length <= maxLength) return text;
    
    // Corta no último espaço para não quebrar palavras
    const truncated = text.slice(0, maxLength);
    const lastSpace = truncated.lastIndexOf(" ");
    return (lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated) + "...";
  };

  // Usa dados do WordPress se disponíveis, senão usa estáticos
  const cases = wordpressCases && wordpressCases.length > 0
    ? wordpressCases.map((post, index) => ({
        id: post.id,
        title: post.title.rendered.replace(/&#8211;/g, "–").replace(/&amp;/g, "&"),
        description: extractTextFromContent(post.content.rendered, 180),
        clientName: "",
        slug: post.slug,
        gradientIndex: index % cardGradients.length,
      }))
    : staticCases.map((c, index) => ({
        ...c,
        slug: "",
        gradientIndex: index % cardGradients.length,
      }));

  const handleReadMore = (id: number) => {
    navigate(`/blog/${id}`);
  };

  return (
    <section id="cases" className="py-12 sm:py-16 md:py-20 lg:py-24 text-white relative overflow-hidden">
      {/* Background gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent"></div>
      
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full text-white text-xs sm:text-sm font-semibold mb-4 backdrop-blur-sm border border-white/10">
            Cases de Sucesso
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Transformações que Inspiram
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Conheça como ajudamos empresas a alcançarem resultados extraordinários
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-white/70" />
          </div>
        ) : (
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-4 pb-6">
              {cases.map((caseStudy, index) => (
                <CarouselItem key={caseStudy.id} className="pl-2 sm:pl-4 pb-2 basis-full md:basis-4/5 lg:basis-3/4">
                  {/* Card com glassmorphism - formato largo */}
                  <div className="group relative">
                    {/* Fundo com gradiente único */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${cardGradients[index % cardGradients.length]} rounded-3xl`}></div>
                    
                    {/* Efeito de brilho no hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-white/10 via-transparent to-white/5 rounded-3xl"></div>
                    
                    {/* Container glassmorphism */}
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg border border-white/20 transition-all duration-300 group-hover:border-white/40 group-hover:shadow-xl group-hover:-translate-y-1">
                      <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12 h-[380px] sm:h-[420px] md:h-[480px] flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
                            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white/20">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                          
                          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight text-white group-hover:text-accent transition-colors duration-300 line-clamp-2">
                            {caseStudy.title}
                          </h3>
                          
                          <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-3xl line-clamp-3">
                            {caseStudy.description}
                          </p>
                        </div>
                        
                        <button 
                          onClick={() => handleReadMore(caseStudy.id)}
                          className="inline-flex items-center gap-3 bg-white text-primary font-bold text-base md:text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-accent hover:text-white transition-all duration-300 self-start group/btn hover:scale-105"
                        >
                          <span>Leia o case completo</span>
                          <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Setas melhoradas */}
            <CarouselPrevious className="left-2 md:left-4 bg-white/20 border-white/30 text-white hover:bg-white/40 hover:border-white/50 backdrop-blur-sm h-12 w-12 md:h-14 md:w-14 shadow-lg transition-all duration-300 hover:scale-110" />
            <CarouselNext className="right-2 md:right-4 bg-white/20 border-white/30 text-white hover:bg-white/40 hover:border-white/50 backdrop-blur-sm h-12 w-12 md:h-14 md:w-14 shadow-lg transition-all duration-300 hover:scale-110" />
          </Carousel>
        )}

        {/* Link para ver todos os cases */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/cases")}
            className="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium transition-colors duration-300 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full border border-white/10 hover:border-white/20"
          >
            Ver todos os cases
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
