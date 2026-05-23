export type PricingTier = {
  name: string;
  description: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  popular?: boolean;
  features: string[];
  cta: string;
  ctaHref: string;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    description: "Cocok untuk UMKM dan profesional yang baru mulai online.",
    monthlyPrice: 499000,
    yearlyPrice: Math.round(499000 * 12 * 0.8),
    features: [
      "1 halaman landing page",
      "Domain .id gratis 1 tahun",
      "Hosting SSD 5 GB",
      "SSL gratis (HTTPS)",
      "Optimasi SEO dasar",
      "Formulir kontak",
      "Dukungan via email",
    ],
    cta: "Mulai Gratis",
    ctaHref: "#",
  },
  {
    name: "Pro",
    description: "Untuk bisnis yang ingin tampil profesional dan tumbuh lebih cepat.",
    monthlyPrice: 1499000,
    yearlyPrice: Math.round(1499000 * 12 * 0.8),
    popular: true,
    features: [
      "Hingga 10 halaman",
      "Domain .com/.id gratis 1 tahun",
      "Hosting SSD 20 GB",
      "SSL gratis (HTTPS)",
      "Optimasi SEO lanjutan",
      "Integrasi WhatsApp & media sosial",
      "Analitik pengunjung",
      "Dukungan via WhatsApp & email",
      "Revisi desain hingga 3x",
    ],
    cta: "Mulai Gratis",
    ctaHref: "#",
  },
  {
    name: "Enterprise",
    description: "Solusi penuh untuk perusahaan dengan kebutuhan khusus.",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Halaman tidak terbatas",
      "Domain & hosting premium",
      "Integrasi sistem kustom",
      "E-commerce & pembayaran",
      "Optimasi performa lanjutan",
      "Manajer akun dedikasi",
      "SLA & dukungan prioritas 24/7",
      "Pelatihan tim internal",
    ],
    cta: "Hubungi Kami",
    ctaHref: "mailto:halo@webvlora.id",
  },
];
