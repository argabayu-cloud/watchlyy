import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const JWT_SECRET = "your_secret_key";

// =============================
// GET PROFILE (ME)
// =============================
export const getProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).json({
        status: "error",
        message: "Token tidak ditemukan",
      });
      return;
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: number;
      email: string;
    };

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        createdAt: true,
      },
    });

    if (!user) {
      res.status(404).json({
        status: "error",
        message: "User tidak ditemukan",
      });
      return;
    }

    res.status(200).json({
      status: "success",
      message: "Data profil berhasil diambil",
      data: user,
    });
  } catch (error) {
    res.status(401).json({
      status: "error",
      message: "Token tidak valid atau sudah kedaluwarsa",
    });
  }
};
