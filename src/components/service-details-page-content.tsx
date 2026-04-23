"use client";

import * as React from "react";
import Link from "next/link";
import { Arrow, ArrowUpRight, SvcIcon } from "./site-ui";

const SIMG = {
  hero: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=2200&q=80&auto=format&fit=crop",
  machine: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80&auto=format&fit=crop",
  cta: "https://images.unsplash.com/photo-1590644875981-3b4dbbd8b8ac?w=2000&q=80&auto=format&fit=crop",
};

const SERVICE_DATA = {
  title: "Building Construction",
  subtitle:
    "From high-rise commercial towers to institutional and residential projects - executed nationwide with structural integrity, safety compliance and on-time delivery.",
  meta: [
    { k: "Service Category", v: "Construction" },
    { k: "Project Scale", v: "2 - 20 storeys" },
    { k: "Delivery Reach", v: "All 64 districts" },
    { k: "Typical Timeline", v: "12 - 36 months" },
  ],
  overview: {
    title: "Premium building construction, engineered for performance.",
    lead: "Zakir Enterprise delivers commercial, institutional and residential buildings across Bangladesh.",
    body: [
      "From foundation to final finishing, every Zakir Enterprise build is delivered by an integrated team of civil engineers, site managers, quality controllers and skilled tradespeople.",
      "Our building works cover reinforced concrete frames, steel and composite structures, MEP coordination, external facades and finishing trades.",
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
    { icon: "building", title: "Planning & Design Coordination", body: "Feasibility studies, BoQ development and constructability reviews." },
    { icon: "earth", title: "Site Preparation & Earthworks", body: "Survey, clearing, excavation, dewatering, compaction and logistics setup." },
    { icon: "foundation", title: "Foundation & Substructure", body: "Pile foundations, raft, pile-cap, basement walls and waterproofing." },
    { icon: "concrete", title: "Superstructure Execution", body: "Reinforced concrete frames, slabs, columns and shear walls." },
    { icon: "finish", title: "Finishing & MEP Fit-out", body: "Masonry, plastering, tiling, joinery and coordinated MEP installations." },
    { icon: "special", title: "Quality, Safety & Handover", body: "Testing, snagging, commissioning and structured handover." },
  ],
  process: [
    { tag: "Phase 01", title: "Consult & Scope", body: "Client brief, site assessment and requirement mapping." },
    { tag: "Phase 02", title: "Plan & Estimate", body: "Detailed BoQ, schedule and transparent quotation." },
    { tag: "Phase 03", title: "Mobilize Site", body: "Site setup, workforce deployment and logistics activation." },
    { tag: "Phase 04", title: "Execute & Monitor", body: "Execution with milestone reporting and QA/QC checks." },
    { tag: "Phase 05", title: "Commission & Handover", body: "Testing, closure and formal handover." },
  ],
  benefits: [
    { icon: "building", title: "A Decade of Delivery", body: "100+ projects delivered across sectors." },
    { icon: "special", title: "Quality Assurance Discipline", body: "Structured QA/QC checkpoints and compliance sign-offs." },
    { icon: "equip", title: "Safety-First Site Culture", body: "HSE-trained supervision and strict site safety policy." },
    { icon: "road", title: "On-Time Milestone Delivery", body: "Milestone-driven planning with active logistics control." },
    { icon: "drain", title: "Skilled Workforce at Scale", body: "250+ direct engineers, managers and tradespeople." },
    { icon: "renov", title: "Nationwide Project Capability", body: "Execution across all 64 districts of Bangladesh." },
  ],
  machine: [
    { t: "Tower & Mobile Cranes", d: "50T-120T lifting capacity fleet." },
    { t: "Concrete Batching Plants", d: "Controlled-mix supply and slump testing." },
    { t: "Formwork Systems", d: "Modern aluminium and plywood systems." },
    { t: "Structural Steel Fabrication", d: "In-house welding and erection tools." },
    { t: "MEP Coordination Tools", d: "BIM-assisted coordination and checklists." },
    { t: "Testing & QA Labs", d: "Cube, rebar, soil and concrete testing." },
  ],
  related: [
    {
      img: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=1200&q=80&auto=format&fit=crop",
      cat: "Commercial",
      loc: "Gulshan - Dhaka",
      type: "Ongoing - 2025",
      title: "14-Storey Commercial Tower",
      line: "Premium RCC office tower with curtain-wall facade and full MEP fit-out for a corporate client.",
    },
    {
      img: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=1200&q=80&auto=format&fit=crop",
      cat: "Institutional",
      loc: "Chattogram",
      type: "Delivered - 2024",
      title: "Government Training Complex",
      line: "Five-block academic complex delivered ahead of schedule.",
    },
    {
      img: "https://images.unsplash.com/photo-1621352452648-c717c4eba35f?w=1200&q=80&auto=format&fit=crop",
      cat: "Residential",
      loc: "Banani - Dhaka",
      type: "Delivered - 2023",
      title: "Premium Residential Apartments",
      line: "Twelve-storey private apartments with structured basement parking.",
    },
  ],
  faq: [
    {
      q: "What types of buildings does Zakir Enterprise take on?",
      a: "We deliver commercial towers, institutional complexes, government buildings and premium residential projects.",
    },
    {
      q: "How do you handle project pricing and quotations?",
      a: "After a site visit and scope review, we submit a detailed BoQ-based quotation with milestone-linked terms.",
    },
    {
      q: "What is your typical delivery timeline for a building project?",
      a: "Most mid-rise buildings fall between 12 and 36 months depending on scope and conditions.",
    },
    {
      q: "What is your typical delivery timeline for a building project?",
      a: "Most mid-rise buildings fall between 12 and 36 months depending on scope and conditions.",
    },
    {
      q: "What is your typical delivery timeline for a building project?",
      a: "Most mid-rise buildings fall between 12 and 36 months depending on scope and conditions.",
    },
    {
      q: "What is your typical delivery timeline for a building project?",
      a: "Most mid-rise buildings fall between 12 and 36 months depending on scope and conditions.",
    },
  ],
};

function SvcSubnav() {
  const [active, setActive] = React.useState("overview");
  const [isFixed, setIsFixed] = React.useState(false);
  const [navHeight, setNavHeight] = React.useState(92);
  const [subnavTop, setSubnavTop] = React.useState(0);
  const [subnavHeight, setSubnavHeight] = React.useState(0);
  const slotRef = React.useRef<HTMLDivElement | null>(null);
  const barRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const measure = () => {
      const nav = document.querySelector(".nav") as HTMLElement | null;
      const nextNavHeight = nav ? Math.round(nav.getBoundingClientRect().height) : 92;
      const nextTop = slotRef.current ? Math.round(slotRef.current.getBoundingClientRect().top + window.scrollY) : 0;
      const nextHeight = barRef.current?.offsetHeight ?? 0;

      setNavHeight(nextNavHeight);
      setSubnavTop(nextTop);
      setSubnavHeight(nextHeight);
    };

    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    };
  }, []);

  React.useEffect(() => {
    const onScroll = () => {
      const shouldFix = window.scrollY + navHeight >= subnavTop;
      setIsFixed((prev) => (prev === shouldFix ? prev : shouldFix));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [navHeight, subnavTop]);

  const items = [
    { id: "overview", label: "Overview" },
    { id: "scope", label: "Scope of Work" },
    { id: "process", label: "Execution Process" },
    { id: "benefits", label: "Why Choose Us" },
    { id: "capability", label: "Capability" },
    { id: "projects", label: "Related Projects" },
    { id: "faq", label: "FAQ" },
  ];
  return (
    <div ref={slotRef} style={isFixed ? { minHeight: subnavHeight } : undefined}>
      <div
        ref={barRef}
        className="svc-subnav"
        style={isFixed ? { position: "fixed", top: navHeight, left: 0, right: 0, zIndex: 40 } : undefined}
      >
        <div className="container">
          <div className="svc-subnav-inner flex justify-center">
            {items.map((it) => (
              <a key={it.id} href={`#${it.id}`} onClick={() => setActive(it.id)} className={active === it.id ? "active" : ""}>
                {it.label}
              </a>
            ))}
            {/* <div className="subnav-cta">
              <a href="#svc-cta" className="btn btn-dark">
                Request Quotation <Arrow />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function SvcFAQ({ items }: { items: Array<{ q: string; a: string }> }) {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="section-pad section-soft">
      <div className="container">
        <div className="faq-wrap">
          <div className="faq-left">
            <span className="num" style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.3em", color: "var(--gold)", marginBottom: 14, display: "block" }}>
              FREQUENTLY ASKED / 07
            </span>
            <h2>Questions from clients and stakeholders.</h2>
            <p>
              Clear, practical answers to the most common questions we receive from government bodies, developers, and private clients before engaging on a
              build.
            </p>
            <div className="faq-cta-card">
              <h5>Still have a question?</h5>
              <p>Speak with our project team for a detailed discussion on scope, timeline and pricing.</p>
              <Link href="#svc-cta" className="btn btn-primary">
                Contact Project Team <Arrow />
              </Link>
            </div>
          </div>
          <div className="faq-list">
            {items.map((it, i) => (
              <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span style={{ display: "flex", alignItems: "center", flex: 1 }}>
                    <span className="faq-num">Q.0{i + 1}</span>
                    <span>{it.q}</span>
                  </span>
                  <span className="faq-icon">{open === i ? "-" : "+"}</span>
                </button>
                <div className="faq-a">
                  <div>
                    <div className="faq-a-inner">{it.a}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceDetailsPageContent() {
  const d = SERVICE_DATA;
  return (
    <>
      <section className="svc-hero">
        <div className="svc-hero-bg" style={{ backgroundImage: `url(${SIMG.hero})` }} />
        <div className="container svc-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/#services">Services</Link>
            <span className="sep">/</span>
            <span className="crumb-now">{d.title}</span>
          </div>
          <div className="svc-hero-title-row">
            <div>
              <span className="microlabel on-dark">Construction Service - 04 / 12</span>
              <h1 style={{ marginTop: 24 }}>
                {d.title.split(" ").slice(0, -1).join(" ")} <span className="accent">{d.title.split(" ").slice(-1)}</span>
              </h1>
            </div>
            <p className="svc-hero-sub">{d.subtitle}</p>
          </div>
          <div className="svc-hero-meta">
            {d.meta.map((m, i) => (
              <div key={i}>
                <span className="k">{m.k}</span>
                <span className="v">{m.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SvcSubnav />

      <section id="overview" className="section-pad">
        <div className="container">
          <div className="svc-overview-grid">
            <div>
              <span className="num" style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.3em", color: "var(--gold)", marginBottom: 14, display: "block" }}>
                SERVICE OVERVIEW / 01
              </span>
              <h2>{d.overview.title}</h2>
              <p className="overview-lead">{d.overview.lead}</p>
            </div>
            <div className="overview-body">
              {d.overview.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <ul className="overview-keybullets">
                {d.overview.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="scope" className="section-pad section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="num">SCOPE OF WORK / 02</span>
              <h2>End-to-end capability under one delivery team.</h2>
            </div>
            <p className="head-right">
              From earliest planning through final handover, we execute every stage in-house with dedicated engineers, equipment and site supervision.
            </p>
          </div>
          <div className="scope-grid">
            {d.scope.map((it, i) => (
              <div key={i} className="scope-card">
                <div className="scope-top">
                  <div className="scope-icon">
                    <SvcIcon kind={it.icon} />
                  </div>
                  <span className="scope-num">
                    {String(i + 1).padStart(2, "0")} / {String(d.scope.length).padStart(2, "0")}
                  </span>
                </div>
                <h4>{it.title}</h4>
                <p>{it.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-pad section-dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="num" style={{ color: "var(--lime)" }}>
                EXECUTION PROCESS / 03
              </span>
              <h2>A disciplined five-stage delivery workflow.</h2>
            </div>
            <p className="head-right" style={{ color: "rgba(255,255,255,0.65)" }}>
              Every project we undertake moves through the same structured stages - transparent, measurable and built to keep timelines and quality on track.
            </p>
          </div>
          <div className="process-wrap">
            <div className="process-track">
              {d.process.map((s, i) => (
                <div key={i} className="process-step">
                  <div className="process-dot">{String(i + 1).padStart(2, "0")}</div>
                  <span className="process-tag">{s.tag}</span>
                  <h4>{s.title}</h4>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="section-pad">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="num">WHY ZAKIR ENTERPRISE / 04</span>
              <h2>Chosen for delivery discipline, not just lowest bid.</h2>
            </div>
            <p className="head-right">
              Public clients, developers and industrial partners return to us because we execute on commitment - safely, on time, and to specification.
            </p>
          </div>
          <div className="benefits-grid">
            {d.benefits.map((it, i) => (
              <div key={i} className="benefit-card">
                <div className="benefit-top">
                  <div className="benefit-icon">
                    <SvcIcon kind={it.icon} />
                  </div>
                  <span className="benefit-num">0{i + 1}</span>
                </div>
                <h4>{it.title}</h4>
                <p>{it.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="capability" className="section-pad section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="num">EXECUTION STRENGTH / 05</span>
              <h2>Equipment, methods & site discipline.</h2>
            </div>
            <p className="head-right">
              We operate our own fleet of construction equipment, backed by trained operators, safety systems and quality assurance methods used on every site.
            </p>
          </div>
          <div className="machinery-wrap">
            <div className="machinery-image" style={{ backgroundImage: `url(${SIMG.machine})` }}>
              <div className="machine-badge">Owned Fleet - Trained Operators</div>
              <div className="machine-overlay">
                <div className="big">120+</div>
                <div className="lbl">Active equipment units</div>
              </div>
            </div>
            <div className="machinery-copy">
              <h3>Operational capability built for scale and compliance.</h3>
              <p>
                Our execution strength is grounded in owned equipment, proven construction methods and structured site management - supported by independent quality checks and full compliance documentation for every delivery.
              </p>
              <div className="machine-list">
                {d.machine.map((it, i) => (
                  <div key={i} className="machine-item">
                    <span className="n">0{i + 1}</span>
                    <div>
                      <div className="t">{it.t}</div>
                      <div className="d">{it.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-pad">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="num">RELATED PROJECTS / 06</span>
              <h2>Recent work in this service line.</h2>
            </div>
            <p className="head-right">
              A selection of recent and ongoing executions under Building Construction - delivered across government, commercial and private sectors.
            </p>
          </div>
          <div className="related-grid">
            {d.related.map((it, i) => (
              <article key={i} className="related-card">
                <div className="rp-img" style={{ backgroundImage: `url(${it.img})` }} />
                <span className="rp-type">{it.type}</span>
                <div className="rp-body">
                  <div className="rp-meta">
                    <span>{it.cat}</span>
                    <span className="dot" />
                    <span className="loc">{it.loc}</span>
                  </div>
                  <h4>{it.title}</h4>
                  <p className="rp-line">{it.line}</p>
                  <Link href="/projects" className="rp-link">
                    View Project <ArrowUpRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
            <Link href="/projects" className="btn btn-outline-dark">
              View All Projects <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <SvcFAQ items={d.faq} />

      <section id="svc-cta" className="svc-cta">
        <div className="svc-cta-bg" style={{ backgroundImage: `url(${SIMG.cta})` }} />
        <div className="container">
          <div className="svc-cta-inner">
            <div>
              <span className="svc-cta-tag">Ready To Build - Nationwide</span>
              <h2>
                Planning a <span className="accent">{d.title}</span> project? <span className="italic">Let's deliver it right.</span>
              </h2>
              <p>Share your site details, scope and timeline. Our project team will respond with a structured quotation and delivery roadmap within two working days.</p>
              <div className="svc-cta-btns">
                <Link href="/lets-collaborate" className="btn btn-primary">
                  Let's Collaborate <Arrow />
                </Link>
                <Link href="/lets-collaborate" className="btn btn-outline-light">
                  Request Quotation <ArrowUpRight />
                </Link>
              </div>
              <div className="svc-cta-tertiary">
                <span>Looking at our work first?</span>
                <Link href="/projects">
                  View All Projects <Arrow size={12} />
                </Link>
              </div>
            </div>
            <aside className="svc-cta-info">
              <h5>Project Desk</h5>
              <ul>
                <li>
                  <span className="k">Direct line</span>
                  <span className="v">+880 1700 000 000</span>
                </li>
                <li>
                  <span className="k">Email</span>
                  <span className="v">projects@zakirenterprise.com.bd</span>
                </li>
                <li>
                  <span className="k">Head office</span>
                  <span className="v">Banani, Dhaka 1213</span>
                </li>
                <li>
                  <span className="k">Response time</span>
                  <span className="v">Within 2 working days</span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <div className="mobile-sticky-cta">
        <div className="caption">
          Zakir Enterprise<span>Building Construction</span>
        </div>
        <a href="#svc-cta" className="btn btn-primary">
          Get Quote <Arrow />
        </a>
      </div>
    </>
  );
}
