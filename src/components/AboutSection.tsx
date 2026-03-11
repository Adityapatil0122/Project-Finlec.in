"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";



export default function AboutSection() {
  return (
    <section id="approach" className="relative overflow-hidden bg-white px-4 py-20 dark:bg-transparent sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-[-160px] top-14 h-72 w-72 rounded-full bg-[#04b488]/12 blur-3xl" />
      <div className="pointer-events-none absolute bottom-8 right-[-180px] h-72 w-72 rounded-full bg-[#7B4FD4]/12 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]">
            <Sparkles size={15} />
            Why Finlec
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl">
            Advisory intelligence built for long-term wealth outcomes
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-[#4a5568] dark:text-slate-300 sm:text-lg">
            Finlec blends human advisory discipline with modern execution. Every
            recommendation is benchmarked, risk-calibrated, and aligned with the
            outcomes that matter most to your family.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#4a5568] shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-slate-300">
              <CheckCircle2 size={16} className="text-[#04b488]" />
              SEBI Aligned Processing
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#4a5568] shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-slate-300">
              <CheckCircle2 size={16} className="text-[#7B4FD4]" />
              Goal-First Allocations
            </span>
          </div>

          <motion.div whileHover={{ y: -2 }} className="pt-6">
            <Link
              href="/strategies"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#04b488] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#00b286]"
            >
              See Fund Strategies
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="relative rounded-3xl border border-slate-200 finlec-surface p-5 dark:border-white/10"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="animate-float-slow absolute -left-3 top-7 z-10 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm dark:border-white/10 dark:bg-slate-950/80"
          >
            <p className="text-xs font-semibold text-[#00a57d]">Portfolio Confidence</p>
            <p className="text-sm font-bold text-[#1a1560] dark:text-white">91 / 100</p>
          </motion.div>

          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/Advisory intelligence built for long-term wealth outcomes.png"
              alt="Advisory intelligence built for long-term wealth outcomes"
              width={980}
              height={700}
              className="h-64 w-full object-cover sm:h-[280px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1560]/75 via-[#1a1560]/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-[#04b488]">Human + Data</p>
              <p className="mt-1 text-xl font-semibold text-white font-[family-name:var(--font-sora)]">
                Lead Advisory Desk
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
