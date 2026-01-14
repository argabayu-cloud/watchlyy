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

const dramaMovies: Movie[] = [
  {
    id: 31,
    title: "FORREST GUMP",
    poster: "/images/movie/drama/forrest gump.jpg",
    date: "15 Jan 2025",
    badge: "BLURAY",
  },
  {
    id: 32,
    title: "THE PURSUIT OF HAPPYNESS",
    poster: "/images/movie/drama/the pursuit.jpg",
    date: "20 Feb 2025",
    badge: "WEBDL",
  },
  {
    id: 33,
    title: "TITANIC",
    poster: "/images/movie/drama/33.jpg",
    date: "08 Mar 2025",
    badge: "BLURAY",
  },
  {
    id: 34,
    title: "A BEAUTIFUL MIND",
    poster: "/images/movie/drama/34.jpg",
    date: "01 Apr 2025",
    badge: "WEBDL",
  },
  {
    id: 35,
    title: "THE GREEN MILE",
    poster: "/images/movie/drama/35.jpg",
    date: "12 May 2025",
    badge: "BLURAY",
  },
  {
    id: 36,
    title: "SHAWSHANK REDEMPTION",
    poster: "/images/movie/drama/36.jpg",
    date: "25 May 2025",
    badge: "BLURAY",
  },
  {
    id: 37,
    title: "THE GODFATHER",
    poster: "/images/movie/drama/37.jpg",
    date: "10 Jun 2025",
    badge: "BLURAY",
  },
  {
    id: 38,
    title: "SCHINDLER'S LIST",
    poster: "/images/movie/drama/38.jpg",
    date: "22 Jun 2025",
    badge: "WEBDL",
  },
  {
    id: 39,
    title: "LIFE OF PI",
    poster: "/images/movie/drama/39.jpg",
    date: "05 Jul 2025",
    badge: "BLURAY",
  },
];

export default function DramaPage() {
  return (
    <>
      <div className="bg-[#0F0F0F] min-h-screen text-white px-6 md:px-12 py-20">
        <NavbarFilm />

        <section>
          <h2 className="text-lg font-semibold border-l-4 border-red-600 pl-3 mb-5">
            FILM DRAMA
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {dramaMovies.map((movie) => (
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
