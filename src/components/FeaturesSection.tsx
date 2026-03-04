"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CandlestickChart,
  Landmark,
  RefreshCcw,
  Shield,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  signal: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Allocation Intelligence",
    description: "Dynamic model portfolios tuned to your risk and return corridor.",
    signal: "Volatility-aware",
    icon: SlidersHorizontal,
  },
  {
    title: "Live Market Lens",
    description: "Monitor macro shifts and fund behavior without leaving your dashboard.",
    signal: "Real-time feed",
    icon: CandlestickChart,
  },
  {
    title: "Institutional Debt Filters",
    description: "Credit quality and duration checks built into debt fund recommendations.",
    signal: "Credit-first",
    icon: Landmark,
  },
  {
    title: "Automated Rebalancing",
    description: "Rule-based rebalance nudges keep strategy drift under control.",
    signal: "SIP synchronized",
    icon: RefreshCcw,
  },
  {
    title: "Protection Guardrails",
    description: "Risk score alerts trigger before downside compounds.",
    signal: "Early warnings",
    icon: Shield,
  },
  {
    title: "Goal Performance Heatmap",
    description: "Visualize how each goal is tracking against target outcomes.",
    signal: "Outcome-led",
    icon: Activity,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative bg-[#0a0a0a] px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(22,163,74,0.16),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#dcfce7] backdrop-blur-md">
            Platform Capabilities
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white font-[family-name:var(--font-sora)] sm:text-4xl">
            Everything needed to run a modern personal investment desk
          </h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Built for clarity under volatility, with elegant workflows for investing,
            monitoring, and portfolio hygiene.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md shadow-2xl shadow-green-500/15"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-[#dcfce7]">
                  <Icon size={22} />
                </div>
                <p className="mt-5 text-lg font-semibold text-white font-[family-name:var(--font-sora)]">
                  {feature.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {feature.description}
                </p>
                <p className="mt-5 inline-flex rounded-full border border-white/20 bg-[#14532d]/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#dcfce7]">
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