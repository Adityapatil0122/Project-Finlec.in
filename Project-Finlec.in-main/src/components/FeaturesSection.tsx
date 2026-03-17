"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  CalendarClock,
  Layers,
  MonitorSmartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Feature = {
  title: string;
  description: string;
  signal: string;
  metric: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  accent: string;
  progress: number;
  riskBand: string;
  journey: string[];
  sparkline: string;
  sparklineArea: string;
  sparkPointY: number;
};

const features: Feature[] = [
  {
    title: "Simple & Convenient",
    description: "Our mutual fund investment services are designed to be simple and convenient, making it easy for you to grow your wealth without the hassle of complex financial management.",
    signal: "Hassle-free investing",
    metric: "1-Click Setup",
    image: "/images/mutualfunds.png",
    imageAlt: "Simple & Convenient illustration",
    icon: Sparkles,
    accent: "#04b488",
    progress: 95,
    riskBand: "Low",
    journey: [
      "Zero-paperwork KYC in under 5 minutes",
      "One-click execution for SIPs and lumpsums",
      "Automated tracking of portfolio health",
    ],
    sparkline: "M10 76 L54 68 L98 62 L142 52 L186 38 L230 30 L280 22",
    sparklineArea:
      "M10 76 L54 68 L98 62 L142 52 L186 38 L230 30 L280 22 L280 90 L10 90 Z",
    sparkPointY: 22,
  },
  {
    title: "All Mutual Funds",
    description: "Access a diverse range of mutual funds across various categories and sectors, allowing you to create a well-balanced and tailored investment portfolio.",
    signal: "45+ AMCs available",
    metric: "Diverse Portfolio",
    image: "/images/investment.jpg",
    imageAlt: "All Mutual Funds illustration",
    icon: Layers,
    accent: "#0ea5e9",
    progress: 100,
    riskBand: "Diversified",
    journey: [
      "Compare top funds across all AMCs",
      "Filter by equity, debt, or hybrid strategies",
      "Build a well-balanced custom portfolio",
    ],
    sparkline: "M10 74 L54 66 L98 64 L142 55 L186 49 L230 34 L280 24",
    sparklineArea:
      "M10 74 L54 66 L98 64 L142 55 L186 49 L230 34 L280 24 L280 90 L10 90 Z",
    sparkPointY: 24,
  },
  {
    title: "Daily, Weekly, Monthly SIP",
    description: "Enjoy the Systematic Investment Plan (SIP) with options for daily, weekly, monthly contributions, helping you invest consistently and build your wealth over time.",
    signal: "Flexible SIP frequency",
    metric: "Custom frequency",
    image: "/images/investingman.webp",
    imageAlt: "Daily, Weekly, Monthly SIP illustration",
    icon: CalendarClock,
    accent: "#7b4fd4",
    progress: 88,
    riskBand: "Disciplined",
    journey: [
      "Set your preferred SIP frequency",
      "Automate bank mandates for regular deductions",
      "Harness the power of rupee-cost averaging",
    ],
    sparkline: "M10 78 L54 72 L98 62 L142 58 L186 46 L230 36 L280 28",
    sparklineArea:
      "M10 78 L54 72 L98 62 L142 58 L186 46 L230 36 L280 28 L280 90 L10 90 Z",
    sparkPointY: 28,
  },
  {
    title: "Easy Access",
    description: "Manage your investments effortlessly through our user-friendly platform, providing you with easy access to track, review, and adjust your mutual fund investments anytime, anywhere.",
    signal: "Invest on the go",
    metric: "24/7 Access",
    image: "/images/mutualfunds2.jpeg",
    imageAlt: "Easy Access illustration",
    icon: MonitorSmartphone,
    accent: "#f59e0b",
    progress: 99,
    riskBand: "Monitored",
    journey: [
      "Track daily NAV updates and portfolio returns",
      "Access your investments from mobile or desktop",
      "Review and adjust allocations on the fly",
    ],
    sparkline: "M10 79 L54 74 L98 68 L142 57 L186 52 L230 39 L280 30",
    sparklineArea:
      "M10 79 L54 74 L98 68 L142 57 L186 52 L230 39 L280 30 L280 90 L10 90 Z",
    sparkPointY: 30,
  },
];

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex];
  const ActiveIcon = activeFeature.icon;

  return (
    <section id="features" className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <p className="inline-flex rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]">
            Features
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold text-[#0f172a] font-[family-name:var(--font-sora)] sm:text-4xl">
            Everything you need for a seamless investing experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#475569] sm:text-lg">
            Explore what makes our platform the right choice to grow and manage your wealth effortlessly.
          </p>
        </motion.div>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col space-y-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeIndex === index;

              return (
                <button
                  key={feature.title}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "flex items-start gap-4 rounded-3xl border p-5 text-left transition-all duration-300",
                    isActive
                      ? "finlec-card border-[#04b488]/30 shadow-[0_18px_50px_-40px_rgba(4,180,136,0.4)]"
                      : "border-transparent bg-transparent hover:border-slate-200 hover:bg-white"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl transition-colors duration-300",
                      isActive ? "bg-[#04b488] text-white" : "bg-[#04b488]/10 text-[#04b488]"
                    )}
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3
                      className={cn(
                        "text-lg font-semibold font-[family-name:var(--font-sora)] transition-colors",
                        isActive ? "text-[#0f172a]" : "text-[#0f172a]/70"
                      )}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-1 overflow-hidden text-sm leading-relaxed transition-all duration-300",
                        isActive ? "max-h-20 text-[#4a5568] opacity-100" : "max-h-0 opacity-0"
                      )}
                    >
                      {feature.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[560px] w-full overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_20px_60px_-35px_rgba(15,23,42,0.38)]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]" />
            <div
              className="pointer-events-none absolute inset-0 opacity-35"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(148,163,184,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.14) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={`glow-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.85, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.45, ease: easeOut }}
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl"
                style={{ backgroundColor: `${activeFeature.accent}30` }}
              />
            </AnimatePresence>

            <div className="relative z-[2] p-6 sm:p-7">
              <div className="flex items-center gap-3 border-b border-slate-200/80 pb-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <p className="ml-2 rounded-full bg-white px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-slate-400">
                  FINLEC CONTROL / {activeFeature.title.toUpperCase().replace(/\s+/g, "-")}
                </p>
                <span
                  className="ml-auto rounded-full px-3 py-1 text-[11px] font-semibold"
                  style={{ backgroundColor: `${activeFeature.accent}18`, color: activeFeature.accent }}
                >
                  {activeFeature.signal}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.title}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.42, ease: easeOut }}
                  className="mt-6 space-y-4"
                >
                  <div className="grid gap-3 sm:grid-cols-[1.25fr_0.75fr]">
                    <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-2xl"
                          style={{ backgroundColor: `${activeFeature.accent}15`, color: activeFeature.accent }}
                        >
                          <ActiveIcon size={24} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-[#0f172a] font-[family-name:var(--font-sora)]">
                            {activeFeature.title}
                          </h4>
                          <p className="mt-1 text-sm text-slate-600">{activeFeature.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        Execution Status
                      </p>
                      <p className="mt-2 text-xl font-semibold text-[#0f172a]">{activeFeature.metric}</p>
                      <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: activeFeature.accent }}
                          initial={{ width: 0 }}
                          animate={{ width: `${activeFeature.progress}%` }}
                          transition={{ duration: 0.55, ease: easeOut }}
                        />
                      </div>
                      <p className="mt-2 text-xs text-slate-500">System confidence: {activeFeature.progress}%</p>
                    </div>
                  </div>

                  <div className="grid gap-3 lg:grid-cols-[0.92fr_1.08fr]">
                    <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        Journey Flow
                      </p>
                      <div className="mt-4 space-y-3">
                        {activeFeature.journey.map((step, stepIndex) => (
                          <div key={step} className="relative pl-6">
                            {stepIndex < activeFeature.journey.length - 1 ? (
                              <span className="absolute left-[8px] top-5 h-8 w-px bg-slate-200" />
                            ) : null}
                            <motion.span
                              className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 bg-white"
                              style={{ borderColor: activeFeature.accent }}
                              animate={{ scale: [1, 1.16, 1] }}
                              transition={{
                                duration: 1.3,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: stepIndex * 0.2,
                                ease: easeOut,
                              }}
                            />
                            <p className="text-sm text-slate-600">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                          Signal Momentum
                        </p>
                        <span className="text-sm font-semibold" style={{ color: activeFeature.accent }}>
                          +{Math.max(8, activeFeature.progress - 62)}%
                        </span>
                      </div>
                      <svg viewBox="0 0 290 96" className="mt-3 h-24 w-full">
                        <path d="M8 82 H282 M8 58 H282 M8 34 H282" stroke="#e2e8f0" strokeWidth="1" fill="none" />
                        <motion.path
                          d={activeFeature.sparklineArea}
                          fill={activeFeature.accent}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.14 }}
                          transition={{ duration: 0.45, ease: easeOut }}
                        />
                        <motion.path
                          d={activeFeature.sparkline}
                          fill="none"
                          stroke={activeFeature.accent}
                          strokeWidth="3"
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0.5 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 0.8, ease: easeOut }}
                        />
                        <motion.circle
                          cx="280"
                          cy={activeFeature.sparkPointY}
                          r="4"
                          fill={activeFeature.accent}
                          animate={{ r: [4, 5.6, 4], opacity: [0.85, 1, 0.85] }}
                          transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY, ease: easeOut }}
                        />
                      </svg>

                      <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                        <div className="rounded-xl bg-slate-50 px-2 py-1.5 text-slate-500">
                          30D: <span className="font-semibold text-slate-700">+1.8%</span>
                        </div>
                        <div className="rounded-xl bg-slate-50 px-2 py-1.5 text-slate-500">
                          Risk: <span className="font-semibold text-slate-700">{activeFeature.riskBand}</span>
                        </div>
                        <div className="rounded-xl bg-slate-50 px-2 py-1.5 text-slate-500">
                          Goal: <span className="font-semibold text-slate-700">{activeFeature.progress}%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-[1fr_0.9fr]">
                    <div className="relative h-36 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
                      <Image src={activeFeature.image} alt={activeFeature.imageAlt} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/38 to-transparent" />
                      <div className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700">
                        {activeFeature.signal}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        Next Action
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Ready to apply the latest recommendation for this capability and improve outcome stability.
                      </p>
                      <Link
                        href="https://finlec.my-portfolio.co.in/app/#/login"
                        className="mt-4 inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold text-white"
                        style={{ backgroundColor: activeFeature.accent }}
                      >
                        Review Plan
                        <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
