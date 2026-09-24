export type CategoryId = "ikan" | "peternakan" | "toko_pakan" | "institusi";
export type Status = "calon" | "dihubungi" | "terverifikasi";
export type Wilayah = "Kota Pekalongan" | "Kab. Pekalongan" | "Kab. Batang";

export interface Partner {
  id: string;
  name: string;
  category: CategoryId;
  area: string;
  wilayah: Wilayah;
  lat: number;
  lng: number;
  status: Status;
  note?: string;
}

export const CATEGORIES: Record<CategoryId, { label: string; color: string }> = {
  ikan: { label: "Budidaya Ikan", color: "#3b82f6" },
  peternakan: { label: "Peternakan", color: "#f97316" },
  toko_pakan: { label: "Toko Pakan", color: "#84cc16" },
  institusi: { label: "Institusi", color: "#a78bfa" },
};

export const STATUSES: Record<Status, { label: string; hint: string }> = {
  calon: { label: "Calon mitra", hint: "Belum dihubungi" },
  dihubungi: { label: "Sudah dihubungi", hint: "Menunggu konfirmasi" },
  terverifikasi: { label: "Terverifikasi", hint: "Kebutuhan dan izin tampil sudah dikonfirmasi" },
};

// Daftar awal hasil pencarian daring. Semua masih berstatus "calon".
// Kontak sengaja tidak dimasukkan sampai pemilik usaha memberi izin.
export const PARTNERS: Partner[] = [
  { id: "p01", name: "Tambak Lele Kajen", category: "ikan", area: "Kajen", wilayah: "Kab. Pekalongan", lat: -7.0364922, lng: 109.5666303, status: "calon" },
  { id: "p02", name: "Kawasan Budidaya Ikan Nila Salina", category: "ikan", area: "Degayu, Pekalongan Utara", wilayah: "Kota Pekalongan", lat: -6.8696143, lng: 109.7045196, status: "calon", note: "Kawasan nila dengan banyak pembudidaya dalam satu lokasi." },
  { id: "p03", name: "Balai Benih Ikan Pemkot Pekalongan", category: "institusi", area: "Kertoharjo, Pekalongan Selatan", wilayah: "Kota Pekalongan", lat: -6.9280843, lng: 109.679732, status: "calon", note: "Pintu masuk ke kelompok pembudidaya dan penyuluh perikanan." },
  { id: "p04", name: "Sinarbaru Farm", category: "peternakan", area: "Kramatsari, Pekalongan Barat", wilayah: "Kota Pekalongan", lat: -6.888538, lng: 109.661607, status: "calon", note: "Peternakan ayam (DOC dan petelur)." },
  { id: "p05", name: "Azzahra Farm", category: "peternakan", area: "Dekoro, Pekalongan Timur", wilayah: "Kota Pekalongan", lat: -6.8915264, lng: 109.6866142, status: "calon", note: "Jenis ternak perlu dicek." },
  { id: "p06", name: "Ayam H. Khudlori", category: "peternakan", area: "Samborejo, Tirto", wilayah: "Kota Pekalongan", lat: -6.8975477, lng: 109.6426779, status: "calon", note: "Depot ayam broiler." },
  { id: "p07", name: "Peternakan Ayam Broiler H. Jamar", category: "peternakan", area: "Pecakaran, Wonokerto", wilayah: "Kab. Pekalongan", lat: -6.8764169, lng: 109.6404608, status: "calon" },
  { id: "p08", name: "Unggul Jaya PS", category: "toko_pakan", area: "Noyontaan, Pekalongan Timur", wilayah: "Kota Pekalongan", lat: -6.893239, lng: 109.680393, status: "calon", note: "Grosir pakan ternak dan ikan." },
  { id: "p09", name: "Toko Pakan Ternak 94 A", category: "toko_pakan", area: "Degayu, Pekalongan Utara", wilayah: "Kota Pekalongan", lat: -6.886008, lng: 109.7027227, status: "calon", note: "Dekat kawasan nila Degayu." },
  { id: "p10", name: "Central Poultry Shop", category: "toko_pakan", area: "Medono, Pekalongan Barat", wilayah: "Kota Pekalongan", lat: -6.905616, lng: 109.663574, status: "calon" },
  { id: "p11", name: "Budidaya Lele & Gabus Global Lestari Semesta", category: "ikan", area: "Lebo, Warungasem", wilayah: "Kab. Batang", lat: -6.9286767, lng: 109.7072008, status: "calon", note: "Membuka peluang kemitraan di halaman usahanya." },
  { id: "p12", name: "Budidaya Lele Bpk. Yanto", category: "ikan", area: "Batiombo, Bandar", wilayah: "Kab. Batang", lat: -6.9781597, lng: 109.776337, status: "calon", note: "Kolam lele besar, menerima pesanan dalam jumlah banyak." },
  { id: "p13", name: "Budidaya Lele Mas Supri", category: "ikan", area: "Watesalit, Batang", wilayah: "Kab. Batang", lat: -6.9158068, lng: 109.7183753, status: "calon" },
  { id: "p14", name: "Bibit Ayam Kampung Petelur Elba", category: "peternakan", area: "Wonosari, Bawang", wilayah: "Kab. Batang", lat: -7.116577, lng: 109.941491, status: "calon" },
  { id: "p15", name: "Kandang Nur Alip", category: "peternakan", area: "Pesalakan, Bandar", wilayah: "Kab. Batang", lat: -7.0341107, lng: 109.7738594, status: "calon", note: "Jenis ternak perlu dicek." },
  { id: "p16", name: "Kandang Eksperimen", category: "peternakan", area: "Siberuk, Tulis", wilayah: "Kab. Batang", lat: -6.9625496, lng: 109.8109703, status: "calon", note: "Peternakan ayam berbagai umur." },
  { id: "p17", name: "CK Farm", category: "peternakan", area: "Bandusari, Blado", wilayah: "Kab. Batang", lat: -7.0659937, lng: 109.8334957, status: "calon", note: "Ayam kampung petelur dan pedaging." },
  { id: "p18", name: "Toko Pakan Ternak Maju Jaya", category: "toko_pakan", area: "Denasri Kulon, Batang", wilayah: "Kab. Batang", lat: -6.8933146, lng: 109.7113212, status: "calon" },
  { id: "p19", name: "Rajawali Jual Pakan Ternak", category: "toko_pakan", area: "Karangasem Selatan, Batang", wilayah: "Kab. Batang", lat: -6.8982158, lng: 109.7395294, status: "calon" },
  { id: "p20", name: "Sri Jaya Pakan Burung", category: "toko_pakan", area: "Kasepuhan, Batang", wilayah: "Kab. Batang", lat: -6.8968361, lng: 109.7277246, status: "calon", note: "Pakan burung. Kemungkinan pasar maggot kering." },
];
