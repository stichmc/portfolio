import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import ThemeToggle from ".";

test("ThemeToggle", () => {
  const rendering = render(<ThemeToggle />);
  expect(rendering).toMatchSnapshot();
});
