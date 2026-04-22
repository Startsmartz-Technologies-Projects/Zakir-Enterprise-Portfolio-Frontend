// News Detail — article sections

const { Arrow: NdA, ArrowUpRight: NdAUR } = window.UI;

// Rich article content for each news id (falls back to a generic body)
const ARTICLE_BODIES = {
  "road-dhaka-awarded": {
    lead: "Zakir Enterprise has been awarded a BDT 180 crore civil works contract under the Roads & Highways Department to deliver a 42-kilometer four-lane corridor expansion across Dhaka's eastern bypass — a significant strengthening of our national infrastructure portfolio and a decisive vote of confidence from the country's leading road authority.",
    sections: [
      { type: "h2", text: "A strategic national corridor" },
      { type: "p", text: "The newly awarded scope covers full-width road widening, median construction, rigid pavement works, stormwater drainage upgrades, and the construction of fourteen new RCC box culverts. Work will be executed over a 24-month delivery window, with the first site mobilization scheduled for April 2026." },
      { type: "p", text: "This corridor is a critical link between Dhaka's eastern periphery and the greater industrial belt. Once operational, it is expected to reduce heavy-vehicle transit times into the capital by nearly 40% and unlock further private investment along the route." },
      { type: "callout", stats: [
        { big: "BDT 180Cr", lbl: "Contract Value" },
        { big: "42 km",     lbl: "Corridor Length" },
        { big: "24 mo",     lbl: "Delivery Window" },
      ]},
      { type: "h2", text: "Scope of civil works" },
      { type: "p", text: "The integrated scope positions Zakir Enterprise across every layer of the road delivery stack — from earthwork and sub-base through to premium finishing and ancillary structures." },
      { type: "ul", items: [
        "Full-depth pavement reconstruction across 42 km",
        "14 new RCC box culverts and drainage structures",
        "Premium asphalt surfacing with a 12-year design life",
        "Median construction, side drains, and safety barriers",
        "Road markings, signage, and reflective safety systems",
        "Environmental compliance and community coordination",
      ]},
      { type: "image", src: "https://images.unsplash.com/photo-1617972740399-d6fae21ebf3f?w=1600&q=80&auto=format&fit=crop", cap: "Road widening works will begin with intensive subgrade preparation across the first 12 km package." },
      { type: "quote", text: "Winning this corridor is a proud moment for our team. It reflects a decade of disciplined delivery and the trust our national partners continue to place in Zakir Enterprise.", cite: "Managing Director · Zakir Enterprise" },
      { type: "h2", text: "Mobilization and delivery approach" },
      { type: "p", text: "Two full-scale project camps will be established — one in Narayanganj and one in Keraniganj — with dedicated batching plants, fabrication yards and a safety-audited workforce exceeding 400 personnel at peak. Weekly progress dashboards will be published to the client through our digital project office." },
      { type: "p", text: "Execution will follow our standard QA/QC protocol with independent laboratory testing for subgrade, base course and surfacing, alongside a quarterly environmental compliance audit. A milestone-linked payment framework provides full transparency to all stakeholders throughout the delivery cycle." },
    ],
    tags: ["Roads & Highways", "RHD", "Infrastructure", "Dhaka", "2026 Projects"],
    author: { name: "Editorial Desk", role: "Zakir Enterprise Newsroom", initials: "ZE" },
  },
};

const DEFAULT_BODY = (item) => ({
  lead: item.excerpt,
  sections: [
    { type: "h2", text: "Overview" },
    { type: "p", text: "Zakir Enterprise continues to deliver on its commitment to bring disciplined civil execution, safety-audited sites, and on-time handover to every corner of Bangladesh's construction industry. This update reflects ongoing momentum across our active portfolio." },
    { type: "callout", stats: [
      { big: "100+",   lbl: "Completed Projects" },
      { big: "64",     lbl: "Districts Covered" },
      { big: "10 Yrs", lbl: "Proven Delivery" },
    ]},
    { type: "h2", text: "Why this matters" },
    { type: "p", text: "Each achievement, milestone, tender or CSR activity we publish in the Zakir Enterprise newsroom reflects real, measurable work — delivered by real teams at real sites. We publish openly because transparency is how the construction industry earns long-term trust." },
    { type: "ul", items: [
      "Full compliance documentation on every project",
      "Transparent, milestone-linked progress reporting",
      "Zero-compromise policy on worker safety and site HSE",
      "Deployable project teams across all 64 districts",
    ]},
    { type: "quote", text: "We measure our reputation in projects handed over on time, not in announcements. Every story here is backed by a site with real delivery.", cite: "Zakir Enterprise · Project Desk" },
    { type: "h2", text: "What's next" },
    { type: "p", text: "Our project desk continues to welcome new partnerships, tender collaborations and client briefs across all construction service lines. Visitors interested in a structured conversation are encouraged to reach out through our collaboration desk." },
  ],
  tags: ["Zakir Enterprise", "Bangladesh", "Construction"],
  author: { name: "Editorial Desk", role: "Zakir Enterprise Newsroom", initials: "ZE" },
});

// Share icons
const ShareIc = ({ k }) => {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "currentColor" };
  const paths = {
    li: "M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.3 18H5.7V9.7h2.6V18zM7 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM18.3 18h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V18h-2.6V9.7h2.5v1.1h0a2.7 2.7 0 0 1 2.5-1.4c2.6 0 3.1 1.7 3.1 4V18z",
    fb: "M13 22v-8h3l.5-4H13V7.5c0-1.2.3-2 2-2h2V2.1C16.5 2 15.5 2 14.5 2 11.8 2 10 3.7 10 6.7V10H7v4h3v8h3z",
    x:  "M18 2h3.3l-7.2 8.2L22.5 22h-6.6l-5.2-6.8L4.8 22H1.4l7.7-8.8L1.6 2h6.8l4.7 6.2L18 2zm-1.2 18h1.8L7.3 4h-2l11.5 16z",
    tw: "M20.2 3.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.2-.8.5-1.7.8-2.6 1A4.1 4.1 0 0 0 10 7.1c0 .3 0 .6.1.9A11.7 11.7 0 0 1 1.7 3.7a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.9.1.5 1.7 2.1 2.9 4 2.9a8.2 8.2 0 0 1-6.1 1.7A11.6 11.6 0 0 0 19 7.9c0-.2 0-.4 0-.5.8-.6 1.5-1.3 2-2.1-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.2h-.3z",
    link: ""
  };
  if (k === "link") return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
      <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/>
      <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>
    </svg>
  );
  return <svg {...common}><path d={paths[k]}/></svg>;
};

// Hero
function NdHero({ item }) {
  return (
    <section className="nd-hero" data-screen-label="01 Article Hero">
      <div className="nd-hero-bg" style={{ backgroundImage: `url(${item.image})` }}/>
      <div className="nd-hero-inner">
        <div className="nc-crumbs">
          <a href="Zakir Enterprise.html">Home</a>
          <span className="sep">/</span>
          <a href="News Corner.html">News</a>
          <span className="sep">/</span>
          <span className="current">{item.category}</span>
        </div>
        <div className="nd-header-meta" style={{marginTop:24}}>
          <span className="nd-pill">{item.category}</span>
          <span className="nd-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
              <rect x="3" y="5" width="18" height="16" rx="1"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/>
            </svg>
            {item.date}
          </span>
          <span className="nd-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
              <circle cx="12" cy="12" r="9"/><polyline points="12,7 12,12 16,14"/>
            </svg>
            {item.readTime}
          </span>
        </div>
        <h1>{item.title}</h1>
        <div className="nd-author">
          <div className="nd-author-avatar">ZE</div>
          <div className="nd-author-info">
            <div className="name">Editorial Desk</div>
            <div className="role">Zakir Enterprise Newsroom</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Featured image panel (overlapping hero)
function NdFeaturedImage({ item }) {
  return (
    <div className="nd-featured-img" data-screen-label="02 Hero Image">
      <div className="frame" style={{ backgroundImage: `url(${item.image})` }}/>
      <div className="container">
        <div className="nd-featured-caption">Photo · On-site coverage from the {item.category.toLowerCase()} announcement.</div>
      </div>
    </div>
  );
}

// Article body (renders sections array)
function NdArticleBody({ item, body }) {
  const [copied, setCopied] = React.useState(false);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const copy = () => {
    try { navigator.clipboard.writeText(shareUrl); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const renderSection = (s, idx) => {
    switch (s.type) {
      case "h2": return <h2 key={idx}>{s.text}</h2>;
      case "h3": return <h3 key={idx}>{s.text}</h3>;
      case "p":  return <p key={idx}>{s.text}</p>;
      case "ul": return <ul key={idx}>{s.items.map((it, i) => <li key={i}>{it}</li>)}</ul>;
      case "quote": return (
        <div key={idx} className="nd-quote">
          <blockquote>{s.text}<cite>{s.cite}</cite></blockquote>
        </div>
      );
      case "callout": return (
        <div key={idx} className="nd-callout">
          {s.stats.map((st, i) => (
            <div key={i} className="stat"><div className="big">{st.big}</div><div className="lbl">{st.lbl}</div></div>
          ))}
        </div>
      );
      case "image": return (
        <div key={idx} className="nd-inline-img">
          <div className="frame" style={{ backgroundImage: `url(${s.src})` }}/>
          {s.cap && <div className="cap">{s.cap}</div>}
        </div>
      );
      default: return null;
    }
  };

  return (
    <section className="nd-article" data-screen-label="03 Article Body">
      <div className="nd-article-inner">
        <aside className="nd-share-rail">
          <span className="lbl">Share</span>
          <a className="nd-share-btn" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener"><ShareIc k="li"/></a>
          <a className="nd-share-btn" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener"><ShareIc k="fb"/></a>
          <a className="nd-share-btn" href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(item.title)}`} target="_blank" rel="noopener"><ShareIc k="x"/></a>
          <button className={`nd-share-btn ${copied ? "copied" : ""}`} onClick={copy} title="Copy link">
            {copied ? "✓" : <ShareIc k="link"/>}
          </button>
        </aside>
        <div className="nd-body">
          <p className="lead">{body.lead}</p>
          {body.sections.map(renderSection)}

          <div className="nd-tags">
            <span className="lbl">Tags</span>
            {body.tags.map(t => <a key={t} href="News Corner.html" className="nd-tag">#{t}</a>)}
          </div>

          <div className="nd-share-mobile">
            <a className="nd-share-btn" href="#"><ShareIc k="li"/></a>
            <a className="nd-share-btn" href="#"><ShareIc k="fb"/></a>
            <a className="nd-share-btn" href="#"><ShareIc k="x"/></a>
            <button className={`nd-share-btn ${copied ? "copied" : ""}`} onClick={copy}>{copied ? "✓" : <ShareIc k="link"/>}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Gallery
function NdGallery() {
  const imgs = [
    "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=1400&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1590155520778-c38bd85dfd6e?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1617972740399-d6fae21ebf3f?w=900&q=80&auto=format&fit=crop",
  ];
  return (
    <section className="nd-gallery" data-screen-label="04 Gallery">
      <div className="nd-gallery-head">
        <span className="microlabel">Project Gallery</span>
        <h3>From the site — supporting visuals.</h3>
      </div>
      <div className="nd-gallery-grid">
        {imgs.map((src, i) => <div key={i} className="g" style={{backgroundImage:`url(${src})`}}/>)}
      </div>
    </section>
  );
}

// Related news
function NdRelated({ currentId }) {
  const items = window.NEWS_DATA.filter(n => n.id !== currentId).slice(0, 3);
  return (
    <section className="nd-related" data-screen-label="05 Related">
      <div className="container">
        <div className="nc-grid-head">
          <div>
            <span className="microlabel">Read More</span>
            <h2 style={{marginTop:14,fontSize:"clamp(28px,2.8vw,40px)",fontWeight:800,color:"var(--forest)",letterSpacing:"-0.02em"}}>Related Stories</h2>
          </div>
          <a href="News Corner.html" className="btn btn-outline-dark">View All News <NdA/></a>
        </div>
        <div className="nc-grid">
          {items.map((it, i) => <NewsCard key={it.id} item={it} limeIdx={i === 0}/>)}
        </div>
      </div>
    </section>
  );
}

// Detail CTA
function NdCTA() {
  return (
    <section className="nc-cta" data-screen-label="06 CTA Banner">
      <div className="nc-cta-bg" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=2000&q=80&auto=format&fit=crop)` }}/>
      <div className="container">
        <div className="nc-cta-grid">
          <div>
            <span className="microlabel on-dark">Ready To Build</span>
            <h2>Need a <span className="accent">reliable</span> construction partner?</h2>
          </div>
          <div className="nc-cta-right">
            <p>
              Talk to the Zakir Enterprise project desk. We respond to every
              serious inquiry within two working days with a structured
              next step and clear ownership.
            </p>
            <div className="nc-cta-btns">
              <a href="Let's Collaborate.html" className="btn btn-primary">Let's Collaborate <NdA/></a>
              <a href="Projects.html" className="btn btn-outline-light">Explore Projects</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.ARTICLE_BODIES = ARTICLE_BODIES;
window.DEFAULT_BODY = DEFAULT_BODY;
Object.assign(window, { NdHero, NdFeaturedImage, NdArticleBody, NdGallery, NdRelated, NdCTA });
