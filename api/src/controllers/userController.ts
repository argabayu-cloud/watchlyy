import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Validasi input
    if (!email || !password) {
      res.status(400).json({
        status: "error",
        message: "Email dan password wajib diisi",
      });
      return;
    }

    // Cek apakah email ada
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      res.status(404).json({
        status: "error",
        message: "Email tidak ditemukan",
      });
      return;
    }

    // Cek password
    if (user.password !== password) {
      res.status(401).json({
        status: "error",
        message: "Password salah",
      });
      return;
    }

    // Login berhasil
    res.status(200).json({
      status: "success",
      message: "Login berhasil",
      data: user,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: "error",
      message: "Terjadi kesalahan saat login",
    });
  }
};
