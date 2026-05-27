import { MessageCircle, Rocket, Users, WandSparkles, type LucideIcon } from "lucide-react";

export type Step = {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const steps: Step[] = [
  {
    step: 1,
    icon: MessageCircle,
    title: "Ceritakan Ide Anda",
    description:
      "Ketik deskripsi website impian Anda di kolom prompt. Tidak perlu istilah teknis — cukup ceritakan seperti bicara ke teman.",
  },
  {
    step: 2,
    icon: WandSparkles,
    title: "AI Buat Draft",
    description:
      "Dalam hitungan menit, AI kami menghasilkan struktur, konten, dan desain awal yang siap untuk ditinjau.",
  },
  {
    step: 3,
    icon: Users,
    title: "Tim Kami Sempurnakan",
    description:
      "Desainer dan developer kami menyempurnakan draft AI dengan sentuhan manusia: branding, animasi, dan detail custom.",
  },
  {
    step: 4,
    icon: Rocket,
    title: "Tayang & Kami Dukung",
    description:
      "Website Anda tayang dengan domain dan hosting siap pakai. Kami terus mendampingi untuk update dan pemeliharaan.",
  },
];
