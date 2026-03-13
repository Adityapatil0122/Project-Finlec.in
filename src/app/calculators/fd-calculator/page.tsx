import MarketingShell from "@/components/MarketingShell";
import FDCalculator from "@/components/calculators/FDCalculator";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function FDCalculatorPage() {
  return (
    <MarketingShell>
      <section className="relative overflow-hidden bg-[#f8f9fa] px-4 pb-28 pt-24 dark:bg-transparent sm:px-6 lg:px-8">
         <div className="pointer-events-none absolute left-[10%] top-24 h-96 w-96 rounded-full bg-[#f97316]/10 blur-3xl" />
         
         <div className="relative mx-auto max-w-6xl">
           <div className="mb-6 flex items-center gap-2 text-sm text-[#4a5568] dark:text-slate-400">
             <Link href="/" className="hover:text-[#f97316] transition-colors">Home</Link>
             <ChevronRight size={14} />
             <Link href="/calculators" className="hover:text-[#f97316] transition-colors">Calculators</Link>
             <ChevronRight size={14} />
             <span className="font-semibold text-[#1a1560] dark:text-white">Fixed Deposit Calculator</span>
           </div>

           <div className="mb-10 lg:mb-12">
             <h1 className="text-3xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl lg:text-5xl">
               FD Calculator
             </h1>
             <p className="mt-4 max-w-3xl text-lg text-[#4a5568] dark:text-slate-300">
               Calculate maturity amount and estimate returns on Fixed Deposits using this FD calculator completely free.
             </p>
           </div>

           <FDCalculator />

           <div className="mt-20 rounded-[32px] border border-slate-200 bg-white/50 p-6 dark:border-white/10 dark:bg-slate-950/30 sm:p-10">
              <h2 className="text-2xl font-semibold text-[#1a1560] mb-4 dark:text-white">What is a Fixed Deposit Calculator?</h2>
              <div className="space-y-4 text-[#4a5568] dark:text-slate-300 leading-relaxed">
                 <p>
                    A Fixed Deposit (FD) is a secure financial instrument offered by banks, non-banking financial companies (NBFCs), and post offices, providing investors with a higher rate of interest than a regular savings account until a given maturity date.
                 </p>
                 <p>
                    The FD return calculator is a simple tool designed to find out the maturity amount and the interest you&apos;ll earn on your Fixed Deposit. Since fixed deposits are considered one of the safest saving avenues in India, projecting exactly what you&apos;ll earn gives clarity in capital planning for predictable expenses.
                 </p>
              </div>
           </div>
         </div>
      </section>
    </MarketingShell>
  );
}
