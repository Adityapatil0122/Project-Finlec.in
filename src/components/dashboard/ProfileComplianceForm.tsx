"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import type { InvestorProfile } from "@/types/platform";

type ProfileComplianceFormProps = {
  profile: InvestorProfile;
};

export default function ProfileComplianceForm({ profile }: ProfileComplianceFormProps) {
  const router = useRouter();
  const [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);
  const [panNumber, setPanNumber] = useState("ABCDE1234F");
  const [occupation, setOccupation] = useState(profile.occupation);
  const [annualIncomeBand, setAnnualIncomeBand] = useState(profile.annualIncomeBand);
  const [riskProfile, setRiskProfile] = useState<"LOW" | "MODERATE" | "HIGH">(profile.riskProfile);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/platform/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dateOfBirth,
          panNumber,
          occupation,
          annualIncomeBand,
          riskProfile,
        }),
      });

      const payload = (await response.json()) as { message?: string };
      if (!response.ok) {
        toast.error(payload.message ?? "Unable to update profile.");
        return;
      }

      toast.success(payload.message ?? "Profile updated.");
      router.refresh();
    } catch {
      toast.error("Unable to reach the profile service.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Date of birth</label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(event) => setDateOfBirth(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#04b488]"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">PAN number</label>
          <input
            type="text"
            value={panNumber}
            onChange={(event) => setPanNumber(event.target.value.toUpperCase())}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm uppercase text-slate-700 outline-none transition focus:border-[#04b488]"
          />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Occupation</label>
          <input
            type="text"
            value={occupation}
            onChange={(event) => setOccupation(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#04b488]"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Annual income band</label>
          <input
            type="text"
            value={annualIncomeBand}
            onChange={(event) => setAnnualIncomeBand(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#04b488]"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Risk profile</label>
        <select
          value={riskProfile}
          onChange={(event) => setRiskProfile(event.target.value as typeof riskProfile)}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#04b488]"
        >
          <option value="LOW">Low</option>
          <option value="MODERATE">Moderate</option>
          <option value="HIGH">High</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center rounded-2xl bg-[#04b488] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#049f78] disabled:cursor-not-allowed disabled:opacity-70 min-h-[48px]"
      >
        {isSubmitting ? "Saving..." : "Save profile changes"}
      </button>
    </form>
  );
}
