import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NotFound, { metadata } from "./not-found";

describe("NotFound page", () => {
  it("renders a 404 message with a link home", () => {
    render(<NotFound />);
    expect(screen.getByRole("heading", { level: 1, name: "Page not found" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Go back home" })).toHaveAttribute("href", "/");
  });

  it("is excluded from search indexing", () => {
    expect(metadata.robots).toEqual({ index: false });
  });
});
