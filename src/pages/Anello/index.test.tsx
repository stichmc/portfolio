import { expect, test, beforeEach, vi } from "vitest";
import { render } from "@testing-library/react";
import Anello from ".";

beforeEach(() => {
  const mockIntersectionObserver = vi.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test("Anello", () => {
  const rendering = render(<Anello />);
  expect(rendering).toMatchSnapshot();
});
