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
    title: "Beyond Game Engine",
    href: "/projects/beyond-engine",
    description: "A 3D video game engine utilizing the Vulkan graphics API.",
  },
  {
    title: "Speech-to-text translator",
    href: "/projects/speech-to-text",
    description: "A real-time deep learning-based speech-to-text translator.",
  },
  {
    title: "Time Escapement",
    href: "/projects/time-escapement",
    description: "A 17th-century time escapement clock.",
  },
  {
    title: "C++ Console Based Game",
    href: "/projects/doom",
    description: "A 2D video game entirely in C++, inspired by DOOM.",
  },
  {
    title: "Wheel Wizard",
    href: "/projects/wheel-wizard",
    description:
      "A used-car website for browsing, posting, and purchasing used cars.",
  },
];

export default function Navbar() {
  return (
    <div className="flex justify-center p-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/home">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <p className="text-lg font-bold">Home</p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/education">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <p className="text-lg font-bold">Education</p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/work-experience">
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
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      to="/projects/synergy"
                    >
                      <img className="h-14 w-14" src="/synergy_logo.svg" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Synergy
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        A more trustworthy, reliable, and secure platform for
                        collaboration and communication.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
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
      <hr className="border-b my-2" />
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
