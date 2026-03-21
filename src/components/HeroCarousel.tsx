"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useMobileMotion } from "@/lib/hooks/useMobileMotion";
import { mobileFadeUp } from "@/lib/motion";

interface SlideData {
  id: number;
  title: string;
  highlight: string;
  subtitle: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  accent: string;
  surface: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "Start your",
    highlight: "Wealth Journey",
    subtitle:
      "Start small with a Daily SIP and let steady investing build over time.",
    image: "/images/slide-wealth.png",
    ctaText: "Start Investing",
    ctaLink: "/calculators/daily-sip-calculator",
    accent: "#0369a1",
    surface:
      "linear-gradient(135deg, rgba(3,105,161,0.12) 0%, rgba(255,255,255,0.96) 48%, rgba(3,105,161,0.08) 100%)",
  },
  {
    id: 2,
    title: "Achieve Your",
    highlight: "Life Goals",
    subtitle:
      "From a new home to a family vacation, plan your goals with the right mutual fund mix.",
    image: "/images/slide-goals.png",
    ctaText: "Plan Your Goals",
    ctaLink: "/calculators/sip-calculator",
    accent: "#b45309",
    surface:
      "linear-gradient(135deg, rgba(180,83,9,0.12) 0%, rgba(255,255,255,0.96) 48%, rgba(180,83,9,0.08) 100%)",
  },
  {
    id: 3,
    title: "Secure Your",
    highlight: "Child's Future",
    subtitle: "Start early so your child has a stronger financial base for education and future goals.",
    image: "/images/child_future_secure.png",
    ctaText: "Start Planning",
    ctaLink: "/calculators/sip-calculator",
    accent: "#db2777",
    surface:
      "linear-gradient(135deg, rgba(219,39,119,0.12) 0%, rgba(255,255,255,0.96) 48%, rgba(219,39,119,0.08) 100%)",
  },
  {
    id: 4,
    title: "Tax Savings",
    highlight: "Made Easy",
    subtitle:
      "Invest in ELSS funds, save tax under Section 80C, and keep your money growing.",
    image: "/images/slide-protect.png",
    ctaText: "Save Tax Now",
    ctaLink: "/explore-mutual-funds?asset=equity",
    accent: "#047857",
    surface:
      "linear-gradient(135deg, rgba(4,120,87,0.12) 0%, rgba(255,255,255,0.96) 48%, rgba(4,120,87,0.08) 100%)",
  },
  {
    id: 5,
    title: "Plan Your",
    highlight: "Retirement",
    subtitle:
      "Build a retirement corpus step by step so your later years feel secure.",
    image: "/images/slide-retire.png",
    ctaText: "Retirement Calculator",
    ctaLink: "/calculators/retirement-calculator",
    accent: "#6d28d9",
    surface:
      "linear-gradient(135deg, rgba(109,40,217,0.12) 0%, rgba(255,255,255,0.96) 48%, rgba(109,40,217,0.08) 100%)",
  },
];

const AUTO_PLAY_MS = 6000;
const TRANSITION_MS = 720;
const TRACK_EASE = "cubic-bezier(0.32, 0.72, 0, 1)";

function SlideFrame({
  slide,
  panelWidth,
  isActive,
}: {
  slide: SlideData;
  panelWidth: string;
  isActive: boolean;
}) {
  return (
    <div
      className="relative flex h-full shrink-0 items-center justify-center"
      style={{ width: panelWidth, backgroundImage: slide.surface }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.14) 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -right-16 top-10 h-64 w-64 rounded-full border"
          style={{
            borderColor: `${slide.accent}20`,
            backgroundColor: `${slide.accent}08`,
          }}
        />
        <div
          className="absolute right-24 top-20 h-40 w-40 rounded-full border"
          style={{
            borderColor: `${slide.accent}18`,
            backgroundColor: "rgba(255,255,255,0.45)",
          }}
        />
        <div
          className="absolute -left-10 bottom-8 h-48 w-48 rounded-full border"
          style={{
            borderColor: `${slide.accent}16`,
            backgroundColor: `${slide.accent}06`,
          }}
        />
        <div
          className="absolute left-1/2 top-12 h-px w-64 -translate-x-1/2 rotate-[12deg]"
          style={{
            background: `linear-gradient(90deg, transparent, ${slide.accent}30, transparent)`,
          }}
        />
        <div
          className="absolute bottom-16 right-1/4 h-px w-48 rotate-[-18deg]"
          style={{
            background: `linear-gradient(90deg, transparent, ${slide.accent}24, transparent)`,
          }}
        />
      </div>

      <div className="z-[2] mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-between px-4 py-6 sm:px-6 sm:py-10 md:flex-row md:px-16 md:py-0">
        <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
          <h2 className="mt-2 flex flex-col gap-1 sm:mt-4">
            <span
              className="text-[2rem] font-bold leading-tight tracking-tight text-[#1a1560] sm:text-3xl md:text-4xl lg:text-[3.5rem]"
              style={{ fontFamily: "var(--font-sora), 'Inter', sans-serif" }}
            >
              {slide.title}
            </span>
            <span
              className="font-pacifico text-[2rem] leading-tight sm:text-3xl md:text-4xl lg:text-[3.5rem]"
              style={{
                color: slide.accent,
                textShadow: "0 8px 18px rgba(255,255,255,0.55)",
              }}
            >
              {slide.highlight}
            </span>
          </h2>

          <p className="mt-3 max-w-md text-sm font-medium leading-relaxed text-[#4a5568] sm:mt-5 sm:text-base md:text-lg">
            {slide.subtitle}
          </p>

          <Link
            href={slide.ctaLink}
            className="mt-5 inline-block rounded-full px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 min-h-[48px] sm:mt-8 sm:px-8 sm:py-3.5"
            style={{
              backgroundColor: slide.accent,
              boxShadow: `0 18px 36px -20px ${slide.accent}26`,
            }}
          >
            {slide.ctaText}
          </Link>
        </div>

        <div className="mt-4 flex w-full justify-center sm:mt-6 md:mt-0 md:w-1/2">
          <div
            className="relative flex h-[300px] w-[300px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/70 sm:h-[320px] sm:w-[320px] md:h-80 md:w-80 lg:h-[400px] lg:w-[400px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.84) 0%, rgba(255,255,255,0.56) 100%)",
              boxShadow: `0 30px 60px -40px ${slide.accent}20`,
            }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-contain drop-shadow-[0_24px_30px_rgba(15,23,42,0.18)]"
              loading={isActive ? "eager" : "lazy"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroCarousel() {
  const { shouldAnimate, motionKey } = useMobileMotion();
  const [trackIndex, setTrackIndex] = useState(1);
  const [isSnap, setIsSnap] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);
  const isHorizontalSwipe = useRef(false);

  const trackSlides = useMemo(
    () => [slides[slides.length - 1], ...slides, slides[0]],
    []
  );
  const panelCount = trackSlides.length;

  useEffect(() => {
    slides.forEach((slide) => {
      const preloader = new window.Image();
      preloader.src = slide.image;
    });
  }, []);

  const activeIndex =
    ((trackIndex - 1) % slides.length + slides.length) % slides.length;
  const activeSlide = slides[activeIndex];
  const trackShift = (trackIndex * 100) / panelCount;

  const moveBy = useCallback(
    (direction: 1 | -1) => {
      if (isAnimating || isSnap) return;
      setIsAnimating(true);
      setTrackIndex((prev) => prev + direction);
    },
    [isAnimating, isSnap]
  );

  const nextSlide = useCallback(() => {
    moveBy(1);
  }, [moveBy]);

  const prevSlide = useCallback(() => {
    moveBy(-1);
  }, [moveBy]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isAnimating || isSnap) return;
      setIsAnimating(true);
      setTrackIndex((prev) => prev + 1);
    }, AUTO_PLAY_MS);

    return () => clearInterval(timer);
  }, [isAnimating, isSnap]);

  const handleTrackTransitionEnd = useCallback(() => {
    if (trackIndex === slides.length + 1) {
      setIsSnap(true);
      setTrackIndex(1);
    } else if (trackIndex === 0) {
      setIsSnap(true);
      setTrackIndex(slides.length);
    }

    setIsAnimating(false);
  }, [trackIndex]);

  useEffect(() => {
    if (!isSnap) return;

    const frame = requestAnimationFrame(() => {
      setIsSnap(false);
    });

    return () => cancelAnimationFrame(frame);
  }, [isSnap]);

  const getRealIndexFromTrack = useCallback(
    (idx: number) => {
      if (idx === 0) return slides.length - 1;
      if (idx === panelCount - 1) return 0;
      return idx - 1;
    },
    [panelCount]
  );

  const goToSlide = useCallback(
    (target: number) => {
      if (target === activeIndex || isAnimating || isSnap) return;
      setIsAnimating(true);
      setTrackIndex(target + 1);
    },
    [activeIndex, isAnimating, isSnap]
  );

  const handleTouchStart = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      if (isAnimating || isSnap) return;
      touchStartX.current = event.touches[0]?.clientX ?? null;
      touchCurrentX.current = touchStartX.current;
      isHorizontalSwipe.current = false;
    },
    [isAnimating, isSnap]
  );

  const handleTouchMove = useCallback((event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const nextX = event.touches[0]?.clientX ?? null;
    if (nextX === null) return;

    touchCurrentX.current = nextX;

    const deltaX = nextX - touchStartX.current;
    if (Math.abs(deltaX) > 12) {
      isHorizontalSwipe.current = true;
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (
      touchStartX.current === null ||
      touchCurrentX.current === null ||
      isAnimating ||
      isSnap
    ) {
      touchStartX.current = null;
      touchCurrentX.current = null;
      isHorizontalSwipe.current = false;
      return;
    }

    const deltaX = touchCurrentX.current - touchStartX.current;

    if (Math.abs(deltaX) >= 40 && isHorizontalSwipe.current) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    touchStartX.current = null;
    touchCurrentX.current = null;
    isHorizontalSwipe.current = false;
  }, [isAnimating, isSnap, nextSlide, prevSlide]);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
        .font-pacifico {
          font-family: 'Pacifico', cursive;
        }
      `}</style>

      <motion.div
        {...(shouldAnimate
          ? {
              variants: mobileFadeUp,
              initial: "hidden",
              whileInView: "show",
              viewport: { once: true, amount: 0.6 },
            }
          : {})}
        key={motionKey}
        className="relative w-full overflow-hidden"
        style={{ paddingTop: "12px" }}
      >
        <div
          className="relative w-full overflow-hidden h-[640px] sm:h-[580px] md:h-[clamp(400px,55vw,520px)]"
          style={{
            backgroundImage: activeSlide.surface,
            touchAction: "pan-y",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="flex h-full will-change-transform"
              style={{
                width: `${panelCount * 100}%`,
                transform: `translate3d(-${trackShift}%, 0, 0)`,
                transition: isSnap
                  ? "none"
                  : `transform ${TRANSITION_MS}ms ${TRACK_EASE}`,
              }}
              onTransitionEnd={handleTrackTransitionEnd}
            >
              {trackSlides.map((slide, idx) => (
                <SlideFrame
                  key={`${slide.id}-${idx}`}
                  slide={slide}
                  panelWidth={`${100 / panelCount}%`}
                  isActive={getRealIndexFromTrack(idx) === activeIndex}
                />
              ))}
            </div>
          </div>

          <button
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/78 text-slate-700 backdrop-blur-sm transition-all duration-200 hover:scale-110 disabled:opacity-60 md:left-6"
            onClick={prevSlide}
            aria-label="Previous slide"
            disabled={isAnimating || isSnap}
            style={{ boxShadow: `0 12px 24px -18px ${activeSlide.accent}22` }}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/78 text-slate-700 backdrop-blur-sm transition-all duration-200 hover:scale-110 disabled:opacity-60 md:right-6"
            onClick={nextSlide}
            aria-label="Next slide"
            disabled={isAnimating || isSnap}
            style={{ boxShadow: `0 12px 24px -18px ${activeSlide.accent}22` }}
          >
            <ChevronRight size={22} />
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white/72 px-2 py-1 backdrop-blur-sm sm:bottom-6 sm:gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="flex h-9 w-6 items-center justify-center rounded-full sm:h-10 sm:w-7"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${activeIndex === idx
                    ? "h-3.5 w-7 shadow-md"
                    : "h-3.5 w-2.5 bg-slate-300/85"
                    }`}
                  style={
                    activeIndex === idx
                      ? {
                          backgroundColor: activeSlide.accent,
                          boxShadow: `0 10px 18px -12px ${activeSlide.accent}24`,
                        }
                      : undefined
                  }
                />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
