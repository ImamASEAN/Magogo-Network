import { CATEGORIES, PARTNERS, type CategoryId } from "../data/partners";

const total = PARTNERS.length;
const verifiedCount = PARTNERS.filter((p) => p.status === "terverifikasi").length;
const wilayahCount = new Set(PARTNERS.map((p) => p.wilayah)).size;
const categoryCount = Object.keys(CATEGORIES).length;

const countBy = (id: CategoryId) => PARTNERS.filter((p) => p.category === id).length;
const countVerifiedBy = (id: CategoryId) => PARTNERS.filter((p) => p.category === id && p.status === "terverifikasi").length;

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
            Peta jaringan pembeli &amp; mitra maggot BSF di Pekalongan, Batang, dan Semarang: tambak, peternak, toko pakan, DLH, dan unit TPS3R pengolah sampah organik. Titik terverifikasi telah memiliki kesepakatan kerja sama (MoU).
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#peta">
              Buka Peta
            </a>
            <a className="btn btn-ghost" href="#tentang">
              Tentang Verifikasi &amp; MoU
            </a>
          </div>
          <dl className="hero-stats">
            <div>
              <dt>{total}</dt>
              <dd>Total Titik</dd>
            </div>
            <div>
              <dt>{verifiedCount}</dt>
              <dd>Mitra MoU</dd>
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

        <div className="hero-panel glass" aria-label="Ringkasan mitra per kategori">
          <div className="panel-head">
            <span className="mono-label">Ringkasan network</span>
            <span className="mono-label accent">{verifiedCount} Terverifikasi (MoU)</span>
          </div>
          <div className="metric-grid">
            {(Object.keys(CATEGORIES) as CategoryId[]).map((id) => {
              const n = countBy(id);
              const v = countVerifiedBy(id);
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
                    <i className="dot" style={{ background: v > 0 ? "var(--mint)" : "rgba(255,255,255,0.3)" }} />
                    {v} terverifikasi (MoU)
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
