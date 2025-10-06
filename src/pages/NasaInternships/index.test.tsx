import { expect, test, beforeEach, vi } from "vitest";
import { render } from "@testing-library/react";
import FirstNasaInternship from ".";

beforeEach(() => {
  const mockIntersectionObserver = vi.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test("FirstNasaInternship", () => {
  const rendering = render(<FirstNasaInternship />);
  expect(rendering).toMatchSnapshot();
});
