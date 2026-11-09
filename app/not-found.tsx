import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found — Tiago Eira",
  description: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="shell hero__content">
          <p className="eyebrow">404</p>
          <h1>Page not found</h1>
          <p className="hero__role">Sorry, this path does not exist.</p>
          <div className="not-found__actions">
            <Link className="button button--outline" href="/">
              Go back home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
