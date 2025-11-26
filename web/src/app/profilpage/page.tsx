"use client";
import { useState } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">
      {/* Button open sidebar */}
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-slate-800 text-white rounded-md"
      >
        Open Profile Menu
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar kanan */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 p-5 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="text-lg font-semibold mb-4">Menu</h2>

        <ul className="flex flex-col gap-3">
          <li>
            <Link href="/profilepage/profil" className="p-2 block hover:bg-gray-100 rounded">
              Profil
            </Link>
          </li>
          <li>
            <Link href="/profilepage/setting" className="p-2 block hover:bg-gray-100 rounded">
              Setting
            </Link>
          </li>
          <li>
            <Link href="/profilepage/akun" className="p-2 block hover:bg-gray-100 rounded">
              Akun
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
