"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const principles = [
  "Institutional-grade screening of every AMC and scheme.",
  "Personalized risk calibration before each allocation.",
  "Transparent guidance with zero hidden execution fees.",
];

const workflow = [
  { title: "Discover", detail: "Map your goals, liquidity needs, and risk range." },
  { title: "Design", detail: "Blend equity, hybrid, and debt with target outcomes." },
  { title: "Deploy", detail: "Automate SIPs and monitor alpha-drift in real time." },
];

export default function AboutSection() {
  return (
    <section id="approach" className="bg-[#111827] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1.02fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#dcfce7] backdrop-blur-md">
            Capital Discipline
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-white font-[family-name:var(--font-sora)] sm:text-4xl">
            Advisory intelligence built for long-horizon wealth compounding
          </h2>
          <p className="text-base leading-relaxed text-white/70 sm:text-lg">
            Finlec merges advisory rigor with elegant execution. Every portfolio
            recommendation is grounded in data, stress-tested for volatility, and
            tuned to the milestones that matter in your life.
          </p>

          <div className="space-y-3">
            {principles.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                className="flex items-start gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/85 backdrop-blur-md"
              >
                <CheckCircle2 size={18} className="mt-0.5 text-[#16a34a]" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            whileHover={{ y: -2 }}
            href="#strategies"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#16a34a] px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-green-500/25"
          >
            See Fund Strategies
            <ArrowUpRight size={16} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-md shadow-2xl shadow-green-500/25"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/20">
            <Image
              src="/images/advisor.jpg"
              alt="Investment advisor analyzing data"
              width={900}
              height={620}
              className="h-64 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#111827]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-[#dcfce7]/80">
                Human + Data
              </p>
              <p className="mt-1 text-xl font-semibold text-white font-[family-name:var(--font-sora)]">
                Lead Advisory Desk
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {workflow.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.9 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-xs font-bold text-[#dcfce7]">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{step.title}</p>
                  <p className="mt-1 text-sm text-white/70">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}