import { NextResponse } from "next/server";

// dummy data genre
let genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Comedy" },
  { id: 3, name: "Horror" },
];

// GET → Ambil semua genre
export async function GET() {
  return NextResponse.json({
    success: true,
    data: genres,
  });
}

// POST → Tambah genre baru
export async function POST(req) {
  const body = await req.json();
  const newGenre = {
    id: genres.length + 1,
    name: body.name,
  };

  genres.push(newGenre);

  return NextResponse.json({
    success: true,
    data: newGenre,
  });
}
