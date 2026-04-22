export type BlogBlock =
  | { kind: "p"; text: string }
  | { kind: "h3"; heading: string }
  | { kind: "ul"; items: string[] }
  | { kind: "quote"; text: string; cite?: string }
  | { kind: "stats"; items: Array<{ big: string; lbl: string }> }
  | { kind: "img"; url: string; cap?: string };

export interface BlogBodySection {
  id: string;
  heading: string;
  level: number;
  blocks: BlogBlock[];
}

export interface BlogBody {
  lead: string;
  sections: BlogBodySection[];
  tags: string[];
}

export interface BlogArticle {
  id: string;
  category: string;
  date: string;
  dateISO: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  authorRole: string;
  featured?: boolean;
  readTime: string;
  tags: string[];
  popularity: number;
}

export const BLOG_DATA: BlogArticle[] = [
  {
    id: "quality-foundation-work",
    category: "Construction",
    date: "March 22, 2026",
    dateISO: "2026-03-22",
    title: "Why Quality Foundation Work Matters More Than Any Other Phase",
    excerpt:
      "The foundation carries every decision that comes after it. A look at how sub-structure quality determines the 50-year life of a building - and the hidden costs of getting it wrong.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80&auto=format&fit=crop",
    author: "Engr. Mahmudul Hasan",
    authorRole: "Head of Structural Engineering",
    featured: true,
    readTime: "8 min read",
    tags: ["Foundation", "Quality Control", "Structural"],
    popularity: 98,
  },
  {
    id: "rural-roads-lged-bangladesh",
    category: "Roads",
    date: "March 10, 2026",
    dateISO: "2026-03-10",
    title: "Rural Road Construction in Bangladesh: LGED Standards & Field Realities",
    excerpt: "What separates a rural road that lasts one monsoon from one that serves a generation. Lessons from 40+ LGED packages across six divisions.",
    image: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?w=1600&q=80&auto=format&fit=crop",
    author: "Engr. Rashedul Karim",
    authorRole: "Project Director - Roads",
    readTime: "7 min read",
    tags: ["LGED", "Rural Roads", "Standards"],
    popularity: 84,
  },
  {
    id: "bridge-girder-erection-methodology",
    category: "Bridge Works",
    date: "February 28, 2026",
    dateISO: "2026-02-28",
    title: "Segmental Girder Erection: Methodology, Risk & Modern Practice",
    excerpt:
      "A field guide to choosing between launching gantry, ground-based crane and incremental launching - and the cost signals hiding inside each.",
    image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=1600&q=80&auto=format&fit=crop",
    author: "Engr. Abul Mansur",
    authorRole: "Senior Bridge Engineer",
    readTime: "9 min read",
    tags: ["Bridges", "Methodology", "Safety"],
    popularity: 72,
  },
  {
    id: "project-delivery-risk-framework",
    category: "Engineering",
    date: "February 14, 2026",
    dateISO: "2026-02-14",
    title: "A Practical Risk Framework for Mid-Sized Infrastructure Delivery",
    excerpt:
      "How Zakir Enterprise runs a twelve-factor risk review at tender stage, handover stage and every gate in between - without drowning in paperwork.",
    image: "https://images.unsplash.com/photo-1581092918484-8313ff6d8a5b?w=1600&q=80&auto=format&fit=crop",
    author: "Faruk Ahmed",
    authorRole: "Head of Planning",
    readTime: "6 min read",
    tags: ["Risk", "Planning", "PMO"],
    popularity: 66,
  },
  {
    id: "concrete-quality-monsoon",
    category: "Construction",
    date: "January 30, 2026",
    dateISO: "2026-01-30",
    title: "Pouring Concrete Through the Monsoon: A Bangladesh Playbook",
    excerpt:
      "Batching, transit, placement and curing protocols tuned for 35C-plus heat, sudden rain and 85% humidity. The field checklist we actually use.",
    image: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=1600&q=80&auto=format&fit=crop",
    author: "Engr. Salma Khatun",
    authorRole: "Quality Assurance Lead",
    readTime: "7 min read",
    tags: ["Concrete", "Weather", "QA"],
    popularity: 91,
  },
  {
    id: "heavy-equipment-fleet-utilization",
    category: "Equipment",
    date: "January 12, 2026",
    dateISO: "2026-01-12",
    title: "Heavy Equipment Utilization: Why 65% Is the Number That Matters",
    excerpt:
      "Idle iron bleeds profit faster than any other line item. A working model for fleet sizing, maintenance intervals and cross-site allocation.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80&auto=format&fit=crop",
    author: "Tanvir Alam",
    authorRole: "Plant & Machinery Manager",
    readTime: "5 min read",
    tags: ["Equipment", "Operations", "Fleet"],
    popularity: 58,
  },
  {
    id: "iso-9001-real-world-impact",
    category: "Company News",
    date: "December 18, 2025",
    dateISO: "2025-12-18",
    title: "What ISO 9001 Actually Changed in the Way We Run Projects",
    excerpt:
      "Certification plaques are easy. The real question: what operational habits stuck? Three years in, here is an honest ledger of what works.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80&auto=format&fit=crop",
    author: "Zakir Hossain",
    authorRole: "Managing Director",
    readTime: "5 min read",
    tags: ["ISO", "Quality", "Operations"],
    popularity: 47,
  },
  {
    id: "earthwork-compaction-density",
    category: "Engineering",
    date: "December 02, 2025",
    dateISO: "2025-12-02",
    title: "Earthwork & Compaction: Reading the Density Numbers Correctly",
    excerpt:
      "Proctor, MDD, field density - a plain-language guide for site supervisors on why the numbers matter and how to avoid being misled by them.",
    image: "https://images.unsplash.com/photo-1590155520778-c38bd85dfd6e?w=1600&q=80&auto=format&fit=crop",
    author: "Engr. Mahmudul Hasan",
    authorRole: "Head of Structural Engineering",
    readTime: "8 min read",
    tags: ["Earthwork", "Testing", "Standards"],
    popularity: 63,
  },
  {
    id: "safety-culture-site-level",
    category: "Company News",
    date: "November 20, 2025",
    dateISO: "2025-11-20",
    title: "Building a Safety Culture That Survives the Supervisor Rotation",
    excerpt:
      "Safety posters don't move the needle. Here's what a one-million-man-hour LTI-free record actually required - beyond toolbox talks.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80&auto=format&fit=crop",
    author: "Nasrin Sultana",
    authorRole: "HSE Manager",
    readTime: "6 min read",
    tags: ["Safety", "HSE", "Culture"],
    popularity: 79,
  },
  {
    id: "designing-durable-culverts",
    category: "Bridge Works",
    date: "November 05, 2025",
    dateISO: "2025-11-05",
    title: "Designing Culverts That Survive Twenty Monsoons",
    excerpt:
      "Small structures quietly decide whether a rural road stays open. A methodology note on hydraulic design, founding levels and wing-wall details.",
    image: "https://images.unsplash.com/photo-1581092918484-8313ff6d8a5b?w=1600&q=80&auto=format&fit=crop",
    author: "Engr. Abul Mansur",
    authorRole: "Senior Bridge Engineer",
    readTime: "7 min read",
    tags: ["Culverts", "Hydraulics", "Design"],
    popularity: 54,
  },
  {
    id: "supply-chain-steel-cement",
    category: "Construction",
    date: "October 22, 2025",
    dateISO: "2025-10-22",
    title: "Steel, Cement & Aggregate: Supply Chain Lessons from a Volatile Year",
    excerpt:
      "How we insulated six active sites from three price shocks and one port disruption. The procurement discipline that doesn't rely on luck.",
    image: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=1600&q=80&auto=format&fit=crop",
    author: "Faruk Ahmed",
    authorRole: "Head of Planning",
    readTime: "6 min read",
    tags: ["Procurement", "Supply Chain", "Materials"],
    popularity: 70,
  },
  {
    id: "excavator-selection-guide",
    category: "Equipment",
    date: "October 04, 2025",
    dateISO: "2025-10-04",
    title: "Picking the Right Excavator Class for Your Site",
    excerpt:
      "20-ton? 30-ton? Long-reach? A straightforward decision framework tied to site geometry, cycle time and fuel burn.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80&auto=format&fit=crop",
    author: "Tanvir Alam",
    authorRole: "Plant & Machinery Manager",
    readTime: "5 min read",
    tags: ["Equipment", "Selection", "Planning"],
    popularity: 42,
  },
];

export const BLOG_CATEGORIES = [
  "Construction",
  "Roads",
  "Bridge Works",
  "Engineering",
  "Company News",
  "Equipment",
];

const BLOG_BODIES: Record<string, BlogBody> = {
  "quality-foundation-work": {
    lead:
      "Nobody walks through a finished building and compliments the foundation. It's buried. It's invisible. And yet every crack, every settlement, every lawsuit ten years later traces back to decisions made before a single wall went up. This is an engineer's case for spending more - and thinking harder - below ground level.",
    sections: [
      {
        id: "why-quality-foundation-work-matters",
        heading: "Why Quality Foundation Work Matters",
        level: 2,
        blocks: [
          {
            kind: "p",
            text: "In Bangladesh's soft alluvial soils, the foundation is not a line item - it is the project. We have walked onto inherited sites where thirty percent of the budget had already been spent on cosmetic finishes while the sub-structure sat on under-designed pad footings.",
          },
          {
            kind: "stats",
            items: [
              { big: "42%", lbl: "of site disputes trace to foundation issues" },
              { big: "3.2x", lbl: "remedial cost vs. original scope" },
              { big: "< 2%", lbl: "foundation-related claims on ZE projects" },
            ],
          },
        ],
      },
      {
        id: "how-zakir-enterprise-ensures-delivery",
        heading: "How Zakir Enterprise Ensures Delivery",
        level: 2,
        blocks: [
          { kind: "p", text: "Our foundation protocol is standard engineering executed with discipline." },
          {
            kind: "ul",
            items: [
              "<strong>100% rebar inspection</strong> before every foundation pour.",
              "<strong>Concrete cube strength testing</strong> at 7, 14 and 28 days.",
              "<strong>Pile integrity testing</strong> on every pile for principal-contractor projects.",
            ],
          },
          {
            kind: "img",
            url: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=1600&q=80&auto=format&fit=crop",
            cap: "Foundation rebar check before a mat pour on an active ZE site.",
          },
        ],
      },
    ],
    tags: ["Foundation", "Quality Control", "Structural Engineering", "Site Preparation", "QA/QC"],
  },
};

export function getBlogById(id: string) {
  return BLOG_DATA.find((item) => item.id === id);
}

export function getBlogBody(article: BlogArticle): BlogBody {
  if (BLOG_BODIES[article.id]) return BLOG_BODIES[article.id];
  return {
    lead: `${article.excerpt} The full article below walks through engineering constraints and delivery discipline for this category.`,
    sections: [
      {
        id: "context-and-why-it-matters",
        heading: "Context & Why It Matters",
        level: 2,
        blocks: [
          {
            kind: "p",
            text: "This article draws from field experience on active Zakir Enterprise projects.",
          },
          {
            kind: "stats",
            items: [
              { big: "12+", lbl: "Active projects informing this view" },
              { big: "6", lbl: "Divisions of field evidence" },
              { big: "10 yrs", lbl: "Delivery track record" },
            ],
          },
        ],
      },
    ],
    tags: article.tags,
  };
}

