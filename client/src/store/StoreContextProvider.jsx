import { useState } from "react";
import { mediaStore } from "./store.js";

export const StoreContextProvider = ({ children }) => {
  const [formState, setFormState] = useState({
    loading: false,
    showPassword: false,
  });

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
      }}
    >
      {children}
    </mediaStore.Provider>
  );
};
