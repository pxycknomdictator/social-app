import { mediaStore } from "./store.js";

export const StoreContextProvider = ({ children }) => {
  const state = "Noman";
  return (
    <mediaStore.Provider value={{ state }}>{children}</mediaStore.Provider>
  );
};
