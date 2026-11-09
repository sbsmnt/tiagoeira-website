import { describe, expect, it } from "vitest";
import robots from "./robots";

describe("robots", () => {
  const result = robots();
  const rules = Array.isArray(result.rules) ? result.rules : [result.rules];

  it("points to the sitemap", () => {
    expect(result.sitemap).toBe("https://www.tiagoeira.com/sitemap.xml");
  });

  it("allows search engines and link-preview bots", () => {
    const allowed = rules.find((r) => r.allow === "/");
    expect(allowed?.userAgent).toEqual(
      expect.arrayContaining(["Googlebot", "Bingbot", "LinkedInBot", "Twitterbot"]),
    );
  });

  it("disallows every other crawler", () => {
    expect(rules).toContainEqual({ userAgent: "*", disallow: "/" });
  });

  it("lists the wildcard rule last", () => {
    expect(rules.at(-1)?.userAgent).toBe("*");
  });
});
