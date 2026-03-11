import MarketingShell from "@/components/MarketingShell";
import RetirementCalculator from "@/components/calculators/RetirementCalculator";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function RetirementCalculatorPage() {
  return (
    <MarketingShell>
      <section className="relative overflow-hidden bg-[#f8f9fa] px-4 pb-28 pt-24 dark:bg-transparent sm:px-6 lg:px-8">
         <div className="pointer-events-none absolute left-[10%] top-24 h-96 w-96 rounded-full bg-[#ec4899]/10 blur-3xl" />
         
         <div className="relative mx-auto max-w-6xl">
           <div className="mb-6 flex items-center gap-2 text-sm text-[#4a5568] dark:text-slate-400">
             <Link href="/" className="hover:text-[#ec4899] transition-colors">Home</Link>
             <ChevronRight size={14} />
             <Link href="/calculators" className="hover:text-[#ec4899] transition-colors">Calculators</Link>
             <ChevronRight size={14} />
             <span className="font-semibold text-[#1a1560] dark:text-white">Retirement Calculator</span>
           </div>

           <div className="mb-10 lg:mb-12">
             <h1 className="text-3xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl lg:text-5xl">
               Retirement Calculator
             </h1>
             <p className="mt-4 max-w-3xl text-lg text-[#4a5568] dark:text-slate-300">
               Calculate exactly how much money you will need to accumulate to live a financially independent life after you stop working.
             </p>
           </div>

           <RetirementCalculator />

           <div className="mt-20 rounded-[32px] border border-slate-200 bg-white/50 p-6 dark:border-white/10 dark:bg-slate-950/30 sm:p-10">
              <h2 className="text-2xl font-semibold text-[#1a1560] mb-4 dark:text-white">Why use a Retirement Calculator?</h2>
              <div className="space-y-4 text-[#4a5568] dark:text-slate-300 leading-relaxed">
                 <p>
                    Planning for retirement can seem daunting due to inflation and the length of the retirement period itself. A retirement calculator takes into account your current age, the age you want to retire at, and your current monthly expenses to determine the corpus you need.
                 </p>
                 <p>
                    It factors in inflation over your working years to estimate what your expenses will look like on your first day of retirement, then calculates the total capital needed to sustain those inflating expenses until the end of your life expectancy.
                 </p>
              </div>
           </div>
         </div>
      </section>
    </MarketingShell>
  );
}
