import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import finopsHeroImage from "@/assets/solutions/finops-hero.jpg";

const FinOps = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section with Image Background */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={finopsHeroImage} alt="Gestão de FinOps" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-[#3893af]/20 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-[#3893af] font-semibold">Cloud Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Gestão de FinOps
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Otimizar custos na nuvem nunca foi tão fácil. Com a Gestão de FinOps da dataRain, você obtém visibilidade completa dos seus gastos na nuvem e implementa estratégias eficientes para reduzir custos sem comprometer o desempenho.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contato" className="px-8 py-4 bg-[#3893af] text-white rounded-lg font-semibold hover:bg-[#2d7a94] transition-all hover:shadow-xl">
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>
                Nossa solução combina ferramentas avançadas como o PierCloud e o Cost Explorer da AWS com a experiência de nossos especialistas em FinOps. Isso permite identificar e corrigir ineficiências, aplicar reservas, direcionar a alocação de recursos e muito mais.
              </p>
              
              <p>
                O resultado é uma redução significativa dos seus custos na nuvem, maior eficiência operacional e o alinhamento perfeito entre gastos e objetivos de negócios.
              </p>

              <div className="bg-gradient-to-br from-[#3893af]/5 to-[#3893af]/10 rounded-2xl p-8 my-8">
                <h3 className="text-2xl font-bold mb-6 text-[#0a2463]">Com a Gestão de FinOps, você obtém:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold">•</span>
                    <span>Otimização contínua de custos na nuvem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold">•</span>
                    <span>Visibilidade completa do uso de recursos e gastos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold">•</span>
                    <span>Identificação de oportunidades de economia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold">•</span>
                    <span>Governança financeira aprimorada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold">•</span>
                    <span>Alinhamento entre equipes de negócios e tecnologia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold">•</span>
                    <span>Agilidade e inovação sustentáveis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold">•</span>
                    <span>Conscientização organizacional sobre custos</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-[#0a2463]">Nossa abordagem envolve três estágios principais:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="bg-card rounded-xl p-6 border border-border/20 shadow-sm">
                  <div className="w-12 h-12 bg-[#3893af] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    1
                  </div>
                  <p className="text-gray-700">
                    Avaliar a infraestrutura atual, estimar novos custos, identificar riscos e planejar a estratégia de otimização.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border/20 shadow-sm">
                  <div className="w-12 h-12 bg-[#3893af] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    2
                  </div>
                  <p className="text-gray-700">
                    Discutir com os responsáveis, preparar a organização e o ambiente para a implementação das mudanças.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border/20 shadow-sm">
                  <div className="w-12 h-12 bg-[#3893af] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    3
                  </div>
                  <p className="text-gray-700">
                    Executar as alterações nos recursos seguindo a estratégia definida, validando os resultados.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-[#0a2463]">
                A Gestão de FinOps já ajudou empresas de diversos setores a reduzir custos na nuvem:
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#3893af] font-bold">•</span>
                  <span>No setor financeiro, reduzindo em 30% o custo de bancos de dados na nuvem.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3893af] font-bold">•</span>
                  <span>Na saúde, otimizando o uso de recursos em aplicações hospitalares, com 25% de economia.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3893af] font-bold">•</span>
                  <span>No agronegócio, revisando configurações de máquinas virtuais para economia de 40%.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinOps;
