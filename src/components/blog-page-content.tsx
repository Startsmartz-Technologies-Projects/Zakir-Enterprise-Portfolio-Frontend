"use client";

import * as React from "react";
import Link from "next/link";
import { Arrow } from "./site-ui";
import { BLOG_CATEGORIES, BLOG_DATA, type BlogArticle } from "@/src/data/blog-data";

const BSearch = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
    <circle cx="11" cy="11" r="7" />
    <line x1="16" y1="16" x2="21" y2="21" />
  </svg>
);

const BStar = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" />
  </svg>
);

const BClock = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

export function blogInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter((c) => /[A-Z]/i.test(c))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function BlogCard({ item, limeIdx }: { item: BlogArticle; limeIdx?: boolean }) {
  return (
    <Link href={`/blogs/${item.id}`} className="blog-card" style={{ textDecoration: "none" }}>
      <div className="blog-card-img">
        <div className="img" style={{ backgroundImage: `url(${item.image})` }} />
        <span className={`blog-card-cat ${limeIdx ? "lime" : ""}`}>{item.category}</span>
      </div>
      <div className="blog-card-body">
        <div className="blog-card-meta">
          <span>{item.date}</span>
          <span className="dot" />
          <span>{item.readTime}</span>
        </div>
        <h3>{item.title}</h3>
        <p>{item.excerpt}</p>
        <div className="blog-card-foot">
          <div className="blog-card-author">
            <div className="av">{blogInitials(item.author)}</div>
            <span>{item.author}</span>
          </div>
          <span className="blog-card-more">
            Read More <Arrow size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function BlogPageContent() {
  const [query, setQuery] = React.useState("");
  const [activeCat, setActiveCat] = React.useState("all");
  const [sort, setSort] = React.useState("latest");
  const [page, setPage] = React.useState(1);

  const counts = React.useMemo(() => {
    const c: Record<string, number> = { all: BLOG_DATA.length };
    BLOG_CATEGORIES.forEach((k) => {
      c[k] = 0;
    });
    BLOG_DATA.forEach((n) => {
      if (c[n.category] !== undefined) c[n.category]++;
    });
    return c;
  }, []);

  const list = React.useMemo(() => {
    let arr = BLOG_DATA.slice();
    if (activeCat !== "all") arr = arr.filter((n) => n.category === activeCat);
    if (query.trim()) {
      const q = query.toLowerCase();
      arr = arr.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.excerpt.toLowerCase().includes(q) ||
          n.category.toLowerCase().includes(q) ||
          n.author.toLowerCase().includes(q) ||
          n.tags.join(" ").toLowerCase().includes(q),
      );
    }
    if (sort === "latest") arr.sort((a, b) => b.dateISO.localeCompare(a.dateISO));
    else if (sort === "popular") arr.sort((a, b) => b.popularity - a.popularity);
    else if (sort === "featured") arr.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
    return arr;
  }, [query, activeCat, sort]);

  const featured = React.useMemo(() => BLOG_DATA.find((n) => n.featured) || BLOG_DATA[0], []);
  const items = React.useMemo(() => list.filter((n) => n.id !== featured.id), [list, featured]);

  React.useEffect(() => {
    setPage(1);
  }, [items.length]);

  const PAGE = 6;
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE));
  const start = (page - 1) * PAGE;
  const visible = items.slice(start, start + PAGE);

  return (
    <>
      <section className="bg-hero">
        <div className="bg-hero-bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=2000&q=80&auto=format&fit=crop)" }} />
        <div className="container bg-hero-inner">
          <div className="bg-crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Insights & Articles</span>
          </div>
          <span className="bg-microlabel">Insights & Articles</span>
          <h1>
            Construction Knowledge,
            <br />
            <span className="accent">Industry Updates</span> & Project Insights
          </h1>
          <p className="bg-hero-sub">
            Expert articles from Zakir Enterprise on construction, engineering, project delivery, and infrastructure development.
          </p>
          <div className="bg-hero-ctas">
            <a href="#grid" className="btn btn-primary">
              Explore Articles <Arrow />
            </a>
            <a href="#featured" className="btn btn-outline-light">
              Read Featured
            </a>
          </div>
        </div>
      </section>

      <section className="bg-intro">
        <div className="container bg-intro-grid">
          <div>
            <span className="microlabel">Editorial Perspective</span>
            <h2>
              A working publication for
              <br />
              people who build.
            </h2>
          </div>
          <div className="bg-intro-copy">
            <p>The Zakir Enterprise Insights desk publishes long-form technical notes, field methodology and industry commentary from active projects.</p>
            <div className="bg-intro-stats">
              <div>
                <div className="n">{BLOG_DATA.length}+</div>
                <div className="l">Articles Published</div>
              </div>
              <div>
                <div className="n">{BLOG_CATEGORIES.length}</div>
                <div className="l">Topic Categories</div>
              </div>
              <div>
                <div className="n">9</div>
                <div className="l">In-house Contributors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-toolbar">
        <div className="container">
          <div className="bg-toolbar-inner">
            <div className="bg-search">
              <BSearch />
              <input type="text" placeholder="Search articles, topics, engineers..." value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
            <div className="bg-chips-wrap">
              <button className={`bg-chip ${activeCat === "all" ? "active" : ""}`} onClick={() => setActiveCat("all")}>
                All <span className="count">{counts.all}</span>
              </button>
              {BLOG_CATEGORIES.map((c) => (
                <button key={c} className={`bg-chip ${activeCat === c ? "active" : ""}`} onClick={() => setActiveCat(c)}>
                  {c} <span className="count">{counts[c] || 0}</span>
                </button>
              ))}
            </div>
            <div className="bg-sort">
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="latest">Latest</option>
                <option value="popular">Popular</option>
                <option value="featured">Featured</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-featured" id="featured">
        <div className="container">
          <div className="bg-section-head">
            <span className="microlabel">Featured This Week</span>
            <h2>Editor's selection.</h2>
          </div>
          <div className="bg-featured-card">
            <div className="bg-featured-img" style={{ backgroundImage: `url(${featured.image})` }}>
              <div className="bg-featured-badge">
                <BStar /> Featured Article
              </div>
            </div>
            <div className="bg-featured-body">
              <div className="bg-featured-meta">
                <span className="cat">{featured.category}</span>
                <span className="dot" />
                <span>{featured.date}</span>
                <span className="dot" />
                <span>
                  <BClock /> {featured.readTime}
                </span>
              </div>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <div className="bg-author-line">
                <div className="bg-author-avatar">{blogInitials(featured.author)}</div>
                <div className="bg-author-info">
                  <div className="name">{featured.author}</div>
                  <div className="role">{featured.authorRole}</div>
                </div>
              </div>
              <div className="btn-row">
                <Link href={`/blogs/${featured.id}`} className="btn btn-primary">
                  Read Article <Arrow />
                </Link>
                <a href="#grid" className="btn btn-outline-dark">
                  Browse All Articles
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grid-section" id="grid">
        <div className="container">
          <div className="bg-grid-head">
            <div>
              <span className="microlabel">All Articles</span>
              <h2 style={{ marginTop: 14 }}>Latest from the editorial desk.</h2>
            </div>
            <div className="count-label">
              Showing <strong style={{ color: "var(--forest)" }}>{visible.length}</strong> of {list.length} {list.length === 1 ? "article" : "articles"} · Page {page} of {totalPages}
            </div>
          </div>
          {items.length === 0 ? (
            <div className="bg-empty">
              <h3>No articles matched your filters.</h3>
              <p>Try a different topic or clear your search to see everything.</p>
            </div>
          ) : (
            <div className="bg-grid">
              {visible.map((it, i) => (
                <BlogCard key={it.id} item={it} limeIdx={i === 1 || i === 3} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="bg-pagination">
              <button className="bg-page-btn nav-arrow" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
                ← Prev
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  className={`bg-page-btn ${page === i + 1 ? "active" : ""}`}
                  onClick={() => {
                    setPage(i + 1);
                    const el = document.getElementById("grid");
                    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
              ))}
              <button className="bg-page-btn nav-arrow" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
                Next →
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-newsletter">
        <div className="container bg-newsletter-inner">
          <div>
            <span className="microlabel on-dark">Expert Consultation</span>
            <h2>
              Need construction expertise for your <span className="accent">next project?</span>
            </h2>
            <p>Our project desk responds within two working days with a structured scope review and next step.</p>
          </div>
          <div className="bg-newsletter-actions">
            <div className="bg-newsletter-btns">
              <Link href="/lets-collaborate" className="btn btn-primary">
                Contact Us <Arrow />
              </Link>
              <Link href="/#services" className="btn btn-outline-light">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

