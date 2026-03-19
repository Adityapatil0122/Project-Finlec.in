import MarketingShell from "@/components/MarketingShell";
import HomeLoanEMICalculator from "@/components/calculators/HomeLoanEMICalculator";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HomeLoanEMICalculatorPage() {
  return (
    <MarketingShell>
      <section className="relative overflow-hidden bg-[#f8f9fa] px-4 pb-28 pt-10 sm:px-6 lg:px-8">
         <div className="pointer-events-none absolute left-[10%] top-24 h-96 w-96 rounded-full bg-[#8b5cf6]/10 blur-3xl" />
         
         <div className="relative mx-auto max-w-6xl">
           <div className="mb-6 flex items-center gap-2 text-sm text-[#4a5568]">
             <Link href="/" className="hover:text-[#8b5cf6] transition-colors">Home</Link>
             <ChevronRight size={14} />
             <Link href="/calculators" className="hover:text-[#8b5cf6] transition-colors">Calculators</Link>
             <ChevronRight size={14} />
             <span className="font-semibold text-[#1a1560]">Home Loan EMI Calculator</span>
           </div>

           <div className="mb-10 lg:mb-12">
             <h1 className="text-3xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-4xl lg:text-5xl">
               Home Loan EMI Calculator
             </h1>
             <p className="mt-4 max-w-3xl text-lg text-[#4a5568]">
               Calculate Equated Monthly Installment (EMI) for your Home Loan with ease.
             </p>
           </div>

           <HomeLoanEMICalculator />

           <div className="mt-20 rounded-[32px] border border-slate-200 bg-white/50 p-6 sm:p-10">
              <h2 className="text-2xl font-semibold text-[#1a1560] mb-4">How does a Home Loan EMI calculator work?</h2>
              <div className="space-y-4 text-[#4a5568] leading-relaxed">
                 <p>
                    A home loan EMI calculator uses the standard mathematical formula for calculating equated monthly installments: E = P x r x (1+r)^n / ((1+r)^n - 1)
                 </p>
                 <p>
                    Where P is Principal, r is rate of interest per month, and n is number of months. Utilizing a home loan calculator gives you an overall picture of how much interest you will pay towards a loan, helping you budget your ongoing expenses without putting pressure on your finances.
                 </p>
              </div>
           </div>
         </div>
      </section>
    </MarketingShell>
  );
}

