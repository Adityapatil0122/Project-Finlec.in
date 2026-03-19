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
        title="Useful features for smarter investing"
        description="Explore the tools that help you plan SIPs, track investments, and invest with more confidence."
      />
      <FeaturesSection />
      <InvestmentFeatures />
      <CTABanner />
    </MarketingShell>
  );
}
