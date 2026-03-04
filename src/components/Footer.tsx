"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const platformLinks = [
  { label: "Feature Stack", href: "#features" },
  { label: "Fund Strategies", href: "#strategies" },
  { label: "Goal Planning", href: "#goals" },
  { label: "Partner AMCs", href: "#partners" },
];

const regulatoryLinks = [
  { label: "NSE", href: "https://www.nseindia.com/" },
  { label: "BSE", href: "https://www.bseindia.com/" },
  { label: "SEBI Scores", href: "https://scores.sebi.gov.in/" },
  { label: "KFintech", href: "https://www.kfintech.com/" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com/", icon: Youtube },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-[#f8f9fa] px-4 pb-10 pt-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl rounded-3xl bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Link href="#home" className="inline-flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00C896]">
                <span className="h-4 w-4 rounded-full bg-white" />
              </span>
              <span className="text-xl font-semibold text-[#1a1a3e] font-[family-name:var(--font-sora)]">
                Finlec
              </span>
            </Link>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#4a5568]">
              Premium mutual fund advisory platform for disciplined SIP investing,
              modern portfolio strategy, and long-term wealth confidence.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    whileHover={{ y: -2 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f8f9fa] text-[#00C896]"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#00C896]">
              Platform
            </h3>
            <ul className="mt-4 space-y-3">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm text-[#4a5568] transition-colors hover:text-[#00C896]"
                  >
                    {link.label}
                    <ArrowUpRight size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#00C896]">
              Regulation
            </h3>
            <ul className="mt-4 space-y-3">
              {regulatoryLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[#4a5568] transition-colors hover:text-[#00C896]"
                  >
                    {link.label}
                    <ArrowUpRight size={14} />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-2xl bg-[#f8f9fa] p-4 text-sm text-[#4a5568]">
              Office 12, Financial District, Pune, Maharashtra, India
              <br />
              investor@finlec.in | 9420151046
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#e5e7eb] pt-5 text-xs leading-relaxed text-[#4a5568]">
          Mutual fund investments are subject to market risks. Please read all
          scheme related documents carefully before investing. Past performance is
          not indicative of future returns.
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-[#e5e7eb] pt-5 text-sm text-[#4a5568] sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Finlec. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/terms" className="transition-colors hover:text-[#00C896]">
              Terms
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-[#00C896]">
              Privacy
            </Link>
            <Link href="/cookie-policy" className="transition-colors hover:text-[#00C896]">
              Cookies
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}