import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import arquiteturaImage from "@/assets/solutions/cloud-architecture.jpg";

const ArquiteturaCloud = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section with Image Background */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={arquiteturaImage} alt="Assessment de Arquitetura" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-[#3893af]/20 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-[#3893af] font-semibold">Cloud Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Assessment de Arquitetura
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              A base para crescer com segurança e eficiência. Antes de escalar, inovar ou migrar workloads para a nuvem, é preciso garantir que sua arquitetura está preparada para sustentar o que vem pela frente.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/fale-conosco" className="px-8 py-4 bg-[#3893af] text-white rounded-lg font-semibold hover:bg-[#2d7a94] transition-all hover:shadow-xl">
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
                Na dataRain, o Assessment de Arquitetura é o ponto de partida para decisões inteligentes e sustentáveis em Cloud, Dados e IA.
              </p>
              
              <p>
                Você entende onde está, o que pode estar travando seu crescimento e quais os próximos passos para evoluir com segurança, governança e performance.
              </p>

              <div className="bg-gradient-to-r from-[#3893af]/10 to-[#3893af]/5 border-l-4 border-[#3893af] rounded-r-2xl p-8 my-8">
                <h3 className="text-2xl font-bold mb-2 text-[#0a2463]">
                  Uma boa arquitetura evita desperdícios.<br/>
                  Uma arquitetura excelente gera vantagem competitiva.
                </h3>
              </div>

              <p>
                Mais do que validar se sua estrutura está "certa", mostramos se ela está eficiente, escalável e segura — pronta para suportar as ambições do seu negócio.
              </p>

              <h3 className="text-2xl font-bold mb-6 text-[#0a2463]">E como fazemos isso?</h3>

              <div className="bg-card rounded-2xl p-8 border border-border/20 shadow-sm my-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold text-xl">•</span>
                    <span>Análise da arquitetura atual e alinhamento com melhores práticas AWS</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold text-xl">•</span>
                    <span>Diagnóstico de gaps de performance, segurança e custo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold text-xl">•</span>
                    <span>Avaliação da maturidade da sua operação em cloud</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold text-xl">•</span>
                    <span>Recomendações priorizadas e roadmap técnico com quick wins</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold text-xl">•</span>
                    <span>Visão de arquitetura futura, integrada com dados, IA e segurança</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-[#0a2463]">
                Sua jornada de modernização começa com clareza
              </h3>

              <p>
                Antes de investir em novos serviços, modernizações ou expansão, tenha certeza de que sua base está sólida. O Assessment de Arquitetura da dataRain entrega segurança técnica e confiança estratégica para decisões que envolvem cloud e inovação.
              </p>

              <div className="bg-gradient-to-br from-[#3893af]/5 to-[#3893af]/10 rounded-2xl p-8 my-8">
                <h3 className="text-2xl font-bold mb-6 text-[#0a2463]">
                  Por que o Assessment de Arquitetura da dataRain?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold">•</span>
                    <span>Diagnóstico técnico + visão estratégica de negócio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold">•</span>
                    <span>Metodologia validada em centenas de workloads AWS</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold">•</span>
                    <span>Especialistas certificados com experiência em múltiplos setores</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold">•</span>
                    <span>Plano de ação direto ao ponto, com foco em resultado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold">•</span>
                    <span>Integração total com governança, dados, IA e segurança</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArquiteturaCloud;
