"use client";

import { useState } from "react";
import { PiCheck, PiSparkleFill } from "react-icons/pi";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/section";
import { pricingTiers } from "@/lib/content/pricing";
import { cn } from "@/lib/utils";

function formatIDR(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <Section id="harga" className="relative overflow-x-clip">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
      />

      <SectionHeader
        eyebrow="Harga"
        title={
          <>
            Pilih paket{" "}
            <span className="text-gradient-brand">sesuai kebutuhan</span>
          </>
        }
        description="Semua paket sudah termasuk domain, hosting, dan SSL. Tidak ada biaya tersembunyi."
        className="mb-8 sm:mb-10"
      />

      {/* Billing toggle */}
      <div className="mb-12 flex justify-center sm:mb-14">
        <div
          role="tablist"
          aria-label="Pilih siklus penagihan"
          className="inline-flex items-center rounded-full border border-border bg-background/60 p-1 shadow-sm backdrop-blur"
        >
          <button
            type="button"
            role="tab"
            aria-selected={!isYearly}
            onClick={() => setIsYearly(false)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-colors",
              !isYearly
                ? "bg-foreground text-background shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Bulanan
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={isYearly}
            onClick={() => setIsYearly(true)}
            className={cn(
              "flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors",
              isYearly
                ? "bg-foreground text-background shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Tahunan
            <span
              className={cn(
                "rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none",
                isYearly
                  ? "bg-primary text-primary-foreground"
                  : "bg-primary/15 text-primary"
              )}
            >
              -20%
            </span>
          </button>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-3 md:gap-4 lg:gap-6">
        {pricingTiers.map((tier) => {
          const pricePerMonth =
            isYearly && tier.yearlyPrice
              ? Math.round(tier.yearlyPrice / 12)
              : tier.monthlyPrice;

          return (
            <Card
              key={tier.name}
              className={cn(
                "relative flex flex-col overflow-hidden transition-all duration-300",
                tier.popular
                  ? "z-10 border-primary/60 bg-card shadow-2xl shadow-primary/15 ring-1 ring-primary/20 md:-my-2 md:scale-[1.02]"
                  : "border-border/60 hover-lift hover:border-border"
              )}
            >
              {tier.popular && (
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-chart-3 to-primary"
                />
              )}

              <CardHeader
                className={cn("gap-1 pb-4", tier.popular ? "pt-7" : "pt-8")}
              >
                {tier.popular && (
                  <div className="mb-2 flex justify-center">
                    <Badge className="gap-1.5 border-0 bg-gradient-to-r from-primary to-chart-3 px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md">
                      <PiSparkleFill
                        className="size-3"
                        aria-hidden="true"
                      />
                      Paling Populer
                    </Badge>
                  </div>
                )}
                <CardTitle className="text-xl font-semibold tracking-tight">
                  {tier.name}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {tier.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col gap-6 pt-0">
                <div className="border-b border-border/60 pb-6">
                  {pricePerMonth !== null ? (
                    <>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                          {formatIDR(pricePerMonth)}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          /bulan
                        </span>
                      </div>
                      <p className="mt-2 min-h-[1.25rem] text-xs text-muted-foreground">
                        {isYearly && tier.yearlyPrice
                          ? `Ditagih ${formatIDR(tier.yearlyPrice)}/tahun`
                          : "Tagihan bulanan"}
                      </p>
                    </>
                  ) : (
                    <>
                      <span className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                        Hubungi kami
                      </span>
                      <p className="mt-2 min-h-[1.25rem] text-xs text-muted-foreground">
                        Penawaran disesuaikan kebutuhan
                      </p>
                    </>
                  )}
                </div>

                <ul className="flex flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <div
                        className={cn(
                          "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                          tier.popular
                            ? "bg-primary text-primary-foreground"
                            : "bg-primary/10 text-primary"
                        )}
                      >
                        <PiCheck className="size-3" aria-hidden="true" />
                      </div>
                      <span className="leading-relaxed text-foreground/90">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-2">
                  <CardFooter className="border-t-0 bg-transparent px-0">
                    <Button
                      className="h-11 w-full"
                      variant={tier.popular ? "default" : "outline"}
                      size="lg"
                      asChild
                    >
                      <a href={tier.ctaHref}>{tier.cta}</a>
                    </Button>
                  </CardFooter>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground sm:mt-12">
        Butuh paket khusus?{" "}
        <a
          href="mailto:halo@webvlora.id"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          Hubungi tim kami
        </a>{" "}
        — kami siap membantu.
      </p>
    </Section>
  );
}
