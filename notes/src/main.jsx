import { scan } from "react-scan";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StateProvider from "./context/StateProvider";
import DispatchProvider from "./context/DispatchProvider";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";

scan({
  enabled: true,
});

const router = createBrowserRouter([
  {path: "/Homepage" , element:<App /> },
  {path: "/" , element:<LoginPage /> },
  {path: "/SignUp" , element:<SignUpPage /> },
  {path: "*" , element:<NotFound /> }

]);

createRoot(document.getElementById("root")).render(
  <StateProvider>
    <DispatchProvider>
      <StrictMode>
        <RouterProvider router = {router}/>
      </StrictMode>
    </DispatchProvider>
  </StateProvider>
);
