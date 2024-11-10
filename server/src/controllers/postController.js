import { ApiResponse } from "../utils/ApiResponse.js";
import { Post } from "../models/Post.js";

const handleCreatePost = async (req, res) => {
  const { _id } = req.user;
  const { title, description } = req.body;
  const { path } = req.file;

  await Post.create({
    author: _id,
    title,
    content: description,
    postImage: `http://localhost:3000/${path}`,
  });

  return ApiResponse(res, 201, true, "Post created successfully", null);
};

export { handleCreatePost };
