// Certifications page — app shell

const { useState, useEffect } = React;

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [tweaks, setTweaks] = useState(window.TWEAKS);
  const [tweaksOpen, setTweaksOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--lime", tweaks.primaryLime || "#B4DE35");
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

  return (
    <>
      <Nav scrolled={scrolled}/>
      <CtHero/>
      <CtIntro/>
      <CtGrid/>
      <CtTrust/>
      <CtCTA/>
      <Footer/>
      {tweaksOpen && (
        <div className="tweaks">
          <div className="tweaks-head"><span>Tweaks</span><button className="tweaks-close" onClick={() => setTweaksOpen(false)}>✕</button></div>
          <div className="tweaks-body">
            <div className="tweak-row">
              <label>Lime accent</label>
              <div className="tweak-swatches">
                {["#B4DE35","#B7E22A","#8DAC24","#D4A017"].map(c => (
                  <button key={c} className={`tweak-swatch ${tweaks.primaryLime === c ? "active" : ""}`}
                          style={{background: c}}
                          onClick={() => {
                            const next = { ...tweaks, primaryLime: c };
                            setTweaks(next);
                            try { window.parent.postMessage({type:"__edit_mode_set_keys", edits: { primaryLime: c }}, "*"); } catch {}
                          }}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
