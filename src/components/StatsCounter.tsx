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
    detail: "Client capital under advisory",
  },
  {
    label: "Active SIP Mandates",
    value: 1200,
    suffix: "+",
    detail: "Disciplined monthly contributions",
  },
  {
    label: "Partner AMCs",
    value: 40,
    suffix: "+",
    detail: "Top fund houses integrated",
  },
  {
    label: "Goal Success Rate",
    value: 93,
    suffix: "%",
    detail: "Clients on target trajectory",
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
    <section ref={sectionRef} id="stats" className="bg-white px-4 py-20 dark:bg-transparent sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-gradient-to-r from-[#f5fdfb] to-[#f8f7ff] p-7 dark:border-white/10 dark:from-[#09121f] dark:to-[#16122c] sm:p-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00C896]">
            Performance Snapshot
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl">
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
              className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-4xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white">
                <AnimatedValue value={stat.value} suffix={stat.suffix} start={isInView} />
              </p>
              <p className="mt-2 text-sm font-semibold text-[#00C896]">{stat.label}</p>
              <p className="mt-2 text-sm text-[#4a5568] dark:text-slate-300">{stat.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
