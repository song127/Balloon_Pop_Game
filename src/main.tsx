import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { DarkModeProvider } from "@components/provider/DarkModeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
);
