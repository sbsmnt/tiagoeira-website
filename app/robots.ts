import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Major search engines that may crawl the site.
const searchEngines = [
  "Googlebot",
  "Bingbot",
  "DuckDuckBot",
  "Applebot",
  "YandexBot",
  "Baiduspider",
  "Slurp", // Yahoo
];

// Link-preview bots, so shared links (LinkedIn, X, Facebook, Slack…) still show the social card.
const previewBots = [
  "LinkedInBot",
  "Twitterbot",
  "facebookexternalhit",
  "Slackbot-LinkExpanding",
  "WhatsApp",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: [...searchEngines, ...previewBots], allow: "/" },
      // Everyone else, including AI-training crawlers (GPTBot, CCBot, Google-Extended, …).
      { userAgent: "*", disallow: "/" },
    ],
    sitemap: "https://www.tiagoeira.com/sitemap.xml",
  };
}
