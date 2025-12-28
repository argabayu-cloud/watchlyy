import { NextResponse } from "next/server";

let profile = {
  username: "Current Username",
  photo: "/images/WatchLy.png",
};

export async function GET() {
  return NextResponse.json(profile);
}

export async function PUT(req: Request) {
  const body = await req.json();

  profile = {
    ...profile,
    ...body,
  };

  return NextResponse.json({ success: true, profile });
}
