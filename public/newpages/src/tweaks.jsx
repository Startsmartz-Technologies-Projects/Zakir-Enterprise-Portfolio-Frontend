// Tweaks panel — hero variant, accent palette, density

function Tweaks({ open, tweaks, setTweaks, onClose }) {
  if (!open) return null;
  const update = (patch) => {
    const next = { ...tweaks, ...patch };
    setTweaks(next);
    try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*'); } catch {}
  };

  const heroVariants = [
    { k: "skyline", l: "Skyline" },
    { k: "crane",   l: "Crane" },
    { k: "bridge",  l: "Bridge" },
  ];
  const palettes = [
    { k: "#B7E22A", l: "Lime" },
    { k: "#86c232", l: "Leaf" },
    { k: "#d8e330", l: "Yellow" },
    { k: "#5eead4", l: "Teal" },
    { k: "#f97316", l: "Orange" },
  ];
  return (
    <div className="tweaks">
      <div className="tweaks-head">
        <span>Tweaks</span>
        <button className="tweaks-close" onClick={onClose}>✕</button>
      </div>
      <div className="tweaks-body">
        <div className="tweak-row">
          <label>Hero image</label>
          <div className="tweak-options">
            {heroVariants.map(v => (
              <button key={v.k}
                className={`tweak-opt ${tweaks.heroVariant === v.k ? "active" : ""}`}
                onClick={() => update({ heroVariant: v.k })}>{v.l}</button>
            ))}
          </div>
        </div>
        <div className="tweak-row">
          <label>Primary accent</label>
          <div className="tweak-swatches">
            {palettes.map(p => (
              <button key={p.k}
                className={`tweak-swatch ${tweaks.primaryLime === p.k ? "active" : ""}`}
                style={{ background: p.k }}
                onClick={() => update({ primaryLime: p.k })}
                title={p.l}/>
            ))}
          </div>
        </div>
        <div className="tweak-row">
          <label>Headline</label>
          <input type="text" value={tweaks.heroHeadline}
            onChange={e => update({ heroHeadline: e.target.value })}/>
        </div>
        <div className="tweak-row">
          <label>Authority tone</label>
          <div className="tweak-options">
            {[
              {k:"#111111", l:"Black"},
              {k:"#1a1f24", l:"Slate"},
              {k:"#0f1c12", l:"Forest"},
            ].map(o => (
              <button key={o.k}
                className={`tweak-opt ${tweaks.authority === o.k ? "active" : ""}`}
                onClick={() => update({ authority: o.k })}>{o.l}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

window.Tweaks = Tweaks;
