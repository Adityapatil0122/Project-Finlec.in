import { cn } from "@/lib/utils";

type StatusPillProps = {
  label: string;
  tone?: "green" | "amber" | "violet" | "slate" | "red" | "blue";
};

const toneClasses: Record<NonNullable<StatusPillProps["tone"]>, string> = {
  green: "bg-[#04b488]/10 text-[#048b6a] border-[#04b488]/20",
  amber: "bg-amber-100 text-amber-700 border-amber-200",
  violet: "bg-[#7B4FD4]/10 text-[#6a41c0] border-[#7B4FD4]/20",
  slate: "bg-slate-100 text-slate-600 border-slate-200",
  red: "bg-red-100 text-red-700 border-red-200",
  blue: "bg-sky-100 text-sky-700 border-sky-200",
};

export default function StatusPill({ label, tone = "slate" }: StatusPillProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
        toneClasses[tone]
      )}
    >
      {label}
    </span>
  );
}
