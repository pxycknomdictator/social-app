import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/User.js";
import { generatePassword } from "../middlewares/validate.js";

const handleRegisterUser = async (req, res) => {
  const { username, email, password } = req.body;
  if (![username, email, password].every((field) => field?.trim())) {
    return ApiResponse(res, 400, false, "Please provide all fields", null);
  }
  const hash = await generatePassword(password);
  const user = await User.create({ username, email, password: hash });
  return ApiResponse(res, 201, true, "User registered", user);
};

const handleLoginUser = (req, res) => {
  return res.status(201).json({ success: true, message: "login account" });
};

const handleLogoutUser = (req, res) => {
  return res.status(201).json({ success: true, message: "logout account" });
};

export { handleRegisterUser, handleLoginUser, handleLogoutUser };
