import MarketingShell from "@/components/MarketingShell";
import NPSCalculator from "@/components/calculators/NPSCalculator";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function NPSCalculatorPage() {
  return (
    <MarketingShell>
      <section className="relative overflow-hidden bg-[#f8f9fa] px-4 pb-28 pt-24 dark:bg-transparent sm:px-6 lg:px-8">
         <div className="pointer-events-none absolute left-[10%] top-24 h-96 w-96 rounded-full bg-[#a855f7]/10 blur-3xl" />
         
         <div className="relative mx-auto max-w-6xl">
           <div className="mb-6 flex items-center gap-2 text-sm text-[#4a5568] dark:text-slate-400">
             <Link href="/" className="hover:text-[#a855f7] transition-colors">Home</Link>
             <ChevronRight size={14} />
             <Link href="/calculators" className="hover:text-[#a855f7] transition-colors">Calculators</Link>
             <ChevronRight size={14} />
             <span className="font-semibold text-[#1a1560] dark:text-white">NPS Calculator</span>
           </div>

           <div className="mb-10 lg:mb-12">
             <h1 className="text-3xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl lg:text-5xl">
               National Pension Scheme Calculator
             </h1>
             <p className="mt-4 max-w-3xl text-lg text-[#4a5568] dark:text-slate-300">
               Calculate your retirement corpus generated through the National Pension Scheme completely free.
             </p>
           </div>

           <NPSCalculator />

           <div className="mt-20 rounded-[32px] border border-slate-200 bg-white/50 p-6 dark:border-white/10 dark:bg-slate-950/30 sm:p-10">
              <h2 className="text-2xl font-semibold text-[#1a1560] mb-4 dark:text-white">How does the NPS Calculator work?</h2>
              <div className="space-y-4 text-[#4a5568] dark:text-slate-300 leading-relaxed">
                 <p>
                    The National Pension System (NPS) is a voluntary, defined contribution retirement savings scheme designed to enable systematic savings during a subscriber&apos;s working life. In India, your NPS corpus fully matures when you reach the age of 60.
                 </p>
                 <p>
                    This NPS calculator works exactly like a goal-oriented SIP calculator bound by a 60-year maturity period. By determining your current age, the calculator determines the number of months remaining until your 60th birthday, and calculates the compound growth of your monthly contributions based on your expected return rate (usually blended between equity and debt instruments).
                 </p>
              </div>
           </div>
         </div>
      </section>
    </MarketingShell>
  );
}
