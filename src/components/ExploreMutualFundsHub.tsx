"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Blend,
  Boxes,
  Building,
  Building2,
  Cpu,
  Factory,
  Globe2,
  Landmark,
  PieChart,
  Pill,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import type { FundSnapshot } from "@/types/mfapi";

type AssetClass = "equity" | "debt" | "hybrid";
type FundTab = "equity" | "taxSaving" | "hybrid" | "debt";

type CategoryCard = {
  id: AssetClass;
  title: string;
  subtitle: string;
  icon: LucideIcon;
};

type CategoryItem = {
  name: string;
  detail: string;
  icon: LucideIcon;
};

type CategoryGroup = {
  title: string;
  items: CategoryItem[];
};

type CategoryLayout = {
  columns: CategoryGroup[][];
};

type FundRow = {
  scheme: string;
  company: string;
  logoUrl: string;
  expenseRatio: string;
  return5Y: string;
};

const categoryCards: CategoryCard[] = [
  {
    id: "equity",
    title: "Equity Funds",
    subtitle: "For long term (4 years or more)",
    icon: TrendingUp,
  },
  {
    id: "debt",
    title: "Debt Funds",
    subtitle: "For short to medium term",
    icon: ShieldCheck,
  },
  {
    id: "hybrid",
    title: "Hybrid Funds",
    subtitle: "For medium to long term",
    icon: Blend,
  },
];

const categoryLayouts: Record<AssetClass, CategoryLayout> = {
  equity: {
    columns: [
      [
        {
          title: "By Market Capitalization",
          items: [
            { name: "Large Cap", detail: "Invests in Top 100 stocks", icon: Building2 },
            { name: "Mid Cap", detail: "Invests in Next 150 stocks", icon: Building },
            { name: "Small Cap", detail: "Invests outside Top 250 stocks", icon: Factory },
            { name: "Large & MidCap", detail: "Invests in Top 250 stocks", icon: PieChart },
          ],
        },
      ],
      [
        {
          title: "By Diversification",
          items: [
            { name: "Multi Cap", detail: "Invests in stocks across market cap", icon: Boxes },
            {
              name: "Flexi Cap",
              detail: "Invests across large, mid and small-cap stocks",
              icon: PieChart,
            },
            { name: "International", detail: "Invests in world's top stocks", icon: Globe2 },
            { name: "Strategy", detail: "Invests in debt and arbitrage funds", icon: Landmark },
          ],
        },
      ],
      [
        {
          title: "Sector",
          items: [
            { name: "Sectoral-Banking", detail: "Invests in banking stocks", icon: Landmark },
            { name: "Sectoral-Technology", detail: "Invests in technology stocks", icon: Cpu },
            { name: "Sectoral-Infrastructure", detail: "Invests in infra stocks", icon: Building2 },
            { name: "Sectoral-Pharma", detail: "Invests in pharma stocks", icon: Pill },
          ],
        },
      ],
    ],
  },
  debt: {
    columns: [
      [
        {
          title: "Funds to Park Money",
          items: [
            { name: "Overnight", detail: "For up to 1 week duration", icon: ShieldCheck },
            { name: "Liquid", detail: "For 1 week to 1 month duration", icon: Landmark },
            { name: "Ultra Short Duration", detail: "For 2 to 4 month duration", icon: PieChart },
          ],
        },
      ],
      [
        {
          title: "For 6 Months to 2 Years",
          items: [
            { name: "Low Duration", detail: "For 6 to 12 month goals", icon: Building },
            { name: "Money Market", detail: "For up to 1 year duration", icon: Boxes },
            { name: "Short Duration", detail: "For 1 to 3 year goals", icon: Factory },
          ],
        },
      ],
      [
        {
          title: "Long Duration Debt",
          items: [
            { name: "Corporate Bond", detail: "Debt of top-rated companies", icon: Building2 },
            { name: "Gilt Funds", detail: "Government securities focused", icon: Landmark },
            { name: "Dynamic Bond", detail: "Actively manages interest-rate cycles", icon: TrendingUp },
          ],
        },
      ],
    ],
  },
  hybrid: {
    columns: [
      [
        {
          title: "Medium to Long Term",
          items: [
            { name: "Aggressive Hybrid", detail: "Equity heavy with debt cushion", icon: Blend },
            { name: "Balanced Hybrid", detail: "Balanced allocation approach", icon: PieChart },
            { name: "Dynamic Asset Allocation", detail: "Allocates based on market levels", icon: TrendingUp },
          ],
        },
      ],
      [
        {
          title: "Lower Volatility Options",
          items: [
            { name: "Conservative Hybrid", detail: "Debt heavy with limited equity", icon: ShieldCheck },
            { name: "Equity Savings", detail: "Equity + arbitrage + debt mix", icon: Boxes },
            { name: "Arbitrage", detail: "Low risk strategy with market-neutral positions", icon: Landmark },
          ],
        },
      ],
      [
        {
          title: "Allocation Driven",
          items: [
            { name: "Multi Asset Allocation", detail: "Diversifies across asset classes", icon: Globe2 },
            { name: "Hybrid FoF", detail: "Basket of hybrid mutual fund schemes", icon: Building },
            { name: "Retirement Hybrid", detail: "Goal-oriented long term allocation", icon: Factory },
          ],
        },
      ],
    ],
  },
};

const assetSpotlights: Record<
  AssetClass,
  {
    eyebrow: string;
    description: string;
    insightTitle: string;
    insightValue: string;
    insightDetail: string;
  }
> = {
  equity: {
    eyebrow: "Long-term wealth building",
    description:
      "Track market-cap, diversification, and sector allocations in one cleaner equity navigator.",
    insightTitle: "Coverage",
    insightValue: "Large to Small Cap",
    insightDetail: "Structured views for broad-market and focused equity discovery.",
  },
  debt: {
    eyebrow: "Stability and liquidity",
    description:
      "Move from parking-money funds to duration-led debt strategies without losing category clarity.",
    insightTitle: "Range",
    insightValue: "1 week to 3+ years",
    insightDetail: "Short-term cash parking and longer duration options in one flow.",
  },
  hybrid: {
    eyebrow: "Balanced allocation design",
    description:
      "Compare equity-heavy, lower-volatility, and allocation-driven hybrids with cleaner fund grouping.",
    insightTitle: "Mix",
    insightValue: "Equity + Debt",
    insightDetail: "See how each hybrid approach balances growth potential and downside control.",
  },
};

const topPerformingFunds: Record<FundTab, FundRow[]> = {
  equity: [
    {
      scheme: "ICICI Prudential BHARAT 22 FOF Scheme",
      company: "ICICI Prudential",
      logoUrl: "/companylogos/icici.png",
      expenseRatio: "0.13%",
      return5Y: "26.63% p.a.",
    },
    {
      scheme: "ICICI Prudential India Opportunities Fund",
      company: "ICICI Prudential",
      logoUrl: "/companylogos/icici.png",
      expenseRatio: "1.57%",
      return5Y: "21.67% p.a.",
    },
    {
      scheme: "HDFC Mid Cap Fund",
      company: "HDFC Mutual Fund",
      logoUrl: "/companylogos/absl.png",
      expenseRatio: "1.36%",
      return5Y: "21.32% p.a.",
    },
    {
      scheme: "Nippon India Growth Mid Cap Fund",
      company: "Nippon India Mutual Fund",
      logoUrl: "/companylogos/nippon.png",
      expenseRatio: "1.53%",
      return5Y: "21.15% p.a.",
    },
    {
      scheme: "Motilal Oswal Midcap Fund",
      company: "Motilal Oswal Mutual Fund",
      logoUrl: "/companylogos/motilal-oswal.png",
      expenseRatio: "1.57%",
      return5Y: "21.14% p.a.",
    },
  ],
  taxSaving: [
    {
      scheme: "Quant ELSS Tax Saver Fund",
      company: "Quant Mutual Fund",
      logoUrl: "/companylogos/quantum.png",
      expenseRatio: "1.66%",
      return5Y: "24.82% p.a.",
    },
    {
      scheme: "Mirae Asset Tax Saver Fund",
      company: "Mirae Asset Mutual Fund",
      logoUrl: "/companylogos/mirae.png",
      expenseRatio: "1.22%",
      return5Y: "20.64% p.a.",
    },
    {
      scheme: "Canara Robeco ELSS Tax Saver",
      company: "Canara Robeco Mutual Fund",
      logoUrl: "/companylogos/canara-robeco.png",
      expenseRatio: "1.18%",
      return5Y: "20.22% p.a.",
    },
    {
      scheme: "DSP ELSS Tax Saver Fund",
      company: "DSP Mutual Fund",
      logoUrl: "/companylogos/edelweiss.png",
      expenseRatio: "1.35%",
      return5Y: "19.94% p.a.",
    },
  ],
  hybrid: [
    {
      scheme: "ICICI Pru Equity Savings Fund",
      company: "ICICI Prudential",
      logoUrl: "/companylogos/icici.png",
      expenseRatio: "1.15%",
      return5Y: "13.84% p.a.",
    },
    {
      scheme: "HDFC Balanced Advantage Fund",
      company: "HDFC Mutual Fund",
      logoUrl: "/companylogos/absl.png",
      expenseRatio: "1.34%",
      return5Y: "13.53% p.a.",
    },
    {
      scheme: "SBI Equity Hybrid Fund",
      company: "SBI Mutual Fund",
      logoUrl: "/companylogos/sbi.png",
      expenseRatio: "1.45%",
      return5Y: "13.44% p.a.",
    },
    {
      scheme: "Kotak Equity Hybrid Fund",
      company: "Kotak Mutual Fund",
      logoUrl: "/companylogos/kotak.png",
      expenseRatio: "1.38%",
      return5Y: "12.98% p.a.",
    },
  ],
  debt: [
    {
      scheme: "ICICI Pru Corporate Bond Fund",
      company: "ICICI Prudential",
      logoUrl: "/companylogos/icici.png",
      expenseRatio: "0.58%",
      return5Y: "8.45% p.a.",
    },
    {
      scheme: "SBI Magnum Medium Duration Fund",
      company: "SBI Mutual Fund",
      logoUrl: "/companylogos/sbi.png",
      expenseRatio: "0.82%",
      return5Y: "8.31% p.a.",
    },
    {
      scheme: "HDFC Short Term Debt Fund",
      company: "HDFC Mutual Fund",
      logoUrl: "/companylogos/absl.png",
      expenseRatio: "0.72%",
      return5Y: "7.90% p.a.",
    },
    {
      scheme: "Nippon India Money Market Fund",
      company: "Nippon India Mutual Fund",
      logoUrl: "/companylogos/nippon.png",
      expenseRatio: "0.44%",
      return5Y: "7.26% p.a.",
    },
  ],
};

const tabLabels: Record<FundTab, string> = {
  equity: "Equity",
  taxSaving: "Tax Saving",
  hybrid: "Hybrid",
  debt: "Debt",
};

export default function ExploreMutualFundsHub() {
  const [activeAsset, setActiveAsset] = useState<AssetClass>("equity");
  const [activeTab, setActiveTab] = useState<FundTab>("equity");
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});
  const [liveReturns, setLiveReturns] = useState<Record<string, FundSnapshot>>({});

  const markLogoAsFailed = (key: string) => {
    setFailedLogos((previous) => ({ ...previous, [key]: true }));
  };

  const handleAssetChange = (asset: AssetClass) => {
    setActiveAsset(asset);
    if (asset === "equity" || asset === "debt" || asset === "hybrid") {
      setActiveTab(asset);
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
            funds: topPerformingFunds[activeTab].map((fund) => fund.scheme),
          }),
        });
        if (!response.ok) return;
        const payload = (await response.json()) as { data?: FundSnapshot[] };
        if (!payload?.data || !isMounted) return;

        setLiveReturns((previous) => {
          const next = { ...previous };
          payload.data.forEach((snapshot) => {
            next[snapshot.name] = snapshot;
          });
          return next;
        });
      } catch {
        // keep static values if API fails
      }
    };

    fetchReturns();
    return () => {
      isMounted = false;
    };
  }, [activeTab]);

  const getInitials = (company: string) => {
    return company
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className="relative overflow-hidden pt-20">
      <section className="relative px-4 pb-8 pt-10 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(4,180,136,0.14),transparent_26%),radial-gradient(circle_at_86%_12%,rgba(123,79,212,0.16),transparent_30%)] dark:bg-[radial-gradient(circle_at_12%_14%,rgba(4,180,136,0.2),transparent_24%),radial-gradient(circle_at_88%_14%,rgba(123,79,212,0.24),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/75 bg-white/84 p-6 shadow-[0_28px_80px_-46px_rgba(14,23,40,0.48)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/72 dark:shadow-[0_28px_80px_-40px_rgba(0,0,0,0.85)] sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(4,180,136,0.05),rgba(123,79,212,0.06))] dark:bg-[linear-gradient(135deg,rgba(4,180,136,0.08),rgba(123,79,212,0.12))]" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="inline-flex items-center rounded-full border border-[#04b488]/20 bg-[linear-gradient(90deg,rgba(4,180,136,0.12),rgba(123,79,212,0.08))] px-4 py-2 text-sm font-semibold text-[#00a57d] dark:border-[#04b488]/25 dark:text-[#7ff7cc]">
                Fund Discovery Hub
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-5xl">
                Find Mutual Funds by category
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4a5568] dark:text-slate-300 sm:text-lg">
                Compare equity, debt, and hybrid opportunities through a cleaner
                category map and a sharper performance screen built for faster fund discovery.
              </p>
            </div>

            <div className="rounded-[30px] border border-slate-200/80 bg-white/72 p-5 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7B4FD4]">
                {assetSpotlights[activeAsset].eyebrow}
              </p>
              <p className="mt-3 text-lg font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white">
                {assetSpotlights[activeAsset].insightValue}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#4a5568] dark:text-slate-300">
                {assetSpotlights[activeAsset].description}
              </p>
              <div className="mt-5 rounded-2xl border border-[#04b488]/18 bg-[linear-gradient(135deg,rgba(4,180,136,0.08),rgba(123,79,212,0.08))] px-4 py-3 dark:border-[#04b488]/20 dark:bg-[linear-gradient(135deg,rgba(4,180,136,0.08),rgba(123,79,212,0.14))]">
                <p className="text-sm font-semibold text-[#1a1560] dark:text-white">
                  {assetSpotlights[activeAsset].insightTitle}
                </p>
                <p className="mt-1 text-sm text-[#4a5568] dark:text-slate-300">
                  {assetSpotlights[activeAsset].insightDetail}
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-8 grid gap-4 md:grid-cols-3">
            {categoryCards.map((category) => {
              const Icon = category.icon;
              const isActive = activeAsset === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleAssetChange(category.id)}
                  className={`rounded-[28px] border p-5 text-left transition-all ${isActive
                      ? "border-[#04b488]/28 bg-[linear-gradient(135deg,rgba(4,180,136,0.12),rgba(123,79,212,0.08))] shadow-[0_20px_40px_-32px_rgba(4,180,136,0.7)] dark:border-[#04b488]/30 dark:bg-[linear-gradient(135deg,rgba(4,180,136,0.14),rgba(123,79,212,0.16))]"
                      : "border-slate-200 bg-white/80 hover:border-[#04b488]/25 dark:border-white/10 dark:bg-white/5 dark:hover:border-[#04b488]/22"
                    }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#04b488]/12 text-[#04b488] dark:bg-[#04b488]/14">
                      <Icon size={22} />
                    </span>
                    <div>
                      <p className="text-xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white">
                        {category.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[#4a5568] dark:text-slate-300">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[34px] border border-slate-200 bg-white/84 p-6 shadow-[0_24px_70px_-46px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/72 dark:shadow-[0_24px_70px_-42px_rgba(0,0,0,0.85)] sm:p-8">
          <div className="flex flex-col gap-3 border-b border-slate-200 pb-6 dark:border-white/10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#04b488]">
                Category Breakdown
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl">
                {categoryCards.find((card) => card.id === activeAsset)?.title}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-[#4a5568] dark:text-slate-300">
              Use the active category map to compare strategy buckets before narrowing down to the best-performing funds.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {categoryLayouts[activeAsset].columns.map((column, columnIndex) => (
              <div key={`column-${columnIndex}`} className="space-y-6">
                {column.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-[26px] bg-[#f8fffe] p-5 shadow-[0_18px_40px_-34px_rgba(14,23,40,0.35)] dark:bg-white/5"
                  >
                    <h3 className="text-2xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white">
                      {group.title}
                    </h3>
                    <div className="mt-4 divide-y divide-slate-200/60 dark:divide-white/10">
                      {group.items.map((item, index) => {
                        const Icon = item.icon;
                        const itemSlug = item.name.toLowerCase().replace(/[&\s]+/g, "-").replace(/-+/g, "-");

                        return (
                          <Link
                            key={item.name}
                            href={`/explore-mutual-funds/${activeAsset}/${itemSlug}`}
                          >
                            <motion.div
                              initial={{ opacity: 0, y: 6 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, amount: 0.5 }}
                              transition={{ duration: 0.3, delay: index * 0.04, ease: "easeOut" }}
                              whileHover={{ y: -2, scale: 1.01 }}
                              className="group grid cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-3 px-2 py-4 transition-colors hover:bg-white/70 dark:hover:bg-white/5"
                            >
                              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#04b488] shadow-sm dark:bg-slate-950/70">
                                <Icon size={20} />
                              </span>
                              <div>
                                <p className="text-lg font-semibold text-[#0f9a76] font-[family-name:var(--font-sora)] leading-tight dark:text-[#7ff7cc]">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm leading-relaxed text-[#4a5568] dark:text-slate-300">
                                  {item.detail}
                                </p>
                              </div>
                              <ArrowUpRight size={16} className="text-[#04b488] opacity-0 transition-opacity group-hover:opacity-100" />
                            </motion.div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 pt-2 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[34px] border border-slate-200 bg-white/84 p-6 shadow-[0_24px_70px_-46px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/72 dark:shadow-[0_24px_70px_-42px_rgba(0,0,0,0.85)] sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7B4FD4]">
                Performance Screen
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl">
                Top Performing Mutual Funds
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-2 rounded-[24px] border border-slate-200 bg-[#f5f7fb] p-2 dark:border-white/10 dark:bg-white/5 md:grid-cols-4">
              {(Object.keys(tabLabels) as FundTab[]).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${activeTab === tab
                      ? "bg-white text-[#00a57d] shadow-sm dark:bg-slate-950/80 dark:text-[#7ff7cc]"
                      : "text-[#4a5568] hover:text-[#1a1560] dark:text-slate-300 dark:hover:text-white"
                    }`}
                >
                  {tabLabels[tab]}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-[30px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(249,250,252,0.94))] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))]">
            <div className="hidden grid-cols-[1.6fr_0.5fr_0.5fr_0.36fr] border-b border-slate-200 px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#4a5568] dark:border-white/10 dark:text-slate-400 md:grid">
              <p>Scheme</p>
              <p>Expense Ratio</p>
              <p>5Y Return</p>
              <p />
            </div>

            {topPerformingFunds[activeTab].map((fund) => {
              const live = liveReturns[fund.scheme];
              const liveReturn5Y =
                live?.return5Y !== undefined ? `${live.return5Y.toFixed(2)}% p.a.` : fund.return5Y;

              return (
              <div
                key={fund.scheme}
                className="grid gap-3 border-b border-slate-200 px-4 py-4 last:border-b-0 dark:border-white/10 md:grid-cols-[1.6fr_0.5fr_0.5fr_0.36fr] md:items-center md:gap-6 md:px-6"
              >
                <div className="grid grid-cols-[auto_1fr] gap-4">
                  {failedLogos[fund.scheme] ? (
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1a1560] text-sm font-bold text-white dark:bg-white dark:text-[#1a1560]">
                      {getInitials(fund.company)}
                    </span>
                  ) : (
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white p-1 dark:border-white/10 dark:bg-slate-950/75">
                      <Image
                        src={fund.logoUrl}
                        alt={`${fund.company} official logo`}
                        className="h-10 w-10 object-contain"
                        width={40}
                        height={40}
                        unoptimized
                        onError={() => markLogoAsFailed(fund.scheme)}
                      />
                    </span>
                  )}
                  <div>
                    <p className="text-base font-semibold text-[#1a1560] dark:text-white">{fund.scheme}</p>
                    <p className="text-sm text-[#4a5568] dark:text-slate-400">
                      ETM Rank: App exclusive
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[#4a5568] dark:text-slate-300">{fund.expenseRatio}</p>
                <p className="text-sm font-semibold text-[#00a761] dark:text-[#7ff7cc]">{liveReturn5Y}</p>
                <div className="pt-1 md:pt-0">
                  <Link
                    href="/signup"
                    className="inline-flex h-10 min-w-28 items-center justify-center rounded-full border border-[#04b488]/28 bg-[linear-gradient(135deg,rgba(4,180,136,0.08),rgba(4,180,136,0.16))] px-5 text-sm font-semibold text-[#00a761] transition-colors hover:bg-[#04b488]/14 dark:border-[#04b488]/25 dark:text-[#7ff7cc] md:h-11 md:min-w-32 md:text-base"
                  >
                    Invest
                  </Link>
                </div>
              </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 text-lg font-semibold text-[#00a761] transition-colors hover:text-[#008d52] dark:text-[#7ff7cc] dark:hover:text-white"
            >
              Show all top performing {tabLabels[activeTab].toLowerCase()} funds
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
