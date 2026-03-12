"use client";

import { motion } from "framer-motion";

function PhoneShell({
  children,
  tiltClassName = "",
}: {
  children: React.ReactNode;
  tiltClassName?: string;
}) {
  return (
    <div className={`relative mx-auto w-fit ${tiltClassName}`}>
      <div className="pointer-events-none absolute inset-x-10 -bottom-8 h-10 rounded-full bg-[#0b1130]/25 blur-xl" />
      <div className="relative h-[540px] w-[270px] rounded-[2.8rem] bg-gradient-to-b from-[#343943] to-[#11161f] p-[2px] shadow-[0_38px_80px_-30px_rgba(15,23,42,0.62)]">
        <span className="absolute -left-[1px] top-32 h-11 w-[2px] rounded-full bg-zinc-500/70" />
        <span className="absolute -left-[1px] top-48 h-8 w-[2px] rounded-full bg-zinc-500/70" />
        <span className="absolute -right-[1px] top-36 h-14 w-[2px] rounded-full bg-zinc-500/70" />
        <div className="relative h-full w-full overflow-hidden rounded-[2.65rem] bg-black">
          <div className="absolute inset-[1.5px] rounded-[2.55rem] border border-white/10" />
          <div className="absolute left-1/2 top-2.5 z-20 flex h-6 w-32 -translate-x-1/2 items-center justify-center gap-2 rounded-full border border-white/10 bg-black/95">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
            <span className="h-1 w-10 rounded-full bg-zinc-700" />
          </div>
          <div className="relative h-full w-full overflow-hidden rounded-[2.55rem] p-3">
            {children}
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-[2.65rem] bg-[linear-gradient(118deg,rgba(255,255,255,0.2),rgba(255,255,255,0)_30%)]" />
        </div>
      </div>
    </div>
  );
}

function Testimonial({
  quote,
  initials,
  name,
  subtitle,
}: {
  quote: string;
  initials: string;
  name: string;
  subtitle: string;
}) {
  return (
    <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
      <p className="text-3xl leading-none text-[#04b488]">&quot;</p>
      <p className="mt-2 text-sm italic text-[#475569] dark:text-slate-400">{quote}</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#04b488]/10 text-sm font-semibold text-[#0f172a] dark:bg-white/10 dark:text-slate-200">
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#0f172a] dark:text-white">{name}</p>
          <p className="text-xs text-[#475569] dark:text-slate-400">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default function AppShowcase() {
  return (
    <section className="bg-white px-4 py-20 dark:bg-transparent sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid gap-10 finlec-card p-7 lg:grid-cols-2 lg:items-center lg:p-10"
        >
          <div>
            <h2 className="text-3xl font-semibold text-[#0f172a] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl">
              Achieve Your Goals.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#475569] dark:text-slate-300">
              Finlec makes it easy to plan for your family&apos;s goals, get
              personalised investment recommendations, track progress and take
              corrective action.
            </p>
            <button
              type="button"
              className="mt-6 rounded-full border border-[#04b488]/20 bg-[#04b488]/10 px-6 py-2.5 text-sm font-semibold text-[#04b488] transition-colors hover:bg-[#04b488]/15 dark:bg-[#04b488]/14 dark:text-[#7ff7cc]"
            >
              Get Started
            </button>
            <Testimonial
              quote="Investing with Finlec has helped me dream bigger for my family."
              initials="RK"
              name="Rahul Kumar"
              subtitle="Software Engineer, Pune"
            />
          </div>

          <PhoneShell tiltClassName="lg:-rotate-1">
            <div className="flex h-full flex-col rounded-[2.25rem] bg-[radial-gradient(circle_at_80%_10%,#2a0f4a_0%,#17092b_60%)] p-4 text-white">
              <div className="flex items-center justify-between text-[10px] text-white/75">
                <p className="font-medium">9:41</p>
                <p>5G 92%</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm font-semibold">My Goals</p>
                <button
                  type="button"
                  className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold"
                >
                  Add +
                </button>
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-2xl border border-white/15 bg-white/[0.14] p-3 shadow-[0_10px_25px_-18px_rgba(255,255,255,0.45)]">
                  <p className="inline-flex items-center gap-1 rounded-full bg-red-500/20 px-2 py-1 text-[10px] font-semibold text-red-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                    OFF TRACK
                  </p>
                  <p className="mt-2 text-xs text-white/85">Child Education 2036</p>
                  <p className="mt-1 text-lg font-semibold">65.7 L</p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/[0.14] p-3 shadow-[0_10px_25px_-18px_rgba(255,255,255,0.45)]">
                  <p className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-1 text-[10px] font-semibold text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    ON TRACK
                  </p>
                  <p className="mt-2 text-xs text-white/85">Retirement 2046</p>
                  <p className="mt-1 text-lg font-semibold">1.4 Cr</p>
                </div>
              </div>

              <div className="mt-auto rounded-2xl bg-white p-4 text-[#1a1560] shadow-lg shadow-black/20 dark:bg-slate-950/85 dark:text-white">
                <p className="text-xs font-semibold">Your Required SIP</p>
                <button
                  type="button"
                  className="mt-3 w-full rounded-xl bg-[#04b488] px-3 py-2 text-xs font-semibold text-white"
                >
                  Required 5,000
                </button>
                <button
                  type="button"
                  className="mt-2 w-full rounded-xl bg-[#04b488]/10 px-3 py-2 text-xs font-semibold text-[#1a1560] dark:bg-white/10 dark:text-slate-200"
                >
                  Start Small 2,500
                </button>
              </div>
            </div>
          </PhoneShell>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid gap-10 finlec-card p-7 lg:grid-cols-2 lg:items-center lg:p-10"
        >
          <div>
            <h2 className="text-3xl font-semibold text-[#0f172a] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl">
              Grow Your Wealth.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#475569] dark:text-slate-300">
              Clients who started investing with Finlec have been able to build
              meaningful long-term wealth through disciplined and consistent
              investing.
            </p>
            <button
              type="button"
              className="mt-6 rounded-full border border-[#04b488]/20 bg-[#04b488]/10 px-6 py-2.5 text-sm font-semibold text-[#04b488] transition-colors hover:bg-[#04b488]/15 dark:bg-[#04b488]/14 dark:text-[#7ff7cc]"
            >
              Start Investing
            </button>
            <Testimonial
              quote="I've accumulated my first 10 Lakh in mutual fund savings thanks to Finlec. Simple and effective platform."
              initials="SP"
              name="Sneha Patil"
              subtitle="Investor since 2022"
            />
          </div>

          <PhoneShell tiltClassName="lg:rotate-1">
            <div className="flex h-full flex-col rounded-[2.25rem] bg-white p-4 dark:bg-[radial-gradient(circle_at_20%_15%,rgba(4,180,136,0.14),rgba(10,15,27,1)_42%,rgba(8,12,22,1)_100%)]">
              <div className="flex items-center justify-between text-[10px] text-[#4a5568] dark:text-slate-400">
                <p className="font-medium">9:41</p>
                <p>5G 92%</p>
              </div>
              <p className="mt-4 text-sm font-semibold text-[#1a1560] dark:text-white">Finlec Investments</p>
              <p className="mt-4 text-4xl font-bold text-[#1a1560] dark:text-white">10.5 Cr</p>
              <p className="mt-1 text-xs text-[#4a5568] dark:text-slate-400">Current Value</p>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-[#fbfcfd] p-3 dark:border-white/10 dark:bg-slate-950/70">
                <svg viewBox="0 0 260 140" className="h-32 w-full">
                  <path
                    d="M10 115 H250 M10 90 H250 M10 65 H250 M10 40 H250"
                    stroke="#e5e7eb"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M10 112 L60 96 L110 88 L160 68 L210 44 L250 24 L250 130 L10 130 Z"
                    fill="#04b488"
                    opacity="0.2"
                  />
                  <path
                    d="M10 112 L60 96 L110 88 L160 68 L210 44 L250 24"
                    fill="none"
                    stroke="#04b488"
                    strokeWidth="3"
                  />
                </svg>
                <div className="mt-1 grid grid-cols-5 text-[10px] text-[#4a5568] dark:text-slate-400">
                  <span>2020</span>
                  <span className="text-center">2021</span>
                  <span className="text-center">2022</span>
                  <span className="text-center">2023</span>
                  <span className="text-right">2024</span>
                </div>
              </div>

              <div className="mt-4 space-y-3 rounded-2xl border border-slate-200 bg-white p-3 text-xs shadow-sm dark:border-white/10 dark:bg-slate-950/75">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 dark:border-white/10">
                  <p className="text-[#4a5568] dark:text-slate-400">Total Returns</p>
                  <p className="font-semibold text-[#04b488]">4.2 Cr (67%)</p>
                </div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 dark:border-white/10">
                  <p className="text-[#4a5568] dark:text-slate-400">Amount Invested</p>
                  <p className="font-semibold text-[#1a1560] dark:text-white">6.3 Cr</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[#4a5568] dark:text-slate-400">XIRR</p>
                  <p className="font-semibold text-[#04b488]">15.42%</p>
                </div>
              </div>
            </div>
          </PhoneShell>
        </motion.article>
      </div>
    </section>
  );
}
