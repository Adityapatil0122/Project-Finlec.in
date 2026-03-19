"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  Menu,
  UserRound,
  X,
} from "lucide-react";
import SignOutButton from "@/components/SignOutButton";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Calculators", href: "/calculators" },
  { label: "Daily SIP", href: "/calculators/daily-sip-calculator" },
];

const exploreRoute = "/explore-mutual-funds";
const guideRoute = "/mutual-funds-guide";

function getDisplayName(name?: string | null, email?: string | null) {
  if (name?.trim()) return name.trim();
  if (email?.trim()) return email.trim().split("@")[0];
  return "Investor";
}

function getInitials(label: string) {
  const parts = label
    .split(" ")
    .map((part) => part.trim())
    .filter(Boolean)
    .slice(0, 2);

  if (!parts.length) return "FI";
  return parts.map((part) => part[0]?.toUpperCase() ?? "").join("");
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();
  const profileMenuRef = useRef<HTMLDivElement | null>(null);

  const isAuthenticated = Boolean(session?.user);
  const userLabel = getDisplayName(session?.user?.name, session?.user?.email);
  const userFirstName = userLabel.split(" ")[0] ?? userLabel;
  const userInitials = getInitials(userLabel);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isProfileMenuOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!profileMenuRef.current?.contains(event.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isProfileMenuOpen]);

  const guestHref = "https://finlec.my-portfolio.co.in/app/#/login";
  const guestLabel = "Login";

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        isScrolled
          ? "border-b border-slate-200/80 bg-white/95 shadow-[0_12px_30px_-22px_rgba(15,23,42,0.35)] backdrop-blur-xl"
          : "border-b border-transparent bg-white/80 backdrop-blur-md"
      }`}
    >
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-[#04b488] via-[#04b488] to-[#7B4FD4]"
      />

      <nav
        className={`mx-auto flex w-full max-w-7xl items-center justify-between px-4 transition-[height] sm:px-6 lg:px-8 ${
          isScrolled ? "h-[74px]" : "h-20"
        }`}
      >
        <Link href="/" className="inline-flex items-center" aria-label="Finlec home">
          <Image
            src="/images/finlec_Logo.png"
            alt="Logo"
            width={150}
            height={50}
            className="h-auto w-[130px] object-contain transition-transform duration-300 hover:scale-[1.01] sm:w-[150px]"
            priority
          />
        </Link>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 lg:ml-8 lg:flex">
            {navLinks.map((link) => (
              <motion.div key={link.label} whileHover={{ y: -1 }}>
                <Link
                  href={link.href}
                  className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    pathname === link.href
                      ? "bg-slate-100 text-slate-900"
                      : "bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div whileHover={{ y: -1 }}>
              <Link
                href={guideRoute}
                className={`inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  pathname === guideRoute
                    ? "bg-[#04b488]/12 text-[#047a5d]"
                    : "bg-white text-[#047a5d] hover:bg-[#04b488]/10"
                }`}
              >
                Mutual Funds Guide
              </Link>
            </motion.div>

            <div className="group relative">
              <motion.div whileHover={{ y: -1 }}>
                <Link
                  href={exploreRoute}
                  className={`inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                    pathname === exploreRoute
                      ? "bg-[#7B4FD4]/10 text-[#5e36b3]"
                      : "bg-white text-[#5e36b3] hover:bg-[#7B4FD4]/10"
                  }`}
                >
                  Explore Mutual Funds
                </Link>
              </motion.div>

              <div className="invisible absolute right-0 top-full z-[60] mt-4 hidden w-[550px] translate-y-2 gap-8 rounded-2xl border border-slate-200 bg-white p-6 opacity-0 shadow-[0_18px_40px_-15px_rgba(14,23,40,0.2)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 lg:flex">
                <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent" />

                <div className="flex-1">
                  <h3 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-[#04b488]">
                    Asset Classes
                  </h3>
                  <ul className="flex flex-col">
                    <li className="border-b border-slate-100 py-3 first:pt-0 last:border-0 last:pb-0">
                      <Link href="/explore-mutual-funds" className="group block">
                        <span className="block text-sm font-semibold text-[#1a1560] transition-colors group-hover:text-[#04b488]">Equity Funds</span>
                        <span className="mt-1 block text-[11px] text-slate-500">Large Cap, Mid Cap, Small Cap</span>
                      </Link>
                    </li>
                    <li className="border-b border-slate-100 py-3 last:border-0 last:pb-0">
                      <Link href="/explore-mutual-funds" className="group block">
                        <span className="block text-sm font-semibold text-[#1a1560] transition-colors group-hover:text-[#04b488]">Debt Funds</span>
                        <span className="mt-1 block text-[11px] text-slate-500">Liquid, Short Duration, Corporate Bond</span>
                      </Link>
                    </li>
                    <li className="border-b border-slate-100 py-3 last:border-0 last:pb-0">
                      <Link href="/explore-mutual-funds" className="group block">
                        <span className="block text-sm font-semibold text-[#1a1560] transition-colors group-hover:text-[#04b488]">Hybrid Funds</span>
                        <span className="mt-1 block text-[11px] text-slate-500">Aggressive, Balanced, Arbitrage</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="w-[1px] bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100" />

                <div className="flex-1">
                  <h3 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-[#7B4FD4]">
                    Top Collections
                  </h3>
                  <ul className="flex flex-col">
                    <li className="border-b border-slate-100 py-3 first:pt-0 last:border-0 last:pb-0">
                      <Link href="/explore-mutual-funds" className="group block">
                        <span className="block text-sm font-semibold text-[#1a1560] transition-colors group-hover:text-[#7B4FD4]">Tax Saving (ELSS)</span>
                        <span className="mt-1 block text-[11px] text-slate-500">Save tax under Section 80C</span>
                      </Link>
                    </li>
                    <li className="border-b border-slate-100 py-3 last:border-0 last:pb-0">
                      <Link href="/explore-mutual-funds" className="group block">
                        <span className="block text-sm font-semibold text-[#1a1560] transition-colors group-hover:text-[#7B4FD4]">High Return SIPs</span>
                        <span className="mt-1 block text-[11px] text-slate-500">Funds for long-term wealth building</span>
                      </Link>
                    </li>
                    <li className="border-b border-slate-100 py-3 last:border-0 last:pb-0">
                      <Link href="/explore-mutual-funds" className="group block">
                        <span className="block text-sm font-semibold text-[#1a1560] transition-colors group-hover:text-[#7B4FD4]">Better than FD</span>
                        <span className="mt-1 block text-[11px] text-slate-500">Lower-risk options for short-term goals</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <motion.div whileHover={{ y: -1 }}>
              {isAuthenticated ? (
                <div ref={profileMenuRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                    aria-expanded={isProfileMenuOpen}
                    aria-haspopup="menu"
                    className="inline-flex h-12 items-center gap-3 self-center rounded-full border border-slate-200 bg-white px-2.5 pr-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#04b488]/30 hover:bg-[#f7fffc] hover:shadow-[0_14px_28px_-20px_rgba(4,180,136,0.55)]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#04b488] to-[#7B4FD4] text-sm font-bold text-white shadow-[0_10px_20px_-14px_rgba(123,79,212,0.8)]">
                      {userInitials}
                    </span>
                    <span className="text-sm font-semibold text-[#0f172a]">Hi, {userFirstName}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-slate-400 transition-transform duration-200",
                        isProfileMenuOpen && "rotate-180 text-[#04b488]"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {isProfileMenuOpen ? (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute right-0 top-full z-[80] mt-3 w-64 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_50px_-25px_rgba(15,23,42,0.35)]"
                      >
                        <div className="border-b border-slate-100 bg-[linear-gradient(135deg,rgba(4,180,136,0.09),rgba(123,79,212,0.08))] px-4 py-4">
                          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                            Signed in as
                          </p>
                          <p className="mt-1 text-sm font-semibold text-[#0f172a]">{userLabel}</p>
                        </div>

                        <div className="p-2.5">
                          <Link
                            href="/dashboard"
                            onClick={() => setIsProfileMenuOpen(false)}
                            className="flex items-center justify-between rounded-2xl px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#0f172a]"
                          >
                            <span className="flex items-center gap-3">
                              <LayoutDashboard className="h-4 w-4 text-[#04b488]" />
                              Dashboard
                            </span>
                            <ChevronRight className="h-4 w-4 text-slate-300" />
                          </Link>
                          <Link
                            href="/dashboard/profile"
                            onClick={() => setIsProfileMenuOpen(false)}
                            className="flex items-center justify-between rounded-2xl px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#0f172a]"
                          >
                            <span className="flex items-center gap-3">
                              <UserRound className="h-4 w-4 text-[#7B4FD4]" />
                              Profile
                            </span>
                            <ChevronRight className="h-4 w-4 text-slate-300" />
                          </Link>
                          <div className="mt-1 border-t border-slate-100 pt-2">
                            <SignOutButton
                              className="w-full justify-between rounded-2xl px-3 py-3 text-[#c23b3b] hover:bg-[#fff5f5]"
                            />
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={guestHref}
                  className="inline-flex items-center justify-center rounded-full bg-[#0b3d3b] px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0f4a46] hover:shadow-[0_12px_24px_-14px_rgba(15,74,70,0.75)] active:translate-y-0"
                >
                  {guestLabel}
                </Link>
              )}
            </motion.div>
          </div>

          <button
            type="button"
            className="rounded-xl border border-slate-200 bg-white p-2 text-slate-700 transition-colors hover:bg-slate-50 lg:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {isMobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-3 px-4 py-4 finlec-soft-grid">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href={guideRoute}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-xl border border-[#04b488]/25 bg-white px-4 py-3 text-sm font-semibold text-[#047a5d]"
              >
                Mutual Funds Guide
              </Link>

              <Link
                href={exploreRoute}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-xl border border-[#7B4FD4]/30 bg-[#7B4FD4]/10 px-4 py-3 text-sm font-semibold text-[#5e36b3]"
              >
                Explore Mutual Funds
              </Link>

              <div className="grid grid-cols-1 gap-3 pt-1">
                {isAuthenticated ? (
                  <div className="rounded-2xl border border-[#04b488]/20 bg-[linear-gradient(135deg,#ffffff_0%,#f3fffb_100%)] p-3 shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#04b488] to-[#7B4FD4] text-sm font-bold text-white">
                        {userInitials}
                      </span>
                      <span className="flex-1 text-left">
                        <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                          Signed in
                        </span>
                        <span className="block text-sm font-semibold text-[#0f172a]">{userLabel}</span>
                      </span>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <Link
                        href="/dashboard"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-center text-sm font-semibold text-slate-700"
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/dashboard/profile"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-center text-sm font-semibold text-slate-700"
                      >
                        Profile
                      </Link>
                    </div>

                    <SignOutButton
                      className="mt-3 w-full justify-center rounded-xl border border-[#e85d5d]/20 bg-white px-4 py-3 text-[#c23b3b] hover:bg-[#fff5f5]"
                    />
                  </div>
                ) : (
                  <Link
                    href={guestHref}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-xl border border-[#0b3d3b]/40 bg-[#0b3d3b] px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0f4a46]"
                  >
                    {guestLabel}
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
