"use client";

import Image from "next/image";

export default function Rekomendasi() {
  const movies = [
    {
      id: 1,
      title: "Rekomendasi Film 1",
      year: 2025,
      image: "/images/1.jpg",
    },
    {
      id: 2,
      title: "Rekomendasi Film 2",
      year: 2025,
      image: "/images/2.jpg",
    },
    {
      id: 3,
      title: "Rekomendasi Film 3",
      year: 2025,
      image: "/images/3.jpg",
    },
    {
      id: 4,
      title: "Rekomendasi Film 4",
      year: 2025,
      image: "/images/4.jpg",
    },
    {
      id: 5,
      title: "Rekomendasi Film 5",
      year: 2025,
      image: "/images/5.jpg",
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-20 py-10 bg-[#0F0F0F]">
      {/* Title */}
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 border-l-4 border-red-600 pl-3 bg-black/5">
        REKOMENDASI FILM
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="group">
            {/* Image card */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <span className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 text-xs rounded-md font-semibold">
                REKOMENDASI
              </span>

              <Image
                src={movie.image}
                alt={movie.title}
                width={300}
                height={450}
                className="w-full h-auto object-cover rounded-xl group-hover:scale-105 transition"
              />
            </div>

            {/* Title */}
            <h3 className="text-white text-sm md:text-base font-semibold mt-2">
              {movie.title} ({movie.year})
            </h3>

            <p className="text-gray-400 text-xs md:text-sm">{movie.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
