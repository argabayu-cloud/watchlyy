import express from "express";
import { getAllGenres, createGenre } from "../controllers/genreController";

const router = express.Router();

// GET semua genre
router.get("/", getAllGenres);

// POST tambah genre
router.post("/", createGenre);

export default router;
