"use client";

import Link from "next/link";
import Image from "next/image";
import { X, LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: Props) {
  const [Mounted, setMounted] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  if (!Mounted) return null;

  const isActive = (path: string) => pathname === path;
  const linkBase = "px-3 py-2 rounded-lg transition";

  const handleLogout = () => {
    // kalau nanti pakai token, hapus di sini
    // localStorage.removeItem("token");

    setShowLogoutConfirm(false);
    onClose();
    router.push("/"); // arahkan ke hero.tsx (biasanya halaman "/")
  };

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
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white hover:text-red-500"
        >
          <X size={22} />
        </button>

        {/* Profile */}
        <div className="mt-10 mb-8 flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full overflow-hidden border border-white/20">
            <Image
              src="/images/btth1.jpg"
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

          <div className="w-full h-px bg-white/10 mt-5" />
        </div>

        {/* Menu */}
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

        {/* Logout Button */}
        <button
          onClick={() => setShowLogoutConfirm(true)}
          className="absolute bottom-6 right-6 left-6 flex items-center justify-center gap-2
          px-3 py-2 rounded-lg text-red-500 border border-red-500/40
          hover:bg-red-500 hover:text-white transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-6 w-full max-w-sm text-center">
            <p className="text-white mb-6">
              Apakah anda yakin untuk logout?
            </p>

            <div className="flex gap-4">
              <button
                onClick={handleLogout}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
              >
                Ya
              </button>

              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg"
              >
                Batalkan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
