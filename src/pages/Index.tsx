import heroBackground from "@/assets/hero-background.jpg";
import awsCertifications from "@/assets/aws-certifications.png";
import UniversalHeader from "@/components/layout/UniversalHeader";
import AboutSection from "@/components/AboutSection";
import CasesSection from "@/components/CasesSection";
import ServicesSection from "@/components/ServicesSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ClientsSection from "@/components/sections/ClientsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <UniversalHeader backgroundImage={heroBackground} showHeroSection={true} />

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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;