"use client";

import { HeroSection } from "@/components/ui/hero-section-2";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-0 pb-12 pt-4 sm:pt-4 lg:pt-4"
    >
      <HeroSection
        className="min-h-[85vh]"
        title={
          <>
            India&apos;s Leading All-in-One{" "}
            <br />
            <span className="bg-[linear-gradient(135deg,#04b488,#7B4FD4)] bg-clip-text text-transparent">
              Mutual Funds
            </span>{" "}
            Platform
          </>
        }
        subtitle="Streamline your SIP investments, discover top-performing funds, and build long-term wealth - all from one beautifully simple platform."
        callToAction={{
          text: "START INVESTING FREE ->",
          href: "https://finlec.my-portfolio.co.in/app/#/login",
        }}
        backgroundImage="/images/Untitled-design-3.png"
      />
    </section>
  );
}
