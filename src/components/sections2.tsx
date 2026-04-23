import Link from "next/link";
import { Arrow as A2, ArrowUpRight as AUR, SvcIcon } from "./site-ui";
import { IMG } from "./sections1";

// About, Projects, Services, Business Network, Certifications

export function About() {
  const points = [
    "Disciplined site execution",
    "Safety-first methodology",
    "Transparent project reporting",
    "Local supply chain depth",
  ];
  return (
    <section id="about" className="section-pad" data-screen-label="05 About">
      <div className="container">
        <div className="about-grid">
          <div className="about-img" style={{ backgroundImage: `url(${IMG.aboutMain})` }}>
            <div className="overlay-card">
              <div className="big">12</div>
              <div className="lbl">Years delivering public & private works</div>
            </div>
          </div>
          <div className="about-copy">
            <span className="microlabel">About Zakir Enterprise</span>
            <h2 style={{marginTop: 18}}>Building more than structures  <span style={{color:"var(--gold)", fontStyle:"italic", fontWeight:500}}>building trust.</span></h2>
            <p className="lead">
              Zakir Enterprise is a Bangladesh-based construction company committed to
              quality, safety and long-term value. We bring practical expertise, disciplined
              execution and dependable project delivery to every assignment.
            </p>
            <p className="lead" style={{fontSize:15, color:"var(--body)"}}>
              Our teams operate across all 64 districts with an experienced core of engineers
              and site managers capable of handling contracts from municipal works to large
              commercial developments.
            </p>
            <ul className="about-points">
              {points.map(p => <li key={p}>{p}</li>)}
            </ul>
            <div style={{display:"flex", gap:14, flexWrap:"wrap"}}>
              <Link href="/about" className="btn btn-dark">Learn More About Us <A2/></Link>
              <Link href="/about" className="btn btn-ghost">Download Company Profile <AUR/></Link>
            </div>
            <div className="sig">
              <div className="sig-mark">ZH</div>
              <div>
                <div className="sig-name">Md. Zakir Hossain</div>
                <div className="sig-role">Founder & Managing Director</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const projects = [
    { cat: "Building Construction", title: "14-Storey Commercial Tower, Gulshan", size: "82,000 sqft", img: IMG.proj1, tall: true, num: "P-001" },
    { cat: "Road Works", title: "District Highway Upgrade, Cumilla", size: "24 KM", img: IMG.proj2, num: "P-002" },
    { cat: "Bridge & Culvert", title: "Girder Bridge, Padma Feeder Route", size: "180 m span", img: IMG.proj3, num: "P-003" },
    { cat: "Site Development", title: "Industrial Park Earthworks, Mymensingh", size: "120 acres", img: IMG.proj4, num: "P-004" },
    { cat: "Structural Concrete", title: "RCC Framework, EPZ Warehouse Facility", size: "45,000 sqft", img: IMG.proj5, num: "P-005" },
    { cat: "Foundation Work", title: "Deep Pile Foundation, Riverside Development", size: "340 piles", img: IMG.proj6, num: "P-006" },
  ];
  return (
    <section className="section-pad section-soft" data-screen-label="06 Projects">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="num">FEATURED PROJECTS / 06</span>
            <h2>Work that stands on its ground.</h2>
          </div>
          <p className="head-right">
            A selection of recent completions across public infrastructure, commercial
            structures and foundation works engineered to last, delivered on time.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <Link key={p.title} href="/projects/gulshan-commercial-tower" className={`project ${p.tall ? "tall" : ""}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="p-img" style={{ backgroundImage: `url(${p.img})` }} />
              <span className="p-num">{p.num}</span>
              <span className="p-size">{p.size}</span>
              <div className="p-body">
                <div>
                  <div className="p-cat">{p.cat}</div>
                  <h3>{p.title}</h3>
                </div>
                <div className="p-arrow"><AUR/></div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{display:"flex", justifyContent:"center", marginTop: 50}}>
          <Link href="/projects" className="btn btn-dark">View All Projects <A2/></Link>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const svcs = [
    { icon: "building",   t: "Building Construction" },
    { icon: "road",       t: "Road Works" },
    { icon: "bridge",     t: "Bridge & Culvert Works" },
    { icon: "earth",      t: "Earthwork & Site Development" },
    { icon: "drain",      t: "Drainage Work" },
    { icon: "concrete",   t: "Structural Concrete Work" },
    { icon: "foundation", t: "Foundation Work" },
    { icon: "renov",      t: "Renovation & Maintenance" },
    { icon: "finish",     t: "Finishing Work" },
    { icon: "special",    t: "Other Special Work" },
    { icon: "equip",      t: "Construction Equipment Support" },
    { icon: "building",   t: "Consulting & Project Management", hilite: true },
  ];
  return (
    <section id="services" className="section-pad" data-screen-label="07 Services">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="num">SERVICES / 07</span>
            <h2>A full-spectrum construction partner.</h2>
          </div>
          <p className="head-right">
            Eleven core service lines each handled by specialized teams with the equipment,
            methodology and accountability the work demands.
          </p>
        </div>
        <div className="services-grid">
          {svcs.map((s, i) => (
            <Link key={i} href={`/service-details?service=${encodeURIComponent(s.t)}`} className="svc" style={{ textDecoration: "none" }}>
              <div className="svc-top">
                <span className="svc-num">{String(i+1).padStart(2,'0')}</span>
                <div className="svc-icon"><SvcIcon kind={s.icon}/></div>
              </div>
              <h4>{s.t}</h4>
              <div className="svc-arrow"><A2 size={12}/></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Network() {
  const concerns = [
    { logo: "ZE", cat: "Core", name: "Zakir Enterprise", body: "Construction & infrastructure execution  parent concern." },
    { logo: "ZC", cat: "Materials", name: "Zakir Concrete Works", body: "Ready-mix concrete, precast elements and structural aggregate supply." },
    { logo: "ZT", cat: "Logistics", name: "Zakir Transport & Equipment", body: "Heavy machinery, hauling and on-site equipment rental across regions." },
    { logo: "ZD", cat: "Development", name: "Zakir Real Estate", body: "Mixed-use and residential development projects in urban Bangladesh." },
  ];
  return (
    <section className="section-pad section-soft" data-screen-label="08 Network">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="num">BUSINESS NETWORK / 08</span>
            <h2>Our business network.</h2>
          </div>
          <p className="head-right">
            A family of concerns covering construction, materials, logistics and development 
            vertically aligned to keep quality and schedule under one roof.
          </p>
        </div>
        <div className="network-grid">
          {concerns.map(c => (
            <div key={c.logo} className="concern">
              <div>
                <div className="concern-logo">{c.logo}</div>
                <div className="concern-cat" style={{marginTop:18}}>{c.cat}</div>
                <h4>{c.name}</h4>
                <p>{c.body}</p>
              </div>
              <Link href="/concern-detail" className="exp-link" style={{fontSize:11}}>Visit Concern <A2 size={12}/></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  const certs = [
    { seal: "ISO\n9001", t: "Quality Management System", id: "ID - ISO-9001:2015", valid: "Valid through 2027" },
    { seal: "ISO\n14001", t: "Environmental Standards", id: "ID - ISO-14001:2015", valid: "Valid through 2027" },
    { seal: "ISO\n45001", t: "Occupational Health & Safety", id: "ID - ISO-45001:2018", valid: "Valid through 2026" },
    { seal: "LGED", t: "Enlisted Civil Contractor", id: "Class - 01 (Nationwide)", valid: "Renewed annually" },
    { seal: "RHD", t: "Roads & Highways Division", id: "Category - A Civil", valid: "Renewed annually" },
    { seal: "BWDB", t: "Water Development Board", id: "Enlistment - Grade A", valid: "Renewed annually" },
    { seal: "PWD", t: "Public Works Department", id: "Category - 1 Civil & Elect", valid: "Renewed annually" },
    { seal: "BAB", t: "Bangladesh Assoc. of Builders", id: "Member - Active", valid: "Since 2016" },
  ];
  return (
    <section id="certifications" className="section-pad" data-screen-label="09 Certifications">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="num">CERTIFICATIONS / 09</span>
            <h2>Standards you can trust.</h2>
          </div>
          <p className="head-right">
            Independently verified against international and national standards  our
            certifications are current, audited and available for tender review on request.
          </p>
        </div>
        <div className="certs-grid">
          {certs.map(c => (
            <Link key={c.t} href="/certifications" className="cert" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="cert-seal" style={{whiteSpace:"pre-line", textAlign:"center", lineHeight:1.05}}>{c.seal}</div>
              <div>
                <h4>{c.t}</h4>
                <div className="cert-id">{c.id}</div>
              </div>
              <div className="cert-valid">{c.valid}</div>
            </Link>
          ))}
        </div>
        <div style={{display:"flex", justifyContent:"center", marginTop: 40}}>
          <Link href="/certifications" className="btn btn-dark">View All Certifications <A2/></Link>
        </div>
      </div>
    </section>
  );
}



