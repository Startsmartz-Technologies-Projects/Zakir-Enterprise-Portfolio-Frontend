export type ProjectStatus = "Completed" | "Ongoing" | "Planning";

export interface ProjectScope {
  icon: string;
  n: string;
  t: string;
  d: string;
}

export interface ProjectDetail {
  client: string;
  projectType: string;
  overviewTitle: string;
  overviewBody: string;
  pullQuote: string;
  servicesDelivered: string[];
  scopes: ProjectScope[];
  scopeDescription: string;
  galleryHeading: string;
  galleryDescription: string;
  highlightsDescription: string;
  caseStudyChallenge: string;
  caseStudyApproach: string;
  caseStudyResult: string;
  ctaHeading: string;
  gallery: string[];
}

export interface ProjectRecord {
  id: string;
  cat: string;
  type: string;
  status: ProjectStatus;
  location: string;
  title: string;
  year: string;
  duration: string;
  img: string;
  badge: string;
  badgeClass?: string;
  summary: string;
  detail: ProjectDetail;
}

const PROJECT_IMAGES = {
  skyline:
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=80&auto=format&fit=crop",
  crane:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80&auto=format&fit=crop",
  bridge:
    "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=1400&q=80&auto=format&fit=crop",
  tower:
    "https://res.cloudinary.com/dk4csiouq/image/upload/v1776939227/bridge_hero_zox21k.jpg",
  road: "https://res.cloudinary.com/dk4csiouq/image/upload/q_auto/f_auto/v1776917191/patuakhali_project_section_hero_nqcinq.jpg",
  bridgeAlt:
    "https://res.cloudinary.com/dk4csiouq/image/upload/v1776939518/SKCD_Dreams_hero_wdvl2j.jpg",
  earth:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop",
  concrete:
    "https://images.unsplash.com/photo-1565008576549-57569a49371c?w=1200&q=80&auto=format&fit=crop",
  found:
    "https://images.unsplash.com/photo-1518335935020-cfd6580c1ab4?w=1200&q=80&auto=format&fit=crop",
  siteteam:
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80&auto=format&fit=crop",
  interior:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop",
  apartment:
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80&auto=format&fit=crop",
  machinery:
    "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=1200&q=80&auto=format&fit=crop",
  warehouse:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80&auto=format&fit=crop",
  highway:
    "https://images.unsplash.com/photo-1573108724029-4c46571d6490?w=1200&q=80&auto=format&fit=crop",
  blueprint:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80&auto=format&fit=crop",
};

const BASE_PROJECTS = [
  {
    id: "P001",
    cat: "Building Construction",
    type: "Government",
    status: "Completed",
    location: "Rampura, Dhaka",
    title: "49m All Traffic Steel Arch Bridge",
    year: "2025",
    duration: "22 months",
    img: PROJECT_IMAGES.tower,
    badge: "Featured",
    badgeClass: "lime",
    summary:
      "A major government infrastructure project in Rampura, Dhaka delivering three bridges under one contract: two double-lane all-traffic steel bridges with footpath connecting Banasree with Aftab Nagar, and a dedicated pedestrian bridge over Rampura Khal.",
  },
  {
    id: "P002",
    cat: "Road Works",
    type: "Government",
    status: "Completed",
    location: "Patuakhali, Bangladesh",
    title: "Patuakhali Naval Warehouse",
    year: "2025",
    duration: "14 months",
    img: PROJECT_IMAGES.road,
    badge: "Government",
    badgeClass: "black",
    summary:
      "A purpose-built government warehouse delivering secure, large-span storage for the Bangladesh Navy's southern coastal operations ",
  },
  {
    id: "P003",
    cat: "Private Residential",
    type: "Infrastructure",
    status: "Ongoing",
    location:
      "Plot 60/C, Road 07, Mouza Lalalsarat, Cantonment Market Area, Cantonment, Dhaka",
    title: "SKCD Dream - G+7 Residential Building",
    year: "2026",
    duration: "In progress",
    img: PROJECT_IMAGES.bridgeAlt,
    badge: "Ongoing",
    badgeClass: "gold",
    summary:
      "An 8-storied premium residential building rising in the heart of Dhaka Cantonment - 14 units per floor, two apartment types, and a modern curved facade that's already turning heads on Road",
  },
  {
    id: "P004",
    cat: "Site Development",
    type: "Industrial",
    status: "Completed",
    location: "Mymensingh",
    title: "Industrial Park Earthworks",
    year: "2024",
    duration: "9 months",
    img: PROJECT_IMAGES.earth,
    badge: "Completed",
    summary:
      "120-acre site preparation including grading, compaction and primary drainage for an export zone.",
  },
  {
    id: "P005",
    cat: "Structural Concrete",
    type: "Commercial",
    status: "Completed",
    location: "Chattogram EPZ",
    title: "RCC Framework, Warehouse Facility",
    year: "2024",
    duration: "11 months",
    img: PROJECT_IMAGES.warehouse,
    badge: "Completed",
    summary:
      "45,000 sqft RCC framework with heavy-load slab design for export-oriented logistics operations.",
  },
  {
    id: "P006",
    cat: "Foundation Work",
    type: "Commercial",
    status: "Completed",
    location: "Riverside, Dhaka",
    title: "Deep Pile Foundation - 340 Piles",
    year: "2023",
    duration: "8 months",
    img: PROJECT_IMAGES.found,
    badge: "Completed",
    summary:
      "Cast-in-situ bored piles extending to 42m depth supporting a mixed-use riverside development.",
  },
  {
    id: "P007",
    cat: "Building Construction",
    type: "Private",
    status: "Completed",
    location: "Banani, Dhaka",
    title: "Premium Residential Tower, 12 Floors",
    year: "2025",
    duration: "19 months",
    img: PROJECT_IMAGES.apartment,
    badge: "Private",
    badgeClass: "black",
    summary:
      "High-end apartment block featuring imported finishes, dual-lift core and architectural landscaping.",
  },
  {
    id: "P008",
    cat: "Road Works",
    type: "Government",
    status: "Ongoing",
    location: "Sylhet Division",
    title: "Regional Highway Expansion",
    year: "2026",
    duration: "In progress",
    img: PROJECT_IMAGES.highway,
    badge: "Ongoing",
    badgeClass: "gold",
    summary:
      "Widening and resurfacing of 38km regional route including new culvert structures and road markings.",
  },
  {
    id: "P009",
    cat: "Commercial Works",
    type: "Commercial",
    status: "Completed",
    location: "Motijheel, Dhaka",
    title: "Bank Branch Renovation Programme",
    year: "2024",
    duration: "6 months",
    img: PROJECT_IMAGES.interior,
    badge: "Completed",
    summary:
      "Interior build-out across 7 banking branches including security works, electricals and finishing.",
  },
  {
    id: "P010",
    cat: "Bridge Works",
    type: "Infrastructure",
    status: "Completed",
    location: "Barishal",
    title: "Reinforced Culvert Network - 12 Units",
    year: "2023",
    duration: "10 months",
    img: PROJECT_IMAGES.bridge,
    badge: "Completed",
    summary:
      "Box-culvert construction programme replacing aged drainage structures across flood-prone roads.",
  },
  {
    id: "P011",
    cat: "Private Residential",
    type: "Private",
    status: "Planning",
    location: "Uttara, Dhaka",
    title: "Duplex Residence Compound",
    year: "2026",
    duration: "Kickoff Q2",
    img: PROJECT_IMAGES.siteteam,
    badge: "Private",
    badgeClass: "black",
    summary:
      "Six-unit duplex compound with shared amenity deck, underground parking and architectural landscaping.",
  },
  {
    id: "P012",
    cat: "Structural Concrete",
    type: "Industrial",
    status: "Completed",
    location: "Gazipur",
    title: "Factory Expansion - Phase II",
    year: "2024",
    duration: "12 months",
    img: PROJECT_IMAGES.concrete,
    badge: "Completed",
    summary:
      "Structural extension adding 28,000 sqft production floor with reinforced mezzanine and crane rails.",
  },
] as const;

const DEFAULT_PROJECT_SCOPES: ProjectScope[] = [
  {
    icon: "concrete",
    n: "01",
    t: "RCC Superstructure",
    d: "Concrete frame built to project load-bearing requirements and long-term durability standards.",
  },
  {
    icon: "building",
    n: "02",
    t: "Pre-Engineered Steel Roof",
    d: "Wide-span steel truss system configured for structural performance and weather resistance.",
  },
  {
    icon: "equip",
    n: "03",
    t: "Equipment Integration",
    d: "Structural provisions for operational equipment and internal logistics flow.",
  },
  {
    icon: "fire",
    n: "04",
    t: "Fire Safety System",
    d: "Fire safety infrastructure completed, tested, and commissioned before handover.",
  },
  {
    icon: "mep",
    n: "05",
    t: "MEP Works",
    d: "Electrical, plumbing, and ventilation systems coordinated for continuous operation.",
  },
  {
    icon: "window",
    n: "06",
    t: "Security and Enclosure",
    d: "External enclosure and security-compliant openings delivered as per client requirements.",
  },
  {
    icon: "earth",
    n: "07",
    t: "Site Preparation",
    d: "Groundworks, levelling, and drainage enabling completed ahead of superstructure work.",
  },
  {
    icon: "floor",
    n: "08",
    t: "Industrial Floor System",
    d: "Heavy-duty floor construction delivered for operational loads and long service life.",
  },
];

const PROJECT_DETAIL_OVERRIDES: Partial<Record<string, Partial<ProjectDetail>>> = {
  P002: {
    client: "Bangladesh Government Navy",
    projectType: "Industrial Warehouse Construction",
    overviewTitle:
      "Built tough, handed over fast a naval warehouse the southern coast can depend on.",
    overviewBody:
      "Patuakhali is not the easiest place to run a construction project. The coastal conditions, remote location, and tight government timeline made delivery complex. Within 4 to 5 months, the team took this site from bare ground to a fully handed-over naval warehouse, ready for immediate operations. Every structural decision was made with end use in mind - heavy naval equipment, long-term coastal durability, and strict government security standards.",
    pullQuote:
      "No delays. No incidents. Just a building the Bangladesh Navy could actually rely on.",
    servicesDelivered: [
      "RCC Superstructure",
      "Pre-Engineered Steel Roof",
      "EOT Overhead Crane System",
      "Fire Suppression System",
      "MEP Works",
      "Security Fenestration",
      "Site Preparation",
      "Heavy-Duty Warehouse Floor",
    ],
    scopes: [
      {
        icon: "concrete",
        n: "01",
        t: "RCC Superstructure",
        d: "Concrete frame built to heavy load-bearing specs, designed to store and support serious naval equipment and supplies long-term.",
      },
      {
        icon: "building",
        n: "02",
        t: "Pre-Engineered Steel Roof",
        d: "Wide-span steel truss system with blue corrugated cladding and polycarbonate skylights for maximum internal height and natural light.",
      },
      {
        icon: "equip",
        n: "03",
        t: "EOT Overhead Crane System",
        d: "Overhead travelling crane infrastructure installed across the full floor span for safe movement of heavy naval cargo.",
      },
      {
        icon: "fire",
        n: "04",
        t: "Fire Suppression System",
        d: "Full ceiling-mounted red-pipe fire safety network spanning the entire warehouse floor, commissioned before handover.",
      },
      {
        icon: "mep",
        n: "05",
        t: "MEP Works",
        d: "Industrial lighting, electrical systems, ventilation ducting and plumbing installed for round-the-clock warehouse operations.",
      },
      {
        icon: "window",
        n: "06",
        t: "Security Fenestration",
        d: "Double-band windows with heavy iron grilles across the full perimeter, meeting government security requirements.",
      },
      {
        icon: "earth",
        n: "07",
        t: "Site Preparation",
        d: "Coastal site clearing, levelling and drainage groundworks completed before any structural work commenced.",
      },
      {
        icon: "floor",
        n: "08",
        t: "Heavy-Duty Warehouse Floor",
        d: "Thick industrial concrete slab laid and finished to withstand forklifts, trolleys and heavy equipment without degradation.",
      },
    ],
    caseStudyChallenge:
      "Constructing a government-grade naval warehouse in a coastal zone under a strict 4-5 month deadline with no margin for delay.",
    caseStudyApproach:
      "Concurrent roofing and civil works to compress the schedule, weekly on-site reviews, and strict structural tolerances throughout.",
    caseStudyResult:
      "A fully operational, crane-equipped, fire-safe naval warehouse handed over on time to the Bangladesh Navy's southern coastal command.",
    ctaHeading: "Need a warehouse built to government standard?",
    gallery: [
      "https://res.cloudinary.com/dk4csiouq/image/upload/q_auto/f_auto/v1776917191/patuakhali_project_section_hero_nqcinq.jpg",
      "https://res.cloudinary.com/dk4csiouq/image/upload/v1776918075/patuakhali_project_Gallary_1_nufw4p.jpg",
      "https://res.cloudinary.com/dk4csiouq/image/upload/v1776918074/patuakhali_project_Gallary_2_lchgzc.jpg",
      "https://res.cloudinary.com/dk4csiouq/image/upload/v1776918072/patuakhali_project_Gallary_3_agpdlx.jpg",
      "https://res.cloudinary.com/dk4csiouq/image/upload/v1776918072/patuakhali_project_Gallary_4_geulax.jpg",
      "https://res.cloudinary.com/dk4csiouq/image/upload/v1776918070/patuakhali_project_Gallary_5_btqqrf.jpg",
      "https://res.cloudinary.com/dk4csiouq/image/upload/v1776918069/patuakhali_project_Gallary_6_xhtnwd.jpg",
    ],
  },
};

export const PROJECTS: ProjectRecord[] = BASE_PROJECTS.map((project) => {
  const override = PROJECT_DETAIL_OVERRIDES[project.id] ?? {};
  const defaultDetail: ProjectDetail = {
    client:
      project.type === "Government"
        ? "Government Client"
        : project.type === "Private"
          ? "Private Client"
          : "Commercial Client",
    projectType: project.cat,
    overviewTitle: `Built for ${project.location}, delivered with disciplined execution.`,
    overviewBody: `This ${project.type.toLowerCase()} ${project.cat.toLowerCase()} in ${project.location} was delivered with a focus on quality, safety and schedule discipline. From mobilization to handover, the team coordinated structural works, services and finishing to match project requirements and long-term performance goals.`,
    pullQuote: project.summary,
    servicesDelivered: DEFAULT_PROJECT_SCOPES.map((scope) => scope.t),
    scopes: DEFAULT_PROJECT_SCOPES,
    scopeDescription:
      "Eight coordinated work packages delivered in sequence from site enabling works through to final handover, all under a single Zakir Enterprise contract.",
    galleryHeading: "Construction in progress.",
    galleryDescription:
      "Selected site photography capturing the foundation, superstructure, and facade phases of the project documented by our site engineering team.",
    highlightsDescription:
      "Outcomes and metrics for this project are available on request.",
    caseStudyChallenge: `Delivering a ${project.cat.toLowerCase()} in ${project.location} under a fixed timeline and strict quality requirements.`,
    caseStudyApproach:
      "Phased planning, disciplined site supervision, and coordinated engineering execution across all work packages.",
    caseStudyResult: `A ${project.status.toLowerCase()} project delivered for ${project.location}, aligned with the client scope and timeline.`,
    ctaHeading: `Need support for your next ${project.cat.toLowerCase()} project?`,
    gallery: [project.img, project.img, project.img, project.img, project.img, project.img, project.img],
  };

  return {
    ...project,
    detail: {
      ...defaultDetail,
      ...override,
      scopes: override.scopes ?? defaultDetail.scopes,
      servicesDelivered: override.servicesDelivered ?? defaultDetail.servicesDelivered,
      gallery: override.gallery ?? defaultDetail.gallery,
    },
  };
});

export const PROJECT_FILTERS = {
  categories: [
    "All",
    "Building Construction",
    "Road Works",
    "Bridge Works",
    "Private Residential",
    "Government Projects",
    "Commercial Works",
  ],
  statuses: ["All Status", "Completed", "Ongoing", "Planning"],
  types: ["All Types", "Government", "Commercial", "Private"],
  locations: [
    "All Locations",
    "Dhaka",
    "Chattogram",
    "Sylhet",
    "Cumilla",
    "Barishal",
    "Mymensingh",
    "Gazipur",
  ],
} as const;

export const PROJECT_SORTS = ["Most Recent", "Oldest First", "A - Z", "By Size"] as const;

export const FEATURED_PROJECT_IDS = ["P001", "P003"] as const;
