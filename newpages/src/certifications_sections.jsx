// Certifications Page — data + sections

const { Arrow: CtA, ArrowUpRight: CtAUR } = window.UI;

// ───────── Data ─────────
const CERT_CATEGORIES = [
  "All",
  "Trade & Licensing",
  "Compliance",
  "Safety",
  "Tax & Revenue",
  "Engineering",
  "Industry Body",
];

const CERT_STATUSES = ["All", "Active", "Renewed Recently", "Expiring Soon"];

const CERTIFICATIONS = [
  {
    id: "tl-001",
    title: "Trade License",
    authority: "Dhaka City Corporation",
    number: "DCC / TL / 2024 / 08412",
    category: "Trade & Licensing",
    issued: "Jan 2024",
    expiry: "Dec 2027",
    status: "Active",
    thumbClass: "tone-paper",
    accent: "seal-round",
    description: "Principal trade license authorizing commercial operations across Dhaka Metropolitan zones.",
  },
  {
    id: "abc-001",
    title: "ABC Construction Compliance",
    authority: "National Construction Authority",
    number: "NCA / ABC / BD / 11204",
    category: "Compliance",
    issued: "Mar 2023",
    expiry: "Mar 2026",
    status: "Active",
    thumbClass: "tone-cream",
    accent: "seal-shield",
    description: "Grade-A construction compliance registration for public and institutional project tenders.",
  },
  {
    id: "iso-9001",
    title: "ISO 9001:2015 — Quality Management",
    authority: "International Standards Organization",
    number: "ISO / QMS / 2024 / 77208",
    category: "Compliance",
    issued: "Jun 2024",
    expiry: "Jun 2027",
    status: "Renewed Recently",
    thumbClass: "tone-slate",
    accent: "seal-hex",
    description: "Quality management system certified for civil works, procurement, and delivery operations.",
  },
  {
    id: "hse-001",
    title: "Safety & HSE Registration",
    authority: "Bangladesh Engineering Board",
    number: "BEB / HSE / 2025 / 00947",
    category: "Safety",
    issued: "Feb 2025",
    expiry: "Feb 2028",
    status: "Active",
    thumbClass: "tone-paper",
    accent: "seal-round",
    description: "Occupational health, safety, and environment compliance for active construction sites.",
  },
  {
    id: "vat-001",
    title: "VAT Registration",
    authority: "Government of Bangladesh",
    number: "VAT / BIN / 000187402",
    category: "Tax & Revenue",
    issued: "Aug 2014",
    expiry: "Perpetual",
    status: "Active",
    thumbClass: "tone-cream",
    accent: "seal-shield",
    description: "Registered value-added tax identification with full historical compliance standing.",
  },
  {
    id: "nbr-001",
    title: "Corporate Tax Clearance",
    authority: "National Board of Revenue",
    number: "NBR / TAX / 2025 / 40218",
    category: "Tax & Revenue",
    issued: "Jul 2025",
    expiry: "Jun 2026",
    status: "Renewed Recently",
    thumbClass: "tone-slate",
    accent: "seal-hex",
    description: "Annual corporate income tax clearance — Assessment Year 2025-2026.",
  },
  {
    id: "ca-001",
    title: "Contractor Authorization — Class A",
    authority: "Public Works Department",
    number: "PWD / CA / CLASS-A / 01184",
    category: "Trade & Licensing",
    issued: "Apr 2022",
    expiry: "Apr 2027",
    status: "Active",
    thumbClass: "tone-paper",
    accent: "seal-round",
    description: "Class-A contractor authorization enabling participation in large public infrastructure tenders.",
  },
  {
    id: "rhd-001",
    title: "RHD Pre-Qualification",
    authority: "Roads & Highways Department",
    number: "RHD / PQ / 2024 / 09340",
    category: "Engineering",
    issued: "Nov 2024",
    expiry: "Nov 2026",
    status: "Active",
    thumbClass: "tone-slate",
    accent: "seal-hex",
    description: "Pre-qualified contractor registration for national highway, corridor, and bridge packages.",
  },
  {
    id: "iab-001",
    title: "Institute of Architects Membership",
    authority: "Institute of Architects, Bangladesh",
    number: "IAB / CORP / 2020 / 0428",
    category: "Industry Body",
    issued: "May 2020",
    expiry: "Dec 2025",
    status: "Expiring Soon",
    thumbClass: "tone-cream",
    accent: "seal-shield",
    description: "Corporate institutional membership in the Institute of Architects Bangladesh.",
  },
  {
    id: "iso-14001",
    title: "ISO 14001:2015 — Environmental",
    authority: "International Standards Organization",
    number: "ISO / EMS / 2024 / 77417",
    category: "Compliance",
    issued: "Jun 2024",
    expiry: "Jun 2027",
    status: "Renewed Recently",
    thumbClass: "tone-paper",
    accent: "seal-hex",
    description: "Environmental management system certified across all active construction operations.",
  },
  {
    id: "iso-45001",
    title: "ISO 45001:2018 — Occupational Safety",
    authority: "International Standards Organization",
    number: "ISO / OHS / 2024 / 77422",
    category: "Safety",
    issued: "Jun 2024",
    expiry: "Jun 2027",
    status: "Active",
    thumbClass: "tone-slate",
    accent: "seal-round",
    description: "Occupational health and safety management system certification for civil operations.",
  },
  {
    id: "beza-001",
    title: "BEZA Approved Contractor",
    authority: "Bangladesh Economic Zones Authority",
    number: "BEZA / AC / 2023 / 00722",
    category: "Engineering",
    issued: "Oct 2023",
    expiry: "Oct 2026",
    status: "Active",
    thumbClass: "tone-cream",
    accent: "seal-shield",
    description: "Approved contractor status for economic zone infrastructure and industrial park projects.",
  },
];

window.CERTIFICATIONS = CERTIFICATIONS;

// ───────── Hero ─────────
function CtHero() {
  return (
    <section className="ct-hero" data-screen-label="01 Hero">
      <div className="ct-hero-bg" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=2000&q=80&auto=format&fit=crop)` }}/>
      <div className="container ct-hero-inner">
        <div className="bg-crumbs" style={{marginBottom:28}}>
          <a href="Zakir Enterprise.html">Home</a>
          <span className="sep">/</span>
          <a href="Zakir Enterprise.html">Company</a>
          <span className="sep">/</span>
          <span className="current">Certifications</span>
        </div>
        <span className="ct-hero-label">Trust &amp; Compliance</span>
        <h1>Certifications<br/>&amp; Credentials.</h1>
        <p className="ct-hero-sub">
          Official registrations, approvals, and certifications that reinforce our capability, quality, and readiness to deliver at scale.
        </p>
        <div className="ct-hero-ctas">
          <a href="Let's Collaborate.html" className="btn btn-primary">Contact Us <CtA/></a>
          <a href="#certs" className="btn btn-outline-light">Browse Documents</a>
        </div>
        <div className="ct-hero-meta">
          <div className="m"><span className="k">Documents On File</span><span className="v">12 Active</span></div>
          <div className="m"><span className="k">Renewed In 2025</span><span className="v">4 Updated</span></div>
          <div className="m"><span className="k">Compliance Cycle</span><span className="v">Continuous</span></div>
          <div className="m"><span className="k">Audit Ready</span><span className="v"><span className="dot-live"/>Yes</span></div>
        </div>
      </div>
    </section>
  );
}

// ───────── Intro ─────────
function CtIntro() {
  return (
    <section className="ct-intro" data-screen-label="02 Intro">
      <div className="container ct-intro-grid">
        <div className="ct-intro-left">
          <span className="microlabel">Why Certifications Matter</span>
          <h2>Certified capability — <span className="accent">verified in writing.</span></h2>
          <p className="ct-intro-lede">
            Zakir Enterprise maintains the registrations, licenses, and professional certifications necessary to support public and private sector construction projects across Bangladesh.
          </p>
        </div>
        <div className="ct-intro-right">
          <div className="ct-intro-card">
            <div className="ct-intro-num">01</div>
            <div>
              <h4>Verified Documents</h4>
              <p>Every document on this page is current, signed, and verifiable through the issuing authority.</p>
            </div>
          </div>
          <div className="ct-intro-card">
            <div className="ct-intro-num">02</div>
            <div>
              <h4>Operational Readiness</h4>
              <p>Pre-qualified for Class-A public tenders, BEZA zones, and private institutional projects.</p>
            </div>
          </div>
          <div className="ct-intro-card">
            <div className="ct-intro-num">03</div>
            <div>
              <h4>Nationwide Capability</h4>
              <p>Credentials cover all 64 districts — infrastructure, commercial, industrial, and civil works.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────── Toolbar + Grid ─────────
function CtToolbar({ q, setQ, cat, setCat, status, setStatus, sort, setSort, clear, count }) {
  return (
    <div className="ct-toolbar">
      <div className="ct-toolbar-search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
          <circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/>
        </svg>
        <input
          type="text"
          placeholder="Search by title, authority, or number…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      <div className="ct-toolbar-filters">
        <div className="ct-select">
          <label>Category</label>
          <select value={cat} onChange={(e) => setCat(e.target.value)}>
            {CERT_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="ct-select">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            {CERT_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="ct-select">
          <label>Sort by</label>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="recent">Most Recent</option>
            <option value="title">Title A–Z</option>
            <option value="expiry">Expiry Date</option>
          </select>
        </div>
        <button className="ct-clear" onClick={clear}>Clear Filters</button>
      </div>
      <div className="ct-toolbar-count">
        <span><strong>{count}</strong> documents</span>
      </div>
    </div>
  );
}

// Decorative certificate thumbnail (SVG) — not a real scan
function CertThumb({ item }) {
  return (
    <div className={`ct-thumb ${item.thumbClass}`}>
      <div className="ct-thumb-frame">
        <div className="ct-thumb-header">
          <div className="ct-thumb-mark">Z</div>
          <div className="ct-thumb-id">{item.number}</div>
        </div>
        <div className="ct-thumb-ornament">
          <svg viewBox="0 0 400 40" preserveAspectRatio="none">
            <path d="M0,20 L400,20" stroke="currentColor" strokeWidth="0.4" opacity="0.35"/>
            <path d="M0,24 L400,24" stroke="currentColor" strokeWidth="0.4" opacity="0.2"/>
          </svg>
        </div>
        <div className="ct-thumb-title">Certificate of {item.category.split(" ")[0]}</div>
        <div className="ct-thumb-auth">{item.authority}</div>
        <div className="ct-thumb-lines">
          <span/><span/><span/><span className="short"/>
        </div>
        <div className="ct-thumb-footer">
          <div className="ct-thumb-sig">
            <div className="ct-thumb-sig-line"/>
            <span>Issuing Officer</span>
          </div>
          <div className={`ct-thumb-seal ${item.accent}`}>
            {item.accent === "seal-round" && (
              <svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="26" fill="none" stroke="currentColor" strokeWidth="1"/><circle cx="30" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="0.6"/><text x="30" y="33" textAnchor="middle" fontSize="7" fill="currentColor" fontWeight="700" fontFamily="Manrope">CERTIFIED</text></svg>
            )}
            {item.accent === "seal-shield" && (
              <svg viewBox="0 0 60 60"><path d="M30 6 L52 14 L52 34 Q52 46 30 54 Q8 46 8 34 L8 14 Z" fill="none" stroke="currentColor" strokeWidth="1"/><path d="M20 28 L27 35 L42 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/></svg>
            )}
            {item.accent === "seal-hex" && (
              <svg viewBox="0 0 60 60"><polygon points="30,5 52,18 52,42 30,55 8,42 8,18" fill="none" stroke="currentColor" strokeWidth="1"/><polygon points="30,15 44,23 44,37 30,45 16,37 16,23" fill="none" stroke="currentColor" strokeWidth="0.6"/><text x="30" y="33" textAnchor="middle" fontSize="6" fill="currentColor" fontWeight="700" fontFamily="Manrope">ISO</text></svg>
            )}
          </div>
        </div>
      </div>
      <div className="ct-thumb-corner tl"/>
      <div className="ct-thumb-corner tr"/>
      <div className="ct-thumb-corner bl"/>
      <div className="ct-thumb-corner br"/>
    </div>
  );
}

function CtCard({ item, onPreview }) {
  return (
    <div className="ct-card">
      <div className="ct-card-thumb">
        <CertThumb item={item}/>
        <span className={`ct-status ${item.status.replace(/\s+/g,'-').toLowerCase()}`}>{item.status}</span>
      </div>
      <div className="ct-card-body">
        <span className="ct-chip">{item.category}</span>
        <h3>{item.title}</h3>
        <div className="ct-card-auth">{item.authority}</div>
        <div className="ct-card-meta">
          <div><span className="k">Issued</span><span className="v">{item.issued}</span></div>
          <div><span className="k">Valid Until</span><span className="v">{item.expiry}</span></div>
        </div>
        <div className="ct-card-foot">
          <span className="ct-card-num">{item.number}</span>
          <button className="ct-preview" onClick={() => onPreview(item)}>
            Preview
            <CtAUR size={12}/>
          </button>
        </div>
      </div>
    </div>
  );
}

function CtGrid() {
  const [q, setQ] = React.useState("");
  const [cat, setCat] = React.useState("All");
  const [status, setStatus] = React.useState("All");
  const [sort, setSort] = React.useState("recent");
  const [preview, setPreview] = React.useState(null);

  const filtered = React.useMemo(() => {
    let list = CERTIFICATIONS.filter(c => {
      if (cat !== "All" && c.category !== cat) return false;
      if (status !== "All" && c.status !== status) return false;
      if (q) {
        const s = q.toLowerCase();
        if (!c.title.toLowerCase().includes(s) &&
            !c.authority.toLowerCase().includes(s) &&
            !c.number.toLowerCase().includes(s)) return false;
      }
      return true;
    });
    if (sort === "title") list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "expiry") list = [...list].sort((a, b) => a.expiry.localeCompare(b.expiry));
    return list;
  }, [q, cat, status, sort]);

  const clear = () => { setQ(""); setCat("All"); setStatus("All"); setSort("recent"); };

  return (
    <section className="ct-section" id="certs" data-screen-label="03 Certifications Grid">
      <div className="container">
        <div className="ct-section-head">
          <div>
            <span className="microlabel">Document Library</span>
            <h2>Our credentials,<br/>transparently presented.</h2>
          </div>
          <p>Browse, filter, and preview every document we hold — each one current, verified, and available on request for pre-qualification.</p>
        </div>

        <CtToolbar
          q={q} setQ={setQ}
          cat={cat} setCat={setCat}
          status={status} setStatus={setStatus}
          sort={sort} setSort={setSort}
          clear={clear}
          count={filtered.length}
        />

        {filtered.length === 0 ? (
          <div className="ct-empty">
            <div className="ct-empty-icon">
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"><rect x="4" y="4" width="16" height="16"/><path d="M4 4 L20 20"/></svg>
            </div>
            <h4>No documents match those filters</h4>
            <p>Try clearing the search or selecting a different category.</p>
            <button className="btn btn-dark" onClick={clear}>Reset filters</button>
          </div>
        ) : (
          <div className="ct-grid">
            {filtered.map(item => (
              <CtCard key={item.id} item={item} onPreview={setPreview}/>
            ))}
          </div>
        )}
      </div>

      {preview && <CtModal item={preview} onClose={() => setPreview(null)}/>}
    </section>
  );
}

// ───────── Modal ─────────
function CtModal({ item, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div className="ct-modal-backdrop" onClick={onClose}>
      <div className="ct-modal" onClick={(e) => e.stopPropagation()}>
        <button className="ct-modal-close" onClick={onClose}>✕</button>
        <div className="ct-modal-body">
          <div className="ct-modal-preview">
            <CertThumb item={item}/>
          </div>
          <div className="ct-modal-info">
            <span className="ct-chip">{item.category}</span>
            <h3>{item.title}</h3>
            <p className="ct-modal-desc">{item.description}</p>
            <div className="ct-modal-meta">
              <div><span className="k">Issuing Authority</span><span className="v">{item.authority}</span></div>
              <div><span className="k">Certificate No.</span><span className="v">{item.number}</span></div>
              <div><span className="k">Issue Date</span><span className="v">{item.issued}</span></div>
              <div><span className="k">Valid Until</span><span className="v">{item.expiry}</span></div>
              <div><span className="k">Status</span><span className="v"><span className={`ct-status inline ${item.status.replace(/\s+/g,'-').toLowerCase()}`}>{item.status}</span></span></div>
            </div>
            <div className="ct-modal-ctas">
              <button className="btn btn-primary">Download PDF <CtA/></button>
              <button className="btn btn-outline-dark" onClick={onClose}>Close Preview</button>
            </div>
            <div className="ct-modal-note">
              Document preview is a visual representation. Original verified copies are provided during pre-qualification on request.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ───────── Trust Strip ─────────
function CtTrust() {
  const items = [
    { n: "01", t: "Verified Company Credentials", d: "Every certificate on this page is current, traceable, and verifiable through the issuing body." },
    { n: "02", t: "Structured Operational Compliance", d: "ISO 9001 / 14001 / 45001 certified operations — quality, environment, safety, under one management system." },
    { n: "03", t: "Ready for Public & Private Projects", d: "Class-A contractor authorization with active RHD, LGED, BEZA pre-qualification across all 64 districts." },
  ];
  return (
    <section className="ct-trust" data-screen-label="04 Trust Strip">
      <div className="container">
        <div className="ct-trust-head">
          <span className="microlabel on-dark">Built for Serious Projects</span>
          <h2>Built on documentation.<br/><span className="accent">Delivered with confidence.</span></h2>
        </div>
        <div className="ct-trust-grid">
          {items.map((it, i) => (
            <div key={i} className="ct-trust-card">
              <div className="ct-trust-num">{it.n}</div>
              <div className="ct-trust-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square">
                  {i === 0 && <><path d="M12 3 L20 7 L20 13 Q20 18 12 21 Q4 18 4 13 L4 7 Z"/><path d="M8 12 L11 15 L16 9"/></>}
                  {i === 1 && <><rect x="4" y="4" width="16" height="16"/><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="14" x2="20" y2="14"/><line x1="9" y1="4" x2="9" y2="20"/></>}
                  {i === 2 && <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="3" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="21"/><line x1="3" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="21" y2="12"/></>}
                </svg>
              </div>
              <h4>{it.t}</h4>
              <p>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────── CTA ─────────
function CtCTA() {
  return (
    <section className="ct-cta" data-screen-label="05 CTA">
      <div className="ct-cta-bg" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=2000&q=80&auto=format&fit=crop)` }}/>
      <div className="container ct-cta-grid">
        <div>
          <span className="microlabel on-dark">Start Here</span>
          <h2>Need a qualified<br/>construction partner?</h2>
        </div>
        <div className="ct-cta-right">
          <p>Let's discuss your next project with a team backed by execution experience and professional credentials — 11 years, 64 districts, zero compromise on compliance.</p>
          <div className="ct-cta-btns">
            <a href="Let's Collaborate.html" className="btn btn-primary">Contact Us <CtA/></a>
            <a href="Zakir Enterprise.html#projects" className="btn btn-outline-light">View Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CtHero, CtIntro, CtGrid, CtTrust, CtCTA });
