import MarketingShell from "@/components/MarketingShell";
import MFReturnsCalculator from "@/components/calculators/MFReturnsCalculator";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function MFReturnsCalculatorPage() {
  return (
    <MarketingShell>
      <section className="relative overflow-hidden bg-[#f8f9fa] px-4 pb-28 pt-24 dark:bg-transparent sm:px-6 lg:px-8">
         <div className="pointer-events-none absolute left-[10%] top-24 h-96 w-96 rounded-full bg-[#3b82f6]/10 blur-3xl" />
         
         <div className="relative mx-auto max-w-6xl">
           <div className="mb-6 flex items-center gap-2 text-sm text-[#4a5568] dark:text-slate-400">
             <Link href="/" className="hover:text-[#3b82f6] transition-colors">Home</Link>
             <ChevronRight size={14} />
             <Link href="/calculators" className="hover:text-[#3b82f6] transition-colors">Calculators</Link>
             <ChevronRight size={14} />
             <span className="font-semibold text-[#1a1560] dark:text-white">Mutual Fund Returns Calculator</span>
           </div>

           <div className="mb-10 lg:mb-12">
             <h1 className="text-3xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl lg:text-5xl">
               Mutual Fund Returns Calculator
             </h1>
             <p className="mt-4 max-w-3xl text-lg text-[#4a5568] dark:text-slate-300">
               Calculate the estimated returns on your mutual fund investments.
             </p>
           </div>

           <MFReturnsCalculator />

           <div className="mt-20 rounded-[32px] border border-slate-200 bg-white/50 p-6 dark:border-white/10 dark:bg-slate-950/30 sm:p-10">
              <h2 className="text-2xl font-semibold text-[#1a1560] mb-4 dark:text-white">What is a Mutual Fund Return Calculator?</h2>
              <div className="space-y-4 text-[#4a5568] dark:text-slate-300 leading-relaxed">
                 <p>
                    A Mutual Fund Return Calculator helps you to calculate the expected returns from your investments over the time period. You just need to select the type of investment (SIP/Lumpsum), enter the investment amount and time period, and expected rate of return to know the wealth you could accumulate.
                 </p>
              </div>
           </div>
         </div>
      </section>
    </MarketingShell>
  );
}
