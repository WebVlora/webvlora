import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { HeroMockup } from "@/components/sections/hero-mockup";
import { PiArrowRight, PiSparkle, PiStarFill } from "react-icons/pi";

export function Hero() {
  return (
    <Section
      id="beranda"
      size="lg"
      className="relative overflow-hidden pt-8 sm:pt-12 md:pt-20 lg:pt-24"
    >
      {/* Decorative grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid mask-radial-fade opacity-60"
      />
      {/* Gradient orbs — depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-40 size-[480px] rounded-full bg-primary/15 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-40 size-[420px] rounded-full bg-chart-2/12 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/3 size-[320px] rounded-full bg-chart-3/10 blur-[80px]"
      />

      <div className="relative grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
        {/* Left column — copy */}
        <div className="flex flex-col gap-6 sm:gap-7 lg:col-span-7 animate-fade-up">
          {/* Announcement pill */}
          <Link
            href="/ai-web-builder"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/60 py-1 pl-1 pr-3 text-xs font-medium text-foreground/80 shadow-sm backdrop-blur-sm transition hover:border-primary/40 hover:text-foreground"
          >
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
              <PiSparkle className="size-3" aria-hidden="true" />
              Baru
            </span>
            <span>AI Web Builder rilis untuk Indonesia</span>
            <PiArrowRight
              className="size-3.5 transition group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>

          <div className="flex flex-col gap-5">
            <h1 className="text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
              Website impian Anda,{" "}
              <span className="text-gradient-brand">jadi nyata</span>{" "}
              dalam hitungan menit.
            </h1>

            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              Gabungkan kecepatan AI dengan sentuhan desainer profesional. Dari
              UMKM hingga enterprise — website berkualitas tinggi kini
              terjangkau untuk semua.
            </p>
          </div>

          {/* CTA cluster */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="h-12 w-full px-7 text-base font-medium sm:w-auto"
              asChild
            >
              <Link href="/ai-web-builder">
                <PiSparkle className="size-4" aria-hidden="true" />
                Coba AI Web Builder
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 w-full px-7 text-base font-medium sm:w-auto"
              asChild
            >
              <Link href="/#harga">
                Lihat Harga
                <PiArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center gap-2">
              <div
                className="flex items-center"
                aria-label="Rating 4.9 dari 5"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <PiStarFill
                    key={i}
                    className="size-4 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">
                4.9/5
              </span>
              <span className="text-sm text-muted-foreground">
                dari 200+ klien
              </span>
            </div>
            <div className="hidden h-4 w-px bg-border sm:block" />
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span
                  className="size-1.5 rounded-full bg-emerald-500"
                  aria-hidden="true"
                />
                Pratinjau gratis
              </span>
              <span className="flex items-center gap-1.5">
                <span
                  className="size-1.5 rounded-full bg-emerald-500"
                  aria-hidden="true"
                />
                Tanpa kartu kredit
              </span>
            </div>
          </div>
        </div>

        {/* Right column — mockup */}
        <div
          className="lg:col-span-5 animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/25 via-chart-2/10 to-chart-3/20 blur-3xl"
            />
            <HeroMockup />
          </div>
        </div>
      </div>
    </Section>
  );
}
