import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { getOrCreatePlatformState } from "@/lib/platform/mock-store";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || session.user.role !== "ADMIN") {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  const platform = getOrCreatePlatformState(
    session.user.id,
    session.user.name ?? "Finlec Admin",
    session.user.email ?? "admin@finlec.in"
  );

  return NextResponse.json({
    adminOps: platform.adminOps,
    tickets: platform.supportTickets,
    recentOrders: platform.orders.slice(0, 5),
  });
}
