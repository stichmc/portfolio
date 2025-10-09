import { useEffect, useState } from "react";
import { Loader } from "lucide-react";

import FadeUp from "@/components/FadeUp";
import HomeButton from "@/components/HomeButton";

import ringyLogo from "@/assets/ringy_logo_full.png";

const Ringy = () => {
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

    loadImage({ src: ringyLogo, alt: "ringy-logo" })
      .then(() => setIsImageLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 md:gap-12 gap-8 xl:gap-24 items-center justify-center min-h-[100vh] sm:p-12 p-4">
      <HomeButton />

      <FadeUp duration={0.5} className="flex flex-col gap-4 justify-center">
        <h1 className="scroll-m-20 text-2xl md:text-3xl xl:text-4xl font-extrabold text-balance">💼 Ringy</h1>

        <div className="max-w-[800px]">
          <h2 className="leading-7 text-sm md:text-base xl:text-lg">
            I currently work as a full stack software engineer at Ringy, where I focus on building and improving
            features for our users. I collaborate across technical and non-technical teams to tackle challenges and keep
            projects moving forward smoothly. My work spans both frontend and backend development, ensuring a seamless
            and reliable experience for thousands of daily users.
          </h2>
        </div>
      </FadeUp>

      <div className="flex items-center justify-center pt-20 sm:pt-0">
        {!isImageLoaded && (
          <div className="w-full h-full flex items-center justify-center">
            <Loader className="animate-spin" size={50} />
          </div>
        )}

        {isImageLoaded && <img src={ringyLogo} className="rounded-xl w-full h-full bg-white p-4" />}
      </div>
    </div>
  );
};

export default Ringy;
