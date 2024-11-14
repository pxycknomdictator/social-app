import { Router } from "express";
import { handleCreateNewComment } from "../controllers/commentController.js";
import { asyncHandlerFunction } from "../utils/asyncHandler.js";

const router = Router();

router.post("/posts/comment", asyncHandlerFunction(handleCreateNewComment));

export default router;
