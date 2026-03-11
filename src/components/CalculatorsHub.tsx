"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calculator, Banknote, Briefcase, Activity, CalendarClock, 
  HandCoins, Building2, Car, Home, PiggyBank, Landmark, 
  ShieldCheck, TrendingDown 
} from "lucide-react";
import { cn } from "@/lib/utils";

export const calculatorGroups = [
  {
    title: "Investment & Returns",
    items: [
      {
        icon: Calculator,
        title: "SIP Calculator",
        description: "Calculate how much you need to save or how much you will accumulate with your SIP",
        link: "/calculators/sip-calculator",
        color: "#04b488",
      },
      {
        icon: HandCoins,
        title: "Lumpsum Calculator",
        description: "Calculate returns for lumpsum investments to achieve your financial goals",
        link: "/calculators/lumpsum-calculator",
        color: "#7B4FD4",
      },
      {
        icon: Briefcase,
        title: "Mutual Fund Returns",
        description: "Calculate the returns on your mutual fund investments",
        link: "/calculators/mutual-fund-returns-calculator",
        color: "#3b82f6",
      },
      {
        icon: Banknote,
        title: "FD Calculator",
        description: "Check returns on your fixed deposits (FDs) without any hassle",
        link: "/calculators/fd-calculator",
        color: "#f97316",
      },
      {
        icon: PiggyBank,
        title: "RD Calculator",
        description: "Check returns on your recurring deposits (RDs)",
        link: "/calculators/rd-calculator",
        color: "#ef4444",
      },
      {
        icon: Landmark,
        title: "PPF Calculator",
        description: "Calculate maturity amount for your Public Provident Fund",
        link: "/calculators/ppf-calculator",
        color: "#eab308",
      },
      {
        icon: Building2,
        title: "EPF Calculator",
        description: "Calculate returns for your Employee's Provident Fund (EPF)",
        link: "/calculators/epf-calculator",
        color: "#14b8a6",
      },
    ]
  },
  {
    title: "Future & Retirement",
    items: [
      {
        icon: CalendarClock,
        title: "Retirement Calculator",
        description: "Calculate how much you need for a relaxed retirement",
        link: "/calculators/retirement-calculator",
        color: "#ec4899",
      },
      {
        icon: ShieldCheck,
        title: "NPS Calculator",
        description: "Calculate maturity amount for National Pension Scheme",
        link: "/calculators/nps-calculator",
        color: "#a855f7",
      },
      {
        icon: Activity,
        title: "SWP Calculator",
        description: "Calculate your final amount with Systematic Withdrawal Plans (SWP)",
        link: "/calculators/swp-calculator",
        color: "#f59e0b",
      },
      {
        icon: TrendingDown,
        title: "Inflation Calculator",
        description: "Plan effectively by estimating the future cost of your goals and expenses",
        link: "/calculators/inflation-calculator",
        color: "#ec4899",
      },
    ]
  },
  {
    title: "Loans & EMI",
    items: [
      {
        icon: Home,
        title: "Home Loan EMI",
        description: "Calculate your home loan EMI",
        link: "/calculators/home-loan-emi-calculator",
        color: "#8b5cf6",
      },
      {
        icon: Car,
        title: "Car Loan EMI",
        description: "Calculate your car loan EMI",
        link: "/calculators/car-loan-emi-calculator",
        color: "#14b8a6",
      },
    ]
  }
];

export default function CalculatorsHub() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", ...calculatorGroups.map(g => g.title)];

  const filteredCalculators = activeTab === "All" 
    ? calculatorGroups.flatMap(g => g.items) 
    : calculatorGroups.find(g => g.title === activeTab)?.items || [];

  return (
    <section className="relative overflow-hidden bg-[#f8f9fa] px-4 pb-28 pt-32 dark:bg-transparent sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-[-170px] top-24 h-80 w-80 rounded-full bg-[#04b488]/12 blur-3xl" />
      <div className="pointer-events-none absolute right-[-160px] top-6 h-80 w-80 rounded-full bg-[#7B4FD4]/14 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, ease: "easeOut" }}
           className="mb-12 text-center"
        >
          <p className="inline-flex rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]">
            Financial Tools
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-5xl">
            Calculators
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-[#4a5568] dark:text-slate-300">
            Take your Investment strategy to the next level using Finlec&apos;s online Financial planning Calculators.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
           {tabs.map((tab) => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={cn(
                 "relative rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-300",
                 activeTab === tab 
                   ? "text-white" 
                   : "bg-white text-slate-600 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 border border-slate-200 dark:border-white/10"
               )}
             >
               {activeTab === tab && (
                 <motion.div
                   layoutId="activeTabIndicator"
                   className="absolute inset-0 rounded-full bg-[#04b488] shadow-md"
                   transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                 />
               )}
               <span className="relative z-10">{tab}</span>
             </button>
           ))}
        </div>

        {/* Dense Animated Grid */}
        <motion.div 
           layout
           className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
           <AnimatePresence mode="popLayout">
             {filteredCalculators.map((calc, idx) => {
               const Icon = calc.icon;
               
               return (
                 <motion.div
                   layout
                   key={calc.title}
                   initial={{ opacity: 0, scale: 0.9, y: 20 }}
                   animate={{ opacity: 1, scale: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 0.9, y: 20 }}
                   transition={{ 
                     type: "spring", 
                     stiffness: 150, 
                     damping: 15,
                   }}
                   whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                   className="h-full"
                 >
                   <Link href={calc.link} className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-all duration-300 hover:border-[#04b488]/30 hover:shadow-[0_20px_40px_-15px_rgba(4,180,136,0.15)] dark:border-white/10 dark:bg-slate-950/60 dark:hover:border-[#04b488]/40">
                      {/* Faded background icon */}
                      <div className="absolute -right-4 -top-4 z-0 opacity-[0.03] transition-transform duration-500 group-hover:scale-110 group-hover:opacity-[0.06] dark:opacity-[0.02] dark:group-hover:opacity-[0.04]">
                         <Icon size={140} style={{ color: calc.color }} />
                      </div>
                      
                      <div className="relative z-10 mb-6 flex items-start justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 shadow-sm transition-all duration-500 group-hover:bg-white group-hover:shadow-md dark:bg-slate-900/50 dark:group-hover:bg-slate-800">
                          <Icon size={28} style={{ color: calc.color }} className="transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 group-hover:bg-[#04b488] group-hover:text-white dark:bg-slate-800">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </div>
                      </div>
                      
                      <div className="relative z-10 mt-auto">
                        <h3 className="mb-2 text-lg font-bold text-[#1a1560] font-[family-name:var(--font-sora)] transition-colors duration-300 group-hover:text-[#04b488] dark:text-white dark:group-hover:text-[#7ff7cc]">
                          {calc.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-slate-700 dark:text-slate-400 dark:group-hover:text-slate-300">
                          {calc.description}
                        </p>
                      </div>
                   </Link>
                 </motion.div>
               );
             })}
           </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
