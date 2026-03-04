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
    <section id="partners" className="bg-[#1a1a2e] px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#dcfce7] backdrop-blur-md">
            AMC Network
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white font-[family-name:var(--font-sora)] sm:text-4xl">
            Trusted by leading fund houses
          </h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Integrated execution across top-performing asset management companies.
          </p>
        </div>

        <div
          className="mt-10 overflow-hidden rounded-3xl border border-white/20 bg-white/10 py-4 backdrop-blur-md"
          onMouseEnter={() => controlsRef.current?.stop()}
          onMouseLeave={startMarquee}
        >
          <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-3 px-4">
            {repeatedPartners.map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="min-w-40 rounded-2xl border border-white/20 bg-[#0a0a0a]/35 px-4 py-3 text-center text-sm font-semibold text-[#dcfce7]"
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
