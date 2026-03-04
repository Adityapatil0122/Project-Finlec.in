"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Headset, PhoneCall, ShieldCheck } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-[#0a0a0a] px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto grid max-w-7xl gap-8 rounded-3xl border border-white/20 bg-gradient-to-r from-green-900 via-green-800 to-emerald-900 p-6 shadow-2xl shadow-green-500/25 lg:grid-cols-[1fr_0.85fr] lg:p-8"
      >
        <div className="space-y-5">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#dcfce7] backdrop-blur-md">
            <Headset size={16} />
            Premium Advisory Access
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white font-[family-name:var(--font-sora)] sm:text-4xl">
            Talk to a certified investment advisor and refine your strategy
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-[#dcfce7]/90 sm:text-lg">
            Get free guidance on SIP sizing, fund selection, and risk balance in one
            focused consultation.
          </p>

          <div className="flex flex-wrap gap-3">
            <motion.a
              whileHover={{ y: -2 }}
              href="tel:9420151046"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#14532d]"
            >
              <PhoneCall size={16} />
              Call 9420151046
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="/signup"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md"
            >
              Start Investing
            </motion.a>
          </div>

          <div className="rounded-2xl border border-white/20 bg-[#0a0a0a]/25 px-4 py-3 text-sm text-[#dcfce7]">
            Monday to Saturday, 9:00 AM to 7:00 PM | Response in under 30 minutes
          </div>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
          <div className="relative overflow-hidden rounded-2xl border border-white/20">
            <Image
              src="/images/investment.jpg"
              alt="Investment advisory session"
              width={800}
              height={560}
              className="h-60 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#dcfce7]">
                Senior Advisory Desk
              </p>
              <p className="mt-1 text-lg font-semibold text-white font-[family-name:var(--font-sora)]">
                Human-led strategy review
              </p>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/80">
            <p className="inline-flex items-center gap-2 font-semibold text-[#dcfce7]">
              <ShieldCheck size={16} />
              Compliance-first recommendations
            </p>
            <p className="mt-2">
              Advice mapped to your risk profile and timeline before any execution.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}