"use client";

import { useState, useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip as RechartsTooltip } from "recharts";
import CalculatorChart from "./CalculatorChart";

const COLORS = ["#e2e8f0", "#f59e0b"];

export default function SWPCalculator() {
  const [totalInvestment, setTotalInvestment] = useState(5000000); // 50 lakhs
  const [withdrawalPerMonth, setWithdrawalPerMonth] = useState(10000);
  const [expectedReturn, setExpectedReturn] = useState(8);
  const [timePeriod, setTimePeriod] = useState(10); // 10 years

  const { totalInvested, totalWithdrawn, finalValue } = useMemo(() => {
    let balance = totalInvestment;
    const r = expectedReturn / 12 / 100;
    const n = timePeriod * 12;
    let totalWithdrawn = 0;

    for (let i = 0; i < n; i++) {
      const interest = balance * r;
      balance = balance + interest - withdrawalPerMonth;
      totalWithdrawn += withdrawalPerMonth;
      if (balance <= 0) {
        balance = 0;
        break;
      }
    }

    return {
      totalInvested: totalInvestment,
      totalWithdrawn,
      finalValue: Math.max(0, balance),
    };
  }, [totalInvestment, withdrawalPerMonth, expectedReturn, timePeriod]);

  const data = [
    { name: "Total Invested", value: totalInvested },
    { name: "Final Value", value: finalValue },
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
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#f59e0b] font-bold border border-slate-200">
              <span className="text-sm">₹</span>
              <input
                type="number"
                className="w-24 bg-transparent outline-none text-right appearance-none"
                value={totalInvestment}
                onChange={(e) => setTotalInvestment(Number(e.target.value))}
                min={50000}
                max={50000000}
                step={10000}
              />
            </div>
          </div>
          <input
            type="range"
            min={50000}
            max={50000000}
            step={10000}
            value={totalInvestment}
            onChange={(e) => setTotalInvestment(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#f59e0b]"
          />
        </div>

        {/* Withdrawal per month Slider */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Withdrawal per month</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#f59e0b] font-bold border border-slate-200">
              <span className="text-sm">₹</span>
              <input
                type="number"
                className="w-24 bg-transparent outline-none text-right appearance-none"
                value={withdrawalPerMonth}
                onChange={(e) => setWithdrawalPerMonth(Number(e.target.value))}
                min={500}
                max={500000}
                step={1000}
              />
            </div>
          </div>
          <input
            type="range"
            min={500}
            max={500000}
            step={1000}
            value={withdrawalPerMonth}
            onChange={(e) => setWithdrawalPerMonth(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#f59e0b]"
          />
        </div>

        {/* Expected Return Rate */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Expected return rate (p.a)</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#f59e0b] font-bold border border-slate-200">
              <input
                type="number"
                className="w-12 bg-transparent outline-none text-right appearance-none"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
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
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#f59e0b]"
          />
        </div>

        {/* Time period */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#4a5568]">Time period</label>
            <div className="flex items-center gap-1 rounded-xl bg-[#f8f9fa] px-4 py-2 text-[#f59e0b] font-bold border border-slate-200">
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
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#f59e0b]"
          />
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
                formatter={(value) => formatCurrency(Number(value))}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
              />
            </PieChart>
          </CalculatorChart>
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
              <span className="h-3 w-3 rounded-full bg-[#f59e0b]"></span>
              <p className="text-sm font-medium text-[#4a5568]">Total Withdrawal</p>
            </div>
            <p className="font-semibold text-[#1a1560]">{formatCurrency(totalWithdrawn)}</p>
          </div>
          <div className="pt-5 mt-2 border-t border-slate-200 flex items-center justify-between">
            <p className="text-base font-semibold text-[#4a5568]">Final Value</p>
            <p className="text-xl sm:text-2xl font-bold text-[#1a1560] font-[family-name:var(--font-sora)] break-all">{formatCurrency(finalValue)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

