/*
  Copyright (c) 2023-2025 Michael Stich. All Rights Reserved.

  This source code is licensed under the license found in the 
  LICENSE file in the root directory of this source tree.
*/

import { renderHook } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import useIsMobileView from "./index";

describe("useIsMobileView hook", () => {
  it("returns a boolean indicating if mobile view is active", () => {
    const { result } = renderHook(() => useIsMobileView());
    expect(typeof result.current).toBe("boolean");
  });
});
