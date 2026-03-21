"use client";

import { useSyncExternalStore, type ReactElement } from "react";
import { ResponsiveContainer } from "recharts";

type CalculatorChartProps = {
  children: ReactElement;
  minHeight?: number;
};

export default function CalculatorChart({
  children,
  minHeight = 200,
}: CalculatorChartProps) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return <div className="h-full w-full" aria-hidden="true" />;
  }

  return (
    <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={minHeight}>
      {children}
    </ResponsiveContainer>
  );
}
