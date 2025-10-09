import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import AutoScroll from "embla-carousel-auto-scroll";

import FadeUp from "@/components/FadeUp";
import { Carousel, CarouselContent, CarouselItem } from "@/components-shadcn/carousel";
import HomeButton from "@/components/HomeButton";
import { Separator } from "@/components-shadcn/separator";

import dashboardImage from "@/assets/anello-pictures/anello-dashboard.png";
import groupChatImage from "@/assets/anello-pictures/anello-groupchat.png";
import profileImage from "@/assets/anello-pictures/anello-profile.png";

export const carouselImageArray = [
  { src: dashboardImage, alt: "anello-dashboard" },
  { src: groupChatImage, alt: "anello-group-chat" },
  { src: profileImage, alt: "anello-profile-settings" },
];

const Anello = () => {
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
        <h1 className="scroll-m-20 text-2xl md:text-3xl xl:text-4xl font-extrabold text-balance">🔥 Anello</h1>

        <div className="max-w-[800px]">
          <h2 className="leading-7 text-sm md:text-base xl:text-lg">
            Anello is a chat app I built in late 2023, featuring real-time text, group chats, and voice/video calls. The
            main challenge was implementing WebRTC for peer-to-peer media streams, which deepened my understanding of
            real-time communication protocols.
          </h2>
        </div>

        <Separator className="my-2" />

        <div className="max-w-[800px] w-full">
          <h3 className="scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight">Key Features</h3>
          <ul className="list-disc list-inside my-2 text-sm md:text-base xl:text-lg space-y-1">
            <li>Real-time messaging and group chat functionality.</li>
            <li>High-quality, low-latency voice and video calls using WebRTC.</li>
            <li>User profiles and settings customization.</li>
            <li>Secure peer-to-peer connections for all media streams.</li>
          </ul>
        </div>

        <Separator className="my-2" />

        <div className="max-w-[800px] w-full">
          <h3 className="scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight">Tech Stack</h3>
          <p className="text-sm md:text-base xl:text-lg my-2">
            React, TypeScript, Node.js, Express, Socket.IO for signaling, WebRTC, and Tailwind CSS.
          </p>
        </div>
      </FadeUp>

      <div className="flex items-center justify-center pt-20 sm:pt-0 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] aspect-video">
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

export default Anello;
