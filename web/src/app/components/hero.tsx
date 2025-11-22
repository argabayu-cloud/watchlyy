"use client";
import Link from "next/link";
export default function Hero() {
  return (
    <section
      className="relative w-full h-screen flex items-center px-8 md:px-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      {/* Overlay hitam 70% */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-xl text-white flex flex-col items-start text-left">
        {/* Status */}
        <span className="inline-block mb-4 text-sm bg-white/10 px-4 py-1 rounded-full">
          • Available to Watch
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Tonton Film Favoritmu
          <br /> Dalam Satu Tempat
        </h1>

        {/* Subtitle */}
        <p className="text-lg opacity-90 mb-6">
          Temukan film terbaru, serial populer, dan rekomendasi pilihan yang cocok dengan seleramu. Semua ada di Watchly.
        </p>

        {/* Buttons */}
        <div className="flex items-start gap-4">
          <Link
            href="/film"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-base font-medium"
          >
            Mulai Nonton
          </Link>

          <a
            href="#"
            className="border border-white hover:bg-white/20 text-white px-6 py-3 rounded-lg text-base font-medium"
          >
            Lihat Koleksi
          </a>
        </div>
      </div>
    </section>
  );
}
