import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getAllFilms = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const films = await prisma.film.findMany({
      include: {
        genre: true,
        ratings: true,
      },
    });

    res.json({ status: "success", data: films });
  } catch (err: any) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

export const getRecommendedFilms = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const films = await prisma.film.findMany({
      take: 5,
      include: { genre: true, ratings: true },
    });

    res.json({ status: "success", data: films });
  } catch (err: any) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

export const getFilmById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = Number(req.params.id);

    const film = await prisma.film.findUnique({
      where: { id },
      include: { genre: true, ratings: true },
    });

    if (!film) {
      return res.status(404).json({
        status: "error",
        message: "Film not found",
      });
    }

    res.json({ status: "success", data: film });
  } catch (err: any) {
    res.status(500).json({ status: "error", message: err.message });
  }
};
