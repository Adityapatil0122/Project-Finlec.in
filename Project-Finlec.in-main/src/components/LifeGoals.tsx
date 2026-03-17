"use client";

import { motion } from "framer-motion";
import { TrendingUp, Building2, Flag, ReceiptText, type LucideIcon } from "lucide-react";

type Goal = {
  title: string;
  note: string;
  target: string;
  icon: LucideIcon;
};

const goals: Goal[] = [
  {
    title: "Wealth Creation",
    note: "Build a flexible corpus for your long-term wealth targets.",
    target: "Wealth Builder",
    icon: TrendingUp,
  },
  {
    title: "Retirement Freedom",
    note: "Create inflation-aware cash flow with gradual risk tapering.",
    target: "25y Horizon",
    icon: Building2,
  },
  {
    title: "Tax Optimization",
    note: "Blend ELSS and debt strategy for tax-efficient wealth building.",
    target: "FY Strategy",
    icon: ReceiptText,
  },
  {
    title: "Legacy Corpus",
    note: "Design a long-term capital pool for generational planning.",
    target: "Outcome Plan",
    icon: Flag,
  },
];

export default function LifeGoals() {
  return (
    <section id="goals" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-5"
        >
          <p className="inline-flex rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]">
            Goal Architecture
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#0f172a] font-[family-name:var(--font-sora)] sm:text-4xl">
            Turn life goals into measurable investment pathways
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-[#475569] sm:text-lg">
            Each goal gets a strategy stack, timeline, and progress tracker. You
            stay focused on outcomes while the platform maintains discipline.
          </p>
          <motion.a
            whileHover={{ y: -2 }}
            href="/signup"
            className="inline-flex rounded-2xl bg-[#04b488] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#00b286]"
          >
            Build My Goal Plan
          </motion.a>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {goals.map((goal, index) => {
            const Icon = goal.icon;

            return (
              <motion.article
                key={goal.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.42, delay: index * 0.05, ease: "easeOut" }}
                whileHover={{ y: -3 }}
                className="finlec-card p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#04b488]/10 text-[#04b488]">
                    <Icon size={19} />
                  </span>
                  <span className="rounded-full bg-[#7B4FD4]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#7B4FD4]">
                    {goal.target}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#0f172a] font-[family-name:var(--font-sora)]">
                  {goal.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">{goal.note}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

