import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import AutoScroll from "embla-carousel-auto-scroll";

import FadeUp from "@/components/FadeUp";
import { Carousel, CarouselContent, CarouselItem } from "@/components-shadcn/carousel";
import HomeButton from "@/components/HomeButton";

import planeImage from "@/assets/nasa-pictures/plane.jpg";
import internsImage from "@/assets/nasa-pictures/interns.jpg";
import issControlImage from "@/assets/nasa-pictures/iss_control.jpg";
import myDeskImage from "@/assets/nasa-pictures/my_desk.jpg";
import oven from "@/assets/nasa-pictures/oven.jpg";

export const carouselImageArray = [
  { src: planeImage, alt: "nasa-plane-image" },
  { src: internsImage, alt: "nasa-iss-control" },
  { src: issControlImage, alt: "nasa-iss-control" },
  { src: myDeskImage, alt: "nasa-my-desk" },
  { src: oven, alt: "nasa-oven" },
];

const NasaInternships = () => {
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
          🧑‍🚀 Nasa Internships
        </h1>

        <h2 className="leading-6 text-sm md:text-base xl:text-lg text-center">
          In 2023, I had the privilege of working two internships for NASA at their Glenn Research Center. I worked on
          many projects during my time there, but one of my most notable projects was developing software for an
          experimental lunar power delivery system that will part of the Artemis program. It is a great source of pride
          and accomplishment for me that the engineers who are developing the power delivery system actively rely on and
          are very satisfied with the software I made for them.
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

export default NasaInternships;
