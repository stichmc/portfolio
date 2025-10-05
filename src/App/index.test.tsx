import { expect, test, beforeAll, vi } from "vitest";
import { render } from "@testing-library/react";
import App from ".";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

test("App", () => {
  const rendering = render(<App />);
  expect(rendering).toMatchSnapshot();
});
