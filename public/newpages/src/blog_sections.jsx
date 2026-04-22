// Blogs — shared data + listing sections

const { Arrow: BA, ArrowUpRight: BAUR } = window.UI;

// ───────── Shared Blog Data ─────────
const BLOG_DATA = [
  {
    id: "quality-foundation-work",
    category: "Construction",
    date: "March 22, 2026",
    dateISO: "2026-03-22",
    title: "Why Quality Foundation Work Matters More Than Any Other Phase",
    excerpt: "The foundation carries every decision that comes after it. A look at how sub-structure quality determines the 50-year life of a building — and the hidden costs of getting it wrong.",
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
    authorRole: "Project Director · Roads",
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
    excerpt: "A field guide to choosing between launching gantry, ground-based crane and incremental launching — and the cost signals hiding inside each.",
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
    excerpt: "How Zakir Enterprise runs a twelve-factor risk review at tender stage, handover stage and every gate in between — without drowning in paperwork.",
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
    excerpt: "Batching, transit, placement and curing protocols tuned for 35°C-plus heat, sudden rain and 85% humidity. The field checklist we actually use.",
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
    excerpt: "Idle iron bleeds profit faster than any other line item. A working model for fleet sizing, maintenance intervals and cross-site allocation.",
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
    excerpt: "Certification plaques are easy. The real question: what operational habits stuck? Three years in, here is an honest ledger of what works.",
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
    excerpt: "Proctor, MDD, field density — a plain-language guide for site supervisors on why the numbers matter and how to avoid being misled by them.",
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
    excerpt: "Safety posters don't move the needle. Here's what a one-million-man-hour LTI-free record actually required — beyond toolbox talks.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80&auto=format&fit=crop",
    author: "Nasrin Sultana",
    authorRole: "HSE Manager",
    featured: false,
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
    excerpt: "Small structures quietly decide whether a rural road stays open. A methodology note on hydraulic design, founding levels and wing-wall details.",
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
    excerpt: "How we insulated six active sites from three price shocks and one port disruption. The procurement discipline that doesn't rely on luck.",
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
    excerpt: "20-ton? 30-ton? Long-reach? A straightforward decision framework tied to site geometry, cycle time and fuel burn.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80&auto=format&fit=crop",
    author: "Tanvir Alam",
    authorRole: "Plant & Machinery Manager",
    readTime: "5 min read",
    tags: ["Equipment", "Selection", "Planning"],
    popularity: 42,
  },
];

const BLOG_CATEGORIES = [
  "Construction",
  "Roads",
  "Bridge Works",
  "Engineering",
  "Company News",
  "Equipment",
];

window.BLOG_DATA = BLOG_DATA;
window.BLOG_CATEGORIES = BLOG_CATEGORIES;

// ───────── Icons ─────────
const BSearch = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
    <circle cx="11" cy="11" r="7"/>
    <line x1="16" y1="16" x2="21" y2="21"/>
  </svg>
);
const BStar = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9"/>
  </svg>
);
const BClock = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
  </svg>
);

// ───────── Hero ─────────
function BgHero() {
  return (
    <section className="bg-hero" data-screen-label="01 Blog Hero">
      <div className="bg-hero-bg" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=2000&q=80&auto=format&fit=crop)` }}/>
      <div className="container bg-hero-inner">
        <div className="bg-crumbs">
          <a href="Zakir Enterprise.html">Home</a>
          <span className="sep">/</span>
          <span className="current">Insights & Articles</span>
        </div>
        <span className="bg-microlabel">Insights & Articles</span>
        <h1>Construction Knowledge,<br/><span className="accent">Industry Updates</span> & Project Insights</h1>
        <p className="bg-hero-sub">
          Expert articles from Zakir Enterprise on construction, engineering,
          project delivery, and infrastructure development — written by the
          engineers and project directors who do the work.
        </p>
        <div className="bg-hero-ctas">
          <a href="#grid" className="btn btn-primary">Explore Articles <BA/></a>
          <a href="#featured" className="btn btn-outline-light">Read Featured</a>
        </div>
      </div>
    </section>
  );
}

// ───────── Intro ─────────
function BgIntro() {
  return (
    <section className="bg-intro" data-screen-label="02 Intro">
      <div className="container bg-intro-grid">
        <div>
          <span className="microlabel">Editorial Perspective</span>
          <h2>A working publication for<br/>people who build.</h2>
        </div>
        <div className="bg-intro-copy">
          <p>
            The Zakir Enterprise Insights desk publishes long-form technical notes,
            field methodology and industry commentary drawn directly from our
            active projects — not recycled marketing material.
          </p>
          <div className="bg-intro-stats">
            <div><div className="n">{BLOG_DATA.length}+</div><div className="l">Articles Published</div></div>
            <div><div className="n">{BLOG_CATEGORIES.length}</div><div className="l">Topic Categories</div></div>
            <div><div className="n">9</div><div className="l">In-house Contributors</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────── Toolbar ─────────
function BgToolbar({ query, setQuery, activeCat, setActiveCat, sort, setSort, counts }) {
  return (
    <div className="bg-toolbar" data-screen-label="03 Toolbar">
      <div className="container">
        <div className="bg-toolbar-inner">
          <div className="bg-search">
            <BSearch/>
            <input type="text" placeholder="Search articles, topics, engineers…"
              value={query} onChange={e => setQuery(e.target.value)}/>
          </div>
          <div className="bg-chips-wrap">
            <button className={`bg-chip ${activeCat === "all" ? "active" : ""}`}
              onClick={() => setActiveCat("all")}>
              All <span className="count">{counts.all}</span>
            </button>
            {BLOG_CATEGORIES.map(c => (
              <button key={c}
                className={`bg-chip ${activeCat === c ? "active" : ""}`}
                onClick={() => setActiveCat(c)}>
                {c} <span className="count">{counts[c] || 0}</span>
              </button>
            ))}
          </div>
          <div className="bg-sort">
            <select value={sort} onChange={e => setSort(e.target.value)}>
              <option value="latest">Latest</option>
              <option value="popular">Popular</option>
              <option value="featured">Featured</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

// ───────── Featured ─────────
function BgFeatured({ item }) {
  if (!item) return null;
  return (
    <section className="bg-featured" id="featured" data-screen-label="04 Featured">
      <div className="container">
        <div className="bg-section-head">
          <span className="microlabel">Featured This Week</span>
          <h2>Editor's selection.</h2>
        </div>
        <div className="bg-featured-card">
          <div className="bg-featured-img" style={{ backgroundImage: `url(${item.image})` }}>
            <div className="bg-featured-badge"><BStar/> Featured Article</div>
          </div>
          <div className="bg-featured-body">
            <div className="bg-featured-meta">
              <span className="cat">{item.category}</span>
              <span className="dot"/>
              <span>{item.date}</span>
              <span className="dot"/>
              <span><BClock/> {item.readTime}</span>
            </div>
            <h2>{item.title}</h2>
            <p>{item.excerpt}</p>
            <div className="bg-author-line">
              <div className="bg-author-avatar">{initials(item.author)}</div>
              <div className="bg-author-info">
                <div className="name">{item.author}</div>
                <div className="role">{item.authorRole}</div>
              </div>
            </div>
            <div className="btn-row">
              <a href={`Blog Detail.html?id=${item.id}`} className="btn btn-primary">Read Article <BA/></a>
              <a href="#grid" className="btn btn-outline-dark">Browse All Articles</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function initials(name) {
  return name.split(" ").map(n => n[0]).filter(c => /[A-Z]/i.test(c)).slice(0,2).join("").toUpperCase();
}
window.blogInitials = initials;

// ───────── Blog Card ─────────
function BlogCard({ item, limeIdx }) {
  return (
    <a href={`Blog Detail.html?id=${item.id}`} className="blog-card" style={{textDecoration:"none"}}>
      <div className="blog-card-img">
        <div className="img" style={{ backgroundImage: `url(${item.image})` }}/>
        <span className={`blog-card-cat ${limeIdx ? "lime" : ""}`}>{item.category}</span>
      </div>
      <div className="blog-card-body">
        <div className="blog-card-meta">
          <span>{item.date}</span>
          <span className="dot"/>
          <span>{item.readTime}</span>
        </div>
        <h3>{item.title}</h3>
        <p>{item.excerpt}</p>
        <div className="blog-card-foot">
          <div className="blog-card-author">
            <div className="av">{initials(item.author)}</div>
            <span>{item.author}</span>
          </div>
          <span className="blog-card-more">Read More <BA size={12}/></span>
        </div>
      </div>
    </a>
  );
}

// ───────── Grid Section with paging ─────────
function BgGrid({ items, totalFiltered }) {
  const PAGE = 6;
  const [page, setPage] = React.useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE));
  React.useEffect(() => { setPage(1); }, [items.length]);
  const start = (page - 1) * PAGE;
  const visible = items.slice(start, start + PAGE);

  return (
    <section className="bg-grid-section" id="grid" data-screen-label="05 Blog Grid">
      <div className="container">
        <div className="bg-grid-head">
          <div>
            <span className="microlabel">All Articles</span>
            <h2 style={{marginTop:14}}>Latest from the editorial desk.</h2>
          </div>
          <div className="count-label">
            Showing <strong style={{color:"var(--forest)"}}>{visible.length}</strong> of {totalFiltered} {totalFiltered === 1 ? "article" : "articles"}
            &nbsp;·&nbsp;Page {page} of {totalPages}
          </div>
        </div>
        {items.length === 0 ? (
          <div className="bg-empty">
            <h3>No articles matched your filters.</h3>
            <p>Try a different topic or clear your search to see everything.</p>
          </div>
        ) : (
          <div className="bg-grid">
            {visible.map((it, i) => (
              <BlogCard key={it.id} item={it} limeIdx={(i === 1 || i === 3)}/>
            ))}
          </div>
        )}
        {totalPages > 1 && (
          <div className="bg-pagination">
            <button className="bg-page-btn nav-arrow"
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}>
              ← Prev
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i}
                className={`bg-page-btn ${page === i + 1 ? "active" : ""}`}
                onClick={() => { setPage(i + 1); window.scrollTo({top: document.getElementById("grid").offsetTop - 80, behavior: "smooth"}); }}>
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
            <button className="bg-page-btn nav-arrow"
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}>
              Next →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// ───────── Newsletter / CTA Strip ─────────
function BgNewsletter() {
  const [email, setEmail] = React.useState("");
  const [sent, setSent] = React.useState(false);
  return (
    <section className="bg-newsletter" data-screen-label="06 CTA Strip">
      <div className="container bg-newsletter-inner">
        <div>
          <span className="microlabel on-dark">Expert Consultation</span>
          <h2>Need construction expertise for your <span className="accent">next project?</span></h2>
          <p>
            Our project desk responds within two working days with a structured
            scope review and next step. No pitch decks — just engineering.
          </p>
        </div>
        <div className="bg-newsletter-actions">
          <div className="bg-newsletter-btns">
            <a href="Let's Collaborate.html" className="btn btn-primary">Contact Us <BA/></a>
            <a href="Zakir Enterprise.html#services" className="btn btn-outline-light">View Services</a>
          </div>
          <form className="bg-subscribe" onSubmit={e => { e.preventDefault(); if (email) setSent(true); }}>
            <input type="email" placeholder="Or subscribe for new articles"
                   value={email} onChange={e => setEmail(e.target.value)} required/>
            <button type="submit">{sent ? "✓ Subscribed" : "Subscribe →"}</button>
          </form>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  BgHero, BgIntro, BgToolbar, BgFeatured, BgGrid, BlogCard, BgNewsletter
});
