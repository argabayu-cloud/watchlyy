import express from "express";
import { 
    getAllFilms,
    getRecommendedFilms,
    getFilmById 
} from "../controllers/filmController.js"; // Impor dipindahkan ke atas

const router = express.Router();

// Catatan: Urutan pendaftaran route SANGAT PENTING

// 1. GET /films/recommend (Route Spesifik)
// Ini harus diletakkan sebelum route dinamis (/films/:id) agar tidak dianggap sebagai ID.
router.get("/recommend", getRecommendedFilms);

// 2. GET /films/:id (Route Dinamis - Disiapkan untuk film berdasarkan ID)
router.get("/:id", getFilmById); 
// Catatan: Saya mengaktifkan route ini karena Anda mengimpor getFilmById.

// 3. GET /films (Route List Utama)
router.get("/", getAllFilms);

// Mengganti module.exports = router; dengan ES Module export default
export default router;