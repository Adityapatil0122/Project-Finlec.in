"use client";

import { useState, useMemo } from "react";

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const lifeExpectancy = 85;
  const [monthlyExpenses, setMonthlyExpenses] = useState(50000);
  const inflation = 6;
  const postRetirementReturns = 8;

  const { monthlyExpAtRetirement, requiredCorpus } = useMemo(() => {
    const yearsToRetire = Math.max(0, retirementAge - currentAge);
    const yearsInRetirement = Math.max(0, lifeExpectancy - retirementAge);

    // Future value of monthly expenses
    const expAtRetirement = monthlyExpenses * Math.pow(1 + inflation / 100, yearsToRetire);
    
    // Annual expense at retirement
    const annualExpAtRetirement = expAtRetirement * 12;

    // Real rate of return post retirement
    // r = (1 + R) / (1 + i) - 1
    const r = ((1 + postRetirementReturns / 100) / (1 + inflation / 100)) - 1;

    // Required corpus at retirement (Present value of an annuity growing at inflation)
    let corpus = 0;
    if (r === 0) {
      corpus = annualExpAtRetirement * yearsInRetirement;
    } else {
      corpus = annualExpAtRetirement * ((1 - Math.pow(1 + r, -yearsInRetirement)) / r);
    }
    
    // Safety check for NaN or infinite
    if (!isFinite(corpus) || corpus < 0) corpus = 0;

    return {
      monthlyExpAtRetirement: expAtRetirement,
      requiredCorpus: corpus,
    };
  }, [currentAge, retirementAge, lifeExpectancy, monthlyExpenses, inflation, postRetirementReturns]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
      <div className="flex flex-col gap-8 rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:rounded-[32px] sm:p-10">
        
        {/* Current Age */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Current Age</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#ec4899] font-bold border border-slate-200">
              <input 
                 type="number" 
                 className="w-12 bg-transparent outline-none text-right appearance-none" 
                 value={currentAge}
                 onChange={(e) => setCurrentAge(Number(e.target.value))}
                 min={18} 
                 max={70}
                 step={1}
              />
              <span className="text-sm">Yr</span>
            </div>
          </div>
          <input
            type="range"
            min={18}
            max={70}
            step={1}
            value={currentAge}
            onChange={(e) => setCurrentAge(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#ec4899]"
          />
        </div>

        {/* Retirement Age */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Retirement Age</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#ec4899] font-bold border border-slate-200">
              <input 
                 type="number" 
                 className="w-12 bg-transparent outline-none text-right appearance-none" 
                 value={retirementAge}
                 onChange={(e) => setRetirementAge(Number(e.target.value))}
                 min={currentAge + 1} 
                 max={80}
                 step={1}
              />
              <span className="text-sm">Yr</span>
            </div>
          </div>
          <input
            type="range"
            min={currentAge + 1}
            max={80}
            step={1}
            value={retirementAge}
            onChange={(e) => setRetirementAge(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#ec4899]"
          />
        </div>

        {/* Current Monthly Expenses */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Current Monthly Expenses</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#ec4899] font-bold border border-slate-200">
              <span className="text-sm">₹</span>
              <input 
                 type="number" 
                 className="w-24 bg-transparent outline-none text-right appearance-none" 
                 value={monthlyExpenses}
                 onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                 min={10000} 
                 max={1000000}
                 step={5000}
              />
            </div>
          </div>
          <input
            type="range"
            min={10000}
            max={1000000}
            step={5000}
            value={monthlyExpenses}
            onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#ec4899]"
          />
        </div>
      </div>

      <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:rounded-[32px] sm:p-10 justify-center">
         
         <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#1a1560] font-[family-name:var(--font-sora)]">Retirement Check</h3>
            
            <div className="rounded-2xl border border-[#ec4899]/20 bg-[#ec4899]/5 p-5">
               <p className="text-sm font-medium text-[#4a5568]">Monthly Expenses at Retirement (inflated)</p>
               <p className="mt-2 text-2xl font-bold text-[#ec4899] sm:text-3xl break-all">{formatCurrency(monthlyExpAtRetirement)}</p>
            </div>

            <div className="pt-5 border-t border-slate-200 flex flex-col gap-2">
               <p className="text-base font-semibold text-[#4a5568]">Total Corpus Required to Retire</p>
               <p className="text-2xl font-bold text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-4xl break-all">{formatCurrency(requiredCorpus)}</p>
               <p className="text-xs text-[#4a5568] mt-2">Assuming {inflation}% inflation and {postRetirementReturns}% return post-retirement, until age {lifeExpectancy}.</p>
            </div>
         </div>
      </div>
    </div>
  );
}

