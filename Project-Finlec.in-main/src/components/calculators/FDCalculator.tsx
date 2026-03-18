"use client";

import { useState, useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from "recharts";

const COLORS = ["#e2e8f0", "#f97316"];

export default function FDCalculator() {
  const [totalInvestment, setTotalInvestment] = useState(100000); // 1 Lakh
  const [interestRate, setInterestRate] = useState(7);
  const [timePeriod, setTimePeriod] = useState(5);

  const { totalInvested, estReturns, maturityAmount } = useMemo(() => {
    const P = totalInvestment;
    const r = interestRate / 100;
    const t = timePeriod;
    const n = 4; // Compounded quarterly

    // Formula: A = P * (1 + r/n)^(n*t)
    const maturityAmount = P * Math.pow((1 + r / n), n * t);
    const estReturns = maturityAmount - P;

    return {
      totalInvested: P,
      estReturns,
      maturityAmount,
    };
  }, [totalInvestment, interestRate, timePeriod]);

  const data = [
    { name: "Total Investment", value: totalInvested },
    { name: "Est. Return", value: estReturns },
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
        
        {/* Total Investment */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Total Investment</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#f97316] font-bold border border-slate-200">
              <span className="text-sm">â‚¹</span>
              <input 
                 type="number" 
                 className="w-24 bg-transparent outline-none text-right appearance-none" 
                 value={totalInvestment}
                 onChange={(e) => setTotalInvestment(Number(e.target.value))}
                 min={10000} 
                 max={50000000}
                 step={10000}
              />
            </div>
          </div>
          <input
            type="range"
            min={10000}
            max={50000000}
            step={10000}
            value={totalInvestment}
            onChange={(e) => setTotalInvestment(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#f97316]"
          />
        </div>

        {/* Rate of interest */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Rate of interest (p.a)</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#f97316] font-bold border border-slate-200">
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
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#f97316]"
          />
        </div>

        {/* Time period */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Time period</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#f97316] font-bold border border-slate-200">
              <input 
                 type="number" 
                 className="w-12 bg-transparent outline-none text-right appearance-none" 
                 value={timePeriod}
                 onChange={(e) => setTimePeriod(Number(e.target.value))}
                 min={1} 
                 max={25}
                 step={1}
              />
              <span className="text-sm">Yr</span>
            </div>
          </div>
          <input
            type="range"
            min={1}
            max={25}
            step={1}
            value={timePeriod}
            onChange={(e) => setTimePeriod(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#f97316]"
          />
        </div>
      </div>

      <div className="flex flex-col rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-10 justify-center">
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
                     formatter={(value) => formatCurrency(Number(value))}
                     contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                  />
               </PieChart>
            </ResponsiveContainer>
         </div>
         
         <div className="mt-10 space-y-5">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <span className="h-3 w-3 rounded-full bg-slate-200"></span>
                 <p className="text-sm font-medium text-[#4a5568]">Total Investment</p>
               </div>
               <p className="font-semibold text-[#1a1560]">{formatCurrency(totalInvested)}</p>
            </div>
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <span className="h-3 w-3 rounded-full bg-[#f97316]"></span>
                 <p className="text-sm font-medium text-[#4a5568]">Total Interest</p>
               </div>
               <p className="font-semibold text-[#1a1560]">{formatCurrency(estReturns)}</p>
            </div>
            <div className="pt-5 mt-2 border-t border-slate-200 flex items-center justify-between">
               <p className="text-base font-semibold text-[#4a5568]">Total Value</p>
               <p className="text-2xl font-bold text-[#1a1560] font-[family-name:var(--font-sora)]">{formatCurrency(maturityAmount)}</p>
            </div>
         </div>
      </div>
    </div>
  );
}

