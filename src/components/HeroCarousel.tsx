"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  bgColor: string;
  titleColor: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "Start your Wealth Journey",
    subtitle: "Small steps today, giant leaps tomorrow. Begin your Daily SIP and watch your money compound over time.",
    image: "/images/slide-wealth.png",
    ctaText: "Start Investing",
    ctaLink: "/calculators/daily-sip-calculator",
    bgColor: "bg-[#e0f2fe] dark:bg-sky-950/40",
    titleColor: "text-sky-700 dark:text-sky-400",
  },
  {
    id: 2,
    title: "Achieve Your Life Goals",
    subtitle: "From a dream home to a world tour, fund your dreams with expert-guided mutual funds and goal planning.",
    image: "/images/slide-goals.png",
    ctaText: "Plan Your Goals",
    ctaLink: "/calculators/sip-calculator",
    bgColor: "bg-[#fef3c7] dark:bg-amber-950/40",
    titleColor: "text-amber-700 dark:text-amber-500",
  },
  {
    id: 3,
    title: "Tax Savings Made Easy",
    subtitle: "Invest in ELSS funds and save up to ₹46,800 under Section 80C while growing your capital.",
    image: "/images/slide-protect.png",
    ctaText: "Save Tax Now",
    ctaLink: "/explore-mutual-funds?asset=equity",
    bgColor: "bg-[#dcfce7] dark:bg-emerald-950/40",
    titleColor: "text-emerald-700 dark:text-emerald-500",
  },
  {
    id: 4,
    title: "Plan Your Retirement",
    subtitle: "Secure your golden years without stress. Build a massive corpus with disciplined, long-term investments.",
    image: "/images/slide-retire.png",
    ctaText: "Retirement Calculator",
    ctaLink: "/calculators/retirement-calculator",
    bgColor: "bg-[#f3e8ff] dark:bg-purple-950/40",
    titleColor: "text-purple-700 dark:text-purple-400",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play the carousel every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  // We'll use a constant direction = 1 because Next/Prev isn't strictly controlled 
  // with custom logic here, just standard right-to-left slide for auto-play.
  const swipeDirection = 1;

  return (
    <div className="relative w-full overflow-hidden pt-28 pb-12">
      {/* Container */}
      <div className="relative mx-auto h-[600px] w-full max-w-7xl px-4 sm:h-[500px] md:h-[450px]">
        <AnimatePresence initial={false} custom={swipeDirection}>
          <motion.div
            key={currentSlide}
            custom={swipeDirection}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className={`absolute left-0 top-0 flex h-full w-full flex-col md:flex-row items-center justify-between rounded-[2.5rem] p-8 md:p-16 ${slides[currentSlide].bgColor} shadow-sm border border-black/5 dark:border-white/5`}
            style={{ margin: '32px 16px', width: 'calc(100% - 32px)', height: 'calc(100% - 64px)' }}
          >
            {/* Left Content */}
            <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
              <h2 className={`text-4xl font-bold font-[family-name:var(--font-sora)] md:text-5xl lg:text-6xl ${slides[currentSlide].titleColor}`}>
                {slides[currentSlide].title}
              </h2>
              <p className="mt-4 max-w-lg text-lg text-slate-700 dark:text-slate-300">
                {slides[currentSlide].subtitle}
              </p>
              <Link
                href={slides[currentSlide].ctaLink}
                className="mt-8 rounded-full bg-[#1a1560] px-8 py-3.5 font-semibold text-white shadow-lg transition-transform hover:-translate-y-1 hover:bg-[#1a1560]/90 dark:bg-white dark:text-[#1a1560] dark:hover:bg-slate-200"
              >
                {slides[currentSlide].ctaText}
              </Link>
            </div>

            {/* Right Image */}
            <div className="mt-8 flex w-full justify-center md:mt-0 md:w-1/2">
              <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 drop-shadow-2xl">
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          className="absolute left-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow-md backdrop-blur transition-colors hover:bg-white dark:bg-slate-800/80 dark:text-white dark:hover:bg-slate-800"
          onClick={prevSlide}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute right-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow-md backdrop-blur transition-colors hover:bg-white dark:bg-slate-800/80 dark:text-white dark:hover:bg-slate-800"
          onClick={nextSlide}
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-12 left-1/2 z-10 flex -translate-x-1/2 gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all ${currentSlide === idx ? "w-8 bg-[#1a1560] dark:bg-white" : "w-2.5 bg-slate-400/50 dark:bg-slate-600/50"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
