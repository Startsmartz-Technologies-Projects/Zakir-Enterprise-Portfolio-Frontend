// News Detail — app composition

const { useState, useEffect, useMemo } = React;

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [tweaks, setTweaks] = useState(window.TWEAKS);
  const [tweaksOpen, setTweaksOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--lime", tweaks.primaryLime || "#B4DE35");
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

  // Pick article by query ?id= (fallback to featured one)
  const item = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const found = id && window.NEWS_DATA.find(n => n.id === id);
    return found || window.NEWS_DATA.find(n => n.featured) || window.NEWS_DATA[0];
  }, []);

  const body = window.ARTICLE_BODIES[item.id] || window.DEFAULT_BODY(item);

  return (
    <>
      <Nav scrolled={scrolled}/>
      <NdHero item={item}/>
      <NdFeaturedImage item={item}/>
      <NdArticleBody item={item} body={body}/>
      <NdGallery/>
      <NdRelated currentId={item.id}/>
      <NdCTA/>
      <Footer/>
      <NdTweaks open={tweaksOpen} tweaks={tweaks} setTweaks={setTweaks} onClose={() => setTweaksOpen(false)}/>
    </>
  );
}

function NdTweaks({ open, tweaks, setTweaks, onClose }) {
  if (!open) return null;
  const update = (patch) => {
    setTweaks({ ...tweaks, ...patch });
    try { window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*"); } catch {}
  };
  const swatches = ["#B4DE35", "#B7E22A", "#8DAC24", "#D4A017"];
  const articles = window.NEWS_DATA.slice(0, 6);
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
        <div className="tweak-row">
          <label>Preview article</label>
          <div className="tweak-options" style={{flexDirection:"column",alignItems:"stretch"}}>
            {articles.map(a => (
              <a key={a.id} className="tweak-opt"
                 style={{textAlign:"left",textTransform:"none",fontSize:11,letterSpacing:0}}
                 href={`?id=${a.id}`}>{a.title.slice(0, 44)}{a.title.length > 44 ? "…" : ""}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
