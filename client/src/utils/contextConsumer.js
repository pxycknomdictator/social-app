import { useContext } from "react";
import { mediaStore } from "../store/store.js";

export const useContextConsumer = () => {
  const globalState = useContext(mediaStore);

  if (!globalState) {
    throw new Error("State is not provide to app");
  }

  return globalState;
};
