// News Corner — shared data + listing sections

const { Arrow: NcA, ArrowUpRight: NcAUR } = window.UI;

// ───────── Shared Article Data ─────────
const NEWS_DATA = [
  {
    id: "road-dhaka-awarded",
    category: "Awarded Project",
    date: "March 18, 2026",
    dateISO: "2026-03-18",
    title: "Zakir Enterprise Awarded Major Road Development Project in Dhaka",
    excerpt: "A BDT 180 crore contract for a 42-kilometer four-lane corridor under the Roads & Highways Department strengthens our national infrastructure portfolio.",
    image: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?w=1600&q=80&auto=format&fit=crop",
    featured: true,
    readTime: "5 min read",
  },
  {
    id: "iso-9001-renewed",
    category: "Achievement",
    date: "March 02, 2026",
    dateISO: "2026-03-02",
    title: "ISO 9001:2015 Certification Successfully Renewed for Third Consecutive Cycle",
    excerpt: "Zakir Enterprise clears its annual quality management audit with zero non-conformities, underscoring a decade of process discipline.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80&auto=format&fit=crop",
    readTime: "3 min read",
  },
  {
    id: "padma-bridge-milestone",
    category: "Milestone",
    date: "February 25, 2026",
    dateISO: "2026-02-25",
    title: "Padma South Connector Project Reaches 70% Structural Completion",
    excerpt: "Our civil works package on the Padma South corridor crosses a significant delivery milestone with superstructure erection complete.",
    image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=1600&q=80&auto=format&fit=crop",
    readTime: "4 min read",
  },
  {
    id: "lged-tender-submission",
    category: "Tender Notice",
    date: "February 12, 2026",
    dateISO: "2026-02-12",
    title: "Pre-Qualified for Three LGED Rural Infrastructure Tenders in Sylhet Division",
    excerpt: "Selection advances us to the technical evaluation round for combined works worth approximately BDT 310 crore.",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1600&q=80&auto=format&fit=crop",
    readTime: "3 min read",
  },
  {
    id: "csr-floods-rangpur",
    category: "CSR Activity",
    date: "January 30, 2026",
    dateISO: "2026-01-30",
    title: "Emergency Relief & Rebuild Program Launched Across Rangpur Flood-Affected Villages",
    excerpt: "Deploying machinery and workforce to restore access roads and culverts in twelve communities affected by the winter floods.",
    image: "https://images.unsplash.com/photo-1518398046578-8cca57782e17?w=1600&q=80&auto=format&fit=crop",
    readTime: "4 min read",
  },
  {
    id: "excellence-award-2025",
    category: "Achievement",
    date: "January 14, 2026",
    dateISO: "2026-01-14",
    title: "Bangladesh Construction Excellence Award 2025 — Infrastructure Category Winner",
    excerpt: "Recognised for outstanding delivery on the Chattogram Industrial Access Road by the Association of Builders of Bangladesh.",
    image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=1600&q=80&auto=format&fit=crop",
    featured: false,
    readTime: "3 min read",
  },
  {
    id: "new-batching-plant",
    category: "Announcement",
    date: "December 20, 2025",
    dateISO: "2025-12-20",
    title: "New High-Capacity Concrete Batching Plant Commissioned in Narayanganj",
    excerpt: "A 120 m³/hour facility expanding in-house concrete supply capability for the southern project corridor.",
    image: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=1600&q=80&auto=format&fit=crop",
    readTime: "3 min read",
  },
  {
    id: "rhd-partnership-framework",
    category: "Announcement",
    date: "December 08, 2025",
    dateISO: "2025-12-08",
    title: "Framework Agreement Signed with Roads & Highways Department for 2026 Projects",
    excerpt: "A multi-project delivery framework positioning Zakir Enterprise for major highway and bridge works next year.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80&auto=format&fit=crop",
    readTime: "4 min read",
  },
  {
    id: "bauma-expo",
    category: "Event Participation",
    date: "November 22, 2025",
    dateISO: "2025-11-22",
    title: "Zakir Enterprise at BAUMA South Asia 2025 — Machinery & Methods Showcase",
    excerpt: "Our engineering team presented Bangladesh case studies and explored next-generation earthmoving equipment.",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1600&q=80&auto=format&fit=crop",
    readTime: "2 min read",
  },
  {
    id: "safety-milestone",
    category: "Milestone",
    date: "November 05, 2025",
    dateISO: "2025-11-05",
    title: "One Million Man-Hours Worked Without Lost-Time Injury Across Six Active Sites",
    excerpt: "A record safety milestone celebrated with workforce recognition and renewed HSE training commitments.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80&auto=format&fit=crop",
    readTime: "3 min read",
  },
  {
    id: "osha-training",
    category: "Achievement",
    date: "October 18, 2025",
    dateISO: "2025-10-18",
    title: "120 Site Supervisors Complete Advanced OSHA-Aligned Safety Training",
    excerpt: "A structured safety leadership program rolled out across all regional project offices this quarter.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80&auto=format&fit=crop",
    readTime: "3 min read",
  },
  {
    id: "cumilla-industrial-park",
    category: "Awarded Project",
    date: "October 02, 2025",
    dateISO: "2025-10-02",
    title: "Cumilla Industrial Park Site Development Contract Awarded",
    excerpt: "A BDT 95 crore earthwork, drainage and utility package for a new industrial zone under BEZA.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80&auto=format&fit=crop",
    readTime: "4 min read",
  },
];

const NEWS_CATEGORIES = [
  "Announcement",
  "Achievement",
  "Awarded Project",
  "Tender Notice",
  "CSR Activity",
  "Milestone",
  "Event Participation",
];

window.NEWS_DATA = NEWS_DATA;
window.NEWS_CATEGORIES = NEWS_CATEGORIES;

// ───────── Icons ─────────
const Search = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
    <circle cx="11" cy="11" r="7"/>
    <line x1="16" y1="16" x2="21" y2="21"/>
  </svg>
);
const Star = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9"/>
  </svg>
);

// ───────── Hero ─────────
function NcHero() {
  return (
    <section className="nc-hero" data-screen-label="01 News Hero">
      <div className="nc-hero-bg" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=2000&q=80&auto=format&fit=crop)` }}/>
      <div className="container nc-hero-inner">
        <div className="nc-crumbs">
          <a href="Zakir Enterprise.html">Home</a>
          <span className="sep">/</span>
          <span className="current">News Corner</span>
        </div>
        <h1>News <span className="accent">Corner</span></h1>
        <p className="hero-sub">
          Latest updates, achievements, project milestones and company
          announcements from Zakir Enterprise — Bangladesh's trusted
          construction and infrastructure partner.
        </p>
        <div className="nc-hero-meta">
          <div className="m">
            <span className="k">Updated</span>
            <span className="v">March 2026</span>
          </div>
          <div className="m">
            <span className="k">Published</span>
            <span className="v">{NEWS_DATA.length} Stories</span>
          </div>
          <div className="m">
            <span className="k">Categories</span>
            <span className="v">{NEWS_CATEGORIES.length} Topics</span>
          </div>
          <div className="m">
            <span className="k">Featured</span>
            <span className="v">Road Project Award</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────── Intro ─────────
function NcIntro() {
  return (
    <section className="nc-intro" data-screen-label="02 Intro">
      <div className="container">
        <span className="microlabel">Newsroom · Zakir Enterprise</span>
        <p>
          Stay updated with Zakir Enterprise's latest project wins, milestones,
          participation, certifications and company growth across Bangladesh's
          construction landscape.
        </p>
      </div>
    </section>
  );
}

// ───────── Toolbar (search + filter + sort) ─────────
function NcToolbar({ query, setQuery, activeCat, setActiveCat, sort, setSort, counts }) {
  return (
    <div className="nc-toolbar" data-screen-label="03 Toolbar">
      <div className="container">
        <div className="nc-toolbar-inner">
          <div className="nc-search">
            <Search/>
            <input type="text" placeholder="Search news, achievements, projects…"
              value={query} onChange={e => setQuery(e.target.value)}/>
          </div>
          <div className="nc-chips-wrap">
            <button className={`nc-chip ${activeCat === "all" ? "active" : ""}`}
              onClick={() => setActiveCat("all")}>
              All <span className="count">{counts.all}</span>
            </button>
            {NEWS_CATEGORIES.map(c => (
              <button key={c}
                className={`nc-chip ${activeCat === c ? "active" : ""}`}
                onClick={() => setActiveCat(c)}>
                {c} <span className="count">{counts[c] || 0}</span>
              </button>
            ))}
          </div>
          <div className="nc-sort">
            <select value={sort} onChange={e => setSort(e.target.value)}>
              <option value="latest">Latest First</option>
              <option value="oldest">Oldest First</option>
              <option value="featured">Featured First</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

// ───────── Featured ─────────
function NcFeatured({ item }) {
  if (!item) return null;
  return (
    <section className="nc-featured" data-screen-label="04 Featured">
      <div className="container">
        <div className="nc-featured-card">
          <div className="nc-featured-img" style={{ backgroundImage: `url(${item.image})` }}>
            <div className="nc-featured-badge"><Star/> Featured Story</div>
          </div>
          <div className="nc-featured-body">
            <div className="nc-featured-meta">
              <span className="cat">{item.category}</span>
              <span className="dot"/>
              <span>{item.date}</span>
              <span className="dot"/>
              <span>{item.readTime}</span>
            </div>
            <h2>{item.title}</h2>
            <p>{item.excerpt}</p>
            <div className="btn-row">
              <a href={`News Detail.html?id=${item.id}`} className="btn btn-primary">Read Full Story <NcA/></a>
              <a href="#grid" className="btn btn-outline-dark">Browse All News</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────── News Card ─────────
function NewsCard({ item, limeIdx }) {
  return (
    <a href={`News Detail.html?id=${item.id}`} className="news-card" style={{textDecoration:"none"}}>
      <div className="news-card-img">
        <div className="img" style={{ backgroundImage: `url(${item.image})` }}/>
        <span className={`news-card-cat ${limeIdx ? "lime" : ""}`}>{item.category}</span>
      </div>
      <div className="news-card-body">
        <div className="news-card-meta">
          <span>{item.date}</span>
          <span className="dot"/>
          <span>{item.readTime}</span>
        </div>
        <h3>{item.title}</h3>
        <p>{item.excerpt}</p>
        <span className="news-card-more">Read Article <NcA size={12}/></span>
      </div>
    </a>
  );
}

// ───────── Grid Section with paging ─────────
function NcGrid({ items, totalFiltered }) {
  const PAGE = 6;
  const [page, setPage] = React.useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE));
  React.useEffect(() => { setPage(1); }, [items.length]);
  const start = (page - 1) * PAGE;
  const visible = items.slice(start, start + PAGE);

  return (
    <section className="nc-grid-section" id="grid" data-screen-label="05 News Grid">
      <div className="container">
        <div className="nc-grid-head">
          <div>
            <span className="microlabel">All Stories</span>
            <h2 style={{marginTop:14}}>Latest from the Newsroom</h2>
          </div>
          <div className="count-label">
            Showing <strong style={{color:"var(--forest)"}}>{visible.length}</strong> of {totalFiltered} {totalFiltered === 1 ? "story" : "stories"}
            &nbsp;·&nbsp;Page {page} of {totalPages}
          </div>
        </div>
        {items.length === 0 ? (
          <div className="nc-empty">
            <h3>No stories matched your filters.</h3>
            <p>Try removing a filter or clearing your search.</p>
          </div>
        ) : (
          <div className="nc-grid">
            {visible.map((it, i) => (
              <NewsCard key={it.id} item={it} limeIdx={(i === 0 || i === 4)}/>
            ))}
          </div>
        )}
        {totalPages > 1 && (
          <div className="nc-pagination">
            <button className="nc-page-btn nav-arrow"
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}>
              ← Prev
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i}
                className={`nc-page-btn ${page === i + 1 ? "active" : ""}`}
                onClick={() => { setPage(i + 1); window.scrollTo({top: document.getElementById("grid").offsetTop - 80, behavior: "smooth"}); }}>
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
            <button className="nc-page-btn nav-arrow"
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

// ───────── Trust Strip ─────────
function NcTrustStrip() {
  const stats = [
    { big: "100+",     lbl: "Completed Projects" },
    { big: "64",       lbl: "Districts · Nationwide" },
    { big: "250+",     lbl: "Skilled Workforce" },
    { big: "10 Yrs",   lbl: "Proven Execution" },
  ];
  return (
    <section className="nc-trust-strip" data-screen-label="06 Trust Strip">
      <div className="container nc-trust-inner">
        <div>
          <span className="microlabel on-dark">By the Numbers</span>
          <h2 style={{marginTop:16}}>Delivering real work, <span className="accent">every day.</span></h2>
        </div>
        <div className="nc-trust-stats">
          {stats.map(s => (
            <div key={s.lbl} className="nc-trust-stat">
              <div className="big">{s.big}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────── CTA Banner ─────────
function NcCTA() {
  return (
    <section className="nc-cta" data-screen-label="07 CTA Banner">
      <div className="nc-cta-bg" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=2000&q=80&auto=format&fit=crop)` }}/>
      <div className="container">
        <div className="nc-cta-grid">
          <div>
            <span className="microlabel on-dark">Ready To Build</span>
            <h2>Let's build the <span className="accent">future</span> together.</h2>
          </div>
          <div className="nc-cta-right">
            <p>
              Discuss your next construction project with Zakir Enterprise.
              Our project desk responds within two working days with a
              structured next step.
            </p>
            <div className="nc-cta-btns">
              <a href="Let's Collaborate.html" className="btn btn-primary">Let's Collaborate <NcA/></a>
              <a href="Zakir Enterprise.html#contact" className="btn btn-outline-light">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  NcHero, NcIntro, NcToolbar, NcFeatured, NcGrid, NewsCard, NcTrustStrip, NcCTA
});
