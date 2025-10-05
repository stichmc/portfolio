import { ReactNode, useEffect, useRef, useState } from "react";
import { div as MotionDiv } from "motion/react-client";
import { AnimationGeneratorType, useInView } from "framer-motion";

export interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  type?: AnimationGeneratorType;
}

const FadeUp = ({ children, className = "", delay = 0, duration = 0, type = undefined }: FadeUpProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
    }
  }, [isInView, isVisible]);

  return (
    <MotionDiv
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          y: 15,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{
        delay,
        duration,
        type,
      }}
    >
      <div className={className}>{children}</div>
    </MotionDiv>
  );
};

export default FadeUp;
