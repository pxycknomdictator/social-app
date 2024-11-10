import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import { _config } from "../utils/constants.js";

export const ProtectedRoute = ({ children }) => {
  const [cookies] = useCookies([_config.cookieName]);
  const { access_token } = cookies;

  if (!access_token) {
    return <Navigate to="/" />;
  }

  return children;
};
