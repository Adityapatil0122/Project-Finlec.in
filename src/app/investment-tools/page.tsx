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
        title="Use practical tools for smarter investing"
        description="From SIP calculators to goal planning, Finlec helps you make clearer investment decisions."
      />
      <InvestmentFeatures />
      <FeaturesSection />
      <StatsCounter />
    </MarketingShell>
  );
}
