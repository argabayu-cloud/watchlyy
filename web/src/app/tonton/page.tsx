"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import NavbarFilm from "../components/NavbarFilm";
import Footer from "../components/Footer";
import { useState } from "react";
import { motion as Option } from "framer-motion";

/* ================== TYPE ================== */
interface Movie {
  id: number;
  title: string;
  description: string;
  poster: string;
  genre: "new" | "horror" | "adventure" | "action" | "romance" | "drama" | "comedy";
}

/* ================== DATA ================== */
export const newMovies: Movie[] = [
  {
    id: 1,
    title: "Agak Laen",
    description: "Seorang mantan agen rahasia yang hidupnya kini jauh dari sorotan tiba-tiba terjebak dalam serangkaian kejadian aneh dan kocak di sebuah tempat wisata lokal. Bersama sekelompok orang dengan kepribadian “agak laen”, ia harus mengungkap misteri tak masuk akal yang justru semakin rumit setiap kali mencoba diselesaikan. Penuh humor segar, kejutan absurd, dan sindiran kehidupan sehari-hari, film ini menyajikan petualangan yang tidak biasa namun sangat menghibur.",
    poster: "/images/3.jpg",
    genre: "new",
  },

  {
    id: 2,
    title: "Mortal Kombat: Anniversary",
    description: "Pertarungan besar antar dimensi kembali pecah ketika keseimbangan dunia terancam oleh kekuatan gelap yang bangkit dari masa lalu. Para petarung legendaris Mortal Kombat harus bersatu menghadapi musuh lama dan baru dalam turnamen paling brutal yang pernah ada. Dengan pertaruhan nasib umat manusia, setiap duel menjadi penentu antara kehancuran dan harapan, menghadirkan aksi tanpa henti, jurus ikonik, dan konflik yang semakin intens.",
    poster: "/images/2.jpg",
    genre: "new",
  },
  {
    id: 3,
    title: "Spiderman: Legacy of Bomba (2025)",
    description: "Seorang Spider-Man dari generasi baru harus menghadapi ancaman lintas dimensi yang muncul akibat kesalahan masa lalu. Ketika kekuatan besar jatuh ke tangan yang salah, ia dipaksa memilih antara menyelamatkan kota atau melindungi orang-orang yang ia cintai. Aksi spektakuler, konflik emosional, dan warisan pahlawan menjadi inti dari petualangan ini.",
    poster: "/images/4.jpg",
    genre: "new",
  },
  {
    id: 4,
    title: "The Family Plan 2",
    description: "Kehidupan keluarga yang tampak normal kembali terguncang ketika rahasia lama terungkap dan musuh masa lalu muncul tanpa peringatan. Dengan situasi yang semakin berbahaya, seluruh anggota keluarga harus bekerja sama menghadapi ancaman tak terduga. Film ini memadukan aksi seru, humor keluarga, dan momen kebersamaan yang hangat.",
    poster: "/images/5.jpg",
    genre: "new",
  },
  {
    id: 5,
    title: "Komangsi & Joddy (2025)",
    description: "Pertemuan tak terduga antara Komangsi dan Joddy membawa mereka ke dalam perjalanan penuh emosi, tawa, dan konflik batin. Dihadapkan pada pilihan hidup, mimpi, dan cinta, keduanya belajar tentang arti kesetiaan dan pengorbanan. Sebuah kisah romantis yang dibalut komedi ringan dan realita kehidupan sehari-hari.",
    poster: "/images/1.jpg",
    genre: "new",
  },
];

export const horrorMovies: Movie[] = [
  {
    id: 6,
    title: "Malam Pencabut Nyawa",
    description: "Teror makhluk gaib mulai menghantui sebuah desa terpencil setiap malam tanpa sebab yang jelas. Warga satu per satu mengalami kejadian aneh yang berujung kematian misterius. Ketika rahasia kelam masa lalu desa mulai terungkap, mereka menyadari bahwa ada harga mahal yang harus dibayar atas dosa yang telah lama dikubur.",
    poster: "/images/movie/malam pencabut nyawa.jpg",
    genre: "horror",
  },
  {
    id: 7,
    title: "Pamali Tumbal",
    description: "Sebuah larangan adat yang diwariskan turun-temurun dilanggar demi kepentingan pribadi. Tanpa disadari, pelanggaran tersebut membangkitkan kekuatan gelap yang menuntut tumbal nyawa. Teror demi teror menghantui, memaksa para pelaku menghadapi konsekuensi mengerikan dari ketidakpatuhan terhadap tradisi.",
    poster: "/images/movie/7.jpg",
    genre: "horror",
  },
  {
    id: 8,
    title: "KKN",
    description: "Sekelompok mahasiswa menjalani program KKN di desa terpencil dengan aturan adat yang ketat dan penuh kejanggalan. Awalnya dianggap mitos, gangguan makhluk tak kasat mata semakin nyata dan mematikan. Kesalahan kecil berubah menjadi teror besar yang mengancam keselamatan dan kewarasan mereka.",
    poster: "/images/movie/8.jpg",
    genre: "horror",
  },
  {
    id: 9,
    title: "Siksa Neraka",
    description: "Film ini menyajikan gambaran mengerikan tentang balasan dosa di alam setelah kematian. Jiwa-jiwa yang semasa hidupnya berbuat kejahatan harus menerima siksa tanpa ampun sesuai perbuatan mereka. Sebuah horor religius yang mengguncang batin dan mengajak penonton merenungkan konsekuensi setiap tindakan.",
    poster: "/images/movie/9.jpg",
    genre: "horror",
  },
  {
    id: 10,
    title: "Danur",
    description: "Seorang gadis kecil memiliki kemampuan melihat dan berkomunikasi dengan makhluk dari dunia lain. Persahabatan yang tampak polos perlahan berubah menjadi pengalaman menegangkan ketika keberadaan mereka mulai mengganggu dunia manusia. Kisah ini memadukan horor, kesedihan, dan sisi emosional yang mendalam.",
    poster: "/images/movie/10.jpg",
    genre: "horror",
  },
];

export const adventureMovies: Movie[] = [
  {
    id: 11,
    title: "Jurassic Park",
    description: "Sebuah taman hiburan revolusioner yang menampilkan dinosaurus hidup berubah menjadi mimpi buruk ketika sistem keamanan gagal. Para pengunjung harus berjuang bertahan hidup di tengah makhluk prasejarah yang lepas kendali. Petualangan menegangkan ini memadukan sains, keberanian, dan insting bertahan hidup.",
    poster: "/images/movie/11.jpg",
    genre: "adventure",
  },
  {
    id: 12,
    title: "INSPIRED BY THE TRUE EVENTS TIMUR",
    description: "Terinspirasi dari kisah nyata di wilayah timur, film ini mengikuti perjalanan sekelompok orang yang menghadapi alam liar dan konflik budaya. Di tengah keterbatasan dan bahaya, mereka diuji oleh pilihan sulit yang menentukan nasib hidup dan persahabatan. Sebuah petualangan emosional penuh makna.",
    poster: "/images/movie/12.jpg",
    genre: "adventure",
  },
  {
    id: 13,
    title: "AVATAR",
    description: "Seorang manusia menjelajahi planet Pandora yang penuh keindahan dan bahaya melalui tubuh avatar. Ketika konflik antara manusia dan penduduk asli semakin memanas, ia terjebak di antara dua dunia. Petualangan epik ini menyuguhkan visual spektakuler dan kisah tentang alam, identitas, serta pengorbanan.",
    poster: "/images/movie/avatar.jpg",
    genre: "adventure",
  },
  {
    id: 14,
    title: "JUMANJI",
    description: "Sebuah permainan misterius menyeret para pemainnya ke dunia penuh rintangan mematikan dan tantangan tak terduga. Untuk bisa kembali ke dunia nyata, mereka harus menyelesaikan permainan dengan kerja sama dan keberanian. Film ini menghadirkan petualangan seru yang dibalut humor dan aksi.",
    poster: "/images/movie/14.jpg",
    genre: "adventure",
  },
  {
    id: 15,
    title: "KINGDOM PLANET OF THE APES",
    description: "Di dunia yang telah dikuasai oleh bangsa kera, manusia berjuang bertahan di tengah peradaban baru. Konflik kekuasaan dan perjuangan untuk kebebasan membawa para karakter ke dalam petualangan penuh strategi dan pengorbanan. Sebuah kisah epik tentang evolusi dan kepemimpinan.",
    poster: "/images/movie/of the planet.jpg",
    genre: "adventure",
  },
];
export const actionMovies: Movie[] = [
  {
    id: 16,
    title: "PEARL HARBOR",
    description: "Berlatar belakang Perang Dunia II, film ini mengisahkan dua sahabat pilot tempur yang terikat oleh persahabatan kuat dan cinta pada wanita yang sama. Ketika serangan mendadak Jepang menghancurkan pangkalan militer Pearl Harbor, hidup mereka berubah dalam sekejap. Di tengah kepanikan, kehancuran, dan peperangan udara yang brutal, mereka harus mengesampingkan konflik pribadi demi menjalankan tugas negara. Film ini menyajikan aksi perang berskala besar yang dipadukan dengan drama emosional dan pengorbanan.",
    poster: "/images/movie/ph.webp",
    genre: "action",
  },
  {
    id: 17,
    title: "13 BOM DI JAKARTA",
    description: "Jakarta berubah menjadi medan perang ketika jaringan teroris melancarkan rencana teror paling berbahaya dalam sejarah kota: tiga belas bom yang tersebar di berbagai lokasi strategis. Aparat keamanan dan tim intelijen harus berpacu dengan waktu, memecahkan petunjuk demi petunjuk sebelum korban berjatuhan. Ketegangan meningkat seiring tekanan politik, konflik internal, dan risiko kegagalan yang bisa berujung kehancuran massal. Film ini menampilkan aksi realistis, strategi antiteror, dan keberanian tanpa kompromi.",
    poster: "/images/movie/13 bom.jpg",
    genre: "action",
  },

  {
    id: 18,
    title: "SI PALING AKTOR",
    description: "Seorang aktor berbakat namun kurang beruntung mendapat kesempatan emas yang justru menyeretnya ke situasi berbahaya. Tanpa disadari, peran yang ia mainkan membuatnya terlibat langsung dalam dunia kriminal sungguhan. Dipaksa berakting dalam kehidupan nyata demi menyelamatkan diri, ia menggunakan kecerdikan, improvisasi, dan keberanian. Film ini memadukan aksi cepat, ketegangan, dan sentuhan komedi gelap yang segar.",
    poster: "/images/movie/si aktor.webp",
    genre: "action",
  },
  {
    id: 19,
    title: "JOHN  WICK",
    description: "Legenda pembunuh bayaran yang telah pensiun kembali bangkit setelah masa lalunya menyeretnya ke dalam pusaran balas dendam tanpa akhir. Setiap langkahnya membawa pertumpahan darah di dunia kriminal yang diatur oleh kode kehormatan kejam. Dengan kemampuan tempur luar biasa dan tekad yang tak tergoyahkan, John Wick menghadapi musuh yang semakin kuat. Film ini dikenal dengan aksi brutal, koreografi laga presisi tinggi, dan atmosfer gelap yang ikonik.",
    poster: "/images/movie/john wick.jpg",
    genre: "action",
  },
  {
    id: 20,
    title: "THE SHADOW'S EDGE",
    description: "Seorang agen elit bekerja di balik bayangan untuk menghentikan organisasi rahasia yang berencana mengguncang tatanan dunia. Misinya dipenuhi pengkhianatan, operasi hitam, dan keputusan moral yang sulit. Ketika batas antara kawan dan lawan semakin kabur, ia harus mempertaruhkan segalanya demi mencegah kehancuran global. Film ini menghadirkan aksi intens, kejar-kejaran berbahaya, dan intrik spionase yang penuh kejutan.",
    poster: "/images/movie/the shadow.jpg",
    genre: "action",
  },
];
export const romanceMovies: Movie[] = [
  {
    id: 41,
    title: "THE NOTEBOOK",
    description: "Kisah cinta abadi antara Noah dan Allie yang diuji oleh perbedaan status sosial, waktu, dan penyakit. Sebuah perjalanan emosional tentang kenangan, pengorbanan, dan cinta sejati yang tak pernah pudar.",
    poster: "/images/movie/romance/1.jpg",
    genre: "romance",
  },
  {
    id: 42,
    title: "ME BEFORE YOU",
    description: "Seorang wanita ceria membangun hubungan tak terduga dengan pria yang kehilangan semangat hidupnya akibat kecelakaan. Hubungan mereka mengubah cara pandang tentang cinta, kebebasan, dan arti melepaskan.",
    poster: "/images/movie/romance/2.jpg",
    genre: "romance",
  },
  {
    id: 43,
    title: "LA LA LAND",
    description: "Dua insan dengan mimpi besar bertemu di Los Angeles dan jatuh cinta. Di antara ambisi, musik, dan realita hidup, mereka harus memilih antara cinta dan impian.",
    poster: "/images/movie/romance/3.jpeg",
    genre: "romance",
  },
  {
    id: 44,
    title: "500 DAYS OF SUMMER",
    description: "Sebuah kisah cinta yang diceritakan secara tidak biasa, tentang harapan, kenyataan, dan pelajaran pahit dalam hubungan modern.",
    poster: "/images/movie/romance/4.jpg",
    genre: "romance",
  },
  {
    id: 45,
    title: "BEFORE SUNRISE",
    description: "Dua orang asing bertemu di kereta dan menghabiskan satu malam penuh percakapan mendalam di Wina. Sebuah kisah sederhana namun intim tentang koneksi dan waktu.",
    poster: "/images/movie/romance/5.jpg",
    genre: "romance",
  },
];

export const dramaMovies: Movie[] = [
  {
    id: 31,
    title: "FORREST GUMP",
    description: "",
    poster: "/images/movie/romance/1.jpg",
    genre: "drama",
  },
  {
    id: 32,
    title: "THE PURSUIT OF HAPPYNESS",
    description: "",
    poster: "/images/movie/romance/2.jpg",
    genre: "drama",
  },
  {
    id: 33,
    title: "TITANIC",
    description: "",
    poster: "/images/movie/romance/3.jpeg",
    genre: "drama",
  },
  {
    id: 34,
    title: "A BEAUTIFUL MIND",
    description: "",
    poster: "/images/movie/romance/4.jpg",
    genre: "drama",
  },
  {
    id: 35,
    title: "THE GREEN MILE",
    description: "",
    poster: "/images/movie/romance/5.jpg",
    genre: "drama",
  },
];



/* 🔑 GABUNG SEMUA FILM */
const movies: Movie[] = [...newMovies, ...horrorMovies , ...adventureMovies, ...actionMovies, ...romanceMovies, ...dramaMovies ];

/* ================== PAGE ================== */
export default function TontonPage() {
  const searchParams = useSearchParams();
  const movieId = Number(searchParams.get("movie"));
  const [isSaved, setIsSaved] = useState(false);

  const movie = movies.find((m) => m.id === movieId);

  if (!movie) {
    return (
      <div className="text-white text-center mt-20">
        Film tidak ditemukan
      </div>
    );
  }

  return (
    <>
      <NavbarFilm />

      <div className="bg-[#0F0F0F] min-h-screen text-white px-6 md:px-12 py-16">
        <section className="flex flex-col md:flex-row items-center gap-10 mt-10">

          {/* POSTER */}
          <div className="w-full md:w-1/2">
            <Image
              src={movie.poster}
              alt={movie.title}
              width={600}
              height={900}
              className="rounded-xl shadow-lg object-cover w-full"
            />
          </div>

          {/* INFO */}
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold">{movie.title}</h1>

            {/* GENRE */}
            <span className="inline-block px-3 py-1 rounded-full text-sm bg-red-600">
              {movie.genre.toUpperCase()}
            </span>

            <p className="text-gray-300 leading-relaxed">
              {movie.description}
            </p>

            <div className="flex items-center gap-3">
              <button className="px-6 py-3 rounded-lg bg-[#DC143C] font-semibold">
                Putar Sekarang
              </button>

              <Option.button
                onClick={() => setIsSaved(!isSaved)}
                whileTap={{ scale: 1.4 }}
                animate={{ scale: isSaved ? 1.2 : 1 }}
                className="p-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill={isSaved ? "white" : "transparent"}
                  stroke="white"
                  strokeWidth={isSaved ? 0 : 2}
                >
                  <path d="M6 2h12a2 2 0 0 1 2 2v18l-8-4-8 4V4a2 2 0 0 1 2-2z"/>
                </svg>
              </Option.button>
            </div>

            {isSaved && (
              <p className="text-green-400 text-sm">
                Berhasil disimpan ke koleksi
              </p>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}