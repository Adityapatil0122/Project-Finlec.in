import { NextResponse } from "next/server";
import { getFundSnapshotByName } from "@/lib/mfapi";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { funds?: string[] };
    const funds = Array.isArray(body?.funds)
      ? body.funds.filter((name) => typeof name === "string" && name.trim().length > 0)
      : [];

    if (!funds.length) {
      return NextResponse.json({ data: [] }, { status: 200 });
    }

    const uniqueFunds = Array.from(new Set(funds));
    const snapshots = await Promise.all(
      uniqueFunds.map((name) => getFundSnapshotByName(name))
    );

    return NextResponse.json(
      { data: snapshots.filter(Boolean) },
      {
        status: 200,
        headers: {
          "Cache-Control": "s-maxage=3600, stale-while-revalidate=7200",
        },
      }
    );
  } catch {
    return NextResponse.json({ data: [] }, { status: 200 });
  }
}
