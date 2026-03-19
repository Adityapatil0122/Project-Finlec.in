"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Target, Unlock, Clock, Trophy } from "lucide-react";

const benefits = [
  {
    id: "growth",
    title: "Real Wealth Growth",
    desc: "Traditional deposits struggle to beat inflation. After taxes, your money often loses purchasing power. Equity SIPs historically target 10-15%+ returns, ensuring your money outpaces inflation and actually grows in real terms.",
    icon: Zap,
    color: "from-amber-400 to-orange-500",
    textClass: "text-amber-500",
    bgClass: "bg-amber-500/10",
  },
  {
    id: "moods",
    title: "Capture All Market Moods",
    desc: "Wondering whether to invest at a market peak or dip? By investing every day, you automatically buy more units when markets are down and fewer when up. You neutralize volatility through extreme Rupee Cost Averaging.",
    icon: Target,
    color: "from-blue-400 to-indigo-500",
    textClass: "text-blue-500",
    bgClass: "bg-blue-500/10",
  },
  {
    id: "flexibility",
    title: "Absolute Flexibility",
    desc: "Traditional methods like Pigmy deposits are locked. Daily SIPs offer true flexibility - you can pause, modify, or withdraw money anytime without rigid banking constraints or penalties.",
    icon: Unlock,
    color: "from-teal-400 to-emerald-500",
    textClass: "text-emerald-500",
    bgClass: "bg-emerald-500/10",
  },
  {
    id: "friction",
    title: "Zero Friction & Fees",
    desc: "No physical agent meetings, no collection fees (which can be 2-3% in Pigmy). You set up a simple bank mandate digitally once, and micro-investments happen automatically. The ultimate set-and-forget discipline.",
    icon: Clock,
    color: "from-fuchsia-400 to-purple-500",
    textClass: "text-purple-500",
    bgClass: "bg-purple-500/10",
  },
];

export default function AnimatedDailySipBenefits() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefits.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-20 rounded-[2.5rem] bg-gradient-to-br from-[#0ea5e9]/5 to-[#7B4FD4]/5 p-8 sm:p-12 border border-slate-200 relative overflow-hidden bg-white/40 backdrop-blur-3xl shadow-xl shadow-slate-200/40">
      <div className="absolute -top-24 -right-24 p-8 opacity-5 pointer-events-none text-[#0ea5e9]">
        <Trophy size={360} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-[#1a1560] mb-4 lg:text-4xl">
            Why Daily SIP Overpowers the Traditional World?
          </h3>
          <p className="text-lg text-[#4a5568] max-w-2xl mx-auto leading-relaxed">
            While Pigmy deposits were historically useful, they belong to an era before digital automation. Daily SIP is an optimized wealth creation engine.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Menu Selection */}
          <div className="flex flex-col w-full lg:w-1/3 gap-3">
            {benefits.map((benefit, idx) => {
              const isActive = activeIndex === idx;
              const Icon = benefit.icon;
              return (
                <button
                  key={benefit.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 ${
                    isActive
                      ? "bg-white shadow-lg border border-slate-200 scale-105 z-10"
                      : "hover:bg-white/50 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className={`p-2 rounded-xl transition-colors duration-300 ${isActive ? benefit.bgClass : "bg-slate-100"}`}>
                    <Icon className={`w-6 h-6 transition-colors duration-300 ${isActive ? benefit.textClass : "text-slate-500"}`} />
                  </div>
                  <span className={`font-semibold transition-colors duration-300 ${isActive ? "text-[#1a1560]" : "text-slate-600"}`}>
                    {benefit.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Content Display */}
          <div className="w-full lg:w-2/3 h-[320px] sm:h-[280px] lg:h-[300px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 rounded-[2rem] bg-white border border-slate-200 shadow-2xl p-8 lg:p-12 flex flex-col justify-center overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${benefits[activeIndex].color} rounded-full blur-3xl opacity-20 transform translate-x-1/3 -translate-y-1/3`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    {(() => {
                      const ActiveIcon = benefits[activeIndex].icon;
                      return (
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${benefits[activeIndex].color} text-white shadow-lg`}>
                          <ActiveIcon className="w-8 h-8" />
                        </div>
                      );
                    })()}
                    <h4 className="text-3xl font-bold text-[#1a1560]">
                      {benefits[activeIndex].title}
                    </h4>
                  </div>
                  <p className="text-[#4a5568] text-lg leading-relaxed">
                    {benefits[activeIndex].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

