"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  CandlestickChart,
  CircleDollarSign,
  PiggyBank,
  RefreshCcw,
  SlidersHorizontal,
  type LucideIcon,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

type Feature = {
  title: string;
  description: string;
  signal: string;
  metric: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Allocation Intelligence",
    description: "Dynamic model portfolios tuned to your risk and return corridor.",
    signal: "Volatility-aware",
    metric: "12 risk buckets",
    icon: SlidersHorizontal,
  },
  {
    title: "Live Market Lens",
    description: "Monitor macro shifts and fund behavior without leaving your dashboard.",
    signal: "Real-time feed",
    metric: "Minute-level updates",
    icon: CandlestickChart,
  },
  {
    title: "Automated Rebalancing",
    description: "Rule-based rebalance nudges keep strategy drift under control.",
    signal: "SIP synchronized",
    metric: "Quarterly checks",
    icon: RefreshCcw,
  },
  {
    title: "Goal Progress Heatmap",
    description: "Visualize how every goal is tracking against target outcomes.",
    signal: "Outcome-led",
    metric: "Live trajectory",
    icon: Activity,
  },
  {
    title: "SIP Step-Up Planner",
    description: "Simulate yearly SIP increments and lock in faster corpus growth.",
    signal: "Compounding boost",
    metric: "Scenario engine",
    icon: PiggyBank,
  },
  {
    title: "Tax Smart Investing",
    description: "Track ELSS lock-in and tax-saving opportunities inside one timeline.",
    signal: "Tax optimized",
    metric: "80C mapped",
    icon: CircleDollarSign,
  },
];

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="features" className="relative overflow-hidden bg-[#f8f9fa] px-4 py-20 dark:bg-transparent sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent dark:from-[#0c0a2e]" />
      <div className="pointer-events-none absolute right-[-170px] top-16 h-80 w-80 rounded-full bg-[#7B4FD4]/15 blur-3xl" />
      <div className="pointer-events-none absolute left-[-140px] top-44 h-72 w-72 rounded-full bg-[#04b488]/12 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.35 }}
           transition={{ duration: 0.5, ease: "easeOut" }}
           className="text-center mb-16"
        >
          <p className="inline-flex rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]">
            Platform Capabilities
          </p>
          <h2 className="mt-4 mx-auto max-w-3xl text-3xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl">
            Everything needed to run a modern investment journey
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-[#4a5568] dark:text-slate-300 sm:text-lg">
            Designed for first-time and experienced investors with clear workflows,
            measurable insights, and faster execution.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
          
          {/* Left Column: Interactive Tab List */}
          <div className="flex flex-col space-y-3">
             {features.map((feature, index) => {
               const Icon = feature.icon;
               const isActive = activeIndex === index;

               return (
                 <button
                   key={feature.title}
                   onClick={() => setActiveIndex(index)}
                   className={cn(
                     "flex items-start gap-4 p-5 text-left rounded-3xl transition-all duration-300 border",
                     isActive 
                       ? "bg-white dark:bg-slate-900 border-[#04b488]/30 shadow-[0_8px_30px_rgb(4,180,136,0.08)] transform scale-[1.02]" 
                       : "bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-slate-900/50"
                   )}
                 >
                    <div className={cn(
                      "flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300",
                      isActive ? "bg-[#04b488] text-white" : "bg-[#04b488]/10 text-[#04b488]"
                    )}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className={cn(
                        "text-lg font-semibold font-[family-name:var(--font-sora)] transition-colors",
                        isActive ? "text-[#1a1560] dark:text-white" : "text-[#1a1560]/70 dark:text-slate-300"
                      )}>
                        {feature.title}
                      </h3>
                      <p className={cn(
                         "mt-1 text-sm leading-relaxed transition-all duration-300 overflow-hidden",
                         isActive ? "text-[#4a5568] dark:text-slate-400 max-h-20 opacity-100" : "max-h-0 opacity-0"
                      )}>
                         {feature.description}
                      </p>
                    </div>
                 </button>
               )
             })}
          </div>

          {/* Right Column: Dynamic Preview Window */}
          <div className="relative h-[500px] w-full rounded-[2.5rem] border border-slate-200/60 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] dark:border-white/10 dark:bg-slate-950/80 overflow-hidden">
             
             {/* Mock Browser Header */}
             <div className="flex items-center px-6 py-4 border-b border-slate-100 dark:border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto px-4 py-1.5 rounded-full bg-slate-50 dark:bg-slate-900 text-[10px] font-semibold text-slate-400 tracking-wider">
                   FINLEC.IN / {features[activeIndex].title.toUpperCase().replace(/\s+/g, '-')}
                </div>
             </div>

             {/* Dynamic Content Body */}
             <div className="relative w-full h-full p-8 flex items-center justify-center bg-slate-50/50 dark:bg-[#0c0a2e]/20">
                <AnimatePresence mode="wait">
                   <motion.div
                     key={activeIndex}
                     initial={{ opacity: 0, scale: 0.95, y: 10 }}
                     animate={{ opacity: 1, scale: 1, y: 0 }}
                     exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                     transition={{ duration: 0.4, ease: "easeOut" }}
                     className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl p-6 shadow-xl"
                   >
                     {/* Dynamic Header */}
                     <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100 dark:border-white/5">
                        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#04b488]/10 text-[#04b488]">
                           {(() => {
                             const ActiveIcon = features[activeIndex].icon;
                             return <ActiveIcon size={28} />;
                           })()}
                        </div>
                        <div>
                           <p className="text-xs font-bold uppercase tracking-widest text-[#7B4FD4] mb-1">
                             {features[activeIndex].signal}
                           </p>
                           <h4 className="text-xl font-bold text-[#1a1560] dark:text-white font-[family-name:var(--font-sora)]">
                             {features[activeIndex].title}
                           </h4>
                        </div>
                     </div>

                     {/* Mock Data Visualization Base */}
                     <div className="space-y-4">
                       <div className="flex justify-between items-end mb-2">
                          <div>
                            <p className="text-sm text-slate-500 mb-1">Primary Metric</p>
                            <p className="text-2xl font-bold text-[#1a1560] dark:text-white">{features[activeIndex].metric}</p>
                          </div>
                          <div className="flex items-center gap-1 text-xs font-bold text-[#04b488] bg-[#04b488]/10 px-2 py-1 rounded-md">
                             <CheckCircle2 size={12} /> Active
                          </div>
                       </div>
                       
                       {/* Animated Skeleton Lines */}
                       <div className="h-24 w-full rounded-xl bg-slate-100 dark:bg-slate-800 overflow-hidden relative border border-slate-200/50 dark:border-white/5">
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-white/10 to-transparent"
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                          />
                          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[linear-gradient(180deg,transparent,rgba(4,180,136,0.1))] border-t-2 border-[#04b488] transform translate-y-2 opacity-50" />
                          <div className="absolute top-4 left-4 right-4 flex gap-2">
                             <div className="h-2 rounded-full w-1/3 bg-slate-200 dark:bg-slate-700" />
                             <div className="h-2 rounded-full w-1/4 bg-slate-200 dark:bg-slate-700" />
                          </div>
                          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                             <div className="h-2 rounded-full w-1/4 bg-slate-200 dark:bg-slate-700" />
                             <div className="h-2 rounded-full w-1/2 bg-slate-200 dark:bg-slate-700" />
                          </div>
                       </div>
                     </div>
                   </motion.div>
                </AnimatePresence>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
