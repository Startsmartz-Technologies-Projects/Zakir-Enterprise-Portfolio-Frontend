"use client";

import * as React from "react";
import Link from "next/link";
import { Arrow } from "./site-ui";
import { BLOG_DATA, getBlogBody, getBlogById, type BlogBlock } from "@/src/data/blog-data";
import { blogInitials } from "./blog-page-content";

function BdBlocks({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if (b.kind === "p") return <p key={i}>{b.text}</p>;
        if (b.kind === "h3") return <h3 key={i}>{b.heading}</h3>;
        if (b.kind === "ul")
          return (
            <ul key={i}>
              {b.items.map((it, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: it }} />
              ))}
            </ul>
          );
        if (b.kind === "quote")
          return (
            <div key={i} className="bd-pullquote">
              <blockquote>{b.text}</blockquote>
              {b.cite && <cite>- {b.cite}</cite>}
            </div>
          );
        if (b.kind === "stats")
          return (
            <div key={i} className="bd-data-card">
              {b.items.map((s, j) => (
                <div key={j} className="stat">
                  <div className="big">{s.big}</div>
                  <div className="lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          );
        if (b.kind === "img")
          return (
            <div key={i} className="bd-inline-img">
              <div className="frame" style={{ backgroundImage: `url(${b.url})` }} />
              {b.cap && <div className="cap">{b.cap}</div>}
            </div>
          );
        return null;
      })}
    </>
  );
}

export function BlogDetailPageContent({ id }: { id: string }) {
  const article = getBlogById(id) || BLOG_DATA[0];
  const body = getBlogBody(article);
  const related = BLOG_DATA.filter((n) => n.id !== article.id).slice(0, 3);

  return (
    <>
      <section className="bd-hero">
        <div className="bd-hero-bg" style={{ backgroundImage: `url(${article.image})` }} />
        <div className="bd-hero-inner">
          <div className="bg-crumbs" style={{ marginBottom: 28 }}>
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/blogs">Blogs</Link>
            <span className="sep">/</span>
            <span className="current">Article</span>
          </div>
          <div className="bd-header-meta">
            <span className="bd-pill">{article.category}</span>
            <span className="bd-meta-item">{article.date}</span>
            <span className="bd-meta-item">{article.readTime}</span>
            <span className="bd-meta-item">{article.author}</span>
          </div>
          <h1>{article.title}</h1>
          <div className="bd-hero-author">
            <div className="bd-author-block">
              <div className="bd-author-avatar">{blogInitials(article.author)}</div>
              <div className="bd-author-info">
                <div className="name">{article.author}</div>
                <div className="role">{article.authorRole}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bd-article">
        <div className="bd-article-inner">
          <div className="bd-body-wrap">
            <div className="bd-hero-image" style={{ backgroundImage: `url(${article.image})` }} />
            <div className="bd-body">
              <p className="lead">{body.lead}</p>
              {body.sections.map((s) => (
                <section key={s.id} id={s.id}>
                  <h2>{s.heading}</h2>
                  <BdBlocks blocks={s.blocks} />
                </section>
              ))}
              <div className="bd-tags">
                <span className="lbl">Tags</span>
                {body.tags.map((t) => (
                  <Link key={t} href={`/blogs?q=${encodeURIComponent(t)}`} className="bd-tag">
                    {t}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <aside className="bd-sidebar">
            <div className="bd-card bd-author-card">
              <div className="bd-card-label">Written by</div>
              <div className="bd-author-card-head">
                <div className="bd-author-card-avatar">{blogInitials(article.author)}</div>
                <div>
                  <div className="bd-author-card-name">{article.author}</div>
                  <div className="bd-author-card-role">{article.authorRole}</div>
                </div>
              </div>
              <p className="bd-author-card-bio">Writing from Zakir Enterprise's live project portfolio across Bangladesh.</p>
              <Link href="/lets-collaborate" className="btn btn-primary">
                Contact Author <Arrow />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bd-related">
        <div className="container">
          <div className="bd-related-head">
            <div>
              <span className="microlabel">Keep Reading</span>
              <h2>Related articles.</h2>
            </div>
            <Link href="/blogs" className="btn btn-outline-dark">
              View All Articles <Arrow />
            </Link>
          </div>
          <div className="bd-related-grid">
            {related.map((it) => (
              <Link key={it.id} href={`/blogs/${it.id}`} className="blog-card" style={{ textDecoration: "none" }}>
                <div className="blog-card-img">
                  <div className="img" style={{ backgroundImage: `url(${it.image})` }} />
                  <span className="blog-card-cat">{it.category}</span>
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span>{it.date}</span>
                    <span className="dot" />
                    <span>{it.readTime}</span>
                  </div>
                  <h3>{it.title}</h3>
                  <p>{it.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

