"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BadgeIndianRupee,
  ChevronDown,
  CircleHelp,
  ClipboardList,
  LayoutDashboard,
  ReceiptText,
  ShieldCheck,
  WalletCards,
  Waves,
} from "lucide-react";
import SignOutButton from "@/components/SignOutButton";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/invest", label: "Invest", icon: BadgeIndianRupee },
  { href: "/dashboard/orders", label: "Orders", icon: ClipboardList },
  { href: "/dashboard/sips", label: "SIPs", icon: Waves },
  { href: "/dashboard/portfolio", label: "Portfolio", icon: WalletCards },
  { href: "/dashboard/statements", label: "Statements", icon: ReceiptText },
  { href: "/dashboard/profile", label: "Profile & Compliance", icon: ShieldCheck },
  { href: "/dashboard/help", label: "Help & Complaints", icon: CircleHelp },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const activeItem = navItems.find((item) => item.href === pathname) ?? navItems[0];
  const ActiveIcon = activeItem.icon;

  return (
    <aside className="finlec-card flex h-full flex-col p-4">
      <div className="hidden rounded-3xl bg-[linear-gradient(135deg,rgba(4,180,136,0.12),rgba(123,79,212,0.1))] p-4 lg:block">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#04b488]">Finlec Platform</p>
        <h2 className="mt-2 text-xl font-semibold text-[#0f172a]">Investor Workspace</h2>
        <p className="mt-1 text-sm text-slate-600">
          Everything related to your investments in one workspace.
        </p>
      </div>

      {/* Mobile: compact toggle */}
      <button
        type="button"
        onClick={() => setIsMobileOpen((prev) => !prev)}
        className="flex items-center justify-between gap-3 rounded-2xl bg-[linear-gradient(135deg,rgba(4,180,136,0.12),rgba(123,79,212,0.1))] px-4 py-3 lg:hidden min-h-[48px]"
      >
        <span className="flex items-center gap-3">
          <ActiveIcon size={18} className="text-[#04b488]" />
          <span className="text-sm font-semibold text-[#0f172a]">{activeItem.label}</span>
        </span>
        <ChevronDown
          size={18}
          className={cn(
            "text-slate-400 transition-transform duration-200",
            isMobileOpen && "rotate-180"
          )}
        />
      </button>

      <nav className={cn(
        "mt-3 flex-1 space-y-1.5 lg:mt-5 lg:block",
        isMobileOpen ? "block" : "hidden lg:block"
      )}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition-all duration-200 min-h-[44px]",
                isActive
                  ? "bg-[#04b488] text-white shadow-[0_18px_35px_-22px_rgba(4,180,136,0.8)]"
                  : "text-slate-600 hover:bg-slate-50 hover:text-[#0f172a]"
              )}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className={cn(
        "mt-6 border-t border-slate-200 pt-4",
        isMobileOpen ? "block" : "hidden lg:block"
      )}>
        <SignOutButton
          className="w-full justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 hover:border-[#e85d5d]/25 hover:bg-[#fff5f5] hover:text-[#c23b3b] min-h-[48px]"
        />
      </div>
    </aside>
  );
}
