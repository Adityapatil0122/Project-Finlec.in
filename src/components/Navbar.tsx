"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MoonStar, SunMedium, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Strategies", href: "/strategies" },
  { label: "Invest Tools", href: "/investment-tools" },
  { label: "Goals", href: "/goals" },
  { label: "Partners", href: "/partners" },
];

const exploreRoute = "/explore-mutual-funds";
const themeStorageKey = "finlec-theme";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    const nextTheme = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem(themeStorageKey, nextTheme);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        isScrolled
          ? "border-b border-slate-200/85 bg-white/82 shadow-[0_14px_36px_-24px_rgba(14,23,40,0.35)] backdrop-blur-xl dark:border-white/10 dark:bg-[#1a1560]/86 dark:shadow-[0_18px_48px_-28px_rgba(0,0,0,0.7)]"
          : "border-b border-transparent bg-white/58 backdrop-blur-md dark:bg-[#1a1560]/60"
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,rgba(0,200,150,0),rgba(0,200,150,0.9),rgba(123,79,212,0.9),rgba(123,79,212,0))]" />

      <nav
        className={`mx-auto flex w-full max-w-7xl items-center justify-between px-4 transition-[height] sm:px-6 lg:px-8 ${
          isScrolled ? "h-[74px]" : "h-20"
        }`}
      >
        <Link
          href="/"
          className="group relative inline-flex items-center rounded-full border border-white/70 bg-white/82 px-3 py-2 shadow-[0_18px_40px_-28px_rgba(14,23,40,0.45)] transition-colors dark:border-white/10 dark:bg-slate-950/70"
          aria-label="Finlec home"
        >
          <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(90deg,rgba(0,200,150,0.08),rgba(123,79,212,0.1))]" />
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={150}
            height={50}
            className="relative h-auto w-[130px] cursor-pointer object-contain transition-transform duration-300 group-hover:scale-[1.01] sm:w-[150px]"
            priority
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <motion.div key={link.label} whileHover={{ y: -1 }} className="group relative">
              <Link
                href={link.href}
                className={`relative text-sm font-medium tracking-tight transition-colors ${
                  pathname === link.href
                    ? "text-slate-950 dark:text-white"
                    : "text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[#00C896] to-[#7B4FD4] transition-transform duration-300 ${
                    pathname === link.href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 text-slate-700 shadow-sm transition-colors hover:border-[#00C896]/35 hover:text-[#00a57d] dark:border-white/10 dark:bg-slate-950/75 dark:text-slate-200 dark:hover:border-[#7B4FD4]/40 dark:hover:text-white"
            aria-label="Toggle day and night mode"
            title="Toggle day and night mode"
          >
            <SunMedium size={18} className="hidden dark:block" />
            <MoonStar size={18} className="block dark:hidden" />
          </button>

          <div className="hidden items-center gap-3 lg:flex">
            <motion.div whileHover={{ y: -1 }}>
              <Link
                href={exploreRoute}
                className={`inline-flex items-center rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                  pathname === exploreRoute
                    ? "border-[#7B4FD4]/35 bg-[#7B4FD4]/10 text-[#5e36b3] dark:border-[#7B4FD4]/45 dark:bg-[#7B4FD4]/18 dark:text-[#e1d6ff]"
                    : "border-[#7B4FD4]/30 bg-white text-[#5e36b3] hover:bg-[#7B4FD4]/10 dark:border-[#7B4FD4]/25 dark:bg-slate-950/70 dark:text-[#d8cbff] dark:hover:bg-[#7B4FD4]/12"
                }`}
              >
                Explore Mutual Funds
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -1 }}>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full border border-[#00C896]/25 bg-white px-5 py-2 text-sm font-semibold text-[#00C896] transition-colors hover:border-[#00C896]/40 hover:bg-[#00C896]/8 dark:border-[#00C896]/20 dark:bg-slate-950/72 dark:text-[#7ff7cc] dark:hover:border-[#00C896]/35 dark:hover:bg-[#00C896]/10"
              >
                Login
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -1 }}>
              <Link
                href="/signup"
                className="inline-flex items-center rounded-full bg-[linear-gradient(135deg,#00C896,#19d0b3)] px-5 py-2 text-sm font-semibold text-white shadow-[0_14px_30px_-18px_rgba(0,200,150,0.9)] transition-all hover:shadow-[0_18px_34px_-18px_rgba(0,200,150,0.95)] dark:shadow-[0_20px_40px_-22px_rgba(0,200,150,0.65)]"
              >
                New Investor
              </Link>
            </motion.div>
          </div>

          <button
            type="button"
            className="rounded-xl border border-slate-200 bg-white p-2 text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-slate-950/75 dark:text-slate-200 dark:hover:bg-slate-900 lg:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-[#1a1560]/96 lg:hidden"
          >
            <div className="space-y-3 px-4 py-4 finlec-soft-grid">
              <Link
                href={exploreRoute}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-xl border border-[#7B4FD4]/30 bg-[#7B4FD4]/10 px-4 py-3 text-sm font-semibold text-[#5e36b3] dark:border-[#7B4FD4]/40 dark:bg-[#7B4FD4]/16 dark:text-[#e1d6ff]"
              >
                Explore Mutual Funds
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-slate-950/75 dark:text-slate-200"
                >
                  {link.label}
                </Link>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-xl border border-[#00C896]/25 bg-white px-4 py-3 text-center text-sm font-semibold text-[#00C896] dark:border-[#00C896]/20 dark:bg-slate-950/75 dark:text-[#7ff7cc]"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-xl bg-[linear-gradient(135deg,#00C896,#19d0b3)] px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  New Investor
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
