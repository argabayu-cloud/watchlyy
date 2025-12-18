import { Router } from "express";
import { register, login, logout } from "../controllers/authController";

const authRouter = Router();

// REGISTER USER
authRouter.post("/register", register);

// LOGIN USER
authRouter.post("/login", login);

authRouter.post("/logout", logout);


export default authRouter;
