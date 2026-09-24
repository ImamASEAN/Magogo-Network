import { CATEGORIES, PARTNERS, type CategoryId } from "../data/partners";

const total = PARTNERS.length;
const wilayahCount = new Set(PARTNERS.map((p) => p.wilayah)).size;
const categoryCount = Object.keys(CATEGORIES).length;

const countBy = (id: CategoryId) => PARTNERS.filter((p) => p.category === id).length;

export default function Hero() {
  return (
    <section className="hero" id="beranda">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="pill pill-dark">
            <i className="dot" /> MagoGo Network · Pembeli Hasil Panen
          </span>
          <h1>
            Temukan Pembeli untuk <span className="hl">Hasil Panen</span> Maggot
          </h1>
          <p className="lead">
            Peta calon pembeli maggot BSF: peternak, tambak, toko pakan, dan dinas lingkungan hidup di Pekalongan, Batang, dan Semarang.
            Daftar ini masih tahap awal dan sedang dihubungi satu per satu oleh tim MagoGo.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#peta">
              Buka Peta
            </a>
            <a className="btn btn-ghost" href="#tentang">
              Cara Kami Memverifikasi
            </a>
          </div>
          <dl className="hero-stats">
            <div>
              <dt>{total}</dt>
              <dd>Calon mitra</dd>
            </div>
            <div>
              <dt>{wilayahCount}</dt>
              <dd>Wilayah</dd>
            </div>
            <div>
              <dt>{categoryCount}</dt>
              <dd>Kategori</dd>
            </div>
          </dl>
        </div>

        <div className="hero-panel glass" aria-label="Ringkasan calon mitra per kategori">
          <div className="panel-head">
            <span className="mono-label">Ringkasan network</span>
            <span className="mono-label accent">Semua calon</span>
          </div>
          <div className="metric-grid">
            {(Object.keys(CATEGORIES) as CategoryId[]).map((id) => {
              const n = countBy(id);
              return (
                <div className="metric" key={id}>
                  <span className="mono-label" style={{ color: CATEGORIES[id].color }}>
                    {CATEGORIES[id].label}
                  </span>
                  <strong>{n}</strong>
                  <div className="bar">
                    <i style={{ width: `${(n / total) * 100}%`, background: CATEGORIES[id].color }} />
                  </div>
                  <small>
                    <i className="dot" style={{ background: CATEGORIES[id].color }} /> belum terverifikasi
                  </small>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
