import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";

const Cases = () => {
  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
              Cases de Sucesso
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Conheça nossos projetos e transformações digitais
            </p>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 shadow-lg border border-border/20">
              <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <div className="w-10 h-10 bg-primary rounded"></div>
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Página em Desenvolvimento
              </h2>
              <p className="text-muted-foreground">
                Esta página está sendo desenvolvida. Em breve você encontrará aqui nossos principais cases de sucesso.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cases;