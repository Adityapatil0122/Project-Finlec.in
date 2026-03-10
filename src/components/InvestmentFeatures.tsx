"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgePercent,
  Radar,
  ShieldCheck,
  TrendingUpDown,
  type LucideIcon,
} from "lucide-react";

type InvestmentFeature = {
  title: string;
  description: string;
  stat: string;
  icon: LucideIcon;
};

const investmentFeatures: InvestmentFeature[] = [
  {
    title: "SIP Step-Up Engine",
    description:
      "Model annual SIP increase strategies to hit long-term corpus targets faster.",
    stat: "Up to 32% faster goal completion",
    icon: TrendingUpDown,
  },
  {
    title: "Volatility Entry Alerts",
    description:
      "Receive curated buy-the-dip alerts based on category-level valuation bands.",
    stat: "Signal window: 24h",
    icon: Radar,
  },
  {
    title: "Tax Smart Routing",
    description:
      "Map ELSS and debt exposure for tax savings while preserving portfolio balance.",
    stat: "Section 80C aware",
    icon: BadgePercent,
  },
  {
    title: "Capital Safety Layer",
    description:
      "Debt quality filters and downside alerts shield near-term investment goals.",
    stat: "Credit risk checked",
    icon: ShieldCheck,
  },
];

export default function InvestmentFeatures() {
  return (
    <section
      id="investment-features"
      className="relative overflow-hidden bg-white px-4 py-20 dark:bg-transparent sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute left-[-170px] top-24 h-80 w-80 rounded-full bg-[#00C896]/12 blur-3xl" />
      <div className="pointer-events-none absolute right-[-160px] top-6 h-80 w-80 rounded-full bg-[#7B4FD4]/14 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid items-center gap-10 rounded-3xl border border-slate-200 finlec-surface p-6 dark:border-white/10 sm:p-8 lg:grid-cols-[1fr_0.95fr]"
        >
          <div>
            <p className="inline-flex rounded-full bg-[#00C896]/10 px-4 py-2 text-sm font-semibold text-[#00C896]">
              Investment Intelligence
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl">
              Powerful tools to optimize every rupee you invest
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4a5568] dark:text-slate-300 sm:text-lg">
              From step-up SIP planning to drawdown alerts, Finlec helps you
              invest with sharper timing, better tax efficiency, and stronger
              downside control.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#00C896]/25 bg-[#00C896]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#069f7b]">
                Predictive analytics
              </span>
              <span className="rounded-full border border-[#7B4FD4]/25 bg-[#7B4FD4]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#6d41ca]">
                SIP + Lumpsum ready
              </span>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/Powerful tools to optimize every rupee you invest.png"
              alt="Powerful tools to optimize every rupee you invest"
              width={1200}
              height={900}
              className="h-64 w-full rounded-2xl border border-slate-200 object-cover dark:border-white/10 sm:h-[300px]"
            />
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="animate-float-slow absolute -bottom-3 right-4 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm dark:border-white/10 dark:bg-slate-950/80"
            >
              <p className="text-xs font-semibold text-[#4a5568] dark:text-slate-300">SIP Efficiency</p>
              <p className="text-sm font-bold text-[#00C896]">+17.9% projected</p>
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {investmentFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.42, delay: index * 0.06, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-[#00C896]/30 dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00C896]/10 text-[#00C896]">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4a5568] dark:text-slate-300">
                  {feature.description}
                </p>
                <p className="mt-4 inline-flex rounded-full bg-[#7B4FD4]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-[#7B4FD4]">
                  {feature.stat}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
