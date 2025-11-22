import express from "express"; // Mengganti require("express")
import {
    getAllGenres,
    createGenre
} from "../controllers/genreController"; // Mengganti require("../controllers...")

const router = express.Router();

router.get("/", getAllGenres);
router.post("/", createGenre);

export default router; // Mengganti module.exports = router;