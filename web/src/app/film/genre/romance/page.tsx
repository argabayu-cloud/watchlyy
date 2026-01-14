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

const romanceMovies: Movie[] = [
  {
    id: 41,
    title: "THE NOTEBOOK",
    poster: "/images/movie/romance/1.jpg",
    date: "12 Feb 2025",
    badge: "BLURAY",
  },
  {
    id: 42,
    title: "ME BEFORE YOU",
    poster: "/images/movie/romance/2.jpg",
    date: "20 Mar 2025",
    badge: "WEBDL",
  },
  {
    id: 43,
    title: "LA LA LAND",
    poster: "/images/movie/romance/la la land 1.jpg",
    date: "05 Apr 2025",
    badge: "BLURAY",
  },
  {
    id: 44,
    title: "500 DAYS OF SUMMER",
    poster: "/images/movie/romance/4.jpg",
    date: "18 May 2025",
    badge: "WEBDL",
  },
  {
    id: 45,
    title: "BEFORE SUNRISE",
    poster: "/images/movie/romance/before sunrise.jpeg",
    date: "30 Jun 2025",
    badge: "BLURAY",
  },
  {
    id: 46,
    title: "BERTAUT RINDU",
    poster: "/images/movie/romance/bertaut rindu.webp",
    date: "12 Feb 2025",
    badge: "BLURAY",
  },
  {
    id: 47,
    title: "DILAN 1990",
    poster: "/images/movie/romance/dilan.png",
    date: "20 Mar 2025",
    badge: "WEBDL",
  },
  {
    id: 48,
    title: "ANCIKA",
    poster: "/images/movie/romance/ancika.webp",
    date: "05 Apr 2025",
    badge: "BLURAY",
  },
  {
    id: 49,
    title: "172 DAYS",
    poster: "/images/movie/romance/172 days.jpg",
    date: "18 May 2025",
    badge: "WEBDL",
  },
  {
    id: 50,
    title: "BILA ESOK IBU TIADA",
    poster: "/images/movie/romance/ibu tiada.webp",
    date: "30 Jun 2025",
    badge: "BLURAY",
  },
  {
    id: 41,
    title: "BERTAUT RINDU",
    poster: "/images/movie/romance/bertaut rindu.webp",
    date: "12 Feb 2025",
    badge: "BLURAY",
  },
  {
    id: 42,
    title: "ME BEFORE YOU",
    poster: "/images/movie/romance/2.jpg",
    date: "20 Mar 2025",
    badge: "WEBDL",
  },
  {
    id: 43,
    title: "LA LA LAND",
    poster: "/images/movie/romance/3.jpeg",
    date: "05 Apr 2025",
    badge: "BLURAY",
  },
  {
    id: 44,
    title: "500 DAYS OF SUMMER",
    poster: "/images/movie/romance/4.jpg",
    date: "18 May 2025",
    badge: "WEBDL",
  },
  {
    id: 45,
    title: "BEFORE SUNRISE",
    poster: "/images/movie/romance/5.jpg",
    date: "30 Jun 2025",
    badge: "BLURAY",
  },
];

export default function RomancePage() {
  return (
    <>
      <div className="bg-[#0F0F0F] min-h-screen text-white px-6 md:px-12 py-20">
        <NavbarFilm />

        <section>
          <h2 className="text-lg font-semibold border-l-4 border-red-600 pl-3 mb-5">
            FILM ROMANCE
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {romanceMovies.map((movie) => (
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