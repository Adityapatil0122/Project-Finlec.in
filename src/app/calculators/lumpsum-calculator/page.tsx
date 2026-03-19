import MarketingShell from "@/components/MarketingShell";
import LumpsumCalculator from "@/components/calculators/LumpsumCalculator";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function LumpsumCalculatorPage() {
  return (
    <MarketingShell>
      <section className="relative overflow-hidden bg-[#f8f9fa] px-4 pb-28 pt-10 sm:px-6 lg:px-8">
         <div className="pointer-events-none absolute left-[10%] top-24 h-96 w-96 rounded-full bg-[#7B4FD4]/10 blur-3xl" />
         
         <div className="relative mx-auto max-w-6xl">
           <div className="mb-6 flex items-center gap-2 text-sm text-[#4a5568]">
             <Link href="/" className="hover:text-[#7B4FD4] transition-colors">Home</Link>
             <ChevronRight size={14} />
             <Link href="/calculators" className="hover:text-[#7B4FD4] transition-colors">Calculators</Link>
             <ChevronRight size={14} />
             <span className="font-semibold text-[#1a1560]">Lumpsum Calculator</span>
           </div>

           <div className="mb-10 lg:mb-12">
             <h1 className="text-3xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-4xl lg:text-5xl">
               Lumpsum Calculator
             </h1>
             <p className="mt-4 max-w-3xl text-lg text-[#4a5568]">
               Calculate how much your one-time investments will grow over a period of time with expected returns.
             </p>
           </div>

           <LumpsumCalculator />

           <div className="mt-20 rounded-[32px] border border-slate-200 bg-white/50 p-6 sm:p-10">
              <h2 className="text-2xl font-semibold text-[#1a1560] mb-4">What is a Lumpsum Calculator?</h2>
              <div className="space-y-4 text-[#4a5568] leading-relaxed">
                 <p>
                    A mutual fund lumpsum calculator is an online tool that helps investors to find out the estimated return on their lumpsum investments. You can find out the future value of your one-time investment by just entering the amount, time period, and expected rate of return inside the calculator.
                 </p>
                 <p>
                    Unlike SIPs, a Lumpsum investment requires depositing bulk amounts of money all at once. Market timing might be more crucial for lump sum investing because entering at inflated market values may impact the returns.
                 </p>
              </div>

              <h2 className="text-2xl font-semibold text-[#1a1560] mt-8 mb-4">Benefits of Lumpsum Investments</h2>
              <ul className="list-disc pl-5 space-y-2 text-[#4a5568]">
                 <li>Deploy large cash influxes from bonuses, gifts, or mature bonds into markets immediately.</li>
                 <li>Start compounding early. A single bulk sum earns more returns faster compared to breaking it down in SIPs assuming market levels stay stable or grow over long term.</li>
                 <li>Easy to track compared to multiple monthly cashflows.</li>
                 <li>No requirement for maintaining monthly bank balances since you only invest once.</li>
              </ul>
           </div>
         </div>
      </section>
    </MarketingShell>
  );
}

