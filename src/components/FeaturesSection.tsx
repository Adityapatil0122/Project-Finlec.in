"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Activity,
  CandlestickChart,
  CircleDollarSign,
  PiggyBank,
  RefreshCcw,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";

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
  return (
    <section id="features" className="relative overflow-hidden bg-[#f8f9fa] px-4 py-20 dark:bg-transparent sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent dark:from-[#0c0a2e]" />
      <div className="pointer-events-none absolute right-[-170px] top-16 h-80 w-80 rounded-full bg-[#7B4FD4]/15 blur-3xl" />
      <div className="pointer-events-none absolute left-[-140px] top-44 h-72 w-72 rounded-full bg-[#00C896]/12 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid items-center gap-8 rounded-3xl border border-slate-200 finlec-surface p-6 dark:border-white/10 md:p-8 lg:grid-cols-[1fr_0.95fr]"
        >
          <div>
            <p className="inline-flex rounded-full bg-[#00C896]/10 px-4 py-2 text-sm font-semibold text-[#00C896]">
              Platform Capabilities
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl">
              Everything needed to run a modern investment journey
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#4a5568] dark:text-slate-300 sm:text-lg">
              Designed for first-time and experienced investors with clear workflows,
              measurable insights, and faster execution.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#00C896]/25 bg-[#00C896]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.13em] text-[#089d79]">
                Portfolio intelligence
              </span>
              <span className="rounded-full border border-[#7B4FD4]/25 bg-[#7B4FD4]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.13em] text-[#6a3dc7]">
                Outcome tracking
              </span>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/ai/investment-insights.png"
              alt="AI generated investment analytics visualization"
              width={1000}
              height={760}
              className="h-64 w-full rounded-2xl border border-slate-200 object-cover dark:border-white/10 md:h-[280px]"
            />
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="animate-float-reverse absolute -bottom-3 left-4 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm dark:border-white/10 dark:bg-slate-950/80"
            >
              <p className="text-xs font-semibold text-[#4a5568] dark:text-slate-300">Alpha tracking</p>
              <p className="text-sm font-bold text-[#1a1560] dark:text-white">+2.8% vs benchmark</p>
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-[#00C896]/30 dark:border-white/10 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full bg-[#00C896]/8 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00C896]/10 text-[#00C896]">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5568] dark:text-slate-300">
                  {feature.description}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.13em] text-[#1a1560]/70 dark:text-slate-400">
                  {feature.metric}
                </p>
                <p className="mt-5 inline-flex rounded-full bg-[#7B4FD4]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#7B4FD4]">
                  {feature.signal}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
