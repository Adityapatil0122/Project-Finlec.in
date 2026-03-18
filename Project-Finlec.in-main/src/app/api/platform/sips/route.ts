import { z } from "zod";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { getOrCreatePlatformState, updateSipStatus } from "@/lib/platform/mock-store";

const sipStatusSchema = z.object({
  sipId: z.string().min(1, "SIP id is required."),
  status: z.enum(["ACTIVE", "PAUSED", "CANCELLED"]),
});

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const platform = getOrCreatePlatformState(
    session.user.id,
    session.user.name ?? "Finlec Investor",
    session.user.email ?? "investor@finlec.in"
  );

  return NextResponse.json({ sips: platform.sips, mandates: platform.bankMandates });
}

export async function PATCH(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const parsed = sipStatusSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { message: parsed.error.issues[0]?.message ?? "Invalid SIP update." },
        { status: 400 }
      );
    }

    const state = updateSipStatus(session.user.id, parsed.data.sipId, parsed.data.status);
    if (!state) {
      return NextResponse.json({ message: "SIP instruction not found." }, { status: 404 });
    }

    return NextResponse.json({ message: "SIP status updated.", sips: state.sips, overview: state.overview });
  } catch {
    return NextResponse.json({ message: "Unable to update SIP." }, { status: 500 });
  }
}
