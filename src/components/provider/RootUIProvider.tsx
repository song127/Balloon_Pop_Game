import { ReactNode } from "react";
import { DarkModeProvider } from "./DarkModeProvider";
import { ModalProvider } from "./ModalProvider";

export default function RootUIProvider({ children }: { children: ReactNode }) {
  return (
    <DarkModeProvider>
      <ModalProvider>{children}</ModalProvider>
    </DarkModeProvider>
  );
}
