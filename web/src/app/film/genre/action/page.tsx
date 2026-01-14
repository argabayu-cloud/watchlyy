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

const actionMovies: Movie[] = [
  {
    id: 16,
    title: "PEARL HARBOR",
    poster: "/images/movie/ph.webp",
    date: "18 Jun 2025",
    badge: "WEBDL",
  },
  {
    id: 17,
    title: "13 BOM DI JAKARTA",
    poster: "/images/movie/17.jpg",
    date: "10 Mar 2025",
    badge: "BLURAY",
  },
  {
    id: 18,
    title: "SI PALING AKTOR",
    poster: "/images/movie/18.jpg",
    date: "02 May 2025",
    badge: "WEBDL",
  },
  {
    id: 19,
    title: "JOHN WICK",
    poster: "/images/movie/19.jpg",
    date: "10 Mar 2025",
    badge: "BLURAY",
  },
  {
    id: 20,
    title: "THE SHADOW'S EDGE",
    poster: "/images/movie/20.jpg",
    date: "02 May 2025",
    badge: "WEBDL",
  },
];

export default function ActionPage() {
  return (
    <>
      <div className="bg-[#0F0F0F] min-h-screen text-white px-6 md:px-12 py-20">
        <NavbarFilm />

        <section>
          <h2 className="text-lg font-semibold border-l-4 border-red-600 pl-3 mb-5">
            FILM ACTION
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {actionMovies.map((movie) => (
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