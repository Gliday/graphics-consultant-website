import imagesBySlug from "./portfolio-images.json";

export type Category = "Branding" | "Campaign" | "UX/UI" | "Print";

export type ProjectImage = {
  src: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: Category;
  tier: 1 | 2;
  tools?: string[];
  summary: string;
  challenge?: string;
  approach?: string;
  outcome?: string;
  featured?: boolean;
};

function images(slug: string): ProjectImage[] {
  const entries = (imagesBySlug as Record<string, { file: string; w: number; h: number }[]>)[slug] ?? [];
  return entries.map((e) => ({
    src: `/assets/portfolio/${slug}/${e.file}`,
    width: e.w,
    height: e.h,
  }));
}

export const projects: Project[] = [
  {
    slug: "shopzetu-redesign",
    title: "Shopzetu Website Redesign",
    client: "Shopzetu",
    year: "2023",
    category: "UX/UI",
    tier: 1,
    tools: ["Adobe XD", "Figma", "Optimal Workshop"],
    summary:
      "A fashion e-commerce redesign built to compete with the ASOS and Zalando of the world — without losing what makes it distinctly Shopzetu.",
    challenge:
      "Shopzetu was struggling to stand out in a saturated fashion e-commerce market. Navigation, product discovery and mobile usability were holding back an otherwise strong catalogue, while checkout and inventory management needed to feel secure and current.",
    approach:
      "A user-centred redesign prioritising mobile-first browsing, AI-assisted product recommendations and a robust filtering system, balanced against the fashion conventions shoppers already trust — introducing new patterns without overwhelming them.",
    outcome:
      "A visually confident, easier-to-navigate storefront with a streamlined checkout and clearer category structure, positioned to compete directly with established fashion e-commerce players.",
    featured: true,
  },
  {
    slug: "uchumba-dating-app",
    title: "Uchumba Dating App & Website",
    client: "Uchumba",
    year: "2023",
    category: "UX/UI",
    tier: 1,
    tools: ["Adobe XD", "Figma", "Lunacy"],
    summary:
      "A dating app interface designed around trust and safety first, matching second.",
    challenge:
      "Uchumba needed an interface that optimises engagement and trust-building simultaneously — encouraging authentic profiles and enjoyable matching while preventing harassment, in a crowded dating-app market.",
    approach:
      "User personas and an intuitive information architecture underpinned wireframing and iterative testing, with a focus on profile personalisation, AI-assisted matching, secure communication tools and accessible support channels.",
    outcome:
      "A responsive, welcoming product experience — from sign-up through matching — designed to scale safely as the user base grows.",
    featured: true,
  },
  {
    slug: "ncba-back-to-school",
    title: "NCBA — Back to School Campaign",
    client: "NCBA",
    year: "2025",
    category: "Campaign",
    tier: 1,
    summary:
      "Reframing January school fees from a burden into a manageable step in a child's journey.",
    challenge:
      "The NCBA Back to School campaign needed to humanise the often-stressful January reopening season by repositioning financial relief as a catalyst for student success — shifting the narrative from burden to progress.",
    approach:
      "“Numbers That Matter” became the creative anchor — from school-fee loans of up to KES 1.5 million to zero transaction fees on Visa cards — grounded in authentic Kenyan family moments rather than abstract financial messaging.",
    outcome:
      "A campaign that fostered a sense of calm and preparedness for parents, cementing NCBA's role as a steady financial partner during the school year's most stressful month.",
    featured: true,
  },
  {
    slug: "ncba-junior-heroes",
    title: "NCBA — Junior Heroes Current Account",
    client: "NCBA",
    year: "2025",
    category: "Campaign",
    tier: 1,
    summary:
      "Launching Kenya's first supervised, gamified banking account for children aged 10–17.",
    challenge:
      "NCBA needed to build awareness and drive sign-ups for a first-of-its-kind children's account combining safe, parent-supervised banking with financial education.",
    approach:
      "Creative built around parental oversight, gamified financial literacy and secure debit-card access — speaking to parents and guardians as much as to the young account holders themselves.",
    outcome:
      "Strong awareness among parents, guardians and young savers, increased account sign-ups, and a clear position for NCBA as a leader in youth financial literacy.",
    featured: true,
  },
  {
    slug: "smirnoff-ice-launch",
    title: "Smirnoff ICE — Raspberry Twist & Spicy Tamarind Launch",
    client: "Smirnoff / Dentsu Kenya",
    year: "2025",
    category: "Campaign",
    tier: 1,
    summary:
      "BTL creative across digital, print and merchandise for two flagship Smirnoff ICE launches in Kenya.",
    challenge:
      "Establish Smirnoff ICE Raspberry Twist as a symbol of modern sophistication and broaden its appeal to a new generation of women, while re-anchoring Smirnoff Spicy Tamarind in a Kenyan “Urban Edge” identity for a bold, Gen Z audience — rather than its original Mexican “Día de los Muertos” aesthetic.",
    approach:
      "A full below-the-line system — key visuals, branded bags, cans, apparel and pop-up bar builds — all carrying the “We Do We” attitude through digital, print and merchandise touchpoints.",
    outcome:
      "A cohesive, wearable brand system that gave both launches a distinct shelf and social presence in the Kenyan market.",
    featured: true,
  },
  {
    slug: "tusker-na-rugby",
    title: "Tusker — #TuskerNaRugby Sponsorship",
    client: "Tusker / KBL / Dentsu Kenya",
    year: "2025",
    category: "Campaign",
    tier: 1,
    summary:
      "Turning a rugby sponsorship into an emotional symbol of Kenyan national pride.",
    challenge:
      "How could Tusker move its rugby sponsorship from a functional activation into an emotional symbol of national pride and unity?",
    approach:
      "A creative evolution spotlighting local rugby talent through culturally-infused design and storytelling — including the 2024–26 season rugby kit — forging an emotional bond rather than a transactional one.",
    outcome:
      "Increased engagement and buying intent, and recognition as both the strongest and fastest-growing brand in Kenya in 2025.",
    featured: true,
  },
  {
    slug: "tusker-ndimu",
    title: "Tusker — Beer Little Ndimu",
    client: "Tusker / KBL",
    year: "2025",
    category: "Campaign",
    tier: 2,
    summary: "A lemon-twist lifestyle campaign for Tusker Ndimu — come for the vibe, stay for the flavour.",
  },
  {
    slug: "tusker-cider",
    title: "Tusker Premium Cider — Real Connections",
    client: "Tusker / KBL",
    year: "2025",
    category: "Campaign",
    tier: 2,
    summary: "“Crisp Moments, Real Connections” — key visual and social system for Tusker Premium Cider.",
  },
  {
    slug: "dentsu-school-of-influence",
    title: "Dentsu — School of Influence Brand System",
    client: "Dentsu Kenya",
    year: "2024",
    category: "Branding",
    tier: 2,
    summary:
      "An event brand system — line-art identity, merchandise and an immersive neon-tunnel installation — for Dentsu's School of Influence.",
  },
  {
    slug: "msk-rebrand",
    title: "MSK — “I Am MSK” Rebrand",
    client: "Marketing Society of Kenya",
    year: "2024",
    category: "Branding",
    tier: 2,
    summary:
      "A geometric identity system for the Marketing Society of Kenya — wordmark, stationery and digital signage.",
  },
  {
    slug: "network-dpo",
    title: "Network› — Payments Campaign",
    client: "DPO Group",
    year: "2024",
    category: "Campaign",
    tier: 2,
    summary: "“Do It Smarter” — a social and onboarding ad set for DPO Group's Network payments platform.",
  },
  {
    slug: "standard-chartered-priority",
    title: "Standard Chartered Priority — Festive Campaign",
    client: "Standard Chartered",
    year: "2024",
    category: "Campaign",
    tier: 2,
    summary: "A six-tile festive social campaign for Standard Chartered Priority's Visa Infinite card.",
  },
  {
    slug: "dtb-bidii-chama",
    title: "DTB — Bidii Chama App Campaign",
    client: "Diamond Trust Bank",
    year: "2024",
    category: "Campaign",
    tier: 2,
    summary: "Launch creative for Bidii, DTB's digital chama-management app.",
  },
  {
    slug: "britam-majani",
    title: "Britam / Majani — MIB Akiba Halisi Campaign",
    client: "Britam",
    year: "2024",
    category: "Campaign",
    tier: 2,
    summary: "A savings-product campaign for Majani Insurance Brokers, in partnership with Britam.",
  },
  {
    slug: "autoxpress-calendar",
    title: "AutoXpress — Branded Calendar",
    client: "AutoXpress",
    year: "2025",
    category: "Print",
    tier: 2,
    summary: "Illustrated hero art for AutoXpress's 2025 branded calendar.",
  },
  {
    slug: "save-the-elephants-merch",
    title: "Save The Elephants — Bee T-Shirt Merch",
    client: "Save The Elephants",
    year: "2025",
    category: "Branding",
    tier: 2,
    summary: "Merchandise design for Save The Elephants' conservation-led apparel line.",
  },
  {
    slug: "beacon-of-hope",
    title: "Beacon of Hope — Brand & Impact Collateral",
    client: "Beacon of Hope",
    year: "2022–2024",
    category: "Branding",
    tier: 2,
    summary:
      "A 20th-anniversary identity and a wide programme of impact collateral — healthcare, technical training and partner-funded initiatives — as Senior Graphic Designer & Studio Co-ordinator.",
  },
  {
    slug: "sosoft-campaign",
    title: "SoSoft — Join the Soft Revolution",
    client: "SoSoft",
    year: "2024",
    category: "Print",
    tier: 2,
    tools: ["Illustrator", "Photoshop"],
    summary: "A poster and ad campaign for SoSoft Fabric Softener.",
  },
  {
    slug: "logofolio",
    title: "Logofolio",
    client: "Various",
    year: "2018–2025",
    category: "Branding",
    tier: 2,
    tools: ["Illustrator", "Photoshop"],
    summary:
      "A selection of logo and mark design work across hospitality, retail, music, food and professional services.",
  },
];

export const posterGallery = images("poster-ads-gallery");

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function projectImages(slug: string) {
  return images(slug);
}

export const categories: Category[] = ["Branding", "Campaign", "UX/UI", "Print"];
