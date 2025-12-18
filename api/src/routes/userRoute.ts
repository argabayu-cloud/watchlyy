import { Router } from "express";
import { getAllUsers, registerUser } from "../controllers/userController";

const userRouter = Router();

// ROUTE GET: Ambil semua user
userRouter.get("/", getAllUsers);

// ROUTE POST: Registrasi user baru
userRouter.post("/register", registerUser);



export default userRouter;
