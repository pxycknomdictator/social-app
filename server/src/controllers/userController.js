import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/User.js";
import { Post } from "../models/Post.js";
import { Comment } from "../models/Comment.js";
import { generatePassword } from "../middlewares/validate.js";

const handleSendUserInformation = async (req, res) => {
  const userInfo = await User.findById(req.user._id).populate({
    path: "posts",
    populate: [
      {
        path: "author",
        model: "User",
      },
      {
        path: "comments",
        populate: {
          path: "author",
          model: "User",
        },
      },
    ],
  });

  return ApiResponse(res, 200, true, "User information", { userInfo });
};

const handleSendSpecificUserInformation = async (req, res) => {
  const { id } = req.body;
  const userInfo = await User.findById({ _id: id })
    .populate({
      path: "posts",
      populate: [
        {
          path: "author",
          model: "User",
        },
        {
          path: "comments",
          populate: {
            path: "author",
            model: "User",
          },
        },
      ],
    })
    .populate("followers", "_id")
    .populate("following", "_id");

  return ApiResponse(res, 200, true, "User information", { userInfo });
};

const handleUpdateProfileSettings = async (req, res) => {
  const userId = req.user._id;
  const { username, email, password, bio } = req.body;
  const profileImage = req.file
    ? `http://localhost:3000/${req.file.path}`
    : null;

  const updateFields = {};
  if (username) {
    updateFields.username = username;
  }
  if (email) {
    updateFields.email = email;
  }
  if (password) {
    updateFields.password = await generatePassword(password);
  }
  if (bio) {
    updateFields.bio = bio;
  }
  if (profileImage) {
    updateFields.profileImage = profileImage;
  }

  const updatedUser = await User.findByIdAndUpdate(userId, updateFields, {
    new: true,
  });

  if (!updatedUser) {
    return ApiResponse(res, 404, false, "User not found", null);
  }

  return ApiResponse(res, 200, true, "Profile updated successfully", {
    updatedUser,
  });
};

const handleDeleteUserAccount = async (req, res) => {
  const { id } = req.body;
  await User.findByIdAndDelete(id);
  await Post.deleteMany({ author: id });
  await Comment.deleteMany({ author: id });
  return ApiResponse(res, 200, true, `${id} successfully deleted!`, null);
};

const handleFollowUser = async (req, res) => {
  const { loggedInId, followId } = req.body;

  const alreadyFollowing = await User.findOne({
    _id: loggedInId,
    following: followId,
  });

  if (alreadyFollowing) {
    return ApiResponse(
      res,
      400,
      false,
      "You are already following this user",
      true
    );
  }

  await User.findByIdAndUpdate(
    { _id: followId },
    { $push: { followers: loggedInId } }
  );

  await User.findByIdAndUpdate(
    { _id: loggedInId },
    { $push: { following: followId } }
  );

  const user = await User.findById({ _id: loggedInId });
  const isFollow = user.following.includes(loggedInId);

  return ApiResponse(res, 201, true, "Followed successfully", isFollow);
};

export {
  handleSendUserInformation,
  handleDeleteUserAccount,
  handleUpdateProfileSettings,
  handleSendSpecificUserInformation,
  handleFollowUser,
};
