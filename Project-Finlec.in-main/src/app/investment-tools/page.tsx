import MarketingShell from "@/components/MarketingShell";
import PageBanner from "@/components/PageBanner";
import InvestmentFeatures from "@/components/InvestmentFeatures";
import FeaturesSection from "@/components/FeaturesSection";
import StatsCounter from "@/components/StatsCounter";

export default function InvestmentToolsPage() {
  return (
    <MarketingShell>
      <PageBanner
        badge="Investment Tools"
        title="Use smarter tools to optimize every investment decision"
        description="From SIP step-up planning to tax-smart routing and volatility alerts, Finlec gives you high-clarity investment execution."
      />
      <InvestmentFeatures />
      <FeaturesSection />
      <StatsCounter />
    </MarketingShell>
  );
}
