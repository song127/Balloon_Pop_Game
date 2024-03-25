import { ReactNode } from "react";
import { DarkModeProvider } from "@components/provider/DarkModeProvider";
import { ModalProvider } from "@components/provider/ModalProvider";

export default function RootUIProvider({ children }: { children: ReactNode }) {
  return (
    <DarkModeProvider>
      <ModalProvider>{children}</ModalProvider>
    </DarkModeProvider>
  );
}
