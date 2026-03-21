import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SessionProvider from "@/components/providers/SessionProvider";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finlec | Mutual Fund Investing Made Simple",
  description:
    "Finlec helps you explore mutual funds, start SIPs, and plan goals with simple tools and expert support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <SessionProvider>
          <Navbar />
          <div className="pt-[74px] sm:pt-20">{children}</div>
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                borderRadius: "10px",
                border: "1px solid #e5e7eb",
              },
            }}
          />
        </SessionProvider>
      </body>
    </html>
  );
}
