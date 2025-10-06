import AutoScroll from "embla-carousel-auto-scroll";

import FadeUp from "@/components/FadeUp";
import { Carousel, CarouselContent, CarouselItem } from "@/components-shadcn/carousel";

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
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 md:gap-12 gap-8 xl:gap-24 items-center pt-24 sm:pt-0 justify-end sm:justify-center h-[100vh] sm:p-12 p-4">
      <div className="flex flex-col items-center gap-4 justify-center text-center">
        <FadeUp duration={0.5}>
          <h1 className="scroll-m-20 text-center text-2xl md:text-3xl xl:text-4xl font-extrabold text-balance">
            Hi, I'm Michael Stich
          </h1>
        </FadeUp>
        <FadeUp delay={0.75} duration={0.5} className="max-w-[500px]">
          <h2 className="scroll-m-20 text-lg md:text-xl xl:text-2xl font-semibold tracking-tight first:mt-0">
            A software engineer with 3 years of professional work experience.
          </h2>
        </FadeUp>

        <FadeUp delay={1.5} duration={0.5} className="max-w-[550px]">
          <h3 className="leading-6 text-xs md:text-sm xl:text-base">
            I build and scale applications for large user bases across the entire stack: frontend, backend, and cloud.
            I'm very passionate about solving complex problems and working with extraordinary people.
          </h3>
        </FadeUp>
      </div>

      <div className="flex items-center justify-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-[300px] md:max-w-[500px] lg:max-w-[800px]"
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
      </div>
    </div>
  );
};

export default NasaInternships;
