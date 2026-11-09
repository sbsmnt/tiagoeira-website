import { describe, expect, it } from "vitest";
import sitemap from "./sitemap";

describe("sitemap", () => {
  it("contains the home page with top priority", () => {
    expect(sitemap()).toEqual([
      expect.objectContaining({ url: "https://www.tiagoeira.com", priority: 1 }),
    ]);
  });
});
