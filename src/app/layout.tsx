import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionProvider from "@/components/providers/SessionProvider";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
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
      <body className={`${inter.className} antialiased`}>
        <SessionProvider>
          <div className="min-h-screen">{children}</div>
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
