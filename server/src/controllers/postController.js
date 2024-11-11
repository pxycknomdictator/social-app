import { ApiResponse } from "../utils/ApiResponse.js";
import { Post } from "../models/Post.js";
import { User } from "../models/User.js";

const handleCreatePost = async (req, res) => {
  const { _id } = req.user;
  const { title, description } = req.body;
  const { path } = req.file;

  const newPost = await Post.create({
    title,
    content: description,
    author: _id,
    postImage: `http://localhost:3000/${path}`,
  });

  await User.findByIdAndUpdate(
    _id,
    { $push: { posts: newPost._id } },
    { new: true }
  );

  return ApiResponse(res, 201, true, "Post created successfully", newPost);
};

export { handleCreatePost };
