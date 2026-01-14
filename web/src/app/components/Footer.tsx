"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 py-10 px-6 md:px-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <img
            src="images/WatchLy.png"
            alt="Watchly Logo"
            className="w-50 mb-3"
          />
          <p className="text-sm opacity-80">
            Platform streaming film dan series favoritmu. Nikmati pengalaman
            menonton tanpa batas.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Menu</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Genre
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Tahun
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Ratting
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Rekomendasi
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Ikuti Kami</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                YouTube
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                TikTok
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-10 text-sm text-gray-500 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Watchly. All rights reserved.
      </div>
    </footer>
  );
}
