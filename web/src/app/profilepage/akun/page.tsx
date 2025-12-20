"use client";

export default function AkunPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Akun</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Kelola informasi dan keamanan akun Anda
        </p>
      </div>

      {/* Informasi Akun */}
      <div className="rounded-xl border border-gray-200 dark:border-zinc-800 p-5 space-y-4">
        <h2 className="text-lg font-semibold">Informasi Akun</h2>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Email</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              email@gmail.com
            </p>
          </div>
          <button className="text-sm text-blue-600 hover:underline">
            Ganti Akun
          </button>
        </div>
      </div>

      {/* Keamanan */}
      <div className="rounded-xl border border-gray-200 dark:border-zinc-800 p-5 space-y-4">
        <h2 className="text-lg font-semibold">Keamanan</h2>

        <button className="w-full rounded-lg border border-gray-300 dark:border-zinc-700 px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-zinc-900">
          🔐 Ganti Password
        </button>

        <button className="w-full rounded-lg border border-gray-300 dark:border-zinc-700 px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-zinc-900">
          ❓ Lupa Password
        </button>
      </div>
    </div>
  );
}
