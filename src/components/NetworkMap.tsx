import { useEffect, useMemo, useRef, useState } from "react";
import L from "leaflet";
import "leaflet.markercluster";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import { CATEGORIES, PARTNERS, STATUSES, type CategoryId, type Partner } from "../data/partners";

type Filter = CategoryId | "semua";

const CENTER: L.LatLngTuple = [-6.95, 109.7];

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);

const mapsLink = (p: Partner) => `https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`;

const makeIcon = (p: Partner, selected: boolean) =>
  L.divIcon({
    className: "pin-wrap",
    html: `<span class="pin${selected ? " is-selected" : ""}" style="--c:${CATEGORIES[p.category].color}"></span>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
    popupAnchor: [0, -14],
  });

const popupHtml = (p: Partner) => {
  const cat = CATEGORIES[p.category];
  const status = STATUSES[p.status];
  return `
    <div class="popup">
      <span class="popup-cat"><i style="background:${cat.color}"></i>${escapeHtml(cat.label)}</span>
      <strong class="popup-name">${escapeHtml(p.name)}</strong>
      <span class="popup-area">${escapeHtml(p.area)}, ${escapeHtml(p.wilayah)}</span>
      ${p.note ? `<p class="popup-note">${escapeHtml(p.note)}</p>` : ""}
      <span class="status status-${p.status}">${escapeHtml(status.label)} · ${escapeHtml(status.hint)}</span>
      <a class="popup-link" href="${mapsLink(p)}" target="_blank" rel="noreferrer">Buka di Google Maps</a>
    </div>`;
};

export default function NetworkMap() {
  const [filter, setFilter] = useState<Filter>("semua");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const mapEl = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const layerRef = useRef<L.MarkerClusterGroup | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const itemRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PARTNERS.filter(
      (p) =>
        (filter === "semua" || p.category === filter) &&
        (!q || `${p.name} ${p.area} ${p.wilayah}`.toLowerCase().includes(q)),
    );
  }, [filter, query]);

  // Buat peta sekali saja.
  useEffect(() => {
    if (!mapEl.current || mapRef.current) return;
    const map = L.map(mapEl.current, { zoomControl: false, scrollWheelZoom: false, maxZoom: 19 }).setView(CENTER, 10);
    L.control.zoom({ position: "bottomright" }).addTo(map);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    // Scroll halaman tidak terganggu; zoom dengan scroll aktif setelah peta diklik.
    map.on("click", () => map.scrollWheelZoom.enable());
    map.on("mouseout", () => map.scrollWheelZoom.disable());
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    layerRef.current = L.markerClusterGroup({
      showCoverageOnHover: false,
      maxClusterRadius: 44,
      animate: !reduceMotion,
      iconCreateFunction: (cluster) => {
        const n = cluster.getChildCount();
        const size = n < 10 ? 38 : n < 25 ? 46 : 54;
        return L.divIcon({
          html: `<span class="cluster" style="width:${size}px;height:${size}px">${n}</span>`,
          className: "cluster-wrap",
          iconSize: [size, size],
        });
      },
    }).addTo(map);
    mapRef.current = map;
    const markers = markersRef.current;
    return () => {
      map.remove();
      mapRef.current = null;
      layerRef.current = null;
      markers.clear();
    };
  }, []);

  // Pasang ulang marker saat filter berubah.
  useEffect(() => {
    const map = mapRef.current;
    const layer = layerRef.current;
    if (!map || !layer) return;
    layer.clearLayers();
    markersRef.current.clear();
    filtered.forEach((p) => {
      const marker = L.marker([p.lat, p.lng], { icon: makeIcon(p, false), title: p.name, keyboard: true })
        .bindPopup(popupHtml(p), { maxWidth: 280, minWidth: 220 })
        .on("click", () => setSelectedId(p.id));
      marker.addTo(layer);
      markersRef.current.set(p.id, marker);
    });
    if (filtered.length > 0) {
      map.fitBounds(L.latLngBounds(filtered.map((p) => [p.lat, p.lng] as L.LatLngTuple)).pad(0.2), {
        maxZoom: 13,
        animate: true,
      });
    }
  }, [filtered]);

  // Tandai marker terpilih dan gulirkan daftar ke item yang sesuai.
  useEffect(() => {
    filtered.forEach((p) => markersRef.current.get(p.id)?.setIcon(makeIcon(p, p.id === selectedId)));
    if (selectedId) itemRefs.current.get(selectedId)?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [selectedId, filtered]);

  const selectFromList = (p: Partner) => {
    setSelectedId(p.id);
    const marker = markersRef.current.get(p.id);
    const layer = layerRef.current;
    if (!marker || !layer) return;
    // Jika titik masih tergabung dalam lingkaran, peta memperbesar dulu baru membuka detail.
    layer.zoomToShowLayer(marker, () => marker.openPopup());
  };

  const filters: { id: Filter; label: string }[] = [
    { id: "semua", label: "Semua" },
    ...(Object.keys(CATEGORIES) as CategoryId[]).map((id) => ({ id, label: CATEGORIES[id].label })),
  ];

  return (
    <section className="map-section" id="peta">
      <div className="container">
        <div className="section-head section-head-dark">
          <span className="pill pill-dark">
            <i className="dot" /> Peta network
          </span>
          <h2>Calon Mitra di Pekalongan, Batang, dan Semarang</h2>
          <p>Pilih kategori atau cari nama tempat. Lingkaran hijau menunjukkan jumlah tempat, klik untuk memperbesar.</p>
        </div>

        <div className="window">
          <div className="window-bar">
            <span className="lights" aria-hidden="true">
              <i style={{ background: "#ef4444" }} />
              <i style={{ background: "#f59e0b" }} />
              <i style={{ background: "#22c55e" }} />
            </span>
            <span className="window-url">magogo.io/network</span>
            <span className="window-status" aria-live="polite">
              {filtered.length} dari {PARTNERS.length} calon mitra
            </span>
          </div>

          <div className="toolbar">
            <div className="chips" role="group" aria-label="Filter kategori">
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  className={`chip${filter === f.id ? " is-active" : ""}`}
                  aria-pressed={filter === f.id}
                  onClick={() => setFilter(f.id)}
                >
                  {f.id !== "semua" && <i className="dot" style={{ background: CATEGORIES[f.id].color }} />}
                  {f.label}
                </button>
              ))}
            </div>
            <label className="search">
              <span className="sr-only">Cari nama atau daerah</span>
              <input
                type="search"
                placeholder="Cari nama atau daerah"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
          </div>

          <div className="map-layout">
            <div className="map-box">
              <div ref={mapEl} className="map" role="region" aria-label="Peta calon mitra MagoGo Network" />
              <div className="legend" aria-hidden="true">
                {(Object.keys(CATEGORIES) as CategoryId[]).map((id) => (
                  <span key={id}>
                    <i className="dot" style={{ background: CATEGORIES[id].color }} />
                    {CATEGORIES[id].label}
                  </span>
                ))}
              </div>
            </div>

            <ul className="list" aria-label="Daftar calon mitra">
              {filtered.length === 0 && (
                <li className="empty">
                  <strong>Tidak ada hasil.</strong>
                  <span>Coba kata kunci lain atau pilih kategori Semua.</span>
                </li>
              )}
              {filtered.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    ref={(el) => {
                      if (el) itemRefs.current.set(p.id, el);
                      else itemRefs.current.delete(p.id);
                    }}
                    className={`item${selectedId === p.id ? " is-selected" : ""}`}
                    onClick={() => selectFromList(p)}
                  >
                    <i className="dot" style={{ background: CATEGORIES[p.category].color }} />
                    <span className="item-body">
                      <strong>{p.name}</strong>
                      <small>
                        {p.area}, {p.wilayah}
                      </small>
                    </span>
                    <span className={`status status-${p.status}`}>{STATUSES[p.status].label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
