import { expect, test, vi, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import Navbar, { NavbarProps } from "./";

let props: NavbarProps;

beforeEach(() => {
  props = {
    handlePanToSection: vi.fn(),
  };
});

test("Navbar", () => {
  const rendering = render(<Navbar {...props} />);
  expect(rendering).toMatchSnapshot();
});
