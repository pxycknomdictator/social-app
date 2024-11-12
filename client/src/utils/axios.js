import axios from "axios";
import { _config } from "./constants.js";

const api = axios.create({
  baseURL: _config.url,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
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

const handleGetUserInformationFromDb = async (url) => {
  try {
    const response = await api.get(url);
    return response;
  } catch (error) {
    return error;
  }
};

const handleMakeAPost = async (url, form) => {
  try {
    const response = await api.post(url, form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response;
  } catch (error) {
    return error;
  }
};

const handleUpdateProfile = async (url, form) => {
  try {
    const response = await api.put(url, form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export {
  handleRegisterUser,
  handleLoginUser,
  handleGetUserInformationFromDb,
  handleMakeAPost,
  handleUpdateProfile,
};
