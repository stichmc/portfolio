import { expect, test, beforeEach, vi } from "vitest";
import { render } from "@testing-library/react";
import AboutSection, { AboutSectionProps } from ".";

let props: AboutSectionProps;

beforeEach(() => {
  props = {
    headShotImage: "link-to-image",
  };

  const mockIntersectionObserver = vi.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test("AboutSection", () => {
  const rendering = render(<AboutSection {...props} />);
  expect(rendering).toMatchSnapshot();
});
