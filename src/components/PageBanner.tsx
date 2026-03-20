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
    <section className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pt-16 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_8%,rgba(4,180,136,0.18),transparent_30%),radial-gradient(circle_at_88%_16%,rgba(123,79,212,0.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(247,250,255,0.92))]" />

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/75 bg-white/82 p-5 shadow-[0_28px_70px_-42px_rgba(14,23,40,0.42)] backdrop-blur-xl sm:rounded-[32px] sm:p-9">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(4,180,136,0.06),rgba(123,79,212,0.06))]" />

        <p className="relative inline-flex rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]">
          {badge}
        </p>
        <h1 className="relative mt-4 max-w-3xl text-2xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="relative mt-4 max-w-3xl text-base leading-relaxed text-[#4a5568] sm:text-lg">
          {description}
        </p>
        <div className="relative mt-7 flex flex-wrap gap-3">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#04b488,#18d1b1)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_36px_-24px_rgba(4,180,136,0.9)] transition-all hover:translate-y-[-1px] min-h-[48px]"
          >
            {ctaLabel}
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl border border-[#7B4FD4]/25 bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#5e36b3] transition-colors hover:bg-[#7B4FD4]/10 min-h-[48px]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

