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
        title="A trusted execution network across leading AMCs"
        description="Invest with confidence through a broad AMC ecosystem and disciplined platform execution standards."
      />
      <PartnersMarquee />
      <StatsCounter />
      <CTABanner />
    </MarketingShell>
  );
}
