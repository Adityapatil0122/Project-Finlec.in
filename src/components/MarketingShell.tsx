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
        "relative overflow-x-clip bg-white text-[#0f172a] font-[family-name:var(--font-manrope)] transition-colors dark:bg-[#0b0d17] dark:text-slate-100"
      )}
    >
      <Navbar />
      <main className={cn("relative", mainClassName)}>{children}</main>
      <Footer />
    </div>
  );
}
