import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe } from "vitest";
import Header from "./Header";

/**
 * @vitest-environment jsdom
 */

describe("Header Component", () => {
  test("should render anchors with className = 'nav-link'", () => {
    render(<Header />);
    const links = screen.getAllByRole("link");
    waitFor(() =>
      links.foreach(() => {
        expect(screen.getAllByRole("link")).toHaveClass("nav-link");
      })
    );
  });
});
