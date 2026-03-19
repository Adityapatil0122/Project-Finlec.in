/* ═══════════════════════════════════════════════════
   H Y B R I D   F U N D S
   ═══════════════════════════════════════════════════ */

import type { FundCategoryInfo } from "./fundCategoryData";

const hybridFunds: FundCategoryInfo[] = [
  {
    slug: "aggressive-hybrid", parentCategory: "hybrid", title: "Aggressive Hybrid Funds", description: "Equity-heavy allocation (65-80%) with a debt cushion for smoother long-term returns.",
    avgReturn: "14.85%", fundCount: 22, riskLevel: "Moderately High", minInvestment: "₹500", idealHorizon: "5+ years",
    whatIs: "Aggressive Hybrid funds invest 65-80% in equities and 20-35% in debt instruments. The debt component cushions against equity volatility, resulting in smoother return profiles than pure equity funds while still capturing most of the equity upside.",
    advantages: ["Built-in asset allocation — equity + debt in one fund", "Automatic rebalancing between equity and debt", "Smoother ride than pure equity funds", "Tax-efficient — equity taxation applies (65%+ in equity)"],
    howItWorks: "The fund maintains 65-80% in equities (ensuring equity taxation) and 20-35% in debt. The fund manager rebalances between asset classes based on market conditions. When equities rise, profits are partially booked into debt, and vice versa.",
    whoShouldInvest: ["First-time equity investors wanting reduced volatility", "Investors seeking automatic asset allocation", "Those with 5+ year horizon wanting moderate risk"],
    taxation: "Equity taxation applies (65%+ equity) — STCG at 20%, LTCG tax-free up to ₹1.25L, 12.5% above.",
    faqs: [{ question: "Is aggressive hybrid good for beginners?", answer: "Yes, it's one of the best starting points — you get equity exposure with a built-in debt cushion." }],
    topFunds: [
      { scheme: "ICICI Prudential Equity & Debt Fund", company: "ICICI Prudential MF", expenseRatio: "1.02%", return1Y: "13.5%", return3Y: "17.8%", return5Y: "15.2%" },
      { scheme: "SBI Equity Hybrid Fund", company: "SBI MF", expenseRatio: "0.72%", return1Y: "12.8%", return3Y: "16.5%", return5Y: "14.6%" },
      { scheme: "HDFC Hybrid Equity Fund", company: "HDFC MF", expenseRatio: "0.89%", return1Y: "11.2%", return3Y: "15.8%", return5Y: "13.9%" },
      { scheme: "Canara Robeco Equity Hybrid Fund", company: "Canara Robeco MF", expenseRatio: "0.58%", return1Y: "10.5%", return3Y: "14.9%", return5Y: "13.2%" },
    ],
  },
  {
    slug: "balanced-hybrid", parentCategory: "hybrid", title: "Balanced Hybrid Funds", description: "Equal-weight approach with 40-60% each in equity and debt for true balance.",
    avgReturn: "10.65%", fundCount: 8, riskLevel: "Moderate", minInvestment: "₹500", idealHorizon: "3 – 5 years",
    whatIs: "Balanced Hybrid funds allocate 40-60% each to equity and debt. Unlike aggressive hybrid funds, they maintain a more even split, resulting in lower volatility but also lower return potential.",
    advantages: ["True 50-50 asset allocation", "Lower volatility than aggressive hybrid", "Suitable for conservative equity exposure"],
    howItWorks: "The fund maintains roughly equal allocation to equity and debt, with no more than 60% in either. This creates a naturally balanced portfolio that dampens equity volatility significantly.",
    whoShouldInvest: ["Conservative investors wanting some equity exposure", "Those nearing retirement", "Investors with 3-5 year horizons"],
    taxation: "If equity allocation is 40-65%, debt taxation applies — gains taxed at slab rate.",
    faqs: [{ question: "Why is it less popular than aggressive hybrid?", answer: "Aggressive hybrid gets equity taxation (more efficient) and higher returns, making it more popular despite higher volatility." }],
    topFunds: [
      { scheme: "HDFC Balanced Advantage Fund", company: "HDFC MF", expenseRatio: "0.74%", return1Y: "10.8%", return3Y: "13.2%", return5Y: "11.5%" },
      { scheme: "ICICI Prudential Balanced Advantage Fund", company: "ICICI Prudential MF", expenseRatio: "0.82%", return1Y: "10.2%", return3Y: "12.8%", return5Y: "11.1%" },
    ],
  },
  {
    slug: "dynamic-asset-allocation", parentCategory: "hybrid", title: "Dynamic Asset Allocation Funds", description: "Automatically shifts between equity and debt based on market valuations.",
    avgReturn: "11.92%", fundCount: 20, riskLevel: "Moderate", minInvestment: "₹500", idealHorizon: "3+ years",
    whatIs: "Also known as Balanced Advantage Funds, these funds dynamically adjust their equity-debt split based on market valuations. When markets are expensive, they reduce equity; when markets are cheap, they increase it.",
    advantages: ["Automatic market-timing through valuation models", "Reduces impact of market crashes", "Lower drawdowns compared to pure equity", "Ideal for investors who worry about market timing"],
    howItWorks: "The fund uses quantitative models (P/E, P/B ratios of Nifty) to determine equity allocation. Some use derivatives to manage effective equity exposure while maintaining tax efficiency.",
    whoShouldInvest: ["Investors worried about entering markets at highs", "Those wanting automated asset allocation", "First-time investors seeking managed equity exposure"],
    taxation: "Most BAFs maintain 65%+ equity (including arbitrage) for equity taxation — STCG at 20%, LTCG 12.5%.",
    faqs: [{ question: "Is this the best fund for beginners?", answer: "It's one of the best options — automatic rebalancing means you don't need to time the market." }],
    topFunds: [
      { scheme: "HDFC Balanced Advantage Fund", company: "HDFC MF", expenseRatio: "0.74%", return1Y: "12.1%", return3Y: "14.5%", return5Y: "12.8%" },
      { scheme: "ICICI Prudential Balanced Advantage Fund", company: "ICICI Prudential MF", expenseRatio: "0.82%", return1Y: "11.5%", return3Y: "13.8%", return5Y: "12.2%" },
      { scheme: "Kotak Balanced Advantage Fund", company: "Kotak MF", expenseRatio: "0.58%", return1Y: "10.8%", return3Y: "13.1%", return5Y: "11.6%" },
    ],
  },
  {
    slug: "conservative-hybrid", parentCategory: "hybrid", title: "Conservative Hybrid Funds", description: "Debt-heavy (75-90%) with limited equity for incremental returns.",
    avgReturn: "8.42%", fundCount: 14, riskLevel: "Low to Moderate", minInvestment: "₹500", idealHorizon: "2 – 3 years",
    whatIs: "Conservative Hybrid funds invest 75-90% in debt and 10-25% in equity. The small equity component adds incremental returns over pure debt funds while keeping overall volatility low.",
    advantages: ["Better returns than pure debt funds", "Very limited equity risk exposure", "Suitable for risk-averse investors", "Steady income generation"],
    howItWorks: "The portfolio is dominated by high-quality debt instruments with a small equity allocation for incremental returns. The equity portion is typically invested in large-cap stocks for stability.",
    whoShouldInvest: ["Risk-averse investors wanting slight equity exposure", "Senior citizens seeking steady income", "Those with 2-3 year horizons"],
    taxation: "Debt taxation — gains taxed at your income tax slab rate.",
    faqs: [{ question: "Better than FD?", answer: "Over 2-3 years, conservative hybrid funds have historically delivered 1-2% higher returns than FDs, though with slight NAV volatility." }],
    topFunds: [
      { scheme: "SBI Conservative Hybrid Fund", company: "SBI MF", expenseRatio: "0.62%", return1Y: "8.8%", return3Y: "8.2%", return5Y: "7.8%" },
      { scheme: "HDFC Hybrid Debt Fund", company: "HDFC MF", expenseRatio: "0.72%", return1Y: "8.5%", return3Y: "7.9%", return5Y: "7.5%" },
    ],
  },
  {
    slug: "equity-savings", parentCategory: "hybrid", title: "Equity Savings Funds", description: "Triple mix of equity, arbitrage, and debt for low-volatility equity exposure.",
    avgReturn: "9.18%", fundCount: 16, riskLevel: "Low to Moderate", minInvestment: "₹500", idealHorizon: "2+ years",
    whatIs: "Equity Savings funds invest in a combination of equity, arbitrage, and debt. The arbitrage component provides low-risk equity-like returns, while direct equity and debt provide growth and stability respectively.",
    advantages: ["Triple diversification — equity + arbitrage + debt", "Lower volatility than aggressive hybrid", "Tax-efficient due to 65%+ equity+arbitrage", "Ideal stepping stone into equity investing"],
    howItWorks: "Typically 20-40% in direct equity, 25-40% in arbitrage positions, and the rest in debt. The arbitrage portion captures price differences between cash and futures markets with minimal risk.",
    whoShouldInvest: ["Conservative investors wanting tax-efficient returns", "Those transitioning from FDs to equity", "Investors seeking low-volatility equity exposure"],
    taxation: "Equity taxation (65%+ in equity including arbitrage) — STCG at 20%, LTCG 12.5%.",
    faqs: [{ question: "What is arbitrage?", answer: "Arbitrage involves simultaneously buying stocks in the cash market and selling in the futures market to lock in a small profit with near-zero risk." }],
    topFunds: [
      { scheme: "HDFC Equity Savings Fund", company: "HDFC MF", expenseRatio: "0.68%", return1Y: "9.5%", return3Y: "9.1%", return5Y: "8.5%" },
      { scheme: "ICICI Prudential Equity Savings Fund", company: "ICICI Prudential MF", expenseRatio: "0.74%", return1Y: "9.2%", return3Y: "8.8%", return5Y: "8.2%" },
    ],
  },
  {
    slug: "arbitrage", parentCategory: "hybrid", title: "Arbitrage Funds", description: "Market-neutral strategy capturing price differences between cash and futures markets.",
    avgReturn: "7.15%", fundCount: 22, riskLevel: "Low", minInvestment: "₹500", idealHorizon: "3+ months",
    whatIs: "Arbitrage funds exploit pricing differences between the cash (spot) and futures (derivatives) markets. They buy shares in the cash market and simultaneously sell the same in the futures market, locking in a small spread with minimal risk.",
    advantages: ["Near risk-free returns from arbitrage spreads", "Equity taxation benefit (65%+ in equity)", "Better post-tax returns than liquid/ultra-short funds", "Very low volatility"],
    howItWorks: "The fund buys stocks in the cash market and simultaneously sells matching futures contracts. The price difference (spread) is the return. On expiry, positions are squared off, and new ones are created.",
    whoShouldInvest: ["Investors in higher tax brackets seeking tax-efficient short-term parking", "Those wanting liquid fund-like safety with equity taxation"],
    taxation: "Equity taxation — STCG at 20%, LTCG tax-free up to ₹1.25L, 12.5% above.",
    faqs: [{ question: "Can arbitrage funds give negative returns?", answer: "Very rarely and only for very short periods. Over any 3-month period, negative returns are extremely unlikely." }],
    topFunds: [
      { scheme: "Kotak Equity Arbitrage Fund", company: "Kotak MF", expenseRatio: "0.43%", return1Y: "7.3%", return3Y: "6.5%", return5Y: "6.1%" },
      { scheme: "ICICI Prudential Equity Arbitrage Fund", company: "ICICI Prudential MF", expenseRatio: "0.38%", return1Y: "7.1%", return3Y: "6.3%", return5Y: "5.9%" },
    ],
  },
  {
    slug: "multi-asset-allocation", parentCategory: "hybrid", title: "Multi Asset Allocation Funds", description: "Diversify across equity, debt, gold, and other asset classes in one fund.",
    avgReturn: "12.35%", fundCount: 18, riskLevel: "Moderate", minInvestment: "₹500", idealHorizon: "3+ years",
    whatIs: "Multi Asset Allocation funds must invest in at least 3 asset classes with minimum 10% in each. Typically they cover equity, debt, and gold/commodities, providing true multi-asset diversification in a single fund.",
    advantages: ["True diversification across 3+ asset classes", "Gold/commodity exposure acts as inflation hedge", "Automatic rebalancing between assets", "Reduced overall portfolio volatility"],
    howItWorks: "The fund manager allocates across equity, debt, and gold (or other assets) based on their relative valuations and market outlook. Minimum 10% in each ensures genuine diversification.",
    whoShouldInvest: ["Investors wanting all-in-one asset allocation", "Those seeking inflation-hedged returns", "Investors who don't want to manage multiple funds"],
    taxation: "Depends on equity allocation — if 65%+, equity taxation; otherwise debt taxation.",
    faqs: [{ question: "Do these funds invest in gold?", answer: "Most multi-asset funds allocate 10-20% to gold/silver through ETFs, providing a built-in inflation hedge." }],
    topFunds: [
      { scheme: "HDFC Multi Asset Fund", company: "HDFC MF", expenseRatio: "0.62%", return1Y: "13.2%", return3Y: "14.5%", return5Y: "12.8%" },
      { scheme: "ICICI Prudential Multi Asset Fund", company: "ICICI Prudential MF", expenseRatio: "0.78%", return1Y: "12.5%", return3Y: "13.8%", return5Y: "12.1%" },
      { scheme: "SBI Multi Asset Allocation Fund", company: "SBI MF", expenseRatio: "0.55%", return1Y: "11.8%", return3Y: "13.1%", return5Y: "11.5%" },
    ],
  },
  {
    slug: "hybrid-fof", parentCategory: "hybrid", title: "Hybrid Fund of Funds", description: "Invest in a basket of other hybrid mutual fund schemes for diversified exposure.",
    avgReturn: "10.45%", fundCount: 6, riskLevel: "Moderate", minInvestment: "₹500", idealHorizon: "3+ years",
    whatIs: "Hybrid Fund of Funds invest in other hybrid mutual fund schemes rather than directly in stocks or bonds. This provides access to multiple fund manager strategies within a single investment.",
    advantages: ["Diversification across multiple fund managers", "Access to best-in-class hybrid strategies", "Simplified investing — one fund covers it all"],
    howItWorks: "The fund invests in a curated basket of existing hybrid funds. The fund-of-funds manager selects schemes based on performance, risk management quality, and strategy complement.",
    whoShouldInvest: ["New investors wanting a single diversified investment", "Those who prefer multi-manager exposure", "Investors seeking simplified portfolio management"],
    taxation: "Debt taxation — gains taxed at slab rate.",
    faqs: [{ question: "Does this have double expense ratios?", answer: "Yes, you pay the FoF's expense ratio plus the underlying funds' ratios. However, total costs are still regulated by SEBI." }],
    topFunds: [
      { scheme: "ICICI Prudential Passive Multi Asset FoF", company: "ICICI Prudential MF", expenseRatio: "0.15%", return1Y: "10.8%", return3Y: "11.5%", return5Y: "10.2%" },
      { scheme: "Axis Growth Opportunities Fund FoF", company: "Axis MF", expenseRatio: "0.28%", return1Y: "10.2%", return3Y: "11.1%", return5Y: "9.8%" },
    ],
  },
  {
    slug: "retirement-hybrid", parentCategory: "hybrid", title: "Retirement Hybrid Funds", description: "Goal-oriented long-term allocation designed for post-retirement corpus building.",
    avgReturn: "11.28%", fundCount: 6, riskLevel: "Moderate", minInvestment: "₹500", idealHorizon: "10+ years",
    whatIs: "Retirement Hybrid funds are designed specifically for building a retirement corpus. They follow a goal-oriented allocation strategy, typically shifting from equity-heavy to debt-heavy as the target date approaches.",
    advantages: ["Purpose-built for retirement planning", "Automatic glide-path in some schemes", "Tax benefits under Section 80C (some schemes)", "Long-term wealth compounding"],
    howItWorks: "These funds maintain a hybrid allocation suited for long-term wealth creation. Some offer automatic de-risking (glide path) as retirement approaches, gradually shifting from equity to debt.",
    whoShouldInvest: ["Investors specifically saving for retirement", "Those wanting a set-and-forget retirement investment", "Young professionals starting early retirement planning"],
    taxation: "Depends on equity allocation. Lock-in period of 5 years or till retirement (whichever is earlier) may apply.",
    faqs: [{ question: "Is there a lock-in period?", answer: "Some retirement funds have a 5-year lock-in or lock-in till age 58, whichever is earlier. Check the specific scheme document." }],
    topFunds: [
      { scheme: "HDFC Retirement Savings Fund - Hybrid Equity", company: "HDFC MF", expenseRatio: "0.92%", return1Y: "11.8%", return3Y: "13.5%", return5Y: "11.9%" },
      { scheme: "Tata Retirement Savings Fund", company: "Tata MF", expenseRatio: "1.05%", return1Y: "10.5%", return3Y: "12.2%", return5Y: "10.8%" },
    ],
  },
];

export { hybridFunds };
