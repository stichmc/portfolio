import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Components
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

// Pages
import AboutMe from "./pages/AboutMe.tsx";
import Contact from "./pages/ContactInfo.tsx";
import Resume from "./pages/Resume.tsx";
import Synergy from "./pages/projects/Synergy.tsx";
import WheelWizard from "./pages/projects/WheelWizard.tsx";
import SpeechText from "./pages/projects/SpeechText.tsx";
import TimeEscapement from "./pages/projects/TimeEscapement.tsx";
import Doom from "./pages/projects/Doom.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/about-me" />} />
        <Route path="/about-me" element={<AboutMe />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/contact-info" element={<Contact />}/>

        <Route path="/projects/synergy" element={<Synergy />} />
        <Route path="/projects/wheel-wizard" element={<WheelWizard />} />
        <Route path="/projects/speech-to-text" element={<SpeechText />} />
        <Route path="/projects/time-escapement" element={<TimeEscapement />} />
        <Route path="/projects/doom" element={<Doom />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
