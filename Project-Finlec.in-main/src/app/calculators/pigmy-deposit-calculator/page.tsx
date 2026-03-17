"use client";

import MarketingShell from "@/components/MarketingShell";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Coins, PiggyBank, ShieldCheck, TrendingUp, Blend } from "lucide-react";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};



export default function PigmyDepositCalculatorPage() {
  return (
    <MarketingShell>
      <section className="relative overflow-hidden bg-[#f8f9fa] px-4 pb-28 pt-10 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#f97316]/12 blur-3xl" />
        <div className="pointer-events-none absolute right-[-120px] top-24 h-64 w-64 rounded-full bg-[#04b488]/12 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-2 text-sm text-[#4a5568]">
            <Link href="/" className="transition-colors hover:text-[#f97316]">Home</Link>
            <ChevronRight size={14} />
            <Link href="/calculators" className="transition-colors hover:text-[#f97316]">Calculators</Link>
            <ChevronRight size={14} />
            <span className="font-semibold text-[#1a1560]">Pigmy Deposit Guide</span>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <motion.div variants={fadeItem}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f97316]">
                Pigmy Deposit Insights
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-5xl">
                Small daily savings, built for cash-first earners.
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[#4a5568]">
                Pigmy deposits help you save tiny amounts daily or weekly. Use them for discipline,
                then graduate to mutual funds for bigger goals.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/calculators/sip-calculator"
                  className="inline-flex items-center rounded-full bg-[#f97316] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_30px_-18px_rgba(249,115,22,0.7)] transition-transform hover:-translate-y-0.5"
                >
                  SIP Calculator
                </Link>
                <Link
                  href="/calculators/daily-sip-calculator"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-[#f97316]/40 hover:text-[#f97316]"
                >
                  Daily SIP Guide
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Calculator shortcuts:
                <Link
                  href="/calculators/xirr-calculator"
                  className="rounded-full border border-slate-200 px-3 py-1 text-[11px] text-slate-500 transition-colors hover:border-[#f97316]/40 hover:text-[#f97316]"
                >
                  XIRR
                </Link>
                <Link
                  href="/calculators/sip-calculator"
                  className="rounded-full border border-slate-200 px-3 py-1 text-[11px] text-slate-500 transition-colors hover:border-[#f97316]/40 hover:text-[#f97316]"
                >
                  SIP
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeItem} className="space-y-6">
              <div className="border-l-2 border-[#f97316] pl-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f97316]">Why it exists</p>
                <p className="mt-2 text-sm text-[#4a5568]">
                  Converts spare change into structured savings when auto-debit is not possible.
                </p>
              </div>
              <div className="border-l-2 border-[#ef4444] pl-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ef4444]">Next step</p>
                <p className="mt-2 text-sm text-[#4a5568]">
                  Move to SIPs for long-term growth and predictable returns.
                </p>
              </div>
              <div className="border-l-2 border-[#04b488] pl-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#04b488]">Track with</p>
                <p className="mt-2 text-sm text-[#4a5568]">
                  XIRR for mixed deposits and withdrawals over time.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <motion.div variants={fadeItem} className="flex items-start gap-5">
            <span className="text-5xl font-semibold text-slate-200">01</span>
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f97316]/10 text-[#f97316]">
                  <Coins size={18} />
                </span>
                <h2 className="text-3xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)]">
                  What is a Pigmy Deposit?
                </h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#4a5568]">
                A pigmy deposit is a micro-savings plan where tiny amounts are collected daily or weekly.
                It is often facilitated by local banks or agents for door-to-door collection.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeItem} className="space-y-4 text-sm text-[#4a5568]">
            <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
              <p className="min-w-32 text-xs font-semibold uppercase tracking-[0.2em] text-[#f97316]">Best for</p>
              <p>Cash-based savers who need frequent collection and low entry amounts.</p>
            </div>
            <div className="flex items-start gap-4 border-b border-slate-200 pb-4">
              <p className="min-w-32 text-xs font-semibold uppercase tracking-[0.2em] text-[#f97316]">Key value</p>
              <p>Discipline and convenience, especially when auto-debit is not available.</p>
            </div>
            <div className="flex items-start gap-4">
              <p className="min-w-32 text-xs font-semibold uppercase tracking-[0.2em] text-[#f97316]">Watch for</p>
              <p>Collection charges and lower effective returns after fees.</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="mx-auto mt-12 max-w-6xl"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f97316]">
                How it works
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-4xl">
                The pigmy deposit flow in three steps
              </h2>
            </div>
            <p className="max-w-xl text-sm text-[#4a5568]">
              Minimal paperwork, frequent collection, and a steady savings habit.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Enroll & set amount",
                detail: "Choose a daily or weekly amount based on your cash flow.",
              },
              {
                title: "Agent collects",
                detail: "A collector gathers savings at your doorstep and updates the passbook.",
              },
              {
                title: "Maturity or roll",
                detail: "Withdraw at maturity or redirect to RD/SIP for higher growth.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-slate-200 pt-4">
                <p className="text-sm font-semibold text-[#1a1560]">{item.title}</p>
                <p className="mt-2 text-sm text-[#4a5568]">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>



      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f97316]">
                Before you start
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-4xl">
                Pigmy deposit checklist
              </h2>
            </div>
            <p className="max-w-xl text-sm text-[#4a5568]">
              Confirm these basics so you know the real cost and convenience of the plan.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="border-t border-slate-200 pt-4">
              <p className="text-sm font-semibold text-[#1a1560]">Collection fee</p>
              <p className="mt-2 text-sm text-[#4a5568]">
                Ask if the agent charges per visit or per month, and how it affects returns.
              </p>
            </div>
            <div className="border-t border-slate-200 pt-4">
              <p className="text-sm font-semibold text-[#1a1560]">Deposit frequency</p>
              <p className="mt-2 text-sm text-[#4a5568]">
                Daily collections add convenience but can reduce net yield vs monthly deposits.
              </p>
            </div>
            <div className="border-t border-slate-200 pt-4">
              <p className="text-sm font-semibold text-[#1a1560]">Maturity options</p>
              <p className="mt-2 text-sm text-[#4a5568]">
                Check if you can roll into a SIP or withdraw without penalty at maturity.
              </p>
            </div>
          </div>

          <div className="mt-10 border-y border-slate-200 py-6 text-sm text-[#4a5568]">
            <div className="grid gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 md:grid-cols-[1.2fr_1fr_1fr]">
              <span>Use case</span>
              <span>Pigmy</span>
              <span>SIP</span>
            </div>
            <div className="mt-3 grid gap-3 md:grid-cols-[1.2fr_1fr_1fr]">
              <span className="text-sm font-semibold text-[#1a1560]">Daily cash saving</span>
              <span>Best fit</span>
              <span>Requires bank debit</span>
            </div>
            <div className="mt-3 grid gap-3 md:grid-cols-[1.2fr_1fr_1fr]">
              <span className="text-sm font-semibold text-[#1a1560]">Stable returns</span>
              <span>Lower</span>
              <span>Market linked</span>
            </div>
            <div className="mt-3 grid gap-3 md:grid-cols-[1.2fr_1fr_1fr]">
              <span className="text-sm font-semibold text-[#1a1560]">Long-term growth</span>
              <span>Limited</span>
              <span>Highest potential</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#04b488]">
                Next Fund Step
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-4xl">
                Move surplus into mutual funds
              </h2>
            </div>
            <p className="max-w-xl text-sm text-[#4a5568]">
              Once your pigmy habit is stable, shift surplus into equity, hybrid, or debt funds for better
              growth aligned with your horizon.
            </p>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-3">
            <div className="border-t-2 border-[#04b488] pt-6">
              <div className="flex items-center gap-3">
                <TrendingUp size={18} className="text-[#04b488]" />
                <h3 className="text-2xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)]">
                  Equity Funds
                </h3>
              </div>
              <p className="mt-3 text-sm text-[#4a5568]">
                High growth potential, best for long-term goals.
              </p>
              <Link
                href="/explore-mutual-funds?asset=equity#category-breakdown"
                className="mt-4 inline-flex items-center text-sm font-semibold text-[#04b488] transition-colors hover:text-[#03846b]"
              >
                Explore Equity
                <ChevronRight size={16} />
              </Link>
            </div>

            <div className="border-t-2 border-[#7B4FD4] pt-6">
              <div className="flex items-center gap-3">
                <Blend size={18} className="text-[#7B4FD4]" />
                <h3 className="text-2xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)]">
                  Hybrid Funds
                </h3>
              </div>
              <p className="mt-3 text-sm text-[#4a5568]">
                Balanced mix for medium-term goals.
              </p>
              <Link
                href="/explore-mutual-funds?asset=hybrid#category-breakdown"
                className="mt-4 inline-flex items-center text-sm font-semibold text-[#7B4FD4] transition-colors hover:text-[#5e36b3]"
              >
                Explore Hybrid
                <ChevronRight size={16} />
              </Link>
            </div>

            <div className="border-t-2 border-[#0f172a] pt-6">
              <div className="flex items-center gap-3">
                <ShieldCheck size={18} className="text-[#0f172a]" />
                <h3 className="text-2xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)]">
                  Debt Funds
                </h3>
              </div>
              <p className="mt-3 text-sm text-[#4a5568]">
                Stable returns with lower volatility.
              </p>
              <Link
                href="/explore-mutual-funds?asset=debt#category-breakdown"
                className="mt-4 inline-flex items-center text-sm font-semibold text-[#0f172a] transition-colors hover:text-[#04b488]"
              >
                Explore Debt
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start gap-4 text-left md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#04b488]">
                Performance Snapshot
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-4xl">
                Transparent metrics, updated continuously
              </h2>
            </div>
            <p className="max-w-lg text-sm text-[#4a5568]">
              A quick health check on Finlec adoption and client outcomes.
            </p>
          </div>

          <div className="mt-10 grid gap-6 border-y border-slate-200 py-10 md:grid-cols-4">
            <div className="space-y-2">
              <p className="text-4xl font-semibold text-[#1a1560]">500Cr+</p>
              <p className="text-sm font-semibold text-[#04b488]">Assets Guided</p>
              <p className="text-xs text-[#4a5568]">Client capital under advisory</p>
            </div>
            <div className="space-y-2 md:border-l md:border-slate-200 md:pl-6">
              <p className="text-4xl font-semibold text-[#1a1560]">1200+</p>
              <p className="text-sm font-semibold text-[#04b488]">Active SIP Mandates</p>
              <p className="text-xs text-[#4a5568]">Disciplined monthly contributions</p>
            </div>
            <div className="space-y-2 md:border-l md:border-slate-200 md:pl-6">
              <p className="text-4xl font-semibold text-[#1a1560]">40+</p>
              <p className="text-sm font-semibold text-[#04b488]">Partner AMCs</p>
              <p className="text-xs text-[#4a5568]">Top fund houses integrated</p>
            </div>
            <div className="space-y-2 md:border-l md:border-slate-200 md:pl-6">
              <p className="text-4xl font-semibold text-[#1a1560]">93%</p>
              <p className="text-sm font-semibold text-[#04b488]">Goal Success Rate</p>
              <p className="text-xs text-[#4a5568]">Clients on target trajectory</p>
            </div>
          </div>
        </motion.div>
      </section>
    </MarketingShell>
  );
}


