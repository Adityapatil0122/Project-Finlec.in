"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Headset, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[#f8f9fa] px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-[-150px] top-16 h-72 w-72 rounded-full bg-[#04b488]/14 blur-3xl" />
      <div className="pointer-events-none absolute right-[-170px] bottom-10 h-72 w-72 rounded-full bg-[#7B4FD4]/15 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 finlec-surface p-4 sm:p-6 shadow-sm lg:grid-cols-[1fr_0.9fr] lg:p-8"
      >
        <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-56 w-56 rounded-full bg-[#7B4FD4]/12 blur-3xl" />
        <div className="pointer-events-none absolute left-[-100px] bottom-[-120px] h-56 w-56 rounded-full bg-[#04b488]/10 blur-3xl" />

        <div className="space-y-5">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]">
            <Headset size={16} />
            Premium Advisory Access
          </p>
          <h2 className="max-w-2xl text-2xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-3xl md:text-4xl">
            Talk to a certified investment advisor
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-[#4a5568] sm:text-lg">
            Get simple guidance on SIP amount, fund selection, and risk so you
            can invest with more confidence.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1 rounded-full border border-[#7B4FD4]/20 bg-[#7B4FD4]/10 px-3 py-1.5 text-xs font-semibold text-[#6b3ec7]">
              <Sparkles size={13} />
              Personalized fund plan
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-[#4a5568]">
              Free first consultation
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <motion.a
              whileHover={{ y: -2 }}
              href="tel:9420151046"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#04b488] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#00b286] min-h-[48px]"
            >
              <PhoneCall size={16} />
              Call 9420151046
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="/signup"
              className="inline-flex items-center gap-2 rounded-2xl border border-[#7B4FD4]/25 bg-[#7B4FD4]/10 px-5 py-3 text-sm font-semibold text-[#5e36b3] transition-colors hover:bg-[#7B4FD4]/15 min-h-[48px]"
            >
              Start Investing
              <ArrowRight size={16} />
            </motion.a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-[#f8f9fa] px-4 py-3 text-sm text-[#4a5568]">
            Monday to Saturday, 9:00 AM to 7:00 PM | Typical response in under 30
            minutes
          </div>
        </div>

        <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white/70 p-3 sm:p-4 backdrop-blur-sm">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/Talk to a certified investment advisor and refine your strategy.png"
              alt="Talk to a certified investment advisor and refine your strategy"
              width={1200}
              height={900}
              className="h-60 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1560]/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#04b488]">
                Senior Advisory Desk
              </p>
              <p className="mt-1 text-lg font-semibold text-white font-[family-name:var(--font-sora)]">
                Human-led strategy review
              </p>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#4a5568]">
            <p className="inline-flex items-center gap-2 font-semibold text-[#04b488]">
              <ShieldCheck size={16} />
              Advice that fits you
            </p>
            <p className="mt-2">
              Guidance based on your risk profile and timeline before you invest.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

