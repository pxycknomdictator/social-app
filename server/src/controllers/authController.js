import { ApiResponse } from "../utils/ApiResponse.js";

const handleRegisterUser = (req, res) => {
  return ApiResponse(res, 201, true, "user registered successfully", {});
};

const handleLoginUser = (req, res) => {
  return res.status(201).json({ success: true, message: "login account" });
};

const handleLogoutUser = (req, res) => {
  return res.status(201).json({ success: true, message: "logout account" });
};

export { handleRegisterUser, handleLoginUser, handleLogoutUser };
