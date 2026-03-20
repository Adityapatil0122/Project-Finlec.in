"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type MobileMotionOptions = {
  breakpoint?: number;
};

export function useMobileMotion(options: MobileMotionOptions = {}) {
  const { breakpoint = 768 } = options;
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion) {
      setIsMobile(false);
      return;
    }

    const media = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    setIsMobile(media.matches);
  }, [breakpoint, prefersReducedMotion]);

  const shouldAnimate = isMobile && !prefersReducedMotion;
  const motionKey = shouldAnimate ? "mobile" : "desktop";

  return { shouldAnimate, motionKey };
}
