import StatusPill from "@/components/dashboard/StatusPill";
import { formatCurrency, formatDate } from "@/lib/platform/format";
import { getPlatformContext } from "@/lib/platform/session";

const toneByStatus = {
  DRAFT: "slate",
  PAYMENT_PENDING: "amber",
  SUBMITTED: "blue",
  ACCEPTED: "green",
  REJECTED: "red",
  ALLOTTED: "green",
  SETTLED: "violet",
  FAILED: "red",
  CANCELLED: "slate",
} as const;

export default async function DashboardOrdersPage() {
  const { platform } = await getPlatformContext();

  return (
    <div className="space-y-6">
      <div className="finlec-card p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#04b488]">Orders module</p>
        <h2 className="mt-2 text-2xl font-semibold text-[#0f172a]">Order lifecycle and routing states</h2>
        <p className="mt-2 text-sm text-slate-600">
          Every order tracks payment state, distributor routing, cut-off context, and final allotment or rejection outcome.
        </p>
      </div>

      <div className="space-y-4">
        {platform.orders.map((order) => (
          <article key={order.id} className="finlec-card p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-lg font-semibold text-[#0f172a]">{order.fundName}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {order.kind.replace(/_/g, " ")} - Partner ref {order.partnerReference}
                </p>
              </div>
              <StatusPill label={order.status.replace(/_/g, " ")} tone={toneByStatus[order.status]} />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-4">
              <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Amount</p>
                <p className="mt-1 font-semibold text-[#0f172a]">{formatCurrency(order.amount)}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Units</p>
                <p className="mt-1 font-semibold text-[#0f172a]">{order.units ?? "Pending"}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Initiated</p>
                <p className="mt-1 font-semibold text-[#0f172a]">{formatDate(order.initiatedAt)}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Payment rail</p>
                <p className="mt-1 font-semibold text-[#0f172a]">{order.paymentRail.replace(/_/g, " ")}</p>
              </div>
            </div>
            {order.rejectionReason ? (
              <p className="mt-4 text-sm text-red-600">Rejection reason: {order.rejectionReason}</p>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
