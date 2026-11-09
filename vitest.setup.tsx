import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import type { ImgHTMLAttributes } from "react";
import { afterEach, vi } from "vitest";

afterEach(() => {
  cleanup();
});

// next/image relies on Next's runtime; render a plain <img> in tests.
vi.mock("next/image", () => ({
  default: ({
    priority: _priority,
    alt,
    ...props
  }: ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean }) => (
    // biome-ignore lint/performance/noImgElement: test stand-in for next/image
    <img alt={alt} {...props} />
  ),
}));
