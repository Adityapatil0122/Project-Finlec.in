import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

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
    <footer className="bg-[#2d2a6e] text-white/80">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.6fr_0.6fr_0.8fr]">
          {/* Brand column */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/finlec_Logo.png"
                alt="Finlec"
                width={160}
                height={56}
                className="h-[44px] w-auto rounded-lg object-contain"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Finlec helps you explore mutual funds, start SIPs, and manage your investments from one place.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-white/60 hover:border-[#04b488] hover:text-[#04b488]"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Get in Touch
            </h3>
            <div className="mt-5 space-y-4 text-sm">
              <div className="flex gap-3 text-white/60">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#04b488]" />
                <span>2nd Floor, Saikripa Building, Trimurti Chowk, Pune-46</span>
              </div>
              <a
                href="mailto:investor@finlec.in"
                className="flex items-center gap-3 text-white/60 hover:text-white"
              >
                <Mail size={16} className="shrink-0 text-[#04b488]" />
                investor@finlec.in
              </a>
              <a
                href="tel:+919420151046"
                className="flex items-center gap-3 text-white/60 hover:text-white"
              >
                <Phone size={16} className="shrink-0 text-[#04b488]" />
                9420151046
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10" />

        {/* Regulatory & informational sections */}
        <div className="mt-10 space-y-8 text-xs leading-relaxed text-white/40">
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
              Investing in Mutual Fund Portfolios
            </h4>
            <p>
              A portfolio is a mix of mutual funds built around your goals, time
              horizon, and risk comfort. It helps diversify your investments and
              keeps your savings plan organized. You can build one yourself or
              ask an expert to help.
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
              Disclaimer
            </h4>
            <p>
              Finlec India is a member of BSE Star MF (Member Code 55269) and a
              mutual fund distributor with AMFI Registration No: ARN-225204.
              Registered and correspondence office: 2nd Floor, Saikripa
              Building, Trimurti Chowk, Pune-46.
            </p>
            <p className="mt-2">
              Finlec India makes no express or implied warranties on products
              offered through the platform. It accepts no liability for losses
              arising from the use of the platform or reliance on related
              services. Unless stated otherwise, returns, expense ratios, NAV,
              and similar figures are historical and shown only for illustration.
              Future returns can vary significantly based on market conditions
              and individual circumstances.
            </p>
            <p className="mt-2">
              The information shared on our blog is for education only and does
              not constitute investment or tax advice.
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
              About Finlec
            </h4>
            <p>
              FINLEC is an investment platform that helps users discover mutual
              funds and invest with ease. FINLEC provides fund information and
              evaluation tools, but all investment decisions should be made at
              the investor&apos;s own discretion. FINLEC does not guarantee returns
              or capital protection.
            </p>
            <p className="mt-2">FINLEC helps investors in the following way:</p>
            <ul className="mt-1 list-inside list-disc space-y-1">
              <li>By showing clear information about the products available on FINLEC</li>
              <li>By helping investors understand the risks involved before they invest</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
              Secure Transactions on Finlec
            </h4>
            <p>
              Transactions on FINLEC are processed through supported banking
              channels for SIP and lump sum investments. FINLEC uses BSE Star MF
              (Member Code 55269) as the transaction platform.
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
              Mutual Funds Sahi Hai
            </h4>
            <p>
              Mutual funds are popular because they let investors start with a
              small amount, diversify across assets, and invest toward different
              goals. A wide range of mutual fund categories is available on
              FINLEC.
            </p>
            <p className="mt-2">
              Mutual fund investments are subject to market risk. Please read all
              scheme-related documents carefully before investing. Past
              performance is neither an indicator nor a guarantee of future
              performance.
            </p>
            <p className="mt-2">
              Terms and conditions of the website and app apply. The website
              privacy policy also applies.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Finlec. All rights reserved. Developed by Finlec Technologies.
          </p>
          <div className="flex gap-6 text-xs">
            <Link href="/terms" className="text-white/40 hover:text-white">
              Terms of Use
            </Link>
            <Link href="/privacy" className="text-white/40 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="text-white/40 hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
