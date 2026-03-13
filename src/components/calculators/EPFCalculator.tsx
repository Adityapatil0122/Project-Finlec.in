"use client";

import { useState, useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from "recharts";

const COLORS = ["#e2e8f0", "#ef4444"];

export default function EPFCalculator() {
  const [monthlySalary, setMonthlySalary] = useState(50000);
  const [currentAge, setCurrentAge] = useState(25);
  const [epfContribution, setEpfContribution] = useState(12);
  const [currentBalance, setCurrentBalance] = useState(0);

  const { totalInvested, estReturns, maturityAmount } = useMemo(() => {
    const retirementAge = 58;
    const yearsLeft = retirementAge - currentAge;
    
    // Simplification: Employee contributes X% of basic salary. 
    // Employer contributes 3.67% to EPF (8.33% goes to EPS).
    // Let's assume total contribution to EPF per month is:
    const employeeContrib = (monthlySalary * epfContribution) / 100;
    const employerContrib = (monthlySalary * 3.67) / 100;
    const totalMonthlyContrib = employeeContrib + employerContrib;
    
    const yearlyContrib = totalMonthlyContrib * 12;
    const returnRate = 8.1 / 100; // Standard EPF rate

    let balance = currentBalance;
    let invested = currentBalance;

    for (let i = 0; i < yearsLeft; i++) {
        invested += yearlyContrib;
        const interest = (balance + yearlyContrib / 2) * returnRate; // Approx average balance interest
        balance += yearlyContrib + interest;
    }

    const estReturns = balance - invested;

    return {
      totalInvested: invested,
      estReturns,
      maturityAmount: balance,
    };
  }, [monthlySalary, currentAge, epfContribution, currentBalance]);

  const data = [
    { name: "Total Invested", value: totalInvested },
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
      <div className="flex flex-col gap-10 rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:border-white/10 dark:bg-slate-950/60 sm:p-10">
        
        {/* Monthly Salary Slider */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568] dark:text-slate-300">Monthly Salary (Basic + DA)</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#ef4444] font-bold dark:bg-slate-900 border border-slate-200 dark:border-white/10">
              <span className="text-sm">₹</span>
              <input 
                 type="number" 
                 className="w-24 bg-transparent outline-none text-right appearance-none" 
                 value={monthlySalary}
                 onChange={(e) => setMonthlySalary(Number(e.target.value))}
                 min={1000} 
                 max={1000000}
                 step={1000}
              />
            </div>
          </div>
          <input
            type="range"
            min={1000}
            max={1000000}
            step={1000}
            value={monthlySalary}
            onChange={(e) => setMonthlySalary(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#ef4444] dark:bg-slate-800"
          />
        </div>

        {/* Current Age */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568] dark:text-slate-300">Your current age</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#ef4444] font-bold dark:bg-slate-900 border border-slate-200 dark:border-white/10">
              <input 
                 type="number" 
                 className="w-12 bg-transparent outline-none text-right appearance-none" 
                 value={currentAge}
                 onChange={(e) => setCurrentAge(Number(e.target.value))}
                 min={15} 
                 max={58}
                 step={1}
              />
              <span className="text-sm">Yr</span>
            </div>
          </div>
          <input
            type="range"
            min={15}
            max={58}
            step={1}
            value={currentAge}
            onChange={(e) => setCurrentAge(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#ef4444] dark:bg-slate-800"
          />
        </div>

        {/* Employee Contribution */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568] dark:text-slate-300">Your given contribution to EPF</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#ef4444] font-bold dark:bg-slate-900 border border-slate-200 dark:border-white/10">
              <input 
                 type="number" 
                 className="w-12 bg-transparent outline-none text-right appearance-none" 
                 value={epfContribution}
                 onChange={(e) => setEpfContribution(Number(e.target.value))}
                 min={1} 
                 max={20}
                 step={1}
              />
              <span className="text-sm">%</span>
            </div>
          </div>
          <input
            type="range"
            min={1}
            max={20}
            step={1}
            value={epfContribution}
            onChange={(e) => setEpfContribution(Number(e.target.value))}
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
                     formatter={(value: number) => formatCurrency(value)}
                     contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                  />
               </PieChart>
            </ResponsiveContainer>
         </div>
         
         <div className="mt-10 space-y-5">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <span className="h-3 w-3 rounded-full bg-slate-200 dark:bg-slate-700"></span>
                 <p className="text-sm font-medium text-[#4a5568] dark:text-slate-400">Total Investment</p>
               </div>
               <p className="font-semibold text-[#1a1560] dark:text-white">{formatCurrency(totalInvested)}</p>
            </div>
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <span className="h-3 w-3 rounded-full bg-[#ef4444]"></span>
                 <p className="text-sm font-medium text-[#4a5568] dark:text-slate-400">Total Interest</p>
               </div>
               <p className="font-semibold text-[#1a1560] dark:text-white">{formatCurrency(estReturns)}</p>
            </div>
            <div className="pt-5 mt-2 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
               <p className="text-base font-semibold text-[#4a5568] dark:text-slate-300">Total value</p>
               <p className="text-2xl font-bold text-[#1a1560] dark:text-white font-[family-name:var(--font-sora)]">{formatCurrency(maturityAmount)}</p>
            </div>
         </div>
      </div>
    </div>
  );
}
