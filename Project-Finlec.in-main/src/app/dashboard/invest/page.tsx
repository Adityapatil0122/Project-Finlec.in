import InvestOrderForm from "@/components/dashboard/InvestOrderForm";
import StatusPill from "@/components/dashboard/StatusPill";
import { formatCurrency, formatDate } from "@/lib/platform/format";
import { getPlatformContext } from "@/lib/platform/session";

export default async function DashboardInvestPage() {
  const { platform } = await getPlatformContext();

  return (
    <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
      <section className="finlec-card p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#04b488]">Invest module</p>
        <h2 className="mt-2 text-2xl font-semibold text-[#0f172a]">Create a purchase or SIP registration</h2>
        <p className="mt-2 text-sm text-slate-600">
          Use this controlled v1 workbench to submit a mock distributor-routed order with cut-off, payment rail, and mandate context.
        </p>
        <div className="mt-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-5">
          <InvestOrderForm funds={platform.funds} />
        </div>
      </section>

      <section className="space-y-6">
        {platform.funds.map((fund) => (
          <article key={fund.id} className="finlec-card p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-[#0f172a]">{fund.name}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {fund.amcName} - {fund.category}
                </p>
              </div>
              <StatusPill label={`${fund.riskLevel} risk`} tone={fund.riskLevel === "High" ? "amber" : "green"} />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Minimum</p>
                <p className="mt-1 font-semibold text-[#0f172a]">{formatCurrency(fund.minimumInvestment)}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">NAV</p>
                <p className="mt-1 font-semibold text-[#0f172a]">{fund.nav.toFixed(2)}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">NAV date</p>
                <p className="mt-1 font-semibold text-[#0f172a]">{formatDate(fund.navDate)}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
