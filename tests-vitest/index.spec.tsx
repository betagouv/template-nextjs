import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../src/app/page";
import React from "react";

test("Has index page", () => {
  render(<Page />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Template" })
  ).toBeDefined();
});
