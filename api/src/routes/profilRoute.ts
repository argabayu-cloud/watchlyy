import { Router } from "express";
import { getProfile } from "../controllers/profil.ts";

const router = Router();

// =============================
// PROFILE ROUTES
// =============================
router.get("/profil", getProfile);

export default router;
