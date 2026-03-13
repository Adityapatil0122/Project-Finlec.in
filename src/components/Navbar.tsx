"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Calculators", href: "/calculators" },
  { label: "Daily SIP", href: "/calculators/daily-sip-calculator" },
];

const exploreRoute = "/explore-mutual-funds";
const guideRoute = "/mutual-funds-guide";
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        isScrolled
          ? "border-b border-slate-200/80 bg-white/95 shadow-[0_12px_30px_-22px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0f1424]/92 dark:shadow-[0_18px_40px_-30px_rgba(0,0,0,0.7)]"
          : "border-b border-transparent bg-white/80 backdrop-blur-md dark:bg-[#0f1424]/70"
      }`}
    >
      {/* Scroll Progress Bar replacing the static top border */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#04b488] via-[#04b488] to-[#7B4FD4] origin-left z-[60]"
      />

      <nav
        className={`mx-auto flex w-full max-w-7xl items-center justify-between px-4 transition-[height] sm:px-6 lg:px-8 ${
          isScrolled ? "h-[74px]" : "h-20"
        }`}
      >
        <Link href="/" className="inline-flex items-center" aria-label="Finlec home">
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={150}
            height={50}
            className="h-auto w-[130px] object-contain transition-transform duration-300 hover:scale-[1.01] sm:w-[150px]"
            priority
          />
        </Link>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 lg:flex lg:ml-8">
            {navLinks.map((link) => (
              <motion.div key={link.label} whileHover={{ y: -1 }}>
                <Link
                  href={link.href}
                  className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    pathname === link.href
                      ? "bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white"
                      : "bg-white text-slate-600 hover:bg-slate-50 dark:bg-slate-950/70 dark:text-slate-200 dark:hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div className="group relative">
              <motion.div whileHover={{ y: -1 }}>
                <Link
                  href={exploreRoute}
                  className={`inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                    pathname === exploreRoute
                      ? "bg-[#7B4FD4]/10 text-[#5e36b3] dark:bg-[#7B4FD4]/18 dark:text-[#e1d6ff]"
                      : "bg-white text-[#5e36b3] hover:bg-[#7B4FD4]/10 dark:bg-slate-950/70 dark:text-[#d8cbff] dark:hover:bg-[#7B4FD4]/12"
                  }`}
                >
                  Explore Mutual Funds
                </Link>
              </motion.div>
              
              {/* Megamenu Dropdown */}
              <div className="absolute top-full right-0 mt-4 w-[500px] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 rounded-2xl bg-white dark:bg-[#1a1560] shadow-[0_18px_40px_-15px_rgba(14,23,40,0.2)] dark:shadow-[0_18px_40px_-15px_rgba(0,0,0,0.6)] border border-slate-200 dark:border-white/10 p-6 hidden lg:flex gap-8 z-[60]">
                {/* Invisible bridge to keep hover active */}
                <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent" />
                
                <div className="flex-1">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#04b488] mb-4">Top Categories</h3>
                  <ul className="space-y-4">
                    <li><Link href="/explore-mutual-funds" className="block text-sm font-semibold text-[#1a1560] dark:text-white hover:text-[#04b488] dark:hover:text-[#04b488] transition-colors">Large Cap Funds</Link></li>
                    <li><Link href="/explore-mutual-funds" className="block text-sm font-semibold text-[#1a1560] dark:text-white hover:text-[#04b488] dark:hover:text-[#04b488] transition-colors">Mid Cap Funds</Link></li>
                    <li><Link href="/explore-mutual-funds" className="block text-sm font-semibold text-[#1a1560] dark:text-white hover:text-[#04b488] dark:hover:text-[#04b488] transition-colors">Small Cap Funds</Link></li>
                  </ul>
                </div>
                <div className="flex-1 border-l border-slate-100 dark:border-white/10 pl-8">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#7B4FD4] mb-4">Specialized</h3>
                  <ul className="space-y-4">
                    <li><Link href="/explore-mutual-funds" className="block text-sm font-semibold text-[#1a1560] dark:text-white hover:text-[#7B4FD4] dark:hover:text-[#7B4FD4] transition-colors">Tax Saver (ELSS)</Link></li>
                    <li><Link href="/explore-mutual-funds" className="block text-sm font-semibold text-[#1a1560] dark:text-white hover:text-[#7B4FD4] dark:hover:text-[#7B4FD4] transition-colors">Index Funds</Link></li>
                    <li><Link href="/explore-mutual-funds" className="block text-sm font-semibold text-[#1a1560] dark:text-white hover:text-[#7B4FD4] dark:hover:text-[#7B4FD4] transition-colors">Debt Funds</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <motion.div whileHover={{ y: -1 }}>
              <Link
                href={guideRoute}
                className={`inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  pathname === guideRoute
                    ? "bg-[#04b488]/12 text-[#047a5d] dark:bg-[#04b488]/20 dark:text-[#7ff7cc]"
                    : "bg-white text-[#047a5d] hover:bg-[#04b488]/10 dark:bg-slate-950/70 dark:text-[#7ff7cc] dark:hover:bg-[#04b488]/15"
                }`}
              >
                Mutual Funds Guide
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -1 }}>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full bg-[#0b3d3b] px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0f4a46] hover:shadow-[0_12px_24px_-14px_rgba(15,74,70,0.75)] active:translate-y-0 dark:bg-[#0f3a35] dark:text-white dark:hover:bg-[#14554f]"
              >
                Login
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
              <Link
                href={exploreRoute}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-xl border border-[#7B4FD4]/30 bg-[#7B4FD4]/10 px-4 py-3 text-sm font-semibold text-[#5e36b3] dark:border-[#7B4FD4]/40 dark:bg-[#7B4FD4]/16 dark:text-[#e1d6ff]"
              >
                Explore Mutual Funds
              </Link>
              <Link
                href={guideRoute}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-xl border border-[#04b488]/25 bg-white px-4 py-3 text-sm font-semibold text-[#047a5d] dark:border-[#04b488]/30 dark:bg-slate-950/75 dark:text-[#7ff7cc]"
              >
                Mutual Funds Guide
              </Link>
              <div className="grid grid-cols-1 gap-3 pt-1">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-xl border border-[#0b3d3b]/40 bg-[#0b3d3b] px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0f4a46] dark:border-[#14554f]/40 dark:bg-[#0f3a35] dark:text-white dark:hover:bg-[#14554f]"
                >
                  Login
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
