// Blog Detail — app composition

const { useState, useEffect, useMemo } = React;

function getQueryId() {
  try {
    const p = new URLSearchParams(window.location.search);
    return p.get('id');
  } catch { return null; }
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [tweaks, setTweaks] = useState(window.TWEAKS);
  const [tweaksOpen, setTweaksOpen] = useState(false);
  const [articleId, setArticleId] = useState(getQueryId() || window.BLOG_DATA[0].id);

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

  useEffect(() => { window.scrollTo({top:0}); }, [articleId]);

  const article = useMemo(
    () => window.BLOG_DATA.find(a => a.id === articleId) || window.BLOG_DATA[0],
    [articleId]
  );
  const body = useMemo(() => window.getBlogBody(article), [article]);

  const related = useMemo(() => {
    const same = window.BLOG_DATA.filter(n => n.category === article.category && n.id !== article.id).slice(0, 3);
    if (same.length >= 3) return same;
    const fill = window.BLOG_DATA.filter(n => n.id !== article.id && !same.includes(n)).slice(0, 3 - same.length);
    return [...same, ...fill];
  }, [article]);

  return (
    <>
      <Nav scrolled={scrolled}/>
      <BdHero article={article}/>
      <BdArticle article={article} body={body} related={related}/>
      <BdMidCTA/>
      <BdRelated items={related}/>
      <BdFinalCTA/>
      <Footer/>
      <DetailTweaks open={tweaksOpen} tweaks={tweaks} setTweaks={setTweaks}
                    articleId={articleId} setArticleId={setArticleId}
                    onClose={() => setTweaksOpen(false)}/>
    </>
  );
}

function DetailTweaks({ open, tweaks, setTweaks, articleId, setArticleId, onClose }) {
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
        <div className="tweak-row">
          <label>Preview article</label>
          <select value={articleId} onChange={e => setArticleId(e.target.value)}
                  style={{width:'100%',padding:'10px 14px',borderRadius:10,border:'1px solid rgba(255,255,255,0.15)',background:'rgba(255,255,255,0.05)',color:'#fff',fontSize:12,fontFamily:'Manrope,sans-serif'}}>
            {window.BLOG_DATA.map(a => (
              <option key={a.id} value={a.id} style={{color:'#000'}}>{a.title}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
