"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InvestmentFeatures() {
  return (
    <section
      id="investment-features"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid items-center gap-10 finlec-card p-6 sm:p-8 lg:grid-cols-[1fr_0.95fr]"
        >
          <div>
            <p className="inline-flex rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]">
              Why Choose Finlec
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[#0f172a] font-[family-name:var(--font-sora)] sm:text-4xl">
              Smart Investments for a Secure Future
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#475569] sm:text-lg">
              Finlec is your trusted partner in mutual fund investments. We offer
              expert advice, market insights, and a diverse selection of
              top-performing mutual funds to help you achieve your financial goals.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#04b488]/25 bg-[#04b488]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#069f7b]">
                Paperless investing
              </span>
              <span className="rounded-full border border-[#7B4FD4]/25 bg-[#7B4FD4]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#6d41ca]">
                Free Expert Advice
              </span>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/investment.jpg"
              alt="Simple investment growth visual"
              width={1200}
              height={900}
              className="h-64 w-full rounded-2xl border border-slate-200 object-cover sm:h-[300px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
