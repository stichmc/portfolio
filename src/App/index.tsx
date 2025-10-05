import { useState, useEffect } from "react";
import { Loader } from "lucide-react";

import headShotImage from "@/assets/headshot.jpg";

import AboutSection from "./AboutSection";
import JourneySection from "./JourneySection";

const App = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = headShotImage;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  if (!imageLoaded) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader className="animate-spin h-32 w-32" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start">
      <AboutSection headShotImage={headShotImage} />

      <JourneySection />
    </div>
  );
};

export default App;
