import { Home } from "lucide-react";

import { Button } from "@/components-shadcn/button";
import { useNavigate } from "react-router";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components-shadcn/tooltip";

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-4 right-4 z-50">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" onClick={() => navigate("/")}>
            <Home className="h-[1.2rem] w-[1.2rem] scale-100" />
            <span className="sr-only">Go Home</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Go Home</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default HomeButton;
