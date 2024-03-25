import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import RootUIProvider from "@components/provider/RootUIProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RootUIProvider>
    <App />
  </RootUIProvider>
);
