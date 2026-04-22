// Service Details app composition + data

const { useState, useEffect } = React;

const SERVICE_DATA = {
  title: "Building Construction",
  subtitle: "From high-rise commercial towers to institutional and residential projects — executed nationwide with structural integrity, safety compliance and on-time delivery.",
  meta: [
    { k: "Service Category", v: "Construction" },
    { k: "Project Scale", v: "2 — 20 storeys" },
    { k: "Delivery Reach", v: "All 64 districts" },
    { k: "Typical Timeline", v: "12 — 36 months" },
  ],
  overview: {
    title: "Premium building construction, engineered for performance.",
    lead: "Zakir Enterprise delivers commercial, institutional and residential buildings across Bangladesh — with disciplined structural execution, full compliance documentation and a single accountable project team.",
    body: [
      "From foundation to final finishing, every Zakir Enterprise build is delivered by an integrated team of civil engineers, site managers, quality controllers and skilled tradespeople. We handle public-sector tenders, private commercial developments and institutional projects with the same structured delivery approach.",
      "Our building works cover reinforced concrete frames, steel and composite structures, MEP coordination, external facades and finishing trades — underpinned by stringent material testing, safety planning and milestone-based reporting for every client.",
    ],
    bullets: [
      "RCC & steel frame buildings",
      "Commercial & office towers",
      "Institutional & public works",
      "Residential apartments",
      "MEP coordination",
      "Premium interior finishing",
    ],
  },
  scope: [
    { icon: "building",   title: "Planning & Design Coordination", body: "Feasibility studies, BoQ development, consultant coordination and constructability reviews before ground is broken." },
    { icon: "earth",      title: "Site Preparation & Earthworks", body: "Survey, clearing, excavation, dewatering, compaction and site logistics setup aligned with ground conditions." },
    { icon: "foundation", title: "Foundation & Substructure", body: "Pile foundations, raft, pile-cap, basement walls and waterproofing with independent load testing." },
    { icon: "concrete",   title: "Superstructure Execution", body: "Reinforced concrete frames, slabs, columns and shear walls — cast with quality-controlled concrete mixes." },
    { icon: "finish",     title: "Finishing & MEP Fit-out", body: "Masonry, plastering, tiling, joinery and coordinated MEP installations for commercial-grade fit-out." },
    { icon: "special",    title: "Quality, Safety & Handover", body: "Testing, snagging, commissioning, compliance documentation and structured handover with as-built drawings." },
  ],
  process: [
    { tag: "Phase 01", title: "Consult & Scope", body: "Client brief, site assessment and requirements mapping with engineering input." },
    { tag: "Phase 02", title: "Plan & Estimate", body: "Detailed BoQ, schedule, procurement plan and a transparent fixed-scope quotation." },
    { tag: "Phase 03", title: "Mobilize Site", body: "Site setup, workforce deployment, safety induction and logistics activation." },
    { tag: "Phase 04", title: "Execute & Monitor", body: "Structured execution with milestone reporting, QA/QC checks and safety audits." },
    { tag: "Phase 05", title: "Commission & Handover", body: "Testing, snag-list closure, compliance documents and formal handover with warranty." },
  ],
  benefits: [
    { icon: "building", title: "A Decade of Delivery",        body: "Over 100 building projects delivered since 2014 across public, commercial and private sectors." },
    { icon: "special",  title: "Quality Assurance Discipline", body: "Independent material testing, structured QA/QC checkpoints and third-party compliance sign-offs." },
    { icon: "equip",    title: "Safety-First Site Culture",    body: "HSE-trained supervision, induction protocols and zero-compromise policy on worker safety gear." },
    { icon: "road",     title: "On-Time Milestone Delivery",   body: "98% of milestones hit on schedule — backed by realistic planning and active logistics management." },
    { icon: "drain",    title: "Skilled Workforce at Scale",   body: "A 250+ strong direct team of engineers, managers, foremen and tradespeople, deployable nationwide." },
    { icon: "renov",    title: "Nationwide Project Capability", body: "Active execution across all 64 districts with regional project offices and field supervision." },
  ],
  machine: [
    { t: "Tower & Mobile Cranes",      d: "50T–120T capacity fleet for mid- and high-rise lifting operations." },
    { t: "Concrete Batching Plants",   d: "On-site and partnered plants for controlled-mix supply and slump testing." },
    { t: "Formwork Systems",           d: "Modern aluminium & plywood systems for faster, cleaner RCC pours." },
    { t: "Structural Steel Fabrication", d: "In-house welding bays and erection equipment for steel and composite frames." },
    { t: "MEP Coordination Tools",     d: "BIM-assisted clash detection and commissioning checklists." },
    { t: "Testing & QA Labs",          d: "Cube, rebar, soil and concrete testing with third-party audit alignment." },
  ],
  related: [
    { img: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=1200&q=80&auto=format&fit=crop", cat: "Commercial", loc: "Gulshan · Dhaka", type: "Ongoing · 2025", title: "14-Storey Commercial Tower",
      line: "Premium RCC office tower with curtain-wall façade and full MEP fit-out for a corporate client." },
    { img: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=1200&q=80&auto=format&fit=crop", cat: "Institutional", loc: "Chattogram", type: "Delivered · 2024", title: "Government Training Complex",
      line: "Five-block academic complex executed under a national tender, delivered four weeks ahead of schedule." },
    { img: "https://images.unsplash.com/photo-1621352452648-c717c4eba35f?w=1200&q=80&auto=format&fit=crop", cat: "Residential", loc: "Banani · Dhaka", type: "Delivered · 2023", title: "Premium Residential Apartments",
      line: "Twelve-storey private apartments with structured basement parking and premium interior finishing." },
  ],
  faq: [
    { q: "What types of buildings does Zakir Enterprise take on?",
      a: "We deliver commercial towers, institutional complexes, government buildings and premium residential projects — typically from 2 to 20 storeys. Our teams are structured for both RCC and steel-frame construction, with full in-house MEP coordination." },
    { q: "How do you handle project pricing and quotations?",
      a: "After a site visit and scope review, we submit a detailed BoQ-based quotation with fixed line items, milestone-linked payment terms and a clear delivery schedule. All quotations are valid for 30 days and include material specifications." },
    { q: "What is your typical delivery timeline for a building project?",
      a: "Most mid-rise buildings we deliver fall between 12 and 36 months depending on scope, site conditions and MEP complexity. We issue a milestone plan at contract signing and report weekly against it." },
    { q: "How do you ensure structural quality and safety on site?",
      a: "Every build follows a documented QA/QC protocol — material testing, rebar inspection, concrete cube testing, third-party audits and HSE compliance checks. Findings are logged and shared with the client in weekly reports." },
    { q: "Do you operate outside Dhaka?",
      a: "Yes. We execute projects across all 64 districts of Bangladesh with regional project offices and a deployable field workforce. Logistics, camp setup and permitting are handled by our mobilization team." },
    { q: "What kind of warranty and post-handover support do you provide?",
      a: "Every building is handed over with as-built drawings, compliance documents and a 12-month structural defect liability period. MEP systems carry manufacturer warranties extended through our service desk." },
  ],
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [tweaks, setTweaks] = useState(window.TWEAKS);
  const [tweaksOpen, setTweaksOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--lime", tweaks.primaryLime || "#B7E22A");
    root.style.setProperty("--gold", tweaks.gold || "#D4A017");
    root.style.setProperty("--black", tweaks.authority || "#111111");
    if (tweaks.heroAccent === "gold") {
      document.querySelectorAll(".svc-hero h1 .accent").forEach(el => el.style.color = "var(--gold)");
    } else {
      document.querySelectorAll(".svc-hero h1 .accent").forEach(el => el.style.color = "var(--lime)");
    }
  }, [tweaks]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMsg = (e) => {
      if (!e.data) return;
      if (e.data.type === "__activate_edit_mode") setTweaksOpen(true);
      if (e.data.type === "__deactivate_edit_mode") setTweaksOpen(false);
    };
    window.addEventListener("message", onMsg);
    try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch {}
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const d = SERVICE_DATA;
  const service = tweaks.serviceName || d.title;

  return (
    <>
      <Nav scrolled={scrolled}/>
      <SvcHero title={service} subtitle={d.subtitle} meta={d.meta}/>
      <SvcSubnav/>
      <SvcOverview title={d.overview.title} lead={d.overview.lead} body={d.overview.body} bullets={d.overview.bullets}/>
      <SvcScope items={d.scope}/>
      <SvcProcess steps={d.process}/>
      <SvcBenefits items={d.benefits}/>
      <SvcMachinery items={d.machine} stat={{ big: "120+", lbl: "Active equipment units" }}/>
      <SvcRelated items={d.related}/>
      <SvcFAQ items={d.faq}/>
      <SvcCTA service={service}/>
      <Footer/>
      <MobileSticky/>
      <ServiceTweaks open={tweaksOpen} tweaks={tweaks} setTweaks={setTweaks} onClose={() => setTweaksOpen(false)}/>
    </>
  );
}

function ServiceTweaks({ open, tweaks, setTweaks, onClose }) {
  if (!open) return null;
  const update = (patch) => {
    const next = { ...tweaks, ...patch };
    setTweaks(next);
    try { window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*"); } catch {}
  };
  const swatches = ["#B7E22A", "#CFE85A", "#9BC41E", "#D4A017", "#E8C35A"];
  return (
    <div className="tweaks">
      <div className="tweaks-head">
        <span>Tweaks</span>
        <button className="tweaks-close" onClick={onClose}>✕</button>
      </div>
      <div className="tweaks-body">
        <div className="tweak-row">
          <label>Service name</label>
          <input type="text" value={tweaks.serviceName || "Building Construction"}
                 onChange={e => update({ serviceName: e.target.value })}/>
        </div>
        <div className="tweak-row">
          <label>Primary accent</label>
          <div className="tweak-swatches">
            {swatches.map(c => (
              <button key={c} className={`tweak-swatch ${tweaks.primaryLime === c ? "active" : ""}`}
                      style={{background: c}} onClick={() => update({ primaryLime: c })}/>
            ))}
          </div>
        </div>
        <div className="tweak-row">
          <label>Hero accent color</label>
          <div className="tweak-options">
            {["lime","gold"].map(v => (
              <button key={v} className={`tweak-opt ${ (tweaks.heroAccent||"lime") === v ? "active" : ""}`}
                      onClick={() => update({ heroAccent: v })}>{v}</button>
            ))}
          </div>
        </div>
        <div className="tweak-row">
          <label>Authority tone</label>
          <div className="tweak-options">
            {[["#111111","charcoal"],["#0f1c12","deep olive"],["#1a1a1a","ink"]].map(([c, l]) => (
              <button key={c} className={`tweak-opt ${tweaks.authority === c ? "active" : ""}`}
                      onClick={() => update({ authority: c })}>{l}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
