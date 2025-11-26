import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = "your_secret_key"; // gunakan ENV di production

// =============================
// REGISTER USER
// =============================
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, phone, password } = req.body;

    // Validasi input wajib
    if (!name || !email || !phone || !password) {
      res.status(400).json({
        status: "error",
        message: "Semua field wajib diisi",
      });
      return;
    }

    // Cek email sudah dipakai
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      res.status(400).json({
        status: "error",
        message: "Email sudah digunakan",
      });
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan user baru
    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      status: "success",
      message: "Registrasi berhasil",
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error: unknown) {
    const err = error as Error;

    res.status(500).json({
      status: "error",
      message: err.message || "Terjadi kesalahan saat registrasi",
    });
  }
};

// =============================
// LOGIN USER
// =============================
export const login = async (req: Request, res: Response): Promise<void> => {
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

    // Cek user
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      res.status(400).json({
        status: "error",
        message: "Email atau password salah",
      });
      return;
    }

    // Cek password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      res.status(400).json({
        status: "error",
        message: "Email atau password salah",
      });
      return;
    }

    // Buat token JWT
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      status: "success",
      message: "Login berhasil",
      data: {
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
        },
      },
    });
  } catch (error: unknown) {
    const err = error as Error;

    res.status(500).json({
      status: "error",
      message: err.message || "Terjadi kesalahan saat login",
    });
  }
};
