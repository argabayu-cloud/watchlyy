import { Router } from "express";
import { getProfile } from "../controllers/profil";

const router = Router();

// =============================
// PROFILE ROUTES
// =============================
router.get("/profil", getProfile);

export default router;
