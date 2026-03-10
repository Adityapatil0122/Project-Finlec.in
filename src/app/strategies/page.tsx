import MarketingShell from "@/components/MarketingShell";
import PageBanner from "@/components/PageBanner";
import FundTypes from "@/components/FundTypes";
import StatsCounter from "@/components/StatsCounter";
import CTABanner from "@/components/CTABanner";

export default function StrategiesPage() {
  return (
    <MarketingShell>
      <PageBanner
        badge="Fund Strategies"
        title="Choose strategy lanes that match your goals"
        description="Evaluate equity, hybrid, and debt strategies with transparent risk labels and outcome-focused portfolio design."
      />
      <FundTypes />
      <StatsCounter />
      <CTABanner />
    </MarketingShell>
  );
}
