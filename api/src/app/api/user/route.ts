import { NextResponse, NextRequest } from "next/server";

// Revisi 1: Mengganti 'let' menjadi 'const' karena array hanya dimodifikasi (push), tidak di-reassign.
const users = [{ id: 1, username: "erwin", password: "123456" }];

// GET → Ambil semua user
export async function GET() {
  return NextResponse.json({
    success: true,
    data: users,
  });
}

// POST → Tambah user baru (register)
export async function POST(req: NextRequest) {
  // Tambahkan 'any' atau buat interface untuk body jika Anda ingin tipe yang lebih ketat,
  // tetapi untuk contoh sederhana ini, req.json() sudah cukup.
  const body = await req.json();

  const newUser = {
    id: users.length + 1,
    username: body.username,
    password: body.password,
  };

  // PENTING: Perlu diingat bahwa push ini hanya berlaku selama server berjalan.
  // Jika server di-restart, data akan hilang.
  users.push(newUser);

  return NextResponse.json({
    success: true,
    data: newUser,
  });
}
