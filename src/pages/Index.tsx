import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SocialProofSection from "@/components/SocialProofSection";
import AutomationsGrid from "@/components/AutomationsGrid";
import PodcastSection from "@/components/PodcastSection";
import PricingSection from "@/components/PricingSection";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <SocialProofSection />
      <AutomationsGrid />
      <PodcastSection />
      <PricingSection />
      <PartnerSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
