import { beforeEach, expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import FadeUp from ".";

beforeEach(() => {
  const mockIntersectionObserver = vi.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test("FadeUp", () => {
  const rendering = render(<FadeUp children={<div>hi</div>} />);
  expect(rendering).toMatchSnapshot();
});
