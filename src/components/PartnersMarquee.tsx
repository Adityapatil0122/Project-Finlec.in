"use client";

import { useCallback, useEffect, useRef } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";

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
    <section id="partners" className="bg-white px-4 py-20 dark:bg-transparent sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-7xl"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full bg-[#04b488]/10 px-4 py-2 text-sm font-semibold text-[#04b488]">
            AMC Network
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#1a1560] font-[family-name:var(--font-sora)] dark:text-white sm:text-4xl">
            Trusted by leading fund houses
          </h2>
          <p className="mt-4 text-base text-[#4a5568] dark:text-slate-300 sm:text-lg">
            Unified execution across top-performing asset management companies.
          </p>
        </div>

        <div
          className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-[#f8f9fa] py-5 dark:border-white/10 dark:bg-white/5"
          onMouseEnter={() => controlsRef.current?.stop()}
          onMouseLeave={startMarquee}
        >
          <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-4 px-4">
            {repeatedLogos.map((partner, index) => (
              <div
                key={`${partner.file}-${index}`}
                className="flex h-24 min-w-[180px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-950/75"
              >
                <Image
                  src={`/companylogos/${partner.file}`}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="max-h-14 w-auto max-w-[130px] object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
