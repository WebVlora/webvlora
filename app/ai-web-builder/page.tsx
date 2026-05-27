import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Mail,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Section } from "@/components/section";
import { PromptBuilder } from "@/components/sections/prompt-builder";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "AI Web Builder",
  description:
    "Ceritakan website impian Anda dan biarkan AI kami membuat draft pertama dalam hitungan menit. Gratis, tanpa kartu kredit.",
};

const highlights: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Sparkles,
    title: "Draft dalam menit",
    description: "AI kami langsung memproses permintaan Anda",
  },
  {
    icon: Clock,
    title: "Revisi 24 jam",
    description: "Tim kami menyempurnakan hasil AI dalam sehari",
  },
  {
    icon: Users,
    title: "Desainer lokal",
    description: "Finishing oleh desainer Indonesia berpengalaman",
  },
  {
    icon: ShieldCheck,
    title: "Tanpa risiko",
    description: "Pratinjau gratis, bayar hanya jika puas",
  },
];

export default function AiWebBuilderPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        {/* Hero */}
        <Section
          size="md"
          className="relative overflow-hidden border-b border-border/60 bg-muted/20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-grid mask-radial-fade opacity-50"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -left-32 size-[500px] rounded-full bg-primary/15 blur-3xl opacity-50"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -right-32 size-[420px] rounded-full bg-chart-3/15 blur-3xl opacity-40"
          />

          <div className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-5 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
                AI Web Builder — Beta
              </div>

              <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Ceritakan website Anda.{" "}
                <span className="text-gradient-brand">
                  AI kami yang bangun.
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Tidak perlu keahlian teknis. Cukup jelaskan bisnis atau proyek
                Anda, dan AI kami akan membuat draft website pertama Anda —
                lalu tim desainer kami menyempurnakannya.
              </p>

              <div className="mt-10">
                <PromptBuilder />
              </div>
            </div>
          </div>
        </Section>

        {/* Highlights */}
        <Section size="md">
          <p className="mb-12 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:mb-14">
            Kenapa pakai AI Web Builder kami
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-card p-6 text-center hover-lift hover:border-primary/40"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary ring-1 ring-primary/10">
                    <Icon aria-hidden className="size-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Section>

        {/* Bottom CTA */}
        <Section size="sm" className="border-t border-border/60 bg-muted/20">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-muted-foreground sm:text-base">
              Lebih suka bicara langsung dengan tim kami?
            </p>
            <Button variant="outline" size="lg" className="h-11" asChild>
              <a href="mailto:halo@webvlora.id">
                <Mail aria-hidden className="size-4" />
                Hubungi via Email
              </a>
            </Button>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
