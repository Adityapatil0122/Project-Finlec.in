/* ───────────────────────────────────────────────────
   Fund Sub-Category Data  –  Central source of truth
   ─────────────────────────────────────────────────── */

export type ParentCategory = "equity" | "debt" | "hybrid";

export type SampleFund = {
  scheme: string;
  company: string;
  logoUrl?: string;
  expenseRatio: string;
  return1Y: string;
  return3Y: string;
  return5Y: string;
};

/* Map company short-names to local logo files */
const logoMap: Record<string, string> = {
  "HDFC MF": "/companylogos/absl.png",
  "ICICI Prudential MF": "/companylogos/icici.png",
  "SBI MF": "/companylogos/sbi.png",
  "Nippon India MF": "/companylogos/nippon.png",
  "Kotak MF": "/companylogos/kotak.png",
  "Mirae Asset MF": "/companylogos/mirae.png",
  "Motilal Oswal MF": "/companylogos/motilal-oswal.png",
  "Axis MF": "/companylogos/axis.png",
  "PPFAS MF": "/companylogos/ppfas.png",
  "Quant MF": "/companylogos/quantum.png",
  "Edelweiss MF": "/companylogos/edelweiss.png",
  "Franklin MF": "/companylogos/franklin-templeton.png",
  "Tata MF": "/companylogos/tata.png",
  "Invesco MF": "/companylogos/invesco.png",
  "DSP MF": "/companylogos/edelweiss.png",
  "ABSL MF": "/companylogos/absl.png",
  "Sundaram MF": "/companylogos/sundaram.png",
  "Canara Robeco MF": "/companylogos/canara-robeco.png",
  "LIC MF": "/companylogos/lic.png",
  "HSBC MF": "/companylogos/hsbc.png",
  "UTI MF": "/companylogos/uti.png",
  "Bandhan MF": "/companylogos/bandhan.png",
  "Mahindra Manulife MF": "/companylogos/mahindra-manu.png",
  "Navi MF": "/companylogos/navi.png",
  "PGIM MF": "/companylogos/pgim-india.png",
  "JM MF": "/companylogos/jm-financial.png",
  "IIFL MF": "/companylogos/iifl.png",
  "Union MF": "/companylogos/union-amc.png",
};

export function companyLogo(company: string): string {
  return logoMap[company] || "/companylogos/absl.png";
}

export type FAQ = { question: string; answer: string };

export type FundCategoryInfo = {
  slug: string;
  parentCategory: ParentCategory;
  title: string;
  description: string;
  avgReturn: string;
  fundCount: number;
  riskLevel: string;
  minInvestment: string;
  idealHorizon: string;
  whatIs: string;
  advantages: string[];
  howItWorks: string;
  whoShouldInvest: string[];
  taxation: string;
  faqs: FAQ[];
  topFunds: SampleFund[];
};

/* ─── helper ─── */
function slug(name: string) {
  return name.toLowerCase().replace(/[&\s]+/g, "-").replace(/-+/g, "-");
}

/* ═══════════════════════════════════════════════════
   E Q U I T Y   F U N D S
   ═══════════════════════════════════════════════════ */

const equityFunds: FundCategoryInfo[] = [
  {
    slug: "large-cap",
    parentCategory: "equity",
    title: "Large Cap Mutual Funds",
    description: "Invest in the top 100 companies by market capitalization for stable, long-term growth.",
    avgReturn: "14.31%",
    fundCount: 35,
    riskLevel: "Moderate",
    minInvestment: "₹500",
    idealHorizon: "5+ years",
    whatIs: "Large-cap mutual funds invest primarily in stocks of India's top 100 companies by market capitalization. These household names — Reliance, HDFC, TCS, Infosys — have proven business models, strong balance sheets, and consistent earnings. By regulation, large-cap funds must allocate at least 80% of assets to these blue-chip stocks.",
    advantages: [
      "Exposure to India's most established and profitable companies",
      "Lower volatility compared to mid-cap and small-cap funds",
      "Consistent and reliable returns over the long term",
      "High liquidity — easy entry and exit",
    ],
    howItWorks: "Large Cap funds are mandated to invest at least 80% of their corpus in the top 100 companies ranked by market capitalization. Fund managers pick stocks from this universe based on their own research, valuation frameworks, and sector allocation strategies. The remaining 20% may be allocated to mid-cap or debt instruments depending on the fund's mandate.",
    whoShouldInvest: [
      "Investors seeking steady equity returns with lower volatility",
      "First-time equity investors looking for a safe starting point",
      "Those building a solid core portfolio foundation",
      "Investors with a 5+ year investment horizon",
    ],
    taxation: "Short-term capital gains (holding < 1 year) are taxed at 20%. Long-term capital gains (holding > 1 year) up to ₹1.25 lakh per year are tax-free; gains above this threshold are taxed at 12.5%.",
    faqs: [
      { question: "What are the best Large Cap funds to invest in 2026?", answer: "Top-performing large cap funds include Nippon India Large Cap Fund, ICICI Prudential Bluechip Fund, and HDFC Large Cap Fund based on consistent 5-year returns." },
      { question: "How long should I stay invested?", answer: "A minimum of 5 years is recommended to benefit from compounding and ride out market volatility." },
      { question: "Are Large Cap funds high risk?", answer: "Large Cap funds carry moderate risk. They are less volatile than mid or small-cap funds but are still equity instruments subject to market movements." },
      { question: "What returns can I expect?", answer: "Historically, large cap funds have delivered 12-15% annualized returns over 5+ year periods, though past performance doesn't guarantee future results." },
    ],
    topFunds: [
      { scheme: "Nippon India Large Cap Fund", company: "Nippon India MF", expenseRatio: "0.69%", return1Y: "12.4%", return3Y: "18.2%", return5Y: "16.8%" },
      { scheme: "ICICI Prudential Bluechip Fund", company: "ICICI Prudential MF", expenseRatio: "0.87%", return1Y: "11.8%", return3Y: "17.5%", return5Y: "15.9%" },
      { scheme: "HDFC Large Cap Fund", company: "HDFC MF", expenseRatio: "1.04%", return1Y: "10.2%", return3Y: "16.8%", return5Y: "14.7%" },
      { scheme: "SBI Bluechip Fund", company: "SBI MF", expenseRatio: "0.82%", return1Y: "9.6%", return3Y: "15.4%", return5Y: "14.2%" },
      { scheme: "Mirae Asset Large Cap Fund", company: "Mirae Asset MF", expenseRatio: "0.53%", return1Y: "10.8%", return3Y: "16.1%", return5Y: "15.3%" },
      { scheme: "Kotak Bluechip Fund", company: "Kotak MF", expenseRatio: "0.61%", return1Y: "11.1%", return3Y: "16.5%", return5Y: "15.1%" },
    ],
  },
  {
    slug: "mid-cap",
    parentCategory: "equity",
    title: "Mid Cap Mutual Funds",
    description: "Invest in the next 150 companies (101st–250th by market cap) for higher growth potential.",
    avgReturn: "18.72%",
    fundCount: 28,
    riskLevel: "High",
    minInvestment: "₹500",
    idealHorizon: "5–7 years",
    whatIs: "Mid-cap mutual funds invest in companies ranked 101st to 250th by market capitalization. These are growing businesses that have moved beyond the start-up phase and are scaling up rapidly. They offer a sweet spot between the stability of large caps and the explosive growth potential of small caps.",
    advantages: [
      "Higher growth potential than large-cap funds",
      "Companies with strong momentum and expanding market share",
      "Diversification benefit when paired with large-cap holdings",
      "Historically outperformed large caps over 7+ year periods",
    ],
    howItWorks: "Mid Cap funds must invest at least 65% of their assets in mid-cap stocks (ranked 101–250 by market cap). Fund managers identify companies with strong growth trajectories, improving financials, and competitive advantages within this universe.",
    whoShouldInvest: [
      "Investors with higher risk appetite seeking superior returns",
      "Those with a 5–7 year investment horizon",
      "Investors looking to complement a large-cap heavy portfolio",
      "SIP investors who want to accumulate wealth over time",
    ],
    taxation: "Same as equity — STCG at 20% (< 1 year), LTCG tax-free up to ₹1.25 lakh, 12.5% above that threshold.",
    faqs: [
      { question: "Are Mid Cap funds risky?", answer: "They carry higher risk than large caps due to greater price volatility, but the risk is rewarded with potentially higher returns over longer periods." },
      { question: "What is the ideal SIP amount for mid caps?", answer: "Start with ₹2,000–₹5,000 per month via SIP to benefit from rupee cost averaging across market cycles." },
      { question: "Can mid caps beat large caps?", answer: "Historically, mid caps have outperformed large caps over 7–10 year rolling periods, though with higher interim volatility." },
    ],
    topFunds: [
      { scheme: "Motilal Oswal Midcap Fund", company: "Motilal Oswal MF", expenseRatio: "0.57%", return1Y: "16.3%", return3Y: "24.1%", return5Y: "22.4%" },
      { scheme: "Edelweiss Mid Cap Fund", company: "Edelweiss MF", expenseRatio: "0.44%", return1Y: "15.8%", return3Y: "23.6%", return5Y: "21.8%" },
      { scheme: "HDFC Mid-Cap Opportunities Fund", company: "HDFC MF", expenseRatio: "0.75%", return1Y: "14.2%", return3Y: "22.8%", return5Y: "20.5%" },
      { scheme: "Kotak Emerging Equity Fund", company: "Kotak MF", expenseRatio: "0.49%", return1Y: "13.9%", return3Y: "21.5%", return5Y: "19.8%" },
      { scheme: "Axis Midcap Fund", company: "Axis MF", expenseRatio: "0.52%", return1Y: "12.5%", return3Y: "20.1%", return5Y: "18.9%" },
    ],
  },
  {
    slug: "small-cap",
    parentCategory: "equity",
    title: "Small Cap Mutual Funds",
    description: "Invest in companies ranked beyond 250th by market cap for maximum growth potential.",
    avgReturn: "22.15%",
    fundCount: 24,
    riskLevel: "Very High",
    minInvestment: "₹500",
    idealHorizon: "7+ years",
    whatIs: "Small-cap mutual funds invest in companies ranked below 250th by market capitalization. These are emerging businesses with significant room for expansion. While they carry higher risk, they also offer the potential for multi-bagger returns as these companies scale.",
    advantages: [
      "Highest growth potential among equity fund categories",
      "Early access to future mid-cap and large-cap companies",
      "Power of compounding works best over long durations",
      "Portfolio diversification across niche sectors",
    ],
    howItWorks: "Small Cap funds must invest at least 65% of their corpus in stocks ranked beyond 250 by market cap. Fund managers conduct deep research to identify hidden gems with strong fundamentals, scalable business models, and capable management teams.",
    whoShouldInvest: [
      "Aggressive investors with very high risk tolerance",
      "Those with a 7+ year investment horizon",
      "Investors who can handle 30-50% drawdowns without panic",
      "Young investors building long-term wealth",
    ],
    taxation: "Same as equity — STCG at 20% (< 1 year), LTCG tax-free up to ₹1.25 lakh, 12.5% above.",
    faqs: [
      { question: "Should beginners invest in small caps?", answer: "Beginners should start with large or flexi-cap funds. Small caps are best suited for experienced investors who understand volatility." },
      { question: "What is the minimum investment period?", answer: "At least 7 years. Small caps need time to realize their growth potential and recover from inevitable market corrections." },
    ],
    topFunds: [
      { scheme: "Quant Small Cap Fund", company: "Quant MF", expenseRatio: "0.64%", return1Y: "18.2%", return3Y: "28.5%", return5Y: "26.1%" },
      { scheme: "Nippon India Small Cap Fund", company: "Nippon India MF", expenseRatio: "0.73%", return1Y: "16.9%", return3Y: "26.8%", return5Y: "24.7%" },
      { scheme: "HDFC Small Cap Fund", company: "HDFC MF", expenseRatio: "0.68%", return1Y: "15.4%", return3Y: "25.1%", return5Y: "23.2%" },
      { scheme: "Axis Small Cap Fund", company: "Axis MF", expenseRatio: "0.56%", return1Y: "14.8%", return3Y: "24.3%", return5Y: "22.5%" },
      { scheme: "SBI Small Cap Fund", company: "SBI MF", expenseRatio: "0.62%", return1Y: "13.5%", return3Y: "23.7%", return5Y: "21.8%" },
    ],
  },
  {
    slug: "large-midcap",
    parentCategory: "equity",
    title: "Large & MidCap Mutual Funds",
    description: "Balanced exposure to both top 100 and next 150 companies for diversified growth.",
    avgReturn: "16.48%",
    fundCount: 22,
    riskLevel: "Moderately High",
    minInvestment: "₹500",
    idealHorizon: "5+ years",
    whatIs: "Large & Mid Cap funds invest in both large-cap (top 100) and mid-cap (101–250) companies. By regulation, they must allocate at least 35% each to large and mid-cap stocks, providing a blend of stability and higher growth.",
    advantages: ["Best of both worlds — stability of large caps with growth of mid caps", "Mandatory diversification across market segments", "Lower volatility than pure mid-cap funds", "Ideal bridge between conservative and aggressive investing"],
    howItWorks: "These funds must invest minimum 35% in large-cap stocks and 35% in mid-cap stocks. The remaining 30% is at the fund manager's discretion, allowing tactical allocation based on market conditions.",
    whoShouldInvest: ["Investors seeking higher returns than pure large caps with controlled risk", "Those wanting automatic diversification across market caps", "Investors with a 5+ year horizon"],
    taxation: "Same equity taxation — STCG at 20%, LTCG tax-free up to ₹1.25L, 12.5% above.",
    faqs: [
      { question: "How is this different from a Flexi Cap fund?", answer: "Large & Mid Cap funds have mandated minimum allocations (35% each), while Flexi Cap funds have complete freedom in allocation." },
    ],
    topFunds: [
      { scheme: "Mirae Asset Large & Midcap Fund", company: "Mirae Asset MF", expenseRatio: "0.54%", return1Y: "13.2%", return3Y: "19.8%", return5Y: "17.6%" },
      { scheme: "SBI Large & Midcap Fund", company: "SBI MF", expenseRatio: "0.78%", return1Y: "12.5%", return3Y: "18.9%", return5Y: "16.8%" },
      { scheme: "HDFC Large and Mid Cap Fund", company: "HDFC MF", expenseRatio: "0.82%", return1Y: "11.8%", return3Y: "18.1%", return5Y: "16.2%" },
      { scheme: "Kotak Large & Midcap Fund", company: "Kotak MF", expenseRatio: "0.63%", return1Y: "12.1%", return3Y: "17.6%", return5Y: "15.9%" },
    ],
  },
  {
    slug: "multi-cap",
    parentCategory: "equity",
    title: "Multi Cap Mutual Funds",
    description: "Diversified exposure across large, mid, and small-cap segments with mandated allocation.",
    avgReturn: "17.85%",
    fundCount: 18,
    riskLevel: "High",
    minInvestment: "₹500",
    idealHorizon: "5+ years",
    whatIs: "Multi Cap funds invest across all three market segments — large cap, mid cap, and small cap — with a mandated minimum of 25% in each. This ensures true diversification across the entire market spectrum.",
    advantages: ["True diversification across all market caps", "Mandated allocation prevents concentration risk", "Benefits from growth across market segments", "Suitable for all-weather investing"],
    howItWorks: "Multi Cap funds must invest at least 25% each in large-cap, mid-cap, and small-cap stocks. The remaining 25% is allocated at the fund manager's discretion based on market outlook.",
    whoShouldInvest: ["Investors wanting broad market exposure in a single fund", "Those who prefer mandated diversification", "Investors with a 5+ year horizon and moderate-high risk appetite"],
    taxation: "Same equity taxation — STCG at 20%, LTCG tax-free up to ₹1.25L, 12.5% above.",
    faqs: [{ question: "Multi Cap vs Flexi Cap — which is better?", answer: "Multi Cap has mandated minimum allocations ensuring diversification, while Flexi Cap gives fund managers complete flexibility. Multi Cap is better for guaranteed diversification." }],
    topFunds: [
      { scheme: "Quant Active Fund", company: "Quant MF", expenseRatio: "0.58%", return1Y: "15.6%", return3Y: "22.4%", return5Y: "20.1%" },
      { scheme: "HDFC Multi Cap Fund", company: "HDFC MF", expenseRatio: "0.72%", return1Y: "13.8%", return3Y: "20.2%", return5Y: "18.5%" },
      { scheme: "Nippon India Multi Cap Fund", company: "Nippon India MF", expenseRatio: "0.81%", return1Y: "14.1%", return3Y: "21.5%", return5Y: "19.3%" },
      { scheme: "ICICI Prudential Multicap Fund", company: "ICICI Prudential MF", expenseRatio: "0.76%", return1Y: "12.9%", return3Y: "19.8%", return5Y: "17.6%" },
    ],
  },
  {
    slug: "flexi-cap",
    parentCategory: "equity",
    title: "Flexi Cap Mutual Funds",
    description: "Complete flexibility to invest across large, mid, and small-cap stocks without constraints.",
    avgReturn: "16.92%",
    fundCount: 32,
    riskLevel: "Moderately High",
    minInvestment: "₹500",
    idealHorizon: "5+ years",
    whatIs: "Flexi Cap funds give fund managers complete freedom to invest across market capitalizations without any mandated minimum allocation. They must invest at least 65% in equity but can shift between large, mid, and small caps based on opportunity.",
    advantages: ["Maximum flexibility for fund managers to capitalize on opportunities", "Dynamic allocation based on market conditions", "Can be defensive or aggressive as needed", "One of the most popular equity fund categories"],
    howItWorks: "With no mandated allocation across market caps, fund managers have full discretion. They can go 80% large cap during volatile markets or increase mid/small cap exposure during growth phases.",
    whoShouldInvest: ["Investors who trust active fund management", "Those seeking a single diversified equity holding", "Investors comfortable with varying allocation over time"],
    taxation: "Same equity taxation — STCG at 20%, LTCG tax-free up to ₹1.25L, 12.5% above.",
    faqs: [{ question: "Why are Flexi Cap funds so popular?", answer: "Their flexibility allows fund managers to navigate different market cycles effectively, making them suitable for most investor profiles." }],
    topFunds: [
      { scheme: "Parag Parikh Flexi Cap Fund", company: "PPFAS MF", expenseRatio: "0.63%", return1Y: "14.5%", return3Y: "20.8%", return5Y: "18.9%" },
      { scheme: "HDFC Flexi Cap Fund", company: "HDFC MF", expenseRatio: "0.77%", return1Y: "13.2%", return3Y: "19.5%", return5Y: "17.8%" },
      { scheme: "Kotak Flexicap Fund", company: "Kotak MF", expenseRatio: "0.58%", return1Y: "12.8%", return3Y: "18.7%", return5Y: "16.9%" },
      { scheme: "SBI Flexicap Fund", company: "SBI MF", expenseRatio: "0.72%", return1Y: "11.9%", return3Y: "17.9%", return5Y: "16.2%" },
    ],
  },
  {
    slug: "international",
    parentCategory: "equity",
    title: "International Mutual Funds",
    description: "Invest in the world's top companies — Apple, Google, Amazon — for global diversification.",
    avgReturn: "11.24%",
    fundCount: 15,
    riskLevel: "High",
    minInvestment: "₹500",
    idealHorizon: "5+ years",
    whatIs: "International mutual funds invest in stocks of companies listed outside India — primarily in US, European, and Asian markets. They provide geographic diversification and exposure to global leaders in technology, healthcare, and consumer sectors.",
    advantages: ["Diversification beyond Indian markets", "Access to global tech giants and innovation leaders", "Hedge against INR depreciation", "Exposure to developed market economies"],
    howItWorks: "These funds invest in stocks of overseas companies either directly or through feeder funds that invest in international ETFs and mutual funds. Currency movements add an additional return/risk dimension.",
    whoShouldInvest: ["Investors seeking geographic diversification", "Those bullish on global tech and innovation", "Investors wanting a hedge against Indian market risks"],
    taxation: "Taxed as debt funds — gains taxed at your income tax slab rate regardless of holding period.",
    faqs: [{ question: "Do international funds have currency risk?", answer: "Yes, returns are affected by INR-USD exchange rate movements. A weakening rupee boosts returns, while a strengthening rupee reduces them." }],
    topFunds: [
      { scheme: "Motilal Oswal Nasdaq 100 FoF", company: "Motilal Oswal MF", expenseRatio: "0.58%", return1Y: "18.5%", return3Y: "15.2%", return5Y: "19.1%" },
      { scheme: "Franklin India Feeder US Opportunities Fund", company: "Franklin MF", expenseRatio: "1.58%", return1Y: "12.4%", return3Y: "11.8%", return5Y: "14.6%" },
      { scheme: "ICICI Prudential US Bluechip Fund", company: "ICICI Prudential MF", expenseRatio: "1.33%", return1Y: "11.8%", return3Y: "10.9%", return5Y: "13.8%" },
    ],
  },
  {
    slug: "strategy",
    parentCategory: "equity",
    title: "Strategy / Thematic Funds",
    description: "Invest in specific themes like ESG, value, growth, or dividend yield strategies.",
    avgReturn: "15.38%",
    fundCount: 20,
    riskLevel: "High",
    minInvestment: "₹500",
    idealHorizon: "5+ years",
    whatIs: "Strategy or thematic mutual funds follow a specific investment strategy such as value investing, dividend yield, contra, or ESG (Environmental, Social, Governance). They invest across market caps but are bound by their strategic mandate.",
    advantages: ["Focused exposure to a specific investing philosophy", "Can outperform during favorable market cycles", "Good satellite holding for diversification", "Access to niche strategies without stock-picking"],
    howItWorks: "Unlike diversified equity funds, these funds follow a predefined strategy. A value fund buys undervalued stocks, a dividend yield fund focuses on high-dividend payers, and a contra fund invests against prevailing market sentiment.",
    whoShouldInvest: ["Investors with conviction in a specific strategy", "Those looking to complement core equity holdings", "Experienced investors who understand thematic cycles"],
    taxation: "Same equity taxation — STCG at 20%, LTCG tax-free up to ₹1.25L, 12.5% above.",
    faqs: [{ question: "Are thematic funds risky?", answer: "They can be cyclical — a theme may underperform for years before delivering. Best used as satellite holdings, not core portfolio." }],
    topFunds: [
      { scheme: "ICICI Prudential Value Discovery Fund", company: "ICICI Prudential MF", expenseRatio: "1.08%", return1Y: "12.8%", return3Y: "18.5%", return5Y: "16.2%" },
      { scheme: "SBI Contra Fund", company: "SBI MF", expenseRatio: "0.68%", return1Y: "11.5%", return3Y: "19.2%", return5Y: "17.8%" },
      { scheme: "HDFC Dividend Yield Fund", company: "HDFC MF", expenseRatio: "0.77%", return1Y: "10.9%", return3Y: "16.8%", return5Y: "14.5%" },
    ],
  },
  {
    slug: "sectoral-banking",
    parentCategory: "equity",
    title: "Banking & Financial Services Funds",
    description: "Concentrated exposure to India's banking and financial services sector.",
    avgReturn: "16.54%",
    fundCount: 10,
    riskLevel: "Very High",
    minInvestment: "₹500",
    idealHorizon: "5+ years",
    whatIs: "These sectoral funds invest predominantly in banking, NBFC, insurance, and financial services stocks. India's growing financial inclusion and credit penetration make this one of the most tracked sectors.",
    advantages: ["Direct play on India's financial growth story", "Benefit from rising credit demand and digital banking", "High growth potential during economic expansion"],
    howItWorks: "At least 80% of the fund must be invested in banking and financial sector stocks. The portfolio typically includes a mix of public sector banks, private banks, NBFCs, insurance companies, and fintech firms.",
    whoShouldInvest: ["Investors bullish on India's financial sector", "Those willing to accept high concentration risk", "Tactical investors looking for sectoral bets"],
    taxation: "Same equity taxation — STCG at 20%, LTCG tax-free up to ₹1.25L, 12.5% above.",
    faqs: [{ question: "Why are banking funds volatile?", answer: "Banking stocks are sensitive to interest rate changes, NPA cycles, and regulatory actions, causing higher-than-average volatility." }],
    topFunds: [
      { scheme: "ICICI Prudential Banking & Financial Services Fund", company: "ICICI Prudential MF", expenseRatio: "0.98%", return1Y: "14.2%", return3Y: "19.5%", return5Y: "17.1%" },
      { scheme: "Nippon India Banking & Financial Services Fund", company: "Nippon India MF", expenseRatio: "1.12%", return1Y: "13.5%", return3Y: "18.8%", return5Y: "16.4%" },
      { scheme: "SBI Banking & Financial Services Fund", company: "SBI MF", expenseRatio: "0.88%", return1Y: "12.1%", return3Y: "17.2%", return5Y: "15.3%" },
    ],
  },
  {
    slug: "sectoral-technology",
    parentCategory: "equity",
    title: "Technology Funds",
    description: "Invest in India's IT services and global technology companies.",
    avgReturn: "14.85%",
    fundCount: 8,
    riskLevel: "Very High",
    minInvestment: "₹500",
    idealHorizon: "5+ years",
    whatIs: "Technology sector funds invest in IT services, software, hardware, and digital platform companies. India's IT sector is a global leader in services exports, and these funds give concentrated exposure to this high-growth space.",
    advantages: ["Exposure to India's IT export powerhouse", "Benefit from global digital transformation", "Historically strong earnings growth"],
    howItWorks: "At least 80% is invested in technology and IT-related stocks. The portfolio typically includes large IT services companies like TCS, Infosys, and Wipro, along with emerging tech firms.",
    whoShouldInvest: ["Investors bullish on technology and digital trends", "Those comfortable with sectoral concentration risk", "Investors with a long-term view on tech adoption"],
    taxation: "Same equity taxation — STCG at 20%, LTCG tax-free up to ₹1.25L, 12.5% above.",
    faqs: [{ question: "Do tech funds only invest in Indian IT?", answer: "Primarily yes, but some funds also allocate to global tech companies for broader exposure." }],
    topFunds: [
      { scheme: "ICICI Prudential Technology Fund", company: "ICICI Prudential MF", expenseRatio: "1.12%", return1Y: "15.8%", return3Y: "17.2%", return5Y: "19.5%" },
      { scheme: "SBI Technology Opportunities Fund", company: "SBI MF", expenseRatio: "0.95%", return1Y: "14.2%", return3Y: "16.1%", return5Y: "18.2%" },
      { scheme: "Tata Digital India Fund", company: "Tata MF", expenseRatio: "0.43%", return1Y: "13.5%", return3Y: "15.8%", return5Y: "17.6%" },
    ],
  },
  {
    slug: "sectoral-infrastructure",
    parentCategory: "equity",
    title: "Infrastructure Funds",
    description: "Invest in companies building India's roads, railways, power, and urban infrastructure.",
    avgReturn: "19.42%",
    fundCount: 12,
    riskLevel: "Very High",
    minInvestment: "₹500",
    idealHorizon: "7+ years",
    whatIs: "Infrastructure funds invest in companies involved in building and maintaining India's physical infrastructure — roads, railways, power, construction, cement, metals, and industrial equipment. These funds benefit from government capex cycles.",
    advantages: ["Direct play on India's massive infrastructure build-out", "Benefits from government capex spending", "Long-term structural growth story", "Diversification across industrial sectors"],
    howItWorks: "At least 80% is invested in infrastructure and allied sectors. The portfolio spans construction, cement, capital goods, power, industrials, and real estate companies.",
    whoShouldInvest: ["Investors bullish on India's infrastructure development", "Those with a 7+ year horizon to ride policy cycles", "Investors comfortable with cyclical volatility"],
    taxation: "Same equity taxation — STCG at 20%, LTCG tax-free up to ₹1.25L, 12.5% above.",
    faqs: [{ question: "Are infrastructure funds tied to government spending?", answer: "Significantly yes. Government capex budgets, policy announcements, and infrastructure initiatives directly impact these funds." }],
    topFunds: [
      { scheme: "ICICI Prudential Infrastructure Fund", company: "ICICI Prudential MF", expenseRatio: "1.18%", return1Y: "18.5%", return3Y: "24.2%", return5Y: "21.8%" },
      { scheme: "HDFC Infrastructure Fund", company: "HDFC MF", expenseRatio: "1.09%", return1Y: "16.8%", return3Y: "22.5%", return5Y: "19.6%" },
      { scheme: "Invesco India Infrastructure Fund", company: "Invesco MF", expenseRatio: "0.85%", return1Y: "17.2%", return3Y: "23.1%", return5Y: "20.4%" },
    ],
  },
  {
    slug: "sectoral-pharma",
    parentCategory: "equity",
    title: "Pharma & Healthcare Funds",
    description: "Invest in pharmaceutical, biotech, and healthcare companies across India.",
    avgReturn: "15.68%",
    fundCount: 9,
    riskLevel: "Very High",
    minInvestment: "₹500",
    idealHorizon: "5+ years",
    whatIs: "Pharma and healthcare funds invest in pharmaceutical companies, hospitals, diagnostics, medical devices, and biotech firms. India is the pharmacy of the world, and these funds capture that structural advantage.",
    advantages: ["India's pharmacy-of-the-world advantage", "Defensive sector with steady demand", "Growing domestic healthcare spending", "Export potential to US and global markets"],
    howItWorks: "At least 80% is invested in pharma and healthcare stocks. The portfolio includes generics manufacturers, API producers, hospital chains, and diagnostic companies.",
    whoShouldInvest: ["Investors seeking healthcare sector exposure", "Those looking for a defensive equity allocation", "Investors bullish on India's pharma export story"],
    taxation: "Same equity taxation — STCG at 20%, LTCG tax-free up to ₹1.25L, 12.5% above.",
    faqs: [{ question: "Are pharma funds defensive?", answer: "Relatively yes — healthcare demand is less cyclical. However, FDA actions and pricing pressures can cause significant stock-level volatility." }],
    topFunds: [
      { scheme: "SBI Healthcare Opportunities Fund", company: "SBI MF", expenseRatio: "0.92%", return1Y: "16.2%", return3Y: "18.5%", return5Y: "17.1%" },
      { scheme: "Nippon India Pharma Fund", company: "Nippon India MF", expenseRatio: "1.05%", return1Y: "15.1%", return3Y: "17.8%", return5Y: "16.4%" },
      { scheme: "DSP Healthcare Fund", company: "DSP MF", expenseRatio: "0.88%", return1Y: "14.5%", return3Y: "16.9%", return5Y: "15.8%" },
    ],
  },
];

export { equityFunds, slug };
