import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { createSupportTicket, getOrCreatePlatformState } from "@/lib/platform/mock-store";
import { supportTicketSchema } from "@/lib/validations";

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

  return NextResponse.json({ tickets: platform.supportTickets });
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const parsed = supportTicketSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { message: parsed.error.issues[0]?.message ?? "Invalid ticket payload." },
        { status: 400 }
      );
    }

    const state = createSupportTicket(session.user.id, parsed.data);
    if (!state) {
      return NextResponse.json({ message: "Unable to create support ticket." }, { status: 422 });
    }

    return NextResponse.json({ message: "Support request created successfully.", tickets: state.supportTickets }, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Unable to create support ticket." }, { status: 500 });
  }
}
