const handleRegisterUser = (req, res) => {
  return res.status(201).json({ success: true, message: "register account" });
};

const handleLoginUser = (req, res) => {
  return res.status(201).json({ success: true, message: "login account" });
};

const handleLogoutUser = (req, res) => {
  return res.status(201).json({ success: true, message: "logout account" });
};

export { handleRegisterUser, handleLoginUser, handleLogoutUser };
