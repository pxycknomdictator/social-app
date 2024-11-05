import { Router } from "express";
import {
  handleRegisterUser,
  handleLoginUser,
  handleLogoutUser,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", handleRegisterUser);
router.post("/login", handleLoginUser);
router.get("/logout", handleLogoutUser);

export default router;
