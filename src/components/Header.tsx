import Logo from "./Logo";
import { CONTACT_URL, MAIN_SITE_URL } from "../config";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="nav" aria-label="Navigasi utama">
          <a href="#beranda">Beranda</a>
          <a href="#peta">Peta</a>
          <a href="#tentang">Tentang Data</a>
          {MAIN_SITE_URL && <a href={MAIN_SITE_URL}>Situs MagoGo</a>}
        </nav>
        {CONTACT_URL ? (
          <a className="btn btn-primary btn-sm" href={CONTACT_URL} target="_blank" rel="noreferrer">
            Hubungi Kami
          </a>
        ) : (
          <a className="btn btn-primary btn-sm" href="#peta">
            Lihat Peta
          </a>
        )}
      </div>
    </header>
  );
}
