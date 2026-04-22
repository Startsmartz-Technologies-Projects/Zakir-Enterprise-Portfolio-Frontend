// Concern Detail — shared data + sections

const { Arrow: CdA, ArrowUpRight: CdAUR, SvcIcon: CdSvcIcon } = window.UI;

// ───────── Concern data (multi-concern for tweaks) ─────────
const CONCERNS = [
  {
    id: "zakir-construction",
    name: "Zakir Construction Ltd.",
    short: "Civil & Infrastructure",
    tagline: "Building the backbone of modern Bangladesh.",
    intro: "The flagship civil construction arm of Zakir Enterprise Group — delivering public infrastructure, commercial buildings and heavy civil works across 64 districts.",
    hero: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=2000&q=80&auto=format&fit=crop",
    since: 2014,
    est: "Est. 2014",
    code: "ZCL / 01",
    overview: {
      title: "A civil works partner, not a subcontractor.",
      body: [
        "Zakir Construction Ltd. is the principal civil engineering concern under Zakir Enterprise Group. We serve as the primary delivery arm for government infrastructure tenders, private commercial developments and industrial-scale site works across Bangladesh.",
        "Our engineering, quality and safety disciplines are built for the complexity of large-scale civil packages — from mat foundations in Dhaka's alluvial soil to bridge structures across seasonal rivers. We do not take work we cannot deliver. We deliver everything we take.",
      ],
      mission: "Engineer infrastructure that performs for its full design life — on schedule, on budget, with zero compromise on safety.",
    },
    facts: [
      { big: "11",    lbl: "Years of Delivery", sub: "Since 2014" },
      { big: "100+",  lbl: "Completed Projects", sub: "64 districts" },
      { big: "250+",  lbl: "Skilled Workforce", sub: "On active sites" },
      { big: "64",    lbl: "Districts Covered", sub: "Nationwide" },
      { big: "BDT 400Cr+", lbl: "Projects In Progress", sub: "Active portfolio" },
      { big: "5",     lbl: "Specialized Plants", sub: "Batching & precast" },
    ],
    services: [
      { icon: "building",   title: "Civil Construction",       copy: "Multi-storey commercial, institutional and industrial buildings. Turnkey delivery from piling to handover." },
      { icon: "road",       title: "Road Works & Highways",    copy: "Flexible and rigid pavement delivery under RHD, LGED and Roads Division specifications." },
      { icon: "bridge",     title: "Bridge & Culvert Works",   copy: "Small-to-mid-span bridges, box culverts, pier and girder construction with in-house methodology." },
      { icon: "earth",      title: "Earthwork & Site Dev.",    copy: "Mass excavation, embankment, grading and stabilization for industrial and institutional sites." },
      { icon: "foundation", title: "Foundation Engineering",   copy: "Bored pile, driven pile, raft and pad foundations with full geotechnical oversight." },
      { icon: "concrete",   title: "Structural Concrete",      copy: "RCC frames, shear walls, precast elements — supported by our own batching capacity." },
      { icon: "drain",      title: "Drainage & Utilities",     copy: "Storm and sewer networks, box drains, pump chambers and service utility packages." },
      { icon: "renov",      title: "Renovation & Retrofit",    copy: "Structural strengthening, seismic retrofit and heritage-sensitive renovation projects." },
      { icon: "equip",      title: "Equipment Services",       copy: "In-house fleet of excavators, pavers, rollers, batching plants and bridge launching gantries." },
    ],
    why: [
      { big: "01", title: "Skilled Workforce",     copy: "A standing team of 250+ engineers, supervisors and skilled operators — not a dispatch list." },
      { big: "02", title: "Proven Delivery",       copy: "100+ completed projects under RHD, LGED, BEZA, private clients. Zero catastrophic delivery failures." },
      { big: "03", title: "Quality Control",       copy: "ISO 9001:2015 certified for three consecutive cycles. 100% concrete cube testing, 100% pile integrity testing." },
      { big: "04", title: "Safety Compliance",     copy: "One million man-hours worked without lost-time injury across six active sites — 2025 record." },
      { big: "05", title: "Fast Execution",        copy: "A nine-gate delivery protocol that compresses schedule without compressing discipline." },
      { big: "06", title: "Reliable Support",      copy: "Dedicated project desk responds within two working days with a structured next step." },
    ],
    projects: [
      { title: "Dhaka Corridor Road Package",   loc: "Dhaka Division",    cat: "Highway", summary: "BDT 180 crore four-lane corridor under the Roads & Highways Department.", img: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?w=1400&q=80&auto=format&fit=crop" },
      { title: "Cumilla Industrial Park",       loc: "Cumilla · BEZA",    cat: "Earthwork", summary: "BDT 95 crore site development — 180 acres of earthwork, drainage and utilities.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80&auto=format&fit=crop" },
      { title: "Padma South Connector",         loc: "Shariatpur",         cat: "Bridge",   summary: "Civil works package on the Padma South corridor — 70% superstructure complete.", img: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=1400&q=80&auto=format&fit=crop" },
      { title: "Narayanganj Batching Plant",    loc: "Narayanganj",        cat: "Plant",    summary: "120 m³/hour high-capacity concrete facility — in-house supply for southern corridor.", img: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=1400&q=80&auto=format&fit=crop" },
      { title: "Sylhet LGED Rural Roads",       loc: "Sylhet Division",    cat: "Roads",    summary: "Three LGED packages — 42 km of rural infrastructure with culverts and drainage.", img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1400&q=80&auto=format&fit=crop" },
      { title: "Chattogram Industrial Access",  loc: "Chattogram",         cat: "Award",    summary: "2025 Construction Excellence Award — infrastructure category winner.", img: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=1400&q=80&auto=format&fit=crop" },
    ],
    process: [
      { step: "01", title: "Consultation",      copy: "Site walk, scope review and preliminary engineering brief — no cost, no obligation." },
      { step: "02", title: "Planning & Design", copy: "Method statement, schedule, BOQ verification and geotechnical review by named engineers." },
      { step: "03", title: "Mobilization",     copy: "Camp, plant, access and utility setup. HSE induction for all site personnel before Day 1." },
      { step: "04", title: "Site Execution",   copy: "Phased delivery with weekly client-facing progress reports and live test data logs." },
      { step: "05", title: "Quality Assurance", copy: "100% structural testing — cube strength, pile integrity, density, levels — signed at each gate." },
      { step: "06", title: "Handover & DLP",   copy: "Documented handover with as-built drawings. 12-month defects liability period with named response team." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=1200&q=80&auto=format&fit=crop",
    ],
    faqs: [
      { q: "What services does Zakir Construction Ltd. provide?", a: "Civil construction, road works, bridge and culvert construction, earthwork, foundation engineering, structural concrete, drainage and utilities, renovation and equipment services. Full turnkey delivery on projects where we are appointed principal contractor." },
      { q: "Does the concern work nationwide?", a: "Yes. We have delivered projects across all 64 districts. Our regional project offices cover Dhaka, Chattogram, Sylhet, Rajshahi, Khulna, Rangpur and Barishal divisions with local mobilization capacity." },
      { q: "How do I request a quotation?", a: "Share your scope, site location and indicative timeline through our project desk (Contact page). A named engineer responds within two working days with a structured scope review and budget range." },
      { q: "Do you handle government tenders?", a: "Yes. We are pre-qualified for RHD, LGED, BEZA, Roads Division and several other agency tenders. We hold current ISO 9001:2015 certification and clear pre-qualification documentation." },
      { q: "What is your safety record?", a: "One million man-hours worked without lost-time injury across six active sites in 2025. We follow an OSHA-aligned HSE protocol — 120 site supervisors completed advanced safety training in 2025." },
      { q: "Can Zakir Construction manage the full project lifecycle?", a: "Yes — from pre-tender scope consultation through design coordination, execution, commissioning and 12-month defects liability support. We do not hand off responsibility at mobilization." },
    ],
  },
];

window.CONCERNS = CONCERNS;

// ───────── Hero ─────────
function CdHero({ c }) {
  return (
    <section className="cd-hero" data-screen-label="01 Concern Hero">
      <div className="cd-hero-bg" style={{ backgroundImage: `url(${c.hero})` }}/>
      <div className="container cd-hero-inner">
        <div className="bg-crumbs" style={{marginBottom:28}}>
          <a href="Zakir Enterprise.html">Home</a>
          <span className="sep">/</span>
          <a href="Zakir Enterprise.html">Concerns</a>
          <span className="sep">/</span>
          <span className="current">{c.short}</span>
        </div>
        <div className="cd-hero-badge">
          <div className="cd-hero-badge-mark">Z</div>
          <div className="cd-hero-badge-body">
            <div className="cd-hero-badge-unit">Concern · Zakir Enterprise Group</div>
            <div className="cd-hero-badge-code">{c.code} · {c.est}</div>
          </div>
        </div>
        <h1>{c.name}</h1>
        <p className="cd-hero-tag">{c.tagline}</p>
        <p className="cd-hero-sub">{c.intro}</p>
        <div className="cd-hero-ctas">
          <a href="Let's Collaborate.html" className="btn btn-primary">Contact This Concern <CdA/></a>
          <a href="#projects" className="btn btn-outline-light">View Projects</a>
        </div>
        <div className="cd-hero-meta">
          <div className="m"><span className="k">Parent Group</span><span className="v">Zakir Enterprise</span></div>
          <div className="m"><span className="k">Scope</span><span className="v">{c.short}</span></div>
          <div className="m"><span className="k">Coverage</span><span className="v">64 Districts</span></div>
          <div className="m"><span className="k">Status</span><span className="v"><span className="dot-live"/>Active &amp; Delivering</span></div>
        </div>
      </div>
    </section>
  );
}

// ───────── Overview ─────────
function CdOverview({ c }) {
  return (
    <section className="cd-overview" data-screen-label="02 Overview">
      <div className="container cd-overview-grid">
        <div className="cd-overview-left">
          <span className="microlabel">Concern Overview</span>
          <h2>{c.overview.title}</h2>
          <div className="cd-overview-quick">
            <div><div className="n">2014</div><div className="l">Established</div></div>
            <div><div className="n">100+</div><div className="l">Projects</div></div>
            <div><div className="n">64</div><div className="l">Districts</div></div>
          </div>
        </div>
        <div className="cd-overview-right">
          {c.overview.body.map((p, i) => <p key={i}>{p}</p>)}
          <div className="cd-mission">
            <div className="cd-mission-label">Mission</div>
            <blockquote>{c.overview.mission}</blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────── Quick Facts ─────────
function CdFacts({ c }) {
  return (
    <section className="cd-facts" data-screen-label="03 Quick Facts">
      <div className="container">
        <div className="cd-facts-head">
          <div>
            <span className="microlabel on-dark">By The Numbers</span>
            <h2>A delivery record that <span className="accent">speaks for itself.</span></h2>
          </div>
          <p>Every figure below is drawn from active project data — not press releases. We publish what we can prove.</p>
        </div>
        <div className="cd-facts-grid">
          {c.facts.map((f, i) => (
            <div key={i} className="cd-fact-card">
              <div className="cd-fact-index">{String(i+1).padStart(2,'0')}</div>
              <div className="cd-fact-big">{f.big}</div>
              <div className="cd-fact-lbl">{f.lbl}</div>
              <div className="cd-fact-sub">{f.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────── Services / Capabilities ─────────
function CdServices({ c }) {
  return (
    <section className="cd-services" id="services" data-screen-label="04 Services">
      <div className="container">
        <div className="cd-section-head">
          <div>
            <span className="microlabel">Services & Capabilities</span>
            <h2>What this concern delivers.</h2>
          </div>
          <p>A full civil engineering stack — assembled in-house, not subcontracted out.</p>
        </div>
        <div className="cd-services-grid">
          {c.services.map((s, i) => (
            <div key={i} className="cd-service-card">
              <div className="cd-service-icon"><CdSvcIcon kind={s.icon}/></div>
              <div className="cd-service-num">{String(i+1).padStart(2,'0')}</div>
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
              <span className="cd-service-more">Learn more <CdA size={12}/></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────── Why Choose ─────────
function CdWhy({ c }) {
  return (
    <section className="cd-why" data-screen-label="05 Why Choose">
      <div className="container cd-why-grid">
        <div className="cd-why-aside">
          <span className="microlabel">Why Choose Us</span>
          <h2>Six reasons clients<br/>come back for project two.</h2>
          <p>The industry has plenty of contractors. We aim to be the one you do not have to watch.</p>
          <a href="Let's Collaborate.html" className="btn btn-dark">Start a Conversation <CdA/></a>
        </div>
        <div className="cd-why-list">
          {c.why.map((w, i) => (
            <div key={i} className="cd-why-item">
              <div className="cd-why-num">{w.big}</div>
              <div className="cd-why-body">
                <h4>{w.title}</h4>
                <p>{w.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────── Featured Projects ─────────
function CdProjects({ c }) {
  return (
    <section className="cd-projects" id="projects" data-screen-label="06 Projects">
      <div className="container">
        <div className="cd-section-head">
          <div>
            <span className="microlabel">Featured Projects</span>
            <h2>Delivery speaks<br/>louder than positioning.</h2>
          </div>
          <a href="Zakir Enterprise.html#projects" className="btn btn-outline-dark">View All Projects <CdA/></a>
        </div>
        <div className="cd-projects-grid">
          {c.projects.map((p, i) => (
            <a key={i} className={`cd-project-card ${i === 0 ? "wide" : ""}`} href="#" style={{textDecoration:"none"}}>
              <div className="cd-project-img" style={{backgroundImage:`url(${p.img})`}}>
                <span className="cd-project-cat">{p.cat}</span>
              </div>
              <div className="cd-project-body">
                <div className="cd-project-loc">{p.loc}</div>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <span className="cd-project-more">View Project <CdAUR size={12}/></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────── Process ─────────
function CdProcess({ c }) {
  return (
    <section className="cd-process" data-screen-label="07 Process">
      <div className="container">
        <div className="cd-section-head">
          <div>
            <span className="microlabel on-dark">Work Process</span>
            <h2>A six-stage delivery protocol.</h2>
          </div>
          <p>Every project follows the same discipline — from the first site walk to the twelfth defects review.</p>
        </div>
        <div className="cd-process-track">
          {c.process.map((p, i) => (
            <div key={i} className="cd-process-step">
              <div className="cd-process-connector">
                <span className="cd-process-dot"/>
                {i < c.process.length - 1 && <span className="cd-process-line"/>}
              </div>
              <div className="cd-process-body">
                <div className="cd-process-num">{p.step}</div>
                <h4>{p.title}</h4>
                <p>{p.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────── Gallery ─────────
function CdGallery({ c }) {
  return (
    <section className="cd-gallery" data-screen-label="08 Gallery">
      <div className="container">
        <div className="cd-section-head">
          <div>
            <span className="microlabel">Field Gallery</span>
            <h2>Site conditions.<br/>Engineering reality.</h2>
          </div>
          <p>Imagery from active and recently-completed projects across the concern's portfolio.</p>
        </div>
        <div className="cd-gallery-grid">
          {c.gallery.map((url, i) => (
            <div key={i} className={`cd-gallery-cell g-${i}`} style={{backgroundImage:`url(${url})`}}>
              <div className="cd-gallery-tag">{String(i+1).padStart(2,'0')}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────── Related Concerns ─────────
function CdRelated() {
  const others = [
    { name: "Zakir Engineering Works",   desc: "Industrial plant, steel fabrication and specialized mechanical systems.",  tag: "Mechanical"  },
    { name: "Zakir Plant & Machinery",   desc: "Heavy equipment leasing, maintenance and operator training services.",    tag: "Equipment"   },
    { name: "Zakir Trading & Supply",    desc: "Construction materials procurement — steel, cement, aggregates, utilities.", tag: "Supply Chain"},
    { name: "Zakir Real Estate Ltd.",    desc: "Commercial and residential development projects under the group portfolio.",tag: "Real Estate" },
  ];
  return (
    <section className="cd-related" data-screen-label="09 Related Concerns">
      <div className="container">
        <div className="cd-section-head">
          <div>
            <span className="microlabel">Zakir Enterprise Group</span>
            <h2>Explore other concerns.</h2>
          </div>
          <p>One group. Multiple specialized concerns. Shared delivery discipline.</p>
        </div>
        <div className="cd-related-grid">
          {others.map((o, i) => (
            <a key={i} className="cd-related-card" href="#" style={{textDecoration:"none"}}>
              <div className="cd-related-index">0{i+2}</div>
              <span className="cd-related-tag">{o.tag}</span>
              <h4>{o.name}</h4>
              <p>{o.desc}</p>
              <span className="cd-related-arrow"><CdAUR/></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────── FAQ ─────────
function CdFAQ({ c }) {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="cd-faq" data-screen-label="10 FAQ">
      <div className="container cd-faq-grid">
        <div>
          <span className="microlabel">Frequently Asked</span>
          <h2>Answers before<br/>you ask them.</h2>
          <p>Cannot find what you are looking for? Our project desk responds within two working days.</p>
          <a href="Let's Collaborate.html" className="btn btn-dark">Ask the Project Desk <CdA/></a>
        </div>
        <div className="cd-faq-list">
          {c.faqs.map((f, i) => (
            <div key={i} className={`cd-faq-item ${open === i ? "open" : ""}`}>
              <button className="cd-faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="cd-faq-num">{String(i+1).padStart(2,'0')}</span>
                <span className="cd-faq-text">{f.q}</span>
                <span className="cd-faq-sign">{open === i ? "−" : "+"}</span>
              </button>
              <div className="cd-faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────── CTA Banner ─────────
function CdCTA({ c }) {
  return (
    <section className="cd-cta" data-screen-label="11 CTA">
      <div className="cd-cta-bg" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=2000&q=80&auto=format&fit=crop)` }}/>
      <div className="container cd-cta-grid">
        <div>
          <span className="microlabel on-dark">Start Here</span>
          <h2>Work with <span className="accent">{c.name}</span><br/>on your next project.</h2>
        </div>
        <div className="cd-cta-right">
          <p>Tell us your scope, site and timeline. A named engineer will come back within two working days with a structured next step and indicative budget.</p>
          <div className="cd-cta-btns">
            <a href="Let's Collaborate.html" className="btn btn-primary">Contact Us <CdA/></a>
            <a href="Let's Collaborate.html" className="btn btn-outline-light">Get a Quote</a>
          </div>
          <div className="cd-cta-contact">
            <div><span className="k">Project Desk</span><span className="v">+880 17XX XXX XXX</span></div>
            <div><span className="k">Email</span><span className="v">projects@zakirenterprise.com</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CdHero, CdOverview, CdFacts, CdServices, CdWhy, CdProjects, CdProcess, CdGallery, CdRelated, CdFAQ, CdCTA });
