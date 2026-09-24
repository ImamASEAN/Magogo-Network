export type CategoryId = "ikan" | "peternakan" | "toko_pakan" | "institusi" | "dlh";
export type Status = "calon" | "dihubungi" | "terverifikasi";
export type Wilayah = "Kota Pekalongan" | "Kab. Pekalongan" | "Kab. Batang" | "Kota Semarang";

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
  dlh: { label: "DLH", color: "#14b8a6" },
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
  { id: "p21", name: "Tambak PT Perindo Cabang Pekalongan", category: "ikan", area: "Krapyak Lor, Pekalongan Utara", wilayah: "Kota Pekalongan", lat: -6.8657595, lng: 109.6921275, status: "calon", note: "Tambak udang vaname." },
  { id: "p22", name: "Tambak Ikan Pantai Dewi", category: "ikan", area: "Krapyak Lor, Pekalongan Utara", wilayah: "Kota Pekalongan", lat: -6.8630855, lng: 109.6997859, status: "calon" },
  { id: "p23", name: "Lele Sistem FK Pekajangan", category: "ikan", area: "Pekajangan, Kedungwuni", wilayah: "Kab. Pekalongan", lat: -6.9454912, lng: 109.6549194, status: "calon" },
  { id: "p24", name: "Peternakan Ikan Lele Albarizi", category: "ikan", area: "Karangdowo, Kedungwuni", wilayah: "Kab. Pekalongan", lat: -6.9542209, lng: 109.6385168, status: "calon" },
  { id: "p25", name: "Pusat Bibit Lele Pekalongan", category: "ikan", area: "Jetak Lengkong, Wonopringgo", wilayah: "Kab. Pekalongan", lat: -6.9788099, lng: 109.630493, status: "calon", note: "Penyedia bibit lele." },
  { id: "p26", name: "Zaen Koi Pekalongan", category: "ikan", area: "Gumawang, Wiradesa", wilayah: "Kab. Pekalongan", lat: -6.893693, lng: 109.6174974, status: "calon", note: "Budidaya ikan koi." },
  { id: "p27", name: "Bibit Nila Indukan Orchid", category: "ikan", area: "Bebel, Wiradesa", wilayah: "Kab. Pekalongan", lat: -6.8798719, lng: 109.6203186, status: "calon", note: "Penyedia bibit dan indukan nila." },
  { id: "p28", name: "Jual Pakan Ternak Pekajangan", category: "toko_pakan", area: "Pekajangan, Kedungwuni", wilayah: "Kab. Pekalongan", lat: -6.9457735, lng: 109.6556263, status: "calon" },
  { id: "p29", name: "Lalita Jaya Toko Pakan Hewan", category: "toko_pakan", area: "Pajomblangan, Kedungwuni", wilayah: "Kab. Pekalongan", lat: -6.9737997, lng: 109.6652004, status: "calon", note: "Pakan hewan dan pakan burung." },
  { id: "p30", name: "Mustika Poultry Shop", category: "toko_pakan", area: "Jetak Kidul, Wonopringgo", wilayah: "Kab. Pekalongan", lat: -7.0086814, lng: 109.6339392, status: "calon", note: "Toko unggas, pakan, dan obat hewan." },
  { id: "p31", name: "Alby Jaya Poultry Shop", category: "toko_pakan", area: "Ngalian Kulon, Tirto", wilayah: "Kab. Pekalongan", lat: -6.9373335, lng: 109.6290879, status: "calon" },
  { id: "p32", name: "Kandang Ayam Heri Kurniawan", category: "peternakan", area: "Pantirejo, Kesesi", wilayah: "Kab. Pekalongan", lat: -6.9737112, lng: 109.5229706, status: "calon", note: "Klaster peternakan ayam Kesesi." },
  { id: "p33", name: "Mas Yulis Farm", category: "peternakan", area: "Kaibahan, Kesesi", wilayah: "Kab. Pekalongan", lat: -7.0104627, lng: 109.5155731, status: "calon", note: "Klaster peternakan ayam Kesesi." },
  { id: "p34", name: "Kandang Ayam Purwadi", category: "peternakan", area: "Mulyorejo, Kesesi", wilayah: "Kab. Pekalongan", lat: -6.98704, lng: 109.5261083, status: "calon", note: "Klaster peternakan ayam Kesesi." },
  { id: "p35", name: "Kandang Elly Karyoto", category: "peternakan", area: "Sidosari, Kesesi", wilayah: "Kab. Pekalongan", lat: -6.9890568, lng: 109.5238594, status: "calon", note: "Klaster peternakan ayam Kesesi." },
  { id: "p36", name: "Divany Farm", category: "peternakan", area: "Karangrejo, Kesesi", wilayah: "Kab. Pekalongan", lat: -7.0191347, lng: 109.5338546, status: "calon", note: "Klaster peternakan ayam Kesesi." },
  { id: "p37", name: "Serayu Pakan Ternak dan Serayu Pancing", category: "toko_pakan", area: "Kalibeluk, Warungasem", wilayah: "Kab. Batang", lat: -6.9333962, lng: 109.6885161, status: "calon" },
  { id: "p38", name: "Vina Jaya", category: "toko_pakan", area: "Proyonanggan Utara, Batang", wilayah: "Kab. Batang", lat: -6.9018357, lng: 109.7372078, status: "calon", note: "Toko pakan dan obat hewan." },
  { id: "p39", name: "Balai Benih Ikan Sojomerto", category: "institusi", area: "Sojomerto, Reban", wilayah: "Kab. Batang", lat: -7.0420085, lng: 109.9005994, status: "calon", note: "Balai benih ikan, pintu masuk ke pembudidaya di Batang." },
  { id: "p40", name: "Kelompok Budidaya Ikan Minorahayu", category: "ikan", area: "Bandar", wilayah: "Kab. Batang", lat: -7.0296495, lng: 109.7958324, status: "calon", note: "Kelompok pembudidaya. Satu kontak bisa membuka banyak pembudidaya." },
  { id: "p41", name: "Ahmad Bebek Farm", category: "peternakan", area: "Denasri Kulon, Batang", wilayah: "Kab. Batang", lat: -6.8948772, lng: 109.7098998, status: "calon", note: "Peternakan bebek." },
  { id: "p42", name: "Peternakan Bebek Pak Zainal Abidin", category: "peternakan", area: "Sidorejo, Warungasem", wilayah: "Kab. Batang", lat: -6.9657125, lng: 109.7067031, status: "calon", note: "Peternakan bebek." },
  { id: "p43", name: "Ranto Ternak Bebek", category: "peternakan", area: "Depok, Kandeman", wilayah: "Kab. Batang", lat: -6.9021077, lng: 109.7650686, status: "calon", note: "Peternakan bebek." },
  { id: "p44", name: "Peternakan Bebek Bleder", category: "peternakan", area: "Tegalsari, Kandeman", wilayah: "Kab. Batang", lat: -6.913911, lng: 109.7460161, status: "calon", note: "Peternakan bebek." },
  { id: "p45", name: "Petung Farm", category: "peternakan", area: "Donorejo, Limpung", wilayah: "Kab. Batang", lat: -7.0241057, lng: 109.9163534, status: "calon", note: "Ayam, bebek, dan entok. Klaster peternakan Limpung." },
  { id: "p46", name: "Kandang Ayam Imron", category: "peternakan", area: "Amongrogo, Limpung", wilayah: "Kab. Batang", lat: -7.0269578, lng: 109.9415739, status: "calon", note: "Klaster peternakan Limpung." },
  { id: "p47", name: "Sido Dadi Jaya Farm", category: "peternakan", area: "Babadan, Limpung", wilayah: "Kab. Batang", lat: -7.0156445, lng: 109.9312739, status: "calon", note: "Klaster peternakan Limpung." },
  { id: "p48", name: "PT Goshen Anugrah Sejahtera", category: "peternakan", area: "Gumawang, Pecalungan", wilayah: "Kab. Batang", lat: -7.0238486, lng: 109.8881144, status: "calon", note: "Peternakan ayam petelur modern." },
  { id: "p49", name: "Budidaya Ikan Lele Karanganyar Gunung", category: "ikan", area: "Karanganyar Gunung, Candisari", wilayah: "Kota Semarang", lat: -7.0198081, lng: 110.4303929, status: "calon" },
  { id: "p50", name: "Budidaya Ikan Lele Santri MIS", category: "ikan", area: "Tambakaji, Ngaliyan", wilayah: "Kota Semarang", lat: -6.9943164, lng: 110.3455012, status: "calon" },
  { id: "p51", name: "Azolla Lele Semarang", category: "ikan", area: "Wates, Ngaliyan", wilayah: "Kota Semarang", lat: -7.0118066, lng: 110.3304976, status: "calon", note: "Budidaya lele dengan pakan azolla, juga tempat belajar." },
  { id: "p52", name: "Dimas Petani Lele", category: "ikan", area: "Wonodri, Semarang Selatan", wilayah: "Kota Semarang", lat: -7.0024778, lng: 110.4288215, status: "calon" },
  { id: "p53", name: "Budidaya Lele Bp. Nur Cholis", category: "ikan", area: "Pakintelan, Gunung Pati", wilayah: "Kota Semarang", lat: -7.0792137, lng: 110.3889379, status: "calon" },
  { id: "p54", name: "Budidaya Ikan Air Tawar Bunda Nur", category: "ikan", area: "Gedawang, Banyumanik", wilayah: "Kota Semarang", lat: -7.0815448, lng: 110.4317004, status: "calon" },
  { id: "p55", name: "Nanda Ikan Akuatik", category: "ikan", area: "Kedungmundu, Tembalang", wilayah: "Kota Semarang", lat: -7.0260369, lng: 110.4746088, status: "calon", note: "Penjual benih ikan." },
  { id: "p56", name: "Balai Benih Ikan Mijen", category: "institusi", area: "Tambangan, Mijen", wilayah: "Kota Semarang", lat: -7.0837707, lng: 110.310543, status: "calon", note: "Balai benih ikan milik pemkot, pintu masuk ke pembudidaya." },
  { id: "p57", name: "AKM Ayam Kampung Mranggen", category: "peternakan", area: "Kedungmundu, Tembalang", wilayah: "Kota Semarang", lat: -7.0228133, lng: 110.4721842, status: "calon", note: "Peternakan ayam kampung." },
  { id: "p58", name: "Kandang Ayam Tiffany", category: "peternakan", area: "Cepoko, Gunung Pati", wilayah: "Kota Semarang", lat: -7.064661, lng: 110.353786, status: "calon", note: "Peternakan ayam untuk telur." },
  { id: "p59", name: "Peternak Yellow", category: "peternakan", area: "Ngesrep, Banyumanik", wilayah: "Kota Semarang", lat: -7.0341942, lng: 110.4178457, status: "calon", note: "Ayam kampung KUB dan entok." },
  { id: "p60", name: "Bamboo Poultry", category: "toko_pakan", area: "Peterongan, Semarang Selatan", wilayah: "Kota Semarang", lat: -6.9954381, lng: 110.4336359, status: "calon", note: "Toko pakan dan perlengkapan ternak yang ramai." },
  { id: "p61", name: "Toko Pakan Ternak Banyumanik (Sumber Barokah)", category: "toko_pakan", area: "Pudakpayung, Banyumanik", wilayah: "Kota Semarang", lat: -7.0843597, lng: 110.4162934, status: "calon" },
  { id: "p62", name: "Poultryshop Semarang", category: "toko_pakan", area: "Palebon, Pedurungan", wilayah: "Kota Semarang", lat: -7.0041259, lng: 110.4682217, status: "calon" },
  { id: "p63", name: "Toko Pakan Ternak Puspowarno", category: "toko_pakan", area: "Salamanmloyo, Semarang Barat", wilayah: "Kota Semarang", lat: -6.9882948, lng: 110.3957689, status: "calon" },
  { id: "p64", name: "Toko Devani Pakan Ternak", category: "toko_pakan", area: "Manyaran, Semarang Barat", wilayah: "Kota Semarang", lat: -7.0089181, lng: 110.3861794, status: "calon" },
  { id: "p65", name: "Pakan Ternak Pager Bambu", category: "toko_pakan", area: "Cepoko, Gunung Pati", wilayah: "Kota Semarang", lat: -7.0711183, lng: 110.3530964, status: "calon" },
  { id: "p66", name: "Gudang Pakan Ternak Rizqy", category: "toko_pakan", area: "Nongkosawit, Gunung Pati", wilayah: "Kota Semarang", lat: -7.0651926, lng: 110.3595285, status: "calon" },
  { id: "p67", name: "Jual Katul dan Dedak Pakan Ternak", category: "toko_pakan", area: "Plamongan Sari, Pedurungan", wilayah: "Kota Semarang", lat: -7.0178553, lng: 110.4863892, status: "calon" },
  { id: "p68", name: "PT Havindo Pakan Optima", category: "toko_pakan", area: "Kawasan Industri Candi, Ngaliyan", wilayah: "Kota Semarang", lat: -7.0134101, lng: 110.3585301, status: "calon", note: "Produsen pakan, pintu masuk ke jaringan agen." },
  { id: "p69", name: "DLH Kota Pekalongan", category: "dlh", area: "Kandang Panjang, Pekalongan Utara", wilayah: "Kota Pekalongan", lat: -6.8774272, lng: 109.6713099, status: "calon", note: "Bukan pembeli langsung. Pintu masuk kerja sama pengelolaan sampah organik." },
  { id: "p70", name: "Dinas Perkim LH Kabupaten Pekalongan", category: "dlh", area: "Kajen", wilayah: "Kab. Pekalongan", lat: -7.0334402, lng: 109.5981466, status: "calon", note: "Bukan pembeli langsung. Kantor lingkungan hidup kabupaten." },
  { id: "p71", name: "DLH Kabupaten Batang", category: "dlh", area: "Kauman, Batang", wilayah: "Kab. Batang", lat: -6.9111344, lng: 109.7291614, status: "calon", note: "Bukan pembeli langsung. Pintu masuk kerja sama pengelolaan sampah organik." },
  { id: "p72", name: "DLH Kota Semarang", category: "dlh", area: "Tugurejo, Tugu", wilayah: "Kota Semarang", lat: -6.9843209, lng: 110.3437175, status: "calon", note: "Bukan pembeli langsung. Pintu masuk kerja sama pengelolaan sampah organik." },
];
