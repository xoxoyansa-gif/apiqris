# APIQris Website Recreation

Recreation of [https://apiqris.com](https://apiqris.com) — Layanan API QRIS otomatis, dinamis, dan tanpa fee untuk Indonesia.

Dianalisis, diekstraksi, dan direkonstruksi menggunakan metodologi **Craft Anything**.

---

## 🌟 Fitur Situs

- **Zero Client-side JS Dependency**: Seluruh interaktivitas tab kode (cURL, PHP, Laravel, Node.js, Python, Go) menggunakan teknik murni CSS radio input (`:checked ~ .panes`).
- **Complete Route Coverage**: Mencakup seluruh 46 halaman dari situs asli (Landing page, Dokumentasi, Cara Kerja, Fitur, Harga, FAQ, Panduan integrasi Bank/e-Wallet & Bahasa pemrograman).
- **Asset Lengkap**: Favicon SVG/ICO, Apple Touch Icon, PWA Web Manifest, dan sitemap XML lengkap.
- **Ultra-fast & SEO Ready**: Dioptimalkan untuk performa maksimal dengan semantic HTML5 dan Open Graph / JSON-LD metadata.

---

## 📁 Struktur Halaman

- `/` — Halaman Utama (Hero, Fitur, Live Code Samples, Biaya, FAQ, Integrasi)
- `/dokumentasi` — Dokumentasi lengkap API QRIS, autentikasi, endpoint, webhook, dan idempotensi
- `/cara-kerja` — Alur kerja dari registrasi, integrasi, hingga mutasi otomatis
- `/fitur` — Fitur utama QRIS dinamis dan verifikasi instan
- `/harga` — Skema harga dan komparasi biaya
- `/faq` — Tanya jawab umum
- `/api-qris-*` — Panduan integrasi spesifik bahasa (PHP, Laravel, Node.js, Python, Go)
- `/api-qris-*` — Panduan integrasi spesifik bank & e-wallet (BCA, Mandiri, BRI, BNI, BSI, GoPay, OVO, Dana, ShopeePay, dll.)

---

## 🚀 Cara Menjalankan Secara Lokal

### Menggunakan Node.js
```bash
npm run dev
# atau
npx serve . -l 3000
```
Buka `http://localhost:3000` di browser Anda.

### Menggunakan Python
```bash
python3 -m http.server 3000
```

---

## 🔬 Bukti Investigasi Craft Anything

Proyek ini dipetakan dan dianalisis menggunakan **Craft Anything CLI / MCP** (`apiqris.cany`):
- **Triage ID**: `ev_858b96ed4ba4f664f0144d04a844671f922f152ce39aed5cb58fac0f45010889`
- **Finding ID**: `fnd_1`
- **Hypothesis**: `hyp_1` (Supported)
