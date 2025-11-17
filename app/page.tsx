import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ClientShowcase from "@/components/ClientShowcase";
import InfrastructureBenefits from "@/components/InfrastructureBenefits";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import ComparisonSection from "@/components/ComparisonSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ClientShowcase />
      <InfrastructureBenefits />
      <HowItWorks />
      <PricingSection />
      <ComparisonSection />
    </div>
  );
}
