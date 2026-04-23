"use client";
import * as React from "react";
import Link from "next/link";
import { Arrow as AD, ArrowUpRight as AURD, SvcIcon as SIcoD } from "./site-ui";
import { PROJECTS } from "./projects-page-content";

// Project Detail page - reuses PROJECTS data and proj-card style from projects_page.jsx

const DETAIL_IMAGES = {
  hero: "https://res.cloudinary.com/dk4csiouq/image/upload/q_auto/f_auto/v1776917191/patuakhali_project_section_hero_nqcinq.jpg",
  g1: "https://res.cloudinary.com/dk4csiouq/image/upload/v1776918075/patuakhali_project_Gallary_1_nufw4p.jpg",
  g2: "https://res.cloudinary.com/dk4csiouq/image/upload/v1776918074/patuakhali_project_Gallary_2_lchgzc.jpg",
  g3: "https://res.cloudinary.com/dk4csiouq/image/upload/v1776918072/patuakhali_project_Gallary_3_agpdlx.jpg",
  g4: "https://res.cloudinary.com/dk4csiouq/image/upload/v1776918072/patuakhali_project_Gallary_4_geulax.jpg",
  g5: "https://res.cloudinary.com/dk4csiouq/image/upload/v1776918070/patuakhali_project_Gallary_5_btqqrf.jpg",
  g6: "https://res.cloudinary.com/dk4csiouq/image/upload/v1776918069/patuakhali_project_Gallary_6_xhtnwd.jpg",
};

function ShareIcon({ k }) {
  const common = {
    width: 14,
    height: 14,
    viewBox: "0 0 24 24",
    fill: "currentColor",
  };
  const p = {
    fb: "M13 22v-8h3l.5-4H13V7.5c0-1.2.3-2 2-2h2V2.1C16.5 2 15.5 2 14.5 2 11.8 2 10 3.7 10 6.7V10H7v4h3v8h3z",
    li: "M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.3 18H5.7V9.7h2.6V18zM7 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM18.3 18h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V18h-2.6V9.7h2.5v1.1h0a2.7 2.7 0 0 1 2.5-1.4c2.6 0 3.1 1.7 3.1 4V18z",
    tw: "M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1-1.5-1.6-4-1.6-5.6-.1-1 1-1.5 2.5-1.2 3.9C9 8.6 6 7.1 4 4.7c-1 1.8-.5 4.1 1.3 5.2-.7 0-1.3-.2-1.9-.5 0 1.9 1.3 3.5 3.2 3.9-.6.2-1.3.2-1.9.1.5 1.6 2 2.7 3.7 2.8C6.9 17.4 5 18 3 17.7c1.7 1.1 3.7 1.7 5.8 1.7 7 0 10.8-5.8 10.8-10.8v-.5c.8-.6 1.4-1.3 1.9-2.2z",
    lnk: "M10 14a5 5 0 0 1 0-7l3-3a5 5 0 0 1 7 7l-1.5 1.5m-8-1.5a5 5 0 0 1 7 0l-3 3a5 5 0 0 1-7-7L0 0",
  };
  if (k === "lnk")
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      >
        <path d="M10 14 a5 5 0 0 1 0 -7 l3 -3 a5 5 0 0 1 7 7 l-2 2" />
        <path d="M14 10 a5 5 0 0 1 0 7 l-3 3 a5 5 0 0 1 -7 -7 l2 -2" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d={p[k]} />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    >
      <polyline points="15,3 21,3 21,9" />
      <polyline points="9,21 3,21 3,15" />
      <line x1="21" y1="3" x2="14" y2="10" />
      <line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  );
}

function Lightbox({ images, idx, onClose, setIdx }) {
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")
        setIdx((idx - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setIdx((idx + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, images.length]);
  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lb-close" onClick={onClose}>
        Ã¢Å“â€¢
      </button>
      <button
        className="lb-nav prev"
        onClick={(e) => {
          e.stopPropagation();
          setIdx((idx - 1 + images.length) % images.length);
        }}
      >
        Ã¢â‚¬Â¹
      </button>
      <button
        className="lb-nav next"
        onClick={(e) => {
          e.stopPropagation();
          setIdx((idx + 1) % images.length);
        }}
      >
        Ã¢â‚¬Âº
      </button>
      <img src={images[idx]} onClick={(e) => e.stopPropagation()} />
      <div className="lb-count">
        {idx + 1} / {images.length}
      </div>
    </div>
  );
}

export function ProjectDetailContent() {
  const [lightbox, setLightbox] = React.useState(null);
  const galleryImgs = [
    DETAIL_IMAGES.hero,
    DETAIL_IMAGES.g1,
    DETAIL_IMAGES.g2,
    DETAIL_IMAGES.g3,
    DETAIL_IMAGES.g4,
    DETAIL_IMAGES.g5,
    DETAIL_IMAGES.g6,
  ];

  const meta = [
    { k: "Client", v: "Bangladesh Government Navy", sub: undefined },
    {
      k: "Project Type",
      v: "Industrial Warehouse Construction",
      sub: undefined,
    },
    { k: "Location", v: "Patuakhali, Bangladesh", sub: undefined },
    { k: "Duration", v: "4-5 months", sub: "(Dummy INFORMATION)" },
    { k: "Completion", v: "2025", sub: "(DUMMY INFORMATION)" },
  ];

  const scopes = [
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
  ];

  const highlights = [
    // No specific metrics provided in static content, so leave empty or add placeholders if needed
  ];

  // related — pick 3 from PROJECTS (from projects_page.jsx) excluding self
  const related = PROJECTS.slice(1, 4);

  return (
    <>
      {/* Hero */}
      <section className="detail-hero" data-screen-label="01 Hero">
        <div
          className="detail-hero-bg"
          style={{ backgroundImage: `url(${DETAIL_IMAGES.hero})` }}
        />
        <div className="container detail-hero-inner">
          <div className="crumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/projects">Projects</Link>
            <span className="sep">/</span>
            <Link href="/projects">Industrial Warehouse Construction</Link>
            <span className="sep">/</span>
            <span>Patuakhali Naval Warehouse</span>
          </div>
          <div className="detail-hero-badges">
            <span className="dh-badge">Featured</span>
            <span className="dh-badge ghost">Completion · 2025</span>
            <span className="dh-badge ghost">Patuakhali, Bangladesh</span>
          </div>
          <h1>Patuakhali Naval Warehouse</h1>
          <p className="summary">
            A purpose-built government warehouse delivering secure, large-span
            storage for the Bangladesh Navy's southern coastal operations
          </p>
        </div>
      </section>

      {/* Metadata strip */}
      <section className="meta-strip" data-screen-label="02 Metadata">
        <div className="container">
          <div className="meta-strip-grid">
            {meta.map((m) => (
              <div key={m.k} className="meta-cell">
                <div className="k">{m.k}</div>
                <div className="v">{m.v}</div>
                <div className="sub">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview + sticky side */}
      <section className="overview-section" data-screen-label="03 Overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-copy">
              <span className="microlabel">Project Overview</span>
              <h2 style={{ marginTop: 16 }}>
                Built tough, handed over fast a naval warehouse the southern
                coast can depend on.
              </h2>
              <p>
                Patuakhali isn't the easiest place to run a construction
                project. The coastal conditions, the remote location, the tight
                government timeline — none of it was straightforward. But within
                4 to 5 months, the team took this site from bare ground to a
                fully handed-over naval warehouse, ready for the Bangladesh Navy
                to move in and begin operations immediately. Every structural
                decision was made with the end use in mind — heavy naval
                equipment, long-term coastal durability, and the security
                standards a government client demands.
              </p>
              <p className="pull">
                "No delays. No incidents. Just a building the Bangladesh Navy
                could actually rely on."
              </p>
            </div>

            <aside className="side-card">
              <h4>Quick Summary</h4>
              <p className="side-summary">
                "No delays. No incidents. Just a building the Bangladesh Navy
                could actually rely on."
              </p>
              <div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--body)",
                    marginBottom: 12,
                  }}
                >
                  Services Delivered
                </div>
                <ul className="side-services">
                  <li>RCC Superstructure</li>
                  <li>Pre-Engineered Steel Roof</li>
                  <li>EOT Overhead Crane System</li>
                  <li>Fire Suppression System</li>
                  <li>MEP Works</li>
                  <li>Security Fenestration</li>
                  <li>Site Preparation</li>
                  <li>Heavy-Duty Warehouse Floor</li>
                </ul>
              </div>
              <div className="side-share">
                <span className="lbl">Share</span>
                <button aria-label="LinkedIn">
                  <ShareIcon k="li" />
                </button>
                <button aria-label="Facebook">
                  <ShareIcon k="fb" />
                </button>
                <button aria-label="Twitter">
                  <ShareIcon k="tw" />
                </button>
                <button aria-label="Copy link">
                  <ShareIcon k="lnk" />
                </button>
              </div>
              <div className="side-cta">
                <Link href="/lets-collaborate" className="btn btn-dark">
                  Enquire About Project <AD />
                </Link>
                <a
                  href="#"
                  className="btn btn-ghost"
                  style={{ padding: "10px 0" }}
                >
                  Download Case Study (PDF) <AURD />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Scope / services delivered */}
      <section className="scope-section" data-screen-label="04 Scope">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="num">SCOPE OF WORKS / 04</span>
              <h2>Services delivered on this project.</h2>
            </div>
            <p className="head-right">
              Eight coordinated work packages executed in sequence Ã¢â‚¬â€ from
              site enabling works through to handover, all under a single Zakir
              Enterprise contract.
            </p>
          </div>
          <div className="scope-grid">
            {scopes.map((s) => (
              <div key={s.n} className="scope-item">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span className="scope-num">{s.n}</span>
                  <div className="scope-icon">
                    <SIcoD kind={s.icon} />
                  </div>
                </div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section" data-screen-label="05 Gallery">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="num">PROJECT GALLERY / 05</span>
              <h2>Construction in progress.</h2>
            </div>
            <p className="head-right">
              Selected site photography across the foundation, superstructure
              and facade phases of the project Ã¢â‚¬â€ documented by our site
              engineering team.
            </p>
          </div>
          <div className="gallery-grid">
            <div
              className="gallery-item gallery-feature"
              style={{ backgroundImage: `url(${galleryImgs[0]})` }}
              onClick={() => setLightbox(0)}
            >
              <div className="expand">
                <ExpandIcon />
              </div>
            </div>
            <div
              className="gallery-item gallery-tall"
              style={{ backgroundImage: `url(${galleryImgs[1]})` }}
              onClick={() => setLightbox(1)}
            >
              <div className="expand">
                <ExpandIcon />
              </div>
            </div>
            <div
              className="gallery-item"
              style={{ backgroundImage: `url(${galleryImgs[2]})` }}
              onClick={() => setLightbox(2)}
            >
              <div className="expand">
                <ExpandIcon />
              </div>
            </div>
            <div
              className="gallery-item"
              style={{ backgroundImage: `url(${galleryImgs[3]})` }}
              onClick={() => setLightbox(3)}
            >
              <div className="expand">
                <ExpandIcon />
              </div>
            </div>
            <div
              className="gallery-item"
              style={{ backgroundImage: `url(${galleryImgs[4]})` }}
              onClick={() => setLightbox(4)}
            >
              <div className="expand">
                <ExpandIcon />
              </div>
            </div>
            <div
              className="gallery-item"
              style={{ backgroundImage: `url(${galleryImgs[5]})` }}
              onClick={() => setLightbox(5)}
            >
              <div className="expand">
                <ExpandIcon />
              </div>
            </div>
            <div
              className="gallery-item"
              style={{ backgroundImage: `url(${galleryImgs[6]})` }}
              onClick={() => setLightbox(6)}
            >
              <div className="expand">
                <ExpandIcon />
              </div>
            </div>
          </div>
        </div>
        {lightbox !== null && (
          <Lightbox
            images={galleryImgs}
            idx={lightbox}
            setIdx={setLightbox}
            onClose={() => setLightbox(null)}
          />
        )}
      </section>

      {/* Highlights */}
      <section className="highlights-section" data-screen-label="06 Highlights">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="num on-dark" style={{ color: "var(--lime)" }}>
                KEY HIGHLIGHTS / 06
              </span>
              <h2>Outcomes that matter.</h2>
            </div>
            <p
              className="head-right"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Outcomes and metrics for this project are available on request.
            </p>
          </div>
          <div className="highlights-grid">
            {/* No specific metrics provided in static content */}
          </div>
        </div>
      </section>

      {/* Challenge / Solution / Outcome */}
      <section className="cso-section" data-screen-label="07 CSO">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="num">CASE STUDY / 07</span>
              <h2>Case Study</h2>
            </div>
            <p className="head-right">
              Project delivery story: challenge, approach, result.
            </p>
          </div>
          <div className="cso-grid">
            <div className="cso-cell">
              <span className="cso-step">01 · The Challenge</span>
              <h3>
                Constructing a government-grade naval warehouse in a coastal
                zone under a strict 4–5 month deadline with no margin for delay.
              </h3>
            </div>
            <div className="cso-cell highlight">
              <span className="cso-step">02 · The Approach</span>
              <h3>
                Concurrent roofing and civil works to compress the schedule,
                weekly on-site reviews, and strict structural tolerances
                throughout.
              </h3>
            </div>
            <div className="cso-cell">
              <span className="cso-step">03 · The Result</span>
              <h3>
                A fully operational, crane-equipped, fire-safe naval warehouse
                handed over on time to the Bangladesh Navy's southern coastal
                command.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Related projects Ã¢â‚¬â€ reuses proj-card style from projects page */}
      <section className="related-section" data-screen-label="08 Related">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="num">RELATED WORK / 08</span>
              <h2>Other projects you might consider.</h2>
            </div>
            <Link
              href="/projects"
              className="btn btn-ghost head-right"
              style={{ alignSelf: "end" }}
            >
              Browse Full Portfolio <AD />
            </Link>
          </div>
          <div className="listing-grid">
            {related.map((p) => (
              <Link
                key={p.id}
                href="/projects/gulshan-commercial-tower"
                className="proj-card"
                style={{ textDecoration: "none" }}
              >
                <div className="pc-img-wrap">
                  <div
                    className="pc-img"
                    style={{ backgroundImage: `url(${p.img})` }}
                  />
                  <span className={`pc-badge ${p.badgeClass || ""}`}>
                    {p.badge}
                  </span>
                  <span className="pc-year">{p.year}</span>
                </div>
                <div className="pc-body">
                  <div className="pc-cat">{p.cat}</div>
                  <h3>{p.title}</h3>
                  <div className="pc-loc">Ã°Å¸â€œÂ {p.location}</div>
                  <p className="pc-sum">{p.summary}</p>
                  <div className="pc-footer">
                    <span className={`pc-status ${p.status.toLowerCase()}`}>
                      {p.status}
                    </span>
                    <span className="pc-link">
                      View Project{" "}
                      <span className="arrow">
                        <AD size={12} />
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="trust-cta" data-screen-label="09 CTA">
        <div className="container">
          <div className="trust-cta-inner">
            <div>
              <span className="microlabel on-dark">Start a Conversation</span>
              <h2 style={{ marginTop: 20 }}>
                Need a warehouse built to government standard?
              </h2>
            </div>
            <div>
              <div className="trust-cta-buttons">
                <Link href="/lets-collaborate" className="btn btn-primary">
                  Discuss Your Project <AD />
                </Link>
                <Link
                  href="/lets-collaborate"
                  className="btn btn-outline-light"
                >
                  Request Quotation <AURD />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
