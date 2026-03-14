import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { getOrCreatePlatformState } from "@/lib/platform/mock-store";

export async function requirePlatformSession() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    redirect("/login");
  }
  return session;
}

export async function getPlatformContext() {
  const session = await requirePlatformSession();
  const platform = getOrCreatePlatformState(
    session.user.id,
    session.user.name ?? "Finlec Investor",
    session.user.email ?? "investor@finlec.in"
  );

  return { session, platform };
}
