export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatarUrl?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "WebVlora mengubah cara saya berbisnis. Dalam 3 hari, toko online batik saya sudah tayang dan langsung dapat pesanan pertama!",
    name: "Siti Rahayu",
    role: "Pemilik Batik Nusantara, Yogyakarta",
  },
  {
    quote:
      "Saya tidak paham teknologi sama sekali, tapi tim WebVlora sangat sabar menjelaskan. Website saya sekarang terlihat lebih profesional dari kompetitor.",
    name: "Budi Santoso",
    role: "Direktur PT Maju Konstruksi, Surabaya",
  },
  {
    quote:
      "Harganya sangat terjangkau untuk kualitas yang didapat. Klien saya selalu memuji tampilan portofolio saya yang baru.",
    name: "Reza Firmansyah",
    role: "Fotografer Profesional, Jakarta",
  },
  {
    quote:
      "Fitur AI Builder-nya luar biasa! Saya tinggal ceritakan konsep kedai kopi saya, dan dalam 10 menit sudah ada draft yang hampir sempurna.",
    name: "Dewi Kusuma",
    role: "Founder Kopi Kita, Bandung",
  },
  {
    quote:
      "Dukungan via WhatsApp sangat membantu. Setiap ada pertanyaan, tim WebVlora selalu responsif dan ramah.",
    name: "Ahmad Fauzi",
    role: "Manajer Marketing, Klinik Sehat Sentosa",
  },
  {
    quote:
      "Sejak pakai WebVlora, traffic organik website kami naik 3x lipat dalam 2 bulan. SEO-nya benar-benar bekerja!",
    name: "Linda Wijaya",
    role: "Pemilik Toko Herbal Alami, Semarang",
  },
];
