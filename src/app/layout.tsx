import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import SessionProvider from "@/components/providers/SessionProvider";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Finlec | All-in-One Mutual Fund Investment Platform",
  description:
    "Finlec helps you invest in mutual funds with SIP planning, expert guidance, and goal-based portfolio management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${ibmPlex.className} ${ibmPlex.variable} antialiased`}>
        <SessionProvider>
          <Navbar />
          <div className="pt-20 sm:pt-24">{children}</div>
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
