"use client";

import Image from "next/image";
import NavbarFilm from "../components/NavbarFilm";
import Footer from "../components/Footer";

export default function TontonPage() {
  const movie = {
    title: "The Family Plan 2 (2025)",
    description:
      "Seorang mantan agen rahasia harus kembali ke dunia gelap untuk melindungi keluarganya setelah sebuah peristiwa misterius mengungkap identitas lamanya.",
    poster: "/images/hero.png",
  };

  return (
    <>
      <NavbarFilm />

      {/* WRAPPER */}
      <div className="bg-[#0F0F0F] min-h-screen text-white px-6 md:px-12 py-16">

        {/* SECTION TONTON */}
        <section className="flex flex-col md:flex-row items-center gap-10 mt-10">

          {/* POSTER */}
          <div className="w-full md:w-1/2">
            <Image
              src={movie.poster}
              alt={movie.title}
              width={600}
              height={900}
              className="rounded-xl shadow-lg object-cover w-full"
            />
          </div>

          {/* INFO FILM */}
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">{movie.title}</h1>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {movie.description}
            </p>

            <button
                className="mt-4 px-6 py-3 rounded-lg text-lg font-semibold bg-[#DC143C] text-white hover:bg-red-700 active:bg-white active:text-black transition">
                Putar Sekarang
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
