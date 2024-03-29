import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center p-4">
      <NavigationMenu>
        <NavigationMenuList className="sm:flex sm:space-x-4 flex-col sm:flex-row items-center">
          <NavigationMenuItem>
            <Link to={`${import.meta.env.BASE_URL}home`}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <p className="text-lg font-bold">Home</p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to={`${import.meta.env.BASE_URL}education`}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <p className="text-lg font-bold">Education</p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to={`${import.meta.env.BASE_URL}work-experience`}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <p className="text-lg font-bold">Work Experience</p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-lg font-bold">Projects</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[300px] sm:w-[500px] lg:w-[600px] sm:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      to={`${import.meta.env.BASE_URL}projects/synergy`}
                    >
                      <img className="h-14 w-14" src={`${import.meta.env.BASE_URL}synergy_logo.svg`} />
                      <div className="mb-2 mt-4 text-lg font-medium">Synergy</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        A more trustworthy, reliable, and secure webapp for collaboration and communication.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      to={`${import.meta.env.BASE_URL}projects/beyond`}
                    >
                      <img className="h-14 w-14" src={`${import.meta.env.BASE_URL}beyond_logo.svg`} />
                      <div className="mb-2 mt-4 text-lg font-medium">Beyond</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        A 2D pixel adventure videogame made in the Unity game engine.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      to={`${import.meta.env.BASE_URL}projects/hackcu-sattrack`}
                    >
                      <div className="font-medium">HackCU 2024 Sat-Track</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        A webapp that tracks satellites in real-time and displays them on a 3D render of Earth.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      to={`${import.meta.env.BASE_URL}projects/speech-to-text`}
                    >
                      <div className="font-medium">Speech-to-text Translator</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        A real-time deep learning-based speech-to-text translator.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      to={`${import.meta.env.BASE_URL}projects/time-escapement`}
                    >
                      <div className="font-medium">Time Escapement</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        A 17th-century time escapement clock.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      to={`${import.meta.env.BASE_URL}projects/doom`}
                    >
                      <div className="font-medium">C++ Console Based Game</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        A 2D video game entirely in C++, inspired by DOOM.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
