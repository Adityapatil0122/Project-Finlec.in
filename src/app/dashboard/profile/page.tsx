import ProfileComplianceForm from "@/components/dashboard/ProfileComplianceForm";
import StatusPill from "@/components/dashboard/StatusPill";
import { formatDate } from "@/lib/platform/format";
import { getPlatformContext } from "@/lib/platform/session";

export default async function DashboardProfilePage() {
  const { platform } = await getPlatformContext();

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_0.95fr]">
      <section className="space-y-6">
        <article className="finlec-card p-4 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#04b488]">Profile & compliance</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#0f172a]">Investor profile and KYC status</h2>
            </div>
            <StatusPill label={`KYC ${platform.profile.kycStatus}`} tone="amber" />
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl sm:rounded-3xl bg-slate-50 p-3 sm:p-4 text-sm text-slate-600">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">PAN (masked)</p>
              <p className="mt-1 font-semibold text-[#0f172a]">{platform.profile.panMasked}</p>
            </div>
            <div className="rounded-2xl sm:rounded-3xl bg-slate-50 p-3 sm:p-4 text-sm text-slate-600">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Risk profile</p>
              <p className="mt-1 font-semibold text-[#0f172a]">{platform.profile.riskProfile}</p>
            </div>
            <div className="rounded-2xl sm:rounded-3xl bg-slate-50 p-3 sm:p-4 text-sm text-slate-600">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">KRA reference</p>
              <p className="mt-1 font-semibold text-[#0f172a]">{platform.profile.kraReference}</p>
            </div>
            <div className="rounded-2xl sm:rounded-3xl bg-slate-50 p-3 sm:p-4 text-sm text-slate-600">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">FATCA accepted</p>
              <p className="mt-1 font-semibold text-[#0f172a]">{formatDate(platform.profile.fatcaAcceptedAt)}</p>
            </div>
          </div>
        </article>

        <article className="finlec-card p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-[#0f172a]">Bank and mandate setup</h3>
          <div className="mt-4 space-y-3">
            {platform.bankAccounts.map((account) => (
              <div key={account.id} className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-[#0f172a]">{account.bankName}</p>
                    <p className="mt-1 text-sm text-slate-500">
                      {account.maskedAccountNumber} - IFSC {account.ifscCode}
                    </p>
                  </div>
                  <StatusPill label={account.status} tone={account.status === "VERIFIED" ? "green" : "amber"} />
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="finlec-card p-4 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7B4FD4]">Compliance editor</p>
        <h2 className="mt-2 text-2xl font-semibold text-[#0f172a]">Update PAN, FATCA, and risk details</h2>
        <p className="mt-2 text-sm text-slate-600">
          This form stores only masked PAN output while keeping your investor profile details up to date.
        </p>
        <div className="mt-6 rounded-2xl sm:rounded-[2rem] border border-slate-200 bg-slate-50 p-4 sm:p-5">
          <ProfileComplianceForm profile={platform.profile} />
        </div>
      </section>
    </div>
  );
}
