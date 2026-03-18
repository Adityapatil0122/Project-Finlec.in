"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";

const quickLinks = [
  { label: "NSE", href: "https://www.nseindia.com/" },
  { label: "BSE", href: "https://www.bseindia.com/" },
  { label: "SEBI Scores", href: "https://scores.sebi.gov.in/" },
  { label: "CAMS", href: "https://www.camsonline.com/" },
  { label: "Karvy", href: "https://mfs.kfintech.com/" },
];

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Calculators", href: "/calculators" },
  { label: "Daily SIP", href: "/calculators/daily-sip-calculator" },
  { label: "Explore Mutual Funds", href: "/explore-mutual-funds" },
  { label: "Mutual Funds Guide", href: "/mutual-funds-guide" },
  { label: "Login", href: "https://finlec.my-portfolio.co.in/app/#/login" },
  { label: "Contact us", href: "/contact" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com/", icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="bg-[#282185] px-4 pb-12 pt-12 text-white sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-7xl"
      >
        <div className="grid gap-10 rounded-[32px] bg-[#282185] px-8 py-10 sm:px-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center rounded-lg overflow-hidden shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Finlec"
                width={160}
                height={56}
                className="h-[48px] w-auto object-contain"
              />
            </Link>
            <p className="mt-6 pr-10 text-sm leading-relaxed text-white/70">
              Finlec is India&apos;s all-in-one SIP platform, streamlining mutual fund investments with ease and efficiency. Discover top-performing funds effortlessly and invest seamlessly, hassle-free.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#21d0a3]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#21d0a3]">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#21d0a3]">
              Get in touch
            </h3>
            <div className="mt-4 space-y-2 text-sm text-white/80">
              <p>2nd Floor, Saikripa Building,</p>
              <p>Trimurti Chowk, Pune-46</p>
              <a
                href="mailto:investor@finlec.in"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail size={14} /> investor@finlec.in
              </a>
              <a
                href="tel:+919420151046"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone size={14} /> 9420151046
              </a>
            </div>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#21d0a3] text-[#282185] transition-colors hover:bg-white"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-sm text-white/80">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            INVESTING IN MUTUAL FUND PORTFOLIOS
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Portfolio is collection of mutual funds designed to meet your investment goals.
            Investing in mutual fund portfolios helps you in diversifying your investments and
            reduces the risk. Portfolios also help you in assigning an investment goals and make
            it easy for you to save for and achieve your goals. You can create a portfolio yourself
            or ask an expert to build it for you.
          </p>
        </div>

        <div className="mt-6 text-sm text-white/80">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            DISCLAIMER
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Finlec India is a member of BSE Star MF (with Member code 55269) as transaction platform
            & Mutual Fund distributor with AMFI Registration No: ARN-225204 Registered office and
            Correspondence office - 2nd Floor, Saikripa Building, Trimurti Chowk, Pune-46.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Finlec India makes no warranties or representations, express or implied, on products offered
            through the platform. It accepts no liability for any damages or losses, however caused, in
            connection with the use of, or on the reliance of its product or related services. Unless
            otherwise specified, all returns, expense ratio, NAV, etc are historical and for illustrative
            purposes only. Future will vary greatly and depends on personal and market circumstances.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            The information provided by our blog is educational only and is not investment or tax advice.
          </p>
        </div>

        <div className="mt-6 text-sm text-white/80">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            ABOUT FINLEC
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            FINLEC is an investing platform where users can find the best mutual funds to invest in and can
            invest their money without any hassles. FINLEC provides objective evaluation of mutual funds.
            Investor shall invest with their own descretion. FINLEC does not guarantee any returns and safety
            of capital.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            FINLEC helps investors in the following way
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
            <li>By providing objective evaluation of products available on FINLEC</li>
            <li>By clearly representing the risk associated with buying a product</li>
          </ul>
        </div>

        <div className="mt-6 text-sm text-white/80">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            SECURE TRANSACTIONS ON FINLEC
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            All transactions on FINLEC are safe and secure. Users can invest through SIP or Lumpsum using
            Netbanking through all supported banks. It uses BSE Star MF (with Member code 55269) as transaction
            platform.
          </p>
        </div>

        <div className="mt-6 text-sm text-white/80">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            MUTUAL FUNDS SAHI HAI
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Mutual fund investments are very popular with individual investors because of the benefits they
            provide. Among the many advantages, the most important factor that drive investors to mutual funds
            are that Investors can - Start with any amount (as low as 100)
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            All type of mutual funds are available on FINLEC.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Mutual fund investments are subject to market risks. Please read all scheme related documents carefully
            before investing.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Past performance of the schemes is neither an indicator nor a guarantee of future performance.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Terms and conditions of the website/app are applicable. Privacy policy of the website is applicable.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Copyright (c) 2022 Finlec, All rights reserved. Developed by Finlec Technologies
          </p>
          <div className="mt-4 flex flex-wrap gap-6 text-sm text-white/80">
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of use
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="transition-colors hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
