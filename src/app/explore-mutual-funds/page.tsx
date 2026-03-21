import { Suspense } from "react";
import MarketingShell from "@/components/MarketingShell";
import ExploreMutualFundsHub from "@/components/ExploreMutualFundsHub";

export default function ExploreMutualFundsPage() {
  return (
    <MarketingShell>
      <Suspense fallback={null}>
        <ExploreMutualFundsHub />
      </Suspense>
    </MarketingShell>
  );
}
