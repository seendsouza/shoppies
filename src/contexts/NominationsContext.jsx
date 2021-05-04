import React, { createContext, useEffect, useReducer } from "react";
import {
  nominationsReducer,
  initializer,
} from "../reducers/nominationsReducer";

export const NominationsContext = createContext();

export const NominationsProvider = ({ children }) => {
  const [nominations, dispatch] = useReducer(
    nominationsReducer,
    [],
    initializer
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("SHOPPIES_nominations", JSON.stringify(nominations));
    }
  }, [nominations]);

  return (
    <NominationsContext.Provider
      value={{
        nominations,
        dispatch,
      }}
    >
      {children}
    </NominationsContext.Provider>
  );
};
