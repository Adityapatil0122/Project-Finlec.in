"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import type { FundOption } from "@/types/platform";

type InvestOrderFormProps = {
  funds: FundOption[];
};

export default function InvestOrderForm({ funds }: InvestOrderFormProps) {
  const router = useRouter();
  const [kind, setKind] = useState<"LUMPSUM_PURCHASE" | "SIP_REGISTRATION">("LUMPSUM_PURCHASE");
  const [fundId, setFundId] = useState(funds[0]?.id ?? "");
  const [amount, setAmount] = useState("5000");
  const [paymentRail, setPaymentRail] = useState<"UPI" | "NETBANKING" | "UPI_AUTOPAY">("UPI");
  const [frequency, setFrequency] = useState<"MONTHLY" | "QUARTERLY">("MONTHLY");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/platform/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fundId,
          kind,
          amount,
          paymentRail,
          frequency: kind === "SIP_REGISTRATION" ? frequency : undefined,
        }),
      });

      const payload = (await response.json()) as { message?: string };
      if (!response.ok) {
        toast.error(payload.message ?? "Unable to create order.");
        return;
      }

      toast.success(payload.message ?? "Order created successfully.");
      router.refresh();
    } catch {
      toast.error("Unable to reach the order service.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Order Type</label>
          <select
            value={kind}
            onChange={(event) => {
              const nextKind = event.target.value as typeof kind;
              setKind(nextKind);
              setPaymentRail(nextKind === "SIP_REGISTRATION" ? "UPI_AUTOPAY" : "UPI");
            }}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none ring-0 transition focus:border-[#04b488]"
          >
            <option value="LUMPSUM_PURCHASE">One-time purchase</option>
            <option value="SIP_REGISTRATION">SIP registration</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Fund</label>
          <select
            value={fundId}
            onChange={(event) => setFundId(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none ring-0 transition focus:border-[#04b488]"
          >
            {funds.map((fund) => (
              <option key={fund.id} value={fund.id}>
                {fund.name} - {fund.category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Amount</label>
          <input
            type="number"
            min={500}
            step={500}
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none ring-0 transition focus:border-[#04b488]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Payment rail</label>
          <select
            value={paymentRail}
            onChange={(event) => setPaymentRail(event.target.value as typeof paymentRail)}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none ring-0 transition focus:border-[#04b488]"
          >
            {kind === "SIP_REGISTRATION" ? (
              <>
                <option value="UPI_AUTOPAY">UPI AutoPay</option>
                <option value="NETBANKING">eNACH / netbanking mandate</option>
              </>
            ) : (
              <>
                <option value="UPI">UPI collect</option>
                <option value="NETBANKING">Netbanking</option>
              </>
            )}
          </select>
        </div>
      </div>

      {kind === "SIP_REGISTRATION" ? (
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Frequency</label>
          <select
            value={frequency}
            onChange={(event) => setFrequency(event.target.value as typeof frequency)}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none ring-0 transition focus:border-[#04b488]"
          >
            <option value="MONTHLY">Monthly</option>
            <option value="QUARTERLY">Quarterly</option>
          </select>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center rounded-2xl bg-[#04b488] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#049f78] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Processing..." : kind === "SIP_REGISTRATION" ? "Register SIP" : "Create order"}
      </button>
    </form>
  );
}
