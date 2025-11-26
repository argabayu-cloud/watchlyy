import { Router } from "express";
import {
  getAllFilms,
  getRecommendedFilms,
  getFilmById,
} from "../controllers/filmController";

const filmRouter = Router();

// ROUTE FILM SPESIFIK: Rekomendasi Film
filmRouter.get("/recommend", getRecommendedFilms);

// ROUTE FILM DINAMIS: Berdasarkan ID
filmRouter.get("/:id", getFilmById);

// ROUTE FILM UTAMA: Semua Film
filmRouter.get("/", getAllFilms);

export default filmRouter;
