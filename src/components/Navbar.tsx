"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Strategies", href: "#strategies" },
  { label: "Goals", href: "#goals" },
  { label: "Partners", href: "#partners" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center" aria-label="Finlec home">
          <span className="bg-gradient-to-r from-[#16a34a] via-[#22c55e] to-[#dcfce7] bg-clip-text text-2xl font-semibold tracking-tight text-transparent font-[family-name:var(--font-sora)]">
            Finlec
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ y: -1 }}
              className="group relative py-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-[#16a34a] transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </motion.a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <motion.div whileHover={{ y: -1 }}>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              Login
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -1 }}>
            <Link
              href="/signup"
              className="inline-flex items-center rounded-2xl bg-gradient-to-r from-[#16a34a] to-[#15803d] px-4 py-2 text-sm font-semibold text-white shadow-2xl shadow-green-500/50 transition-all hover:from-[#22c55e] hover:to-[#16a34a]"
            >
              New Investor
            </Link>
          </motion.div>
        </div>

        <button
          type="button"
          className="rounded-2xl border border-white/20 bg-white/10 p-2 text-white md:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <div className="space-y-3 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-gray-300 backdrop-blur-md transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white backdrop-blur-md"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-2xl bg-gradient-to-r from-[#16a34a] to-[#15803d] px-4 py-3 text-center text-sm font-semibold text-white shadow-2xl shadow-green-500/50"
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
