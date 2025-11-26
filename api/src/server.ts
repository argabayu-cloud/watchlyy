import express from "express";
import authRoutes from "./routes/authRoutes";

const app = express();

app.use(express.json());

// Auth routes
app.use("/api/auth", authRoutes);

const PORT = 3001; // UBAH KE PORT YANG KAMU MAU

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
