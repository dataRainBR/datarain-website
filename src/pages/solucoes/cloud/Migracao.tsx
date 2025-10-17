import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import migracaoHeroImage from "@/assets/solutions/cloud-migration-hero.jpg";

const Migracao = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section with Title */}
      <section className="relative pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-[#0a2463]">
            Migração
          </h1>
          
          {/* Hero Image */}
          <div className="max-w-4xl mx-auto mb-12">
            <img 
              src={migracaoHeroImage} 
              alt="Migração para AWS - Cloud Computing" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0a2463]">
              Transformando negócios com a nuvem
            </h2>
            
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>
                A migração para a nuvem AWS oferece inúmeros benefícios para impulsionar a inovação e o crescimento das organizações. Com a expertise da dataRain, esse processo se torna ágil, seguro e eficiente.
              </p>
              
              <p>
                Nossa solução de Migração para AWS <strong>assessora e executa cada etapa</strong> necessária para transacionar sua <strong>infraestrutura, aplicativos e dados</strong> para a nuvem. Por meio de um <strong>framework estruturado</strong>, avaliamos seus ativos atuais, planejamos a estratégia ideal, preparamos pessoas e sistemas e realizamos a migração propriamente dita.
              </p>
              
              <p>
                O processo envolve o uso de ferramentas especializadas como <strong>Migration Evaluator</strong>, <strong>Migration Hub</strong> e o <strong>Migration Acceleration Program</strong>. Elas facilitam a análise da infraestrutura atual, o monitoramento do progresso, a colaboração entre equipes e o acesso a melhores práticas para acelerar a migração.
              </p>
              
              <p>
                Os benefícios da nuvem são significativos para os negócios. Com a escalabilidade sob demanda, as organizações podem responder rapidamente a flutuações de tráfego, lançar novos produtos com agilidade e inovar de forma contínua. A <strong>segurança</strong> é reforçada por meio das melhores práticas do provedor, enquanto a <strong>alta disponibilidade</strong> garante serviços sempre ativos. Há ainda economia de custos com infraestrutura e eficiência no uso de recursos financeiros e humanos.
              </p>
              
              <p>
                Soluções na nuvem permitem análises avançadas de dados para insights estratégicos nos negócios. Na área da saúde, viabilizam diagnósticos precisos e tratamentos personalizados. No agronegócio, possibilitam o aumento da produtividade e sustentabilidade. Já no setor financeiro, aprimoram a detecção de fraudes, análise de riscos e experiência do cliente.
              </p>
              
              <p>
                A dataRain entrega a expertise necessária para tirar o máximo proveito da nuvem AWS. Aproveite essa oportunidade de transformação digital e alavanque seus negócios para o próximo nível.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3893af] to-[#2d7a94]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Gostou do Conteúdo?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Você pode falar com um de nossos especialistas do setor
          </p>
          <a 
            href="/contato" 
            className="inline-block px-8 py-4 bg-white text-[#3893af] rounded-lg font-semibold hover:shadow-xl transition-all"
          >
            Clique aqui
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Migracao;
