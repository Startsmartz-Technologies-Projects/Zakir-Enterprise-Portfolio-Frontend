const { useState, useEffect } = React;

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [tweaks, setTweaks] = useState(window.TWEAKS);
  const [tweaksOpen, setTweaksOpen] = useState(false);

  // Apply CSS vars when tweaks change
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--lime", tweaks.primaryLime);
    root.style.setProperty("--gold", tweaks.gold);
    root.style.setProperty("--black", tweaks.authority);
  }, [tweaks]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tweaks host protocol
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
      <Hero variant={tweaks.heroVariant}/>
      <Expertise/>
      <Stats/>
      <About/>
      <Projects/>
      <Services/>
      <Network/>
      <Certifications/>
      <TrustedBy/>
      <Testimonials/>
      <Insights/>
      <News/>
      <CTABanner/>
      <Footer/>
      <Tweaks open={tweaksOpen} tweaks={tweaks} setTweaks={setTweaks} onClose={() => setTweaksOpen(false)}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
