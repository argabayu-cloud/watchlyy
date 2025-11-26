"use client";

import Link from "next/link";

export default function ProfilePage({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-black border-l border-white/10 text-white p-6 z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="text-xl font-semibold mb-6">Menu Akun</h2>

        <ul className="space-y-4">
          <li>
            <Link href="/profilepage/profil" onClick={onClose}>
              Profil
            </Link>
          </li>
          <li>
            <Link href="/profilepage/setting" onClick={onClose}>
              Setting
            </Link>
          </li>
          <li>
            <Link href="/profilepage/akun" onClick={onClose}>
              Akun
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
