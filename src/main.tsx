// External Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";

// Internal Imports
import env from "@/env.ts";
import { ThemeProvider } from "@/components-shadcn/theme-provider";
import ThemeToggle from "@/components/ThemeToggle";
import { TooltipProvider } from "@/components-shadcn/tooltip";

// Pages
import App from "@/App";
import NasaInternships from "@/pages/NasaInternships";
import Anello from "@/pages/Anello";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider storageKey="mcstich-ui-theme" defaultTheme="dark">
      <TooltipProvider>
        <ThemeToggle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/nasa-internships" element={<NasaInternships />} />
            <Route path="/anello" element={<Anello />} />
            <Route path="*" element={<Navigate to={env.BASE_URL} />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </React.StrictMode>
);
