"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const marketSignals = [
  "Live equity allocation insights",
  "Debt stability risk checks",
  "Goal-wise SIP automation",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-[#00C896] to-[#7B4FD4] px-4 pb-20 pt-24 sm:px-6 sm:pt-28 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
          className="rounded-3xl bg-white p-7 shadow-lg sm:p-9"
        >
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full bg-[#00C896]/10 px-4 py-2 text-sm font-semibold text-[#00C896]"
          >
            <Sparkles size={16} />
            Smart mutual fund intelligence
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-5 text-4xl font-semibold leading-tight text-[#1a1a3e] font-[family-name:var(--font-sora)] sm:text-5xl"
          >
            Invest with clarity, confidence, and compounding discipline
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-[#4a5568] sm:text-lg"
          >
            One platform for equity, hybrid, and debt funds. Build outcome-driven
            portfolios with transparent analytics and advisor-backed strategy.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <motion.div whileHover={{ y: -2 }}>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#00C896] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(0,200,150,0.35)] transition-colors hover:bg-[#00b286]"
              >
                Start Investing
                <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.a
              whileHover={{ y: -2 }}
              href="#features"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#7B4FD4] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6940bd]"
            >
              Explore Features
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-7 grid gap-3 sm:grid-cols-3"
          >
            {marketSignals.map((item) => (
              <div key={item} className="rounded-2xl bg-[#f8f9fa] px-4 py-3 text-sm text-[#4a5568]">
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="rounded-3xl bg-white p-4 shadow-lg sm:p-5"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/hero-bg.jpg"
              alt="Fintech analytics dashboard"
              width={900}
              height={700}
              className="h-64 w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a3e]/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00C896]">
                Live Dashboard
              </p>
              <p className="mt-2 text-2xl font-semibold text-white font-[family-name:var(--font-sora)]">
                Finlec Portfolio Cockpit
              </p>
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#f8f9fa] p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#00C896]">
                <TrendingUp size={16} />
                Forecasted Return
              </div>
              <p className="mt-2 text-3xl font-semibold text-[#1a1a3e] font-[family-name:var(--font-sora)]">
                12.4%
              </p>
              <p className="text-sm text-[#4a5568]">Annualized projection range</p>
            </div>
            <div className="rounded-2xl bg-[#f8f9fa] p-4">
              <p className="text-sm font-semibold text-[#00C896]">Risk Profile</p>
              <p className="mt-2 text-3xl font-semibold text-[#1a1a3e] font-[family-name:var(--font-sora)]">
                Balanced
              </p>
              <p className="text-sm text-[#4a5568]">Adaptive downside protection</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}