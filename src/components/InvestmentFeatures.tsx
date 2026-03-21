"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMobileMotion } from "@/lib/hooks/useMobileMotion";
import { mobileFadeUp, mobileStaggerFade } from "@/lib/motion";

export default function InvestmentFeatures() {
  const { shouldAnimate, motionKey } = useMobileMotion();
  const cardMotionProps = shouldAnimate
    ? {
        variants: mobileStaggerFade,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.3 },
      }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.5, ease: "easeOut" as const },
      };

  return (
    <section
      id="investment-features"
      key={motionKey}
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          {...cardMotionProps}
          className="grid items-center gap-8 finlec-card p-4 sm:p-8 lg:grid-cols-[1fr_0.95fr]"
        >
          <div>
            <motion.p
              variants={mobileFadeUp}
              className="inline-flex rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]"
            >
              Why Finlec
            </motion.p>
            <motion.h2
              variants={mobileFadeUp}
              className="mt-4 max-w-2xl text-2xl font-semibold leading-tight text-[#0f172a] font-[family-name:var(--font-sora)] sm:text-3xl md:text-4xl"
            >
              Invest with more clarity
            </motion.h2>
            <motion.p
              variants={mobileFadeUp}
              className="mt-4 max-w-2xl text-base leading-relaxed text-[#475569] sm:text-lg"
            >
              Finlec helps you explore funds, plan SIPs, and stay on track with
              your goals. You get simple tools, clear guidance, and one place to
              manage everything.
            </motion.p>
            <motion.div variants={mobileFadeUp} className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#04b488]/25 bg-[#04b488]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#069f7b]">
                Paperless investing
              </span>
              <span className="rounded-full border border-[#7B4FD4]/25 bg-[#7B4FD4]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#6d41ca]">
                Expert Guidance
              </span>
            </motion.div>
          </div>

          <motion.div variants={mobileFadeUp} className="relative">
            <Image
              src="/images/investment.jpg"
              alt="Simple investment growth visual"
              width={1200}
              height={900}
              className="h-64 w-full rounded-2xl border border-slate-200 object-cover sm:h-[300px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

