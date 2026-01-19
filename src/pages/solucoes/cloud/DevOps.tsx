import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import devopsHeroImage from "@/assets/solutions/devops-hero.jpg";

const DevOps = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section with Image Background */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={devopsHeroImage} alt="DevOps e Modernization" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-[#3893af]/20 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-[#3893af] font-semibold">Cloud Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              DevOps e Modernization
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              A dataRain orgulha-se de ajudar empresas a alcançarem todo o potencial de seus negócios através de soluções tecnológicas inovadoras. Nossa nova oferta de DevOps irá revolucionar a forma como você desenvolve, implanta e opera softwares.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0a2463]">
              Transformando negócios através de tecnologia
            </h2>
            
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>
                O DevOps <strong>integra equipes de desenvolvimento e operações</strong> para entregar valor ao cliente de forma <strong>rápida</strong> e <strong>confiável</strong>. Automatizando a entrega de software do desenvolvimento à produção, o DevOps permite implantações contínuas e frequentes que aceleram o time-to-market.
              </p>

              <div className="bg-gradient-to-br from-[#3893af]/5 to-[#3893af]/10 rounded-2xl p-8 my-8">
                <h3 className="text-2xl font-bold mb-6 text-[#0a2463]">Com nossa solução DevOps, você obterá:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold">•</span>
                    <span>Entrega contínua através da <strong>automatização da compilação</strong>, teste e implantação de código.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold">•</span>
                    <span>Maior <strong>confiabilidade operacional</strong> com a detecção antecipada de problemas e atualizações sem downtime.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold">•</span>
                    <span>Colaboração aprimorada entre as equipes de desenvolvimento e operações.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold">•</span>
                    <span>Aumento de produtividade com a eliminação de tarefas manuais repetitivas.</span>
                  </li>
                </ul>
              </div>

              <p>
                Tudo isso é alcançado através da criação de pipelines ágeis que integram ferramentas como <strong>AWS CodePipeline</strong>, <strong>Jenkins</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>, <strong>GitHub</strong>, <strong>Terraform</strong> e serviços de nuvem da AWS.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-[#0a2463]">
                Na dataRain, avaliamos suas necessidades específicas para desenvolver uma estratégia DevOps personalizada
              </h3>

              <div className="bg-card rounded-xl p-8 border border-border/20 shadow-sm my-8">
                <h4 className="text-xl font-bold mb-6 text-[#0a2463]">Nossa equipe de especialistas irá:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold">•</span>
                    <span>Realizar uma <strong>avaliação aprofundada</strong> do seu ambiente e requisitos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold">•</span>
                    <span>Configurar e implementar a <strong>esteira de deploy</strong> ideal.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3893af] font-bold">•</span>
                    <span>Prover treinamento abrangente e suporte contínuo.</span>
                  </li>
                </ul>
              </div>

              <p>
                Escolha a dataRain como seu parceiro de confiança em DevOps e desbloqueie todo o potencial da sua organização. Entre em contato hoje mesmo e vamos conversar sobre como podemos ajudar o seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DevOps;
