"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import NavbarFilm from "../components/NavbarFilm";
import Footer from "../components/Footer";
import { useState } from "react";
import { motion as Option } from "framer-motion";

const movies = [
  {
    id: 1,
    title: "Agak Laen",
    description: "Seorang mantan agen rahasia...",
    poster: "/images/3.jpg",
  },
  {
    id: 2,
    title: "Mortal Kombat: Anniversary",
    description: "Pertarungan besar antar dimensi...",
    poster: "/images/2.jpg",
  },
  {
    id: 3,
    title: "Spiderman: Legacy of Bomba (2025)",
    description: "Pertarungan besar antar dimensi...",
    poster: "/images/4.jpg",
  },
  {
    id: 4,
    title: "The Family Plan 2",
    description: "Pertarungan besar antar dimensi...",
    poster: "/images/5.jpg",
  },
  {
    id: 5,
    title: "Komangsi & Joddy (2025)",
    description: "Pertarungan besar antar dimensi...",
    poster: "/images/1.jpg",
  },
  {
    id: 6,
    title: "Malam Pencabut Nyawa",
    description: "Pertarungan besar antar dimensi...",
    poster: "/images/malam pencabut nyawa.jpg",
  },
  {
    id: 7,
    title: "Pamali Tumbal",
    description: "Pertarungan besar antar dimensi...",
    poster: "/images/7.jpg",
  },
  {
    id: 8,
    title: "KKN",
    description: "Pertarungan besar antar dimensi...",
    poster: "/images/8.jpg",
  },
  {
    id: 9,
    title: "Siksa Neraka",
    description: "Pertarungan besar antar dimensi...",
    poster: "/images/9.jpg",
  },
  {
    id: 10,
    title: "Danur",
    description: "Pertarungan besar antar dimensi...",
    poster: "/images/10.jpg",
  },

];

export default function TontonPage() {
  const searchParams = useSearchParams();
  const movieId = Number(searchParams.get("movie"));
  const [isSaved, setIsSaved] = useState(false);

  const movie = movies.find((m) => m.id === movieId);

  if (!movie) {
    return <div className="text-white text-center mt-20">Film tidak ditemukan</div>;
  }

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
              <Option.button
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
              </Option.button>
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
