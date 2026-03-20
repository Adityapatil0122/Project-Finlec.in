"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart,
  BookOpen,
  Briefcase,
  Clock,
  FileText,
  HelpCircle,
  ShieldCheck,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import CompoundingWidget from "./calculators/CompoundingWidget";

const highlights = [
  {
    title: "Start small, stay consistent",
    description:
      "Mutual funds let beginners start with manageable amounts and build a steady investing habit.",
    icon: Zap,
    accent: "#04b488",
  },
  {
    title: "Diversification by design",
    description:
      "A single fund can hold many securities, helping spread risk across a portfolio.",
    icon: BarChart,
    accent: "#7B4FD4",
  },
  {
    title: "Professional management",
    description:
      "Fund managers research, monitor, and rebalance the portfolio so you do not have to.",
    icon: Briefcase,
    accent: "#1a1560",
  },
];

const fundTypes = [
  {
    title: "Equity Funds",
    description:
      "Aim for long-term growth by investing mainly in stocks. Higher volatility, higher potential.",
    tag: "Growth-focused",
    image: "/images/equity-3.jpg",
    accent: "#04b488",
    note: "long-term wealth goals and higher growth potential.",
  },
  {
    title: "Debt Funds",
    description:
      "Invest in bonds or money market instruments for steadier returns and lower volatility.",
    tag: "Stability-focused",
    image: "/images/mutualfunds2.jpeg",
    accent: "#f97316",
    note: "shorter horizons and lower volatility needs.",
  },
  {
    title: "Hybrid Funds",
    description:
      "Mix equity and debt to balance growth and stability in one portfolio.",
    tag: "Balanced",
    image: "/images/hybrid-funds.jpg",
    accent: "#7B4FD4",
    note: "balanced goals when you want both growth and stability.",
  },
];

const startSteps = [
  {
    title: "Set a clear goal",
    description:
      "Pick a purpose (education, home, retirement) and a target year.",
  },
  {
    title: "Decide your horizon",
    description:
      "Short-term goals need lower volatility; long-term goals can handle equity.",
  },
  {
    title: "Choose the right fund type",
    description:
      "Equity for growth, debt for stability, hybrid for balance, index for low cost.",
  },
  {
    title: "Check risk and costs",
    description:
      "Review risk level, expense ratio, and exit load before investing.",
  },
  {
    title: "Pick SIP or lump sum",
    description:
      "SIP builds discipline; lump sum works for a surplus with a long horizon.",
  },
  {
    title: "Review twice a year",
    description:
      "Track progress vs your goal and rebalance when needed.",
  },
];

const terms = [
  {
    title: "SIP (Systematic Investment Plan)",
    description: "Investing a fixed amount at regular intervals.",
    example: "Investing ₹2,000 every month on the 5th is a SIP.",
    why: "Builds discipline and averages your purchase cost over time.",
  },
  {
    title: "Lump Sum",
    description: "Investing a larger amount all at once.",
    example: "Putting ₹1,00,000 from a bonus into a fund is a lump sum.",
    why: "Best when you have surplus cash and a long holding horizon.",
  },
  {
    title: "AMC (Asset Management Company)",
    description: "The company that creates and manages mutual funds.",
    example: "HDFC Mutual Fund, SBI Mutual Fund — these are AMCs.",
    why: "You're trusting them with your money, so their track record matters.",
  },
  {
    title: "AUM (Assets Under Management)",
    description: "The total money an AMC or fund is currently managing.",
    example: "A fund with ₹10,000 crore AUM is managing that much from all investors combined.",
    why: "A growing AUM shows investor confidence in the fund.",
  },
  {
    title: "Returns",
    description: "The profit or loss you earn on your investment over time.",
    example: "Investing ₹10,000 that grows to ₹12,000 is a 20% return.",
    why: "The whole point of investing — knowing what you actually earned.",
  },
  {
    title: "Diversification",
    description: "Spreading money across different assets to reduce risk.",
    example: "Investing in equity, debt, and gold instead of just one.",
    why: "If one asset falls, others can cushion the loss.",
  },
];

const faqs = [
  {
    question: "Are mutual funds safe?",
    answer:
      "They carry market risk. Diversification helps, but returns are not guaranteed. Pick funds that match your horizon and risk comfort.",
  },
  {
    question: "SIP or lump sum: which is better?",
    answer:
      "SIP builds discipline and can smooth volatility over time. Lump sum can work when you have a large amount and a long horizon.",
  },
  {
    question: "How many funds should a beginner hold?",
    answer:
      "A few well-chosen funds are usually enough. Too many funds can create overlap and complexity.",
  },
  {
    question: "When should I review my funds?",
    answer:
      "Check quarterly or semi-annually. Focus on your goals, not daily NAV changes.",
  },
];

const investmentModes = {
  sip: {
    title: "SIP (Systematic Investment Plan)",
    summary:
      "Invest a fixed amount on a regular schedule. Good for building a habit and averaging purchase costs.",
    bestFor: ["Steady cash flow", "Long-term goals", "Volatile markets"],
    watchFor: ["Stay consistent during downturns", "Increase SIP as income grows"],
  },
  lumpsum: {
    title: "Lump Sum Investment",
    summary:
      "Invest a larger amount at once. Works well when you have surplus cash and a long horizon.",
    bestFor: ["Large one-time surplus", "Clear long-term goal", "Higher risk comfort"],
    watchFor: ["Market timing risk", "Consider phased investing if unsure"],
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function MutualFundsGuide() {
  const [mode, setMode] = useState<"sip" | "lumpsum">("sip");
  const activeMode = investmentModes[mode];

  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 finlec-soft-grid opacity-50" />
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#04b488]/18 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#7B4FD4]/18 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16">
        <motion.div {...fadeUp} className="text-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]">
              <ShieldCheck className="h-4 w-4" />
              Beginner Guide
            </span>
            <h1 className="mt-5 text-2xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-3xl md:text-4xl lg:text-5xl">
              Mutual Fund
              <span className="block">Beginner&apos;s Guide</span>
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-base sm:text-lg text-slate-600">
              Learn what mutual funds are, how they work, and how to start
              investing with confidence. Clear, practical, and beginner-first.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/calculators/sip-calculator"
                className="inline-flex items-center gap-2 rounded-full bg-[#04b488] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_35px_-20px_rgba(4,180,136,0.9)] transition-transform hover:-translate-y-0.5 min-h-[48px]"
              >
                Try the SIP calculator
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/explore-mutual-funds"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-[#7B4FD4]/40 hover:text-[#5e36b3] min-h-[48px]"
              >
                Explore mutual funds
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  variants={staggerItem}
                  key={item.title}
                  className={cn(
                    "relative overflow-hidden rounded-2xl sm:rounded-[24px] border border-slate-100 bg-white p-4 sm:p-7 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-15px_rgba(0,0,0,0.1)]",
                    idx === 2 && "sm:col-span-2"
                  )}
                >
                  <div
                    className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-15"
                    style={{ backgroundColor: item.accent }}
                  />
                  <div className="flex items-center gap-4">
                    <span
                      className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: item.accent }}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-lg font-bold text-[#1a1560]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#4a5568] max-w-2xl">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            variants={staggerItem}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden rounded-3xl border border-white/70 shadow-[0_18px_40px_-25px_rgba(15,23,42,0.35)]"
          >
            <Image
              src="/images/investingman.webp"
              alt="Investor planning illustration"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div {...fadeUp} className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-3xl">
                What is a mutual fund?
              </h2>
            </div>
            <p className="text-base sm:text-lg text-slate-600">
              A mutual fund pools money from many investors and invests it in a
              diversified basket of assets like stocks or bonds. You own units
              of the fund, and the unit price (NAV) changes with the portfolio.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Pool money",
                  description: "Investors combine money into one portfolio.",
                  icon: BookOpen,
                },
                {
                  title: "Managed",
                  description: "Professionals research and manage holdings.",
                  icon: Briefcase,
                },
                {
                  title: "Unit-based",
                  description: "You own units that track the fund value.",
                  icon: BarChart,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm text-slate-600 shadow-sm"
                  >
                    <Icon className="h-5 w-5 text-[#04b488]" />
                    <h3 className="mt-3 text-base font-semibold text-[#1a1560]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white/85 p-4 sm:p-6 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.4)]"
          >
            <div className="relative mb-5 h-56 overflow-hidden rounded-2xl">
              <Image
                src="/images/investment.jpg"
                alt="Simple investing illustration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,180,136,0.0),rgba(4,180,136,0.2))]" />
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#04b488]/15 text-[#04b488]">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1a1560]">
                  Finlec Investment Platform
                </p>
                <p className="text-xs text-slate-500">
                  Your trusted mutual fund partner
                </p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white/80 px-4 py-3">
                <span className="text-xs text-slate-600">AMCs Available</span>
                <span className="text-xs font-semibold text-[#047a5d]">45+</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white/80 px-4 py-3">
                <span className="text-xs text-slate-600">SIP Options</span>
                <span className="text-xs font-semibold text-[#5e36b3]">Daily, Weekly, Monthly</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white/80 px-4 py-3">
                <span className="text-xs text-slate-600">Expert Advice</span>
                <span className="text-xs font-semibold text-[#047a5d]">Free</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white/80 px-4 py-3">
                <span className="text-xs text-slate-600">Investing Process</span>
                <span className="text-xs font-semibold text-[#5e36b3]">100% Paperless</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeUp} className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-3xl">
              Common types beginners start with
            </h2>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            {fundTypes.map((fund, idx) => (
              <motion.div
                key={fund.title}
                variants={staggerItem}
                className={cn(
                  "flex flex-col gap-6 rounded-2xl sm:rounded-3xl border border-slate-200 bg-white/85 p-4 sm:p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 lg:flex-row lg:items-center",
                  idx % 2 === 1 && "lg:flex-row-reverse"
                )}
              >
                <div className="relative h-56 overflow-hidden rounded-2xl border border-white/70 shadow-sm lg:h-64 lg:w-5/12">
                  <Image
                    src={fund.image}
                    alt={`${fund.title} illustration`}
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.0), rgba(4,180,136,0.2))",
                    }}
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold text-[#1a1560]">
                      {fund.title}
                    </h3>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        backgroundColor: `${fund.accent}22`,
                        color: fund.accent,
                      }}
                    >
                      {fund.tag}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">
                    {fund.description}
                  </p>
                  <div className="rounded-2xl border border-slate-100 bg-white/70 px-4 py-3 text-xs text-slate-600">
                    Good for: {fund.note}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div {...fadeUp} className="space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="inline-flex rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]">
                Choose Your Path
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-3xl">
                SIP vs Lump Sum
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Select a style to see when it works best.
              </p>
            </div>
            <div className="flex gap-2 rounded-full border border-slate-200 bg-white p-1">
              {(["sip", "lumpsum"] as const).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setMode(key)}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors min-h-[44px]",
                    mode === key
                      ? "bg-[#04b488] text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  )}
                >
                  {key === "sip" ? "SIP" : "Lump Sum"}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]">
              {mode === "sip" ? "SIP route" : "Lump sum route"}
            </div>
            <h3 className="text-2xl font-semibold text-[#1a1560]">
              {activeMode.title}
            </h3>
            <p className="text-sm text-slate-600">
              {activeMode.summary}
            </p>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#04b488]">
                Best for
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {activeMode.bestFor.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#04b488]/20 bg-white px-4 py-2 text-xs font-semibold text-[#1a1560] shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

        <motion.div {...fadeUp}>
          <CompoundingWidget />
        </motion.div>

        <motion.div {...fadeUp} className="space-y-8">
          <div className="text-center">
            <p className="inline-flex rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]">
              How To Choose
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-3xl">
              How to Start Investing
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Six clear steps
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-4 bottom-4 w-px bg-gradient-to-b from-[#04b488]/70 via-[#7B4FD4]/50 to-transparent animate-pulse-soft" />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              {startSteps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  variants={staggerItem}
                  className="relative pl-16 sm:pl-24"
                >
                  <div className="absolute left-0 top-4 flex items-center gap-1">
                    <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-[#04b488]/12 text-sm font-semibold text-[#047a5d]">
                      {idx + 1}
                    </span>
                    <span className="h-px w-4 bg-gradient-to-r from-[#04b488] to-transparent" />
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-[#04b488]" />
                  </div>
                  <div
                    className={cn(
                      "rounded-2xl sm:rounded-3xl border border-slate-200 bg-white/85 p-4 sm:p-6 shadow-sm",
                      idx % 2 === 1 && "bg-[#7B4FD4]/5"
                    )}
                  >
                    <h3 className="text-lg font-semibold text-[#1a1560]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="space-y-8">
          <div className="text-center">
            <p className="inline-flex rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]">
              Glossary
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-3xl">
              Six terms every beginner must understand before investing
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="grid gap-4">
              <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white/85 p-4 sm:p-5 shadow-sm">
                <div className="relative h-40 overflow-hidden rounded-2xl bg-white p-3">
                  <Image
                    src="/images/download.webp"
                    alt="Glossary card illustration"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-sm font-semibold text-[#1a1560]">
                    Quick, clear explanations
                  </p>
                  <p className="text-xs text-slate-600">
                    Straightforward meaning in everyday language.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white/85 p-4 sm:p-5 shadow-sm">
                <div className="relative h-40 overflow-hidden rounded-2xl bg-white p-3">
                  <Image
                    src="/images/relaxedthinking.webp"
                    alt="Glossary helper illustration"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-sm font-semibold text-[#1a1560]">
                    Quick glossary helper
                  </p>
                  <p className="text-xs text-slate-600">
                    Use this as a fast refresher before investing.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white/85 p-4 sm:p-5 shadow-sm">
                <div className="relative h-40 overflow-hidden rounded-2xl bg-white p-3">
                  <Image
                    src="/images/download (1).webp"
                    alt="Glossary examples illustration"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-sm font-semibold text-[#1a1560]">
                    Examples + why it matters
                  </p>
                  <p className="text-xs text-slate-600">
                    See how each term impacts real decisions.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative space-y-6 pl-6">
              <div className="absolute left-2 top-0 h-full w-px bg-slate-200" />
              {terms.map((term, index) => (
                <div key={term.title} className="relative">
                  <span className="absolute -left-6 top-2 h-3 w-3 rounded-full bg-[#04b488]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#7B4FD4]">
                    Term {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-[#1a1560]">
                    {term.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {term.description}
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    Example: {term.example}
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    Why it matters: {term.why}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="space-y-8">
          <div className="text-center">
            <p className="inline-flex rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]">
              Risks And Costs
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-3xl">
              Understand the trade-offs
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Market risk",
                description:
                  "Fund values move with the market. Short-term dips are normal.",
                icon: TrendingUp,
              },
              {
                title: "Costs matter",
                description:
                  "Expense ratios and exit loads reduce returns. Compare before buying.",
                icon: FileText,
              },
              {
                title: "Goal mismatch",
                description:
                  "Equity funds need time. Use them for long-term goals.",
                icon: Target,
              },
              {
                title: "Patience required",
                description:
                  "Chasing recent performance can hurt. Stick to your plan.",
                icon: Clock,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white/85 p-4 sm:p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#7B4FD4]/12 text-[#5e36b3]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-[#1a1560]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="rounded-2xl border border-[#04b488]/20 bg-[#04b488]/5 px-6 py-4 text-xs text-[#047a5d]">
            Mutual fund investments are subject to market risk. Read scheme
            documents carefully before investing.
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="space-y-8">
          <div className="text-center">
            <p className="inline-flex rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]">
              FAQs
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-3xl">
              Beginner questions, answered
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white/85 p-5 transition-all duration-300 open:border-[#7B4FD4]/40"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between text-sm font-semibold text-[#1a1560]">
                  <span className="flex items-center gap-2">
                    <HelpCircle className="mt-0.5 h-4 w-4 text-[#7B4FD4]" />
                    {faq.question}
                  </span>
                  <span className="ml-4 text-[#7B4FD4] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="flex flex-col items-center justify-between gap-6 rounded-2xl sm:rounded-3xl border border-slate-200 bg-white/85 p-4 sm:p-6 md:p-8 text-center shadow-sm lg:flex-row lg:text-left"
        >
          <div className="space-y-2">
            <p className="inline-flex rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]">
              Next Steps
            </p>
            <h3 className="text-2xl font-semibold text-[#1a1560]">
              Ready to plan your first investment?
            </h3>
            <p className="text-sm text-slate-600">
              Use our calculators to estimate SIP and lump sum outcomes.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/calculators/sip-calculator"
              className="inline-flex items-center gap-2 rounded-full bg-[#7B4FD4] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_35px_-20px_rgba(123,79,212,0.8)] transition-transform hover:-translate-y-0.5 min-h-[48px]"
            >
              Start SIP planning
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/calculators/lumpsum-calculator"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 hover:border-[#04b488]/40 hover:text-[#047a5d] min-h-[48px]"
            >
              Lumpsum calculator
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

