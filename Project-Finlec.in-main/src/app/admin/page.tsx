import StatusPill from "@/components/dashboard/StatusPill";
import { formatCurrency, formatDate } from "@/lib/platform/format";
import { getPlatformContext, requirePlatformSession } from "@/lib/platform/session";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await requirePlatformSession();
  if (session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  const { platform } = await getPlatformContext();

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <section className="finlec-card p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#04b488]">Admin operations console</p>
          <h1 className="mt-2 text-3xl font-semibold text-[#0f172a]">Back-office readiness</h1>
          <p className="mt-2 text-sm text-slate-600">
            Queue-based visibility for KYC exceptions, mandate failures, order settlement, and escalation handling.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="finlec-card p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">KYC exceptions</p>
            <p className="mt-2 text-3xl font-semibold text-[#0f172a]">{platform.adminOps.openKycExceptions}</p>
          </div>
          <div className="finlec-card p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Mandate failures</p>
            <p className="mt-2 text-3xl font-semibold text-[#0f172a]">{platform.adminOps.mandateFailures}</p>
          </div>
          <div className="finlec-card p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Reconciliation health</p>
            <div className="mt-2">
              <StatusPill label={platform.adminOps.reconciliationHealth} tone="green" />
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1fr_0.95fr]">
          <div className="finlec-card p-6">
            <h2 className="text-xl font-semibold text-[#0f172a]">Recent routed orders</h2>
            <div className="mt-4 space-y-3">
              {platform.orders.slice(0, 5).map((order) => (
                <div key={order.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-[#0f172a]">{order.fundName}</p>
                      <p className="mt-1 text-sm text-slate-500">{order.partnerReference}</p>
                    </div>
                    <div className="text-right text-sm text-slate-600">
                      <p>{formatCurrency(order.amount)}</p>
                      <p className="mt-1 text-xs text-slate-400">{formatDate(order.initiatedAt)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="finlec-card p-6">
            <h2 className="text-xl font-semibold text-[#0f172a]">Escalation watchlist</h2>
            <div className="mt-4 space-y-3">
              {platform.supportTickets.map((ticket) => (
                <div key={ticket.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-[#0f172a]">{ticket.subject}</p>
                      <p className="mt-1 text-sm text-slate-500">{ticket.type.replace(/_/g, " ")}</p>
                    </div>
                    <StatusPill label={ticket.status.replace(/_/g, " ")} tone="amber" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
