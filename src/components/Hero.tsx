"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Shield,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section-2";

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

const allocationMix = [
  { label: "Equity", value: 58, color: "#04b488" },
  { label: "Hybrid", value: 24, color: "#7B4FD4" },
  { label: "Debt", value: 18, color: "#f97316" },
];

export default function Hero() {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  let cumulative = 0;
  const pieSegments = allocationMix.map((segment) => {
    const dash = (segment.value / 100) * circumference;
    const offset = circumference * (1 - cumulative / 100);
    cumulative += segment.value;
    return { ...segment, dash, offset };
  });

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-0 pb-28 pt-20 sm:pt-20 lg:pt-20"
    >
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
        subtitle="Streamline your SIP investments, discover top-performing funds, and build long-term wealth - all from one beautifully simple platform."
        callToAction={{
          text: "START INVESTING FREE ->",
          href: "/signup",
        }}
        backgroundImage="/images/Untitled-design-3.png"
      />

      <div className="relative mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-12 border-b border-slate-200/50 pb-12 dark:border-white/5 md:gap-24"
        >
          {stats.map((stat) => {
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

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-[0_14px_40px_-30px_rgba(15,23,42,0.35)] backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#04b488]">
              Investor snapshot
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-[#1a1560] dark:text-white">
              Clear signals, not just numbers
            </h3>
            <p className="mt-3 text-sm text-[#4a5568] dark:text-slate-300">
              Track goal progress, SIP discipline, and risk balance in one view.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { label: "On-track goals", value: "74%", note: "this quarter" },
                { label: "SIP discipline", value: "91%", note: "auto-pay success" },
                { label: "Risk drift", value: "Low", note: "within bands" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-600 shadow-sm dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-300"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#1a1560] dark:text-white">
                    {item.value}
                  </p>
                  <p className="text-xs text-slate-400">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-[0_14px_40px_-30px_rgba(15,23,42,0.35)] backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7B4FD4]">
                  Allocation mix
                </p>
                <p className="mt-2 text-lg font-semibold text-[#1a1560] dark:text-white">
                  Goal-ready portfolio split
                </p>
              </div>
              <span className="rounded-full bg-[#04b488]/10 px-3 py-1 text-xs font-semibold text-[#04b488]">
                Updated weekly
              </span>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <svg viewBox="0 0 120 120" className="h-28 w-28">
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="12"
                />
                {pieSegments.map((segment, index) => (
                  <motion.circle
                    key={segment.label}
                    cx="60"
                    cy="60"
                    r={radius}
                    fill="none"
                    stroke={segment.color}
                    strokeWidth="12"
                    strokeDasharray={`${segment.dash} ${circumference}`}
                    strokeDashoffset={segment.offset}
                    strokeLinecap="round"
                    initial={{ strokeDasharray: `0 ${circumference}` }}
                    animate={{ strokeDasharray: `${segment.dash} ${circumference}` }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2 + index * 0.12,
                      ease: "easeOut",
                    }}
                    style={{ transformOrigin: "60px 60px", transform: "rotate(-90deg)" }}
                  />
                ))}
                <text
                  x="60"
                  y="62"
                  textAnchor="middle"
                  className="fill-[#1a1560] text-base font-semibold dark:fill-white"
                >
                  93%
                </text>
              </svg>
              <div className="space-y-3">
                {pieSegments.map((segment) => (
                  <div key={segment.label} className="flex items-center gap-3 text-sm">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: segment.color }}
                    />
                    <span className="font-semibold text-[#1a1560] dark:text-white">
                      {segment.label}
                    </span>
                    <span className="text-slate-400">{segment.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

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
                    <Icon size={18} />
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
