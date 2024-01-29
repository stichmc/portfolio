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

const projectComponents: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Speech-to-text translator",
    href: `${import.meta.env.BASE_URL}projects/speech-to-text`,
    description: "A real-time deep learning-based speech-to-text translator.",
  },
  {
    title: "Time Escapement",
    href: `${import.meta.env.BASE_URL}projects/time-escapement`,
    description: "A 17th-century time escapement clock.",
  },
  {
    title: "C++ Console Based Game",
    href: `${import.meta.env.BASE_URL}projects/doom`,
    description: "A 2D video game entirely in C++, inspired by DOOM.",
  },
  {
    title: "Wheel Wizard",
    href: `${import.meta.env.BASE_URL}projects/wheel-wizard`,
    description:
      "A used-car website for browsing, posting, and purchasing used cars.",
  },
];

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
            <NavigationMenuTrigger className="text-lg font-bold">
              Projects
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[300px] sm:w-[500px] lg:w-[600px] sm:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      to={`${import.meta.env.BASE_URL}projects/synergy`}
                    >
                      <img
                        className="h-14 w-14"
                        src={`${import.meta.env.BASE_URL}synergy_logo.svg`}
                      />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Synergy
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        A more trustworthy, reliable, and secure webapp for
                        collaboration and communication.
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
                      <img
                        className="h-14 w-14"
                        src={`${import.meta.env.BASE_URL}beyond_logo.svg`}
                      />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Beyond
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        A 2D pixel adventure videogame made in the Unity game engine.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem key="1" title="test" href={`${import.meta.env.BASE_URL}projects/time-escapement`}></ListItem>
                {projectComponents.map((projectComponent) => (
                  <ListItem
                    key={projectComponent.title}
                    title={projectComponent.title}
                    href={projectComponent.href}
                  >
                    {projectComponent.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
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
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
