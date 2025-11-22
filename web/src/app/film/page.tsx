"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavbarFilm from "../components/NavbarFilm";
import Footer from "../components/Footer";

interface Movie {
  id: number;
  title: string;
  poster: string;
  date: string;
  badge?: string;
}

export default function Film() {
  const [newMovies, setNewMovies] = useState<Movie[]>([]);
  const [actionMovies, setActionMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const img = "/images/hero.png";

    setNewMovies([
      { id: 1, title: "Train Dreams (2025)", poster: img, date: "06 Nov 2025", badge: "WEBDL" },
      { id: 2, title: "Anniversary (2025)", poster: img, date: "29 Oct 2025", badge: "WEBDL" },
      { id: 3, title: "Legacy: Bomba (2025)", poster: img, date: "21 Aug 2025", badge: "WEBDL" },
      { id: 4, title: "The Family Plan 2 (2025)", poster: img, date: "11 Nov 2025", badge: "WEBDL" },
      { id: 5, title: "The Family Plan 2 (2025)", poster: img, date: "11 Nov 2025", badge: "WEBDL" },
    ]);

    setActionMovies([
      { id: 6, title: "Brothers Grimm (2025)", poster: img, date: "18 Jun 2025", badge: "WEBDL" },
      { id: 7, title: "One Battle After Another", poster: img, date: "10 Mar 2025", badge: "BLURAY" },
      { id: 8, title: "Shark Zone", poster: img, date: "02 May 2025", badge: "WEBDL" },
      { id: 9, title: "One Battle After Another", poster: img, date: "10 Mar 2025", badge: "BLURAY" },
      { id: 10, title: "Shark Zone", poster: img, date: "02 May 2025", badge: "WEBDL" },
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
              <Link key={movie.id} href="/tonton">
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
              <Link key={movie.id} href="/tonton">
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
            {actionMovies.map((movie) => (
              <Link key={movie.id} href="/tonton">
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

        {/* FILM ROMANCE */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold border-l-4 border-red-600 pl-3 mb-5">
            FILM ROMANCE
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {actionMovies.map((movie) => (
              <Link key={movie.id} href="/tonton">
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
