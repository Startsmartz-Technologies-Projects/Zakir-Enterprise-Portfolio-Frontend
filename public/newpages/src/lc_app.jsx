// Let's Collaborate — app composition

const { useState, useEffect } = React;

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [tweaks, setTweaks] = useState(window.TWEAKS);
  const [tweaksOpen, setTweaksOpen] = useState(false);
  const [intent, setIntent] = useState("");

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--lime", tweaks.primaryLime || "#B7E22A");
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

  const handleSetIntent = (id) => {
    setIntent(id);
    // scroll to form
    setTimeout(() => {
      const el = document.getElementById("form");
      if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }, 80);
  };

  return (
    <>
      <Nav scrolled={scrolled}/>
      <LcHero/>
      <LcTrustHook/>
      <LcIntentGrid selected={intent} setSelected={handleSetIntent}/>
      <LcConversion intent={intent} setIntent={setIntent} prefillService={tweaks.prefillService || ""}/>
      <LcMap/>
      <LcFinalCTA/>
      <Footer/>
      <LcTweaks open={tweaksOpen} tweaks={tweaks} setTweaks={setTweaks} onClose={() => setTweaksOpen(false)}/>
    </>
  );
}

function LcTweaks({ open, tweaks, setTweaks, onClose }) {
  if (!open) return null;
  const update = (patch) => {
    const next = { ...tweaks, ...patch };
    setTweaks(next);
    try { window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*"); } catch {}
  };
  const swatches = ["#B7E22A", "#CFE85A", "#9BC41E", "#D4A017", "#E8C35A"];
  const services = ["", "Building Construction", "Road Works", "Bridge & Culvert", "Earthwork", "Drainage Work"];
  return (
    <div className="tweaks">
      <div className="tweaks-head">
        <span>Tweaks</span>
        <button className="tweaks-close" onClick={onClose}>✕</button>
      </div>
      <div className="tweaks-body">
        <div className="tweak-row">
          <label>Primary accent</label>
          <div className="tweak-swatches">
            {swatches.map(c => (
              <button key={c} className={`tweak-swatch ${tweaks.primaryLime === c ? "active" : ""}`}
                      style={{background: c}} onClick={() => update({ primaryLime: c })}/>
            ))}
          </div>
        </div>
        <div className="tweak-row">
          <label>Authority tone</label>
          <div className="tweak-options">
            {[["#111111","charcoal"],["#0f1c12","deep olive"],["#1a1a1a","ink"]].map(([c, l]) => (
              <button key={c} className={`tweak-opt ${tweaks.authority === c ? "active" : ""}`}
                      onClick={() => update({ authority: c })}>{l}</button>
            ))}
          </div>
        </div>
        <div className="tweak-row">
          <label>Prefill service (from service page)</label>
          <div className="tweak-options">
            {services.map(s => (
              <button key={s || "none"}
                className={`tweak-opt ${(tweaks.prefillService||"") === s ? "active" : ""}`}
                onClick={() => update({ prefillService: s })}>{s || "none"}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
