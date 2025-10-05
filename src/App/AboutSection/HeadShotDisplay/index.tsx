import { div as MotionDiv } from "motion/react-client";

export interface HeadShotDisplayProps {
  headShotImage: string;
}

const HeadShotDisplay = ({ headShotImage }: HeadShotDisplayProps) => {
  return (
    <div className="relative w-[400px] h-[400px]">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <MotionDiv
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 2,
            delay: 2,
          }}
          className="bg-card-foreground w-[200px] h-[200px]"
        />
      </div>
      <div className="relative z-10 flex items-center justify-center rounded-full w-full h-full overflow-hidden border-card-foreground border-4">
        <img className="w-full h-full object-cover" src={headShotImage} alt="michael-headshot" />
      </div>
    </div>
  );
};

export default HeadShotDisplay;
