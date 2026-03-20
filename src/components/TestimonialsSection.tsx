"use client";

import { motion } from "framer-motion";
import { useMobileMotion } from "@/lib/hooks/useMobileMotion";
import {
  mobileFadeUp,
  mobileStaggerContainer,
  mobileStaggerFade,
} from "@/lib/motion";

const testimonials = [
  {
    content:
      "I was always unsure where to invest. A friend suggested Finlec, and it made things much simpler. I picked a fund, started my SIP, and stopped worrying about sales calls.",
    author: "Rohan M.",
    role: "Software Engineer, Pune",
    image: "/images/avatar_rohan.png",
  },
  {
    content:
      "What I like most is that everything is in one place. I can track my investments, compare funds, and understand what I am doing without needing to be a finance expert.",
    author: "Priya S.",
    role: "Teacher, Mumbai",
    image: "/images/avatar_priya.png",
  },
  {
    content:
      "I started with just Rs. 500 a month to test it out. Now I have multiple SIPs running, and even my parents use Finlec because it feels easy to follow.",
    author: "Aditya Patil",
    role: "Business Owner, Pune",
    image: "/images/adiimage.png",
  },
];

export default function TestimonialsSection() {
  const { shouldAnimate, motionKey } = useMobileMotion();
  const headerMotionProps = shouldAnimate
    ? {
        variants: mobileStaggerFade,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.3 },
      }
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.45, ease: "easeOut" },
      };
  const gridMotionProps = shouldAnimate
    ? {
        variants: mobileStaggerContainer,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.25 },
      }
    : {};

  return (
    <section
      key={motionKey}
      className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="relative mx-auto max-w-7xl">
        <motion.div {...headerMotionProps} className="text-center mb-14">
          <motion.p
            variants={mobileFadeUp}
            className="inline-flex rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]"
          >
            Investor Stories
          </motion.p>
          <motion.h2
            variants={mobileFadeUp}
            className="mt-4 mx-auto max-w-3xl text-2xl font-semibold text-[#0f172a] font-[family-name:var(--font-sora)] sm:text-3xl md:text-4xl"
          >
            Stories from Finlec investors
          </motion.h2>
          <motion.p
            variants={mobileFadeUp}
            className="mt-4 mx-auto max-w-2xl text-base text-[#475569] sm:text-lg"
          >
            Simple investing, steady SIPs, and clearer money decisions.
          </motion.p>
        </motion.div>

        <motion.div
          {...gridMotionProps}
          className="grid gap-4 sm:gap-6 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.author}
              {...(shouldAnimate
                ? { variants: mobileFadeUp }
                : {
                    initial: { opacity: 0, y: 16 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, amount: 0.25 },
                    transition: {
                      duration: 0.4,
                      delay: index * 0.06,
                      ease: "easeOut",
                    },
                  })}
              className="finlec-card flex h-full flex-col justify-between p-4 sm:p-6"
            >
              <p className="text-sm leading-relaxed text-[#475569] sm:text-sm">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="mt-6 flex items-center gap-4 border-t border-slate-200/70 pt-5">
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-slate-200 sm:h-16 sm:w-16">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0f172a] font-[family-name:var(--font-sora)]">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

