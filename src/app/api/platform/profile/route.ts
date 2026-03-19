import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { getOrCreatePlatformState, updateInvestorProfile } from "@/lib/platform/mock-store";
import { investorProfileSchema } from "@/lib/validations";

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

  return NextResponse.json({
    profile: platform.profile,
    bankAccounts: platform.bankAccounts,
    mandates: platform.bankMandates,
    nominations: platform.nominations,
  });
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = investorProfileSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: parsed.error.issues[0]?.message ?? "Invalid profile payload." },
      { status: 400 }
    );
  }

  const state = updateInvestorProfile(session.user.id, parsed.data);
  if (!state) {
    return NextResponse.json({ message: "Profile not found." }, { status: 404 });
  }

  return NextResponse.json({ message: "Profile updated successfully.", profile: state.profile, onboarding: state.onboarding });
}
