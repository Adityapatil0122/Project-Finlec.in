"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section-2";

const fadeInUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};



const stats = [
  { value: "40+", label: "Partner AMCs", icon: Shield },
  { value: "500Cr+", label: "Assets Guided", icon: BarChart3 },
  { value: "1000+", label: "Active SIPs", icon: TrendingUp },
  { value: "93%", label: "Goal Success", icon: Target },
];

const highlights = [
  {
    icon: Zap,
    title: "Instant SIP Setup",
    description: "Start investing in under 3 minutes with smart defaults.",
  },
  {
    icon: Target,
    title: "Goal-First Planning",
    description: "Every investment mapped to a life goal with live tracking.",
  },
  {
    icon: Shield,
    title: "Risk Calibrated",
    description: "Personalized portfolios tuned to your comfort and timeline.",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-0 pb-28 pt-20 sm:pt-20 lg:pt-20"
    >
      {/* ──── NEW HERO SECTION (21st.dev template) ──── */}
      <HeroSection
        className="min-h-[85vh]"
        title={
          <>
            India&apos;s Leading All-in-One{" "}
            <br />
            <span className="bg-[linear-gradient(135deg,#04b488,#7B4FD4)] bg-clip-text text-transparent">
              Mutual Funds
            </span>{" "}
            Platform
          </>
        }
        subtitle="Streamline your SIP investments, discover top-performing funds, and build long-term wealth — all from one beautifully simple platform."
        callToAction={{
          text: "START INVESTING FREE →",
          href: "/signup",
        }}
        backgroundImage="/images/Untitled-design-3.png"
      />

      {/* ──── STATS + HIGHLIGHTS (Clean minimalist layout) ──── */}
      <div className="relative mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Minimalist Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-12 border-b border-slate-200/50 pb-12 dark:border-white/5 md:gap-24"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#04b488]/10 text-[#04b488]">
                  <Icon size={18} />
                </div>
                <p className="text-3xl font-bold tracking-tight text-[#1a1560] dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#4a5568] dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Clean Highlights Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-3xl bg-white/40 p-6 backdrop-blur-md transition-all hover:bg-white/70 dark:bg-slate-900/40 dark:hover:bg-slate-900/60"
              >
                <div className="mb-4 inline-flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7B4FD4]/10 text-[#7B4FD4]">
                    <Icon size={16} />
                  </span>
                  <h3 className="text-base font-semibold text-[#1a1560] dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[#4a5568] dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
