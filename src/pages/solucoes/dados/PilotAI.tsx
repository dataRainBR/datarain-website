import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import pilotHeroImage from "@/assets/solutions/pilot-ai-hero.jpg";

const PilotAI = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section with Image Background */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={pilotHeroImage} alt="Pilot AI" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-[#f78504]/20 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-[#f78504] font-semibold">Dados e IA</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Pilot.AI dataRain
            </h1>
            <p className="text-2xl font-semibold text-[#f78504] mb-4">
              IA Generativa em ação, aplicada ao seu desafio.
            </p>
            <p className="text-xl text-gray-200 mb-8">
              Transforme um desafio real do seu negócio em um projeto prático de IA Generativa, desenvolvido sob medida e 100% financiado pela AWS. Em até 30 dias, você vê a tecnologia funcionando com dados reais.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contato" className="px-8 py-4 bg-[#f78504] text-white rounded-lg font-semibold hover:bg-[#d97004] transition-all hover:shadow-xl">
                Agendar Reunião
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0a2463]">
              O que é o Pilot.AI?
            </h2>
            
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>
                Uma prova de conceito de IA Generativa, criada pela dataRain, para empresas que querem testar o valor real da GenAI antes de investir.
              </p>

              <p>
                Você traz o desafio. A gente entrega uma solução funcional, personalizada para o seu contexto e com tecnologia AWS de ponta.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-gradient-to-br from-[#f78504]/5 to-[#f78504]/10 rounded-xl p-6 border-l-4 border-[#f78504]">
                  <h3 className="text-xl font-bold mb-2 text-[#0a2463]">Baixo custo de investimento</h3>
                </div>
                <div className="bg-gradient-to-br from-[#f78504]/5 to-[#f78504]/10 rounded-xl p-6 border-l-4 border-[#f78504]">
                  <h3 className="text-xl font-bold mb-2 text-[#0a2463]">Resultados em até 4 semanas</h3>
                </div>
                <div className="bg-gradient-to-br from-[#f78504]/5 to-[#f78504]/10 rounded-xl p-6 border-l-4 border-[#f78504]">
                  <h3 className="text-xl font-bold mb-2 text-[#0a2463]">Aplicação prática e personalizada</h3>
                </div>
                <div className="bg-gradient-to-br from-[#f78504]/5 to-[#f78504]/10 rounded-xl p-6 border-l-4 border-[#f78504]">
                  <h3 className="text-xl font-bold mb-2 text-[#0a2463]">ROI estimado e plano de evolução</h3>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-[#0a2463]">Como funciona o Pilot.AI</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
                <div className="bg-card rounded-xl p-6 border border-border/20 shadow-sm">
                  <div className="w-12 h-12 bg-[#f78504] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    1
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-[#0a2463]">Diagnóstico</h4>
                  <p className="text-sm text-gray-600">Identificamos, junto com você, um processo de alto impacto para aplicar IA Generativa.</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border/20 shadow-sm">
                  <div className="w-12 h-12 bg-[#f78504] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    2
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-[#0a2463]">Desenho da Solução</h4>
                  <p className="text-sm text-gray-600">Desenvolvemos a POC usando serviços como AWS Bedrock, SageMaker, Textract e mais.</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border/20 shadow-sm">
                  <div className="w-12 h-12 bg-[#f78504] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    3
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-[#0a2463]">Implementação Real</h4>
                  <p className="text-sm text-gray-600">Entregamos uma solução funcional, testada com seus dados e dentro da sua estrutura.</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border/20 shadow-sm">
                  <div className="w-12 h-12 bg-[#f78504] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    4
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-[#0a2463]">Avaliação Estratégica</h4>
                  <p className="text-sm text-gray-600">Você recebe um relatório com métricas de impacto, ROI e caminhos de escalabilidade.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-[#0a2463]">Histórias de Sucesso</h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#f78504]/5 to-[#f78504]/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-[#f78504]">Saúde</h3>
                  <p className="mb-3"><strong>Desafios:</strong> tempo excessivo com prontuários, autorizações e tarefas administrativas.</p>
                  <p className="mb-3"><strong>Soluções:</strong></p>
                  <ul className="list-disc ml-6 mb-3">
                    <li>Assistente GenAI para dúvidas clínicas</li>
                    <li>Extração automatizada de dados médicos</li>
                  </ul>
                  <p><strong>Impacto:</strong> +60% produtividade | menos erros manuais</p>
                </div>

                <div className="bg-gradient-to-br from-[#f78504]/5 to-[#f78504]/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-[#f78504]">Financeiro</h3>
                  <p className="mb-3"><strong>Desafios:</strong> dados regulatórios, conformidade e suporte em larga escala.</p>
                  <p className="mb-3"><strong>Soluções:</strong></p>
                  <ul className="list-disc ml-6 mb-3">
                    <li>GenAI com NLP para consultas normativas</li>
                    <li>Chatbot integrado para atendimento ágil</li>
                  </ul>
                  <p><strong>Impacto:</strong> 95% precisão | -70% esforço manual</p>
                </div>

                <div className="bg-gradient-to-br from-[#f78504]/5 to-[#f78504]/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-[#f78504]">Indústria</h3>
                  <p className="mb-3"><strong>Desafios:</strong> processos manuais, manutenção reativa, baixa análise de dados.</p>
                  <p className="mb-3"><strong>Soluções:</strong></p>
                  <ul className="list-disc ml-6 mb-3">
                    <li>Análise de sensores com GenAI para prever falhas</li>
                    <li>Relatórios operacionais automatizados</li>
                  </ul>
                  <p><strong>Impacto:</strong> -35% paradas não planejadas | +22% eficiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PilotAI;
