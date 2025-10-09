import { expect, test, beforeEach, vi } from "vitest";
import { render } from "@testing-library/react";
import NasaInternships from ".";

beforeEach(() => {
  const mockIntersectionObserver = vi.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test("NasaInternships", () => {
  const rendering = render(<NasaInternships />);
  expect(rendering).toMatchSnapshot();
});
