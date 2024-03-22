import { ColorModeContext } from "@component/provider/DarkModeProvider";
import { useContext } from "react";

export function useDarkMode() {
  const { isDarkMode, changeMode } = useContext(ColorModeContext);
  return {
    isDarkMode,
    changeMode,
  };
}
