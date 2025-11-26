import { Router } from "express";
import { register, login } from "../controllers/authController.js";

const authRouter = Router();

// REGISTER USER
authRouter.post("/register", register);

// LOGIN USER
authRouter.post("/login", login);

export default authRouter;
