import SupportTicketForm from "@/components/dashboard/SupportTicketForm";
import StatusPill from "@/components/dashboard/StatusPill";
import { formatDate } from "@/lib/platform/format";
import { getPlatformContext } from "@/lib/platform/session";

export default async function DashboardHelpPage() {
  const { platform } = await getPlatformContext();

  return (
    <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
      <section className="finlec-card p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#04b488]">Support desk</p>
        <h2 className="mt-2 text-2xl font-semibold text-[#0f172a]">Raise a servicing or complaint ticket</h2>
        <p className="mt-2 text-sm text-slate-600">
          Route mandate issues, KYC blockers, order exceptions, and complaints into one tracked workflow.
        </p>
        <div className="mt-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-5">
          <SupportTicketForm />
        </div>
      </section>

      <section className="space-y-4">
        {platform.supportTickets.map((ticket) => (
          <article key={ticket.id} className="finlec-card p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-lg font-semibold text-[#0f172a]">{ticket.subject}</p>
                <p className="mt-1 text-sm text-slate-500">{ticket.type.replace(/_/g, " ")}</p>
              </div>
              <StatusPill
                label={ticket.status.replace(/_/g, " ")}
                tone={ticket.status === "OPEN" ? "amber" : ticket.status === "ESCALATED" ? "red" : "green"}
              />
            </div>
            <p className="mt-4 text-sm text-slate-600">{ticket.description}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500">
              <span>Created {formatDate(ticket.createdAt)}</span>
              <span>Response due {formatDate(ticket.responseDueAt)}</span>
            </div>
          </article>
        ))}

        <div className="finlec-card p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7B4FD4]">Grievance note</p>
          <p className="mt-2 text-sm text-slate-600">
            This module is structured so normal servicing and complaint flows can later map cleanly into formal escalation handling, including SCORES-aligned grievance support if needed.
          </p>
        </div>
      </section>
    </div>
  );
}
