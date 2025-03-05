import { scan } from "react-scan";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StateProvider from "./context/StateProvider";
import DispatchProvider from "./context/DispatchProvider";

scan({
  enabled: false,
});

createRoot(document.getElementById("root")).render(
  <StateProvider>
    <DispatchProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </DispatchProvider>
  </StateProvider>
);
