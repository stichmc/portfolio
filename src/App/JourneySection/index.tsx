import FadeUp from "@/components/FadeUp";
import TimeLine from "./Timeline";

const JourneySection = () => {
  return (
    <FadeUp delay={2} duration={0.5}>
      <div className="w-full h-full flex items-center justify-start flex-col">
        <div className="scroll-m-20 border-b-2 border-card-foreground pb-2 text-xl md:text-2xl xl:text-3xl font-bold w-full xl:w-3/4 text-center">
          My Journey
        </div>
        <TimeLine />
      </div>
    </FadeUp>
  );
};

export default JourneySection;
