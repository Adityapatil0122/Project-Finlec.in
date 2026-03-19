import Link from "next/link";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import StatusPill from "@/components/dashboard/StatusPill";
import { getPlatformContext } from "@/lib/platform/session";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const { session, platform } = await getPlatformContext();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(4,180,136,0.08),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[280px_1fr]">
        <DashboardSidebar />

        <main className="space-y-6">
          <div className="finlec-card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#04b488]">Investor dashboard</p>
              <h1 className="mt-2 text-3xl font-semibold text-[#0f172a]">
                Welcome back, {session.user.name ?? "Investor"}
              </h1>
              <p className="mt-1 text-sm text-slate-600">
                Manage your profile, orders, SIPs, holdings, and support requests in one place.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <StatusPill label={`KYC ${platform.profile.kycStatus}`} tone="amber" />
                <StatusPill label={`${platform.overview.activeSips} active SIPs`} tone="green" />
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/dashboard/profile"
                  className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#04b488] hover:text-[#04b488]"
                >
                  Complete profile
                </Link>
                <Link
                  href="/dashboard/invest"
                  className="inline-flex rounded-full bg-[#04b488] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#049f78]"
                >
                  Start investing
                </Link>
              </div>
            </div>
          </div>

          {children}
        </main>
      </div>
    </div>
  );
}
