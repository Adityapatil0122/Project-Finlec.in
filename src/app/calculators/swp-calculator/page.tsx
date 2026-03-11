import MarketingShell from "@/components/MarketingShell";
import SWPCalculator from "@/components/calculators/SWPCalculator";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function SWPCalculatorPage() {
  return (
    <MarketingShell>
      <section className="relative overflow-hidden bg-[#f8f9fa] px-4 pb-28 pt-24 dark:bg-transparent sm:px-6 lg:px-8">
         <div className="pointer-events-none absolute left-[10%] top-24 h-96 w-96 rounded-full bg-[#f59e0b]/10 blur-3xl" />
         
         <div className="relative mx-auto max-w-6xl">
           <div className="mb-6 flex items-center gap-2 text-sm text-[#4a5568] dark:text-slate-400">
             <Link href="/" className="hover:text-[#f59e0b] transition-colors">Home</Link>
             <ChevronRight size={14} />
             <Link href="/calculators" className="hover:text-[#f59e0b] transition-colors">Calculators</Link>
             <ChevronRight size={14} />
             <span className="font-semibold text-[#1a1560] dark:text-white">SWP Calculator</span>
           </div>

           <div className="mb-10 lg:mb-12">
             <h1 className="text-3xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl lg:text-5xl">
               SWP Calculator
             </h1>
             <p className="mt-4 max-w-3xl text-lg text-[#4a5568] dark:text-slate-300">
               Calculate your final maturity amount and estimate the right monthly withdrawal limit so your money outlasts your retirement.
             </p>
           </div>

           <SWPCalculator />

           <div className="mt-20 rounded-[32px] border border-slate-200 bg-white/50 p-6 dark:border-white/10 dark:bg-slate-950/30 sm:p-10">
              <h2 className="text-2xl font-semibold text-[#1a1560] mb-4 dark:text-white">What is a SWP Calculator?</h2>
              <div className="space-y-4 text-[#4a5568] dark:text-slate-300 leading-relaxed">
                 <p>
                    A Systematic Withdrawal Plan (SWP) allows you to withdraw a fixed amount of money from your mutual fund investments on a regular basis (e.g., monthly). This calculator shows you how long your corpus will last based on your withdrawal rate, while the remaining money continues to earn interest.
                 </p>
              </div>

              <h2 className="text-2xl font-semibold text-[#1a1560] mt-8 mb-4 dark:text-white">Why use an SWP?</h2>
              <ul className="list-disc pl-5 space-y-2 text-[#4a5568] dark:text-slate-300">
                 <li>Create a reliable pension-like income for retirement from your accumulated corpus.</li>
                 <li>Enjoy capital gains rather than fixed interest, preventing tax overhead since only the gains portion of the withdrawal gets taxed.</li>
                 <li>Combat inflation by allowing the remaining invested amount to grow in the markets.</li>
              </ul>
           </div>
         </div>
      </section>
    </MarketingShell>
  );
}
