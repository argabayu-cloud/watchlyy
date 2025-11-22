"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];

export default function Hero() {
const [current, setCurrent] = useState(0);

useEffect(() => {
const interval = setInterval(() => {
setCurrent((prev) => (prev + 1) % images.length);
}, 5000);
return () => clearInterval(interval);
}, []);

const goToSlide = (index) => {
setCurrent(index);
};

return ( <section className="relative w-full h-screen overflow-hidden bg-black"> <AnimatePresence initial={false}>
<motion.div
key={current}
className="absolute inset-0 bg-cover bg-center"
style={{ backgroundImage: `url('${images[current]}')` }}
initial={{ opacity: 0, x: 100 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: -100 }}
transition={{ duration: 0.8 }}
></motion.div> </AnimatePresence>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
   <div className="relative z-10 max-w-xl h-full flex flex-col justify-center px-12 md:px-20 text-white">
    <h1 className="text-4xl md:text-4.5xl font-bold leading-tight mb-3">
          Tonton Film Favoritmu <br /> Dalam Satu Tempat
        </h1>

        <p className="text-lg opacity-90 mb-6">
          Temukan film terbaru, serial populer, dan rekomendasi terbaik untuk kamu.
        </p>

        <div className="flex gap-4">
          <Link
            href="/film"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-base font-medium"
          >
            Mulai Nonton
          </Link>

          <a
            href="#"
            className="border border-white hover:bg-white/20 text-white px-6 py-3 rounded-lg text-base font-medium"
          >
            Lihat Koleksi
          </a>
    </div>
  </div>

  {/* Dots Navigation */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
    {images.map((_, i) => (
      <button
        key={i}
        onClick={() => goToSlide(i)}
        className={`w-3 h-3 rounded-full transition-all ${
          current === i ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
        }`}
      ></button>
    ))}
  </div>
</section>

);
}
