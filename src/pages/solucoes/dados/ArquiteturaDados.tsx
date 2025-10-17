import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import arquiteturaHeroImage from "@/assets/solutions/data-architecture-hero.jpg";

const ArquiteturaDados = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader showHeroSection={false} />
      
      {/* Hero Section with Image Background */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={arquiteturaHeroImage} alt="Arquitetura e Governança de Dados" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-[#f78504]/20 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-[#f78504] font-semibold">Dados e IA</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Arquitetura e Governança de Dados
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              A chave para o sucesso em uma economia baseada em dados é ter as informações certas, no momento certo, nas mãos das pessoas certas.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contato" className="px-8 py-4 bg-[#f78504] text-white rounded-lg font-semibold hover:bg-[#d97004] transition-all hover:shadow-xl">
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
                Com o crescimento exponencial no volume e variedade de dados, gerenciá-los pode se tornar um desafio complexo. É aí que entra a Arquitetura e Governança de Dados.
              </p>

              <p>
                Nossa abordagem estruturada ajuda as organizações a <strong>coletar, armazenar, gerenciar, compartilhar e utilizar dados</strong> de forma <strong>eficiente e segura</strong>. Isso é alcançado através de uma combinação de pessoas, processos e tecnologia.
              </p>

              <p>
                Utilizando os melhores serviços de nuvem da AWS, como o <strong>Amazon S3, AWS Lake Formation, Amazon Athena e AWS Glue</strong>, implementamos uma arquitetura robusta de dados. Ela inclui catalogação automatizada, taxonomia centralizada, controle de acesso granular e monitoramento contínuo. Tudo isso permite que você libere o valor dos dados para impulsionar a inovação e o crescimento.
              </p>

              <div className="bg-gradient-to-br from-[#f78504]/5 to-[#f78504]/10 rounded-2xl p-8 my-8">
                <h3 className="text-2xl font-bold mb-6 text-[#0a2463]">Os benefícios são significativos:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#f78504] font-bold">•</span>
                    <span><strong>Segurança</strong> aprimorada por meio de acesso controlado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f78504] font-bold">•</span>
                    <span><strong>Conformidade</strong> facilitada com regulamentos de privacidade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f78504] font-bold">•</span>
                    <span><strong>Governança centralizada</strong> com políticas consistentes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f78504] font-bold">•</span>
                    <span><strong>Democratização responsável</strong> dos dados para análise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f78504] font-bold">•</span>
                    <span><strong>Qualidade e integridade</strong> mantidas com taxonomia unificada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f78504] font-bold">•</span>
                    <span><strong>Eficiência operacional</strong> com automação de gerenciamento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f78504] font-bold">•</span>
                    <span>Colaboração interna aprimorada com linguagem comum</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f78504] font-bold">•</span>
                    <span>Rastreabilidade completa para <strong>auditoria</strong> e conformidade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f78504] font-bold">•</span>
                    <span><strong>Redução de custos</strong> por meio de eliminação de redundância</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#f78504] font-bold">•</span>
                    <span><strong>Escalabilidade elástica</strong> para atender à demanda</span>
                  </li>
                </ul>
              </div>

              <p>
                Já ajudamos companhias nos setores de serviços financeiros, saúde e agronegócio a liberar o poder dos seus dados. Elas agora tomam melhores decisões, lançam novos produtos e servem melhor seus clientes.
              </p>

              <p>
                Não perca mais tempo lutando para dar sentido aos seus dados. Permita que nossa expertise em Arquitetura e Governança de Dados da AWS libere seu potencial de transformação.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArquiteturaDados;
