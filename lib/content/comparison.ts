export type ComparisonRow = {
  attribute: string;
  diy: string;
  agency: string;
  webvlora: string;
};

export const comparisonRows: ComparisonRow[] = [
  {
    attribute: "Kecepatan",
    diy: "Berminggu-minggu belajar",
    agency: "1–3 bulan pengerjaan",
    webvlora: "Siap dalam 3–7 hari",
  },
  {
    attribute: "Biaya",
    diy: "Gratis, tapi waktu mahal",
    agency: "Rp 10–50 juta+",
    webvlora: "Mulai Rp 499 ribu",
  },
  {
    attribute: "Kustomisasi",
    diy: "Terbatas template",
    agency: "Penuh, tapi lama",
    webvlora: "Penuh + AI-assisted",
  },
  {
    attribute: "Dukungan",
    diy: "Forum & dokumentasi",
    agency: "Terbatas pasca-launch",
    webvlora: "Tim lokal via WhatsApp",
  },
  {
    attribute: "SEO",
    diy: "Manual, perlu keahlian",
    agency: "Tergantung paket",
    webvlora: "Bawaan di setiap paket",
  },
  {
    attribute: "Hosting",
    diy: "Bayar & urus sendiri",
    agency: "Sering tidak termasuk",
    webvlora: "Termasuk di semua paket",
  },
  {
    attribute: "Update Konten",
    diy: "Harus bisa coding",
    agency: "Bayar per perubahan",
    webvlora: "Mudah via dashboard",
  },
];
