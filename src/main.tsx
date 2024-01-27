import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Components
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

// Pages
import Home from "./pages/Home.tsx";
import Education from "./pages/Education.tsx";
import WorkExperience from "./pages/WorkExperience.tsx";
import Synergy from "./pages/projects/Synergy.tsx";
import Beyond from "./pages/projects/Beyond.tsx";
import WheelWizard from "./pages/projects/WheelWizard.tsx";
import SpeechText from "./pages/projects/SpeechText.tsx";
import TimeEscapement from "./pages/projects/TimeEscapement.tsx";
import Doom from "./pages/projects/Doom.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work-experience" element={<WorkExperience />} />

        <Route path="/projects/synergy" element={<Synergy />} />
        <Route path="/projects/beyond-engine" element={<Beyond />} />
        <Route path="/projects/wheel-wizard" element={<WheelWizard />} />
        <Route path="/projects/speech-to-text" element={<SpeechText />} />
        <Route path="/projects/time-escapement" element={<TimeEscapement />} />
        <Route path="/projects/doom" element={<Doom />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
