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
import SatTrack from "./pages/projects/SatTrack.tsx";
import SpeechText from "./pages/projects/SpeechText.tsx";
import TimeEscapement from "./pages/projects/TimeEscapement.tsx";
import Doom from "./pages/projects/Doom.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={`${import.meta.env.BASE_URL}home`} />} />
        <Route path="*" element={<Navigate to={`${import.meta.env.BASE_URL}home`} />} />
        <Route path={`${import.meta.env.BASE_URL}home`} element={<Home />} />
        <Route path={`${import.meta.env.BASE_URL}education`} element={<Education />} />
        <Route path={`${import.meta.env.BASE_URL}work-experience`} element={<WorkExperience />} />

        <Route path={`${import.meta.env.BASE_URL}projects/synergy`} element={<Synergy />} />
        <Route path={`${import.meta.env.BASE_URL}projects/beyond`} element={<Beyond />} />
        <Route path={`${import.meta.env.BASE_URL}projects/hackcu-sattrack`} element={<SatTrack />} />
        <Route path={`${import.meta.env.BASE_URL}projects/speech-to-text`} element={<SpeechText />} />
        <Route path={`${import.meta.env.BASE_URL}projects/time-escapement`} element={<TimeEscapement />} />
        <Route path={`${import.meta.env.BASE_URL}projects/doom`} element={<Doom />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
