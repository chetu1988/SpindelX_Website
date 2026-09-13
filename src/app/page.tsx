import { HeroSection } from "@/components/home/HeroSection";
import { WhySpindelX } from "@/components/home/WhySpindelX";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { CapabilitiesKPIs } from "@/components/home/CapabilitiesKPIs";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { CTABanner } from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhySpindelX />
      <ProcessTimeline />
      <CapabilitiesKPIs />
      <IndustriesGrid />
      <CTABanner />
    </>
  );
}
