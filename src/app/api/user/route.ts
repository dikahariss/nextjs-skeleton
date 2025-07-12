import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Basic user info endpoint
    return NextResponse.json(
      {
        userId,
        message: "User API endpoint working",
        timestamp: new Date().toISOString(),
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      {
        error: "Internal server error",
        message: "Failed to fetch user data",
      },
      { status: 500 },
    );
  }
}
