"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const platformLinks = [
  { label: "Explore Mutual Funds", href: "/explore-mutual-funds" },
  { label: "Feature Stack", href: "/features" },
  { label: "Investment Tools", href: "/investment-tools" },
  { label: "Fund Strategies", href: "/strategies" },
  { label: "Goal Planning", href: "/goals" },
  { label: "Partner AMCs", href: "/partners" },
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
    <footer className="relative overflow-hidden bg-[#f8f9fa] px-4 pb-10 pt-16 dark:bg-transparent sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-[-160px] top-20 h-80 w-80 rounded-full bg-[#00C896]/12 blur-3xl" />
      <div className="pointer-events-none absolute right-[-160px] bottom-10 h-72 w-72 rounded-full bg-[#7B4FD4]/12 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-slate-200 finlec-surface p-6 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.45)] dark:border-white/10 dark:shadow-[0_22px_70px_-42px_rgba(0,0,0,0.85)] sm:p-8"
      >
        <div className="pointer-events-none absolute left-0 top-0 h-1 w-full finlec-shine" />

        <div className="mb-8 rounded-2xl border border-[#00C896]/20 bg-white/70 p-4 backdrop-blur-sm dark:border-[#00C896]/20 dark:bg-white/6 sm:p-5">
          <p className="text-sm font-semibold text-[#1a1560] dark:text-white">
            Want monthly investment insights?
          </p>
          <p className="mt-1 text-sm text-[#4a5568] dark:text-slate-300">
            Get model portfolio notes, SIP strategy tips, and market volatility
            playbooks from the Finlec advisory team.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Link
              href="/"
              className="relative inline-flex items-center rounded-full border border-white/70 bg-white/78 px-3 py-2 shadow-[0_18px_40px_-28px_rgba(14,23,40,0.45)] dark:border-white/10 dark:bg-slate-950/70"
            >
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(90deg,rgba(0,200,150,0.08),rgba(123,79,212,0.1))]" />
              <Image
                src="/images/logo.jpg"
                alt="Logo"
                width={150}
                height={50}
                className="relative h-auto w-[140px] object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#4a5568] dark:text-slate-300">
              Finlec is a goal-first mutual fund platform for disciplined SIP
              investing, smart portfolio decisions, and long-term wealth growth.
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
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#00C896] transition-colors hover:border-[#00C896]/35 dark:border-white/10 dark:bg-slate-950/72 dark:text-[#7ff7cc]"
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
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm text-[#4a5568] transition-colors hover:text-[#00C896] dark:text-slate-300 dark:hover:text-[#7ff7cc]"
                  >
                    {link.label}
                    <ArrowUpRight size={14} />
                  </Link>
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
                    className="inline-flex items-center gap-1 text-sm text-[#4a5568] transition-colors hover:text-[#00C896] dark:text-slate-300 dark:hover:text-[#7ff7cc]"
                  >
                    {link.label}
                    <ArrowUpRight size={14} />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-2xl border border-slate-200 bg-[#f8f9fa] p-4 text-sm text-[#4a5568] dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              Office 12, Financial District, Pune, Maharashtra, India
              <br />
              investor@finlec.in | 9420151046
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-5 text-xs leading-relaxed text-[#4a5568] dark:border-white/10 dark:text-slate-400">
          Mutual fund investments are subject to market risks. Please read all
          scheme related documents carefully before investing. Past performance is
          not indicative of future returns.
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-slate-200 pt-5 text-sm text-[#4a5568] dark:border-white/10 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Finlec. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/terms" className="transition-colors hover:text-[#00C896] dark:hover:text-[#7ff7cc]">
              Terms
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-[#00C896] dark:hover:text-[#7ff7cc]">
              Privacy
            </Link>
            <Link href="/cookie-policy" className="transition-colors hover:text-[#00C896] dark:hover:text-[#7ff7cc]">
              Cookies
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
