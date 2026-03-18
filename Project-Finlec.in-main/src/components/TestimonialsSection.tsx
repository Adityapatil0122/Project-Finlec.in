"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    content:
      "The allocation intelligence in Finlec is incredible. My portfolio has been rebalanced automatically twice this year, keeping me exactly on track for my goals.",
    author: "Rohan M.",
    role: "Retail Investor",
    image: "/images/avatar_rohan.png",
  },
  {
    content:
      "I've tried multiple investment apps, but Finlec's interface is the cleanest. The goal progress heatmap explicitly shows me where I stand and what I need to do next.",
    author: "Priya S.",
    role: "Marketing Director",
    image: "/images/avatar_priya.png",
  },
  {
    content:
      "The SIP Step-Up planner completely changed my retirement projections. Setting up a 10% yearly increment was seamless, and the transparency is unmatched.",
    author: "Aditya Patil",
    role: "Disciplined Investor",
    image: "/images/adiimage.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="inline-flex rounded-full bg-[#7B4FD4]/10 px-4 py-2 text-sm font-semibold text-[#7B4FD4]">
            Investor Stories
          </p>
          <h2 className="mt-4 mx-auto max-w-3xl text-3xl font-semibold text-[#0f172a] font-[family-name:var(--font-sora)] sm:text-4xl">
            Trusted by disciplined investors across India
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-[#475569] sm:text-lg">
            Clear portfolios, consistent SIP discipline, and measurable outcomes.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
              className="finlec-card flex h-full flex-col justify-between p-6"
            >
              <p className="text-sm leading-relaxed text-[#475569]">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="mt-6 flex items-center gap-4 border-t border-slate-200/70 pt-5">
                <div className="h-11 w-11 overflow-hidden rounded-full border border-slate-200">
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
                  <p className="text-xs text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

