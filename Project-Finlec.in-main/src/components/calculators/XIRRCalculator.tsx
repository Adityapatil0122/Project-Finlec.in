"use client";

import { useMemo, useState } from "react";
import { Plus, Trash2 } from "lucide-react";

type CashFlow = {
  id: number;
  date: string;
  amount: number;
};

const initialFlows: CashFlow[] = [
  { id: 1, date: "2024-04-01", amount: -100000 },
  { id: 2, date: "2025-04-01", amount: -100000 },
  { id: 3, date: "2026-03-01", amount: 240000 },
];

const formatCurrency = (val: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(val);

const toYearFraction = (start: Date, end: Date) => {
  const diffDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
  return diffDays / 365;
};

const calculateXirr = (flows: { amount: number; date: Date }[]) => {
  if (flows.length < 2) return null;
  const hasPositive = flows.some((f) => f.amount > 0);
  const hasNegative = flows.some((f) => f.amount < 0);
  if (!hasPositive || !hasNegative) return null;

  const baseDate = flows.reduce(
    (min, flow) => (flow.date < min ? flow.date : min),
    flows[0].date
  );

  const npv = (rate: number) =>
    flows.reduce(
      (sum, flow) =>
        sum + flow.amount / Math.pow(1 + rate, toYearFraction(baseDate, flow.date)),
      0
    );

  let low = -0.9999;
  let high = 1;
  let npvLow = npv(low);
  let npvHigh = npv(high);
  let guard = 0;

  while (npvLow * npvHigh > 0 && high < 1000 && guard < 40) {
    high *= 2;
    npvHigh = npv(high);
    guard += 1;
  }

  if (npvLow * npvHigh > 0) return null;

  let mid = 0;
  for (let i = 0; i < 100; i += 1) {
    mid = (low + high) / 2;
    const npvMid = npv(mid);
    if (Math.abs(npvMid) < 1e-6) break;
    if (npvLow * npvMid < 0) {
      high = mid;
      npvHigh = npvMid;
    } else {
      low = mid;
      npvLow = npvMid;
    }
  }

  return mid;
};

export default function XIRRCalculator() {
  const [cashFlows, setCashFlows] = useState<CashFlow[]>(initialFlows);

  const parsedFlows = useMemo(
    () =>
      cashFlows
        .map((flow) => ({
          amount: Number(flow.amount),
          date: new Date(flow.date),
        }))
        .filter((flow) => !Number.isNaN(flow.amount) && !Number.isNaN(flow.date.getTime())),
    [cashFlows]
  );

  const xirrValue = useMemo(() => calculateXirr(parsedFlows), [parsedFlows]);

  const totalInvested = useMemo(
    () => parsedFlows.filter((f) => f.amount < 0).reduce((sum, f) => sum + Math.abs(f.amount), 0),
    [parsedFlows]
  );

  const totalReceived = useMemo(
    () => parsedFlows.filter((f) => f.amount > 0).reduce((sum, f) => sum + f.amount, 0),
    [parsedFlows]
  );

  const netGain = totalReceived - totalInvested;

  const updateFlow = (id: number, key: keyof CashFlow, value: string) => {
    setCashFlows((prev) =>
      prev.map((flow) => (flow.id === id ? { ...flow, [key]: key === "amount" ? Number(value) : value } : flow))
    );
  };

  const addFlow = () => {
    setCashFlows((prev) => [
      ...prev,
      {
        id: Date.now(),
        date: "2026-12-31",
        amount: 0,
      },
    ]);
  };

  const removeFlow = (id: number) => {
    setCashFlows((prev) => (prev.length > 2 ? prev.filter((flow) => flow.id !== id) : prev));
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
      <div className="flex flex-col gap-6 rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-10">
        <div>
          <p className="text-sm font-semibold text-[#4a5568]">
            Enter cash flows (negative for investments, positive for withdrawals).
          </p>
          <p className="mt-1 text-xs text-[#94a3b8]">
            Example: -100000 on 2024-04-01, +240000 on 2026-03-01
          </p>
        </div>

        <div className="space-y-4">
          {cashFlows.map((flow, index) => (
            <div
              key={flow.id}
              className="grid gap-3 rounded-2xl border border-slate-200/70 px-4 py-3 sm:grid-cols-[1fr_1fr_auto]"
            >
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Date {index + 1}
                </label>
                <input
                  type="date"
                  value={flow.date}
                  onChange={(e) => updateFlow(flow.id, "date", e.target.value)}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm outline-none focus:border-[#0ea5e9]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Amount
                </label>
                <input
                  type="number"
                  value={flow.amount}
                  onChange={(e) => updateFlow(flow.id, "amount", e.target.value)}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm outline-none focus:border-[#0ea5e9]"
                />
              </div>
              <div className="flex items-end justify-end">
                <button
                  type="button"
                  onClick={() => removeFlow(flow.id)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-400 transition-colors hover:border-[#ef4444] hover:text-[#ef4444]"
                  aria-label="Remove cash flow"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addFlow}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0ea5e9] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_26px_-14px_rgba(14,165,233,0.7)] transition-transform hover:-translate-y-0.5"
        >
          <Plus size={16} />
          Add Cash Flow
        </button>
      </div>

      <div className="flex flex-col justify-between rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-10">
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold text-[#4a5568]">Estimated XIRR</p>
            <p className="mt-2 text-4xl font-semibold text-[#1a1560]">
              {xirrValue !== null ? `${(xirrValue * 100).toFixed(2)}%` : "--"}
            </p>
            <p className="mt-2 text-xs text-[#94a3b8]">
              Add at least one negative and one positive cash flow to calculate XIRR.
            </p>
          </div>

          <div className="space-y-3 border-t border-slate-200 pt-4 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-[#4a5568]">Total invested</span>
              <span className="font-semibold text-[#1a1560]">{formatCurrency(totalInvested)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#4a5568]">Total received</span>
              <span className="font-semibold text-[#1a1560]">{formatCurrency(totalReceived)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#4a5568]">Net gain</span>
              <span className="font-semibold text-[#1a1560]">{formatCurrency(netGain)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

