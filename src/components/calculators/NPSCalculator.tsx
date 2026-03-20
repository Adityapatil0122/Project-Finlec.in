"use client";

import { useState, useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from "recharts";

const COLORS = ["#e2e8f0", "#a855f7"];

export default function NPSCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(10);
  const [currentAge, setCurrentAge] = useState(30);

  const { totalInvested, estReturns, maturityAmount } = useMemo(() => {
    const retirementAge = 60;
    const yearsInvested = Math.max(0, retirementAge - currentAge);
    const months = yearsInvested * 12;
    const r = expectedReturn / 12 / 100;

    // NPS maturity is essentially a monthly SIP calculation till age 60
    let maturityAmount = 0;
    if (r === 0) {
      maturityAmount = monthlyInvestment * months;
    } else {
      maturityAmount = monthlyInvestment * (Math.pow(1 + r, months) - 1) * (1 + r) / r;
    }

    const totalInvested = monthlyInvestment * months;
    const estReturns = maturityAmount - totalInvested;

    return {
      totalInvested,
      estReturns: estReturns > 0 ? estReturns : 0,
      maturityAmount: maturityAmount > 0 ? maturityAmount : 0,
    };
  }, [monthlyInvestment, expectedReturn, currentAge]);

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
    <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
      <div className="flex flex-col gap-10 rounded-3xl sm:rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-10">
        
        {/* Monthly Investment */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Investment per month</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#a855f7] font-bold border border-slate-200">
              <span className="text-sm">₹</span>
              <input 
                 type="number" 
                 className="w-24 bg-transparent outline-none text-right appearance-none" 
                 value={monthlyInvestment}
                 onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
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
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#a855f7]"
          />
        </div>

        {/* Expected return */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Expected return (p.a)</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#a855f7] font-bold border border-slate-200">
              <input 
                 type="number" 
                 className="w-12 bg-transparent outline-none text-right appearance-none" 
                 value={expectedReturn}
                 onChange={(e) => setExpectedReturn(Number(e.target.value))}
                 min={8} 
                 max={15}
                 step={0.1}
              />
              <span className="text-sm">%</span>
            </div>
          </div>
          <input
            type="range"
            min={8}
            max={15}
            step={0.1}
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#a855f7]"
          />
        </div>

        {/* Current Age */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Your current Age</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#a855f7] font-bold border border-slate-200">
              <input 
                 type="number" 
                 className="w-12 bg-transparent outline-none text-right appearance-none" 
                 value={currentAge}
                 onChange={(e) => setCurrentAge(Number(e.target.value))}
                 min={18} 
                 max={59}
                 step={1}
              />
              <span className="text-sm">Yr</span>
            </div>
          </div>
          <input
            type="range"
            min={18}
            max={59}
            step={1}
            value={currentAge}
            onChange={(e) => setCurrentAge(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#a855f7]"
          />
        </div>
      </div>

      <div className="flex flex-col rounded-3xl sm:rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-10 justify-center">
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
                 <span className="h-3 w-3 rounded-full bg-slate-200"></span>
                 <p className="text-sm font-medium text-[#4a5568]">Total Invested</p>
               </div>
               <p className="font-semibold text-[#1a1560]">{formatCurrency(totalInvested)}</p>
            </div>
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <span className="h-3 w-3 rounded-full bg-[#a855f7]"></span>
                 <p className="text-sm font-medium text-[#4a5568]">Est. Returns</p>
               </div>
               <p className="font-semibold text-[#1a1560]">{formatCurrency(estReturns)}</p>
            </div>
            <div className="pt-5 mt-2 border-t border-slate-200 flex items-center justify-between">
               <p className="text-base font-semibold text-[#4a5568]">Total Corpus (at age 60)</p>
               <p className="text-xl sm:text-2xl font-bold text-[#1a1560] font-[family-name:var(--font-sora)] break-all">{formatCurrency(maturityAmount)}</p>
            </div>
         </div>
      </div>
    </div>
  );
}

