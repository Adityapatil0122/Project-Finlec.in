"use client";

import { useCallback, useEffect, useRef } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { partnerNames } from "@/lib/constants";

const repeatedPartners = [...partnerNames, ...partnerNames];
const SCROLL_SPEED = 72;

export default function PartnersMarquee() {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const controlsRef = useRef<ReturnType<typeof animate> | null>(null);

  const startMarquee = useCallback(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const loopDistance = track.scrollWidth / 2;
    if (!loopDistance) {
      return;
    }

    const currentX = x.get();
    const normalizedX = currentX % loopDistance;

    controlsRef.current?.stop();
    controlsRef.current = animate(x, [normalizedX, normalizedX - loopDistance], {
      duration: loopDistance / SCROLL_SPEED,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });
  }, [x]);

  useEffect(() => {
    startMarquee();

    const onResize = () => {
      x.set(0);
      startMarquee();
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      controlsRef.current?.stop();
    };
  }, [startMarquee, x]);

  return (
    <section id="partners" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full bg-[#00C896]/10 px-4 py-2 text-sm font-semibold text-[#00C896]">
            AMC Network
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#1a1a3e] font-[family-name:var(--font-sora)] sm:text-4xl">
            Trusted by leading fund houses
          </h2>
          <p className="mt-4 text-base text-[#4a5568] sm:text-lg">
            Integrated execution across top-performing asset management companies.
          </p>
        </div>

        <div
          className="mt-10 overflow-hidden rounded-3xl bg-[#f8f9fa] py-4"
          onMouseEnter={() => controlsRef.current?.stop()}
          onMouseLeave={startMarquee}
        >
          <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-3 px-4">
            {repeatedPartners.map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="min-w-40 rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-[#1a1a3e] shadow-sm"
              >
                {partner}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
