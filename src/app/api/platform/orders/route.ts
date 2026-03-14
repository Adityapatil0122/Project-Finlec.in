import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { createPlatformOrder, getOrCreatePlatformState } from "@/lib/platform/mock-store";
import { orderCreateSchema } from "@/lib/validations";

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

  return NextResponse.json({ orders: platform.orders, funds: platform.funds });
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = orderCreateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: parsed.error.issues[0]?.message ?? "Invalid order payload." },
      { status: 400 }
    );
  }

  const state = createPlatformOrder(session.user.id, parsed.data);
  if (!state) {
    return NextResponse.json({ message: "Unable to create order." }, { status: 404 });
  }

  return NextResponse.json({
    message:
      parsed.data.kind === "SIP_REGISTRATION"
        ? "SIP registration queued successfully."
        : "Purchase order initiated successfully.",
    orders: state.orders,
    sips: state.sips,
    overview: state.overview,
  });
}
