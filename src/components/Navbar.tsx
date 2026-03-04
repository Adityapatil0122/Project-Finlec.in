"use client";

import { useState } from "react";
import Image from "next/image";
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
      className="sticky top-0 z-50 border-b border-white/10 bg-[#0f0f2e]/95 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="projects/codexuse/finlec/public/images/logo.jpg" className="inline-flex items-center gap-3">
          <Image
            src="projects/codexuse/finlec/public/images/logo.jpg"
            alt="Logo"
            width={150}
            height={50}
            className="object-contain cursor-pointer"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ y: -1 }}
              className="group relative py-2 text-sm font-medium text-gray-400 transition-colors hover:text-[#00C896]"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-[#00C896] transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </motion.a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <motion.div whileHover={{ y: -1 }}>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-2xl bg-[#7B4FD4] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#6940bd]"
            >
              Login
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -1 }}>
            <Link
              href="/signup"
              className="inline-flex items-center rounded-2xl bg-[#00C896] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[rgba(0,200,150,0.35)] transition-colors hover:bg-[#00b286]"
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
            className="overflow-hidden border-t border-white/10 bg-[#0f0f2e] md:hidden"
          >
            <div className="space-y-3 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-gray-400 transition-colors hover:text-[#00C896]"
                >
                  {link.label}
                </a>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-2xl bg-[#7B4FD4] px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-2xl bg-[#00C896] px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-[rgba(0,200,150,0.35)]"
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
