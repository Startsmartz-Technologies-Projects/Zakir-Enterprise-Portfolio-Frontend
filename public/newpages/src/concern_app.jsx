// Concern Detail — app composition

const { useState, useEffect } = React;

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

  const c = window.CONCERNS[0];

  return (
    <>
      <Nav scrolled={scrolled}/>
      <CdHero c={c}/>
      <CdOverview c={c}/>
      <CdFacts c={c}/>
      <CdServices c={c}/>
      <CdWhy c={c}/>
      <CdProjects c={c}/>
      <CdProcess c={c}/>
      <CdGallery c={c}/>
      <CdRelated/>
      <CdFAQ c={c}/>
      <CdCTA c={c}/>
      <Footer/>
      <ConcernTweaks open={tweaksOpen} tweaks={tweaks} setTweaks={setTweaks} onClose={() => setTweaksOpen(false)}/>
    </>
  );
}

function ConcernTweaks({ open, tweaks, setTweaks, onClose }) {
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
