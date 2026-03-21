"use client";

import { useState, useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip as RechartsTooltip } from "recharts";
import CalculatorChart from "./CalculatorChart";

const COLORS = ["#e2e8f0", "#7B4FD4"];

export default function LumpsumCalculator() {
  const [totalInvestment, setTotalInvestment] = useState(100000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  const { totalInvested, estReturns, maturityAmount } = useMemo(() => {
    const P = totalInvestment;
    const n = timePeriod;
    const r = expectedReturn / 100;

    const totalInvested = P;
    
    // M = P * (1 + r)^n
    const maturityAmount = P * Math.pow(1 + r, n);
    const estReturns = maturityAmount - totalInvested;

    return {
      totalInvested,
      estReturns,
      maturityAmount,
    };
  }, [totalInvestment, expectedReturn, timePeriod]);

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
    <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
      <div className="flex flex-col gap-10 rounded-3xl sm:rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-10">
        
        {/* Total Investment Slider */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Total investment</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#7B4FD4] font-bold border border-slate-200">
              <span className="text-sm">₹</span>
              <input 
                 type="number" 
                 className="w-24 bg-transparent outline-none text-right appearance-none" 
                 value={totalInvestment}
                 onChange={(e) => setTotalInvestment(Number(e.target.value))}
                 min={500} 
                 max={10000000}
                 step={1000}
              />
            </div>
          </div>
          <input
            type="range"
            min={500}
            max={10000000}
            step={1000}
            value={totalInvestment}
            onChange={(e) => setTotalInvestment(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#7B4FD4]"
          />
        </div>

        {/* Expected Return Rate */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Expected return rate (p.a)</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#7B4FD4] font-bold border border-slate-200">
              <input 
                 type="number" 
                 className="w-12 bg-transparent outline-none text-right appearance-none" 
                 value={expectedReturn}
                 onChange={(e) => setExpectedReturn(Number(e.target.value))}
                 min={1} 
                 max={50}
                 step={0.1}
              />
              <span className="text-sm">%</span>
            </div>
          </div>
          <input
            type="range"
            min={1}
            max={50}
            step={0.1}
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#7B4FD4]"
          />
        </div>

        {/* Time period */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Time period</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#7B4FD4] font-bold border border-slate-200">
              <input 
                 type="number" 
                 className="w-12 bg-transparent outline-none text-right appearance-none" 
                 value={timePeriod}
                 onChange={(e) => setTimePeriod(Number(e.target.value))}
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
            value={timePeriod}
            onChange={(e) => setTimePeriod(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#7B4FD4]"
          />
        </div>
        
        <div className="mt-4 pt-6 border-t border-slate-200 grid grid-cols-2 gap-4">
           <div>
              <p className="text-sm text-[#4a5568]">Total invested</p>
              <p className="text-xl font-bold text-[#1a1560] mt-1">{formatCurrency(totalInvested)}</p>
           </div>
           <div className="text-right">
              <button className="min-h-[48px] rounded-full bg-[linear-gradient(135deg,#7B4FD4,#9b72f0)] px-8 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_-12px_rgba(123,79,212,0.6)] transition-all hover:translate-y-[-1px] hover:shadow-[0_16px_32px_-12px_rgba(123,79,212,0.7)]">
                Start investing
              </button>
           </div>
        </div>
      </div>

      <div className="flex flex-col rounded-3xl sm:rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-10 justify-center">
         <div className="h-[240px] w-full">
            <CalculatorChart>
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
                     formatter={(value) => formatCurrency(Number(value ?? 0))}
                     contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                  />
               </PieChart>
            </CalculatorChart>
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
                 <span className="h-3 w-3 rounded-full bg-[#7B4FD4]"></span>
                 <p className="text-sm font-medium text-[#4a5568]">Est. returns</p>
               </div>
               <p className="font-semibold text-[#1a1560]">{formatCurrency(estReturns)}</p>
            </div>
            <div className="pt-5 mt-2 border-t border-slate-200 flex items-center justify-between">
               <p className="text-base font-semibold text-[#4a5568]">Total value</p>
               <p className="text-xl sm:text-2xl font-bold text-[#1a1560] font-[family-name:var(--font-sora)] break-all">{formatCurrency(maturityAmount)}</p>
            </div>
         </div>
      </div>
    </div>
  );
}

