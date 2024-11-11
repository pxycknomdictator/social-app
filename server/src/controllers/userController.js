import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/User.js";

const handleSendUserInformation = async (req, res) => {
  const userInfo = await User.findById(req.user._id).populate("posts");
  console.log(userInfo);
  return ApiResponse(res, 200, true, "User information", { userInfo });
};

const handleDeleteUserAccount = async (req, res) => {
  const { id } = req.body;
  await User.findByIdAndDelete({ _id: id });
  return ApiResponse(res, 200, true, `${id} id successfully deleted!`, null);
};

export { handleSendUserInformation, handleDeleteUserAccount };
