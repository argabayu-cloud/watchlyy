"use client";

import Link from "next/link";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: Props) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#0f0f0f] border-l border-white/10 
        z-50 p-6 transition-transform duration-300 
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-white text-lg font-semibold">Profile Menu</h2>
          <button onClick={onClose} className="text-white hover:text-red-500">
            <X size={22} />
          </button>
        </div>

        {/* MENU LIST */}
        <div className="flex flex-col gap-4 text-gray-300">

          <Link
            href="/profilepage/profile"
            className="hover:text-white hover:bg-white/10 rounded-lg px-3 py-2 transition"
          >
            Profile
          </Link>

          <Link
            href="/profilepage/setting"
            className="hover:text-white hover:bg-white/10 rounded-lg px-3 py-2 transition"
          >
            Setting
          </Link>

          <Link
            href="/profilepage/akun"
            className="hover:text-white hover:bg-white/10 rounded-lg px-3 py-2 transition"
          >
            Akun
          </Link>

        </div>
      </div>
    </>
  );
}
