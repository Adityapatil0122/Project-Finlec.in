"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpDown,
  BarChart3,
  ChevronDown,
  ChevronUp,
  Clock,
  IndianRupee,
  Info,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import type { FundCategoryInfo, SampleFund } from "@/data";
import { getFundsByParent, companyLogo } from "@/data";
import type { FundSnapshot } from "@/types/mfapi";

/* ── sorting ── */
type SortKey = "return1Y" | "return3Y" | "return5Y" | "expenseRatio";

function sortFunds(funds: SampleFund[], key: SortKey, asc: boolean): SampleFund[] {
  return [...funds].sort((a, b) => {
    const va = parseFloat(a[key]);
    const vb = parseFloat(b[key]);
    return asc ? va - vb : vb - va;
  });
}

/* ── component ── */
export default function FundCategoryPage({ data }: { data: FundCategoryInfo }) {
  const [sortKey, setSortKey] = useState<SortKey>("return5Y");
  const [sortAsc, setSortAsc] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [liveReturns, setLiveReturns] = useState<Record<string, FundSnapshot>>({});

  const mergedFunds: SampleFund[] = data.topFunds.map((fund) => {
    const live = liveReturns[fund.scheme];
    return {
      ...fund,
      return1Y:
        live?.return1Y !== undefined ? `${live.return1Y.toFixed(2)}%` : fund.return1Y,
      return3Y:
        live?.return3Y !== undefined ? `${live.return3Y.toFixed(2)}%` : fund.return3Y,
      return5Y:
        live?.return5Y !== undefined ? `${live.return5Y.toFixed(2)}%` : fund.return5Y,
    };
  });

  const sortedFunds = sortFunds(mergedFunds, sortKey, sortAsc);

  const relatedFunds = getFundsByParent(data.parentCategory).filter(
    (f) => f.slug !== data.slug
  );

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    const fetchReturns = async () => {
      try {
        const response = await fetch("/api/mf/batch", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            funds: data.topFunds.map((fund) => fund.scheme),
          }),
        });
        if (!response.ok) return;
        const payload = (await response.json()) as { data?: FundSnapshot[] };
        if (!payload?.data || !isMounted) return;
        const nextMap: Record<string, FundSnapshot> = {};
        payload.data.forEach((snapshot) => {
          nextMap[snapshot.name] = snapshot;
        });
        setLiveReturns(nextMap);
      } catch {
        // keep static values if API fails
      }
    };

    fetchReturns();
    return () => {
      isMounted = false;
    };
  }, [data.topFunds]);

  const riskColor =
    data.riskLevel === "Very Low" || data.riskLevel === "Low"
      ? "#04b488"
      : data.riskLevel === "Moderate" || data.riskLevel === "Low to Moderate"
        ? "#7B4FD4"
        : "#e85d5d";

  return (
    <div className="min-h-screen">
      {/* ─── HERO BANNER ─── */}
      <section className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pt-16 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(4,180,136,0.18),transparent_30%),radial-gradient(circle_at_90%_10%,rgba(123,79,212,0.2),transparent_34%)]" />
        <div className="pointer-events-none absolute left-[8%] top-20 h-36 w-36 rounded-full bg-[#04b488]/12 blur-3xl" />
        <div className="pointer-events-none absolute right-[6%] top-12 h-40 w-40 rounded-full bg-[#7B4FD4]/14 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/explore-mutual-funds"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 text-sm font-medium text-[#4a5568] backdrop-blur-sm transition-colors hover:border-[#04b488]/30 hover:text-[#04b488]"
          >
            <ArrowLeft size={14} />
            Back to Explore Funds
          </Link>

          <div className="mt-4 overflow-hidden rounded-[28px] border border-white/75 bg-white/85 p-8 shadow-[0_24px_60px_-36px_rgba(14,23,40,0.4)] backdrop-blur-xl sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(4,180,136,0.05),rgba(123,79,212,0.05))]" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]">
                <Sparkles size={12} />
                {data.parentCategory} Fund
              </span>

              <h1 className="mt-5 text-3xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-4xl lg:text-5xl">
                {data.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#4a5568] sm:text-lg">
                {data.description}
              </p>

              {/* Stats row */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    icon: TrendingUp,
                    label: "Avg. Return (5Y)",
                    value: data.avgReturn,
                    accent: "#04b488",
                  },
                  {
                    icon: BarChart3,
                    label: "No. of Funds",
                    value: String(data.fundCount),
                    accent: "#7B4FD4",
                  },
                  {
                    icon: Shield,
                    label: "Risk Level",
                    value: data.riskLevel,
                    accent: riskColor,
                  },
                  {
                    icon: Clock,
                    label: "Ideal Horizon",
                    value: data.idealHorizon,
                    accent: "#1a1560",
                  },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-slate-200/80 bg-white/60 p-4 backdrop-blur-sm"
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <Icon size={16} style={{ color: s.accent }} />
                        <span className="text-xs font-medium uppercase tracking-wider text-[#4a5568]">
                          {s.label}
                        </span>
                      </div>
                      <p
                        className="text-2xl font-bold font-[family-name:var(--font-sora)]"
                        style={{ color: s.accent }}
                      >
                        {s.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FUND TABLE ─── */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-2xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)]">
            Top {data.title} Sorted by Returns
          </h2>

          <div className="overflow-hidden rounded-[20px] border border-slate-200/80 bg-white/80 shadow-sm backdrop-blur-xl">
            {/* Table header */}
            <div className="hidden border-b border-slate-200/80 bg-[#f5f6fa] px-6 py-4 lg:grid lg:grid-cols-[1fr_100px_100px_100px_100px]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#4a5568]">
                Scheme
              </span>
              {(
                [
                  ["expenseRatio", "Expense"],
                  ["return1Y", "1Y Return"],
                  ["return3Y", "3Y Return"],
                  ["return5Y", "5Y Return"],
                ] as [SortKey, string][]
              ).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleSort(key)}
                  className="flex items-center justify-end gap-1 text-xs font-semibold uppercase tracking-wider text-[#4a5568] transition-colors hover:text-[#04b488]"
                >
                  {label}
                  <ArrowUpDown
                    size={12}
                    className={
                      sortKey === key ? "text-[#04b488]" : "opacity-40"
                    }
                  />
                </button>
              ))}
            </div>

            {/* Table rows */}
            {sortedFunds.map((fund, i) => (
              <div
                key={fund.scheme}
                className={`grid items-center gap-4 px-6 py-5 transition-colors hover:bg-[#04b488]/4 lg:grid-cols-[1fr_100px_100px_100px_100px] ${i < sortedFunds.length - 1
                    ? "border-b border-slate-100"
                    : ""
                  }`}
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200/80 bg-white p-1">
                    <Image
                      src={fund.logoUrl || companyLogo(fund.company)}
                      alt={`${fund.company} logo`}
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                      unoptimized
                    />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#1a1560]">
                      {fund.scheme}
                    </p>
                    <p className="mt-0.5 text-xs text-[#4a5568]">
                      {fund.company}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#4a5568] lg:hidden">
                    Expense:{" "}
                  </span>
                  <span className="text-sm font-medium text-[#4a5568]">
                    {fund.expenseRatio}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#4a5568] lg:hidden">
                    1Y:{" "}
                  </span>
                  <span className="text-sm font-semibold text-[#04b488]">
                    {fund.return1Y}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#4a5568] lg:hidden">
                    3Y:{" "}
                  </span>
                  <span className="text-sm font-semibold text-[#7B4FD4]">
                    {fund.return3Y}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#4a5568] lg:hidden">
                    5Y:{" "}
                  </span>
                  <span className="text-sm font-bold text-[#1a1560]">
                    {fund.return5Y}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-3 text-xs text-[#4a5568]/60">
            * Returns are annualized and based on historical data. Past
            performance does not guarantee future results. Min. SIP: {data.minInvestment}.
          </p>
        </div>
      </section>

      {/* ─── INFO SECTIONS ─── */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          {/* What is */}
          <InfoCard
            icon={Info}
            title={`What is a ${data.title.replace(" Mutual Funds", "").replace(" Funds", "")} Fund?`}
            accent="#04b488"
          >
            <p className="text-sm leading-relaxed text-[#4a5568]">
              {data.whatIs}
            </p>
          </InfoCard>

          {/* Advantages */}
          <InfoCard icon={Target} title="Key Advantages" accent="#7B4FD4">
            <ul className="space-y-2">
              {data.advantages.map((a) => (
                <li
                  key={a}
                  className="flex items-start gap-2 text-sm text-[#4a5568]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#04b488]" />
                  {a}
                </li>
              ))}
            </ul>
          </InfoCard>

          {/* How it works */}
          <InfoCard
            icon={BarChart3}
            title="How It Works"
            accent="#1a1560"
          >
            <p className="text-sm leading-relaxed text-[#4a5568]">
              {data.howItWorks}
            </p>
          </InfoCard>

          {/* Who should invest */}
          <InfoCard
            icon={Shield}
            title="Who Should Invest?"
            accent="#04b488"
          >
            <ul className="space-y-2">
              {data.whoShouldInvest.map((w) => (
                <li
                  key={w}
                  className="flex items-start gap-2 text-sm text-[#4a5568]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7B4FD4]" />
                  {w}
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>

        {/* Taxation — full width */}
        <div className="mx-auto mt-6 max-w-6xl">
          <InfoCard
            icon={IndianRupee}
            title="Taxation"
            accent="#1a1560"
          >
            <p className="text-sm leading-relaxed text-[#4a5568]">
              {data.taxation}
            </p>
          </InfoCard>
        </div>
      </section>

      {/* ─── RELATED CATEGORIES ─── */}
      {relatedFunds.length > 0 && (
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-6 text-2xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)]">
              Explore Other {data.parentCategory.charAt(0).toUpperCase() + data.parentCategory.slice(1)} Categories
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedFunds.map((rf) => (
                <Link
                  key={rf.slug}
                  href={`/explore-mutual-funds/${rf.parentCategory}/${rf.slug}`}
                  className="group rounded-2xl border border-slate-200/80 bg-white/80 p-5 backdrop-blur-xl transition-all hover:border-[#04b488]/30 hover:shadow-md"
                >
                  <p className="text-sm font-semibold text-[#1a1560] transition-colors group-hover:text-[#04b488]">
                    {rf.title}
                  </p>
                  <p className="mt-1 text-xs text-[#4a5568]">
                    {rf.fundCount} funds &bull; Avg. {rf.avgReturn}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase"
                      style={{
                        backgroundColor: `${riskColorForLevel(rf.riskLevel)}15`,
                        color: riskColorForLevel(rf.riskLevel),
                      }}
                    >
                      {rf.riskLevel}
                    </span>
                    <span className="text-[10px] text-[#4a5568]">
                      {rf.idealHorizon}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── FAQ ─── */}
      {data.faqs.length > 0 && (
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-6 text-2xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {data.faqs.map((faq, i) => (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-xl"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="pr-4 text-sm font-semibold text-[#1a1560]">
                      {faq.question}
                    </span>
                    {openFaq === i ? (
                      <ChevronUp
                        size={18}
                        className="shrink-0 text-[#7B4FD4]"
                      />
                    ) : (
                      <ChevronDown
                        size={18}
                        className="shrink-0 text-[#4a5568]"
                      />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-[#4a5568]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

/* ── Helpers ── */
function riskColorForLevel(level: string): string {
  if (level === "Very Low" || level === "Low") return "#04b488";
  if (level === "Moderate" || level === "Low to Moderate") return "#7B4FD4";
  return "#e85d5d";
}

function InfoCard({
  icon: Icon,
  title,
  accent,
  children,
}: {
  icon: typeof Info;
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[20px] border border-slate-200/80 bg-white/80 p-6 backdrop-blur-xl">
      <div className="mb-4 flex items-center gap-3">
        <span
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${accent}15`, color: accent }}
        >
          <Icon size={17} />
        </span>
        <h3 className="text-base font-semibold text-[#1a1560]">
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

