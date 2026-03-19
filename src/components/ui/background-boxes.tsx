"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const partnerLogos = [
  "sbi.png", "icici.png", "kotak.png", "axis.png", "hsbc.png", "nippon.png", "mirae.png", 
  "motilal-oswal.png", "tata.png", "bandhan.png", "canara-robeco.png", "franklin-templeton.png", 
  "edelweiss.png", "invesco.png", "lic.png", "mahindra-manu.png", "absl.png", "sundaram.png", 
  "uti.png", "pgim-india.png", "ppfas.png", "navi.png", "jm-financial.png", "iifl.png", 
  "quantum.png", "union-amc.png", "billsinvestmentbajajfinserv.png", "bills_investment_samco.png", 
  "bills_investment_oldbridge.png", "bills_investment_itimf.png", "billsinvestment_capitalmind.png"
];

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  // Using slightly larger boxes (w-24 h-16) to fit logos, so fewer rows/cols are needed
  const rows = new Array(50).fill(1);
  const cols = new Array(40).fill(1);

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-24 h-16 border-l border-slate-200/60 relative"
        >
          {cols.map((_, j) => {
             // Create a deterministic pseudo-random index based on row and col
            const logoIndex = ((i * 7) + (j * 11)) % partnerLogos.length;
            const logoFile = partnerLogos[logoIndex];

            return (
              <motion.div
                key={`col` + j}
                className="w-24 h-16 border-r border-t border-slate-200/60 relative flex items-center justify-center overflow-hidden bg-transparent"
              >
                <motion.div
                  className="absolute inset-0 flex items-center justify-center p-3 opacity-0 bg-[#f8f9fa] border border-[#04b488]/30 z-10"
                  whileHover={{
                    opacity: 1,
                    transition: { duration: 0 },
                  }}
                  animate={{
                    opacity: 0,
                    transition: { duration: 1.5, delay: 0.2 },
                  }}
                >
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img 
                      src={`/companylogos/${logoFile}`} 
                      alt="AMC Logo" 
                      className="max-w-[80%] max-h-[80%] object-contain"
                      loading="lazy"
                   />
                </motion.div>
                {j % 2 === 0 && i % 2 === 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-300 stroke-[1px] pointer-events-none z-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                ) : null}
              </motion.div>
            )
          })}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);

