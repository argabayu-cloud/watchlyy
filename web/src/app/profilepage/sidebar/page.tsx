"use client";

import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: Props) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const linkBase = "px-3 py-2 rounded-lg transition";

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
        z-50 p-6 transition-transform duration-300 ease-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white hover:text-red-500"
        >
          <X size={22} />
        </button>

        {/* PROFILE INFO */}
        <div className="mt-10 mb-8 flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full overflow-hidden border border-white/20">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>

          <h3 className="text-white mt-3 text-lg font-medium">
            Arga Bayu
          </h3>

          <p className="text-gray-400 text-sm">arga@example.com</p>

          <div className="w-full h-px bg-white/10 mt-5"></div>
        </div>

        {/* MENU LIST */}
        <div className="flex flex-col gap-4 text-gray-300">

          <Link
            href="/profilepage/profile"
            className={`${linkBase} ${
              isActive("/profilepage/profile")
                ? "bg-red-600 text-white"
                : "hover:bg-white/10 hover:text-white"
            }`}
          >
            Profile
          </Link>

          <Link
            href="/profilepage/setting"
            className={`${linkBase} ${
              isActive("/profilepage/setting")
                ? "bg-red-600 text-white"
                : "hover:bg-white/10 hover:text-white"
            }`}
          >
            Setting
          </Link>

          <Link
            href="/profilepage/akun"
            className={`${linkBase} ${
              isActive("/profilepage/akun")
                ? "bg-red-600 text-white"
                : "hover:bg-white/10 hover:text-white"
            }`}
          >
            Akun
          </Link>
        </div>
      </div>
    </>
  );
}
