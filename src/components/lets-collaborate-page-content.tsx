"use client";

import * as React from "react";
import { Arrow, ArrowUpRight, SvcIcon } from "./site-ui";

const INTENT_ITEMS = [
  { id: "quote", icon: "building", t: "Request Quotation", d: "Priced scope for a defined construction brief." },
  { id: "new", icon: "concrete", t: "New Construction Project", d: "Start a fresh development from concept to delivery." },
  { id: "collab", icon: "special", t: "Request Collaboration", d: "Joint execution on complex or multi-party builds." },
  { id: "gov", icon: "road", t: "Government Project", d: "LGED, RHD, PWD tenders and institutional works." },
];

const SERVICES = ["Building Construction", "Road Works", "Bridge & Culvert Works", "Earthwork & Site Development", "Drainage Work"];

export function LetsCollaboratePageContent() {
  const [intent, setIntent] = React.useState("");
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    inquiryType: "quote",
    services: [] as string[],
    message: "",
  });
  const [submitted, setSubmitted] = React.useState(false);

  const toggleSvc = (s: string) =>
    setForm((f) => ({
      ...f,
      services: f.services.includes(s) ? f.services.filter((x) => x !== s) : [...f.services, s],
    }));

  return (
    <>
      <section className="lc-hero">
        <div className="lc-hero-bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=2200&q=80&auto=format&fit=crop)" }} />
        <div className="container lc-hero-inner">
          <div className="lc-hero-grid">
            <div>
              <span className="microlabel on-dark">Collaborate · Quote · Build</span>
              <h1>
                Let's Build Something <span className="accent">Great</span> Together
              </h1>
              <p className="lc-sub">From private developments to government-scale infrastructure, we are ready to collaborate across Bangladesh.</p>
              <div className="lc-hero-ctas">
                <a href="#form" className="btn btn-primary">
                  Request Quotation <Arrow />
                </a>
                <a href="#form" className="btn btn-outline-light">
                  Start Discussion <ArrowUpRight />
                </a>
                <a href="tel:+8801700000000" className="btn btn-outline-light">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trusthook">
        <div className="container">
          <h2>We collaborate with developers, businesses, institutions and government stakeholders.</h2>
          <div className="trust-chips">
            {["Nationwide Capability", "Skilled Workforce", "Timely Delivery", "Trusted Execution"].map((c) => (
              <span key={c} className="trust-chip">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="num">HOW CAN WE HELP / 01</span>
              <h2>Tell us what you're here for.</h2>
            </div>
          </div>
          <div className="intent-grid">
            {INTENT_ITEMS.map((it) => (
              <button key={it.id} className={`intent-card ${intent === it.id ? "active" : ""}`} onClick={() => setIntent(it.id)}>
                <div className="intent-icon">
                  <SvcIcon kind={it.icon} />
                </div>
                <h4>{it.t}</h4>
                <p>{it.d}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="form" className="section-pad section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="num">START A CONVERSATION / 02</span>
              <h2>Share your project. We'll take it from there.</h2>
            </div>
          </div>
          <div className="lc-conv-grid">
            <aside className="lc-side">
              <div className="side-card">
                <h5>Contact</h5>
                <ul>
                  <li>
                    <strong>Phone</strong>+880 1700 000 000
                  </li>
                  <li>
                    <strong>Email</strong>projects@zakirenterprise.com.bd
                  </li>
                </ul>
              </div>
            </aside>
            <div>
              {!submitted ? (
                <form
                  className="lc-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <h3>Collaboration Request</h3>
                  <div className="form-grid">
                    <div className="field">
                      <label>Full Name*</label>
                      <input type="text" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
                    </div>
                    <div className="field">
                      <label>Phone Number*</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} />
                    </div>
                    <div className="field">
                      <label>Email*</label>
                      <input type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
                    </div>
                    <div className="field full">
                      <label>Subject*</label>
                      <input type="text" value={form.subject} onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))} />
                    </div>
                    <div className="field full">
                      <label>Interested Services</label>
                      <div className="svc-chips">
                        {SERVICES.map((s) => (
                          <button key={s} type="button" className={`svc-chip ${form.services.includes(s) ? "active" : ""}`} onClick={() => toggleSvc(s)}>
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="field full">
                      <label>Project Brief / Message*</label>
                      <textarea value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} />
                    </div>
                  </div>
                  <div className="submit-row">
                    <button type="submit" className="btn btn-primary">
                      Submit Collaboration Request <Arrow />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="success-panel">
                  <div className="success-icon">✓</div>
                  <h3>Thank You - We've Got It.</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

