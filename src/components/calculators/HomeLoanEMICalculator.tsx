"use client";

import { useState, useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from "recharts";

const COLORS = ["#e2e8f0", "#8b5cf6"];

export default function HomeLoanEMICalculator() {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);

  const { emi, totalInterest, totalAmount } = useMemo(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = loanTenure * 12;

    // EMI formula: E = P * r * (1+r)^n / ((1+r)^n - 1)
    const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    
    const totalAmount = emi * n;
    const totalInterest = totalAmount - P;

    return {
      emi,
      totalInterest,
      totalAmount,
    };
  }, [loanAmount, interestRate, loanTenure]);

  const data = [
    { name: "Principal Amount", value: loanAmount },
    { name: "Total Interest", value: totalInterest },
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
        
        {/* Loan Amount */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Loan Amount</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#8b5cf6] font-bold border border-slate-200">
              <span className="text-sm">₹</span>
              <input 
                 type="number" 
                 className="w-24 bg-transparent outline-none text-right appearance-none" 
                 value={loanAmount}
                 onChange={(e) => setLoanAmount(Number(e.target.value))}
                 min={100000} 
                 max={100000000}
                 step={100000}
              />
            </div>
          </div>
          <input
            type="range"
            min={100000}
            max={100000000}
            step={100000}
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#8b5cf6]"
          />
        </div>

        {/* Interest Rate */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Rate of Interest (p.a)</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#8b5cf6] font-bold border border-slate-200">
              <input 
                 type="number" 
                 className="w-12 bg-transparent outline-none text-right appearance-none" 
                 value={interestRate}
                 onChange={(e) => setInterestRate(Number(e.target.value))}
                 min={1} 
                 max={30}
                 step={0.1}
              />
              <span className="text-sm">%</span>
            </div>
          </div>
          <input
            type="range"
            min={1}
            max={30}
            step={0.1}
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#8b5cf6]"
          />
        </div>

        {/* Loan Tenure */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Loan Tenure</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#8b5cf6] font-bold border border-slate-200">
              <input 
                 type="number" 
                 className="w-12 bg-transparent outline-none text-right appearance-none" 
                 value={loanTenure}
                 onChange={(e) => setLoanTenure(Number(e.target.value))}
                 min={1} 
                 max={30}
                 step={1}
              />
              <span className="text-sm">Yr</span>
            </div>
          </div>
          <input
            type="range"
            min={1}
            max={30}
            step={1}
            value={loanTenure}
            onChange={(e) => setLoanTenure(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#8b5cf6]"
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
                     formatter={(value: number) => formatCurrency(value)}
                     contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                  />
               </PieChart>
            </ResponsiveContainer>
         </div>
         
         <div className="mt-10 space-y-5">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <span className="h-3 w-3 rounded-full bg-slate-200"></span>
                 <p className="text-sm font-medium text-[#4a5568]">Principal Amount</p>
               </div>
               <p className="font-semibold text-[#1a1560]">{formatCurrency(loanAmount)}</p>
            </div>
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <span className="h-3 w-3 rounded-full bg-[#8b5cf6]"></span>
                 <p className="text-sm font-medium text-[#4a5568]">Total Interest</p>
               </div>
               <p className="font-semibold text-[#1a1560]">{formatCurrency(totalInterest)}</p>
            </div>
            <div className="pt-5 mt-2 border-t border-slate-200 flex items-center justify-between">
               <p className="text-base font-semibold text-[#4a5568]">Total payable</p>
               <p className="text-xl sm:text-2xl font-bold text-[#1a1560] font-[family-name:var(--font-sora)] break-all">{formatCurrency(totalAmount)}</p>
            </div>
         </div>
      </div>
    </div>
  );
}

