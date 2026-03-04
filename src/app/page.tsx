import { Manrope, Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsCounter from "@/components/StatsCounter";
import FundTypes from "@/components/FundTypes";
import LifeGoals from "@/components/LifeGoals";
import CTABanner from "@/components/CTABanner";
import PartnersMarquee from "@/components/PartnersMarquee";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export default function Home() {
  return (
    <div
      className={`${manrope.variable} ${sora.variable} overflow-x-clip bg-white text-[#1a1a3e] font-[family-name:var(--font-manrope)]`}
    >
      <Navbar />
      <main className="relative">
        <Hero />
        <AboutSection />
        <FeaturesSection />
        <StatsCounter />
        <FundTypes />
        <LifeGoals />
        <CTABanner />
        <PartnersMarquee />
      </main>
      <Footer />
    </div>
  );
}
