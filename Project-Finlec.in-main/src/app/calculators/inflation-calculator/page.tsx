import MarketingShell from "@/components/MarketingShell";
import InflationCalculator from "@/components/calculators/InflationCalculator";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function InflationCalculatorPage() {
  return (
    <MarketingShell>
      <section className="relative overflow-hidden bg-[#f8f9fa] px-4 pb-28 pt-10 sm:px-6 lg:px-8">
         <div className="pointer-events-none absolute left-[10%] top-24 h-96 w-96 rounded-full bg-[#ec4899]/10 blur-3xl" />
         
         <div className="relative mx-auto max-w-6xl">
           <div className="mb-6 flex items-center gap-2 text-sm text-[#4a5568]">
             <Link href="/" className="hover:text-[#ec4899] transition-colors">Home</Link>
             <ChevronRight size={14} />
             <Link href="/calculators" className="hover:text-[#ec4899] transition-colors">Calculators</Link>
             <ChevronRight size={14} />
             <span className="font-semibold text-[#1a1560]">Inflation Calculator</span>
           </div>

           <div className="mb-10 lg:mb-12">
             <h1 className="text-3xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-4xl lg:text-5xl">
               Inflation Calculator
             </h1>
             <p className="mt-4 max-w-3xl text-lg text-[#4a5568]">
               Understand how inflation erodes your purchasing power, and calculate the future cost of your goals to plan effectively.
             </p>
           </div>

           <InflationCalculator />

           <div className="mt-20 rounded-[32px] border border-slate-200 bg-white/50 p-6 sm:p-10">
              <h2 className="text-2xl font-semibold text-[#1a1560] mb-4">What is an Inflation Calculator?</h2>
              <div className="space-y-4 text-[#4a5568] leading-relaxed">
                 <p>
                    Inflation is the steady rise in the price of goods and services over time. While it might seem small year-over-year, compounding inflation significantly reduces the purchasing power of your money stored in regular saving accounts. What costs â‚¹1 Lakh today could cost â‚¹1.8 Lakhs in 10 years at a 6% inflation rate.
                 </p>
                 <p>
                    The free Finlec inflation calculator helps you evaluate the exact future equivalent of the money you have today. It&apos;s an indispensable tool when doing long-term financial planning for life goals like retirement, children&apos;s education, or buying a house â€” ensuring you aim for the future cost of the objective, not its current price tag.
                 </p>
              </div>
           </div>
         </div>
      </section>
    </MarketingShell>
  );
}

