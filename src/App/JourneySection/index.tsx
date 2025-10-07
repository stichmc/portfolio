import TimeLine from "./Timeline";

const JourneySection = () => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-start flex-col">
        <div className="scroll-m-20 border-b-2 border-card-foreground pb-2 md:text-xl xl:text-2xl font-bold w-full xl:w-3/4 text-center">
          My Software Engineering Journey
        </div>
        <TimeLine />
      </div>
    </>
  );
};

export default JourneySection;
