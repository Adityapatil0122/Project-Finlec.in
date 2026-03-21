"use client";

import { useCallback, useEffect, useRef } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useMobileMotion } from "@/lib/hooks/useMobileMotion";
import { mobileFadeUp, mobileStaggerFade } from "@/lib/motion";

const partnerLogos = [
  { name: "SBI Mutual Fund", file: "sbi.png" },
  { name: "ICICI Prudential", file: "icici.png" },
  { name: "Kotak Mahindra", file: "kotak.png" },
  { name: "Axis Mutual Fund", file: "axis.png" },
  { name: "HDFC / HSBC", file: "hsbc.png" },
  { name: "Nippon India", file: "nippon.png" },
  { name: "Mirae Asset", file: "mirae.png" },
  { name: "Motilal Oswal", file: "motilal-oswal.png" },
  { name: "Tata Mutual Fund", file: "tata.png" },
  { name: "Bandhan AMC", file: "bandhan.png" },
  { name: "Canara Robeco", file: "canara-robeco.png" },
  { name: "Franklin Templeton", file: "franklin-templeton.png" },
  { name: "Edelweiss", file: "edelweiss.png" },
  { name: "Invesco India", file: "invesco.png" },
  { name: "LIC Mutual Fund", file: "lic.png" },
  { name: "Mahindra Manulife", file: "mahindra-manu.png" },
  { name: "ABSL", file: "absl.png" },
  { name: "Sundaram AMC", file: "sundaram.png" },
  { name: "UTI Mutual Fund", file: "uti.png" },
  { name: "PGIM India", file: "pgim-india.png" },
  { name: "PPFAS", file: "ppfas.png" },
  { name: "Navi AMC", file: "navi.png" },
  { name: "JM Financial", file: "jm-financial.png" },
  { name: "IIFL AMC", file: "iifl.png" },
  { name: "Quantum AMC", file: "quantum.png" },
  { name: "Union AMC", file: "union-amc.png" },
  { name: "Bajaj Finserv", file: "billsinvestmentbajajfinserv.png" },
  { name: "Samco MF", file: "bills_investment_samco.png" },
  { name: "Old Bridge MF", file: "bills_investment_oldbridge.png" },
  { name: "ITI MF", file: "bills_investment_itimf.png" },
  { name: "Capitalmind", file: "billsinvestment_capitalmind.png" },
];

const repeatedLogos = [...partnerLogos, ...partnerLogos];
const SCROLL_SPEED = 55;

export default function PartnersMarquee() {
  const { shouldAnimate, motionKey } = useMobileMotion();
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const controlsRef = useRef<ReturnType<typeof animate> | null>(null);
  const wrapperMotionProps = shouldAnimate
    ? {
        variants: mobileStaggerFade,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.35 },
      }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.35 },
        transition: { duration: 0.5, ease: "easeOut" as const },
      };

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
      ease: "linear" as const,
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
    <section id="partners" key={motionKey} className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <motion.div {...wrapperMotionProps} className="mx-auto max-w-7xl">
        <motion.div variants={mobileFadeUp} className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]">
            AMC Network
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] sm:text-3xl md:text-4xl">
            Trusted by leading fund houses
          </h2>
          <p className="mt-4 text-base text-[#4a5568] sm:text-lg">
            Access a wide AMC network through one platform.
          </p>
        </motion.div>

        <motion.div
          variants={mobileFadeUp}
          className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-[#f8f9fa] py-5"
          onMouseEnter={() => controlsRef.current?.stop()}
          onMouseLeave={startMarquee}
        >
          <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-4 px-4">
            {repeatedLogos.map((partner, index) => (
              <div
                key={`${partner.file}-${index}`}
                className="flex items-center justify-center px-4"
              >
                <Image
                  src={`/companylogos/${partner.file}`}
                  alt={partner.name}
                  width={220}
                  height={110}
                  className="h-12 w-auto max-w-[140px] object-contain sm:h-16 sm:max-w-[180px]"
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}


