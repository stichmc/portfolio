import { expect, test, beforeEach, vi } from "vitest";
import { render } from "@testing-library/react";
import Ringy from ".";

beforeEach(() => {
  const mockIntersectionObserver = vi.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test("Ringy", () => {
  const rendering = render(<Ringy />);
  expect(rendering).toMatchSnapshot();
});
