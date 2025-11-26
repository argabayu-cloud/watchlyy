import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

// Routes
import genreRoutes from "./routes/genreRoute";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoute";
import filmRoutes from "./routes/filmRoute";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Default root (cek API)
app.get("/", (req, res) => {
  res.json({ message: "API Running..." });
});

// Register all routes
app.use("/api/genres", genreRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/films", filmRoutes);

// Server
app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
