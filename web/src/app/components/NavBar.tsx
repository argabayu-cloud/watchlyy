"use client";
import Image from "next/image";

export default function Navbar() {

  return (
    <nav className="w-full fixed top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-0 flex items-center justify-between">
        
        {/* LEFT - LOGO + MENU */}
        <div className="flex items-center gap-8">
          <Image 
            src="/images/WatchLy.png" 
            alt="Watchly Logo"
            width={150}
            height={40}
            className="object-contain"
          />
          
        </div>

        {/* RIGHT - SEARCH + LOGIN */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 bg-white/10 text-white rounded-lg placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500"
          />

          <button className="px-5 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition">
            Login
          </button>
        </div>

      </div>
    </nav>
  );
}
