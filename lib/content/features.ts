import type { IconType } from "react-icons";
import { PiSparkle, PiPaintBrush, PiMagnifyingGlass, PiLightning, PiGlobe } from "react-icons/pi";

export type Feature = {
  icon: IconType;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: PiSparkle,
    title: "AI Web Builder",
    description:
      "Ceritakan ide Anda dalam bahasa sehari-hari. AI kami langsung membuat draft website lengkap dalam hitungan menit.",
  },
  {
    icon: PiPaintBrush,
    title: "Desain Custom",
    description:
      "Tim desainer kami menyempurnakan setiap detail visual agar sesuai dengan identitas brand Anda.",
  },
  {
    icon: PiMagnifyingGlass,
    title: "Optimasi SEO",
    description:
      "Setiap website dibangun dengan fondasi SEO yang kuat agar mudah ditemukan di Google dan mesin pencari lainnya.",
  },
  {
    icon: PiLightning,
    title: "Performa Kencang",
    description:
      "Dioptimalkan untuk kecepatan loading di bawah 2 detik. Pengunjung tidak perlu menunggu, konversi meningkat.",
  },
  {
    icon: PiGlobe,
    title: "Domain & Hosting",
    description:
      "Kami urus semua kebutuhan teknis: domain, hosting, SSL, hingga email profesional — semuanya dalam satu paket.",
  },
];
