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
    id: 11,
    title: "JURASSIC PARK",
    poster: "/images/movie/11.jpg",
    date: "18 Jun 2025",
    badge: "WEBDL",
  },
  {
    id: 12,
    title: "INSPIRED BY THE TRUE EVENTS TIMUR",
    poster: "/images/movie/12.jpg",
    date: "10 Mar 2025",
    badge: "BLURAY",
  },
  {
    id: 13,
    title: "AVATAR",
    poster: "/images/movie/avatar.jpg",
    date: "02 May 2025",
    badge: "WEBDL",
  },
  {
    id: 14,
    title: "JUMANJI",
    poster: "/images/movie/14.jpg",
    date: "10 Mar 2025",
    badge: "BLURAY",
  },
  {
    id: 15,
    title: "KINGDOM PLANET OF THE APES",
    poster: "/images/movie/kingdom.jpg",
    date: "02 May 2025",
    badge: "WEBDL",
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
