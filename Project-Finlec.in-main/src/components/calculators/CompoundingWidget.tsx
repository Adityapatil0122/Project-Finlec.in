"use client";

import { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js";
import { TrendingUp, RefreshCcw, PiggyBank } from "lucide-react";

Chart.register(...registerables);

const fmt = (n: number): string =>
  "₹" + Math.round(n).toLocaleString("en-IN");

const trio = [
  {
    icon: TrendingUp,
    title: "Invest early",
    desc: "Even a few years' head-start creates a dramatic difference in final corpus.",
    accent: "#04b488",
  },
  {
    icon: RefreshCcw,
    title: "Stay invested",
    desc: "Withdrawing early breaks the loop. Patience is the core strategy.",
    accent: "#7B4FD4",
  },
  {
    icon: PiggyBank,
    title: "Reinvest returns",
    desc: "Every rupee of return that stays in keeps compounding on itself.",
    accent: "#0ea5e9",
  },
];

export default function CompoundingWidget() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(10);
  const [years, setYears] = useState(30);

  const finalVal = Math.round(principal * Math.pow(1 + rate / 100, years));
  const gain = finalVal - principal;
  const multiplier = (finalVal / principal).toFixed(1);

  useEffect(() => {
    if (!canvasRef.current) return;

    const labels: string[] = [];
    const invested: number[] = [];
    const total: number[] = [];

    for (let i = 0; i <= years; i++) {
      labels.push(i === 0 ? "Now" : `Yr ${i}`);
      invested.push(principal);
      total.push(Math.round(principal * Math.pow(1 + rate / 100, i)));
    }

    const tickColor = "#94a3b8";

    if (chartRef.current) {
      chartRef.current.data.labels = labels;
      chartRef.current.data.datasets[0].data = total;
      chartRef.current.data.datasets[1].data = invested;
      chartRef.current.update();
      return;
    }

    chartRef.current = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "With compounding",
            data: total,
            borderColor: "#04b488",
            backgroundColor: "rgba(4,180,136,0.10)",
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2.5,
          },
          {
            label: "Principal",
            data: invested,
            borderColor: "rgba(148,163,184,0.6)",
            borderDash: [5, 4],
            fill: false,
            tension: 0,
            pointRadius: 0,
            borderWidth: 1.5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: {
            labels: {
              font: { size: 12, family: "inherit" },
              color: tickColor,
              boxWidth: 14,
              padding: 18,
            },
          },
          tooltip: {
            backgroundColor: "#ffffff",
            borderColor: "rgba(15,23,42,0.08)",
            borderWidth: 1,
            titleColor: "#1a1560",
            bodyColor: "#475569",
            callbacks: {
              label: (ctx) =>
                `  ${ctx.dataset.label}: ${fmt(ctx.raw as number)}`,
            },
          },
        },
        scales: {
          x: {
            ticks: { font: { size: 11 }, color: tickColor, maxTicksLimit: 8 },
            grid: { display: false },
            border: { display: false },
          },
          y: {
            ticks: {
              font: { size: 11 },
              color: tickColor,
              callback: (v) => {
                const n = Number(v);
                if (n >= 1e7) return `₹${(n / 1e7).toFixed(1)}Cr`;
                if (n >= 1e5) return `₹${(n / 1e5).toFixed(0)}L`;
                return fmt(n);
              },
            },
            grid: { color: "rgba(148,163,184,0.12)" },
            border: { display: false },
          },
        },
      },
    });

    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, [principal, rate, years]);

  return (
    <div className="mx-auto max-w-7xl">
      {/* Section header */}
      <div className="mb-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#04b488]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#04b488]">
          The Compounding Effect
        </span>
        <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold text-[#1a1560] sm:text-4xl">
          Money grows on money.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-[#475569]">
          Your returns start earning their own returns — and over time, that loop
          becomes unstoppable.
        </p>
      </div>

      {/* Main card */}
      <div className="finlec-card p-6 sm:p-8">
        {/* Trio pills */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {trio.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="rounded-2xl border border-slate-100 bg-[#f8fafc] p-5"
              >
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: `${c.accent}18`, color: c.accent }}
                >
                  <Icon size={20} />
                </span>
                <p className="mt-3 text-sm font-semibold text-[#1a1560]">
                  {c.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#475569]">
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="h-px w-full bg-slate-100" />

        {/* Stats + Controls row */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          {/* Left: stats + sliders */}
          <div className="space-y-6">
            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-100 bg-[#f8fafc] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#475569]">
                  Final Value
                </p>
                <p className="mt-2 font-[family-name:var(--font-sora)] text-2xl font-semibold text-[#1a1560]">
                  {fmt(finalVal)}
                </p>
                <p className="mt-1 text-[11px] text-[#475569]">
                  on {fmt(principal)} invested
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-[#f8fafc] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#475569]">
                  Returns Earned
                </p>
                <p className="mt-2 font-[family-name:var(--font-sora)] text-2xl font-semibold text-[#04b488]">
                  {fmt(gain)}
                </p>
                <p className="mt-1 text-[11px] text-[#475569]">
                  {multiplier}× your money
                </p>
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-5">
              {[
                {
                  label: "Principal",
                  id: "cw-principal",
                  min: 1000,
                  max: 100000,
                  step: 1000,
                  value: principal,
                  set: setPrincipal,
                  display: fmt(principal),
                  accent: "#04b488",
                },
                {
                  label: "Annual rate",
                  id: "cw-rate",
                  min: 1,
                  max: 20,
                  step: 1,
                  value: rate,
                  set: setRate,
                  display: `${rate}%`,
                  accent: "#7B4FD4",
                },
                {
                  label: "Years",
                  id: "cw-years",
                  min: 1,
                  max: 40,
                  step: 1,
                  value: years,
                  set: setYears,
                  display: `${years} yrs`,
                  accent: "#0ea5e9",
                },
              ].map((s) => (
                <div key={s.id}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label
                      htmlFor={s.id}
                      className="text-xs font-semibold uppercase tracking-[0.14em] text-[#475569]"
                    >
                      {s.label}
                    </label>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                      style={{
                        backgroundColor: `${s.accent}15`,
                        color: s.accent,
                      }}
                    >
                      {s.display}
                    </span>
                  </div>
                  <input
                    id={s.id}
                    type="range"
                    min={s.min}
                    max={s.max}
                    step={s.step}
                    value={s.value}
                    onChange={(e) => s.set(Number(e.target.value))}
                    className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#04b488]"
                    style={{ accentColor: s.accent }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: chart */}
          <div className="flex flex-col">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#475569]">
              Growth curve
            </p>
            <div className="relative flex-1 min-h-[220px]">
              <canvas ref={canvasRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
