import { Router } from "express";
import { asyncHandlerFunction } from "../utils/asyncHandler.js";
import { handleSendUserInformation } from "../controllers/userController.js";
import { validateToken } from "../middlewares/token.js";

const router = Router();

router.get(
  "/user",
  validateToken,
  asyncHandlerFunction(handleSendUserInformation)
);

export default router;
