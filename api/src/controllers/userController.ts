import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Ambil semua user
export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Terjadi kesalahan saat mengambil data pengguna",
    });
  }
};

// Registrasi user baru
export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password || !phone) {
      res.status(400).json({
        status: "error",
        message: "Name, email, password, dan phone wajib diisi",
      });
      return;
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      res.status(409).json({
        status: "error",
        message: "Email sudah terdaftar",
      });
      return;
    }

    const newUser = await prisma.user.create({
      data: { name, email, password, phone },
    });

    res.status(201).json({
      status: "success",
      message: "User berhasil didaftarkan",
      data: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Terjadi kesalahan saat mendaftarkan user",
    });
  }
};
