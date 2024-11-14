import { Router } from "express";
import { asyncHandlerFunction } from "../utils/asyncHandler.js";
import {
  handleCreatePost,
  handleSendAllPosts,
} from "../controllers/postController.js";
import { validateToken } from "../middlewares/token.js";
import { upload } from "../utils/fileUpload.js";

const router = Router();

router.post(
  "/create",
  validateToken,
  upload.single("image"),
  asyncHandlerFunction(handleCreatePost)
);

router.get("/posts", validateToken, asyncHandlerFunction(handleSendAllPosts));

export default router;
