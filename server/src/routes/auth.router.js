import { Router } from "express";
import { asyncHandlerFunction } from "../utils/asyncHandler.js";
import {
  handleRegisterUser,
  handleLoginUser,
} from "../controllers/authController.js";

const router = Router();

router.post("/register", asyncHandlerFunction(handleRegisterUser));
router.post("/login", asyncHandlerFunction(handleLoginUser));

export default router;
