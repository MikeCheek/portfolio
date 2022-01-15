import { createContext, useContext } from "react";

export const ThemeContext = createContext<string>("dark")

export const useThemeContext = () => useContext(ThemeContext)