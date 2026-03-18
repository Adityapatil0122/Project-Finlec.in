"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="relative px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#f4fbfc] to-[#e2f8f2] relative shadow-lg border border-[#04b488]/10"
      >
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Left circles */}
          <svg className="absolute -left-[5%] sm:-left-[10%] -bottom-[20%] sm:-bottom-[50%] h-[150%] w-[150%] sm:w-[100%] max-w-none opacity-[0.08]" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="400" r="300" stroke="#04b488" strokeWidth="3" />
            <circle cx="400" cy="400" r="200" stroke="#04b488" strokeWidth="3" />
            <circle cx="400" cy="400" r="100" stroke="#04b488" strokeWidth="3" />
            <circle cx="200" cy="200" r="24" fill="#04b488" />
            <circle cx="650" cy="450" r="16" fill="#04b488" />
          </svg>

          {/* Right circles */}
          <svg className="absolute -right-[10%] sm:-right-[20%] -top-[10%] sm:-top-[20%] h-[100%] w-[100%] max-w-none opacity-[0.08]" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="400" r="300" stroke="#04b488" strokeWidth="3" />
            <circle cx="400" cy="400" r="200" stroke="#04b488" strokeWidth="3" />
            <circle cx="400" cy="400" r="100" stroke="#04b488" strokeWidth="3" />
            <circle cx="250" cy="550" r="20" fill="#04b488" />
            <circle cx="150" cy="150" r="32" fill="#04b488" />
          </svg>
        </div>

        <div className="relative z-10 px-6 py-16 sm:py-20 sm:px-12 lg:px-16 text-center flex flex-col items-center">
          <h3 className="mt-2 max-w-3xl text-3xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-4xl md:text-5xl leading-tight">
            Ready to Start Your Investment{" "}
            <span className="whitespace-nowrap">Journey?</span>
          </h3>

          <p className="mt-6 max-w-2xl text-base text-[#4a5568] sm:text-lg leading-relaxed">
            Let's discuss how Finlec can help you achieve your financial goals with our smart, hassle-free investment solutions.
          </p>

          <Link
            href="https://finlec.my-portfolio.co.in/app/#/login"
            className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-[#04b488] px-8 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-[#039e77] hover:shadow-lg hover:-translate-y-1"
          >
            Start Investing
            <ArrowRight size={20} className="text-white" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
