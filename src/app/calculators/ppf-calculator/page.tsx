import MarketingShell from "@/components/MarketingShell";
import PPFCalculator from "@/components/calculators/PPFCalculator";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PPFCalculatorPage() {
  return (
    <MarketingShell>
      <section className="relative overflow-hidden bg-[#f8f9fa] px-4 pb-28 pt-24 dark:bg-transparent sm:px-6 lg:px-8">
         <div className="pointer-events-none absolute left-[10%] top-24 h-96 w-96 rounded-full bg-[#eab308]/10 blur-3xl" />
         
         <div className="relative mx-auto max-w-6xl">
           <div className="mb-6 flex items-center gap-2 text-sm text-[#4a5568] dark:text-slate-400">
             <Link href="/" className="hover:text-[#eab308] transition-colors">Home</Link>
             <ChevronRight size={14} />
             <Link href="/calculators" className="hover:text-[#eab308] transition-colors">Calculators</Link>
             <ChevronRight size={14} />
             <span className="font-semibold text-[#1a1560] dark:text-white">PPF Calculator</span>
           </div>

           <div className="mb-10 lg:mb-12">
             <h1 className="text-3xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl lg:text-5xl">
               PPF Calculator
             </h1>
             <p className="mt-4 max-w-3xl text-lg text-[#4a5568] dark:text-slate-300">
               Calculate your Public Provident Fund (PPF) maturity amount and interest earned over a 15-year period completely free.
             </p>
           </div>

           <PPFCalculator />

           <div className="mt-20 rounded-[32px] border border-slate-200 bg-white/50 p-6 dark:border-white/10 dark:bg-slate-950/30 sm:p-10">
              <h2 className="text-2xl font-semibold text-[#1a1560] mb-4 dark:text-white">What is a PPF Calculator?</h2>
              <div className="space-y-4 text-[#4a5568] dark:text-slate-300 leading-relaxed">
                 <p>
                    Public Provident Fund (PPF) is a highly popular long-term saving scheme backed by the Indian Government. Known for its safety, tax advantages, and attractive interest rates, it is an essential component of many investors' portfolios, primarily serving retirement goals.
                 </p>
                 <p>
                    A PPF calculator helps individuals estimate the long-term growth of their PPF investments over the mandatory 15-year lock-in period. Because the maximum allowable investment under Section 80C is ₹1.5 Lakhs per year, our calculator bounds the inputs to ensure you estimate realistic and tax-compliant returns.
                 </p>
              </div>
           </div>
         </div>
      </section>
    </MarketingShell>
  );
}
