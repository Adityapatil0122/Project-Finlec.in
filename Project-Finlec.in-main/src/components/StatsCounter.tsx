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
    label: "AMCs",
    value: 45,
    suffix: "+",
    detail: "Top fund houses integrated",
  },
  {
    label: "AUM",
    value: 2,
    suffix: "Cr+",
    detail: "Assets under management",
  },
  {
    label: "SIP Count / Month",
    value: 2000,
    suffix: "+",
    detail: "Active monthly SIP contributions",
  },
  {
    label: "Years of Experience",
    value: 8,
    suffix: "+",
    detail: "Trusted expertise in mutual funds",
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
      duration: 1.05,
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
    <section ref={sectionRef} id="stats" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-gradient-to-r from-white to-[#f8fafc] p-7 sm:p-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#04b488]">
            Performance Snapshot
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#0f172a] font-[family-name:var(--font-sora)] sm:text-4xl">
            Transparent metrics, updated continuously
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
              className="finlec-card p-5"
            >
              <p className="text-4xl font-semibold text-[#0f172a] font-[family-name:var(--font-sora)]">
                <AnimatedValue value={stat.value} suffix={stat.suffix} start={isInView} />
              </p>
              <p className="mt-2 text-sm font-semibold text-[#04b488]">{stat.label}</p>
              <p className="mt-2 text-sm text-[#475569]">{stat.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

