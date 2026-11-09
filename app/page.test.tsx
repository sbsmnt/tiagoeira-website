import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { experiences } from "./content";
import Home from "./page";

describe("Home page", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("renders the hero heading and role", () => {
    expect(screen.getByRole("heading", { level: 1, name: "Tiago Eira" })).toBeInTheDocument();
    expect(screen.getByText("Senior Software Developer & Tech Lead")).toBeInTheDocument();
  });

  it("renders every section", () => {
    for (const id of ["top", "about", "experience", "contact"]) {
      expect(document.getElementById(id)).not.toBeNull();
    }
  });

  it("has in-page links that point to existing sections", () => {
    const hashLinks = screen
      .getAllByRole("link")
      .map((a) => a.getAttribute("href") ?? "")
      .filter((href) => href.startsWith("#"));
    expect(hashLinks.length).toBeGreaterThan(0);
    for (const href of hashLinks) {
      expect(document.getElementById(href.slice(1)), href).not.toBeNull();
    }
  });

  it("renders one article per experience, in order", () => {
    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(experiences.length);
    articles.forEach((article, i) => {
      const exp = experiences[i];
      expect(within(article).getByRole("heading", { level: 3 })).toHaveTextContent(exp.company);
      expect(within(article).getByText(exp.period)).toBeInTheDocument();
      expect(within(article).getByRole("list", { name: "Technologies" }).children).toHaveLength(
        exp.technologies.length,
      );
      for (const tech of exp.technologies) {
        expect(within(article).getByText(tech)).toBeInTheDocument();
      }
    });
  });

  it("renders company logos with alt text", () => {
    for (const exp of experiences.filter((e) => e.logo)) {
      expect(screen.getByAltText(`${exp.company} logo`)).toHaveAttribute("src", exp.logo);
    }
  });

  it("links to email and GitHub", () => {
    expect(screen.getByRole("link", { name: "Let's talk" })).toHaveAttribute(
      "href",
      "mailto:tiago.eira@gmail.com",
    );
    const github = screen.getByRole("link", { name: "Tiago Eira on GitHub" });
    expect(github).toHaveAttribute("href", "https://github.com/sbsmnt");
    expect(github).toHaveAttribute("target", "_blank");
    expect(github).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
  });

  it("shows the current year in the footer", () => {
    expect(screen.getByText(`© ${new Date().getFullYear()} Tiago Eira`)).toBeInTheDocument();
  });
});
