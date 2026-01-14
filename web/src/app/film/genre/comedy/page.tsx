"use client";

import Image from "next/image";
import Link from "next/link";
import NavbarFilm from "../../../components/NavbarFilm";
import Footer from "../../../components/Footer";

interface Movie {
  id: number;
  title: string;
  poster: string;
  date: string;
  badge?: string;
}

const comedyMovies: Movie[] = [
  {
    id: 51,
    title: "AGAK LAEN",
    poster: "/images/3.jpg",
    date: "06 Nov 2025",
    badge: "WEBDL",
  },
  {
    id: 52,
    title: "MY STUPID BOSS",
    poster: "/images/movie/comedy/2.jpg",
    date: "15 Jan 2025",
    badge: "BLURAY",
  },
  {
    id: 53,
    title: "THE HANGOVER",
    poster: "/images/movie/comedy/3.jpg",
    date: "10 Mar 2025",
    badge: "BLURAY",
  },
  {
    id: 54,
    title: "WARKOP DKI REBORN",
    poster: "/images/movie/comedy/4.jpg",
    date: "22 Apr 2025",
    badge: "WEBDL",
  },
  {
    id: 55,
    title: "HOME ALONE",
    poster: "/images/movie/comedy/5.jpg",
    date: "01 Jun 2025",
    badge: "BLURAY",
  },
  {
    id: 56,
    title: "THE MASK",
    poster: "/images/movie/comedy/6.jpg",
    date: "05 Feb 2025",
    badge: "BLURAY",
  },
  {
    id: 57,
    title: "DUMB AND DUMBER",
    poster: "/images/movie/comedy/7.jpg",
    date: "18 Feb 2025",
    badge: "WEBDL",
  },
  {
    id: 58,
    title: "YES DAY",
    poster: "/images/movie/comedy/8.jpg",
    date: "03 Mar 2025",
    badge: "WEBDL",
  },
];

export default function ComedyPage() {
  return (
    <>
      <div className="bg-[#0F0F0F] min-h-screen text-white px-6 md:px-12 py-20">
        <NavbarFilm />

        <section>
          <h2 className="text-lg font-semibold border-l-4 border-red-600 pl-3 mb-5">
            FILM COMEDY
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {comedyMovies.map((movie) => (
              <Link key={movie.id} href={`/tonton?movie=${movie.id}`}>
                <div className="group cursor-pointer">
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={movie.poster}
                      alt={movie.title}
                      width={300}
                      height={400}
                      className="object-cover w-full h-60 group-hover:opacity-90 duration-150"
                    />

                    {movie.badge && (
                      <span className="absolute top-2 left-2 bg-red-600 text-xs px-2 py-1 rounded">
                        {movie.badge}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm font-medium">{movie.title}</p>
                  <p className="text-xs text-gray-400">{movie.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
