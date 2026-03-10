"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Headset, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[#f8f9fa] px-4 py-20 dark:bg-transparent sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-[-150px] top-16 h-72 w-72 rounded-full bg-[#00C896]/14 blur-3xl" />
      <div className="pointer-events-none absolute right-[-170px] bottom-10 h-72 w-72 rounded-full bg-[#7B4FD4]/15 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-3xl border border-slate-200 finlec-surface p-6 shadow-sm dark:border-white/10 lg:grid-cols-[1fr_0.9fr] lg:p-8"
      >
        <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-56 w-56 rounded-full bg-[#7B4FD4]/12 blur-3xl" />
        <div className="pointer-events-none absolute left-[-100px] bottom-[-120px] h-56 w-56 rounded-full bg-[#00C896]/10 blur-3xl" />

        <div className="space-y-5">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#00C896]/10 px-4 py-2 text-sm font-semibold text-[#00C896]">
            <Headset size={16} />
            Premium Advisory Access
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl">
            Talk to a certified investment advisor and refine your strategy
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-[#4a5568] dark:text-slate-300 sm:text-lg">
            Get free guidance on SIP sizing, fund selection, and risk balance in one
            focused consultation.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1 rounded-full border border-[#7B4FD4]/20 bg-[#7B4FD4]/10 px-3 py-1.5 text-xs font-semibold text-[#6b3ec7]">
              <Sparkles size={13} />
              Personalized model portfolio
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-[#4a5568] dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              Free first consultation
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <motion.a
              whileHover={{ y: -2 }}
              href="tel:9420151046"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#00C896] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#00b286]"
            >
              <PhoneCall size={16} />
              Call 9420151046
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="/signup"
              className="inline-flex items-center gap-2 rounded-2xl border border-[#7B4FD4]/25 bg-[#7B4FD4]/10 px-5 py-3 text-sm font-semibold text-[#5e36b3] transition-colors hover:bg-[#7B4FD4]/15 dark:border-[#7B4FD4]/30 dark:bg-[#7B4FD4]/14 dark:text-[#dfd2ff]"
            >
              Start Investing
              <ArrowRight size={16} />
            </motion.a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-[#f8f9fa] px-4 py-3 text-sm text-[#4a5568] dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            Monday to Saturday, 9:00 AM to 7:00 PM | Typical response in under 30
            minutes
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/70 p-4 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/ai/hero-investment.png"
              alt="AI generated investment advisory visualization"
              width={1200}
              height={900}
              className="h-60 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1560]/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#00C896]">
                Senior Advisory Desk
              </p>
              <p className="mt-1 text-lg font-semibold text-white font-[family-name:var(--font-sora)]">
                Human-led strategy review
              </p>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#4a5568] dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-300">
            <p className="inline-flex items-center gap-2 font-semibold text-[#00C896]">
              <ShieldCheck size={16} />
              Compliance-first recommendations
            </p>
            <p className="mt-2">
              Advice mapped to your risk profile and timeline before execution.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
