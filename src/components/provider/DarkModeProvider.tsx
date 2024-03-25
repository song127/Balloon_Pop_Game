import { createContext, useState, ReactNode } from "react";

interface DarkModeContextType {
  isDarkMode: boolean;
  changeMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType>({
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
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        changeMode,
      }}>
      {children}
    </DarkModeContext.Provider>
  );
}