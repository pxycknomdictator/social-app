import { useEffect, useState } from "react";
import { mediaStore } from "./store.js";
import { useCookies } from "react-cookie";
import { _config } from "../utils/constants.js";
import { handleGetUserInformationFromDb } from "../utils/axios.js";

export const StoreContextProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies([_config.cookieName]);
  const [popups, setPopups] = useState({
    logout: false,
    delete: false,
  });
  const [info, setInfo] = useState({});
  const { access_token } = cookies;
  const [formState, setFormState] = useState({
    loading: false,
    showPassword: false,
  });

  useEffect(() => {
    if (access_token) {
      (async () => {
        const response = await handleGetUserInformationFromDb("/user");
        setInfo(response.data.data.userInfo);
      })();
    } else {
      return undefined;
    }
  }, [access_token]);

  const handleLogoutUser = () => {
    setPopups((pre) => ({ ...pre, logout: true }));
    removeCookie(_config.cookieName, { path: "/" });
    setPopups((pre) => ({ ...pre, logout: false }));
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
        info,
        popups,
        setPopups,
      }}
    >
      {children}
    </mediaStore.Provider>
  );
};
