export const bio = {
  intro:
    "As a Creative Designer, I specialise in UX/UI, branding, VFX and graphic design, with over 8 years of hands-on experience across agency and studio settings.",
  body: [
    "I've made it a point to bring a palpable sense of passion and enthusiasm to every project — the kind of dedication that has earned the trust of a diverse range of clients and businesses who rely on me for creative support that goes above and beyond the norm.",
    "My skill set spans multiple disciplines, blending creative prowess with technical and business acumen. My primary objective is always to deliver work that is effective, laser-focused, and tailored to a client's unique needs and goals — while staying open to new ideas and new ways of working.",
    "I'm a sharp, analytical thinker with an open-minded approach, and I excel at communication and facilitation. Challenges are fuel, propelling the work towards higher ambitions while maintaining rigorous standards.",
  ],
};

export type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
  description?: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: "Senior Creative Designer",
    org: "Dentsu Kenya",
    period: "Current",
    description:
      "Creating impactful visual designs that communicate client messages and elevate the agency's digital presence — conceptualising campaigns aligned with current trends, directing shoots and pitches, and collaborating closely with client service, freelance and sales teams.",
  },
  {
    role: "Senior Graphic Designer & Studio Co-ordinator",
    org: "Beacon of Hope",
    period: "2022–2024",
    description:
      "Led creative strategy and project management across education, social development and healthcare sectors. Directed photoshoots, ensured brand integrity, and produced an organisational anthem and documentaries on a constrained budget.",
  },
  {
    role: "Creative Media Strategist (Branding)",
    org: "Benjamin Kamoye",
    period: "Sep 2020 – Feb 2021",
    description:
      "Directed content creation — video editing, trailers and social media graphics — to elevate personal brand identity, and managed live broadcasts.",
  },
  {
    role: "Audio Editing & Marketing/Studio Assistant",
    org: "ADA Studios",
    period: "Jan – May 2018",
    description:
      "Managed studio operations, artist scheduling and audio post-production, and helped develop artist brand identities.",
  },
  {
    role: "Creative Media Strategist",
    org: "Infiniti Capital",
    period: "Sep 2014 – Sep 2016",
    description:
      "Orchestrated the ZinduaChapaa lottery campaign, managing content creation across social media, TV, print and radio in 8 dialects.",
  },
];

export const additionalHighlights = [
  "Hustlesasa Digital Incubator (2023) — digital content creation",
  "USAID Communications Workshop — development communication strategies via World Vision Kenya's Tumikia Mtoto OVC/DREAMS project",
];

export const tools = [
  "Illustrator",
  "Photoshop",
  "Adobe XD",
  "Figma",
  "Lunacy",
  "Optimal Workshop",
];
