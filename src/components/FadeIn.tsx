import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const FadeIn = ({ children }: Props) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);
  return (
    <div
      className={` ${fadeIn ? "opacity-100 duration-1000" : "opacity-0 duration-500"} transition-opacity w-full h-full`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
