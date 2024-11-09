import axios from "axios";
import { _config } from "./constants.js";

const api = axios.create({
  baseURL: _config.url,
  headers: {
    "Content-Type": "application/json",
  },
});

const handleRegisterUser = async (url, form) => {
  try {
    const response = await api.post(url, form);
    return response.data;
  } catch (error) {
    return error;
  }
};

const handleLoginUser = async (url, form) => {
  try {
    const response = await api.post(url, form);
    return response;
  } catch (error) {
    return error;
  }
};

export { handleRegisterUser, handleLoginUser };
