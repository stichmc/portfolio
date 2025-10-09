import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import AutoScroll from "embla-carousel-auto-scroll";

import FadeUp from "@/components/FadeUp";
import { Carousel, CarouselContent, CarouselItem } from "@/components-shadcn/carousel";
import HomeButton from "@/components/HomeButton";

import escapement1 from "@/assets/expo-pictures/escapement_1.webp";
import escapement2 from "@/assets/expo-pictures/escapement_2.webp";
import escapement3 from "@/assets/expo-pictures/escapement_3.webp";

export const carouselImageArray = [
  { src: escapement1, alt: "escapement-1" },
  { src: escapement2, alt: "escapement-2" },
  { src: escapement3, alt: "escapement-3" },
];

const EngineeringExpo = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (image: { src: string; alt: string }) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.src;
        loadImg.onload = () => resolve(image.src);
        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(carouselImageArray.map((image) => loadImage(image)))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 md:gap-12 gap-8 xl:gap-24 items-center justify-center min-h-[100vh] sm:p-12 p-4">
      <HomeButton />

      <FadeUp duration={0.5} className="flex flex-col gap-4 justify-center">
        <h1 className="scroll-m-20 text-center text-2xl md:text-3xl xl:text-4xl font-extrabold text-balance">
          ⚙️ 2023 CU Engineering Expo
        </h1>

        <h2 className="leading-6 text-sm md:text-base xl:text-lg text-center">
          In early 2023, I spearheaded a four-person team for the CU Engineering Expo. Tasked with creating a project
          for a professor, we collaborated with my physics professor to build a wooden time escapement (fancy old
          clock). This device was designed to demonstrate classical physics principles in introductory classes. We
          successfully delivered the project within a two-month timeframe, and the final result was enthusiastically
          received by our professor.
        </h2>
      </FadeUp>

      <div className="h-full flex items-center justify-center pt-20 sm:pt-0 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px]">
        {!imagesLoaded && (
          <div className="w-full h-full flex items-center justify-center">
            <Loader className="animate-spin" size={50} />
          </div>
        )}

        {imagesLoaded && (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            plugins={[
              AutoScroll({
                speed: 1.5,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent>
              {carouselImageArray.map((image, index) => (
                <CarouselItem key={`carousel-1-${image.src}-${index}`}>
                  <img src={image.src} alt={image.alt} className="rounded-xl w-full h-full" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default EngineeringExpo;
