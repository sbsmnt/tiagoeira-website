export type Experience = {
  company: string;
  period: string;
  logo?: string;
  technologies: string[];
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "Zizr",
    period: "2025 — Present",
    logo: "/images/company/zizr-logo.svg",
    technologies: [
      "TypeScript",
      "React",
      "GraphQL",
      "REST",
      "React Router",
      "Shopify Polaris",
      "Cloudflare Workers",
      "Azure",
    ],
    highlights: [
      "Work as the primary frontend/product engineer alongside the CTO, owning architecture and implementation across customer-facing Shopify applications and internal retailer tooling",
      "Develop and maintain public Shopify App Store applications using React, TypeScript and Node.js, integrating with Shopify APIs, App Bridge, Polaris and webhooks.",
      "Own the full app distribution lifecycle, including configuration, OAuth and permissions, Shopify Partner setup, App Store submissions, review feedback, release preparation and ongoing updates.",
      "Build internal tools for retailer analytics and targeted email-campaign management",
      "Integrate AI coding agents into development workflows to accelerate implementation, iteration and time to market",
    ],
  },
  {
    company: "designenlassen",
    period: "2024 — 2025",
    logo: "/images/company/DL_logo_blue.png",
    technologies: ["TypeScript", "React", "Node.js", "Next JS", "REST API", "AWS", "Figma"],
    highlights: [
      "Modernised a German design-services marketplace, restructuring the platform and migrating its PHP frontend to React with Next.js.",
      "Led the development team and reviewed code to maintain quality, consistency and maintainability.",
      "Contributed to technical direction and coordinated development priorities across the team.",
    ],
  },
  {
    company: "additiv",
    period: "2021 — 2024",
    logo: "/images/company/additiv-temenos-logo-gray.svg",
    technologies: ["TypeScript", "React", "Micro-frontends", "bit.dev", "REST API", "Azure"],
    highlights: [
      "Migrated a React wealth-management application to a micro-frontend architecture using Bit.",
      "Led the frontend development team, reviewed code and supported engineers with technical guidance.",
      "Supported hiring through CV screening and technical interviews.",
      "Built mortgage and credit applications for the Austrian market.",
      "Worked across frontend architecture, delivery and team coordination in a complex financial-services environment.",
    ],
  },
  {
    company: "Insparya",
    period: "2019 — 2021",
    logo: "/images/company/insparya_logo.svg",
    technologies: [
      "JavaScript",
      "React",
      "Node.js",
      "PHP",
      "MySQL",
      "REST API",
      "Android",
      "iOS",
      "AWS",
    ],
    highlights: [
      "Built a React affiliate-management application that reduced reporting effort for customer-care and sales teams.",
      "Enhanced mobile applications and resolved recurring bugs, improving reliability and user experience.",
      "Delivered online appointment scheduling and improved website performance and usability.",
    ],
  },
  {
    company: "Tekever",
    period: "2018 — 2019",
    logo: "/images/company/tekever_logo_red.png",
    technologies: ["PHP", "JavaScript", "React", "MySQL", "CSS", "REST API", "GCP"],
    highlights: [
      "Built healthcare applications, integrated REST APIs, coordinated delivery with the client and managed Google Cloud Platform resources.",
    ],
  },
  {
    company: "Smartlinks",
    period: "2017 — 2018",
    logo: "/images/company/logo-smartlinks.png",
    technologies: ["PHP", "JavaScript", "React", "MySQL", "CSS", "REST API"],
    highlights: [
      "Built internal React tooling, performance-focused web applications, custom WordPress solutions and e-commerce integrations across WooCommerce, OpenCart and Magento.",
    ],
  },
  {
    company: "DevBox",
    period: "2016 — 2017",
    logo: "/images/company/logo-devbox.png",
    technologies: [
      "PHP",
      "JavaScript",
      "MySQL",
      "CSS",
      "CodeIgniter",
      "REST API",
      "Angular",
      "Ionic",
    ],
    highlights: [
      "Developed simple, client-friendly content-management systems.",
      "Integrated REST APIs and built e-commerce remarketing web applications.",
    ],
  },
  {
    company: "Quinta Digital",
    period: "2015 — 2016",
    logo: "/images/company/logo-quinta-digital.png",
    technologies: ["JavaScript", "PHP", "MySQL", "CSS"],
    highlights: [
      "Developed responsive websites and JavaScript features.",
      "Optimised databases and created WordPress plugins and custom themes.",
    ],
  },
];
