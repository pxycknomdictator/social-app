import { Router } from "express";
import { asyncHandlerFunction } from "../utils/asyncHandler.js";
import {
  handleSendUserInformation,
  handleDeleteUserAccount,
  handleUpdateProfileSettings,
  handleSendSpecificUserInformation,
} from "../controllers/userController.js";
import { validateToken } from "../middlewares/token.js";
import { uploadProfile } from "../utils/uploadProfile.js";

const router = Router();

router
  .route("/user")
  .get(validateToken, asyncHandlerFunction(handleSendUserInformation))
  .post(validateToken, asyncHandlerFunction(handleSendSpecificUserInformation));

router.post(
  "/user/delete",
  validateToken,
  asyncHandlerFunction(handleDeleteUserAccount)
);
router.put(
  "/user/update",
  validateToken,
  uploadProfile.single("profileImage"),
  asyncHandlerFunction(handleUpdateProfileSettings)
);

export default router;
