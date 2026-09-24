import type { CSSProperties } from "react";
import { CONTACT_URL } from "../config";
import { STATUSES, type Status } from "../data/partners";

const stages: { id: Status; color: string; body: string }[] = [
  {
    id: "calon",
    color: "#f97316",
    body: "Ditemukan dari pencarian awal di peta daring, Dinas, dan komunitas. Tim belum menghubungi tempat ini.",
  },
  {
    id: "dihubungi",
    color: "#3b82f6",
    body: "Tim MagoGo menghubungi atau mengunjungi langsung untuk menanyakan kebutuhan maggot dan jenis yang diterima.",
  },
  {
    id: "terverifikasi",
    color: "#22c55e",
    body: "Lokasi dan kebutuhan sudah dikonfirmasi, dan pemilik usaha memberi izin untuk ditampilkan di peta.",
  },
];

export default function About() {
  return (
    <section className="about" id="tentang">
      <div className="container">
        <div className="section-head">
          <span className="pill pill-light">
            <i className="dot" /> Tentang data
          </span>
          <h2>Dari Calon Menjadi Mitra Terverifikasi</h2>
          <p>
            Setiap titik di peta melewati tiga tahap. Saat ini semua tempat masih berstatus calon, jadi
            kontak pemiliknya belum ditampilkan.
          </p>
        </div>

        <ol className="stages">
          {stages.map((s, i) => (
            <li className="stage" key={s.id} style={{ "--c": s.color } as CSSProperties}>
              <span className="stage-badge">Tahap {i + 1}</span>
              <h3>{STATUSES[s.id].label}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>

        {CONTACT_URL && (
          <div className="cta-card">
            <div>
              <h3>Kenal pembeli maggot di daerahmu?</h3>
              <p>Kabari kami nama tempat dan lokasinya. Tim MagoGo akan menghubungi mereka lebih dulu.</p>
            </div>
            <a className="btn btn-primary" href={CONTACT_URL} target="_blank" rel="noreferrer">
              Kabari Kami
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
