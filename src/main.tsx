// External Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";

// Internal Imports
import env from "@/env.ts";
import { ThemeProvider } from "@/components-shadcn/theme-provider";
import ThemeToggle from "@/components/ThemeToggle";

// Pages
import App from "@/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider storageKey="mcstich-ui-theme" defaultTheme="dark">
      <ThemeToggle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<Navigate to={env.BASE_URL} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
