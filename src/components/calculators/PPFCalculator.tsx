"use client";

import { useState, useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from "recharts";

const COLORS = ["#e2e8f0", "#eab308"];

export default function PPFCalculator() {
  const [yearlyInvestment, setYearlyInvestment] = useState(100000);
  const [timePeriod, setTimePeriod] = useState(15);
  const interestRate = 7.1; // Currently fixed for PPF

  const { totalInvested, estReturns, maturityAmount } = useMemo(() => {
    let maturityAmount = 0;
    const r = interestRate / 100;

    // PPF interest is calculated annually on the lowest balance between the 5th and end of the month
    // For simplicity, building standard yearly compounding model: A = P[((1+i)^n - 1)/i] * (1+i)
    // assuming investment made at beginning of year.
    for (let i = 0; i < timePeriod; i++) {
        maturityAmount = (maturityAmount + yearlyInvestment) * (1 + r);
    }
    
    const totalInvested = yearlyInvestment * timePeriod;
    const estReturns = maturityAmount - totalInvested;

    return {
      totalInvested,
      estReturns,
      maturityAmount,
    };
  }, [yearlyInvestment, timePeriod]);

  const data = [
    { name: "Total Invested", value: totalInvested },
    { name: "Est. Returns", value: estReturns },
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
      <div className="flex flex-col gap-10 rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:border-white/10 dark:bg-slate-950/60 sm:p-10">
        
        {/* Yearly Investment */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568] dark:text-slate-300">Yearly Investment</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#eab308] font-bold dark:bg-slate-900 border border-slate-200 dark:border-white/10">
              <span className="text-sm">₹</span>
              <input 
                 type="number" 
                 className="w-24 bg-transparent outline-none text-right appearance-none" 
                 value={yearlyInvestment}
                 onChange={(e) => setYearlyInvestment(Number(e.target.value))}
                 min={500} 
                 max={150000}
                 step={500}
              />
            </div>
          </div>
          <input
            type="range"
            min={500}
            max={150000}
            step={500}
            value={yearlyInvestment}
            onChange={(e) => setYearlyInvestment(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#eab308] dark:bg-slate-800"
          />
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Max limit under section 80C is ₹1.5 Lakh</p>
        </div>

        {/* Time period */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568] dark:text-slate-300">Time period</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#eab308] font-bold dark:bg-slate-900 border border-slate-200 dark:border-white/10">
              <input 
                 type="number" 
                 className="w-12 bg-transparent outline-none text-right appearance-none" 
                 value={timePeriod}
                 onChange={(e) => setTimePeriod(Number(e.target.value))}
                 min={15} 
                 max={50}
                 step={5}
              />
              <span className="text-sm">Yr</span>
            </div>
          </div>
          <input
            type="range"
            min={15}
            max={50}
            step={5}
            value={timePeriod}
            onChange={(e) => setTimePeriod(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#eab308] dark:bg-slate-800"
          />
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">PPF has a minimum lock-in of 15 years</p>
        </div>

        {/* Rate of interest */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568] dark:text-slate-300">Rate of interest (p.a)</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#eab308] font-bold dark:bg-slate-900 border border-slate-200 dark:border-white/10 opacity-75">
              <span>7.1</span>
              <span className="text-sm">%</span>
            </div>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Fixed by govt. each quarter.</p>
        </div>
      </div>

      <div className="flex flex-col rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:border-white/10 dark:bg-slate-950/60 sm:p-10 justify-center">
         <div className="h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                  <Pie
                     data={data}
                     cx="50%"
                     cy="50%"
                     innerRadius={70}
                     outerRadius={95}
                     paddingAngle={2}
                     dataKey="value"
                     stroke="none"
                  >
                     {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                     ))}
                  </Pie>
                  <RechartsTooltip 
                     formatter={(value: number | string) => formatCurrency(Number(value))}
                     contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                  />
               </PieChart>
            </ResponsiveContainer>
         </div>
         
         <div className="mt-10 space-y-5">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <span className="h-3 w-3 rounded-full bg-slate-200 dark:bg-slate-700"></span>
                 <p className="text-sm font-medium text-[#4a5568] dark:text-slate-400">Total Invested</p>
               </div>
               <p className="font-semibold text-[#1a1560] dark:text-white">{formatCurrency(totalInvested)}</p>
            </div>
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <span className="h-3 w-3 rounded-full bg-[#eab308]"></span>
                 <p className="text-sm font-medium text-[#4a5568] dark:text-slate-400">Est. Returns</p>
               </div>
               <p className="font-semibold text-[#1a1560] dark:text-white">{formatCurrency(estReturns)}</p>
            </div>
            <div className="pt-5 mt-2 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
               <p className="text-base font-semibold text-[#4a5568] dark:text-slate-300">Total Value</p>
               <p className="text-2xl font-bold text-[#1a1560] dark:text-white font-[family-name:var(--font-sora)]">{formatCurrency(maturityAmount)}</p>
            </div>
         </div>
      </div>
    </div>
  );
}
