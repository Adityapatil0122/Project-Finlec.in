import MarketingShell from "@/components/MarketingShell";
import PageBanner from "@/components/PageBanner";
import LifeGoals from "@/components/LifeGoals";
import AppShowcase from "@/components/AppShowcase";
import CTABanner from "@/components/CTABanner";

export default function GoalsPage() {
  return (
    <MarketingShell>
      <PageBanner
        badge="Goal Planning"
        title="Build every life goal with a clear investment pathway"
        description="Turn education, retirement, tax, and legacy goals into trackable strategy plans with disciplined SIP execution."
      />
      <LifeGoals />
      <AppShowcase />
      <CTABanner />
    </MarketingShell>
  );
}
