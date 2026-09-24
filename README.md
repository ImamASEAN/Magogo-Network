# MagoGo Network

Peta calon pembeli hasil panen maggot (Pekalongan, Batang, dan Semarang) beserta DLH setempat. Vite + React + TypeScript + Leaflet.

## Jalankan lokal (PowerShell)

```powershell
npm install
npm run dev
```

## Deploy ke Vercel

```powershell
npm install -g vercel
vercel
vercel --prod
```

Atau push ke GitHub lalu impor repo di Vercel. Framework terdeteksi otomatis (Vite), tanpa pengaturan tambahan.

## Yang perlu kamu isi / ubah

- `src/config.ts`: `MAIN_SITE_URL` (link ke situs utama) dan `CONTACT_URL` (WhatsApp/kontak). Kalau kosong, tombolnya disembunyikan.
- `src/data/partners.ts`: daftar tempat. Tambah objek baru, atau ubah `status` menjadi `"dihubungi"` / `"terverifikasi"` setelah kunjungan.
- Kontak pemilik sengaja tidak ditampilkan. Tambahkan hanya setelah pemilik memberi izin.

## Catatan data dan peta

- Daftar awal berasal dari pencarian Google Maps. Di situs, Google Maps hanya dipakai sebagai tautan navigasi.
- Ubah nama dan koordinat ke data yang kamu konfirmasi sendiri saat kunjungan.
- Ubin peta memakai server OpenStreetMap standar (cukup untuk trafik kecil). Kalau trafik naik, pindah ke penyedia ubin sendiri.
