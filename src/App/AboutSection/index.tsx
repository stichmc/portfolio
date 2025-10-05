import { Code, Github, Linkedin, Mails } from "lucide-react";
import { div as MotionDiv } from "motion/react-client";

import FadeUp from "@/components/FadeUp";
import { Button } from "@/components-shadcn/button";
import { ButtonGroup } from "@/components-shadcn/button-group";

import HeadShotDisplay from "./HeadShotDisplay";

export interface AboutSectionProps {
  headShotImage: string;
}

const AboutSection = ({ headShotImage }: AboutSectionProps) => {
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-24 items-center justify-center h-[80vh] max-w-[1500px] sm:p-12 p-4">
      <div className="flex flex-col items-center gap-4 justify-center text-center">
        <FadeUp duration={0.5}>
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold text-balance">
            <MotionDiv
              style={{ display: "inline-block", paddingRight: 12 }}
              animate={{
                rotate: [0, 14, -8, 14, -4, 10, 0],
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              👋
            </MotionDiv>
            Hi, I'm Michael Stich
          </h1>
        </FadeUp>

        <FadeUp delay={0.75} duration={0.5} className="max-w-[500px]">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
            A software engineer with 3 years of professional work experience.
          </h2>
        </FadeUp>

        <FadeUp delay={1.5} duration={0.5} className="max-w-[550px]">
          <ButtonGroup>
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 sm:text-lg"
              onClick={() => window.open("mailto:mcstich@outlook.com")}
            >
              <Mails /> Email
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 sm:text-lg"
              onClick={() => window.open("https://linkedin.com/in/mcstich/", "_blank")}
            >
              <Linkedin /> LinkedIn
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 sm:text-lg"
              onClick={() => window.open("https://github.com/stichmc/", "_blank")}
            >
              <Github /> Github
            </Button>

            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 sm:text-lg"
              onClick={() => window.open("https://github.com/stichmc/portfolio/", "_blank")}
            >
              <Code /> Source Code
            </Button>
          </ButtonGroup>
        </FadeUp>

        <FadeUp delay={1.5} duration={0.5} className="max-w-[550px]">
          <h3 className="leading-6">
            I build and scale applications for large user bases across the entire stack: frontend, backend, and cloud.
            I'm very passionate about solving complex problems and working with extraordinary people.
          </h3>
        </FadeUp>
      </div>

      <div className="flex items-center justify-center">
        <HeadShotDisplay headShotImage={headShotImage} />
      </div>
    </div>
  );
};

export default AboutSection;
