"use client";

import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip as RechartsTooltip, Cell } from "recharts";

const COLORS = ["#e2e8f0", "#ec4899"];

export default function InflationCalculator() {
  const [currentAmount, setCurrentAmount] = useState(100000);
  const [inflationRate, setInflationRate] = useState(6);
  const [timePeriod, setTimePeriod] = useState(10);

  const { futureAmount, difference } = useMemo(() => {
    const futureAmount = currentAmount * Math.pow(1 + inflationRate / 100, timePeriod);
    const difference = futureAmount - currentAmount;

    return {
      futureAmount,
      difference,
    };
  }, [currentAmount, inflationRate, timePeriod]);

  const data = [
    { name: "Current Cost", value: currentAmount },
    { name: "Future Cost", value: futureAmount },
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
        
        {/* Current Expense */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Current Cost / Expense</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#ec4899] font-bold border border-slate-200">
              <span className="text-sm">₹</span>
              <input 
                 type="number" 
                 className="w-24 bg-transparent outline-none text-right appearance-none" 
                 value={currentAmount}
                 onChange={(e) => setCurrentAmount(Number(e.target.value))}
                 min={1000} 
                 max={10000000}
                 step={1000}
              />
            </div>
          </div>
          <input
            type="range"
            min={1000}
            max={10000000}
            step={10000}
            value={currentAmount}
            onChange={(e) => setCurrentAmount(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#ec4899]"
          />
        </div>

        {/* Inflation Rate */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Expected Inflation Rate (p.a)</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#ec4899] font-bold border border-slate-200">
              <input 
                 type="number" 
                 className="w-12 bg-transparent outline-none text-right appearance-none" 
                 value={inflationRate}
                 onChange={(e) => setInflationRate(Number(e.target.value))}
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
            value={inflationRate}
            onChange={(e) => setInflationRate(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#ec4899]"
          />
        </div>

        {/* Time period */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Time period</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#ec4899] font-bold border border-slate-200">
              <input 
                 type="number" 
                 className="w-12 bg-transparent outline-none text-right appearance-none" 
                 value={timePeriod}
                 onChange={(e) => setTimePeriod(Number(e.target.value))}
                 min={1} 
                 max={50}
                 step={1}
              />
              <span className="text-sm">Yr</span>
            </div>
          </div>
          <input
            type="range"
            min={1}
            max={50}
            step={1}
            value={timePeriod}
            onChange={(e) => setTimePeriod(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#ec4899]"
          />
        </div>
      </div>

      <div className="flex flex-col rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-10 justify-center">
         <div className="h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
               <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" opacity={0.5} />
                  <XAxis dataKey="name" tick={{fill: '#94a3b8', fontSize: 12}} axisLine={false} tickLine={false} />
                  <RechartsTooltip 
                     formatter={(value: number | string) => formatCurrency(Number(value))}
                     contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                     cursor={{fill: 'var(--tw-colors-slate-100)', opacity: 0.1}}
                  />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={60}>
                     {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                     ))}
                  </Bar>
               </BarChart>
            </ResponsiveContainer>
         </div>
         
         <div className="mt-10 space-y-5">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <span className="h-3 w-3 rounded-full bg-slate-200"></span>
                 <p className="text-sm font-medium text-[#4a5568]">Current Cost</p>
               </div>
               <p className="font-semibold text-[#1a1560]">{formatCurrency(currentAmount)}</p>
            </div>
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <span className="h-3 w-3 rounded-full bg-slate-200"></span>
                 <p className="text-sm font-medium text-[#4a5568]">Extra Needed</p>
               </div>
               <p className="font-semibold text-[#1a1560]">{formatCurrency(difference)}</p>
            </div>
            <div className="pt-5 mt-2 border-t border-slate-200 flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <span className="h-3 w-3 rounded-full bg-[#ec4899]"></span>
                 <p className="text-base font-semibold text-[#4a5568]">Future Cost</p>
               </div>
               <p className="text-2xl font-bold text-[#1a1560] font-[family-name:var(--font-sora)]">{formatCurrency(futureAmount)}</p>
            </div>
         </div>
      </div>
    </div>
  );
}


