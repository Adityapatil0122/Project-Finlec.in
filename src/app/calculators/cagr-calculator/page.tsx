import MarketingShell from "@/components/MarketingShell";
import CAGRCalculator from "@/components/calculators/CAGRCalculator";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CAGRCalculatorPage() {
  return (
    <MarketingShell>
      <section className="relative overflow-hidden bg-[#f8f9fa] px-4 pb-28 pt-10 sm:px-6 lg:px-8">
         <div className="pointer-events-none absolute left-[10%] top-24 h-96 w-96 rounded-full bg-[#04b488]/10 blur-3xl" />

         <div className="relative mx-auto max-w-6xl">
           <div className="mb-6 flex items-center gap-2 text-sm text-[#4a5568]">
             <Link href="/" className="hover:text-[#04b488] transition-colors">Home</Link>
             <ChevronRight size={14} />
             <Link href="/calculators" className="hover:text-[#04b488] transition-colors">Calculators</Link>
             <ChevronRight size={14} />
             <span className="font-semibold text-[#1a1560]">CAGR Calculator</span>
           </div>

           <div className="mb-10 lg:mb-12">
             <h1 className="text-3xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-4xl lg:text-5xl">
               CAGR Calculator
             </h1>
             <p className="mt-4 max-w-3xl text-lg text-[#4a5568]">
               Calculate the Compound Annual Growth Rate (CAGR) to measure your investment&apos;s annual growth over time.
             </p>
           </div>

           <CAGRCalculator />

           <div className="mt-20 rounded-[32px] border border-slate-200 bg-white/50 p-6 sm:p-10">
              <h2 className="text-2xl font-semibold text-[#1a1560] mb-4">What is CAGR?</h2>
              <div className="space-y-4 text-[#4a5568] leading-relaxed">
                 <p>
                    CAGR (Compound Annual Growth Rate) is a useful measure that tells you the smoothed annual rate of return on an investment over a given time period. It assumes that the investment grows at a steady rate compounded annually.
                 </p>
                 <p>
                    Unlike absolute returns, CAGR accounts for the time value of money and gives you a single annualized growth rate, making it easier to compare different investments across different time horizons.
                 </p>
                 <p>
                    CAGR is widely used to evaluate mutual fund performance, stock returns, business revenue growth, and more.
                 </p>
              </div>

              <h2 className="text-2xl font-semibold text-[#1a1560] mt-8 mb-4">How is CAGR calculated?</h2>
              <ul className="list-disc pl-5 space-y-2 text-[#4a5568]">
                 <li>CAGR = ((Final Value / Initial Value) ^ (1 / Number of Years)) - 1</li>
                 <li>It represents the rate at which an investment would have grown if it grew at a steady rate.</li>
                 <li>CAGR eliminates the effect of volatility and gives a clearer picture of growth.</li>
                 <li>It helps compare the performance of different investments over the same or different periods.</li>
              </ul>
           </div>
         </div>
      </section>
    </MarketingShell>
  );
}
