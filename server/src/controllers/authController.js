import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/User.js";
import { generatePassword, comparePassword } from "../middlewares/validate.js";

const handleRegisterUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (![username, email, password].every((field) => field?.trim())) {
    return ApiResponse(res, 400, false, "Please provide all fields", null);
  }

  const exist = await User.findOne({ $or: [{ username }, { email }] });
  if (exist) {
    return ApiResponse(res, 400, false, "This user is already exists", null);
  }

  const hash = await generatePassword(password);
  const user = await User.create({ username, email, password: hash });
  return ApiResponse(res, 201, true, "User registered", user);
};

const handleLoginUser = async (req, res) => {
  const { email, password } = req.body;

  if (![email, password].every((field) => field?.trim())) {
    return ApiResponse(res, 400, false, "Please provide all fields", null);
  }

  const exist = await User.findOne({ email });
  if (!exist) {
    return ApiResponse(res, 400, false, "This user is never exists", null);
  }

  const isPasswordCorrect = await comparePassword(password, exist.password);
  if (!isPasswordCorrect) {
    return ApiResponse(res, 400, false, "Password is incorrect", null);
  }

  return ApiResponse(res, 200, true, "Login user", exist);
};

const handleLogoutUser = (req, res) => {
  return res.status(201).json({ success: true, message: "logout account" });
};

export { handleRegisterUser, handleLoginUser, handleLogoutUser };
