import { createContext, useContext } from "react";

export type DarkMode = {
  darkMode: boolean;
  setDarkMode: (c: boolean) => void;
};

export const DarkModeContext = createContext<DarkMode>({
  darkMode: false,
  setDarkMode: () => {},
});

export const useModeContext = () => useContext(DarkModeContext);
