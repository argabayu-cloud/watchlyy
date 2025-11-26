"use client";

import Image from "next/image";
import NavbarFilm from "../components/NavbarFilm";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TontonPage() {
  const [isSaved, setIsSaved] = useState(false);

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

            {/* BUTTON + ICON */}
            <div className="flex items-center">
              <button
                className="px-6 py-3 rounded-lg text-lg font-semibold bg-[#DC143C] text-white hover:bg-red-700 active:bg-white active:text-black transition"
              >
                Putar Sekarang
              </button>

              {/* ICON SAVE */}
              <motion.button
                onClick={() => setIsSaved(!isSaved)}
                whileTap={{ scale: 1.4 }}
                animate={{ scale: isSaved ? 1.2 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 12 }}
                className="
                  p-4 rounded-lg transition 
                  bg-transparent
                "
                title="Simpan ke Koleksi"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill={isSaved ? "white" : "transparent"}      // isi icon
                  stroke="white"                                 // garis tepi
                  strokeWidth={isSaved ? 0 : 2}                  // hilang saat full white
                >
                  <path d="M6 2h12a2 2 0 0 1 2 2v18l-8-4-8 4V4a2 2 0 0 1 2-2z"/>
                </svg>
              </motion.button>
            </div>

            {isSaved && (
              <p className="text-green-400 text-sm mt-2">
                Berhasil disimpan ke koleksi.
              </p>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
