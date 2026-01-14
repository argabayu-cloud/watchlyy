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
  {
    id: 21,
    title: "TRAIN TO BUSAN",
    description: "Saat wabah misterius menyebar dengan cepat di Korea Utara, sebuah perjalanan kereta dari Seoul menuju Busan berubah menjadi mimpi buruk yang penuh teror. Para penumpang harus berjuang bertahan hidup dari serangan makhluk ganas yang terinfeksi virus mematikan. Di tengah kekacauan, seorang ayah berusaha melindungi putrinya sambil menghadapi pilihan-pilihan moral yang sulit. Film ini memadukan aksi intens, ketegangan tanpa henti, serta drama emosional yang kuat, menjadikannya lebih dari sekadar film zombie biasa.",
    poster: "/images/movie/action/21.jpg",
    genre: "action",
  },
  {
    id: 22,
    title: "MISSION: IMPOSSIBLE – DEAD RECKONING",
    description: "Ethan Hunt kembali dalam misi paling berbahaya sepanjang kariernya ketika sebuah teknologi rahasia yang mampu mengendalikan dunia jatuh ke tangan yang salah. Diburu oleh musuh lama dan sekutu yang berubah menjadi ancaman, ia harus berpacu dengan waktu di berbagai belahan dunia. Aksi mata-mata penuh intrik, kejar-kejaran ekstrem, dan keputusan berisiko tinggi membuat film ini menyajikan ketegangan konstan. Setiap pilihan yang diambil membawa konsekuensi besar, menguji kesetiaan dan pengorbanan tim IMF.",
    poster: "/images/movie/action/22.jpg",
    genre: "action",
  },

  {
    id: 23,
    title: "FAST X",
    description: "Keluarga Dom Toretto kembali menghadapi ancaman terbesar mereka ketika masa lalu yang kelam kembali menghantui. Musuh baru yang cerdas dan penuh dendam merancang rencana balas dendam yang mengancam seluruh keluarga. Aksi balapan brutal, ledakan spektakuler, dan kejar-kejaran lintas negara menjadi sajian utama film ini. Di balik kecepatan dan adrenalin tinggi, Fast X menegaskan kembali nilai loyalitas, pengorbanan, dan arti keluarga yang menjadi jiwa dari franchise ini.",
    poster: "/images/movie/action/23.webp",
    genre: "action",
  },
  {
    id: 24,
    title: "THE EXPENDABLES 4",
    description: "Tim tentara bayaran legendaris kembali berkumpul untuk menghadapi misi berisiko tinggi yang melibatkan senjata mematikan dan konflik global. Dengan kekuatan senjata berat, strategi brutal, dan kerja tim yang solid, mereka menghadapi musuh yang tak segan menghancurkan segalanya. Film ini menyajikan aksi klasik penuh ledakan, pertarungan jarak dekat, dan humor khas para veteran perang. Setiap misi menjadi pertaruhan hidup dan mati tanpa kompromi.",
    poster: "/images/movie/action/24.jpg",
    genre: "action",
  },
  {
    id: 25,
    title: "THE CREATOR",
    description: "Di masa depan ketika kecerdasan buatan menjadi ancaman bagi umat manusia, seorang mantan agen ditugaskan untuk menghentikan pencipta AI yang misterius. Namun, misinya berubah ketika ia menemukan rahasia besar yang mengguncang batas antara manusia dan mesin. Film ini memadukan aksi futuristik, teknologi canggih, dan dilema moral yang mendalam. Visual spektakuler dan cerita emosional menjadikan The Creator sebuah film aksi sci-fi yang penuh makna.",
    poster: "/images/movie/action/25.jpg",
    genre: "action",
  },
  {
    id: 26,
    title: "THE RAID 3: GAJI BUTA",
    description: "Kisah berlanjut dengan pertarungan brutal di dunia kriminal yang semakin gelap dan korup. Seorang mantan aparat harus kembali terjun ke dalam jaringan kejahatan demi membongkar pengkhianatan dan ketidakadilan yang merajalela. Aksi bela diri khas Indonesia ditampilkan secara intens, cepat, dan tanpa ampun. Film ini menawarkan koreografi laga yang realistis, emosi yang keras, serta kritik sosial yang tajam.",
    poster: "/images/movie/action/26.jpg",
    genre: "action",
  },
  {
    id: 27,
    title: "TRANSFORMERS: RISE OF THE BEASTS",
    description: "Pertempuran epik antara Autobots dan Decepticons mencapai level baru dengan munculnya faksi Transformers kuno yang lebih kuat dan berbahaya. Manusia kembali terlibat dalam konflik berskala global yang menentukan masa depan bumi. Dengan aksi robot raksasa, ledakan spektakuler, dan visual yang memukau, film ini menghadirkan petualangan penuh adrenalin. Persahabatan, pengorbanan, dan keberanian menjadi inti cerita di tengah kehancuran besar.",
    poster: "/images/movie/action/27.jpg",
    genre: "action",
  },
  {
    id: 28,
    title: "THE BATMAN RETURNS",
    description: "Batman menghadapi ancaman baru yang mengguncang Gotham City, di mana kejahatan semakin terorganisir dan berbahaya. Saat musuh misterius muncul dari bayang-bayang, sang Ksatria Kegelapan dipaksa menghadapi trauma masa lalu dan batas moralnya sendiri. Film ini menyuguhkan nuansa gelap, investigasi kriminal yang intens, serta aksi brutal yang realistis. The Batman Returns menampilkan sisi manusiawi seorang pahlawan yang terus berjuang melawan kegelapan.",
    poster: "/images/movie/action/the batman.webp",
    genre: "action",
  },
  {
    id: 29,
    title: "PENGEPUNGAN DI BUKIT DURI",
    description: "Sebuah operasi penegakan hukum yang awalnya dirancang dengan matang berubah menjadi mimpi buruk ketika sekelompok aparat terjebak di tengah wilayah yang dikuasai oleh jaringan kriminal brutal. Terisolasi tanpa bantuan, mereka harus bertahan dari serangan bertubi-tubi sambil menghadapi keterbatasan amunisi, waktu, dan kepercayaan satu sama lain. Di balik aksi baku tembak yang intens dan penuh ketegangan, film ini menggali sisi kemanusiaan para karakter yang dipaksa membuat keputusan ekstrem demi bertahan hidup. Pengepungan di Bukit Duri menyajikan aksi realistis, atmosfer mencekam, serta kritik sosial tentang kekuasaan dan konflik di wilayah urban.",
    poster: "/images/movie/action/29.jpg",
    genre: "action",
  },
  {
    id: 30,
    title: "VENOM",
    description: "Seorang jurnalis investigatif terjebak dalam eksperimen berbahaya yang mengubah hidupnya selamanya ketika ia menjadi inang bagi makhluk alien simbiotik bernama Venom. Hubungan yang rumit antara manusia dan makhluk asing ini menciptakan konflik internal yang brutal sekaligus kocak. Saat ancaman baru muncul dan membahayakan kota, Venom dipaksa memilih antara menghancurkan segalanya atau melindungi manusia. Dipenuhi aksi brutal, efek visual spektakuler, dan humor gelap, Venom menghadirkan kisah antihero yang unik dan penuh adrenalin.",
    poster: "/images/movie/action/30.png",
    genre: "action",
  },
];
export const romanceMovies: Movie[] = [
  {
    id: 41,
    title: "THE NOTEBOOK",
    description: "Sebuah kisah cinta abadi yang melampaui waktu, kelas sosial, dan ingatan. Noah dan Allie bertemu di musim panas yang sederhana, namun cinta mereka diuji oleh perbedaan latar belakang dan keadaan hidup. Bertahun-tahun kemudian, kenangan tentang cinta itu kembali diceritakan, mengungkap pengorbanan, kesetiaan, dan kekuatan cinta sejati. The Notebook adalah perjalanan emosional yang menyentuh hati tentang bagaimana cinta sejati mampu bertahan bahkan ketika ingatan mulai memudar.",
    poster: "/images/movie/romance/the notebook.jpg",
    genre: "romance",
  },
  {
    id: 42,
    title: "ME BEFORE YOU",
    description: "",
    poster: "/images/movie/romance/me before you.jpg",
    genre: "romance",
  },
  {
    id: 43,
    title: "LA LA LAND",
    description: "",
    poster: "/images/movie/romance/la la land 2.jpg",
    genre: "romance",
  },
  {
    id: 44,
    title: "500 DAYS OF SUMMER",
    description: "",
    poster: "/images/movie/romance/500 days.webp",
    genre: "romance",
  },
  {
    id: 45,
    title: "BEFORE SUNRISE",
    description: "",
    poster: "/images/movie/romance/before sunrise.jpeg",
    genre: "romance",
  },
];

export const dramaMovies: Movie[] = [
  {
    id: 31,
    title: "FORREST GUMP",
    description: "Forrest Gump adalah seorang pria dengan kecerdasan di bawah rata-rata, namun memiliki hati yang luar biasa tulus dan penuh kasih. Tanpa pernah merencanakan hidupnya, Forrest justru terlibat dalam berbagai peristiwa besar yang membentuk sejarah Amerika, mulai dari dunia olahraga, dunia militer, hingga budaya populer. Di tengah segala pencapaiannya, satu hal yang selalu ia kejar adalah cinta sejatinya kepada Jenny. Kisah ini mengajarkan bahwa kesederhanaan, kejujuran, dan ketulusan hati mampu membawa seseorang menjalani hidup yang penuh makna.",
    poster: "/images/movie/drama/forrest gump.jpg",
    genre: "drama",
  },
  {
    id: 32,
    title: "THE PURSUIT OF HAPPYNESS",
    description: "Film ini mengikuti perjalanan hidup seorang ayah tunggal yang harus bertahan di tengah keterbatasan ekonomi dan tekanan hidup yang berat. Demi masa depan anaknya, ia rela menghadapi penolakan, kegagalan, dan rasa putus asa yang terus menguji mentalnya. Dengan tekad yang kuat dan keyakinan bahwa kerja keras tidak akan mengkhianati hasil, ia terus melangkah meski dunia terasa tidak adil. Sebuah kisah nyata yang menyentuh tentang pengorbanan, harapan, dan arti sejati dari kebahagiaan.",
    poster: "/images/movie/drama/the pursuit.jpg",
    genre: "drama",
  },
  {
    id: 33,
    title: "TITANIC",
    description: "Berlatar di atas kapal paling megah pada masanya, Titanic mengisahkan pertemuan dua insan dari kelas sosial yang berbeda. Hubungan mereka tumbuh di tengah kemewahan, impian, dan kebebasan yang singkat. Ketika tragedi besar tak terelakkan terjadi, cinta mereka diuji oleh keadaan ekstrem dan pilihan-pilihan yang menyayat hati. Film ini bukan hanya kisah cinta, tetapi juga potret kemanusiaan, keberanian, dan kehilangan yang abadi dalam sejarah.",
    poster: "/images/movie/drama/titanic.webp",
    genre: "drama",
  },
  {
    id: 34,
    title: "A BEAUTIFUL MIND",
    description: "Seorang matematikawan jenius berjuang mengejar karier akademik yang gemilang, namun harus menghadapi kenyataan pahit ketika pikirannya mulai dikuasai oleh penyakit mental. Dunia yang ia yakini perlahan runtuh, memaksanya mempertanyakan apa yang nyata dan apa yang tidak. Dengan dukungan orang-orang terdekat dan keteguhan cinta sejati, ia belajar menerima dirinya apa adanya. Film ini menggambarkan perjuangan batin, kecerdasan, dan kekuatan cinta dalam menghadapi penyakit yang tak terlihat.",
    poster: "/images/movie/drama/a beautiful mind.jpeg",
    genre: "drama",
  },
  {
    id: 35,
    title: "THE GREEN MILE",
    description: "Di balik tembok penjara dan lorong panjang yang dikenal sebagai Green Mile, seorang sipir bertemu dengan narapidana yang memiliki kemampuan luar biasa. Kehadiran sosok tersebut mengubah cara pandang para penjaga terhadap keadilan, dosa, dan kemanusiaan. Seiring berjalannya waktu, batas antara benar dan salah menjadi kabur, meninggalkan dilema moral yang mendalam. Film ini adalah kisah emosional tentang belas kasih, keajaiban, dan penderitaan manusia yang tak terlupakan.",
    poster: "/images/movie/drama/the green mile.jpg",
    genre: "drama",
  },
];

export const comedyMovies: Movie[] = [
  {
    id: 51,
    title: "AGAK LAEN",
    description: "Seorang mantan agen rahasia yang hidupnya kini jauh dari sorotan tiba-tiba terjebak dalam serangkaian kejadian aneh dan kocak di sebuah tempat wisata lokal. Bersama sekelompok orang dengan kepribadian “agak laen”, ia harus mengungkap misteri tak masuk akal yang justru semakin rumit setiap kali mencoba diselesaikan. Penuh humor segar, kejutan absurd, dan sindiran kehidupan sehari-hari, film ini menyajikan petualangan yang tidak biasa namun sangat menghibur.",
    poster: "/images/3.jpg",
    genre: "comedy",
  },
  {
    id: 52,
    title: "MY STUPID BOSS",
    description: "Film ini mengisahkan perjuangan seorang karyawan yang harus bekerja di bawah pimpinan bos dengan karakter super egois, kekanak-kanakan, dan sering bertindak tanpa logika. Setiap keputusan sang bos justru menimbulkan masalah baru, membuat suasana kantor penuh kekacauan dan konflik konyol. Mulai dari aturan kerja yang berubah-ubah, tuntutan tidak masuk akal, hingga sikap arogan yang menyebalkan, semua menjadi sumber humor yang terus mengalir. Di balik komedinya, film ini juga menyindir keras budaya kerja toksik, ketimpangan jabatan, dan realitas pahit dunia perkantoran yang dibalut dengan tawa segar.",
    poster: "/images/movie/comedy/2.jpg",
    genre: "comedy",
  },
  {
    id: 53,
    title: "THE HANGOVER",
    description: "Sebuah pesta lajang di Las Vegas yang awalnya direncanakan sebagai malam penuh kesenangan berubah menjadi kekacauan total keesokan harinya. Sekelompok sahabat terbangun tanpa ingatan sedikit pun tentang apa yang mereka lakukan semalam, namun menemukan petunjuk-petunjuk aneh seperti bayi di lemari, harimau di kamar mandi, dan seorang teman yang menghilang. Dengan waktu yang semakin menipis, mereka harus menyusuri kembali jejak kegilaan malam sebelumnya. Film ini dipenuhi humor dewasa, situasi ekstrem, dan kejadian tak terduga yang membuat penonton tertawa sekaligus terkejut sepanjang cerita.",
    poster: "/images/movie/comedy/3.jpg",
    genre: "comedy",
  },
  {
    id: 54,
    title: "WARKOP DKI REBORN",
    description: "Dono, Kasino, dan Indro kembali hadir dengan gaya humor khas Warkop yang penuh kelucuan, kecerdikan, dan sindiran sosial. Tiga sahabat ini selalu terjebak dalam berbagai situasi konyol akibat ide-ide nyeleneh dan pola pikir yang jauh dari kata normal. Mulai dari masalah pekerjaan, percintaan, hingga persoalan masyarakat sehari-hari, semuanya disajikan dalam bentuk komedi slapstick dan dialog yang menggelitik. Film ini bukan hanya menghibur, tetapi juga menghadirkan nostalgia kuat bagi penonton lama sekaligus hiburan segar bagi generasi baru.",
    poster: "/images/movie/comedy/4.jpg",
    genre: "comedy",
  },
  {
    id: 55,
    title: "HOME ALONE",
    description: "Seorang anak kecil secara tak sengaja tertinggal sendirian di rumah besar saat keluarganya pergi berlibur. Awalnya, kesendirian ini terasa menyenangkan karena ia bebas melakukan apa saja. Namun keadaan berubah ketika dua pencuri ceroboh berusaha membobol rumah tersebut. Dengan kecerdasan, kreativitas, dan keberanian yang luar biasa, sang anak menciptakan berbagai jebakan unik dan lucu untuk menghalau para pencuri. Film ini memadukan komedi slapstick, petualangan ringan, serta kehangatan keluarga yang membuatnya menjadi tontonan klasik lintas generasi.",
    poster: "/images/movie/comedy/home alone.jpg",
    genre: "comedy",
  },
];



/* 🔑 GABUNG SEMUA FILM */
const movies: Movie[] = [...newMovies, ...horrorMovies , ...adventureMovies, ...actionMovies, ...romanceMovies, ...dramaMovies, ...comedyMovies];

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