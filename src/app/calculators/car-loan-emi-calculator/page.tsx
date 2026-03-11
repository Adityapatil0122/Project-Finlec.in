import MarketingShell from "@/components/MarketingShell";
import CarLoanEMICalculator from "@/components/calculators/CarLoanEMICalculator";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CarLoanEMICalculatorPage() {
  return (
    <MarketingShell>
      <section className="relative overflow-hidden bg-[#f8f9fa] px-4 pb-28 pt-24 dark:bg-transparent sm:px-6 lg:px-8">
         <div className="pointer-events-none absolute left-[10%] top-24 h-96 w-96 rounded-full bg-[#14b8a6]/10 blur-3xl" />
         
         <div className="relative mx-auto max-w-6xl">
           <div className="mb-6 flex items-center gap-2 text-sm text-[#4a5568] dark:text-slate-400">
             <Link href="/" className="hover:text-[#14b8a6] transition-colors">Home</Link>
             <ChevronRight size={14} />
             <Link href="/calculators" className="hover:text-[#14b8a6] transition-colors">Calculators</Link>
             <ChevronRight size={14} />
             <span className="font-semibold text-[#1a1560] dark:text-white">Car Loan EMI Calculator</span>
           </div>

           <div className="mb-10 lg:mb-12">
             <h1 className="text-3xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl lg:text-5xl">
               Car Loan EMI Calculator
             </h1>
             <p className="mt-4 max-w-3xl text-lg text-[#4a5568] dark:text-slate-300">
               Figure out your monthly payments on a new or used car loan effortlessly.
             </p>
           </div>

           <CarLoanEMICalculator />

           <div className="mt-20 rounded-[32px] border border-slate-200 bg-white/50 p-6 dark:border-white/10 dark:bg-slate-950/30 sm:p-10">
              <h2 className="text-2xl font-semibold text-[#1a1560] mb-4 dark:text-white">How does a Car Loan EMI calculator help?</h2>
              <div className="space-y-4 text-[#4a5568] dark:text-slate-300 leading-relaxed">
                 <p>
                    When taking out a car loan to purchase your favorite vehicle, knowing your EMI obligations before committing is highly beneficial. A car EMI calculator computes the monthly amount you will need to pay based on your total loan amount, the bank's interest rate, and your repayment tenure.
                 </p>
                 <p>
                    Understanding this breakdown also lets you discover the total interest you'll be paying. The shorter the loan tenure, the higher your EMI will be, but your overall interest payout remains lower. Adjusting the ranges helps you discover an EMI amount that is comfortable for your monthly income.
                 </p>
              </div>
           </div>
         </div>
      </section>
    </MarketingShell>
  );
}
