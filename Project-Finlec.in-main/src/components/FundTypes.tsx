"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, TrendingUp, Wallet } from "lucide-react";

type StrategyCard = {
  title: string;
  summary: string;
  risk: string;
  image: string;
  href: string;
};

const strategies: StrategyCard[] = [
  {
    title: "Equity Mutual Funds",
    summary: "Designed for long-term growth with diversified market exposure.",
    risk: "High Growth",
    image: "/images/equity-3.jpg",
    href: "/explore-mutual-funds?asset=equity#category-breakdown",
  },
  {
    title: "Hybrid Mutual Funds",
    summary: "Balance equity upside with debt stability for smoother journeys.",
    risk: "Balanced",
    image: "/images/hybrid-funds.jpg",
    href: "/explore-mutual-funds?asset=hybrid#category-breakdown",
  },
  {
    title: "Debt Mutual Funds",
    summary: "Prioritize income quality and lower volatility for steady returns.",
    risk: "Conservative",
    image: "/images/mutualfunds2.jpeg",
    href: "/explore-mutual-funds?asset=debt#category-breakdown",
  },
];

const strategyIcons = [TrendingUp, Wallet, ShieldCheck];

export default function FundTypes() {
  return (
    <section id="strategies" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="inline-flex rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]">
            Portfolio Strategies
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#0f172a] font-[family-name:var(--font-sora)] sm:text-4xl">
            Choose the right fund mix for each wealth objective
          </h2>
          <p className="mt-4 text-base text-[#475569] sm:text-lg">
            Explore curated strategy lanes with transparent risk profiles and
            outcome-oriented portfolio design.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {strategies.map((strategy, index) => {
            const Icon = strategyIcons[index];

            return (
              <Link key={strategy.title} href={strategy.href} className="block">
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className="group finlec-card overflow-hidden transition-all hover:-translate-y-1 hover:border-[#04b488]/35"
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
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#04b488]/10 text-[#04b488]">
                        <Icon size={18} />
                      </div>
                      <span className="rounded-full bg-[#7B4FD4]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#7B4FD4]">
                        {strategy.risk}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-[#0f172a] font-[family-name:var(--font-sora)]">
                      {strategy.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#475569]">{strategy.summary}</p>
                    <div className="flex items-center justify-end gap-4 pt-1">
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#7B4FD4]">
                        View Details
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

