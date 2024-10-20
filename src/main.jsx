import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/Router";
import AuthProvider from "./providers/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { HelmetProvider } from "react-helmet-async";
// ..
AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
