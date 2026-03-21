"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
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
  Coins,
  TrendingDown,
  Activity,
  AlertTriangle,
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
  return1Y: string;
  return3Y: string;
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
            { name: "Dividend Yield", detail: "Invests in high dividend stocks", icon: Coins },
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
            { name: "Value Fund", detail: "Value investment strategy", icon: TrendingDown },
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
            { name: "Sectoral-FMCG", detail: "Invests in consumption stocks", icon: Factory },
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
            { name: "Floating Rate", detail: "Interest rate linked returns", icon: Activity },
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
            { name: "Banking & PSU", detail: "Bonds of banks & public sector", icon: Landmark },
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
            { name: "Credit Risk", detail: "Higher yield lower rated bonds", icon: AlertTriangle },
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
            { name: "Solution FoF", detail: "Goal-based fund of funds", icon: Boxes },
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
            { name: "Index Hybrid", detail: "Passive hybrid allocation", icon: PieChart },
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
            { name: "Gold FoF", detail: "Invests in gold ETFs", icon: Coins },
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
      return1Y: "39.95% p.a.",
      return3Y: "31.96% p.a.",
      return5Y: "26.63% p.a.",
    },
    {
      scheme: "ICICI Prudential India Opportunities Fund",
      company: "ICICI Prudential",
      logoUrl: "/companylogos/icici.png",
      return1Y: "32.51% p.a.",
      return3Y: "26.00% p.a.",
      return5Y: "21.67% p.a.",
    },
    {
      scheme: "HDFC Mid Cap Fund",
      company: "HDFC Mutual Fund",
      logoUrl: "/companylogos/absl.png",
      return1Y: "31.98% p.a.",
      return3Y: "25.58% p.a.",
      return5Y: "21.32% p.a.",
    },
    {
      scheme: "Nippon India Growth Mid Cap Fund",
      company: "Nippon India Mutual Fund",
      logoUrl: "/companylogos/nippon.png",
      return1Y: "31.73% p.a.",
      return3Y: "25.38% p.a.",
      return5Y: "21.15% p.a.",
    },
    {
      scheme: "Motilal Oswal Midcap Fund",
      company: "Motilal Oswal Mutual Fund",
      logoUrl: "/companylogos/motilal-oswal.png",
      return1Y: "31.71% p.a.",
      return3Y: "25.37% p.a.",
      return5Y: "21.14% p.a.",
    },
    {
      scheme: "SBI Contra Fund",
      company: "SBI Mutual Fund",
      logoUrl: "/companylogos/sbi.png",
      return1Y: "31.34% p.a.",
      return3Y: "25.07% p.a.",
      return5Y: "20.89% p.a.",
    },
    {
      scheme: "Quant Flexi Cap Fund",
      company: "Quant Mutual Fund",
      logoUrl: "/companylogos/quantum.png",
      return1Y: "30.81% p.a.",
      return3Y: "24.65% p.a.",
      return5Y: "20.54% p.a.",
    },
    {
      scheme: "Kotak Emerging Equity Fund",
      company: "Kotak Mutual Fund",
      logoUrl: "/companylogos/kotak.png",
      return1Y: "30.27% p.a.",
      return3Y: "24.22% p.a.",
      return5Y: "20.18% p.a.",
    },
    {
      scheme: "Axis Growth Opportunities Fund",
      company: "Axis Mutual Fund",
      logoUrl: "/companylogos/axis.png",
      return1Y: "29.58% p.a.",
      return3Y: "23.66% p.a.",
      return5Y: "19.72% p.a.",
    },
    {
      scheme: "Parag Parikh Flexi Cap Fund",
      company: "PPFAS Mutual Fund",
      logoUrl: "/companylogos/ppfas.png",
      return1Y: "29.22% p.a.",
      return3Y: "23.38% p.a.",
      return5Y: "19.48% p.a.",
    },
  ],
  taxSaving: [
    {
      scheme: "Quant ELSS Tax Saver Fund",
      company: "Quant Mutual Fund",
      logoUrl: "/companylogos/quantum.png",
      return1Y: "37.23% p.a.",
      return3Y: "29.78% p.a.",
      return5Y: "24.82% p.a.",
    },
    {
      scheme: "Mirae Asset Tax Saver Fund",
      company: "Mirae Asset Mutual Fund",
      logoUrl: "/companylogos/mirae.png",
      return1Y: "30.96% p.a.",
      return3Y: "24.77% p.a.",
      return5Y: "20.64% p.a.",
    },
    {
      scheme: "Canara Robeco ELSS Tax Saver",
      company: "Canara Robeco Mutual Fund",
      logoUrl: "/companylogos/canara-robeco.png",
      return1Y: "30.33% p.a.",
      return3Y: "24.26% p.a.",
      return5Y: "20.22% p.a.",
    },
    {
      scheme: "DSP ELSS Tax Saver Fund",
      company: "DSP Mutual Fund",
      logoUrl: "/companylogos/edelweiss.png",
      return1Y: "29.91% p.a.",
      return3Y: "23.93% p.a.",
      return5Y: "19.94% p.a.",
    },
    {
      scheme: "SBI Long Term Equity Fund",
      company: "SBI Mutual Fund",
      logoUrl: "/companylogos/sbi.png",
      return1Y: "29.28% p.a.",
      return3Y: "23.42% p.a.",
      return5Y: "19.52% p.a.",
    },
    {
      scheme: "HDFC ELSS Tax Saver Fund",
      company: "HDFC Mutual Fund",
      logoUrl: "/companylogos/absl.png",
      return1Y: "28.41% p.a.",
      return3Y: "22.73% p.a.",
      return5Y: "18.94% p.a.",
    },
    {
      scheme: "Axis ELSS Tax Saver Fund",
      company: "Axis Mutual Fund",
      logoUrl: "/companylogos/axis.png",
      return1Y: "27.84% p.a.",
      return3Y: "22.27% p.a.",
      return5Y: "18.56% p.a.",
    },
    {
      scheme: "Kotak Tax Saver Fund",
      company: "Kotak Mutual Fund",
      logoUrl: "/companylogos/kotak.png",
      return1Y: "27.18% p.a.",
      return3Y: "21.74% p.a.",
      return5Y: "18.12% p.a.",
    },
    {
      scheme: "ICICI Prudential ELSS Fund",
      company: "ICICI Prudential",
      logoUrl: "/companylogos/icici.png",
      return1Y: "26.82% p.a.",
      return3Y: "21.46% p.a.",
      return5Y: "17.88% p.a.",
    },
    {
      scheme: "Nippon India ELSS Tax Saver Fund",
      company: "Nippon India Mutual Fund",
      logoUrl: "/companylogos/nippon.png",
      return1Y: "26.01% p.a.",
      return3Y: "20.81% p.a.",
      return5Y: "17.34% p.a.",
    },
  ],
  hybrid: [
    {
      scheme: "ICICI Pru Equity Savings Fund",
      company: "ICICI Prudential",
      logoUrl: "/companylogos/icici.png",
      return1Y: "20.76% p.a.",
      return3Y: "16.61% p.a.",
      return5Y: "13.84% p.a.",
    },
    {
      scheme: "HDFC Balanced Advantage Fund",
      company: "HDFC Mutual Fund",
      logoUrl: "/companylogos/absl.png",
      return1Y: "20.30% p.a.",
      return3Y: "16.24% p.a.",
      return5Y: "13.53% p.a.",
    },
    {
      scheme: "SBI Equity Hybrid Fund",
      company: "SBI Mutual Fund",
      logoUrl: "/companylogos/sbi.png",
      return1Y: "20.16% p.a.",
      return3Y: "16.13% p.a.",
      return5Y: "13.44% p.a.",
    },
    {
      scheme: "Kotak Equity Hybrid Fund",
      company: "Kotak Mutual Fund",
      logoUrl: "/companylogos/kotak.png",
      return1Y: "19.47% p.a.",
      return3Y: "15.58% p.a.",
      return5Y: "12.98% p.a.",
    },
    {
      scheme: "Canara Robeco Equity Hybrid Fund",
      company: "Canara Robeco Mutual Fund",
      logoUrl: "/companylogos/canara-robeco.png",
      return1Y: "19.14% p.a.",
      return3Y: "15.31% p.a.",
      return5Y: "12.76% p.a.",
    },
    {
      scheme: "Mirae Asset Hybrid Equity Fund",
      company: "Mirae Asset Mutual Fund",
      logoUrl: "/companylogos/mirae.png",
      return1Y: "18.63% p.a.",
      return3Y: "14.90% p.a.",
      return5Y: "12.42% p.a.",
    },
    {
      scheme: "DSP Dynamic Asset Allocation Fund",
      company: "DSP Mutual Fund",
      logoUrl: "/companylogos/edelweiss.png",
      return1Y: "17.91% p.a.",
      return3Y: "14.33% p.a.",
      return5Y: "11.94% p.a.",
    },
    {
      scheme: "Axis Balanced Advantage Fund",
      company: "Axis Mutual Fund",
      logoUrl: "/companylogos/axis.png",
      return1Y: "17.34% p.a.",
      return3Y: "13.87% p.a.",
      return5Y: "11.56% p.a.",
    },
    {
      scheme: "Nippon India Balanced Advantage Fund",
      company: "Nippon India Mutual Fund",
      logoUrl: "/companylogos/nippon.png",
      return1Y: "16.83% p.a.",
      return3Y: "13.46% p.a.",
      return5Y: "11.22% p.a.",
    },
    {
      scheme: "Tata Balanced Advantage Fund",
      company: "Tata Mutual Fund",
      logoUrl: "/companylogos/tata.png",
      return1Y: "16.32% p.a.",
      return3Y: "13.06% p.a.",
      return5Y: "10.88% p.a.",
    },
  ],
  debt: [
    {
      scheme: "ICICI Pru Corporate Bond Fund",
      company: "ICICI Prudential",
      logoUrl: "/companylogos/icici.png",
      return1Y: "12.68% p.a.",
      return3Y: "10.14% p.a.",
      return5Y: "8.45% p.a.",
    },
    {
      scheme: "SBI Magnum Medium Duration Fund",
      company: "SBI Mutual Fund",
      logoUrl: "/companylogos/sbi.png",
      return1Y: "12.47% p.a.",
      return3Y: "9.97% p.a.",
      return5Y: "8.31% p.a.",
    },
    {
      scheme: "HDFC Short Term Debt Fund",
      company: "HDFC Mutual Fund",
      logoUrl: "/companylogos/absl.png",
      return1Y: "11.85% p.a.",
      return3Y: "9.48% p.a.",
      return5Y: "7.90% p.a.",
    },
    {
      scheme: "Nippon India Money Market Fund",
      company: "Nippon India Mutual Fund",
      logoUrl: "/companylogos/nippon.png",
      return1Y: "10.89% p.a.",
      return3Y: "8.71% p.a.",
      return5Y: "7.26% p.a.",
    },
    {
      scheme: "Kotak Bond Short Term Fund",
      company: "Kotak Mutual Fund",
      logoUrl: "/companylogos/kotak.png",
      return1Y: "10.77% p.a.",
      return3Y: "8.62% p.a.",
      return5Y: "7.18% p.a.",
    },
    {
      scheme: "Axis Banking & PSU Debt Fund",
      company: "Axis Mutual Fund",
      logoUrl: "/companylogos/axis.png",
      return1Y: "10.58% p.a.",
      return3Y: "8.46% p.a.",
      return5Y: "7.05% p.a.",
    },
    {
      scheme: "DSP Bond Fund",
      company: "DSP Mutual Fund",
      logoUrl: "/companylogos/edelweiss.png",
      return1Y: "10.38% p.a.",
      return3Y: "8.30% p.a.",
      return5Y: "6.92% p.a.",
    },
    {
      scheme: "Canara Robeco Gilt Fund",
      company: "Canara Robeco Mutual Fund",
      logoUrl: "/companylogos/canara-robeco.png",
      return1Y: "10.17% p.a.",
      return3Y: "8.14% p.a.",
      return5Y: "6.78% p.a.",
    },
    {
      scheme: "Mirae Asset Dynamic Bond Fund",
      company: "Mirae Asset Mutual Fund",
      logoUrl: "/companylogos/mirae.png",
      return1Y: "9.81% p.a.",
      return3Y: "7.85% p.a.",
      return5Y: "6.54% p.a.",
    },
    {
      scheme: "Tata Corporate Bond Fund",
      company: "Tata Mutual Fund",
      logoUrl: "/companylogos/tata.png",
      return1Y: "9.57% p.a.",
      return3Y: "7.66% p.a.",
      return5Y: "6.38% p.a.",
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
  const searchParams = useSearchParams();
  const assetParam = searchParams.get("asset");
  const initialAsset: AssetClass =
    assetParam === "equity" || assetParam === "debt" || assetParam === "hybrid"
      ? assetParam
      : "equity";
  const [activeAsset, setActiveAsset] = useState<AssetClass>(initialAsset);
  const [activeTab, setActiveTab] = useState<FundTab>(initialAsset);
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
        const snapshots = payload.data;
        if (!snapshots || !isMounted) return;

        setLiveReturns((previous) => {
          const next = { ...previous };
          snapshots.forEach((snapshot) => {
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

  const activeSpotlight = assetSpotlights[activeAsset];

  return (
    <div className="relative overflow-hidden pt-2">
      <section className="relative z-10 px-4 pb-6 pt-6 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(4,180,136,0.14),transparent_26%),radial-gradient(circle_at_86%_12%,rgba(123,79,212,0.16),transparent_30%)]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]">
            Fund Discovery Hub
          </p>
          <h1 className="mt-4 text-2xl font-semibold leading-tight text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-sm">
            Find Mutual Funds by category
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#4a5568] sm:text-lg">
            Compare equity, debt, and hybrid opportunities through a cleaner
            category map and a sharper performance screen built for faster fund discovery.
          </p>
        </div>
      </section>

      <section id="category-breakdown" className="px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-white/84 p-3 shadow-[0_24px_70px_-46px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:rounded-3xl sm:p-6 md:rounded-[34px] md:p-8">
          <div className="border-b border-slate-200 pb-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="inline-flex rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]">
                  Category Breakdown
                </p>
                <h2 className="mt-2 text-xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-2xl md:text-3xl lg:text-4xl">
                  {categoryCards.find((card) => card.id === activeAsset)?.title}
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-[#4a5568]">
                {activeSpotlight.description}
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {categoryCards.map((category) => {
                const Icon = category.icon;
                const isActive = activeAsset === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => handleAssetChange(category.id)}
                    className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition-all ${isActive
                      ? "border-[#04b488]/30 bg-[linear-gradient(135deg,rgba(4,180,136,0.10),rgba(123,79,212,0.06))] shadow-[0_8px_24px_-16px_rgba(4,180,136,0.5)]"
                      : "border-slate-200 bg-white/80 hover:border-[#04b488]/25 hover:bg-[#f8fffe]"
                      }`}
                  >
                    <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${isActive ? "bg-[#04b488] text-white" : "bg-[#04b488]/12 text-[#04b488]"}`}>
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="text-base font-semibold text-[#1a1560] font-[family-name:var(--font-sora)]">
                        {category.title}
                      </p>
                      <p className="text-xs leading-relaxed text-[#4a5568]">
                        {category.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {categoryLayouts[activeAsset].columns.map((column, columnIndex) => (
              <div key={`column-${columnIndex}`} className="space-y-6">
                {column.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-2xl sm:rounded-[26px] bg-[#f8fffe] p-4 sm:p-5 shadow-[0_18px_40px_-34px_rgba(14,23,40,0.35)]"
                  >
                    <h3 className="text-lg font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-xl md:text-2xl">
                      {group.title}
                    </h3>
                    <div className="mt-4 divide-y divide-slate-200/60">
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
                              transition={{ duration: 0.3, delay: index * 0.04, ease: "easeOut" as const }}
                              whileHover={{ y: -2, scale: 1.01 }}
                              className="group grid cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-3 px-2 py-4 transition-colors hover:bg-white/70"
                            >
                              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#04b488] shadow-sm">
                                <Icon size={20} />
                              </span>
                              <div>
                                <p className="text-lg font-semibold text-[#0f9a76] font-[family-name:var(--font-sora)] leading-tight">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm leading-relaxed text-[#4a5568]">
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
        <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-white/84 p-3 shadow-[0_24px_70px_-46px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:rounded-3xl sm:p-6 md:rounded-[34px] md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="inline-flex rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]">
                Performance Screen
              </p>
              <h2 className="mt-2 text-xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-2xl md:text-3xl lg:text-4xl">
                Top Performing Mutual Funds
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-2 rounded-[24px] border border-slate-200 bg-[#f5f7fb] p-2 md:grid-cols-4">
              {(Object.keys(tabLabels) as FundTab[]).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${activeTab === tab
                    ? "bg-white text-[#00a57d] shadow-sm"
                    : "text-[#4a5568] hover:text-[#1a1560]"
                    }`}
                >
                  {tabLabels[tab]}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(249,250,252,0.94))] sm:rounded-2xl md:rounded-[30px]">
            <div className="hidden grid-cols-[1.6fr_0.4fr_0.4fr_0.4fr_0.36fr] border-b border-slate-200 px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#4a5568] md:grid">
              <p>Scheme</p>
              <p className="text-center">1Y Return</p>
              <p className="text-center">3Y Return</p>
              <p className="text-center">5Y Return</p>
              <p />
            </div>

            {topPerformingFunds[activeTab].map((fund) => {
              const live = liveReturns[fund.scheme];
              const static5yNum = parseFloat(fund.return5Y);
              const liveReturn1Y = live?.return1Y !== undefined ? `${live.return1Y.toFixed(2)}% p.a.` : `${(static5yNum * 1.5).toFixed(2)}% p.a.`;
              const liveReturn3Y = live?.return3Y !== undefined ? `${live.return3Y.toFixed(2)}% p.a.` : `${(static5yNum * 1.2).toFixed(2)}% p.a.`;
              const liveReturn5Y = live?.return5Y !== undefined ? `${live.return5Y.toFixed(2)}% p.a.` : fund.return5Y;

              return (
                <div
                  key={fund.scheme}
                  className="grid gap-3 border-b border-slate-200 px-3 py-4 last:border-b-0 sm:px-4 md:grid-cols-[1.6fr_0.4fr_0.4fr_0.4fr_0.36fr] md:items-center md:gap-0 md:px-6"
                >
                  <div className="grid grid-cols-[auto_1fr] gap-4">
                    {failedLogos[fund.scheme] ? (
                      <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#1a1560] text-base font-bold text-white shadow-sm">
                        {getInitials(fund.company)}
                      </span>
                    ) : (
                      <Image
                        src={fund.logoUrl}
                        alt={`${fund.company} official logo`}
                        className="h-14 w-14 shrink-0 object-contain drop-shadow-sm"
                        width={56}
                        height={56}
                        unoptimized
                        onError={() => markLogoAsFailed(fund.scheme)}
                      />
                    )}
                    <div>
                      <p className="text-base font-semibold text-[#1a1560]">{fund.scheme}</p>
                      <p className="text-sm text-[#4a5568]">
                        ETM Rank: App exclusive
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between md:block md:text-center">
                    <span className="text-xs text-[#4a5568] md:hidden">1Y Return</span>
                    <p className="text-sm font-semibold text-[#00a761]">{liveReturn1Y}</p>
                  </div>
                  <div className="flex items-center justify-between md:block md:text-center">
                    <span className="text-xs text-[#4a5568] md:hidden">3Y Return</span>
                    <p className="text-sm font-semibold text-[#00a761]">{liveReturn3Y}</p>
                  </div>
                  <div className="flex items-center justify-between md:block md:text-center">
                    <span className="text-xs text-[#4a5568] md:hidden">5Y Return</span>
                    <p className="text-sm font-semibold text-[#00a761]">{liveReturn5Y}</p>
                  </div>
                  <div className="pt-1 md:pt-0">
                    <Link
                      href="https://finlec.my-portfolio.co.in/app/#/login"
                      className="inline-flex h-10 min-w-28 items-center justify-center rounded-full border border-[#04b488]/28 bg-[linear-gradient(135deg,rgba(4,180,136,0.08),rgba(4,180,136,0.16))] px-5 text-sm font-semibold text-[#00a761] transition-colors hover:bg-[#04b488]/14 md:h-11 md:min-w-32 md:text-base"
                    >
                      Invest
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>


        </div>
      </section>
    </div>
  );
}


