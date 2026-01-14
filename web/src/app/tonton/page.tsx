"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import NavbarFilm from "../components/NavbarFilm";
import Footer from "../components/Footer";
import { useState } from "react";
import { motion as Option } from "framer-motion";

/* ================== TYPE ================== */
interface Movie {
  id: number;
  title: string;
  description: string;
  poster: string;
  genre: "new" | "horror" | "adventure" | "action";
}

/* ================== DATA ================== */
export const newMovies: Movie[] = [
  {
    id: 1,
    title: "Agak Laen",
    description: "Seorang mantan agen rahasia...",
    poster: "/images/3.jpg",
    genre: "new",
  },
  {
    id: 2,
    title: "Mortal Kombat: Anniversary",
    description: "Pertarungan besar antar dimensi...",
    poster: "/images/2.jpg",
    genre: "new",
  },
  {
    id: 3,
    title: "Spiderman: Legacy of Bomba (2025)",
    description: "Pertarungan besar antar dimensi...",
    poster: "/images/4.jpg",
    genre: "new",
  },
  {
    id: 4,
    title: "The Family Plan 2",
    description: "Pertarungan besar antar dimensi...",
    poster: "/images/5.jpg",
    genre: "new",
  },
  {
    id: 5,
    title: "Komangsi & Joddy (2025)",
    description: "Pertarungan besar antar dimensi...",
    poster: "/images/1.jpg",
    genre: "new",
  },
];

export const horrorMovies: Movie[] = [
  {
    id: 6,
    title: "Malam Pencabut Nyawa",
    description: "Teror makhluk gaib menghantui desa terpencil.",
    poster: "/images/movie/malam pencabut nyawa.jpg",
    genre: "horror",
  },
  {
    id: 7,
    title: "Pamali Tumbal",
    description: "Larangan adat yang berujung petaka.",
    poster: "/images/movie/7.jpg",
    genre: "horror",
  },
  {
    id: 8,
    title: "KKN",
    description: "Mahasiswa KKN diteror makhluk tak kasat mata.",
    poster: "/images/movie/8.jpg",
    genre: "horror",
  },
  {
    id: 9,
    title: "Siksa Neraka",
    description: "Balasan dosa di alam setelah kematian.",
    poster: "/images/movie/9.jpg",
    genre: "horror",
  },
  {
    id: 10,
    title: "Danur",
    description: "Persahabatan dengan makhluk dari dunia lain.",
    poster: "/images/movie/10.jpg",
    genre: "horror",
  },
];

export const adventureMovies: Movie[] = [
  {
    id: 11,
    title: "Jurassic Park",
    description: "Teror makhluk gaib menghantui desa terpencil.",
    poster: "/images/movie/11.jpg",
    genre: "adventure",
  },
  {
    id: 12,
    title: "INSPIRED BY THE TRUE EVENTS TIMUR",
    description: "Larangan adat yang berujung petaka.",
    poster: "/images/movie/12.jpg",
    genre: "adventure",
  },
  {
    id: 13,
    title: "AVATAR",
    description: "Mahasiswa KKN diteror makhluk tak kasat mata.",
    poster: "/images/movie/avatar.jpg",
    genre: "adventure",
  },
  {
    id: 14,
    title: "JUMANJI",
    description: "Balasan dosa di alam setelah kematian.",
    poster: "/images/movie/14.jpg",
    genre: "adventure",
  },
  {
    id: 15,
    title: "KINGDOM PLANET OF THE APES",
    description: "Persahabatan dengan makhluk dari dunia lain.",
    poster: "/images/movie/kingdom.jpg",
    genre: "adventure",
  },
];
export const actionMovies: Movie[] = [
  {
    id: 16,
    title: "PEARL HARBOR",
    description: "Teror makhluk gaib menghantui desa terpencil.",
    poster: "/images/movie/ph.webp",
    genre: "action",
  },
  {
    id: 17,
    title: "13 BOM DI JAKARTA",
    description: "Larangan adat yang berujung petaka.",
    poster: "/images/movie/17.jpg",
    genre: "action",
  },
  {
    id: 18,
    title: "SI PALING AKTOR",
    description: "Mahasiswa KKN diteror makhluk tak kasat mata.",
    poster: "/images/movie/18.jpg",
    genre: "action",
  },
  {
    id: 19,
    title: "JOHN  WICK",
    description: "Balasan dosa di alam setelah kematian.",
    poster: "/images/movie/19.jpg",
    genre: "action",
  },
  {
    id: 20,
    title: "THE SHADOW'S EDGE",
    description: "Persahabatan dengan makhluk dari dunia lain.",
    poster: "/images/movie/20.jpg",
    genre: "action",
  },
];

/* 🔑 GABUNG SEMUA FILM */
const movies: Movie[] = [...newMovies, ...horrorMovies , ...adventureMovies, ...actionMovies];

/* ================== PAGE ================== */
export default function TontonPage() {
  const searchParams = useSearchParams();
  const movieId = Number(searchParams.get("movie"));
  const [isSaved, setIsSaved] = useState(false);

  const movie = movies.find((m) => m.id === movieId);

  if (!movie) {
    return (
      <div className="text-white text-center mt-20">
        Film tidak ditemukan
      </div>
    );
  }

  return (
    <>
      <NavbarFilm />

      <div className="bg-[#0F0F0F] min-h-screen text-white px-6 md:px-12 py-16">
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

          {/* INFO */}
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold">{movie.title}</h1>

            {/* GENRE */}
            <span className="inline-block px-3 py-1 rounded-full text-sm bg-red-600">
              {movie.genre.toUpperCase()}
            </span>

            <p className="text-gray-300 leading-relaxed">
              {movie.description}
            </p>

            <div className="flex items-center gap-3">
              <button className="px-6 py-3 rounded-lg bg-[#DC143C] font-semibold">
                Putar Sekarang
              </button>

              <Option.button
                onClick={() => setIsSaved(!isSaved)}
                whileTap={{ scale: 1.4 }}
                animate={{ scale: isSaved ? 1.2 : 1 }}
                className="p-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill={isSaved ? "white" : "transparent"}
                  stroke="white"
                  strokeWidth={isSaved ? 0 : 2}
                >
                  <path d="M6 2h12a2 2 0 0 1 2 2v18l-8-4-8 4V4a2 2 0 0 1 2-2z"/>
                </svg>
              </Option.button>
            </div>

            {isSaved && (
              <p className="text-green-400 text-sm">
                Berhasil disimpan ke koleksi
              </p>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
