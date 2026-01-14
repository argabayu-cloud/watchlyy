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

const adventureMovies: Movie[] = [
  {
    id: 200,
    title: "JURASSIC PARK",
    poster: "/images/movie/11.jpg",
    date: "18 Jun 2025",
    badge: "WEBDL",
  },
  {
    id: 201,
    title: "INSPIRED BY THE TRUE EVENTS TIMUR",
    poster: "/images/movie/12.jpg",
    date: "10 Mar 2025",
    badge: "BLURAY",
  },
  {
    id: 202,
    title: "AVATAR",
    poster: "/images/movie/avatar.jpg",
    date: "02 May 2025",
    badge: "WEBDL",
  },
  {
    id: 203,
    title: "JUMANJI",
    poster: "/images/movie/14.jpg",
    date: "10 Mar 2025",
    badge: "BLURAY",
  },
  {
    id: 204,
    title: "KINGDOM PLANET OF THE APES",
    poster: "/images/movie/kingdom.jpg",
    date: "02 May 2025",
    badge: "WEBDL",
  },
  {
    id: 205,
    title: "INDIANA JONES AND THE LAST CRUSADE",
    poster: "/images/movie/adventure/16.jpg",
    date: "18 Jul 2025",
    badge: "BLURAY",
  },
  {
    id: 206,
    title: "THE LOST CITY",
    poster: "/images/movie/adventure/17.jpg",
    date: "02 Aug 2025",
    badge: "WEBDL",
  },
  {
    id: 207,
    title: "PIRATES OF THE CARIBBEAN",
    poster: "/images/movie/adventure/18.avif",
    date: "15 Sep 2025",
    badge: "BLURAY",
  },
  {
    id: 208,
    title: "THE MAZE RUNNER",
    poster: "/images/movie/adventure/19.jpg",
    date: "28 Oct 2025",
    badge: "WEBDL",
  },
  {
    id: 209,
    title: "UNCHARTED",
    poster: "/images/movie/adventure/20.avif",
    date: "12 Dec 2025",
    badge: "BLURAY",
  },
  {
    id: 210,
    title: "TOMB RAIDER",
    poster: "/images/movie/adventure/21.jpg",
    date: "05 Jan 2026",
    badge: "BLURAY",
  },
  {
    id: 211,
    title: "THE MUMMY",
    poster: "/images/movie/adventure/22.webp",
    date: "19 Feb 2026",
    badge: "WEBDL",
  },
  {
    id: 212,
    title: "JOURNEY TO THE CENTER OF THE EARTH",
    poster: "/images/movie/adventure/23.jpg",
    date: "08 Mar 2026",
    badge: "BLURAY",
  },
  {
    id: 213,
    title: "GODZILLA VS KONG",
    poster: "/images/movie/adventure/24.jpeg",
    date: "22 Apr 2026",
    badge: "IMAX",
  },
  {
    id: 214,
    title: "READY PLAYER ONE",
    poster: "/images/movie/adventure/25.jpg",
    date: "10 Jun 2026",
    badge: "BLURAY",
  },
];

export default function AdventurePage() {
  return (
    <>
      <div className="bg-[#0F0F0F] min-h-screen text-white px-6 md:px-12 py-20">
        <NavbarFilm />

        <section>
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
      </div>

      <Footer />
    </>
  );
}
