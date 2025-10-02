// External Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";

// Internal Imports
import env from "@/env.ts";
import App from "@/App";

// Even though this is a single page website we still want to ensure the user can't navigate to a link that doesn't exist
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<Navigate to={env.BASE_URL} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
