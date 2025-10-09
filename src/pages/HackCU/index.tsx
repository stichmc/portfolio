import { useEffect, useState } from "react";
import { Loader } from "lucide-react";

import FadeUp from "@/components/FadeUp";
import HomeButton from "@/components/HomeButton";
import { Separator } from "@/components-shadcn/separator";

import satTrackDashboard from "@/assets/sat-track-dashboard.png";

const HackCU = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (image: { src: string; alt: string }) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.src;
        loadImg.onload = () => resolve(image.src);
        loadImg.onerror = (err) => reject(err);
      });
    };

    loadImage({ src: satTrackDashboard, alt: "sat-track-dashboard" })
      .then(() => setIsImageLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 md:gap-12 gap-8 xl:gap-24 items-center justify-center min-h-[100vh] sm:p-12 p-4">
      <HomeButton />

      <FadeUp duration={0.5} className="flex flex-col gap-4 justify-center">
        <h1 className="scroll-m-20 text-2xl md:text-3xl xl:text-4xl font-extrabold text-balance">
          💻 HackCU 10 Project: Sat-track
        </h1>

        <div className="max-w-[800px]">
          <h2 className="leading-7 text-sm md:text-base xl:text-lg">
            In 2024, my team and I competed in HackCU, an annual 12-hour hackathon hosted by the University of Colorado.
            Our project, Sat-Track, is a real-time satellite telemetry tracker designed to visualize the positions and
            data of various satellites orbiting Earth.
          </h2>
        </div>

        <Separator className="my-2" />

        <div className="max-w-[800px] w-full">
          <h3 className="scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight">Key Features</h3>
          <ul className="list-disc list-inside my-2 text-sm md:text-base xl:text-lg space-y-1">
            <li>Real-time tracking of multiple satellites on a 3D globe.</li>
            <li>Displays critical telemetry data such as altitude, velocity, and latitude/longitude.</li>
            <li>Functionality to add websites to the tracker via the satellite's Norad ID.</li>
            <li>Interactive UI allowing users to select satellites for detailed information.</li>
          </ul>
        </div>

        <Separator className="my-2" />

        <div className="max-w-[800px] w-full">
          <h3 className="scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight">Tech Stack</h3>
          <p className="text-sm md:text-base xl:text-lg my-2">
            React, TypeScript, Three.js for 3D rendering, and public satellite tracking APIs (e.g., N2YO).
          </p>
        </div>
      </FadeUp>

      <div className="flex items-center justify-center pt-20 sm:pt-0 w-full col-span-2">
        {!isImageLoaded && (
          <div className="w-full h-full flex items-center justify-center">
            <Loader className="animate-spin" size={50} />
          </div>
        )}

        {isImageLoaded && <img src={satTrackDashboard} className="rounded-xl w-full h-full" />}
      </div>
    </div>
  );
};

export default HackCU;
