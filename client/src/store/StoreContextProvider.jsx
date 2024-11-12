import { useEffect, useState } from "react";
import { mediaStore } from "./store.js";
import { useCookies } from "react-cookie";
import { _config } from "../utils/constants.js";
import { handleGetUserInformationFromDb } from "../utils/axios.js";

export const StoreContextProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies([_config.cookieName]);

  const [info, setInfo] = useState({});
  const { access_token } = cookies;

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
        info,
      }}
    >
      {children}
    </mediaStore.Provider>
  );
};
