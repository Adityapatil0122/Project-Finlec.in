import MarketingShell from "@/components/MarketingShell";
import EPFCalculator from "@/components/calculators/EPFCalculator";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function EPFCalculatorPage() {
  return (
    <MarketingShell>
      <section className="relative overflow-hidden bg-[#f8f9fa] px-4 pb-28 pt-10 sm:px-6 lg:px-8">
         <div className="pointer-events-none absolute left-[10%] top-24 h-96 w-96 rounded-full bg-[#ef4444]/10 blur-3xl" />
         
         <div className="relative mx-auto max-w-6xl">
           <div className="mb-6 flex items-center gap-2 text-sm text-[#4a5568]">
             <Link href="/" className="hover:text-[#ef4444] transition-colors">Home</Link>
             <ChevronRight size={14} />
             <Link href="/calculators" className="hover:text-[#ef4444] transition-colors">Calculators</Link>
             <ChevronRight size={14} />
             <span className="font-semibold text-[#1a1560]">EPF Calculator</span>
           </div>

           <div className="mb-10 lg:mb-12">
             <h1 className="text-3xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-4xl lg:text-5xl">
               EPF Calculator
             </h1>
             <p className="mt-4 max-w-3xl text-lg text-[#4a5568]">
               Calculate your Employee&apos;s Provident Fund (EPF) balance at retirement.
             </p>
           </div>

           <EPFCalculator />

           <div className="mt-20 rounded-[32px] border border-slate-200 bg-white/50 p-6 sm:p-10">
              <h2 className="text-2xl font-semibold text-[#1a1560] mb-4">What is the EPF Calculator?</h2>
              <div className="space-y-4 text-[#4a5568] leading-relaxed">
                 <p>
                    An EPF calculator simulates how much your provident fund account balance will be at the time of your retirement. Both the employee and employer contribute 12% of the employee&apos;s basic salary and dearness allowance to the EPF. Note that out of the employer&apos;s 12%, 8.33% goes to the Employee Pension Scheme (EPS) and 3.67% goes to the EPF.
                 </p>
              </div>
           </div>
         </div>
      </section>
    </MarketingShell>
  );
}

