"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type SipActionsProps = {
  sipId: string;
  currentStatus: "ACTIVE" | "PAUSED" | "CANCELLED";
};

export default function SipActions({ sipId, currentStatus }: SipActionsProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const runUpdate = (status: "ACTIVE" | "PAUSED" | "CANCELLED") => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/platform/sips", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sipId, status }),
        });

        const payload = (await response.json()) as { message?: string };
        if (!response.ok) {
          toast.error(payload.message ?? "Unable to update SIP.");
          return;
        }

        toast.success(payload.message ?? "SIP updated.");
        router.refresh();
      } catch {
        toast.error("Unable to reach the SIP service.");
      }
    });
  };

  return (
    <div className="flex flex-wrap gap-2">
      {currentStatus !== "ACTIVE" ? (
        <button
          type="button"
          disabled={isPending}
          onClick={() => runUpdate("ACTIVE")}
          className="rounded-full border border-[#04b488]/25 bg-[#04b488]/10 px-3 py-1.5 text-xs font-semibold text-[#048b6a] min-h-[44px]"
        >
          Resume
        </button>
      ) : null}
      {currentStatus === "ACTIVE" ? (
        <button
          type="button"
          disabled={isPending}
          onClick={() => runUpdate("PAUSED")}
          className="rounded-full border border-amber-200 bg-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-700 min-h-[44px]"
        >
          Pause
        </button>
      ) : null}
      {currentStatus !== "CANCELLED" ? (
        <button
          type="button"
          disabled={isPending}
          onClick={() => runUpdate("CANCELLED")}
          className="rounded-full border border-red-200 bg-red-100 px-3 py-1.5 text-xs font-semibold text-red-700 min-h-[44px]"
        >
          Cancel
        </button>
      ) : null}
    </div>
  );
}
