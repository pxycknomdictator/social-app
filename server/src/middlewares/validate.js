import bcryptjs from "bcryptjs";

const generatePassword = async (password) => {
  return await bcryptjs.hash(password, 10);
};

const comparePassword = async (password, hashPassword) => {
  return await bcryptjs.compare(password, hashPassword);
};

export { generatePassword, comparePassword };
