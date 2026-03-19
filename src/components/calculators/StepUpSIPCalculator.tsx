"use client";

import { useState, useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from "recharts";

const COLORS = ["#e2e8f0", "#04b488"];

export default function StepUpSIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [stepUpPercent, setStepUpPercent] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  const { totalInvested, estReturns, maturityAmount } = useMemo(() => {
    const P = monthlyInvestment;
    const stepUp = stepUpPercent / 100;
    const monthlyRate = expectedReturn / 100 / 12;
    const totalMonths = timePeriod * 12;

    let totalInvested = 0;
    let maturityAmount = 0;

    for (let year = 0; year < timePeriod; year++) {
      const yearlyP = P * Math.pow(1 + stepUp, year);
      totalInvested += yearlyP * 12;

      for (let month = 0; month < 12; month++) {
        const monthsRemaining = totalMonths - (year * 12 + month) - 1;
        maturityAmount += yearlyP * Math.pow(1 + monthlyRate, monthsRemaining + 1);
      }
    }

    const estReturns = maturityAmount - totalInvested;
    return { totalInvested, estReturns, maturityAmount };
  }, [monthlyInvestment, stepUpPercent, expectedReturn, timePeriod]);

  const data = [
    { name: "Invested amount", value: totalInvested },
    { name: "Est. returns", value: estReturns },
  ];

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
      <div className="flex flex-col gap-10 rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-10">
        {/* Monthly Investment Slider */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Monthly investment</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#04b488] font-bold border border-slate-200">
              <span className="text-sm">₹</span>
              <input type="number" className="w-24 bg-transparent outline-none text-right appearance-none" value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(Number(e.target.value))} min={500} max={100000} step={500} />
            </div>
          </div>
          <input type="range" min={500} max={100000} step={500} value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#04b488]" />
        </div>
        {/* Annual Step-Up Percentage */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Annual step-up</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#04b488] font-bold border border-slate-200">
              <input type="number" className="w-12 bg-transparent outline-none text-right appearance-none" value={stepUpPercent} onChange={(e) => setStepUpPercent(Number(e.target.value))} min={1} max={50} step={1} />
              <span className="text-sm">%</span>
            </div>
          </div>
          <input type="range" min={1} max={50} step={1} value={stepUpPercent} onChange={(e) => setStepUpPercent(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#04b488]" />
        </div>
        {/* Expected Return Rate */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Expected return rate (p.a)</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#04b488] font-bold border border-slate-200">
              <input type="number" className="w-12 bg-transparent outline-none text-right appearance-none" value={expectedReturn} onChange={(e) => setExpectedReturn(Number(e.target.value))} min={1} max={30} step={0.1} />
              <span className="text-sm">%</span>
            </div>
          </div>
          <input type="range" min={1} max={30} step={0.1} value={expectedReturn} onChange={(e) => setExpectedReturn(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#04b488]" />
        </div>
        {/* Time period */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Time period</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#04b488] font-bold border border-slate-200">
              <input type="number" className="w-12 bg-transparent outline-none text-right appearance-none" value={timePeriod} onChange={(e) => setTimePeriod(Number(e.target.value))} min={1} max={40} step={1} />
              <span className="text-sm">Yr</span>
            </div>
          </div>
          <input type="range" min={1} max={40} step={1} value={timePeriod} onChange={(e) => setTimePeriod(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#04b488]" />
        </div>
        <div className="mt-4 pt-6 border-t border-slate-200 grid grid-cols-2 gap-4">
           <div>
              <p className="text-sm text-[#4a5568]">Total invested</p>
              <p className="text-xl font-bold text-[#1a1560] mt-1">{formatCurrency(totalInvested)}</p>
           </div>
           <div className="text-right">
              <button className="rounded-full bg-[linear-gradient(135deg,#04b488,#18d1b1)] px-8 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_-12px_rgba(4,180,136,0.6)] transition-all hover:translate-y-[-1px] hover:shadow-[0_16px_32px_-12px_rgba(4,180,136,0.7)]">
                Start investing
              </button>
           </div>
        </div>
      </div>

      <div className="flex flex-col rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-10 justify-center">
         <div className="h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                  <Pie data={data} cx="50%" cy="50%" innerRadius={70} outerRadius={95} paddingAngle={2} dataKey="value" stroke="none">
                     {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                     ))}
                  </Pie>
                  <RechartsTooltip formatter={(value: number) => formatCurrency(value)} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }} />
               </PieChart>
            </ResponsiveContainer>
         </div>
         <div className="mt-10 space-y-5">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <span className="h-3 w-3 rounded-full bg-slate-200"></span>
                 <p className="text-sm font-medium text-[#4a5568]">Invested amount</p>
               </div>
               <p className="font-semibold text-[#1a1560]">{formatCurrency(totalInvested)}</p>
            </div>
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <span className="h-3 w-3 rounded-full bg-[#04b488]"></span>
                 <p className="text-sm font-medium text-[#4a5568]">Est. returns</p>
               </div>
               <p className="font-semibold text-[#1a1560]">{formatCurrency(estReturns)}</p>
            </div>
            <div className="pt-5 mt-2 border-t border-slate-200 flex items-center justify-between">
               <p className="text-base font-semibold text-[#4a5568]">Total value</p>
               <p className="text-2xl font-bold text-[#1a1560] font-[family-name:var(--font-sora)]">{formatCurrency(maturityAmount)}</p>
            </div>
         </div>
      </div>
    </div>
  );
}
