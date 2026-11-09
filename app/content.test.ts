import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { experiences } from "./content";

const publicDir = join(__dirname, "..", "public");

describe("experiences", () => {
  it("is not empty", () => {
    expect(experiences.length).toBeGreaterThan(0);
  });

  it("has unique company/period keys (used as React keys)", () => {
    const keys = experiences.map((e) => `${e.company}-${e.period}`);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it.each(experiences)("$company has a company name, technologies and highlights", (e) => {
    expect(e.company.trim()).not.toBe("");
    expect(e.technologies.length).toBeGreaterThan(0);
    expect(e.highlights.length).toBeGreaterThan(0);
  });

  it.each(experiences)("$company has no duplicate technologies or highlights", (e) => {
    expect(new Set(e.technologies).size).toBe(e.technologies.length);
    expect(new Set(e.highlights).size).toBe(e.highlights.length);
  });

  it.each(experiences)("$company has a well-formed period", (e) => {
    expect(e.period).toMatch(/^\d{4} — (\d{4}|Present)$/);
    const [start, end] = e.period.split(" — ");
    if (end !== "Present") {
      expect(Number(end)).toBeGreaterThanOrEqual(Number(start));
    }
  });

  it("is ordered from most recent to oldest", () => {
    const starts = experiences.map((e) => Number(e.period.slice(0, 4)));
    expect(starts).toEqual([...starts].sort((a, b) => b - a));
  });

  it.each(experiences.filter((e) => e.logo))("$company logo exists in /public", (e) => {
    expect(e.logo).toMatch(/^\//);
    expect(existsSync(join(publicDir, e.logo as string))).toBe(true);
  });
});
