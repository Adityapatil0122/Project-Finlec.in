import MetricCard from "@/components/dashboard/MetricCard";
import StatusPill from "@/components/dashboard/StatusPill";
import { formatCurrency, formatPercent, formatDate } from "@/lib/platform/format";
import { getPlatformContext } from "@/lib/platform/session";

export default async function DashboardPortfolioPage() {
  const { platform } = await getPlatformContext();

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        <MetricCard
          label="Holdings"
          value={`${platform.holdings.length}`}
          hint="Funds currently held in your portfolio."
          tone="green"
        />
        <MetricCard
          label="Folios"
          value={`${platform.folios.length}`}
          hint="Investment folios linked to your account."
          tone="violet"
        />
        <MetricCard
          label="Portfolio XIRR"
          value={formatPercent(platform.overview.xirr)}
          hint="Estimated annualized return across current holdings."
          tone="blue"
        />
      </section>

      <section className="space-y-4">
        {platform.holdings.map((holding) => (
          <article key={holding.id} className="finlec-card p-4 sm:p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-lg font-semibold text-[#0f172a]">{holding.fundName}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {holding.category} - Folio {holding.folioNumber}
                </p>
              </div>
              <StatusPill label={`${formatPercent(holding.xirr)} XIRR`} tone="green" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Units</p>
                <p className="mt-1 text-sm font-semibold text-[#0f172a]">{holding.units}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Invested</p>
                <p className="mt-1 text-sm font-semibold text-[#0f172a]">{formatCurrency(holding.investedValue)}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Current</p>
                <p className="mt-1 text-sm font-semibold text-[#0f172a]">{formatCurrency(holding.currentValue)}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Gain</p>
                <p className="mt-1 text-sm font-semibold text-[#048b6a]">{formatCurrency(holding.unrealizedGain)}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Last NAV</p>
                <p className="mt-1 text-sm font-semibold text-[#0f172a]">
                  {holding.lastNav.toFixed(2)} - {formatDate(holding.navDate)}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
