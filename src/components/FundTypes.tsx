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
    image: "/images/equity.jpg",
  },
  {
    title: "Hybrid Mutual Funds",
    summary: "Balance equity upside with debt stability for smoother journeys.",
    risk: "Balanced",
    focus: "Stability + Growth",
    image: "/images/hybrid.jpg",
  },
  {
    title: "Debt Mutual Funds",
    summary: "Prioritize income quality and lower volatility for steady returns.",
    risk: "Conservative",
    focus: "Capital Protection",
    image: "/images/debt.jpg",
  },
];

const strategyIcons = [TrendingUp, Wallet, ShieldCheck];

export default function FundTypes() {
  return (
    <section id="strategies" className="bg-[#1a1a2e] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#dcfce7] backdrop-blur-md">
            Portfolio Strategies
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white font-[family-name:var(--font-sora)] sm:text-4xl">
            Choose the right fund mix for each wealth objective
          </h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
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
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.07, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-3xl border border-white/20 shadow-2xl shadow-green-500/20"
              >
                <Image
                  src={strategy.image}
                  alt={strategy.title}
                  width={820}
                  height={920}
                  className="h-[24rem] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/45 to-transparent" />
                <div className="absolute left-0 right-0 top-0 p-4">
                  <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#dcfce7] backdrop-blur-md">
                    {strategy.risk}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 space-y-3 p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-[#dcfce7] backdrop-blur-md">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white font-[family-name:var(--font-sora)]">
                    {strategy.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/75">{strategy.summary}</p>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#dcfce7]">
                      Focus: {strategy.focus}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#dcfce7]">
                      View
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