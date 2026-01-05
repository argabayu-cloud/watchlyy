"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarFilm from "../components/NavbarFilm";
import Footer from "../components/Footer";

interface Movie {
  id: number;
  title: string;
  poster: string;
  date: string;
  badge?: string;
}

const img = "/images/hero.png";

export default function Film() {
  const [newMovies, setNewMovies] = useState<Movie[]>([]);
  const [horrorMovies, setHorrorMovies] = useState<Movie[]>([]);
  const [adventureMovies, setAdventureMovies] = useState<Movie[]>([]);
  const [actionMovies, setActionMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setNewMovies([
      {
        id: 1,
        title: "Agak Laen",
        poster: "/images/3.jpg",
        date: "06 Nov 2025",
        badge: "WEBDL",
      },
      {
        id: 2,
        title: "Mortal Kombat: Anniversary (2025)",
        poster: "/images/2.jpg",
        date: "29 Oct 2025",
        badge: "WEBDL",
      },
      {
        id: 3,
        title: "Spiderman: Legacy of Bomba (2025)",
        poster: "/images/4.jpg",
        date: "21 Aug 2025",
        badge: "WEBDL",
      },
      {
        id: 4,
        title: "The Family Plan 2",
        poster: "/images/5.jpg",
        date: "11 Nov 2025",
        badge: "WEBDL",
      },
      {
        id: 5,
        title: "Komangsi & Joddy (2025)",
        poster: "/images/1.jpg",
        date: "11 Nov 2025",
        badge: "WEBDL",
      },
    ]);

    setHorrorMovies([
      {
        id: 6,
        title: "Malam Pencabut nyawa",
        poster: "/images/movie/malam pencabut nyawa.jpg",
        date: "18 Jun 2025",
        badge: "WEBDL",
      },
      {
        id: 7,
        title: "Pamali Tumbal",
        poster: "/images/movie/7.jpg",
        date: "10 Mar 2025",
        badge: "BLURAY",
      },
      {
        id: 8,
        title: "KKN",
        poster: "/images/movie/8.jpg",
        date: "02 May 2025",
        badge: "WEBDL",
      },
      {
        id: 9,
        title: "Siksa Neraka",
        poster: "/images/movie/9.jpg",
        date: "10 Mar 2025",
        badge: "BLURAY",
      },
      {
        id: 10,
        title: "Danur",
        poster: "/images/movie/10.jpg",
        date: "02 May 2025",
        badge: "WEBDL",
      },
    ]);

    setAdventureMovies([
      {
        id: 11,
        title: "Jurassic Park",
        poster: "/images/movie/11.jpg",
        date: "18 Jun 2025",
        badge: "WEBDL",
      },
      {
        id: 12,
        title: "Pamali Tumbal",
        poster: "/images/movie/12.jpg",
        date: "10 Mar 2025",
        badge: "BLURAY",
      },
      {
        id: 13,
        title: "KKN",
        poster: "/images/movie/13.jpg",
        date: "02 May 2025",
        badge: "WEBDL",
      },
      {
        id: 14,
        title: "Siksa Neraka",
        poster: "/images/movie/14.jpg",
        date: "10 Mar 2025",
        badge: "BLURAY",
      },
      {
        id: 15,
        title: "Danur",
        poster: "/images/movie/15.jpg",
        date: "02 May 2025",
        badge: "WEBDL",
      },
    ]);

    setActionMovies([
      {
        id: 16,
        title: "Jurassic Park",
        poster: "/images/movie/16.jpg",
        date: "18 Jun 2025",
        badge: "WEBDL",
      },
      {
        id: 17,
        title: "Pamali Tumbal",
        poster: "/images/movie/17.jpg",
        date: "10 Mar 2025",
        badge: "BLURAY",
      },
      {
        id: 18,
        title: "KKN",
        poster: "/images/movie/18.jpg",
        date: "02 May 2025",
        badge: "WEBDL",
      },
      {
        id: 19,
        title: "Siksa Neraka",
        poster: "/images/movie/19.jpg",
        date: "10 Mar 2025",
        badge: "BLURAY",
      },
      {
        id: 20,
        title: "Danur",
        poster: "/images/movie/20.jpg",
        date: "02 May 2025",
        badge: "WEBDL",
      },
    ]);
  }, []);

  return (
    <>
      <div className="bg-[#0F0F0F] min-h-screen text-white px-6 md:px-12 py-20">
        <NavbarFilm />

        {/* FILM TERBARU */}
        <section>
          <h2 className="text-lg font-semibold border-l-4 border-red-600 pl-3 mb-5">
            FILM TERBARU
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {newMovies.map((movie) => (
              <Link href={`/tonton?movie=${movie.id}`}>
                <div className="group cursor-pointer">
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={movie.poster}
                      alt={movie.title}
                      width={300}
                      height={400}
                      className="object-cover w-full h-60"
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

        {/* FILM HOROR */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold border-l-4 border-red-600 pl-3 mb-5">
            FILM HOROR
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {horrorMovies.map((movie) => (
              <Link href={`/tonton?movie=${movie.id}`}>
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

        {/* FILM ADVENTURE */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold border-l-4 border-red-600 pl-3 mb-5">
            FILM ADVENTURE
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {adventureMovies.map((movie) => (
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

        {/* FILM ACTION */}
        <section className="mt-12">
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
