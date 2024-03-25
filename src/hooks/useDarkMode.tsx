import { DarkModeContext } from "@components/provider/DarkModeProvider";
import { useContext } from "react";

export function useDarkMode() {
  const { isDarkMode, changeMode } = useContext(DarkModeContext);
  return {
    isDarkMode,
    changeMode,
  };
}
