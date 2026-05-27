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
      "1 halaman landing page profesional",
      "Domain .id gratis 1 tahun",
      "Hosting SSD 5 GB + SSL gratis",
      "Desain responsif mobile-friendly",
      "Formulir kontak & tombol WhatsApp",
      "Optimasi SEO dasar",
      "Revisi desain 1x",
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
      "Semua fitur Starter, plus:",
      "Hingga 10 halaman kustom",
      "Domain .com/.id gratis 1 tahun",
      "Hosting SSD 20 GB + SSL gratis",
      "Optimasi SEO lanjutan + Google Analytics",
      "Integrasi WhatsApp, Instagram & email",
      "Blog/artikel siap pakai",
      "Revisi desain hingga 3x",
      "Dukungan prioritas via WhatsApp",
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
      "Semua fitur Pro, plus:",
      "Halaman & fitur tanpa batas",
      "Hosting dedicated & domain premium",
      "Toko online & gateway pembayaran",
      "Integrasi sistem kustom (CRM/ERP)",
      "Optimasi performa & keamanan lanjutan",
      "Manajer akun dedikasi",
      "SLA & dukungan prioritas 24/7",
      "Pelatihan & onboarding tim",
    ],
    cta: "Hubungi Kami",
    ctaHref: "mailto:halo@webvlora.id",
  },
];
