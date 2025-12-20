"use client";

import { useState } from "react";
import Link from "next/link";

export default function LupaPasswordPage() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert("Email wajib diisi");
      return;
    }

    // nanti di sini panggil API reset password
    setSuccess(true);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-6 text-white">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">Lupa Password</h1>
          <p className="text-sm text-gray-400">
            Masukkan email untuk menerima link reset password
          </p>
        </div>

        {/* Success Message */}
        {success ? (
          <div className="space-y-4">
            <div className="rounded-lg bg-green-900/30 border border-green-800 p-4 text-sm text-green-400">
              Link reset password telah dikirim ke email Anda.
            </div>

            <Link
              href="/profilepage/akun"
              className="block text-center text-blue-400 hover:underline"
            >
              Kembali ke Akun
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="email@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-2 hover:bg-blue-700 transition"
            >
              Kirim Link Reset
            </button>

            <Link
              href="/profilepage/akun"
              className="block text-center text-sm text-gray-400 hover:underline"
            >
              Batal
            </Link>
          </form>
        )}
      </div>
    </div>
  );
}
