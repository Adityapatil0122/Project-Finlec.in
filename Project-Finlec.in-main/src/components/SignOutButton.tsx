"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { Loader2, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

type SignOutButtonProps = {
  label?: string;
  className?: string;
  callbackUrl?: string;
};

export default function SignOutButton({
  label = "Logout",
  className,
  callbackUrl = "/login",
}: SignOutButtonProps) {
  const [isPending, setIsPending] = useState(false);

  const handleSignOut = async () => {
    if (isPending) return;

    try {
      setIsPending(true);
      await signOut({ callbackUrl });
    } catch {
      setIsPending(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleSignOut}
      disabled={isPending}
      className={cn(
        "inline-flex items-center gap-2 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-70",
        className
      )}
    >
      {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <LogOut className="h-4 w-4" />}
      <span>{isPending ? "Signing out..." : label}</span>
    </button>
  );
}
