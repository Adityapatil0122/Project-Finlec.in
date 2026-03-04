"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Headset, PhoneCall, ShieldCheck } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-[#f8f9fa] px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto grid max-w-7xl gap-8 rounded-3xl bg-white p-6 shadow-sm lg:grid-cols-[1fr_0.85fr] lg:p-8"
      >
        <div className="space-y-5">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#00C896]/10 px-4 py-2 text-sm font-semibold text-[#00C896]">
            <Headset size={16} />
            Premium Advisory Access
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-[#1a1a3e] font-[family-name:var(--font-sora)] sm:text-4xl">
            Talk to a certified investment advisor and refine your strategy
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-[#4a5568] sm:text-lg">
            Get free guidance on SIP sizing, fund selection, and risk balance in one
            focused consultation.
          </p>

          <div className="flex flex-wrap gap-3">
            <motion.a
              whileHover={{ y: -2 }}
              href="tel:9420151046"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#00C896] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(0,200,150,0.35)] transition-colors hover:bg-[#00b286]"
            >
              <PhoneCall size={16} />
              Call 9420151046
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="/signup"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#7B4FD4] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6940bd]"
            >
              Start Investing
            </motion.a>
          </div>

          <div className="rounded-2xl bg-[#f8f9fa] px-4 py-3 text-sm text-[#4a5568]">
            Monday to Saturday, 9:00 AM to 7:00 PM | Response in under 30 minutes
          </div>
        </div>

        <div className="rounded-3xl bg-[#f8f9fa] p-4">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/investment.jpg"
              alt="Investment advisory session"
              width={800}
              height={560}
              className="h-60 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a3e]/85 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#00C896]">
                Senior Advisory Desk
              </p>
              <p className="mt-1 text-lg font-semibold text-white font-[family-name:var(--font-sora)]">
                Human-led strategy review
              </p>
            </div>
          </div>
          <div className="mt-4 rounded-2xl bg-white px-4 py-3 text-sm text-[#4a5568] shadow-sm">
            <p className="inline-flex items-center gap-2 font-semibold text-[#00C896]">
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