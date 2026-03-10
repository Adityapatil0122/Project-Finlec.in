"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, TrendingUp, Wallet } from "lucide-react";

type StrategyCard = {
  title: string;
  summary: string;
  risk: string;
  focus: string;
  image: string;
};

const strategies: StrategyCard[] = [
  {
    title: "Equity Mutual Funds",
    summary: "Designed for long-term growth with diversified market exposure.",
    risk: "High Growth",
    focus: "Compounding",
    image: "/images/Equity Mutual Funds.png",
  },
  {
    title: "Hybrid Mutual Funds",
    summary: "Balance equity upside with debt stability for smoother journeys.",
    risk: "Balanced",
    focus: "Stability + Growth",
    image: "/images/Hybrid Mutual Funds.png",
  },
  {
    title: "Debt Mutual Funds",
    summary: "Prioritize income quality and lower volatility for steady returns.",
    risk: "Conservative",
    focus: "Capital Protection",
    image: "/images/Debt Mutual Funds.png",
  },
];

const strategyIcons = [TrendingUp, Wallet, ShieldCheck];

export default function FundTypes() {
  return (
    <section id="strategies" className="bg-[#f8f9fa] px-4 py-20 dark:bg-transparent sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="inline-flex rounded-full bg-[#00C896]/10 px-4 py-2 text-sm font-semibold text-[#00C896]">
            Portfolio Strategies
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl">
            Choose the right fund mix for each wealth objective
          </h2>
          <p className="mt-4 text-base text-[#4a5568] dark:text-slate-300 sm:text-lg">
            Explore curated strategy lanes with transparent risk profiles and
            outcome-oriented portfolio design.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {strategies.map((strategy, index) => {
            const Icon = strategyIcons[index];

            return (
              <motion.article
                key={strategy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <Image
                  src={strategy.image}
                  alt={strategy.title}
                  width={820}
                  height={920}
                  className="h-56 w-full object-cover"
                />
                <div className="space-y-3 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00C896]/10 text-[#00C896]">
                      <Icon size={18} />
                    </div>
                    <span className="rounded-full bg-[#7B4FD4]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#7B4FD4]">
                      {strategy.risk}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white">
                    {strategy.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4a5568] dark:text-slate-300">{strategy.summary}</p>
                  <div className="flex items-center justify-between gap-4 pt-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#00C896]">
                      Focus: {strategy.focus}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#7B4FD4]">
                      View Details
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
