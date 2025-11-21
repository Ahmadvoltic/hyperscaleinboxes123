import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ClientShowcase from "@/components/ClientShowcase";
import InfrastructureBenefits from "@/components/InfrastructureBenefits";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import ComparisonSection from "@/components/ComparisonSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]">
      <Navigation />
      <HeroSection />
      <ClientShowcase />
      <InfrastructureBenefits />
      <HowItWorks />
      <PricingSection />
      <ComparisonSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
