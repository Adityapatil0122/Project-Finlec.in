"use client";

import { useState, useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip as RechartsTooltip } from "recharts";
import CalculatorChart from "./CalculatorChart";

const COLORS = ["#e2e8f0", "#04b488"]; // Slate 200 for initial, primary for profit

export default function CAGRCalculator() {
  const [initialValue, setInitialValue] = useState(100000);
  const [finalValue, setFinalValue] = useState(300000);
  const [duration, setDuration] = useState(5);

  const { cagr, totalProfit } = useMemo(() => {
    if (initialValue <= 0 || finalValue <= 0 || duration <= 0) {
      return { cagr: 0, totalProfit: 0 };
    }
    const cagr = (Math.pow(finalValue / initialValue, 1 / duration) - 1) * 100;
    const totalProfit = finalValue - initialValue;
    return { cagr, totalProfit };
  }, [initialValue, finalValue, duration]);

  const data = [
    { name: "Initial investment", value: initialValue },
    { name: "Profit", value: Math.max(0, totalProfit) },
  ];

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
      <div className="flex flex-col gap-10 rounded-3xl sm:rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-10">

        {/* Initial Value Slider */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Initial value</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#04b488] font-bold border border-slate-200">
              <span className="text-sm">{"\u20B9"}</span>
              <input
                 type="number"
                 className="w-28 bg-transparent outline-none text-right appearance-none"
                 value={initialValue}
                 onChange={(e) => setInitialValue(Number(e.target.value))}
                 min={1000}
                 max={100000000}
                 step={1000}
              />
            </div>
          </div>
          <input
            type="range"
            min={1000}
            max={100000000}
            step={1000}
            value={initialValue}
            onChange={(e) => setInitialValue(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#04b488]"
          />
        </div>

        {/* Final Value Slider */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Final value</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#04b488] font-bold border border-slate-200">
              <span className="text-sm">{"\u20B9"}</span>
              <input
                 type="number"
                 className="w-28 bg-transparent outline-none text-right appearance-none"
                 value={finalValue}
                 onChange={(e) => setFinalValue(Number(e.target.value))}
                 min={1000}
                 max={500000000}
                 step={1000}
              />
            </div>
          </div>
          <input
            type="range"
            min={1000}
            max={500000000}
            step={1000}
            value={finalValue}
            onChange={(e) => setFinalValue(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#04b488]"
          />
        </div>

        {/* Duration Slider */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Duration</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#04b488] font-bold border border-slate-200">
              <input
                 type="number"
                 className="w-12 bg-transparent outline-none text-right appearance-none"
                 value={duration}
                 onChange={(e) => setDuration(Number(e.target.value))}
                 min={1}
                 max={40}
                 step={1}
              />
              <span className="text-sm">Yr</span>
            </div>
          </div>
          <input
            type="range"
            min={1}
            max={40}
            step={1}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#04b488]"
          />
        </div>

        <div className="mt-4 pt-6 border-t border-slate-200 grid grid-cols-2 gap-4">
           <div>
              <p className="text-sm text-[#4a5568]">Total Profit</p>
              <p className="text-xl font-bold text-[#1a1560] mt-1">{formatCurrency(totalProfit)}</p>
           </div>
           <div className="text-right">
              <button className="min-h-[48px] rounded-full bg-[linear-gradient(135deg,#04b488,#18d1b1)] px-8 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_-12px_rgba(4,180,136,0.6)] transition-all hover:translate-y-[-1px] hover:shadow-[0_16px_32px_-12px_rgba(4,180,136,0.7)]">
                Start investing
              </button>
           </div>
        </div>
      </div>

      <div className="flex flex-col rounded-3xl sm:rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-10 justify-center">
         {/* CAGR Result - Prominent */}
         <div className="text-center mb-6">
            <p className="text-sm font-semibold text-[#4a5568] mb-2">Your CAGR</p>
            <p className="text-4xl sm:text-5xl font-bold text-[#04b488] font-[family-name:var(--font-sora)]">
              {cagr.toFixed(2)}%
            </p>
            <p className="text-xs text-[#4a5568] mt-1">per annum</p>
         </div>

         <div className="h-[200px] w-full">
            <CalculatorChart>
               <PieChart>
                  <Pie
                     data={data}
                     cx="50%"
                     cy="50%"
                     innerRadius={60}
                     outerRadius={85}
                     paddingAngle={2}
                     dataKey="value"
                     stroke="none"
                  >
                     {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                     ))}
                  </Pie>
                  <RechartsTooltip
                     formatter={(value) => formatCurrency(Number(value ?? 0))}
                     contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                  />
               </PieChart>
            </CalculatorChart>
         </div>

         <div className="mt-6 space-y-5">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <span className="h-3 w-3 rounded-full bg-slate-200"></span>
                 <p className="text-sm font-medium text-[#4a5568]">Initial investment</p>
               </div>
               <p className="font-semibold text-[#1a1560]">{formatCurrency(initialValue)}</p>
            </div>
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <span className="h-3 w-3 rounded-full bg-[#04b488]"></span>
                 <p className="text-sm font-medium text-[#4a5568]">Total profit</p>
               </div>
               <p className="font-semibold text-[#1a1560]">{formatCurrency(totalProfit)}</p>
            </div>
            <div className="pt-5 mt-2 border-t border-slate-200 flex items-center justify-between">
               <p className="text-base font-semibold text-[#4a5568]">Final value</p>
               <p className="text-xl sm:text-2xl font-bold text-[#1a1560] font-[family-name:var(--font-sora)] break-all">{formatCurrency(finalValue)}</p>
            </div>
         </div>
      </div>
    </div>
  );
}
