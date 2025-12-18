import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllGenres = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const genres = await prisma.genre.findMany();

    res.status(200).json({
      status: "success",
      message: "Genres fetched successfully",
      data: genres,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: "error",
      message: "Failed to fetch genres",
    });
  }
};

export const createGenre = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name } = req.body;

    if (!name) {
      res.status(400).json({
        status: "error",
        message: "Genre name is required",
      });
      return;
    }

    const genre = await prisma.genre.create({
      data: { name },
    });

    res.status(201).json({
      status: "success",
      message: "Genre created successfully",
      data: genre,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: "error",
      message: "Failed to create genre",
    });
  }
};
