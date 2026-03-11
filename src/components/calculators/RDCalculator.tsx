"use client";

import { useState, useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from "recharts";

const COLORS = ["#e2e8f0", "#ef4444"];

export default function RDCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [interestRate, setInterestRate] = useState(7);
  const [timePeriod, setTimePeriod] = useState(5);

  const calculateRD = () => {
    let maturityAmount = 0;
    const months = timePeriod * 12;
    const r = interestRate / 400; // Quarterly interest rate

    // In India, RD interest is compounded quarterly.
    for (let i = 1; i <= months; i++) {
       // Number of quarters remaining for this specific monthly deposit
       const quartersRemaining = (months - i + 1) / 3;
       maturityAmount += monthlyInvestment * Math.pow(1 + r, quartersRemaining);
    }
    
    const totalInvested = monthlyInvestment * months;
    const estReturns = maturityAmount - totalInvested;

    return {
      totalInvested,
      estReturns: estReturns > 0 ? estReturns : 0,
      maturityAmount: maturityAmount > 0 ? maturityAmount : 0,
    };
  };

  const { totalInvested, estReturns, maturityAmount } = useMemo(() => calculateRD(), [monthlyInvestment, interestRate, timePeriod]);

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
        
        {/* Monthly Investment */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568] dark:text-slate-300">Monthly Investment</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#ef4444] font-bold dark:bg-slate-900 border border-slate-200 dark:border-white/10">
              <span className="text-sm">₹</span>
              <input 
                 type="number" 
                 className="w-24 bg-transparent outline-none text-right appearance-none" 
                 value={monthlyInvestment}
                 onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                 min={500} 
                 max={1000000}
                 step={500}
              />
            </div>
          </div>
          <input
            type="range"
            min={500}
            max={1000000}
            step={500}
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#ef4444] dark:bg-slate-800"
          />
        </div>

        {/* Rate of interest */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568] dark:text-slate-300">Rate of interest (p.a)</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#ef4444] font-bold dark:bg-slate-900 border border-slate-200 dark:border-white/10">
              <input 
                 type="number" 
                 className="w-12 bg-transparent outline-none text-right appearance-none" 
                 value={interestRate}
                 onChange={(e) => setInterestRate(Number(e.target.value))}
                 min={1} 
                 max={15}
                 step={0.1}
              />
              <span className="text-sm">%</span>
            </div>
          </div>
          <input
            type="range"
            min={1}
            max={15}
            step={0.1}
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#ef4444] dark:bg-slate-800"
          />
        </div>

        {/* Time period */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568] dark:text-slate-300">Time period</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#ef4444] font-bold dark:bg-slate-900 border border-slate-200 dark:border-white/10">
              <input 
                 type="number" 
                 className="w-12 bg-transparent outline-none text-right appearance-none" 
                 value={timePeriod}
                 onChange={(e) => setTimePeriod(Number(e.target.value))}
                 min={1} 
                 max={20}
                 step={1}
              />
              <span className="text-sm">Yr</span>
            </div>
          </div>
          <input
            type="range"
            min={1}
            max={20}
            step={1}
            value={timePeriod}
            onChange={(e) => setTimePeriod(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#ef4444] dark:bg-slate-800"
          />
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
                     formatter={(value: any) => formatCurrency(Number(value))}
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
                 <span className="h-3 w-3 rounded-full bg-[#ef4444]"></span>
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
