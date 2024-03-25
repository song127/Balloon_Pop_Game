import { createContext, useState, ReactNode } from "react";

// export const ColorModeType = {
//     Dark: "dark",
//     Light: "light",
//     Red: "red",
// };

interface ColorModeContextType {
  isDarkMode: boolean;
  changeMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextType>({
  isDarkMode: false,
  changeMode: () => {
    return;
  },
});

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("isDarkMode") ?? "false")
  );

  const changeMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", JSON.stringify(!isDarkMode));
  };

  return (
    <ColorModeContext.Provider
      value={{
        isDarkMode,
        changeMode,
      }}>
      {children}
    </ColorModeContext.Provider>
  );
}