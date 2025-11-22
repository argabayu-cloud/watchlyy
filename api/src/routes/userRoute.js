import express from "express"; // Mengganti require("express")
import { getAllUsers, registerUser } from "../controllers/userController"; // Mengganti require("../controllers...")

const router = express.Router();

// GET /users
router.get("/", getAllUsers);

// POST /users/register
router.post("/register", registerUser);

export default router; // Mengganti module.exports = router;
