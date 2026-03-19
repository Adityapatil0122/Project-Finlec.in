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
        title="Choose a fund strategy that fits your goal"
        description="Compare equity, hybrid, and debt funds based on risk, time horizon, and return potential."
      />
      <FundTypes />
      <StatsCounter />
      <CTABanner />
    </MarketingShell>
  );
}
