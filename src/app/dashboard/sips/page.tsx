import SipActions from "@/components/dashboard/SipActions";
import StatusPill from "@/components/dashboard/StatusPill";
import { formatCurrency, formatDate } from "@/lib/platform/format";
import { getPlatformContext } from "@/lib/platform/session";

export default async function DashboardSipsPage() {
  const { platform } = await getPlatformContext();

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
      <section className="space-y-4">
        {platform.sips.map((sip) => (
          <article key={sip.id} className="finlec-card p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-lg font-semibold text-[#0f172a]">{sip.fundName}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {sip.frequency} - Mandate {sip.mandateReference}
                </p>
              </div>
              <StatusPill label={sip.status} tone={sip.status === "ACTIVE" ? "green" : sip.status === "PAUSED" ? "amber" : "red"} />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Installment</p>
                <p className="mt-1 text-sm font-semibold text-[#0f172a]">{formatCurrency(sip.amount)}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Next run</p>
                <p className="mt-1 text-sm font-semibold text-[#0f172a]">{formatDate(sip.nextRunDate)}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Status</p>
                <p className="mt-1 text-sm font-semibold text-[#0f172a]">{sip.status}</p>
              </div>
            </div>
            <div className="mt-4">
              <SipActions sipId={sip.id} currentStatus={sip.status} />
            </div>
          </article>
        ))}
      </section>

      <section className="finlec-card p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#04b488]">Mandate status</p>
        <h2 className="mt-2 text-2xl font-semibold text-[#0f172a]">Autodebit rails</h2>
        <div className="mt-5 space-y-4">
          {platform.bankMandates.map((mandate) => (
            <div key={mandate.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[#0f172a]">{mandate.provider}</p>
                  <p className="mt-1 text-sm text-slate-500">Reference {mandate.mandateReference}</p>
                </div>
                <StatusPill label={mandate.status} tone={mandate.status === "ACTIVE" ? "green" : mandate.status === "PENDING" ? "amber" : "red"} />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Max limit</p>
                  <p className="mt-1 text-sm font-semibold text-[#0f172a]">{formatCurrency(mandate.maxAmount)}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Valid till</p>
                  <p className="mt-1 text-sm font-semibold text-[#0f172a]">{formatDate(mandate.validTill)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
