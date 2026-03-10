"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section-2";

const fadeInUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const trustPoints = [
  "SEBI-aligned recommendations",
  "40+ AMCs onboarded",
  "Goal-based SIP workflows",
];

const stats = [
  { value: "40+", label: "Partner AMCs", icon: Shield },
  { value: "500Cr+", label: "Assets Guided", icon: BarChart3 },
  { value: "1000+", label: "Active SIPs", icon: TrendingUp },
  { value: "93%", label: "Goal Success", icon: Target },
];

const highlights = [
  {
    icon: Zap,
    title: "Instant SIP Setup",
    description: "Start investing in under 3 minutes with smart defaults.",
  },
  {
    icon: Target,
    title: "Goal-First Planning",
    description: "Every investment mapped to a life goal with live tracking.",
  },
  {
    icon: Shield,
    title: "Risk Calibrated",
    description: "Personalized portfolios tuned to your comfort and timeline.",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-0 pb-28 pt-20 sm:pt-20 lg:pt-20"
    >
      {/* ──── NEW HERO SECTION (21st.dev template) ──── */}
      <HeroSection
        className="min-h-[85vh]"
        title={
          <>
            India&apos;s Leading All-in-One{" "}
            <br />
            <span className="bg-[linear-gradient(135deg,#00C896,#7B4FD4)] bg-clip-text text-transparent">
              Mutual Funds
            </span>{" "}
            Platform
          </>
        }
        subtitle="Streamline your SIP investments, discover top-performing funds, and build long-term wealth — all from one beautifully simple platform."
        callToAction={{
          text: "START INVESTING FREE →",
          href: "/signup",
        }}
        backgroundImage="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&auto=format&fit=crop&q=80"
        contactInfo={{
          website: "finlec.in",
          phone: "+91 98765 43210",
          address: "Mumbai, Maharashtra, India",
        }}
      />

      {/* ──── STATS + HIGHLIGHTS (existing sections, below the hero) ──── */}
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Trust points */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          className="relative mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {trustPoints.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/78 px-4 py-2 text-sm text-[#4a5568] backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            >
              <CheckCircle2 size={14} className="text-[#00C896]" />
              {item}
            </span>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5, ease: "easeOut" }}
          className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.55 + index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4 }}
                className="group rounded-[24px] border border-slate-200/80 bg-white/82 p-5 text-center shadow-[0_16px_40px_-32px_rgba(15,23,42,0.4)] backdrop-blur-xl transition-colors hover:border-[#00C896]/30 dark:border-white/10 dark:bg-slate-950/65 dark:shadow-[0_16px_40px_-28px_rgba(0,0,0,0.7)]"
              >
                <div className="mx-auto mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(0,200,150,0.12),rgba(123,79,212,0.1))] text-[#00C896] transition-colors group-hover:bg-[#00C896]/16">
                  <Icon size={20} />
                </div>
                <p className="text-3xl font-bold text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[#4a5568] dark:text-slate-300">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Highlights row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.85, ease: "easeOut" }}
          className="relative mt-6 grid gap-4 lg:grid-cols-3"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.42,
                  delay: 0.9 + index * 0.1,
                  ease: "easeOut",
                }}
                className="flex items-start gap-4 rounded-[24px] border border-slate-200/80 bg-white/82 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/65"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#7B4FD4]/10 text-[#7B4FD4]">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#1a1560] dark:text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#4a5568] dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
