import { cn } from "@/lib/utils";

type MetricCardProps = {
  label: string;
  value: string;
  hint: string;
  tone?: "green" | "violet" | "blue" | "slate";
};

const accentClasses: Record<NonNullable<MetricCardProps["tone"]>, string> = {
  green: "from-[#04b488]/15 to-white text-[#04b488]",
  violet: "from-[#7B4FD4]/15 to-white text-[#7B4FD4]",
  blue: "from-sky-100 to-white text-sky-700",
  slate: "from-slate-100 to-white text-slate-700",
};

export default function MetricCard({ label, value, hint, tone = "green" }: MetricCardProps) {
  return (
    <div className="finlec-card p-5">
      <div className={cn("rounded-2xl bg-gradient-to-br px-4 py-3", accentClasses[tone])}>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</p>
        <p className="mt-2 text-2xl font-semibold text-[#0f172a]">{value}</p>
      </div>
      <p className="mt-3 text-sm text-slate-500">{hint}</p>
    </div>
  );
}
