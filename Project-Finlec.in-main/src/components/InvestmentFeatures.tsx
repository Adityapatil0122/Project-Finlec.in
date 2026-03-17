"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Layers,
  CalendarClock,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";

type InvestmentFeature = {
  title: string;
  description: string;
  stat: string;
  icon: LucideIcon;
};

const investmentFeatures: InvestmentFeature[] = [
  {
    title: "Simple & Convenient",
    description:
      "Our mutual fund investment services are designed to be simple and convenient, making it easy for you to grow your wealth without the hassle of complex financial management.",
    stat: "Hassle-free investing",
    icon: Sparkles,
  },
  {
    title: "All Mutual Funds",
    description:
      "Access a diverse range of mutual funds across various categories and sectors, allowing you to create a well-balanced and tailored investment portfolio.",
    stat: "45+ AMCs available",
    icon: Layers,
  },
  {
    title: "Daily, Weekly, Monthly SIP",
    description:
      "Enjoy the Systematic Investment Plan (SIP) with options for daily, weekly, monthly contributions, helping you invest consistently and build your wealth over time.",
    stat: "Flexible SIP frequency",
    icon: CalendarClock,
  },
  {
    title: "Easy Access",
    description:
      "Manage your investments effortlessly through our user-friendly platform, providing you with easy access to track, review, and adjust your mutual fund investments anytime, anywhere.",
    stat: "Invest on the go",
    icon: MonitorSmartphone,
  },
];

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

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {investmentFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.42, delay: index * 0.06, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="group finlec-card p-5 transition-all hover:-translate-y-1 hover:border-[#04b488]/35"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#04b488]/10 text-[#04b488]">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[#0f172a] font-[family-name:var(--font-sora)]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                  {feature.description}
                </p>
                <p className="mt-4 inline-flex rounded-full bg-[#7B4FD4]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-[#7B4FD4]">
                  {feature.stat}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
