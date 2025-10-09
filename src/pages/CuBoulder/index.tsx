import { useEffect, useState } from "react";
import { Loader } from "lucide-react";

import FadeUp from "@/components/FadeUp";
import HomeButton from "@/components/HomeButton";

import cuLogo from "@/assets/cu_logo.png";

const CuBoulder = () => {
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

    loadImage({ src: cuLogo, alt: "cu-logo" })
      .then(() => setIsImageLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 md:gap-12 gap-8 xl:gap-24 items-center justify-center min-h-[100vh] sm:p-12 p-4">
      <HomeButton />

      <FadeUp duration={0.5} className="flex flex-col gap-4 justify-center">
        <h1 className="scroll-m-20 text-2xl md:text-3xl xl:text-4xl font-extrabold text-balance">
          🎓 CU Boulder BS in Computer Science
        </h1>

        <div className="max-w-[800px]">
          <h2 className="leading-7 text-sm md:text-base xl:text-lg">
            Earning my degree from CU Boulder was an enriching experience where I built lifelong friendships and learned
            from brilliant professors who are or were in the software engineering field. I chose to pursue a computer
            science degree because of my fascination with software engineering and its capacity to tackle intricate
            challenges, foster innovation, and develop impactful solutions that benefit everyone. Software engineering's
            dynamic nature and the constant opportunities for learning and contribution have always been my leading
            motivation for becoming a software engineer. My coursework encompasses mastering algorithms, data
            structures, software engineering, and computer architecture.
          </h2>
        </div>
      </FadeUp>

      <div className="flex items-center justify-center pt-20 sm:pt-0">
        {!isImageLoaded && (
          <div className="w-full h-full flex items-center justify-center">
            <Loader className="animate-spin" size={50} />
          </div>
        )}

        {isImageLoaded && <img src={cuLogo} className="rounded-xl w-full h-full bg-white p-4" />}
      </div>
    </div>
  );
};

export default CuBoulder;
