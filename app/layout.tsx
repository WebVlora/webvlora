import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    template: "%s | WebVlora",
    default: "WebVlora — Jasa Pembuatan Website + AI Web Builder",
  },
  description:
    "WebVlora menggabungkan kecepatan AI Web Builder dengan sentuhan desainer manusia. Buat website profesional untuk UMKM, portofolio, atau perusahaan Anda mulai dari Rp 499 ribu.",
  keywords: [
    "jasa pembuatan website",
    "AI web builder",
    "website UMKM Indonesia",
    "buat website murah",
    "website profesional",
    "jasa website Indonesia",
    "landing page",
    "toko online",
  ],
  openGraph: {
    title: "WebVlora — Jasa Pembuatan Website + AI Web Builder",
    description:
      "Ceritakan website impian Anda. Kami bangun dalam hitungan menit dengan AI + tim desainer lokal.",
    url: "https://webvlora.id",
    siteName: "WebVlora",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebVlora — Jasa Pembuatan Website + AI Web Builder",
    description:
      "Ceritakan website impian Anda. Kami bangun dalam hitungan menit dengan AI + tim desainer lokal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body>
        <ThemeProvider>
          {children}
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
