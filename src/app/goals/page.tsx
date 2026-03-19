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
        title="Plan every life goal with confidence"
        description="Map education, retirement, tax saving, and family goals into simple investment plans."
      />
      <LifeGoals />
      <AppShowcase />
      <CTABanner />
    </MarketingShell>
  );
}
