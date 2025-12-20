"use client";

import Link from "next/link";

export default function AkunPage() {
  return (
    <div className="min-h-screen bg-black flex items-start justify-center">
      <div className="w-full max-w-3xl mx-auto p-6 space-y-8 bg-black text-white">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">Akun</h1>
          <p className="text-sm text-gray-400">
            Kelola informasi dan keamanan akun Anda
          </p>
        </div>

        {/* Informasi Akun */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 space-y-4">
          <h2 className="text-lg font-semibold">Informasi Akun</h2>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-white">Email</p>
              <p className="text-sm text-gray-400">
                email@gmail.com
              </p>
            </div>
            <button className="text-sm text-blue-400 hover:underline">
              Ganti Akun
            </button>
          </div>
        </div>

        {/* Keamanan */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 space-y-2">
          <h2 className="text-lg font-semibold mb-3">Keamanan</h2>

          {/* Item */}
          <Link
            href="/profilepage/akun/ganti_password"
            className="block w-full rounded-lg bg-zinc-800 px-4 py-3 hover:bg-zinc-700 transition"
          >
            🔐 Ganti Password
          </Link>

          {/* Item */}
          <button
            className="w-full rounded-lg bg-zinc-800 px-4 py-3 text-left hover:bg-zinc-700 transition"
          >
            ❓ Lupa Password
          </button>
        </div>
      </div>
    </div>
  );
}
