import Link from "next/link";
import { Arrow } from "./site-ui";

function SectionCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="legacy-card">
      <div className="legacy-card-body">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

export function CertificationsPageContent() {
  return (
    <main className="legacy-page">
      <section className="legacy-hero">
        <div className="container">
          <span className="legacy-eyebrow">Credentials</span>
          <h1>Certifications & Compliance</h1>
          <p>Operational discipline, quality assurance, and HSE alignment that supports reliable project outcomes.</p>
        </div>
      </section>
      <section className="legacy-content">
        <div className="container">
          <div className="legacy-grid">
            <SectionCard title="ISO 9001:2015" text="Quality management system maintained through recurring surveillance audits." />
            <SectionCard title="Safety Framework" text="Site-level HSE protocols aligned with international contractor practice." />
            <SectionCard title="Client Reporting" text="Milestone-linked QA/QC and progress logs shared across delivery stages." />
          </div>
        </div>
      </section>
    </main>
  );
}

export function ConcernDetailPageContent() {
  return (
    <main className="legacy-page">
      <section className="legacy-hero">
        <div className="container">
          <span className="legacy-eyebrow">Concern Profile</span>
          <h1>Concern Detail</h1>
          <p>Zakir Enterprise delivers integrated construction and infrastructure execution with regionally deployed teams.</p>
        </div>
      </section>
      <section className="legacy-content">
        <div className="container">
          <div className="legacy-grid">
            <SectionCard title="Civil Construction" text="Building, road, and bridge packages handled with end-to-end site ownership." />
            <SectionCard title="Project Controls" text="Planning, progress tracking, and risk-control checkpoints across execution phases." />
            <SectionCard title="Nationwide Delivery" text="Mobilization-ready teams serving public and private clients across Bangladesh." />
          </div>
        </div>
      </section>
    </main>
  );
}

export function ServiceDetailsPageContent() {
  return (
    <main className="legacy-page">
      <section className="legacy-hero">
        <div className="container">
          <span className="legacy-eyebrow">Core Services</span>
          <h1>Service Details</h1>
          <p>Execution capability across building construction, earthwork, road infrastructure, structural concrete, and foundations.</p>
        </div>
      </section>
      <section className="legacy-content">
        <div className="container">
          <div className="legacy-grid">
            <SectionCard title="Building Construction" text="Commercial and institutional works from sub-structure through finishing." />
            <SectionCard title="Road & Highway Works" text="Carriageway, drainage, and associated infrastructure delivery for public-sector corridors." />
            <SectionCard title="Bridge & Structural Work" text="Span construction, girder works, and concrete structural systems with QA checkpoints." />
          </div>
        </div>
      </section>
    </main>
  );
}

export function LetsCollaboratePageContent() {
  return (
    <main className="legacy-page">
      <section className="legacy-hero">
        <div className="container">
          <span className="legacy-eyebrow">Project Desk</span>
          <h1>Let&apos;s Collaborate</h1>
          <p>Share your scope, timeline, and site context. Our team responds with a structured next-step plan.</p>
        </div>
      </section>
      <section className="legacy-content">
        <div className="container">
          <div className="legacy-featured">
            <img src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=1800&q=80&auto=format&fit=crop" alt="Team collaboration" />
            <div>
              <p className="legacy-kicker">Get in touch</p>
              <h2>Start your next construction project with confidence.</h2>
              <p>We coordinate engineering, planning, and execution teams to deliver clear commitments from tender stage onward.</p>
              <div className="legacy-actions">
                <a href="tel:+8801700000000" className="btn btn-primary">
                  Call Now <Arrow />
                </a>
                <Link href="/projects" className="btn btn-outline-dark">
                  Explore Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

