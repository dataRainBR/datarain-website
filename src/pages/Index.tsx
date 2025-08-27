import heroBackground from "@/assets/hero-background.jpg";
import awsCertifications from "@/assets/aws-certifications.png";
import Header from "@/components/layout/Header";
import AboutSection from "@/components/AboutSection";
import CasesSection from "@/components/CasesSection";
import ServicesSection from "@/components/ServicesSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ClientsSection from "@/components/sections/ClientsSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Header backgroundImage={heroBackground} />

      {/* About Section */}
      <AboutSection />

      {/* Cases Section */}
      <CasesSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Clients Section */}
      <ClientsSection />
      
      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;