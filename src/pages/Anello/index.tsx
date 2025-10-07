import AutoScroll from "embla-carousel-auto-scroll";

import FadeUp from "@/components/FadeUp";
import { Carousel, CarouselContent, CarouselItem } from "@/components-shadcn/carousel";
import HomeButton from "@/components/HomeButton";

import dashboardImage from "@/assets/anello-pictures/anello-dashboard.png";
import groupChatImage from "@/assets/anello-pictures/anello-groupchat.png";
import profileImage from "@/assets/anello-pictures/anello-profile.png";

export const carouselImageArray = [
  { src: dashboardImage, alt: "anello-dashboard" },
  { src: groupChatImage, alt: "anello-group-chat" },
  { src: profileImage, alt: "anello-profile-settings" },
];

const Anello = () => {
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 md:gap-12 gap-8 xl:gap-24 items-center pt-24 sm:pt-0 justify-end sm:justify-center h-[100vh] sm:p-12 p-4">
      <HomeButton />

      <div className="flex flex-col items-center gap-4 justify-center text-center">
        <FadeUp duration={0.5}>
          <h1 className="scroll-m-20 text-center text-2xl md:text-3xl xl:text-4xl font-extrabold text-balance">
            🔥 Anello
          </h1>
        </FadeUp>

        <FadeUp delay={0.75} duration={0.5} className="max-w-[800px]">
          <h2 className="leading-6 text-sm md:text-base xl:text-lg">
            I decided to put some of my skills to the test and created a chat app from scratch in late 2023. Anello can
            text, group text, call, video call. The biggest technical challenge with the project was understanding how
            to use the WebRTC to enable such powerful features on my webapp.
          </h2>
        </FadeUp>
      </div>

      <div className="flex items-center justify-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-[300px] md:max-w-[500px] lg:max-w-[700px]"
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

export default Anello;
