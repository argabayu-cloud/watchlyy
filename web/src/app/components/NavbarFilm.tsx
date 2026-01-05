"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import Sidebar from "@/app/profilepage/sidebar/page"; // pastikan ini benar

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const genres = ["Action", "Adventure", "Romance", "Horror", "Drama", "Comedy"];
  const ratings = [1, 2, 3, 4, 5];
  const years = Array.from({ length: 26 }, (_, i) => 2000 + i);

  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full fixed top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-0 py-4 flex items-center justify-between">
          
          {/* LEFT */}
          <div className="flex items-center gap-6">
            <Image 
              src="/images/Watchly.png"
              alt="Watchly Logo"
              width={120}
              height={40}
              className="object-contain"
            />

            {/* GENRE */}
            <Select onValueChange={setGenre}>
              <SelectTrigger className="w-fit bg-transparent border-none p-0 text-white hover:text-red-400 cursor-pointer data-[placeholder]:text-gray-300">
                <SelectValue placeholder="Genre" />
              </SelectTrigger>
              <SelectContent className="bg-black border-white/20 text-white">
                {genres.map((g, i) => (
                  <SelectItem key={i} value={g}>
                    {g}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* RATING */}
            <Select onValueChange={setRating}>
              <SelectTrigger className="w-fit bg-transparent border-none p-0 text-white hover:text-red-400 cursor-pointer data-[placeholder]:text-gray-300">
                <SelectValue placeholder="Rating" />
              </SelectTrigger>
              <SelectContent className="bg-black border-white/20 text-white">
                {ratings.map((r) => (
                  <SelectItem key={r} value={String(r)}>
                    {r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* YEAR */}
            <Select onValueChange={setYear}>
              <SelectTrigger className="w-fit bg-transparent border-none p-0 text-white hover:text-red-400 cursor-pointer data-[placeholder]:text-gray-300">
                <SelectValue placeholder="Tahun" />
              </SelectTrigger>
              <SelectContent className="bg-black border-white/20 text-white max-h-52 overflow-y-auto">
                {years.map((y) => (
                  <SelectItem key={y} value={String(y)}>
                    {y}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 bg-white/10 text-white rounded-lg placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-500"
            />

            {/* FOTO PROFIL → OPEN SIDEBAR */}
            <div
              onClick={() => setOpenSidebar(true)}
              className="w-10 h-10 rounded-full overflow-hidden border border-white/20 cursor-pointer hover:border-red-500 transition"
            >
              <Image
                src="/images/btth1.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* SIDEBAR */}
      <Sidebar open={openSidebar} onClose={() => setOpenSidebar(false)} />
    </>
  );
}
