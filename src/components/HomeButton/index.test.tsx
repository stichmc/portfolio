import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import HomeButton from ".";

test("HomeButton", () => {
  const rendering = render(<HomeButton />);
  expect(rendering).toMatchSnapshot();
});
