import jwt from "jsonwebtoken";
import { _config } from "../db/constants.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateToken = (payload) => {
  return jwt.sign(payload, _config.jwtTokenKey, {
    algorithm: _config.algorithm,
  });
};

const validateToken = (req, res, next) => {
  try {
    const cookie = req.cookies.access_token;
    if (!cookie) {
      return ApiResponse(res, 400, false, "Please login first", null);
    }
    const userData = jwt.verify(cookie, _config.jwtTokenKey);
    req.user = userData;
    next();
  } catch (error) {
    return ApiResponse(res, 401, false, "Invalid or expired token", null);
  }
};

export { generateToken, validateToken };
