import MarketingShell from "@/components/MarketingShell";
import RDCalculator from "@/components/calculators/RDCalculator";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function RDCalculatorPage() {
  return (
    <MarketingShell>
      <section className="relative overflow-hidden bg-[#f8f9fa] px-4 pb-28 pt-24 dark:bg-transparent sm:px-6 lg:px-8">
         <div className="pointer-events-none absolute left-[10%] top-24 h-96 w-96 rounded-full bg-[#ef4444]/10 blur-3xl" />
         
         <div className="relative mx-auto max-w-6xl">
           <div className="mb-6 flex items-center gap-2 text-sm text-[#4a5568] dark:text-slate-400">
             <Link href="/" className="hover:text-[#ef4444] transition-colors">Home</Link>
             <ChevronRight size={14} />
             <Link href="/calculators" className="hover:text-[#ef4444] transition-colors">Calculators</Link>
             <ChevronRight size={14} />
             <span className="font-semibold text-[#1a1560] dark:text-white">RD Calculator</span>
           </div>

           <div className="mb-10 lg:mb-12">
             <h1 className="text-3xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl lg:text-5xl">
               Recurring Deposit Calculator
             </h1>
             <p className="mt-4 max-w-3xl text-lg text-[#4a5568] dark:text-slate-300">
               Calculate maturity amount and estimate returns on your Recurring Deposits using our free RD calculator.
             </p>
           </div>

           <RDCalculator />

           <div className="mt-20 rounded-[32px] border border-slate-200 bg-white/50 p-6 dark:border-white/10 dark:bg-slate-950/30 sm:p-10">
              <h2 className="text-2xl font-semibold text-[#1a1560] mb-4 dark:text-white">What is a Recurring Deposit (RD) Calculator?</h2>
              <div className="space-y-4 text-[#4a5568] dark:text-slate-300 leading-relaxed">
                 <p>
                    A Recurring Deposit (RD) is a special kind of term deposit offered by Indian banks which helps people with regular fixed incomes deposit a fixed amount every month into their recurring deposit account and earn interest at the rate applicable to fixed deposits.
                 </p>
                 <p>
                    An RD calculator is a simple financial tool designed to estimate the maturity amount of an RD. Since RD interest in India is compounded quarterly, manually calculating the future value can be complex. This calculator uses quarterly compounding logic to instantly reveal the exact interest you will accumulate over your chosen tenure.
                 </p>
              </div>
           </div>
         </div>
      </section>
    </MarketingShell>
  );
}
