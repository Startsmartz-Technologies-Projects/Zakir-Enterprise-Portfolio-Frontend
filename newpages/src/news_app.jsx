// News Listing — app composition

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

  // Compute counts per category across the full dataset
  const counts = useMemo(() => {
    const c = { all: window.NEWS_DATA.length };
    window.NEWS_CATEGORIES.forEach(k => c[k] = 0);
    window.NEWS_DATA.forEach(n => { if (c[n.category] !== undefined) c[n.category]++; });
    return c;
  }, []);

  // Filtered + sorted list
  const list = useMemo(() => {
    let arr = window.NEWS_DATA.slice();
    if (activeCat !== "all") arr = arr.filter(n => n.category === activeCat);
    if (query.trim()) {
      const q = query.toLowerCase();
      arr = arr.filter(n =>
        n.title.toLowerCase().includes(q) ||
        n.excerpt.toLowerCase().includes(q) ||
        n.category.toLowerCase().includes(q)
      );
    }
    if (sort === "latest") arr.sort((a, b) => b.dateISO.localeCompare(a.dateISO));
    else if (sort === "oldest") arr.sort((a, b) => a.dateISO.localeCompare(b.dateISO));
    else if (sort === "featured") arr.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    return arr;
  }, [query, activeCat, sort]);

  // Featured — pick featured flag else first by date
  const featured = useMemo(() => {
    const withFeatured = window.NEWS_DATA.find(n => n.featured);
    return withFeatured || window.NEWS_DATA.slice().sort((a,b) => b.dateISO.localeCompare(a.dateISO))[0];
  }, []);

  // Exclude featured from main grid to avoid duplicate
  const gridItems = useMemo(() => list.filter(n => n.id !== featured.id), [list, featured]);

  return (
    <>
      <Nav scrolled={scrolled}/>
      <NcHero/>
      <NcIntro/>
      <NcToolbar
        query={query} setQuery={setQuery}
        activeCat={activeCat} setActiveCat={setActiveCat}
        sort={sort} setSort={setSort}
        counts={counts}
      />
      <NcFeatured item={featured}/>
      <NcGrid items={gridItems} totalFiltered={list.length}/>
      <NcTrustStrip/>
      <NcCTA/>
      <Footer/>
      <NewsTweaks open={tweaksOpen} tweaks={tweaks} setTweaks={setTweaks} onClose={() => setTweaksOpen(false)}/>
    </>
  );
}

function NewsTweaks({ open, tweaks, setTweaks, onClose }) {
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
