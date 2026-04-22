"use client";

import * as React from "react";
import Link from "next/link";
import { Arrow, ArrowUpRight } from "./site-ui";

type CertItem = {
  id: string;
  title: string;
  authority: string;
  number: string;
  category: string;
  issued: string;
  expiry: string;
  status: string;
  thumbClass: string;
  accent: string;
  description: string;
};

const CERT_CATEGORIES = ["All", "Trade & Licensing", "Compliance", "Safety", "Tax & Revenue", "Engineering", "Industry Body"];
const CERT_STATUSES = ["All", "Active", "Renewed Recently", "Expiring Soon"];

const CERTIFICATIONS: CertItem[] = [
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
    id: "iso-9001",
    title: "ISO 9001:2015 - Quality Management",
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
];

function CertThumb({ item }: { item: CertItem }) {
  return (
    <div className={`ct-thumb ${item.thumbClass}`}>
      <div className="ct-thumb-frame">
        <div className="ct-thumb-header">
          <div className="ct-thumb-mark">Z</div>
          <div className="ct-thumb-id">{item.number}</div>
        </div>
        <div className="ct-thumb-title">Certificate of {item.category.split(" ")[0]}</div>
        <div className="ct-thumb-auth">{item.authority}</div>
        <div className="ct-thumb-footer">
          <div className={`ct-thumb-seal ${item.accent}`} />
        </div>
      </div>
    </div>
  );
}

function CtCard({ item, onPreview }: { item: CertItem; onPreview: (i: CertItem) => void }) {
  return (
    <div className="ct-card">
      <div className="ct-card-thumb">
        <CertThumb item={item} />
        <span className={`ct-status ${item.status.replace(/\s+/g, "-").toLowerCase()}`}>{item.status}</span>
      </div>
      <div className="ct-card-body">
        <span className="ct-chip">{item.category}</span>
        <h3>{item.title}</h3>
        <div className="ct-card-auth">{item.authority}</div>
        <div className="ct-card-meta">
          <div>
            <span className="k">Issued</span>
            <span className="v">{item.issued}</span>
          </div>
          <div>
            <span className="k">Valid Until</span>
            <span className="v">{item.expiry}</span>
          </div>
        </div>
        <div className="ct-card-foot">
          <span className="ct-card-num">{item.number}</span>
          <button className="ct-preview" onClick={() => onPreview(item)}>
            Preview <ArrowUpRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

function CtModal({ item, onClose }: { item: CertItem; onClose: () => void }) {
  return (
    <div className="ct-modal-backdrop" onClick={onClose}>
      <div className="ct-modal" onClick={(e) => e.stopPropagation()}>
        <button className="ct-modal-close" onClick={onClose}>
          ×
        </button>
        <div className="ct-modal-body">
          <div className="ct-modal-preview">
            <CertThumb item={item} />
          </div>
          <div className="ct-modal-info">
            <span className="ct-chip">{item.category}</span>
            <h3>{item.title}</h3>
            <p className="ct-modal-desc">{item.description}</p>
            <div className="ct-modal-ctas">
              <button className="btn btn-primary">
                Download PDF <Arrow />
              </button>
              <button className="btn btn-outline-dark" onClick={onClose}>
                Close Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CertificationsPageContent() {
  const [q, setQ] = React.useState("");
  const [cat, setCat] = React.useState("All");
  const [status, setStatus] = React.useState("All");
  const [sort, setSort] = React.useState("recent");
  const [preview, setPreview] = React.useState<CertItem | null>(null);

  const filtered = React.useMemo(() => {
    let list = CERTIFICATIONS.filter((c) => {
      if (cat !== "All" && c.category !== cat) return false;
      if (status !== "All" && c.status !== status) return false;
      if (q) {
        const s = q.toLowerCase();
        if (!c.title.toLowerCase().includes(s) && !c.authority.toLowerCase().includes(s) && !c.number.toLowerCase().includes(s)) return false;
      }
      return true;
    });
    if (sort === "title") list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "expiry") list = [...list].sort((a, b) => a.expiry.localeCompare(b.expiry));
    return list;
  }, [q, cat, status, sort]);

  return (
    <>
      <section className="ct-hero">
        <div className="ct-hero-bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=2000&q=80&auto=format&fit=crop)" }} />
        <div className="container ct-hero-inner">
          <div className="bg-crumbs" style={{ marginBottom: 28 }}>
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Certifications</span>
          </div>
          <span className="ct-hero-label">Trust & Compliance</span>
          <h1>
            Certifications
            <br />& Credentials.
          </h1>
          <p className="ct-hero-sub">Official registrations, approvals, and certifications that reinforce capability, quality, and readiness.</p>
          <div className="ct-hero-ctas">
            <Link href="/lets-collaborate" className="btn btn-primary">
              Contact Us <Arrow />
            </Link>
            <a href="#certs" className="btn btn-outline-light">
              Browse Documents
            </a>
          </div>
        </div>
      </section>

      <section className="ct-intro">
        <div className="container ct-intro-grid">
          <div className="ct-intro-left">
            <span className="microlabel">Why Certifications Matter</span>
            <h2>
              Certified capability - <span className="accent">verified in writing.</span>
            </h2>
          </div>
        </div>
      </section>

      <section className="ct-section" id="certs">
        <div className="container">
          <div className="ct-toolbar">
            <div className="ct-toolbar-search">
              <input type="text" placeholder="Search by title, authority, or number..." value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
            <div className="ct-toolbar-filters">
              <div className="ct-select">
                <label>Category</label>
                <select value={cat} onChange={(e) => setCat(e.target.value)}>
                  {CERT_CATEGORIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="ct-select">
                <label>Status</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                  {CERT_STATUSES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="ct-select">
                <label>Sort by</label>
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="recent">Most Recent</option>
                  <option value="title">Title A-Z</option>
                  <option value="expiry">Expiry Date</option>
                </select>
              </div>
            </div>
            <div className="ct-toolbar-count">
              <span>
                <strong>{filtered.length}</strong> documents
              </span>
            </div>
          </div>

          <div className="ct-grid">
            {filtered.map((item) => (
              <CtCard key={item.id} item={item} onPreview={setPreview} />
            ))}
          </div>
        </div>
        {preview && <CtModal item={preview} onClose={() => setPreview(null)} />}
      </section>
    </>
  );
}

