import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

// =============================
// GET ALL FILMS
// =============================
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

    res.status(200).json({
      status: "success",
      message: "Films fetched successfully",
      data: films,
    });
  } catch (error: unknown) {
    const err = error as Error;

    res.status(500).json({
      status: "error",
      message: err.message || "Failed to fetch films",
    });
  }
};

// =============================
// GET RECOMMENDED FILMS
// =============================
export const getRecommendedFilms = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const films = await prisma.film.findMany({
      take: 5,
      include: {
        genre: true,
        ratings: true,
      },
    });

    res.status(200).json({
      status: "success",
      message: "Recommended films fetched successfully",
      data: films,
    });
  } catch (error: unknown) {
    const err = error as Error;

    res.status(500).json({
      status: "error",
      message: err.message || "Failed to fetch recommended films",
    });
  }
};

// =============================
// GET FILM BY ID
// =============================
export const getFilmById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      res.status(400).json({
        status: "error",
        message: "Invalid film ID",
      });
      return;
    }

    const film = await prisma.film.findUnique({
      where: { id },
      include: {
        genre: true,
        ratings: true,
      },
    });

    if (!film) {
      res.status(404).json({
        status: "error",
        message: "Film not found",
      });
      return;
    }

    res.status(200).json({
      status: "success",
      message: "Film fetched successfully",
      data: film,
    });
  } catch (error: unknown) {
    const err = error as Error;

    res.status(500).json({
      status: "error",
      message: err.message || "Failed to fetch film",
    });
  }
};
