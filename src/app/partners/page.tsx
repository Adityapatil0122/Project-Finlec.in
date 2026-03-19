import MarketingShell from "@/components/MarketingShell";
import PageBanner from "@/components/PageBanner";
import PartnersMarquee from "@/components/PartnersMarquee";
import StatsCounter from "@/components/StatsCounter";
import CTABanner from "@/components/CTABanner";

export default function PartnersPage() {
  return (
    <MarketingShell>
      <PageBanner
        badge="Partner Network"
        title="Invest across trusted AMCs"
        description="Access a wide network of leading AMCs through one reliable platform."
      />
      <PartnersMarquee />
      <StatsCounter />
      <CTABanner />
    </MarketingShell>
  );
}
