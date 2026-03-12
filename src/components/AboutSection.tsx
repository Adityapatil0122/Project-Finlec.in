"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";



export default function AboutSection() {
  return (
    <section id="approach" className="relative overflow-hidden bg-white px-4 py-20 dark:bg-transparent sm:px-6 lg:px-8">

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-[#0f172a] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl">
            Advisory intelligence built for long-term wealth outcomes
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-[#475569] dark:text-slate-300 sm:text-lg">
            Finlec blends human advisory discipline with modern execution. Every
            recommendation is benchmarked, risk-calibrated, and aligned with the
            outcomes that matter most to your family.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#475569] shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-slate-300">
              <CheckCircle2 size={16} className="text-[#04b488]" />
              SEBI Aligned Processing
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#475569] shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-slate-300">
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
          className="relative finlec-card p-5"
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
          </div>

        </motion.div>
      </div>
    </section>
  );
}
