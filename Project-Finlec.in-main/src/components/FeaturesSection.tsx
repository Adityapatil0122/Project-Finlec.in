"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarClock,
  Layers,
  MonitorSmartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
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
            Platform Capabilities
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold text-[#0f172a] font-[family-name:var(--font-sora)] sm:text-4xl">
            Seamless features for your investing journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#475569] sm:text-lg">
            Explore what makes our platform the right choice to grow and manage your wealth effortlessly.
          </p>
        </motion.div>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
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

          <div className="relative min-h-[420px] flex flex-col w-full overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_20px_60px_-35px_rgba(15,23,42,0.38)]">
            <motion.div 
               className="absolute inset-0 bg-[linear-gradient(120deg,#ffffff_0%,#f0fdf4_50%,#f8fafc_100%)]"
               animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
               transition={{ duration: 12, ease: "linear", repeat: Infinity }}
               style={{ backgroundSize: "200% 200%" }}
            />
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
                  className="mt-8 mb-6 flex flex-1 flex-col items-center justify-center space-y-8"
                >
                  <div className="text-center px-4 w-full max-w-lg">
                     <motion.div 
                        initial={{ scale: 0.8, rotate: -5 }}
                        animate={{ scale: [0.8, 1.05, 1], rotate: 0 }}
                        transition={{ duration: 0.6, ease: easeOut }}
                        className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl" 
                        style={{ backgroundColor: `${activeFeature.accent}15`, color: activeFeature.accent }}
                     >
                       <ActiveIcon size={40} />
                     </motion.div>
                     <h3 className="text-3xl font-semibold text-[#0f172a] font-[family-name:var(--font-sora)]">
                       {activeFeature.title}
                     </h3>
                     <p className="mx-auto mt-4 text-lg leading-relaxed text-slate-600">
                       {activeFeature.description}
                     </p>
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
