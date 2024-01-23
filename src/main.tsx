import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Components
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

// Pages
import Synergy from "./pages/projects/Synergy.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/aboutme" />} />
        <Route path="/projects/synergy" element={<Synergy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
