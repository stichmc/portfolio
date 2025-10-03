import env from "@/env";
import { Button } from "@/components-shadcn/button";
import { cn } from "@/lib/utils";

export interface NavbarProps {
  selectedSection: string;
  handleSetSelectedSection: (section: "about" | "skills" | "work" | "projects") => void;
}
const Navbar = ({ selectedSection, handleSetSelectedSection }: NavbarProps) => {
  return (
    <>
      <div className="fixed h-[80px] top-0 left-0 w-screen flex flex-row items-center justify-between p-2 sm:p-4 md:p-8 lg:p-12 gap-2 z-50 bg-inherit">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">mcstich.com</h3>

        <div className="flex flex-row gap-2 items-center justify-center">
          <Button
            variant="link"
            className={cn("text-lg select-none", {
              "text-primary": selectedSection === "about",
              "text-primary/75": selectedSection !== "about",
            })}
            onClick={() => handleSetSelectedSection("about")}
          >
            About
          </Button>

          <Button
            variant="link"
            className={cn("text-lg select-none", {
              "text-primary": selectedSection === "skills",
              "text-primary/75": selectedSection !== "skills",
            })}
            onClick={() => handleSetSelectedSection("skills")}
          >
            Skills
          </Button>

          <Button
            variant="link"
            className={cn("text-lg select-none", {
              "text-primary": selectedSection === "work",
              "text-primary/75": selectedSection !== "work",
            })}
            onClick={() => handleSetSelectedSection("work")}
          >
            Work
          </Button>

          <Button
            variant="link"
            className={cn("text-lg select-none", {
              "text-primary": selectedSection === "projects",
              "text-primary/75": selectedSection !== "projects",
            })}
            onClick={() => handleSetSelectedSection("projects")}
          >
            Projects
          </Button>
        </div>

        <Button
          className="select-none"
          onClick={() => window.open(`${env.BASE_URL}/Michael_Stich_Resume.pdf`, "_blank")}
        >
          Download My Resume
        </Button>
      </div>

      {/* Account For Navbar Height */}
      <div className="mt-[80px]" />
    </>
  );
};

export default Navbar;
