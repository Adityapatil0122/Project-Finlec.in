"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";

type Stat = {
  label: string;
  value: number;
  suffix: string;
  detail: string;
  accent: string;
};

const stats: Stat[] = [
  {
    label: "AMCs",
    value: 45,
    suffix: "+",
    detail: "Leading fund houses available",
    accent: "#d1fae5",
  },
  {
    label: "AUM",
    value: 5,
    suffix: "Cr+",
    detail: "Client assets guided",
    accent: "#e0e7ff",
  },
  {
    label: "Active Investors",
    value: 1000,
    suffix: "+",
    detail: "Investors building through SIPs",
    accent: "#fef3c7",
  },
  {
    label: "Years of Experience",
    value: 5,
    suffix: "+",
    detail: "Years helping families invest",
    accent: "#fce7f3",
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
    <section ref={sectionRef} id="stats" className="bg-[#f8fafc] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Accent top bar */}
              <div
                className="absolute left-0 top-0 h-1 w-full transition-all duration-300 group-hover:h-1.5"
                style={{ backgroundColor: stat.accent }}
              />

              <p className="text-5xl font-bold text-[#0f172a] font-[family-name:var(--font-sora)]">
                <AnimatedValue value={stat.value} suffix={stat.suffix} start={isInView} />
              </p>

              <p
                className="mt-3 text-sm font-semibold uppercase tracking-wider text-[#64748b]"
              >
                {stat.label}
              </p>

              <p className="mt-2 text-sm text-[#64748b]">{stat.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
