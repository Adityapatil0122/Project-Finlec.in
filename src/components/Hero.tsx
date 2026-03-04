"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const marketSignals = [
  "Equity allocation engine: Active",
  "Debt risk filters: Stable",
  "Hybrid rebalancing: Weekly",
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-24 sm:px-6 sm:pt-28 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-52 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#16a34a]/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(22,163,74,0.22),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(20,83,45,0.35),transparent_45%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
          className="space-y-6"
        >
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#dcfce7] backdrop-blur-md"
          >
            <ShieldCheck size={16} />
            SEBI-aligned research desk
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl text-4xl font-semibold leading-tight text-white font-[family-name:var(--font-sora)] sm:text-5xl lg:text-6xl"
          >
            Build wealth with a premium
            <span className="bg-gradient-to-r from-[#16a34a] via-[#22c55e] to-[#dcfce7] bg-clip-text text-transparent">
              {" "}
              fintech investing cockpit
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Unified portfolio intelligence for equity, hybrid, and debt funds.
            Track live allocation shifts, automate SIP discipline, and execute with
            confidence from one high-trust workspace.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap gap-3"
          >
            <motion.div whileHover={{ y: -2 }}>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#16a34a] px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-green-500/25 transition-colors hover:bg-[#15803d]"
              >
                Launch Portfolio
                <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.a
              whileHover={{ y: -2 }}
              href="#features"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <Sparkles size={16} />
              Explore Platform
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid gap-3 sm:grid-cols-3"
          >
            {marketSignals.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-[#dcfce7] backdrop-blur-md"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur-md shadow-2xl shadow-green-500/25 sm:p-5"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-[#111827]">
            <Image
              src="/images/hero-bg.jpg"
              alt="Fintech trading dashboard"
              width={900}
              height={700}
              className="h-64 w-full object-cover opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#14532d]/40" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-sm uppercase tracking-[0.22em] text-[#dcfce7]/80">
                Live Strategy
              </p>
              <p className="mt-2 text-2xl font-semibold text-white font-[family-name:var(--font-sora)]">
                Adaptive Wealth Engine
              </p>
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
              <div className="flex items-center gap-2 text-sm text-[#dcfce7]">
                <TrendingUp size={16} />
                Yield Forecast
              </div>
              <p className="mt-2 text-3xl font-semibold text-white font-[family-name:var(--font-sora)]">
                12.4%
              </p>
              <p className="text-sm text-white/65">Projected annualized range</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
              <p className="text-sm text-[#dcfce7]">Risk Guardrails</p>
              <p className="mt-2 text-3xl font-semibold text-white font-[family-name:var(--font-sora)]">
                AAA
              </p>
              <p className="text-sm text-white/65">Stress-tested downside model</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="relative mx-auto mt-12 max-w-7xl overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md"
      >
        <div className="flex w-max min-w-full items-center gap-6 px-5 py-4">
          {[
            "Net worth simulator",
            "Automated SIP rebalance",
            "Institutional grade analytics",
            "Tax-smart harvest insights",
            "Multi-AMC execution stack",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-white/75">
              <span className="h-2 w-2 rounded-full bg-[#16a34a]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}