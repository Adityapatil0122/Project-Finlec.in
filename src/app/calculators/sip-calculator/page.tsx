import MarketingShell from "@/components/MarketingShell";
import SIPCalculator from "@/components/calculators/SIPCalculator";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function SIPCalculatorPage() {
  return (
    <MarketingShell>
      <section className="relative overflow-hidden bg-[#f8f9fa] px-4 pb-28 pt-24 dark:bg-transparent sm:px-6 lg:px-8">
         <div className="pointer-events-none absolute left-[10%] top-24 h-96 w-96 rounded-full bg-[#04b488]/10 blur-3xl" />
         
         <div className="relative mx-auto max-w-6xl">
           <div className="mb-6 flex items-center gap-2 text-sm text-[#4a5568] dark:text-slate-400">
             <Link href="/" className="hover:text-[#04b488] transition-colors">Home</Link>
             <ChevronRight size={14} />
             <Link href="/calculators" className="hover:text-[#04b488] transition-colors">Calculators</Link>
             <ChevronRight size={14} />
             <span className="font-semibold text-[#1a1560] dark:text-white">SIP Calculator</span>
           </div>

           <div className="mb-10 lg:mb-12">
             <h1 className="text-3xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl lg:text-5xl">
               SIP Calculator
             </h1>
             <p className="mt-4 max-w-3xl text-lg text-[#4a5568] dark:text-slate-300">
               Calculate how much you need to save or how much you will accumulate with your Systematic Investment Plan.
             </p>
           </div>

           <SIPCalculator />

           {/* SEO content similar to Groww below calculator */}
           <div className="mt-20 rounded-[32px] border border-slate-200 bg-white/50 p-6 dark:border-white/10 dark:bg-slate-950/30 sm:p-10">
              <h2 className="text-2xl font-semibold text-[#1a1560] mb-4 dark:text-white">What is a SIP Calculator?</h2>
              <div className="space-y-4 text-[#4a5568] dark:text-slate-300 leading-relaxed">
                 <p>
                    A SIP calculator is a simple tool that allows individuals to get an idea of the returns on their mutual fund investments made through SIP. SIP investments in mutual funds have become one of the most popular investment options for millennials lately.
                 </p>
                 <p>
                    These mutual fund sip calculators are designed to give potential investors an estimate on their mutual fund investments. However, the actual returns offered by a mutual fund scheme varies depending on various factors. The SIP calculator does not provide clarification for the exit load and expense ratio (if any).
                 </p>
                 <p>
                    This calculator will calculate the wealth gain and expected returns for your monthly SIP investment, giving you a rough estimate on the maturity amount for any of your monthly SIPs based on a projected annual return rate.
                 </p>
              </div>

              <h2 className="text-2xl font-semibold text-[#1a1560] mt-8 mb-4 dark:text-white">How can a SIP return calculator help you?</h2>
              <ul className="list-disc pl-5 space-y-2 text-[#4a5568] dark:text-slate-300">
                 <li>Answers the question: "How much should I invest every month to reach my goal?"</li>
                 <li>Shows you the total amount you have invested over the timeline.</li>
                 <li>Gives an estimated value of the returns earned and maturity corpus.</li>
                 <li>Guides you on making course-correcting step-ups during the tenure.</li>
              </ul>
           </div>
         </div>
      </section>
    </MarketingShell>
  );
}
