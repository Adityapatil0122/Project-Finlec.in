"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
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
  image: string;
  imageAlt: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Allocation Intelligence",
    description: "Dynamic model portfolios tuned to your risk and return corridor.",
    signal: "Volatility-aware",
    metric: "12 risk buckets",
    image: "/images/mutualfunds.png",
    imageAlt: "Allocation intelligence illustration",
    icon: SlidersHorizontal,
  },
  {
    title: "Automated Rebalancing",
    description: "Rule-based rebalance nudges keep strategy drift under control.",
    signal: "SIP synchronized",
    metric: "Quarterly checks",
    image: "/images/investment.jpg",
    imageAlt: "Automated rebalancing illustration",
    icon: RefreshCcw,
  },
  {
    title: "Goal Progress Heatmap",
    description: "Visualize how every goal is tracking against target outcomes.",
    signal: "Outcome-led",
    metric: "Live trajectory",
    image: "/images/investingman.webp",
    imageAlt: "Goal progress illustration",
    icon: Activity,
  },
  {
    title: "SIP Step-Up Planner",
    description: "Simulate yearly SIP increments and lock in faster corpus growth.",
    signal: "Compounding boost",
    metric: "Scenario engine",
    image: "/images/mutualfunds2.jpeg",
    imageAlt: "SIP step-up illustration",
    icon: PiggyBank,
  },
  {
    title: "Tax Smart Investing",
    description: "Track ELSS lock-in and tax-saving opportunities inside one timeline.",
    signal: "Tax optimized",
    metric: "80C mapped",
    image: "/images/types of mutual funds.jpeg",
    imageAlt: "Tax planning illustration",
    icon: CircleDollarSign,
  },
];

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="features" className="relative overflow-hidden bg-white px-4 py-20 dark:bg-transparent sm:px-6 lg:px-8">

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
          <h2 className="mt-4 mx-auto max-w-3xl text-3xl font-semibold text-[#0f172a] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl">
            Everything needed to run a modern investment journey
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-[#475569] dark:text-slate-300 sm:text-lg">
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
                       ? "finlec-card border-[#04b488]/30 shadow-[0_18px_50px_-40px_rgba(4,180,136,0.4)]" 
                       : "bg-transparent border-transparent hover:border-slate-200 hover:bg-white dark:hover:border-white/10 dark:hover:bg-white/5"
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
                        isActive ? "text-[#0f172a] dark:text-white" : "text-[#0f172a]/70 dark:text-slate-300"
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
          <div className="relative h-[500px] w-full rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_18px_55px_-35px_rgba(15,23,42,0.35)] dark:border-white/10 dark:bg-slate-950/80 overflow-hidden">
             
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
             <div className="relative w-full h-full p-8 flex items-center justify-center bg-[#f8fafc] dark:bg-[#0c0a2e]/20">
                <AnimatePresence mode="wait">
                   <motion.div
                     key={activeIndex}
                     initial={{ opacity: 0, scale: 0.95, y: 10 }}
                     animate={{ opacity: 1, scale: 1, y: 0 }}
                     exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                     transition={{ duration: 0.4, ease: "easeOut" }}
                     className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl p-6 shadow-xl"
                   >
                     <div className="space-y-5">
                       <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5 dark:border-white/5">
                         <div className="flex items-start gap-4">
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
                             <h4 className="text-xl font-bold text-[#0f172a] dark:text-white font-[family-name:var(--font-sora)]">
                               {features[activeIndex].title}
                             </h4>
                             <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">
                               {features[activeIndex].description}
                             </p>
                           </div>
                         </div>
                         <span className="rounded-full bg-[#04b488]/10 px-3 py-1 text-xs font-semibold text-[#04b488]">
                           {features[activeIndex].metric}
                         </span>
                       </div>

                       <div className="grid gap-4">
                         <div className="relative h-40 overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-3 dark:border-white/10 dark:bg-slate-950/70">
                           <Image
                             src={features[activeIndex].image}
                             alt={features[activeIndex].imageAlt}
                             fill
                             className="object-contain"
                           />
                         </div>

                         <div className="grid gap-3 sm:grid-cols-2">
                         {[
                           { label: "Goal progress", value: "78%", tone: "#04b488" },
                           { label: "Risk band", value: "Moderate", tone: "#7B4FD4" },
                         ].map((item) => (
                           <div
                             key={item.label}
                             className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm text-slate-600 shadow-sm dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-300"
                           >
                             <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                               {item.label}
                             </p>
                             <p className="mt-2 text-lg font-semibold" style={{ color: item.tone }}>
                               {item.value}
                             </p>
                             <div className="mt-3 h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800">
                               <div
                                 className="h-full rounded-full"
                                 style={{
                                   width: item.label === "Goal progress" ? "78%" : "62%",
                                   backgroundColor: item.tone,
                                 }}
                               />
                             </div>
                           </div>
                         ))}
                         </div>

                       <div className="rounded-2xl border border-slate-200 bg-white/85 p-4 text-sm text-slate-600 shadow-sm dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-300">
                         <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                           <span>Momentum (30 days)</span>
                           <span className="text-[#04b488]">+1.8%</span>
                         </div>
                         <svg viewBox="0 0 260 90" className="mt-3 h-20 w-full">
                           <path
                             d="M10 70 L60 60 L110 56 L160 42 L210 30 L250 22"
                             fill="none"
                             stroke="#04b488"
                             strokeWidth="3"
                           />
                           <path
                             d="M10 70 L60 60 L110 56 L160 42 L210 30 L250 22 L250 85 L10 85 Z"
                             fill="#04b488"
                             opacity="0.12"
                           />
                         </svg>
                       </div>

                       <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
                         {[
                           "Auto-rebalanced 2 funds in the last 30 days",
                           "SIP step-up suggestion ready for next cycle",
                           "Tax-saver window opens in 18 days",
                         ].map((text) => (
                           <div key={text} className="flex items-center gap-2">
                             <CheckCircle2 size={14} className="text-[#04b488]" />
                             <span>{text}</span>
                           </div>
                         ))}
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
