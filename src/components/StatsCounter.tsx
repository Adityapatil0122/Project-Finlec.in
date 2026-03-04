"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";

type Stat = {
  label: string;
  value: number;
  suffix: string;
  detail: string;
};

const stats: Stat[] = [
  {
    label: "Assets Guided",
    value: 500,
    suffix: "Cr+",
    detail: "Client capital under advisory lens",
  },
  {
    label: "Active SIP Mandates",
    value: 1200,
    suffix: "+",
    detail: "Disciplined automated monthly flows",
  },
  {
    label: "Partner AMCs",
    value: 40,
    suffix: "+",
    detail: "Top fund houses integrated on platform",
  },
  {
    label: "Goal Success Rate",
    value: 93,
    suffix: "%",
    detail: "Customers on track against financial milestones",
  },
];

type AnimatedValueProps = {
  value: number;
  suffix: string;
  start: boolean;
};

function AnimatedValue({ value, suffix, start }: AnimatedValueProps) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.floor(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplay(latest);
    });

    return unsubscribe;
  }, [rounded]);

  useEffect(() => {
    if (!start) {
      return;
    }

    const controls = animate(motionValue, value, {
      duration: 1.1,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [motionValue, start, value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="bg-gradient-to-r from-green-900 via-green-800 to-emerald-900 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md shadow-2xl shadow-green-500/25 sm:p-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#dcfce7]">
            Performance Snapshot
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white font-[family-name:var(--font-sora)] sm:text-4xl">
            Transparent metrics, updated continuously
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
              className="rounded-2xl border border-white/20 bg-[#0a0a0a]/25 p-5"
            >
              <p className="text-4xl font-semibold text-white font-[family-name:var(--font-sora)]">
                <AnimatedValue value={stat.value} suffix={stat.suffix} start={isInView} />
              </p>
              <p className="mt-2 text-sm font-semibold text-[#dcfce7]">{stat.label}</p>
              <p className="mt-2 text-sm text-white/70">{stat.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}