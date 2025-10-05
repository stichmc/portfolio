/*
  Copyright (c) 2023-2025 Michael Stich. All Rights Reserved.

  This source code is licensed under the license found in the 
  LICENSE file in the root directory of this source tree.
*/

import { useEffect, useState } from "react";

const useIsMobileView = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    if (window && window.matchMedia) {
      const mediaQuery = window.matchMedia("(max-width: 640px)");

      const handleMediaQueryChange = (event: MediaQueryListEvent) => {
        setIsMobileView(event.matches);
      };

      mediaQuery.addEventListener("change", handleMediaQueryChange);

      // Initial check
      setIsMobileView(mediaQuery.matches);

      // Cleanup listener on unmount
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }
  }, []);

  return isMobileView;
};

export default useIsMobileView;
