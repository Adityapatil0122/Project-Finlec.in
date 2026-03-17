import Link from "next/link";
import MetricCard from "@/components/dashboard/MetricCard";
import StatusPill from "@/components/dashboard/StatusPill";
import { formatCurrency, formatDate, formatPercent } from "@/lib/platform/format";
import { getPlatformContext } from "@/lib/platform/session";

export default async function DashboardOverviewPage() {
  const { platform } = await getPlatformContext();

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Invested value"
          value={formatCurrency(platform.overview.investedValue)}
          hint="Confirmed purchase and SIP principal deployed so far."
          tone="green"
        />
        <MetricCard
          label="Current value"
          value={formatCurrency(platform.overview.currentValue)}
          hint="Dashboard value based on the latest synced NAV surface."
          tone="violet"
        />
        <MetricCard
          label="Unrealized gain"
          value={formatCurrency(platform.overview.unrealizedGain)}
          hint={`Portfolio XIRR currently tracks at ${formatPercent(platform.overview.xirr)}.`}
          tone="blue"
        />
        <MetricCard
          label="Pending actions"
          value={`${platform.overview.pendingOrders} orders`}
          hint={`${platform.overview.activeSips} active SIP instructions linked to live mandates.`}
          tone="slate"
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="finlec-card p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#04b488]">Onboarding checklist</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#0f172a]">Investor readiness</h2>
            </div>
            <Link href="/dashboard/profile" className="text-sm font-semibold text-[#04b488]">
              Review profile
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {platform.onboarding.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="flex items-start justify-between gap-4 rounded-3xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#04b488]/35"
              >
                <div>
                  <p className="text-sm font-semibold text-[#0f172a]">{item.label}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.description}</p>
                </div>
                <StatusPill
                  label={item.status}
                  tone={item.status === "completed" ? "green" : item.status === "attention" ? "amber" : "slate"}
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="finlec-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7B4FD4]">Execution window</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#0f172a]">Today&apos;s operating context</h2>
            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="font-semibold text-[#0f172a]">Next SIP debit</p>
                <p className="mt-1">{platform.overview.nextSipDate ? formatDate(platform.overview.nextSipDate) : "No active SIPs"}</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="font-semibold text-[#0f172a]">Order routing</p>
                <p className="mt-1">Distributor-assisted, regular-plan execution aligned to ARN / EUIN capture.</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="font-semibold text-[#0f172a]">KYC note</p>
                <p className="mt-1">Registered KYC is available, but validated KYC should be completed before scaling fresh purchases.</p>
              </div>
            </div>
          </div>

          <div className="finlec-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#04b488]">Recent audit trail</p>
            <div className="mt-4 space-y-4">
              {platform.auditTrail.map((event) => (
                <div key={event.id} className="relative pl-5">
                  <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-[#04b488]" />
                  <p className="text-sm font-semibold text-[#0f172a]">{event.action.replace(/_/g, " ")}</p>
                  <p className="text-sm text-slate-500">{event.entityLabel}</p>
                  <p className="mt-1 text-xs text-slate-400">{formatDate(event.createdAt)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
