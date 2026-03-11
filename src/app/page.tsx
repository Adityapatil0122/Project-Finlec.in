import MarketingShell from "@/components/MarketingShell";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InvestmentFeatures from "@/components/InvestmentFeatures";
import StatsCounter from "@/components/StatsCounter";
import FundTypes from "@/components/FundTypes";
import AppShowcase from "@/components/AppShowcase";
import LifeGoals from "@/components/LifeGoals";
import PartnersMarquee from "@/components/PartnersMarquee";

export default function Home() {
  return (
    <MarketingShell>
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <InvestmentFeatures />
      <StatsCounter />
      <FundTypes />
      <AppShowcase />
      <LifeGoals />
      <PartnersMarquee />
    </MarketingShell>
  );
}
