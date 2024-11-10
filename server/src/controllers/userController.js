import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/User.js";
import { Post } from "../models/Post.js";

const handleSendUserInformation = async (req, res) => {
  const userInfo = await User.findById(req.user._id).select("-password");
  const allPosts = await Post.find({ author: userInfo._id });
  return ApiResponse(res, 200, true, "User information", {
    userInfo,
    allPosts,
  });
};

export { handleSendUserInformation };
