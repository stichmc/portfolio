import { expect, test, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import HeadShotDisplay, { HeadShotDisplayProps } from ".";

let props: HeadShotDisplayProps;

beforeEach(() => {
  props = {
    headShotImage: "link-to-image",
  };
});

test("HeadShotDisplay", () => {
  const rendering = render(<HeadShotDisplay {...props} />);
  expect(rendering).toMatchSnapshot();
});
