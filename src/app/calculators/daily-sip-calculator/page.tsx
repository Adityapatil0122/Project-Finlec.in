import MarketingShell from "@/components/MarketingShell";
import AnimatedDailySipBenefits from "@/components/calculators/AnimatedDailySipBenefits";
import Link from "next/link";
import Image from "next/image";
import {
  Blend,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Coins,
  PiggyBank,
  ShieldCheck,
  TrendingUp,
  Clock,
  Target,
  ChartBar,
  Swords,
  Trophy,
  Zap,
  Lock,
  Unlock,
  HandCoins,
} from "lucide-react";

const jumpLinks = [
  { label: "Daily SIP", href: "#daily-sip" },
  { label: "Why Daily SIP?", href: "#why-daily-sip" },
  { label: "Pigmy Deposit", href: "#pigmy-deposit" },
  { label: "Face-Off", href: "#face-off" },
  { label: "FAQs", href: "#faqs" },
];

export default function DailySIPCalculatorPage() {
  return (
    <MarketingShell>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#f8f9fa] px-4 pb-24 pt-28 dark:bg-transparent sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#0ea5e9]/12 blur-3xl dark:bg-[#0ea5e9]/20" />
        <div className="pointer-events-none absolute right-[-120px] top-32 h-64 w-64 rounded-full bg-[#7B4FD4]/14 blur-3xl dark:bg-[#7B4FD4]/20" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[#4a5568] dark:text-slate-400">
            <Link href="/" className="transition-colors hover:text-[#0ea5e9]">Home</Link>
            <ChevronRight size={14} />
            <Link href="/calculators" className="transition-colors hover:text-[#0ea5e9]">Calculators</Link>
            <ChevronRight size={14} />
            <span className="font-semibold text-[#1a1560] dark:text-white">Daily SIP Guide</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="inline-flex items-center rounded-full bg-[#0ea5e9]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#0ea5e9]">
                Daily SIP & Micro Savings Toolkit
              </p>
              <h1 className="mt-6 text-5xl font-bold leading-[1.1] text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-6xl">
                Build daily habits, grow lasting wealth.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-[#4a5568] dark:text-slate-300">
                Use this ultimate guide to master Daily SIPs, pigmy deposits, and
                discover how micro-investing maps to your long-term goals.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {jumpLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition-colors hover:border-[#0ea5e9]/40 hover:text-[#0ea5e9] dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-[#0ea5e9]/50"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-full">
              <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-gradient-to-tr from-[#0ea5e9]/20 to-[#7B4FD4]/20 p-1.5 shadow-2xl backdrop-blur-md">
                <div className="absolute inset-0 bg-white/40 dark:bg-slate-950/40 rounded-[2.5rem]" />
                <Image 
                  src="/images/daily-sip-hero.png" 
                  alt="Daily SIP Hero"
                  fill
                  className="relative z-10 rounded-[2.25rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: WHY DAILY SIP */}
      <section id="why-daily-sip" className="bg-white px-4 py-24 dark:bg-slate-950/50 sm:px-6 lg:px-8 border-y border-slate-200 dark:border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative order-2 lg:order-1 aspect-square w-full max-w-lg mx-auto overflow-hidden rounded-[2.5rem] p-1.5 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-bl from-[#04b488]/30 to-[#0ea5e9]/30 blur-2xl" />
              <Image 
                src="/images/calMobileImg.png" 
                alt="Why Daily SIP"
                fill
                className="relative z-10 rounded-[2.25rem] object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#04b488]">
                Why It Works
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white">
                The magical compounding of micro-habits.
              </h2>
              <p className="mt-5 text-lg text-[#4a5568] dark:text-slate-300">
                A daily systematic investment plan removes emotion and timing from your journey. By investing small fixed amounts every day, you turn micro-savings into massive wealth.
              </p>
              
              <div className="mt-10 space-y-8">
                <div className="group flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#04b488]/10 text-[#04b488] transition-colors group-hover:bg-[#04b488] group-hover:text-white">
                    <Target size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1560] dark:text-white">Rupee Cost Averaging on Steroids</h3>
                    <p className="mt-2 text-md leading-relaxed text-[#4a5568] dark:text-slate-300">
                      Capture every single market mood. By investing daily, you effortlessly average your purchase cost over the daily volatility.
                    </p>
                  </div>
                </div>
                
                <div className="group flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0ea5e9]/10 text-[#0ea5e9] transition-colors group-hover:bg-[#0ea5e9] group-hover:text-white">
                    <Clock size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1560] dark:text-white">Bulletproof Discipline</h3>
                    <p className="mt-2 text-md leading-relaxed text-[#4a5568] dark:text-slate-300">
                      You barely notice ₹100 or ₹500 leaving your account daily. This stealth savings habit ensures consistency without lifestyle shocks.
                    </p>
                  </div>
                </div>

                <div className="group flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#7B4FD4]/10 text-[#7B4FD4] transition-colors group-hover:bg-[#7B4FD4] group-hover:text-white">
                    <ChartBar size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1560] dark:text-white">Zero Market Timing Anxiety</h3>
                    <p className="mt-2 text-md leading-relaxed text-[#4a5568] dark:text-slate-300">
                      Wondering to invest on the 1st or 15th? With Daily SIPs, every day is the right day to invest.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01. DAILY SIP SECTION */}
      <section id="daily-sip" className="bg-[#f8f9fa] px-4 py-24 dark:bg-transparent sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="flex items-start gap-6">
            <span className="text-7xl font-bold text-slate-200 dark:text-slate-800/80">01</span>
            <div className="pt-2">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0ea5e9]/10 text-[#0ea5e9]">
                  <CalendarDays size={24} />
                </span>
                <h2 className="text-4xl font-bold text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white">
                  Daily SIP
                </h2>
              </div>
              <p className="mt-6 text-lg leading-relaxed text-[#4a5568] dark:text-slate-300">
                A Daily SIP invests a fixed amount every day, building a habit-led investing rhythm. Perfect for business owners, gig workers, and people with daily cash flow.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/calculators/sip-calculator"
                  className="inline-flex items-center rounded-full bg-[#0ea5e9] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_-18px_rgba(14,165,233,0.7)] transition-transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Use SIP Calculator
                </Link>
                <Link
                  href="/calculators/xirr-calculator"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-[#0ea5e9]/40 hover:text-[#0ea5e9] dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-[#0ea5e9]/50"
                >
                  Check XIRR
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-6 rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 dark:bg-slate-900/40 dark:shadow-none border border-slate-100 dark:border-white/5">
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5 border-b border-slate-100 pb-5 dark:border-white/5">
              <p className="min-w-32 text-xs font-semibold uppercase tracking-[0.2em] text-[#0ea5e9]">Why it works</p>
              <p className="text-[#4a5568] dark:text-slate-300">By automating daily micro-investments, it completely removes the inertia and emotional friction of investing. You effortlessly average your entry price and shield yourself from daily market fluctuations.</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5 border-b border-slate-100 pb-5 dark:border-white/5">
              <p className="min-w-32 text-xs font-semibold uppercase tracking-[0.2em] text-[#0ea5e9]">Ideal Profile</p>
              <p className="text-[#4a5568] dark:text-slate-300">Excellent for entrepreneurs, freelancers, gig workers, and anyone with a daily cash flow. It matches your income frequency with your investing frequency perfectly.</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5 border-b border-slate-100 pb-5 dark:border-white/5">
              <p className="min-w-32 text-xs font-semibold uppercase tracking-[0.2em] text-[#0ea5e9]">Horizon Profile</p>
              <p className="text-[#4a5568] dark:text-slate-300">Minimum 12+ months for stability. To see the true magic of compounding wealth and beating inflation, a 3-5+ year horizon is heavily recommended.</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5">
              <p className="min-w-32 text-xs font-semibold uppercase tracking-[0.2em] text-[#0ea5e9]">How to Track</p>
              <p className="text-[#4a5568] dark:text-slate-300">Always use the XIRR (Extended Internal Rate of Return) method. Since your cash flows are scattered across different dates, XIRR is the only accurate way to measure annualized returns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 02. PIGMY DEPOSIT */}
      <section id="pigmy-deposit" className="bg-[#f8fafc] px-4 py-24 dark:bg-slate-950/30 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="order-2 lg:order-1 space-y-6 rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 dark:bg-slate-900/50 dark:shadow-none border border-slate-100 dark:border-white/5">
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5 border-b border-slate-100 pb-5 dark:border-white/5">
              <p className="min-w-32 text-xs font-bold uppercase tracking-[0.2em] text-[#f97316]">Concept</p>
              <p className="text-[#4a5568] dark:text-slate-300">It is a micro-deposit scheme where very small amounts are systematically deposited daily or weekly, often directly collected by agents. It ensures zero market exposure.</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5 border-b border-slate-100 pb-5 dark:border-white/5">
              <p className="min-w-32 text-xs font-bold uppercase tracking-[0.2em] text-[#f97316]">Core Goal</p>
              <p className="text-[#4a5568] dark:text-slate-300">To build absolute foundational savings habits for complete beginners. It transforms spare loose change into a solid, tangible lump sum over a few months.</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5">
              <p className="min-w-32 text-xs font-bold uppercase tracking-[0.2em] text-[#f97316]">Considerations</p>
              <p className="text-[#4a5568] dark:text-slate-300">Pigmy deposits usually yield lower interest than SIPs. Additionally, agent collection fees can eat into your returns. If you have a bank account with auto-debit, a Daily SIP might be more efficient financially.</p>
            </div>
          </div>

          <div className="order-1 flex items-start gap-6 lg:order-2">
            <span className="text-7xl font-bold text-slate-200 dark:text-slate-800/80">02</span>
            <div className="pt-2">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f97316]/10 text-[#f97316]">
                  <Coins size={24} />
                </span>
                <h2 className="text-4xl font-bold text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white">
                  Pigmy Deposit
                </h2>
              </div>
              <p className="mt-6 text-lg leading-relaxed text-[#4a5568] dark:text-slate-300">
                A traditional micro-savings instrument where small cash amounts are often picked up daily from your doorstep. Excellent for absolute beginners.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/calculators/pigmy-deposit-calculator"
                  className="inline-flex items-center rounded-full bg-[#f97316] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_-18px_rgba(249,115,22,0.7)] transition-transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Pigmy Calculator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: THE GRAND FACE-OFF (Gamified Comparison) */}
      <section id="face-off" className="bg-[#f8fafc] px-4 py-24 dark:bg-slate-950/40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7B4FD4]/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#7B4FD4]">
              <Swords size={18} /> THE GRAND FACE-OFF
            </div>
            <h2 className="mt-6 text-4xl font-bold text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-5xl">
              Daily SIP vs The Traditional World
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#4a5568] dark:text-slate-300">
              See why modern Daily SIPs act as a cheat code for wealth generation compared to traditional saving methods.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            
            {/* Contender 1: Pigmy */}
            <div className="group relative rounded-[2.5rem] border border-slate-200 bg-white p-8 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300 dark:border-white/5 dark:bg-slate-900/50">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-4xl font-black text-slate-100 dark:text-slate-800">LVL 1</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400">TRADITIONAL</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1a1560] dark:text-white">Pigmy Deposit</h3>
              <p className="mt-2 text-sm text-[#4a5568] dark:text-slate-400">The reliable old-school piggy bank.</p>
              
              <div className="mt-8 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-800"><Coins size={20} /></div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Wealth Power</p>
                    <p className="font-bold text-[#1a1560] dark:text-white">Very Low (3-5%)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-800"><Lock size={20} /></div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Liquidity</p>
                    <p className="font-bold text-[#1a1560] dark:text-white">Locked</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-800"><Zap size={20} /></div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Inflation Armor</p>
                    <p className="font-bold text-[#1a1560] dark:text-white">Negative</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-800"><Clock size={20} /></div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Effort Level</p>
                    <p className="font-bold text-[#1a1560] dark:text-white">High (Agent Meetings)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-800"><HandCoins size={20} /></div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Hidden Debuffs</p>
                    <p className="font-bold text-[#1a1560] dark:text-white">Agent Fees (2-3%)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contender 3: Daily SIP (THE BOSS) */}
            <div className="group relative overflow-hidden rounded-[2.5rem] border-2 border-[#0ea5e9] bg-white p-8 shadow-xl shadow-[#0ea5e9]/20 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0ea5e9]/40 dark:bg-slate-900/80">
              <div className="absolute -right-10 -top-10 opacity-[0.03] transition-transform duration-500 group-hover:scale-110 group-hover:opacity-10 dark:opacity-10"><Trophy size={200} className="text-[#0ea5e9]" /></div>
              
              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-4xl font-black text-[#0ea5e9]/20">LVL 99</span>
                  <span className="animate-pulse rounded-full bg-[#0ea5e9] px-3 py-1 text-xs font-bold text-white shadow-lg shadow-[#0ea5e9]/50">OVERPOWERED</span>
                </div>
                <h3 className="text-2xl font-bold text-[#1a1560] dark:text-white">Daily SIP (Eq. Mutual Funds)</h3>
                <p className="mt-2 text-sm text-[#4a5568] dark:text-slate-300">The modern wealth creation engine.</p>
                
                <div className="mt-8 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0ea5e9]/10 text-[#0ea5e9]"><TrendingUp size={20} /></div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#0ea5e9]">Wealth Power</p>
                      <p className="font-bold text-[#1a1560] dark:text-white">Extremely High (10-15%+)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0ea5e9]/10 text-[#0ea5e9]"><Unlock size={20} /></div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#0ea5e9]">Liquidity</p>
                      <p className="font-bold text-[#1a1560] dark:text-white">High (Exit anytime*)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0ea5e9]/10 text-[#0ea5e9]"><Zap size={20} /></div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#0ea5e9]">Inflation Armor</p>
                      <p className="font-bold text-[#1a1560] dark:text-white">Strong (Beats Inflation)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0ea5e9]/10 text-[#0ea5e9]"><Clock size={20} /></div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#0ea5e9]">Effort Level</p>
                      <p className="font-bold text-[#1a1560] dark:text-white">Zero (Fully Automated)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0ea5e9]/10 text-[#0ea5e9]"><Target size={20} /></div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#0ea5e9]">Special Ability</p>
                      <p className="font-bold text-[#1a1560] dark:text-white">Rupee Cost Averaging</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <AnimatedDailySipBenefits />
        </div>
      </section>

      {/* NEW SECTION: FAQs */}
      <section id="faqs" className="bg-white px-4 py-24 dark:bg-slate-950/60 sm:px-6 lg:px-8 border-y border-slate-200 dark:border-white/5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7B4FD4]">
              Common Questions
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-[#4a5568] dark:text-slate-300">
              Quick, clear answers about Daily SIPs.
            </p>
          </div>

          <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur dark:divide-white/10 dark:border-white/10 dark:bg-slate-900/50">
            {[
              {
                q: "What is a Daily SIP and who is it best for?",
                a: "A Daily SIP invests a fixed amount every day in a mutual fund. It suits people with daily cash flow, like business owners or gig workers, and anyone who wants a habit-led investing routine."
              },
              {
                q: "Is a Daily SIP better than Pigmy deposits?",
                a: "Pigmy deposits build savings discipline but usually earn lower interest and may include collection fees. A Daily SIP offers market-linked growth and digital auto-debit convenience."
              },
              {
                q: "What is the minimum amount to start?",
                a: "Many funds allow small daily amounts like Rs 100 or less, depending on the platform and fund rules."
              },
              {
                q: "How are daily deductions made?",
                a: "Your bank sets up an auto-debit mandate such as eNACH or UPI AutoPay. The amount is deducted automatically on business days."
              },
              {
                q: "Can I pause or stop a Daily SIP anytime?",
                a: "Yes. Most platforms let you pause, modify, or stop the mandate without exit penalties, but invested units remain subject to market movement."
              },
              {
                q: "Does a Daily SIP reduce market risk compared to monthly SIPs?",
                a: "Daily SIPs can slightly reduce short-term volatility compared to monthly SIPs by deploying capital across more days and capturing all market moods, though long-term returns are generally comparable."
              },
              {
                q: "What happens if I don't have enough balance on a particular day?",
                a: "If an auto-debit fails due to insufficient funds, your bank may charge a bounce or mandate failure fee. It is important to keep a sufficient buffer in your account."
              },
              {
                q: "Are Daily SIP returns taxable?",
                a: "Yes, equity mutual fund returns are subject to capital gains tax. If you sell equity funds within a year, they attract Short-Term Capital Gains (STCG) tax. After one year, they are taxed as Long-Term Capital Gains (LTCG)."
              },
              {
                q: "Can I invest in any mutual fund through a Daily SIP?",
                a: "Not all Mutual Funds (AMCs) or platforms support a daily SIP frequency, although most major brokers and popular direct platforms do. You will need to filter for funds that explicitly offer it."
              },
              {
                q: "Is it complicated to track so many daily transactions during tax season?",
                a: "No. Modern mutual fund apps and registrars (like CAMS or KFintech) provide a single Consolidated Capital Gains Statement, doing all the heavy lifting for your tax filing automatically."
              }
            ].map((faq) => (
              <details key={faq.q} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-semibold text-[#1a1560] dark:text-white [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <ChevronDown className="h-5 w-5 text-slate-400 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5568] dark:text-slate-300">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* MUTUAL FUND LANES */}
      <section id="fund-lanes" className="bg-[#f8f9fa] px-4 py-24 dark:bg-transparent sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between text-center md:text-left">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#04b488]">
                Mutual Fund Lanes
              </p>
              <h2 className="mt-4 text-4xl font-bold text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-5xl">
                Choose the right fund mix
              </h2>
            </div>
            <p className="max-w-xl text-lg text-[#4a5568] dark:text-slate-300 mx-auto md:mx-0">
              Align your Daily SIPs with the right funds. Equity for growth, Hybrid for balance, Debt for stability. 
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div id="equity-funds" className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#04b488]/10 dark:border-white/10 dark:bg-slate-900/50">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#04b488]/10 text-[#04b488] transition-colors group-hover:bg-[#04b488] group-hover:text-white">
                <TrendingUp size={28} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white">
                Equity Funds
              </h3>
              <p className="mt-4 text-[#4a5568] dark:text-slate-300 leading-relaxed">
                Best for long-term goals (4+ years). Higher growth potential but experiences higher short-term volatility.
              </p>
              <Link
                href="/explore-mutual-funds?asset=equity#category-breakdown"
                className="mt-6 inline-flex items-center text-sm font-bold text-[#04b488] transition-colors hover:text-[#03846b]"
              >
                Explore Equity Funds
                <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>

            <div id="hybrid-funds" className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#7B4FD4]/10 dark:border-white/10 dark:bg-slate-900/50">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#7B4FD4]/10 text-[#7B4FD4] transition-colors group-hover:bg-[#7B4FD4] group-hover:text-white">
                <Blend size={28} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white">
                Hybrid Funds
              </h3>
              <p className="mt-4 text-[#4a5568] dark:text-slate-300 leading-relaxed">
                Mixes equity and debt automatically. Perfect for medium-term goals needing a balanced risk profile.
              </p>
              <Link
                href="/explore-mutual-funds?asset=hybrid#category-breakdown"
                className="mt-6 inline-flex items-center text-sm font-bold text-[#7B4FD4] transition-colors hover:text-[#5e36b3]"
              >
                Explore Hybrid Funds
                <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>

            <div id="debt-funds" className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300 dark:border-white/10 dark:bg-slate-900/50">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0f172a]/10 text-[#0f172a] transition-colors group-hover:bg-[#0f172a] group-hover:text-white dark:bg-white/10 dark:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900">
                <ShieldCheck size={28} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white">
                Debt Funds
              </h3>
              <p className="mt-4 text-[#4a5568] dark:text-slate-300 leading-relaxed">
                Lower volatility and more stable returns. Ideal for short-to-medium goals or parking emergency funds.
              </p>
              <Link
                href="/explore-mutual-funds?asset=debt#category-breakdown"
                className="mt-6 inline-flex items-center text-sm font-bold text-[#0f172a] transition-colors hover:text-[#04b488] dark:text-slate-200 dark:hover:text-[#7ff7cc]"
              >
                Explore Debt Funds
                <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
