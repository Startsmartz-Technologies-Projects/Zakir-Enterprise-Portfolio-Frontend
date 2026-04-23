"use client";
import * as React from "react";
import Link from "next/link";
import { Arrow as AD, ArrowUpRight as AURD, SvcIcon as SIcoD } from "./site-ui";
import { PROJECTS } from "./projects-page-content";

// Project Detail page - reuses PROJECTS data and proj-card style from projects_page.jsx

const DETAIL_IMAGES = {
  hero: "https://res.cloudinary.com/dk4csiouq/image/upload/q_auto/f_auto/v1776917191/patuakhali_project_section_hero_nqcinq.jpg",
  g1: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=1400&q=80&auto=format&fit=crop",
  g2: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&auto=format&fit=crop",
  g3: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80&auto=format&fit=crop",
  g4: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop",
  g5: "https://images.unsplash.com/photo-1565008576549-57569a49371c?w=1200&q=80&auto=format&fit=crop",
  g6: "https://images.unsplash.com/photo-1518335935020-cfd6580c1ab4?w=1200&q=80&auto=format&fit=crop",
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
    { k: "Client", v: "Gulshan Development Ltd.", sub: "Private commercial" },
    { k: "Category", v: "Building Construction", sub: "Commercial" },
    { k: "Location", v: "Gulshan Avenue", sub: "Dhaka, Bangladesh" },
    { k: "Duration", v: "22 Months", sub: "Jan 2024 Ã¢â€ â€™ Nov 2025" },
    { k: "Status", v: "Completed", sub: "Handover Nov 2025" },
  ];

  const scopes = [
    {
      icon: "foundation",
      n: "01",
      t: "Deep Foundation",
      d: "142 bored piles reaching 38m depth into firm bearing stratum.",
    },
    {
      icon: "concrete",
      n: "02",
      t: "RCC Superstructure",
      d: "14-storey cast-in-situ reinforced concrete frame with shear cores.",
    },
    {
      icon: "building",
      n: "03",
      t: "Curtain-Wall Facade",
      d: "Full unitized glass facade with thermally broken aluminium profiles.",
    },
    {
      icon: "equip",
      n: "04",
      t: "MEP Coordination",
      d: "Tight BIM-driven coordination of HVAC, electrical and plumbing risers.",
    },
    {
      icon: "finish",
      n: "05",
      t: "Premium Interior Finishing",
      d: "Imported stone, porcelain and architectural timber throughout lobbies.",
    },
    {
      icon: "drain",
      n: "06",
      t: "Drainage & Plumbing",
      d: "Dual-stack drainage with rainwater harvesting to underground storage.",
    },
    {
      icon: "earth",
      n: "07",
      t: "Site Preparation",
      d: "Enabling excavation, dewatering and sheet-pile shoring to 9m depth.",
    },
    {
      icon: "special",
      n: "08",
      t: "Specialty Works",
      d: "Helipad structural pad, BMS rooms and architectural metalwork.",
    },
  ];

  const highlights = [
    {
      n: "14",
      u: "Storeys",
      t: "Full-height build",
      d: "Delivered from piling to helipad deck including two basement levels.",
    },
    {
      n: "82K",
      u: "Sqft",
      t: "Gross built area",
      d: "Column-free floor plates averaging 5,800 sqft of leasable area.",
    },
    {
      n: "0",
      u: "Reportable incidents",
      t: "Safety record",
      d: "Over 1.4M working hours logged on site without a lost-time incident.",
    },
    {
      n: "3",
      u: "Months early",
      t: "Schedule performance",
      d: "Completed ahead of the original 25-month contractual programme.",
    },
  ];

  // related Ã¢â‚¬â€ pick 3 from PROJECTS (from projects_page.jsx) excluding self
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
            <Link href="/projects">Building Construction</Link>
            <span className="sep">/</span>
            <span>Gulshan Commercial Tower</span>
          </div>
          <div className="detail-hero-badges">
            <span className="dh-badge">Featured</span>
            <span className="dh-badge ghost">Completed Ã‚Â· 2025</span>
            <span className="dh-badge ghost">Gulshan, Dhaka</span>
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
                A landmark commercial tower engineered for four decades of
                service.
              </h2>
              <p>
                Zakir Enterprise delivered the full execution of a 14-storey
                Grade-A commercial tower on Gulshan Avenue Ã¢â‚¬â€ one of
                Dhaka's premier corporate addresses. The contract included deep
                foundations, the full reinforced concrete superstructure,
                unitized curtain-wall installation, and high-specification
                interior finishing across 82,000 square feet of leasable area.
              </p>
              <p>
                The programme required tight coordination between structural,
                mechanical and architectural trades Ã¢â‚¬â€ handled through a
                BIM-driven clash-resolution process with weekly joint review
                sessions. Dewatering and shoring works enabled safe excavation
                to nine metres below grade in a congested urban site adjacent to
                live roadway.
              </p>
              <p className="pull">
                Handed over three months ahead of the original 25-month schedule
                Ã¢â‚¬â€ with zero reportable safety incidents across 1.4 million
                working hours.
              </p>
              <h3>Engineering discipline on every floor</h3>
              <p>
                The building was designed to BNBC seismic zone 2 requirements
                with an independently peer-reviewed structural model.
                Cast-in-situ slabs were poured on a strict four-day cycle, and
                the facade was installed storey-by-storey immediately behind the
                structural works to accelerate the internal fit-out programme.
              </p>
              <p>
                Final handover included full as-built documentation, MEP
                commissioning certificates and a two-year defects liability
                programme Ã¢â‚¬â€ standard across every Zakir Enterprise
                commercial delivery.
              </p>
            </div>

            <aside className="side-card">
              <h4>Quick Summary</h4>
              <p className="side-summary">
                A 14-storey Grade-A commercial tower delivered turnkey from
                piling to handover Ã¢â‚¬â€ including facade, interior finishing
                and MEP commissioning.
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
                  <li>Deep Pile Foundation</li>
                  <li>RCC Superstructure</li>
                  <li>Curtain-Wall Facade</li>
                  <li>MEP Coordination</li>
                  <li>Interior Finishing</li>
                  <li>Site Enabling Works</li>
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
              Four measurable outcomes that define the engineering and delivery
              discipline behind the project.
            </p>
          </div>
          <div className="highlights-grid">
            {highlights.map((h) => (
              <div key={h.t} className="hl-card">
                <div className="hl-num">{h.n}</div>
                <div className="hl-unit">{h.u}</div>
                <h4>{h.t}</h4>
                <p>{h.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge / Solution / Outcome */}
      <section className="cso-section" data-screen-label="07 CSO">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="num">EXECUTION STORY / 07</span>
              <h2>Challenge, solution, outcome.</h2>
            </div>
            <p className="head-right">
              How the project was engineered through constraints that are
              typical of dense urban commercial sites in Dhaka.
            </p>
          </div>
          <div className="cso-grid">
            <div className="cso-cell">
              <span className="cso-step">01 Ã‚Â· Challenge</span>
              <h3>Narrow urban site with limited laydown area.</h3>
              <p>
                Adjacent to a live Gulshan Avenue and two active neighbouring
                buildings Ã¢â‚¬â€ with less than 4m of boundary clearance and no
                dedicated site storage.
              </p>
            </div>
            <div className="cso-cell highlight">
              <span className="cso-step">02 Ã‚Â· Solution</span>
              <h3>Just-in-time delivery with nightly material staging.</h3>
              <p>
                Materials sequenced to arrive hours before use, coordinated with
                police for overnight delivery windows. Tower cranes timed to
                minimise road obstruction.
              </p>
            </div>
            <div className="cso-cell">
              <span className="cso-step">03 Ã‚Â· Outcome</span>
              <h3>Three months ahead of schedule, zero safety incidents.</h3>
              <p>
                Structure topped out in 11 months. Full handover complete with
                commissioning documentation, MEP testing records and a clean
                defects liability sign-off.
              </p>
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
                Need a similar <span className="gold">construction</span>{" "}
                <span className="accent">solution?</span>
              </h2>
            </div>
            <div>
              <p>
                From piling and structural works through to full turnkey
                commercial delivery Ã¢â‚¬â€ Zakir Enterprise is ready to scope,
                price and execute your next project with the same discipline
                shown on this one.
              </p>
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
