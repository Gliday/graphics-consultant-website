export type Service = {
  title: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    title: "Branding & Identity",
    description:
      "Logos, wordmarks and full identity systems built to hold up across print, digital and merchandise — grounded in a clear point of view.",
    deliverables: ["Logo & wordmark design", "Brand guidelines", "Stationery & collateral", "Merchandise & apparel"],
  },
  {
    title: "Art Direction & Campaigns",
    description:
      "Concept-to-execution creative direction for FMCG, finance and lifestyle brands — key visuals, BTL assets and campaign systems that hold together across every touchpoint.",
    deliverables: ["Campaign concepts & key visuals", "Social & digital ad sets", "BTL & experiential assets", "Art direction for shoots"],
  },
  {
    title: "UX/UI Design",
    description:
      "Research-led product and website design — from user flows and wireframes to a polished, responsive interface.",
    deliverables: ["User research & personas", "Wireframes & prototypes", "UI design systems", "Usability testing"],
  },
  {
    title: "Graphic Design & Print",
    description:
      "Posters, ads, newsletters and print collateral designed to earn attention and hold it.",
    deliverables: ["Posters & print ads", "Newsletters & editorial layout", "Packaging & POS", "Presentation design"],
  },
];

export const process = [
  {
    step: "Brief & discovery",
    description: "Understanding the goal, the audience and what success looks like before any design starts.",
  },
  {
    step: "Concept & direction",
    description: "Exploring directions and narrowing to the one that best serves the brief — not just the loudest idea.",
  },
  {
    step: "Design & refine",
    description: "Building out the chosen direction with regular check-ins, refining based on feedback.",
  },
  {
    step: "Delivery",
    description: "Final files, guidelines and support handed over in a format that's ready to use.",
  },
];
