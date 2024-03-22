import { useDarkMode } from "@hook/useDarkMode";

export function useDarkModeValue(color1: any, color2: any) {
  const { isDarkMode } = useDarkMode();
  if (!color2) return color1;
  return !isDarkMode ? color1 : color2;
}
