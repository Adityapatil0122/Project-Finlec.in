import MarketingShell from "@/components/MarketingShell";
import XIRRCalculator from "@/components/calculators/XIRRCalculator";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function XIRRCalculatorPage() {
  return (
    <MarketingShell>
      <section className="relative overflow-hidden bg-[#f8f9fa] px-4 pb-28 pt-24 dark:bg-transparent sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute left-[12%] top-24 h-96 w-96 rounded-full bg-[#0ea5e9]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-6 flex items-center gap-2 text-sm text-[#4a5568] dark:text-slate-400">
            <Link href="/" className="transition-colors hover:text-[#0ea5e9]">Home</Link>
            <ChevronRight size={14} />
            <Link href="/calculators" className="transition-colors hover:text-[#0ea5e9]">Calculators</Link>
            <ChevronRight size={14} />
            <span className="font-semibold text-[#1a1560] dark:text-white">XIRR Calculator</span>
          </div>

          <div className="mb-10 lg:mb-12">
            <h1 className="text-3xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl lg:text-5xl">
              XIRR Calculator
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-[#4a5568] dark:text-slate-300">
              Calculate annualized returns when your investments and withdrawals happen on different dates.
            </p>
          </div>

          <XIRRCalculator />

          <div className="mt-20 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-2xl font-semibold text-[#1a1560] dark:text-white">What is XIRR?</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#4a5568] dark:text-slate-300">
                XIRR (Extended Internal Rate of Return) measures the annualized return for cash flows
                that occur at irregular intervals. It is the most accurate way to track investment
                performance when contributions and withdrawals are not uniform.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-[#1a1560] dark:text-white">When should you use it?</h2>
              <ul className="mt-4 list-disc pl-5 text-sm leading-relaxed text-[#4a5568] dark:text-slate-300">
                <li>When your SIP or lumpsum contributions are irregular.</li>
                <li>When you redeem partial amounts over time.</li>
                <li>When you want a single annualized return number.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
