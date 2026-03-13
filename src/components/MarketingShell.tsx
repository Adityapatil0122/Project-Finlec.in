import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

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
        "finlec-fonts relative overflow-x-clip bg-white text-[#0f172a] font-[family-name:var(--font-ibm-plex)] transition-colors dark:bg-[#0b0d17] dark:text-slate-100"
      )}
    >
      <Navbar />
      <main className={cn("relative", mainClassName)}>{children}</main>
      <Footer />
    </div>
  );
}
