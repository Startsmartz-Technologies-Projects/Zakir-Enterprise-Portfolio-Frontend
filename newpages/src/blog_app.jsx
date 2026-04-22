// Blog Listing — app composition

const { useState, useEffect, useMemo } = React;

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [tweaks, setTweaks] = useState(window.TWEAKS);
  const [tweaksOpen, setTweaksOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  const [sort, setSort] = useState("latest");

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--lime", tweaks.primaryLime || "#B4DE35");
    root.style.setProperty("--gold", tweaks.gold || "#D4A017");
    root.style.setProperty("--black", tweaks.authority || "#111111");
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

  const counts = useMemo(() => {
    const c = { all: window.BLOG_DATA.length };
    window.BLOG_CATEGORIES.forEach(k => c[k] = 0);
    window.BLOG_DATA.forEach(n => { if (c[n.category] !== undefined) c[n.category]++; });
    return c;
  }, []);

  const list = useMemo(() => {
    let arr = window.BLOG_DATA.slice();
    if (activeCat !== "all") arr = arr.filter(n => n.category === activeCat);
    if (query.trim()) {
      const q = query.toLowerCase();
      arr = arr.filter(n =>
        n.title.toLowerCase().includes(q) ||
        n.excerpt.toLowerCase().includes(q) ||
        n.category.toLowerCase().includes(q) ||
        (n.author && n.author.toLowerCase().includes(q)) ||
        (n.tags && n.tags.join(" ").toLowerCase().includes(q))
      );
    }
    if (sort === "latest") arr.sort((a, b) => b.dateISO.localeCompare(a.dateISO));
    else if (sort === "popular") arr.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    else if (sort === "featured") arr.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    return arr;
  }, [query, activeCat, sort]);

  const featured = useMemo(() => {
    const withFeatured = window.BLOG_DATA.find(n => n.featured);
    return withFeatured || window.BLOG_DATA.slice().sort((a,b) => b.dateISO.localeCompare(a.dateISO))[0];
  }, []);

  const gridItems = useMemo(() => list.filter(n => n.id !== featured.id), [list, featured]);

  return (
    <>
      <Nav scrolled={scrolled}/>
      <BgHero/>
      <BgIntro/>
      <BgToolbar
        query={query} setQuery={setQuery}
        activeCat={activeCat} setActiveCat={setActiveCat}
        sort={sort} setSort={setSort}
        counts={counts}
      />
      <BgFeatured item={featured}/>
      <BgGrid items={gridItems} totalFiltered={list.length}/>
      <BgNewsletter/>
      <Footer/>
      <BlogTweaks open={tweaksOpen} tweaks={tweaks} setTweaks={setTweaks} onClose={() => setTweaksOpen(false)}/>
    </>
  );
}

function BlogTweaks({ open, tweaks, setTweaks, onClose }) {
  if (!open) return null;
  const update = (patch) => {
    const next = { ...tweaks, ...patch };
    setTweaks(next);
    try { window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*"); } catch {}
  };
  const swatches = ["#B4DE35", "#B7E22A", "#8DAC24", "#D4A017"];
  return (
    <div className="tweaks">
      <div className="tweaks-head">
        <span>Tweaks</span>
        <button className="tweaks-close" onClick={onClose}>✕</button>
      </div>
      <div className="tweaks-body">
        <div className="tweak-row">
          <label>Primary accent (lime)</label>
          <div className="tweak-swatches">
            {swatches.map(c => (
              <button key={c} className={`tweak-swatch ${tweaks.primaryLime === c ? "active" : ""}`}
                      style={{background: c}} onClick={() => update({ primaryLime: c })}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
