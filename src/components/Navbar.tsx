import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import anelloLogo from "@/assets/anello_logo.svg";
import beyondIcon from "@/assets/projects/beyond_logo.svg";

interface Props {
  isHome?: boolean;
  isEducation: boolean;
  isProjects: boolean;
}

const Navbar = ({ isHome, isEducation, isProjects }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <NavigationMenu className=" fixed top-0 p-4">
        <NavigationMenuList className="space-x-4 p-2 bg-gray-300 rounded-full bg-opacity-80">
          <NavigationMenuItem className={isHome ? "outline rounded-full" : ""}>
            <Link to={`${import.meta.env.BASE_URL}home`} className={navigationMenuTriggerStyle()}>
              <p className="text-lg font-bold">Home</p>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className={isEducation ? "outline rounded-full" : ""}>
            <Link to={`${import.meta.env.BASE_URL}eduction`} className={navigationMenuTriggerStyle()}>
              <p className="text-lg font-bold">Eduction</p>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className={isProjects ? "outline rounded-full" : ""}>
            <NavigationMenuTrigger className="text-lg font-bold">Projects</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 p-2 w-[280px] sm:w-[500px] lg:w-[600px] sm:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                    to={`${import.meta.env.BASE_URL}projects/anello`}
                  >
                    <img className="h-14 w-14" src={anelloLogo} />
                    <div className="mb-2 mt-4 text-lg font-medium">Anello</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      A messaging webapp with video conferencing capabilities
                    </p>
                  </Link>
                </li>
                <li className="row-span-3">
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                    to={`${import.meta.env.BASE_URL}projects/beyond`}
                  >
                    <img className="h-14 w-14" src={beyondIcon} />
                    <div className="mb-2 mt-4 text-lg font-medium">Beyond</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      A 2D pixel adventure videogame made in Unity
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    to={`${import.meta.env.BASE_URL}projects/hackcu-sattrack`}
                  >
                    <div className="font-medium">HackCU 2024 Sat-Track</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      A real-time satellite telemetry tracker
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    to={`${import.meta.env.BASE_URL}projects/speech-to-text`}
                  >
                    <div className="font-medium">Speech-to-text Translator</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      A deep learning-based speech-to-text translator
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    to={`${import.meta.env.BASE_URL}projects/time-escapement`}
                  >
                    <div className="font-medium">Time Escapement</div>
                    <p className="text-sm leading-tight text-muted-foreground">A 17th-century time escapement</p>
                  </Link>
                </li>
                <li>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    to={`${import.meta.env.BASE_URL}projects/doom`}
                  >
                    <div className="font-medium">C++ Console Based Game</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      A 2D videogame inspired by Space Invaders and DOOM
                    </p>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
