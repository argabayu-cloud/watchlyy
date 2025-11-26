// genreController.js atau genreController.ts

// Hapus: import pkg from "@prisma/client";
// Hapus: const { PrismaClient } = pkg;

// BARU: Menggunakan import * as untuk mendapatkan constructor yang benar (PrismaModule)
import * as PrismaModule from "@prisma/client";

// BARU: Akses constructor PrismaClient dari objek impor (PrismaModule)
const PrismaClient = PrismaModule.PrismaClient;

const prisma = new PrismaClient();

export const getAllGenres = async (req, res) => {
  try {
    const genres = await prisma.genre.findMany();
    res.status(200).json(genres);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch genres" });
  }
};

export const createGenre = async (req, res) => {
  try {
    const { name } = req.body;

    const genre = await prisma.genre.create({
      data: { name },
    });

    res.status(201).json(genre);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create genre" });
  }
};
