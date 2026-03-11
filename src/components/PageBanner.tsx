import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PageBannerProps = {
  badge: string;
  title: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function PageBanner({
  badge,
  title,
  description,
  ctaHref = "/signup",
  ctaLabel = "Start Investing",
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_8%,rgba(4,180,136,0.18),transparent_30%),radial-gradient(circle_at_88%_16%,rgba(123,79,212,0.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(247,250,255,0.92))] dark:bg-[radial-gradient(circle_at_14%_10%,rgba(4,180,136,0.2),transparent_26%),radial-gradient(circle_at_86%_16%,rgba(123,79,212,0.22),transparent_30%),linear-gradient(180deg,rgba(5,10,20,0.12),rgba(5,10,20,0.72))]" />

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-white/75 bg-white/82 p-7 shadow-[0_28px_70px_-42px_rgba(14,23,40,0.42)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/72 dark:shadow-[0_28px_70px_-40px_rgba(0,0,0,0.8)] sm:p-9">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(4,180,136,0.06),rgba(123,79,212,0.06))] dark:bg-[linear-gradient(135deg,rgba(4,180,136,0.08),rgba(123,79,212,0.12))]" />

        <p className="relative inline-flex rounded-full border border-[#04b488]/20 bg-[linear-gradient(90deg,rgba(4,180,136,0.12),rgba(123,79,212,0.1))] px-4 py-2 text-sm font-semibold text-[#00a57d] dark:border-[#04b488]/25 dark:text-[#7ff7cc]">
          {badge}
        </p>
        <h1 className="relative mt-4 max-w-3xl text-4xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-5xl">
          {title}
        </h1>
        <p className="relative mt-4 max-w-3xl text-base leading-relaxed text-[#4a5568] dark:text-slate-300 sm:text-lg">
          {description}
        </p>
        <div className="relative mt-7 flex flex-wrap gap-3">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#04b488,#18d1b1)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_-24px_rgba(4,180,136,0.9)] transition-all hover:translate-y-[-1px]"
          >
            {ctaLabel}
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl border border-[#7B4FD4]/25 bg-white/70 px-6 py-3 text-sm font-semibold text-[#5e36b3] transition-colors hover:bg-[#7B4FD4]/10 dark:border-[#7B4FD4]/30 dark:bg-slate-950/65 dark:text-[#dfd2ff] dark:hover:bg-[#7B4FD4]/14"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
