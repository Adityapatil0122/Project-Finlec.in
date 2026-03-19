import MarketingShell from "@/components/MarketingShell";
import StepUpSIPCalculator from "@/components/calculators/StepUpSIPCalculator";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function StepUpSIPCalculatorPage() {
  return (
    <MarketingShell>
      <section className="relative overflow-hidden bg-[#f8f9fa] px-4 pb-28 pt-10 sm:px-6 lg:px-8">
         <div className="pointer-events-none absolute left-[10%] top-24 h-96 w-96 rounded-full bg-[#04b488]/10 blur-3xl" />
         <div className="relative mx-auto max-w-6xl">
           <div className="mb-6 flex items-center gap-2 text-sm text-[#4a5568]">
             <Link href="/" className="hover:text-[#04b488] transition-colors">Home</Link>
             <ChevronRight size={14} />
             <Link href="/calculators" className="hover:text-[#04b488] transition-colors">Calculators</Link>
             <ChevronRight size={14} />
             <span className="font-semibold text-[#1a1560]">Step-Up SIP Calculator</span>
           </div>
           <div className="mb-10 lg:mb-12">
             <h1 className="text-3xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-4xl lg:text-5xl">
               Step-Up SIP Calculator
             </h1>
             <p className="mt-4 max-w-3xl text-lg text-[#4a5568]">
               Calculate how your SIP grows when you increase your monthly investment by a fixed percentage every year.
             </p>
           </div>
           <StepUpSIPCalculator />
           <div className="mt-20 rounded-[32px] border border-slate-200 bg-white/50 p-6 sm:p-10">
              <h2 className="text-2xl font-semibold text-[#1a1560] mb-4">What is a Step-Up SIP Calculator?</h2>
              <div className="space-y-4 text-[#4a5568] leading-relaxed">
                 <p>A Step-Up SIP calculator helps you estimate the returns on your mutual fund SIP investments when you increase your monthly contribution by a fixed percentage every year. This is also known as a Top-Up SIP.</p>
                 <p>As your income grows over the years, stepping up your SIP amount helps you build a significantly larger corpus compared to a regular SIP. Even a small annual increase of 10% can make a massive difference over 15-20 years.</p>
                 <p>This calculator shows the power of incremental investing — helping you understand how disciplined annual increases in your SIP can accelerate your wealth creation journey.</p>
              </div>
              <h2 className="text-2xl font-semibold text-[#1a1560] mt-8 mb-4">How does Step-Up SIP work?</h2>
              <ul className="list-disc pl-5 space-y-2 text-[#4a5568]">
                 <li>You start with a base monthly SIP amount.</li>
                 <li>Every year, your SIP amount increases by a fixed percentage (e.g., 10%).</li>
                 <li>The increased amount is invested for the remaining tenure, compounding your returns further.</li>
                 <li>Over time, the total invested amount and returns are significantly higher than a flat SIP.</li>
              </ul>
           </div>
         </div>
      </section>
    </MarketingShell>
  );
}
