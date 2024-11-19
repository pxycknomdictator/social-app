import { useEffect, useState } from "react";
import { mediaStore } from "./store.js";
import { useCookies } from "react-cookie";
import { _config } from "../utils/constants.js";
import {
  handleDeleteUserAccountPermanently,
  handleGetUserInformationFromDb,
} from "../utils/axios.js";

export const StoreContextProvider = ({ children }) => {
  const [cookies, _, removeCookie] = useCookies([_config.cookieName]);

  const [posts, setPosts] = useState({
    post: [],
    users: [],
  });

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

  const handleDeleteUserAccount = async () => {
    await handleDeleteUserAccountPermanently("/user/delete", { id: info._id });
    removeCookie(_config.cookieName, { path: "/" });
    setPopups((pre) => ({ ...pre, delete: false }));
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
        handleDeleteUserAccount,
        info,
        setInfo,
        popups,
        setPopups,
        posts,
        setPosts,
      }}
    >
      {children}
    </mediaStore.Provider>
  );
};
