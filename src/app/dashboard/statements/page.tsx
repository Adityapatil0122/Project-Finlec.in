import StatusPill from "@/components/dashboard/StatusPill";
import { formatDate } from "@/lib/platform/format";
import { getPlatformContext } from "@/lib/platform/session";

export default async function DashboardStatementsPage() {
  const { platform } = await getPlatformContext();

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
      <section className="space-y-4">
        {platform.statements.map((statement) => (
          <article key={statement.id} className="finlec-card p-4 sm:p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-lg font-semibold text-[#0f172a]">{statement.label}</p>
                <p className="mt-1 text-sm text-slate-500">{statement.periodLabel}</p>
              </div>
              <StatusPill label={statement.type.replace(/_/g, " ")} tone="violet" />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Generated</p>
                <p className="mt-1 font-semibold text-[#0f172a]">{formatDate(statement.generatedAt)}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Source</p>
                <p className="mt-1 font-semibold text-[#0f172a]">{statement.source}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="finlec-card p-4 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#04b488]">Statements & tax</p>
        <h2 className="mt-2 text-2xl font-semibold text-[#0f172a]">Statements and reports</h2>
        <div className="mt-5 space-y-4 text-sm text-slate-600">
          <div className="rounded-2xl sm:rounded-3xl bg-slate-50 p-3 sm:p-4">
            <p className="font-semibold text-[#0f172a]">CAS access</p>
            <p className="mt-1">Use this section to view statement access and downloadable history.</p>
          </div>
          <div className="rounded-2xl sm:rounded-3xl bg-slate-50 p-3 sm:p-4">
            <p className="font-semibold text-[#0f172a]">Capital gains</p>
            <p className="mt-1">Capital gains reports and tax packs can be added here in a later phase.</p>
          </div>
          <div className="rounded-2xl sm:rounded-3xl bg-slate-50 p-3 sm:p-4">
            <p className="font-semibold text-[#0f172a]">Source tracking</p>
            <p className="mt-1">Each statement can be linked back to a partner source or internal ledger entry.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
