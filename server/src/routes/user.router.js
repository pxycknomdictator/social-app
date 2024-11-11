import { Router } from "express";
import { asyncHandlerFunction } from "../utils/asyncHandler.js";
import {
  handleSendUserInformation,
  handleDeleteUserAccount,
  handleUpdateProfileSettings,
} from "../controllers/userController.js";
import { validateToken } from "../middlewares/token.js";

const router = Router();

router.get(
  "/user",
  validateToken,
  asyncHandlerFunction(handleSendUserInformation)
);
router.post(
  "/user/delete",
  validateToken,
  asyncHandlerFunction(handleDeleteUserAccount)
);
router.put(
  "/user/update",
  validateToken,
  asyncHandlerFunction(handleUpdateProfileSettings)
);

export default router;
