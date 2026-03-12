"use client";

import { HeroSection } from "@/components/ui/hero-section-2";

const trendingFunds = [
  {
    name: "SBI Small Cap Fund",
    plan: "Regular - Growth",
    returnPct: "11%",
    navDate: "11 Mar 26",
    navValue: "46.81",
    navChange: "+0.32%",
    risk: "High",
  },
  {
    schemeCode: "100236",
    name: "HDFC Flexi Cap Fund",
    plan: "Regular - Growth",
    returnPct: "9%",
    navDate: "11 Mar 26",
    navValue: "182.40",
    navChange: "+0.21%",
    risk: "Moderate",
  },
  {
    name: "ICICI Prudential Bluechip Fund",
    plan: "Regular - Growth",
    returnPct: "8%",
    navDate: "11 Mar 26",
    navValue: "71.63",
    navChange: "+0.18%",
    risk: "Moderate",
  },
  {
    name: "Axis Growth Opportunities Fund",
    plan: "Regular - Growth",
    returnPct: "10%",
    navDate: "11 Mar 26",
    navValue: "58.12",
    navChange: "+0.27%",
    risk: "High",
  },
  {
    name: "Nippon India Large Cap Fund",
    plan: "Regular - Growth",
    returnPct: "7%",
    navDate: "11 Mar 26",
    navValue: "42.77",
    navChange: "+0.12%",
    risk: "Moderate",
  },
  {
    name: "Kotak Emerging Equity Fund",
    plan: "Regular - Growth",
    returnPct: "12%",
    navDate: "11 Mar 26",
    navValue: "93.06",
    navChange: "+0.39%",
    risk: "High",
  },
];

export default function Hero() {
  const renderTickerItems = (keyPrefix: string) =>
    trendingFunds.map((fund) => (
      <div
        key={`${keyPrefix}-${fund.name}`}
        className="flex items-center gap-6 px-6 py-3"
      >
        <div className="min-w-[220px]">
          <p className="text-sm font-semibold text-[#1a1560]">{fund.name}</p>
          <p className="text-[11px] text-slate-500">
            {fund.returnPct} {fund.plan}
          </p>
        </div>
        <div className="min-w-[120px]">
          <p className="text-[11px] uppercase tracking-wider text-slate-400">NAV (As on {fund.navDate})</p>
          <p className="mt-1 text-sm font-semibold text-[#1a1560]">₹{fund.navValue}</p>
        </div>
        <div className="flex min-w-[110px] items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#04b488]/12 text-[#04b488]">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 15l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-sm font-semibold text-[#04b488]">{fund.navChange}</span>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-[11px] font-semibold ${fund.risk === "High"
            ? "bg-[#f97316]/10 text-[#f97316]"
            : "bg-[#7B4FD4]/10 text-[#7B4FD4]"
            }`}
        >
          {fund.risk} Risk
        </span>
      </div>
    ));

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-0 pb-12 pt-20 sm:pt-20 lg:pt-20"
    >
      <HeroSection
        className="min-h-[85vh]"
        title={
          <>
            India&apos;s Leading All-in-One{" "}
            <br />
            <span className="bg-[linear-gradient(135deg,#04b488,#7B4FD4)] bg-clip-text text-transparent">
              Mutual Funds
            </span>{" "}
            Platform
          </>
        }
        subtitle="Streamline your SIP investments, discover top-performing funds, and build long-term wealth - all from one beautifully simple platform."
        callToAction={{
          text: "START INVESTING FREE ->",
          href: "/signup",
        }}
        backgroundImage="/images/Untitled-design-3.png"
      />

      <div className="mt-8 w-full">
        <div className="relative w-full overflow-hidden bg-[#f8fffe] py-4">
          <div className="finlec-marquee flex w-max items-center gap-8 py-2 text-sm">
            <div className="flex items-center gap-6 px-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#04b488]">
                Trending Funds this month
              </span>
              {renderTickerItems("a")}
            </div>
            <div className="flex items-center gap-6 px-6" aria-hidden="true">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#04b488]">
                Trending Funds this month
              </span>
              {renderTickerItems("b")}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes finlec-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .finlec-marquee {
          animation: finlec-marquee 36s linear infinite;
        }
      `}</style>
    </section>
  );
}
