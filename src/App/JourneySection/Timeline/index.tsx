import { ReactNode } from "react";
import { useNavigate } from "react-router";
import { Briefcase, GraduationCap, Laptop, Lightbulb, MessageCircleMore, PcCase } from "lucide-react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useTheme } from "@/components-shadcn/theme-provider";
import { Button } from "@/components-shadcn/button";
import useIsMobileView from "@/hooks/useIsMobileView";

import nasaLogo from "@/assets/nasa.svg";
import anelloLogo from "@/assets/anello.png";
import expoLogo from "@/assets/cu_expo.jpg";
import hackCuLogo from "@/assets/hack_cu_logo.png";
import ringyLogo from "@/assets/ringy_logo.png";
import cuBoulderLogo from "@/assets/cu_logo.png";

interface EducationContent {
  name: string;
  accomplishment: string;
  location: string;
  description: string;
}
interface ProjectContent {
  name: string;
  role: string;
  description: string;
}
interface WorkContent {
  name: string;
  role: string;
  location: string;
  description: string;
}
interface TimeLineElement {
  id: string;
  date: string;
  icon: ReactNode;
  type: "work" | "project" | "education";
  image: string;
  learnMoreLink: string;
  content: EducationContent | ProjectContent | WorkContent;
}

const timeLineData: TimeLineElement[] = [
  {
    id: "first-nasa-internship",
    date: "January 2023 - May 2023",
    icon: <Briefcase />,
    type: "work",
    content: {
      name: "NASA - National Aeronautics and Space Administration",
      role: "Software Engineer Intern",
      location: "Remote",
      description:
        "During my first internship at NASA, I refactored the NPSS Power System Library, a simulation framework for modeling aircraft propulsion and power systems.",
    } as WorkContent,
    image: nasaLogo,
    learnMoreLink: "/nasa-internships",
  },
  {
    id: "engineering-expo",
    date: "February 2023 - April 2023",
    icon: <Lightbulb />,
    type: "project",
    content: {
      name: "CU Engineering Expo 2023",
      role: "Team Lead",
      description:
        "Led a team of four to build a 17th-century time escapement for our physics professor’s visual teaching aid.",
    } as ProjectContent,
    image: expoLogo,
    learnMoreLink: "/cu-expo",
  },
  {
    id: "second-nasa-internship",
    date: "June 2023 - August 2023",
    icon: <Briefcase />,
    type: "work",
    content: {
      name: "NASA - National Aeronautics and Space Administration",
      role: "Software Engineer Intern",
      location: "Cleveland, Ohio",
      description:
        "During my second internship at NASA, I developed control software for a prototype Artemis lunar power grid, a system designed to distribute and manage electrical power on the Lunar Gateway and the lunar surface.",
    } as WorkContent,
    image: nasaLogo,
    learnMoreLink: "/nasa-internships",
  },
  {
    id: "anello-project",
    date: "December 2023",
    icon: <MessageCircleMore />,
    type: "project",
    content: {
      name: "Anello Chat App",
      role: "Sole Developer",
      description:
        "I built a full-featured chat app supporting text, group text, voice, and video calls, drawing inspiration from modern VOIP and collaboration tools such as Discord, Slack, and Zoom.",
    } as ProjectContent,
    image: anelloLogo,
    learnMoreLink: "/anello",
  },
  {
    id: "hack-cu",
    date: "March 2024",
    icon: <Laptop />,
    type: "project",
    content: {
      name: "HackCU 10 Hackathon",
      role: "Team Member",
      description: "Our team of 3 developed a real-time satellite telemetry tracker for the HackCU 10 hackathon event.",
    } as ProjectContent,
    image: hackCuLogo,
    learnMoreLink: "/hack-cu",
  },
  {
    id: "ringy",
    date: "July 2024 - Present",
    icon: <Briefcase />,
    type: "work",
    content: {
      name: "Ringy",
      role: "Software Engineer",
      location: "Denver, Colorado",
      description:
        "As a Software Engineer at Ringy, I design responsive interfaces, maintain scalable backend services, and drive the development of AI-powered solutions that boost performance, reliability, and customer success.",
    } as WorkContent,
    image: ringyLogo,
    learnMoreLink: "/ringy",
  },
  {
    id: "cu-boulder",
    date: "May 2025",
    icon: <GraduationCap />,
    type: "education",
    content: {
      name: "University Of Colorado Boulder",
      accomplishment: "BS In Computer Science",
      location: "Boulder, Colorado",
      description:
        "Earning my degree from CU Boulder was an enriching experience where I built lifelong friendships and learned from brilliant professors who are or were in the software engineering field.",
    } as EducationContent,
    image: cuBoulderLogo,
    learnMoreLink: "/cu-boulder",
  },
];

const TimeLine = () => {
  const { theme } = useTheme();
  const isMobileView = useIsMobileView();
  const navigate = useNavigate();

  const colorToUse = theme === "dark" ? "white" : "black";
  const inverseColorToUse = theme === "dark" ? "black" : "white";

  return (
    <VerticalTimeline lineColor={colorToUse}>
      {timeLineData.map((entry, index) => (
        <VerticalTimelineElement
          key={`${entry.id}-${index}`}
          className="vertical-timeline-element--work"
          contentStyle={{ background: colorToUse, color: inverseColorToUse }}
          contentArrowStyle={{ borderRight: `7px solid ${colorToUse}` }}
          date={entry.date}
          dateClassName={theme === "dark" ? "text-white" : "text-black"}
          iconStyle={{ background: colorToUse, color: inverseColorToUse, boxShadow: `0 0 0 4px ${colorToUse}` }}
          icon={entry.icon}
        >
          <div className="flex flex-col gap-2 items-center md:items-start justify-center">
            {entry.type === "work" && (
              <>
                <div className="flex flex-col sm:flex-row gap-2 items-center">
                  <img src={entry.image} className="md:w-24 md:h-24 w-20 h-20 rounded-full" />
                  <div>
                    <div className="vertical-timeline-element-title font-bold text-sm sm:text-base md:text-lg">
                      {(entry.content as WorkContent).name}
                    </div>
                    <div className="vertical-timeline-element-subtitle font-semibold text-xs sm:text-sm md:text-base">
                      {(entry.content as WorkContent).role} - {(entry.content as WorkContent).location}
                    </div>
                    {isMobileView && <div className="text-xs sm:text-sm">{entry.date}</div>}
                  </div>
                </div>
                <div className="text-xs sm:text-sm md:text-base">{(entry.content as WorkContent).description}</div>
                <Button
                  style={{
                    backgroundColor: inverseColorToUse,
                    color: colorToUse,
                  }}
                  className="text-xs sm:text-sm"
                  onClick={() => navigate(entry.learnMoreLink)}
                >
                  Learn More
                </Button>
              </>
            )}

            {entry.type === "project" && (
              <>
                <div className="flex flex-col sm:flex-row gap-2 items-center">
                  <img src={entry.image} className="md:w-24 md:h-24 w-20 h-20 rounded-full" />
                  <div>
                    <div className="vertical-timeline-element-title font-bold text-sm sm:text-base md:text-lg">
                      {(entry.content as ProjectContent).name}
                    </div>
                    <div className="vertical-timeline-element-subtitle font-semibold text-xs sm:text-sm md:text-base">
                      {(entry.content as ProjectContent).role}
                    </div>
                    {isMobileView && <div className="text-xs sm:text-sm">{entry.date}</div>}
                  </div>
                </div>
                <div className="text-xs sm:text-sm md:text-base">{(entry.content as ProjectContent).description}</div>
                <Button
                  style={{
                    backgroundColor: inverseColorToUse,
                    color: colorToUse,
                  }}
                  className="text-xs sm:text-sm"
                  onClick={() => navigate(entry.learnMoreLink)}
                >
                  Learn More
                </Button>
              </>
            )}

            {entry.type === "education" && (
              <>
                <div className="flex flex-col sm:flex-row gap-2 items-center">
                  <img src={entry.image} className="md:w-24 w-20" />
                  <div>
                    <div className="vertical-timeline-element-title font-bold text-sm sm:text-base md:text-lg">
                      {(entry.content as EducationContent).name}
                    </div>
                    <div className="vertical-timeline-element-subtitle font-semibold text-xs sm:text-sm md:text-base">
                      {(entry.content as EducationContent).accomplishment}
                    </div>
                    <div className="text-xs sm:text-sm">Graduated {entry.date}</div>
                  </div>
                </div>
                <div className="text-xs sm:text-sm md:text-base">{(entry.content as EducationContent).description}</div>
                <Button
                  style={{
                    backgroundColor: inverseColorToUse,
                    color: colorToUse,
                  }}
                  className="text-xs sm:text-sm"
                  onClick={() => navigate(entry.learnMoreLink)}
                >
                  Learn More
                </Button>
              </>
            )}
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default TimeLine;
