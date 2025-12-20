"use client";

import { useState } from "react";

export default function GantiPasswordPage() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Password baru tidak cocok");
      return;
    }

    alert("Password berhasil diganti");
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Ganti Password</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          placeholder="Password Lama"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="w-full rounded-lg border px-3 py-2"
        />

        <input
          type="password"
          placeholder="Password Baru"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full rounded-lg border px-3 py-2"
        />

        <input
          type="password"
          placeholder="Konfirmasi Password Baru"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full rounded-lg border px-3 py-2"
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 text-white py-2 hover:bg-blue-700"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}
