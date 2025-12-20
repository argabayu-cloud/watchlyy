import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const JWT_SECRET = "your_secret_key";

// =============================
// REGISTER
// =============================
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
      res.status(400).json({
        status: "error",
        message: "Semua field wajib diisi",
      });
      return;
    }

    const normalizedEmail = (email as string).toLowerCase();

    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingUser) {
      res.status(400).json({
        status: "error",
        message: "Email sudah digunakan",
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name: name as string,
        email: normalizedEmail,
        phone: phone as string,
        password: hashedPassword,
      },
    });

    const { password: _, ...userData } = user;

    res.status(201).json({
      status: "success",
      message: "User berhasil didaftarkan",
      data: userData,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Terjadi kesalahan saat registrasi";

    res.status(500).json({ status: "error", message });
  }
};

// =============================
// LOGIN
// =============================
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        status: "error",
        message: "Email dan password wajib diisi",
      });
      return;
    }

    const normalizedEmail = (email as string).toLowerCase();

    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!user) {
      res.status(400).json({
        status: "error",
        message: "Email atau password salah",
      });
      return;
    }

    const match = await bcrypt.compare(password as string, user.password);

    if (!match) {
      res.status(400).json({
        status: "error",
        message: "Email atau password salah",
      });
      return;
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "1d",
    });

    const { password: _, ...userData } = user;

    res.status(200).json({
      status: "success",
      message: "Login berhasil",
      data: {
        token,
        user: userData,
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Terjadi kesalahan saat login";

    res.status(500).json({ status: "error", message });
  }
};

// =============================
// LOGOUT
// =============================
export const logout = async (req: Request, res: Response): Promise<void> => {
  try {
    /**
     * Pada JWT stateless:
     * - Backend hanya memberi respons sukses
     * - Token dihapus di sisi client
     */

    res.status(200).json({
      status: "success",
      message: "Logout berhasil",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Terjadi kesalahan saat logout",
    });
  }
};
