"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer";

const dataFilm = [
  {
    id: 1,
    title: "Avengers: Endgame",
    poster: "/images/film1.jpg",
  },
  {
    id: 2,
    title: "Interstellar",
    poster: "/images/film2.jpg",
  },
  {
    id: 3,
    title: "Inception",
    poster: "/images/film3.jpg",
  },
  {
    id: 4,
    title: "The Batman",
    poster: "/images/film4.jpg",
  },
];

export default function Koleksi() {
  const [list] = useState(dataFilm);

  return (
    <>
      <section className="min-h-screen bg-black text-white px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Koleksi Film</h1>
          <p className="text-gray-300 mb-10">
            Temukan berbagai film pilihan yang bisa kamu tonton kapan saja.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {list.map((film) => (
              <div
                key={film.id}
                className="group rounded-lg overflow-hidden bg-white/5 hover:bg-white/10 transition"
              >
                <div className="relative w-full h-60">
                  <Image
                    src={film.poster}
                    alt={film.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {film.title}
                  </h3>

                  <Link
                    href={`/film/${film.id}`}
                    className="inline-block mt-2 px-4 py-2 text-sm bg-red-600 hover:bg-red-700 rounded-md"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
