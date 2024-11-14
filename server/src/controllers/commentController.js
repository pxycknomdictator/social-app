import { ApiResponse } from "../utils/ApiResponse.js";
import { Comment } from "../models/Comment.js";
import { Post } from "../models/Post.js";

const handleCreateNewComment = async (req, res) => {
  const { comment, _id, author } = req.body;

  if (!comment || !author || !_id) {
    return ApiResponse(
      res,
      400,
      false,
      "Missing required fields: comment, author, or post ID"
    );
  }

  const newComment = await Comment.create({
    author,
    content: comment,
    post: _id,
  });

  await Post.findByIdAndUpdate(
    _id,
    { $push: { comments: newComment._id } },
    { new: true }
  );

  return ApiResponse(res, 201, true, "Comment added", newComment);
};

export { handleCreateNewComment };
