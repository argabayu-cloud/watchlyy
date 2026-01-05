import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

// Routes
import genreRoutes from "./routes/genreRoute.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoute.js";
import filmRoutes from "./routes/filmRoute.js";
import profilRoute from "./routes/profilRoute.js";

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
