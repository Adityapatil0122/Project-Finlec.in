"use client";

import { motion } from "framer-motion";
import {
  Baby,
  Building2,
  Flag,
  ReceiptText,
  type LucideIcon,
} from "lucide-react";

type Goal = {
  title: string;
  note: string;
  target: string;
  icon: LucideIcon;
};

const goals: Goal[] = [
  {
    title: "Child Education",
    note: "Build milestone-based SIPs for school and higher education.",
    target: "14y Horizon",
    icon: Baby,
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
    <section id="goals" className="bg-[#111827] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="space-y-5"
        >
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#dcfce7] backdrop-blur-md">
            Goal Architecture
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-white font-[family-name:var(--font-sora)] sm:text-4xl">
            Turn life goals into measurable investment pathways
          </h2>
          <p className="text-base leading-relaxed text-white/70 sm:text-lg">
            Each goal gets its own strategy stack, timeline, and monitoring layer.
            You stay focused on outcomes while the platform maintains discipline.
          </p>
          <motion.a
            whileHover={{ y: -2 }}
            href="/signup"
            className="inline-flex rounded-2xl bg-[#16a34a] px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-green-500/25"
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-md shadow-2xl shadow-green-500/15"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-[#dcfce7]">
                    <Icon size={19} />
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#dcfce7]">
                    {goal.target}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white font-[family-name:var(--font-sora)]">
                  {goal.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{goal.note}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}