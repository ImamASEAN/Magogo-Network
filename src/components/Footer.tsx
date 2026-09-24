import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Logo />
          <p>Smart Chamber untuk budidaya maggot yang praktis dan terkendali.</p>
        </div>
        <div className="footer-meta">
          <span>Peta © kontributor OpenStreetMap</span>
          <span>© 2026 MagoGo</span>
        </div>
      </div>
    </footer>
  );
}
