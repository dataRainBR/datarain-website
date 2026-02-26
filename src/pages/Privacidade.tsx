import React from 'react';
import UniversalHeader from "@/components/layout/UniversalHeader";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Mail, MapPin, FileText } from "lucide-react";
import { SEO } from "@/components/SEO";

const Privacidade = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Política de Privacidade" description="Política de privacidade da dataRain Consulting. Saiba como tratamos seus dados em conformidade com a LGPD." canonical="/privacidade" noindex />
      <UniversalHeader />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 text-center pt-40">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
              Política de Privacidade
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A DATARAIN respeita a sua privacidade e está comprometida em proteger seus dados pessoais
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="bg-background py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Intro */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                A <strong className="text-foreground">DATARAIN</strong> respeita a sua privacidade e está comprometida em evoluir continuamente para proteger seus dados pessoais de acordo com a Lei nº 13.709/2018 – "Lei Geral de Proteção de Dados Pessoais (LGPD)" e regulamentos e normas aplicáveis.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Buscaremos formas de proteger todos que possuem dados pessoais coletados, tratados, utilizados e/ou processados pela <strong className="text-foreground">DATARAIN</strong>.
              </p>
            </CardContent>
          </Card>

          {/* DPO Info */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                Encarregada de Proteção de Dados (DPO)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nomeamos <strong className="text-foreground">Aline Turim</strong> como Encarregada de Proteção de Dados pessoais (DPO) que é responsável por supervisionar questões relacionadas à legislação e normas aplicáveis, bem como questões de proteção de dados em geral, atuando como canal de comunicação entre a DATARAIN, os Titulares e a Autoridade Nacional de Proteção de Dados.
              </p>
              
              <h3 className="text-lg font-semibold text-foreground mb-4">Atribuições do DPO:</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">a)</span>
                  Aceitar reclamações e comunicações dos titulares de dados, prestar esclarecimentos e adotar providências;
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">b)</span>
                  Orientar os colaboradores e os contratados da empresa a respeito das práticas a serem tomadas em relação à proteção de dados pessoais;
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">c)</span>
                  Executar as demais atribuições determinadas pela empresa e pela legislação aplicável.
                </li>
              </ul>

              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Dados de Contato:</h3>
                <div className="space-y-3">
                  <p className="font-semibold text-foreground">
                    DATARAIN CONSULTING E SERVIÇOS DE TECNOLOGIA LTDA.
                  </p>
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <span>Avenida Andrômeda, nº 885 – Torre Office, conjunto 802<br />Barueri, SP – CEP 06473-000</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:dpo@datarain.com.br" className="text-primary hover:underline">dpo@datarain.com.br</a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rights */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Seus Direitos</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                O titular de dados tem assegurada a titularidade de seus dados pessoais e garantidos os direitos fundamentais de liberdade, de intimidade e de privacidade, nos termos da Lei, podendo solicitar:
              </p>
              
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <span>Acesso aos seus dados pessoais;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <span>Correção de dados incompletos, inexatos ou desatualizados;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <span>Revogação do consentimento e eliminação dos dados pessoais, salvo aqueles necessários ao cumprimento de obrigação contratual, legal ou regulatória;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <span>Confirmação da existência de tratamento;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <span>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a Lei.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Informações Importantes</h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  O titular de dados tem o direito de fazer uma reclamação a qualquer momento perante a ANPD, no entanto, gostaríamos de ter a oportunidade de lidar com suas preocupações, reclamações ou considerações antecipadamente.
                </p>
                <p>
                  É importante que os dados fornecidos a nós sejam precisos, verdadeiros e atualizados. Por favor, mantenha-nos informados caso os seus dados sofram qualquer alteração no curso do seu relacionamento conosco.
                </p>
                <p>
                  Quando precisarmos coletar e tratar dados pessoais para cumprimento de obrigação legal ou regulatória, para execução de contrato ou de procedimentos preliminares relacionados a contrato do qual o titular dos dados seja parte, e não forneça ou peça a exclusão desses dados, podemos não ser capazes de executar o contrato ou cumprir obrigação dele decorrente.
                </p>
                <p>
                  Para exercer seus direitos, o titular de dados pode entrar em contato com Aline Turim (DPO) através dos canais indicados acima. Tentamos responder a todos os pedidos em prazo razoável.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Full Policy Link */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Política Completa</h3>
              <p className="text-muted-foreground mb-6">
                Nossas políticas e procedimentos relativos à privacidade estão em constante evolução, em linha com a legislação aplicável.
              </p>
              <a 
                href="https://dg257tl8po5tc.cloudfront.net/politica_de_protecao_dados_site/Datarain-LGPD_Pol%C3%ADticaPrivacidadeRev1(19122024).pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <FileText className="w-5 h-5" />
                Visualizar Política Completa (PDF)
              </a>
            </CardContent>
          </Card>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacidade;