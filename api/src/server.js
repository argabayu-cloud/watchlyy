import "dotenv/config"; // Revisi 1: Sintaks impor dotenv yang modern dan disarankan
import express from "express"; // Revisi 2: Menggunakan import untuk express
import cors from "cors"; // Revisi 3: Menggunakan import untuk cors

// Revisi 4, 5, 6: Menggunakan import untuk semua routes
import filmRoutes from "./routes/filmRoutes";
import genreRoutes from "./routes/genreRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();
const corsOptions = {
  // ... Konfigurasi CORS Eksplisit
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204, // Untuk preflight request
};

// Middleware
app.use(express.json()); // Penting untuk membaca body POST request
app.use(cors(corsOptions)); // Menggunakan konfigurasi CORS yang spesifik

// Routes
// Catatan: Deklarasi routes (filmRoutes, genreRoutes, userRoutes) sekarang ada di bagian import

// Definisi route: /genres, /films, /users
app.use("/genres", genreRoutes);
app.use("/films", filmRoutes);
app.use("/users", userRoutes);

// Server listen
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});

export default app; // Revisi 7: Mengganti module.exports = app;
