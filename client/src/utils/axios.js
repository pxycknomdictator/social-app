import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
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

export { handleRegisterUser };
