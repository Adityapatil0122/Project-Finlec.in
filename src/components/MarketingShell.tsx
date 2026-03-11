import { Manrope, Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

type MarketingShellProps = {
  children: React.ReactNode;
  mainClassName?: string;
};

export default function MarketingShell({
  children,
  mainClassName,
}: MarketingShellProps) {
  return (
    <div
      className={cn(
        manrope.variable,
        sora.variable,
        "relative overflow-x-clip bg-[#f5f6fa] text-[#1a1560] font-[family-name:var(--font-manrope)] transition-colors dark:bg-[#0c0a2e] dark:text-slate-50"
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_70%_50%_at_10%_8%,rgba(0,220,160,0.14),transparent),radial-gradient(ellipse_60%_45%_at_90%_5%,rgba(180,140,255,0.14),transparent),radial-gradient(ellipse_50%_35%_at_50%_30%,rgba(255,170,210,0.08),transparent)] dark:bg-[radial-gradient(ellipse_70%_50%_at_10%_10%,rgba(4,180,136,0.2),transparent),radial-gradient(ellipse_60%_45%_at_88%_8%,rgba(123,79,212,0.24),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.3),rgba(255,255,255,0))] opacity-50 dark:hidden" />
      <Navbar />
      <main className={cn("relative", mainClassName)}>{children}</main>
      <Footer />
    </div>
  );
}
