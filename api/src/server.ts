import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

// Routes
import genreRoutes from "./routes/genreRoute.ts";
import authRoutes from "./routes/authRoutes.ts";
import userRoutes from "./routes/userRoute.ts";
import filmRoutes from "./routes/filmRoute.ts";
import profilRoute from "./routes/profilRoute.ts";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Root API
app.get("/", (req, res) => {
  res.json({ message: "API Running..." });
});

// Register routes
app.use("/api/auth", authRoutes);
app.use("/api/genres", genreRoutes);
app.use("/api/users", userRoutes);
app.use("/api/films", filmRoutes);
app.use("/api", profilRoute);

// Server
app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
