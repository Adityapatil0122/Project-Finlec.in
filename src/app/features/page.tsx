import MarketingShell from "@/components/MarketingShell";
import PageBanner from "@/components/PageBanner";
import FeaturesSection from "@/components/FeaturesSection";
import InvestmentFeatures from "@/components/InvestmentFeatures";
import CTABanner from "@/components/CTABanner";

export default function FeaturesPage() {
  return (
    <MarketingShell>
      <PageBanner
        badge="Platform Features"
        title="Advanced features for disciplined investing"
        description="Explore the full Finlec feature stack built for allocation design, risk control, and long-term wealth outcomes."
      />
      <FeaturesSection />
      <InvestmentFeatures />
      <CTABanner />
    </MarketingShell>
  );
}
