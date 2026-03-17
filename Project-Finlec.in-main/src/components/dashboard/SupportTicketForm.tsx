"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import type { SupportTicketType } from "@/types/platform";

const ticketTypes: SupportTicketType[] = [
  "INVESTING",
  "KYC",
  "MANDATE",
  "ORDER",
  "SIP",
  "REPORTING",
  "COMPLAINT",
];

export default function SupportTicketForm() {
  const router = useRouter();
  const [type, setType] = useState<SupportTicketType>("ORDER");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/platform/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, subject, description }),
      });

      const payload = (await response.json()) as { message?: string };
      if (!response.ok) {
        toast.error(payload.message ?? "Unable to create support request.");
        return;
      }

      toast.success(payload.message ?? "Support request created.");
      setSubject("");
      setDescription("");
      router.refresh();
    } catch {
      toast.error("Unable to reach the support service.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Category</label>
        <select
          value={type}
          onChange={(event) => setType(event.target.value as SupportTicketType)}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#04b488]"
        >
          {ticketTypes.map((ticketType) => (
            <option key={ticketType} value={ticketType}>
              {ticketType.replace(/_/g, " ")}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Subject</label>
        <input
          type="text"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#04b488]"
          placeholder="Describe the issue briefly"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Description</label>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          rows={5}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#04b488]"
          placeholder="Share the transaction, folio, or servicing context so the ops team can respond faster."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center rounded-2xl bg-[#1a1560] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#130f49] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Submitting..." : "Raise support request"}
      </button>
    </form>
  );
}
