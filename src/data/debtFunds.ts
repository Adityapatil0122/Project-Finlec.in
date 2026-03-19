/* ═══════════════════════════════════════════════════
   D E B T   F U N D S
   ═══════════════════════════════════════════════════ */

import type { FundCategoryInfo } from "./fundCategoryData";

const debtFunds: FundCategoryInfo[] = [
  {
    slug: "overnight", parentCategory: "debt", title: "Overnight Mutual Funds", description: "Park money for as short as one day with near-zero credit risk.",
    avgReturn: "6.42%", fundCount: 12, riskLevel: "Very Low", minInvestment: "₹500", idealHorizon: "1 day – 1 week",
    whatIs: "Overnight funds invest in debt securities maturing the very next business day. They carry virtually zero interest rate risk and minimal credit risk, making them the safest category of mutual funds.",
    advantages: ["Near-zero credit and interest rate risk", "Instant liquidity — ideal for emergency cash", "Marginally better returns than savings accounts", "No lock-in period"],
    howItWorks: "The fund manager buys CBLO (collateralized borrowing and lending obligations), reverse repos, and other overnight instruments. Every morning the portfolio matures and is reinvested.",
    whoShouldInvest: ["Investors parking surplus cash for a few days", "Corporate treasuries managing daily liquidity", "Risk-averse investors seeking capital preservation"],
    taxation: "Gains taxed at your income tax slab rate regardless of holding period.",
    faqs: [{ question: "Is overnight fund better than savings account?", answer: "For surplus cash sitting idle, yes — overnight funds typically offer 50-100 bps higher returns than savings accounts with comparable safety." }],
    topFunds: [
      { scheme: "HDFC Overnight Fund", company: "HDFC MF", expenseRatio: "0.10%", return1Y: "6.5%", return3Y: "5.8%", return5Y: "5.4%" },
      { scheme: "ICICI Prudential Overnight Fund", company: "ICICI Prudential MF", expenseRatio: "0.08%", return1Y: "6.4%", return3Y: "5.7%", return5Y: "5.3%" },
      { scheme: "SBI Overnight Fund", company: "SBI MF", expenseRatio: "0.12%", return1Y: "6.3%", return3Y: "5.6%", return5Y: "5.2%" },
    ],
  },
  {
    slug: "liquid", parentCategory: "debt", title: "Liquid Mutual Funds", description: "Park money for 1 week to 3 months with high safety and instant redemption.",
    avgReturn: "6.95%", fundCount: 30, riskLevel: "Low", minInvestment: "₹500", idealHorizon: "1 week – 3 months",
    whatIs: "Liquid funds invest in money market instruments — treasury bills, commercial papers, certificates of deposit — maturing within 91 days. They offer better returns than savings accounts with high liquidity.",
    advantages: ["Higher returns than savings accounts and FDs of similar duration", "Instant redemption up to ₹50,000", "Very low volatility and NAV fluctuation", "Ideal for emergency fund allocation"],
    howItWorks: "Fund managers invest in high-quality, short-duration debt instruments (≤91 days). The short maturity minimizes interest rate risk, and focus on AAA/A1+ rated papers ensures credit safety.",
    whoShouldInvest: ["Investors parking emergency funds", "Those saving for near-term goals (1-3 months)", "Business owners managing working capital"],
    taxation: "Gains taxed at your income tax slab rate regardless of holding period.",
    faqs: [{ question: "Can I withdraw money instantly?", answer: "Yes, up to ₹50,000 per day can be redeemed instantly. Larger amounts are credited in T+1 working day." }],
    topFunds: [
      { scheme: "Parag Parikh Liquid Fund", company: "PPFAS MF", expenseRatio: "0.14%", return1Y: "7.1%", return3Y: "6.2%", return5Y: "5.8%" },
      { scheme: "HDFC Liquid Fund", company: "HDFC MF", expenseRatio: "0.20%", return1Y: "7.0%", return3Y: "6.1%", return5Y: "5.7%" },
      { scheme: "SBI Liquid Fund", company: "SBI MF", expenseRatio: "0.18%", return1Y: "6.9%", return3Y: "6.0%", return5Y: "5.6%" },
      { scheme: "ICICI Prudential Liquid Fund", company: "ICICI Prudential MF", expenseRatio: "0.22%", return1Y: "6.8%", return3Y: "5.9%", return5Y: "5.5%" },
    ],
  },
  {
    slug: "ultra-short-duration", parentCategory: "debt", title: "Ultra Short Duration Funds", description: "Slightly higher returns for 2–4 month parking with minimal risk.",
    avgReturn: "7.18%", fundCount: 18, riskLevel: "Low", minInvestment: "₹500", idealHorizon: "2 – 4 months",
    whatIs: "Ultra Short Duration funds invest in debt instruments with a Macaulay duration of 3–6 months. They offer slightly higher returns than liquid funds by taking marginally more duration exposure.",
    advantages: ["Better returns than liquid funds", "Low interest rate risk due to short duration", "Suitable for planned expenses 2-4 months away"],
    howItWorks: "The portfolio consists of commercial papers, certificates of deposit, and short-term bonds with 3-6 month effective maturities. Slightly longer duration than liquid funds enables higher yield.",
    whoShouldInvest: ["Investors with surplus money for 2-4 months", "Those seeking better returns than liquid funds with minimal extra risk"],
    taxation: "Gains taxed at your income tax slab rate regardless of holding period.",
    faqs: [{ question: "How is this different from a liquid fund?", answer: "Ultra short funds take slightly more duration risk (3-6 months vs ≤91 days), which typically translates to 20-50 bps higher returns." }],
    topFunds: [
      { scheme: "HDFC Ultra Short Term Fund", company: "HDFC MF", expenseRatio: "0.28%", return1Y: "7.3%", return3Y: "6.5%", return5Y: "6.1%" },
      { scheme: "ICICI Prudential Ultra Short Term Fund", company: "ICICI Prudential MF", expenseRatio: "0.32%", return1Y: "7.2%", return3Y: "6.4%", return5Y: "6.0%" },
      { scheme: "Aditya Birla SL Ultra Short Term Fund", company: "ABSL MF", expenseRatio: "0.35%", return1Y: "7.1%", return3Y: "6.3%", return5Y: "5.9%" },
    ],
  },
  {
    slug: "low-duration", parentCategory: "debt", title: "Low Duration Funds", description: "For 6–12 month goals with stable returns and controlled risk.",
    avgReturn: "7.45%", fundCount: 16, riskLevel: "Low to Moderate", minInvestment: "₹500", idealHorizon: "6 – 12 months",
    whatIs: "Low Duration funds invest in debt instruments with a Macaulay duration of 6–12 months, striking a balance between safety and returns for short-to-medium term goals.",
    advantages: ["Suitable for goals 6-12 months away", "Better returns than ultra short funds", "Moderate interest rate risk"],
    howItWorks: "The portfolio includes corporate bonds, CPs, CDs, and government securities with 6-12 month effective maturity. Duration management is key to controlling interest rate sensitivity.",
    whoShouldInvest: ["Investors with 6-12 month investment plans", "Those building a short-term debt ladder"],
    taxation: "Gains taxed at your income tax slab rate.",
    faqs: [{ question: "Is this good for parking bonus money?", answer: "If you plan to use the money in 6-12 months, low duration funds are an excellent choice." }],
    topFunds: [
      { scheme: "HDFC Low Duration Fund", company: "HDFC MF", expenseRatio: "0.30%", return1Y: "7.6%", return3Y: "6.8%", return5Y: "6.4%" },
      { scheme: "Axis Treasury Advantage Fund", company: "Axis MF", expenseRatio: "0.35%", return1Y: "7.5%", return3Y: "6.7%", return5Y: "6.3%" },
    ],
  },
  {
    slug: "money-market", parentCategory: "debt", title: "Money Market Funds", description: "Invest in high-quality money market instruments for up to 1 year.",
    avgReturn: "7.32%", fundCount: 14, riskLevel: "Low", minInvestment: "₹500", idealHorizon: "3 – 12 months",
    whatIs: "Money Market funds invest exclusively in money market instruments — treasury bills, commercial papers, certificates of deposit — with maturities up to 1 year. They provide superior liquidity with competitive returns.",
    advantages: ["Dedicated to money market instruments", "High credit quality portfolios", "Predictable return profile"],
    howItWorks: "Fund managers invest in T-bills, CPs, and CDs with remaining maturity up to 1 year. The focus is on AAA/A1+ rated instruments.",
    whoShouldInvest: ["Conservative investors seeking stable short-term returns", "Those looking for a savings account alternative"],
    taxation: "Gains taxed at your income tax slab rate.",
    faqs: [{ question: "Money market fund vs liquid fund?", answer: "Money market funds can take slightly longer durations (up to 1Y), while liquid funds are restricted to 91-day instruments." }],
    topFunds: [
      { scheme: "SBI Savings Fund", company: "SBI MF", expenseRatio: "0.24%", return1Y: "7.4%", return3Y: "6.5%", return5Y: "6.1%" },
      { scheme: "HDFC Money Market Fund", company: "HDFC MF", expenseRatio: "0.28%", return1Y: "7.3%", return3Y: "6.4%", return5Y: "6.0%" },
    ],
  },
  {
    slug: "short-duration", parentCategory: "debt", title: "Short Duration Funds", description: "For 1–3 year goals balancing yield with controlled duration risk.",
    avgReturn: "7.68%", fundCount: 20, riskLevel: "Moderate", minInvestment: "₹500", idealHorizon: "1 – 3 years",
    whatIs: "Short Duration funds invest in bonds with Macaulay duration of 1–3 years. They aim to deliver higher returns than liquid/ultra short funds by taking on moderate duration and credit exposure.",
    advantages: ["Better yields for 1-3 year money", "Moderate interest rate sensitivity", "Diversified across government and corporate bonds"],
    howItWorks: "The portfolio includes AAA-rated corporate bonds, government securities, and SDLs with 1-3 year duration. Fund managers actively manage duration based on interest rate expectations.",
    whoShouldInvest: ["Investors with 1-3 year financial goals", "Those seeking bond-like returns with fund flexibility"],
    taxation: "Gains taxed at your income tax slab rate.",
    faqs: [{ question: "Can short duration funds give negative returns?", answer: "In periods of rising interest rates, short-duration funds may show slight negative returns over 1-3 month periods, but typically recover within their recommended horizon." }],
    topFunds: [
      { scheme: "HDFC Short Term Debt Fund", company: "HDFC MF", expenseRatio: "0.38%", return1Y: "7.9%", return3Y: "7.1%", return5Y: "6.8%" },
      { scheme: "ICICI Prudential Short Term Fund", company: "ICICI Prudential MF", expenseRatio: "0.42%", return1Y: "7.8%", return3Y: "7.0%", return5Y: "6.7%" },
      { scheme: "Axis Short Term Fund", company: "Axis MF", expenseRatio: "0.35%", return1Y: "7.7%", return3Y: "6.9%", return5Y: "6.6%" },
    ],
  },
  {
    slug: "corporate-bond", parentCategory: "debt", title: "Corporate Bond Funds", description: "Invest in top-rated corporate debt for higher yields than government bonds.",
    avgReturn: "7.82%", fundCount: 16, riskLevel: "Moderate", minInvestment: "₹500", idealHorizon: "2 – 3 years",
    whatIs: "Corporate Bond funds invest at least 80% of their corpus in the highest-rated corporate bonds (AA+ and above). They offer higher yields than government securities while maintaining strong credit quality.",
    advantages: ["Higher yield than government bonds", "Mandated high credit quality (AA+ minimum)", "Relatively stable returns profile"],
    howItWorks: "At least 80% is invested in AA+ or higher rated corporate bonds. Fund managers build and manage portfolios balancing yield, duration, and credit quality.",
    whoShouldInvest: ["Investors seeking steady income with decent credit quality", "Those with 2-3 year investment horizons"],
    taxation: "Gains taxed at your income tax slab rate.",
    faqs: [{ question: "Are corporate bond funds safe?", answer: "They invest in highest-rated corporate debt, making them relatively safe. However, credit events (like downgrades) can cause NAV drops." }],
    topFunds: [
      { scheme: "HDFC Corporate Bond Fund", company: "HDFC MF", expenseRatio: "0.34%", return1Y: "8.0%", return3Y: "7.2%", return5Y: "7.0%" },
      { scheme: "ICICI Prudential Corporate Bond Fund", company: "ICICI Prudential MF", expenseRatio: "0.36%", return1Y: "7.9%", return3Y: "7.1%", return5Y: "6.9%" },
    ],
  },
  {
    slug: "gilt-funds", parentCategory: "debt", title: "Gilt Mutual Funds", description: "Invest exclusively in government securities with zero credit risk.",
    avgReturn: "7.56%", fundCount: 14, riskLevel: "Moderate to High", minInvestment: "₹500", idealHorizon: "3+ years",
    whatIs: "Gilt funds invest at least 80% in government securities across maturities. They carry zero credit risk (backed by the sovereign) but can have high interest rate sensitivity due to longer duration papers.",
    advantages: ["Zero credit risk — sovereign-backed", "Benefit enormously during rate-cut cycles", "Pure interest rate play"],
    howItWorks: "The portfolio consists of central and state government securities. During falling interest rate environments, gilt fund NAVs rise sharply as bond prices increase. The reverse happens during rate hikes.",
    whoShouldInvest: ["Investors expecting interest rate cuts", "Those wanting zero credit risk in their debt allocation", "Tactical investors with interest rate views"],
    taxation: "Gains taxed at your income tax slab rate.",
    faqs: [{ question: "Why do gilt funds fluctuate if there's no credit risk?", answer: "Gilt funds carry interest rate risk. When rates rise, bond prices fall and vice versa. Longer-duration gilt funds are more sensitive to rate changes." }],
    topFunds: [
      { scheme: "SBI Magnum Gilt Fund", company: "SBI MF", expenseRatio: "0.46%", return1Y: "7.8%", return3Y: "7.0%", return5Y: "7.2%" },
      { scheme: "ICICI Prudential Gilt Fund", company: "ICICI Prudential MF", expenseRatio: "0.48%", return1Y: "7.6%", return3Y: "6.8%", return5Y: "7.0%" },
    ],
  },
  {
    slug: "dynamic-bond", parentCategory: "debt", title: "Dynamic Bond Funds", description: "Actively managed duration strategy that adapts to interest rate cycles.",
    avgReturn: "7.75%", fundCount: 18, riskLevel: "Moderate", minInvestment: "₹500", idealHorizon: "3+ years",
    whatIs: "Dynamic Bond funds actively manage portfolio duration based on the fund manager's view of interest rate movements. They can shift between short and long duration instruments to optimize returns across rate cycles.",
    advantages: ["Adapts to changing interest rate environments", "No fixed duration constraint", "Can deliver in both rising and falling rate scenarios"],
    howItWorks: "When rates are expected to fall, the manager increases duration to benefit from price appreciation. When rates are expected to rise, duration is shortened to protect NAV. This requires skilled macro forecasting.",
    whoShouldInvest: ["Investors who want to leave duration decisions to experts", "Those with 3+ year horizons", "Investors seeking all-weather debt fund performance"],
    taxation: "Gains taxed at your income tax slab rate.",
    faqs: [{ question: "Is dynamic bond fund better than FD?", answer: "Over 3+ year periods, dynamic bond funds have typically outperformed FDs on a post-tax basis, though with some NAV volatility." }],
    topFunds: [
      { scheme: "ICICI Prudential All Seasons Bond Fund", company: "ICICI Prudential MF", expenseRatio: "0.55%", return1Y: "8.1%", return3Y: "7.3%", return5Y: "7.5%" },
      { scheme: "SBI Dynamic Bond Fund", company: "SBI MF", expenseRatio: "0.62%", return1Y: "7.8%", return3Y: "7.0%", return5Y: "7.2%" },
      { scheme: "Axis Dynamic Bond Fund", company: "Axis MF", expenseRatio: "0.52%", return1Y: "7.9%", return3Y: "7.1%", return5Y: "7.3%" },
    ],
  },
];

export { debtFunds };
