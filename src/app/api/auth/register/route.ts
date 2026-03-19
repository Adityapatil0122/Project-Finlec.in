import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { registerRequestSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = registerRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: parsed.error.issues[0]?.message ?? "Invalid registration details." },
        { status: 400 }
      );
    }

    const { email, phone, password, name } = parsed.data;
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { phone }],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "An account with this email or phone already exists." },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        passwordHash,
        role: "INVESTOR",
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    await prisma.portfolio.create({
      data: {
        userId: user.id,
        name: "Core Wealth",
        description: "Default goal bucket for dashboard onboarding and first investments.",
      },
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.error("Register API error:", error);
    return NextResponse.json(
      {
        message: "Unable to create account right now. Please try again.",
        ...(process.env.NODE_ENV === "development" && error instanceof Error
          ? { debug: error.message }
          : {}),
      },
      { status: 500 }
    );
  }
}
