import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe } from "vitest";
import Title from "./Title";

/**
 * @vitest-environment jsdom
 */

describe("Title Component", () => {
  test("should render the correct title with the correct tag", () => {
    render(<Title />);
    expect(screen.getByRole("heading")).toHaveTextContent("Welcome");
  });
});
