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

const horrorMovies: Movie[] = [
  {
    id: 6,
    title: "MALAM PENCABUT NYAWA",
    poster: "/images/movie/malam pencabut nyawa.jpg",
    date: "18 Jun 2025",
    badge: "WEBDL",
  },
  {
    id: 7,
    title: "PAMALI TUMBAL",
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
    title: "SIKSA NERAKA",
    poster: "/images/movie/9.jpg",
    date: "10 Mar 2025",
    badge: "BLURAY",
  },
  {
    id: 10,
    title: "DANUR",
    poster: "/images/movie/10.jpg",
    date: "02 May 2025",
    badge: "WEBDL",
  },
  {
    id: 11,
    title: "PENGABDI SETAN 2",
    poster: "/images/movie/horror/11.webp",
    date: "15 Jul 2025",
    badge: "IMAX",
  },
  {
    id: 12,
    title: "SEWU DINO",
    poster: "/images/movie/horror/12.jpg",
    date: "28 Aug 2025",
    badge: "WEBDL",
  },
  {
    id: 13,
    title: "ASIH",
    poster: "/images/movie/horror/13.jpg",
    date: "09 Sep 2025",
    badge: "BLURAY",
  },
  {
    id: 14,
    title: "IVANNA",
    poster: "/images/movie/horror/14.jpg",
    date: "21 Oct 2025",
    badge: "WEBDL",
  },
  {
  id: 15,
  title: "RUMAH KENTANG",
  poster: "/images/movie/horror/15.jpg",
  date: "05 Nov 2025",
  badge: "WEBDL",
  },
  {
    id: 16,
    title: "JAILANGKUNG",
    poster: "/images/movie/horror/16.jpeg",
    date: "18 Nov 2025",
    badge: "BLURAY",
  },
  {
    id: 17,
    title: "THE CONJURING",
    poster: "/images/movie/horror/17.jpg",
    date: "02 Dec 2025",
    badge: "BLURAY",
  },
  {
    id: 18,
    title: "INSIDIOUS",
    poster: "/images/movie/horror/18.jpeg",
    date: "15 Dec 2025",
    badge: "WEBDL",
  },
  {
    id: 19,
    title: "ANNABELLE",
    poster: "/images/movie/horror/19.jpg",
    date: "27 Dec 2025",
    badge: "BLURAY",
  },
  {
    id: 20,
    title: "PETAKA GUNUNG GEDE",
    poster: "/images/movie/horror/20.webp",
    date: "11 Feb 2025",
    badge: "WEBDL",
  },
];

export default function HorrorPage() {
  return (
    <>
      <div className="bg-[#0F0F0F] min-h-screen text-white px-6 md:px-12 py-20">
        <NavbarFilm />

        <section>
          <h2 className="text-lg font-semibold border-l-4 border-red-600 pl-3 mb-5">
            FILM HORROR
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {horrorMovies.map((movie) => (
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
