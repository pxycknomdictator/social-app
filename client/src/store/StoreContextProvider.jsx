import { useState } from "react";
import { mediaStore } from "./store.js";
import { useCookies } from "react-cookie";
import { _config } from "../utils/constants.js";

export const StoreContextProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies([_config.cookieName]);

  const [formState, setFormState] = useState({
    loading: false,
    showPassword: false,
  });

  const handleLogoutUser = () => {
    const userConfirmation = confirm("are you sure to logout!");
    if (!userConfirmation) {
      return null;
    }
    removeCookie(_config.cookieName, { path: "/" });
  };

  const handleToggleEye = () => {
    setFormState((prev) => ({
      ...prev,
      showPassword: !prev.showPassword,
    }));
  };

  return (
    <mediaStore.Provider
      value={{
        formState,
        setFormState,
        handleToggleEye,
        handleLogoutUser,
      }}
    >
      {children}
    </mediaStore.Provider>
  );
};
