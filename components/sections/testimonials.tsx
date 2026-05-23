import { PiStarFill, PiQuotes } from "react-icons/pi";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/section";
import { testimonials } from "@/lib/content/testimonials";

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  return (
    <Section className="relative bg-muted/30">
      <SectionHeader
        eyebrow="Testimoni"
        title={
          <>
            Dipercaya oleh{" "}
            <span className="text-gradient-brand">500+ bisnis</span>
          </>
        }
        description="Cerita nyata dari pemilik bisnis yang membangun kehadiran online mereka bersama WebVlora."
        className="mb-8 sm:mb-10"
      />

      {/* Aggregate rating pill */}
      <div className="mb-12 flex justify-center sm:mb-14">
        <div className="inline-flex items-center gap-3 rounded-full border border-border bg-background/70 px-4 py-2 shadow-sm backdrop-blur">
          <div className="flex gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <PiStarFill
                key={i}
                className="size-4 text-amber-400"
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-foreground">
            4.9/5
          </span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span className="text-xs text-muted-foreground">
            dari 500+ ulasan
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {testimonials.map((t) => (
          <Card
            key={t.name}
            className="group relative flex h-full flex-col border-border/60 bg-background/80 backdrop-blur-sm transition-all duration-300 hover-lift hover:border-primary/30"
          >
            <CardHeader className="flex-row items-center justify-between">
              <div
                className="flex gap-0.5"
                aria-label="Rating 5 dari 5 bintang"
              >
                {Array.from({ length: 5 }).map((_, idx) => (
                  <PiStarFill
                    key={idx}
                    className="size-4 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <PiQuotes
                className="size-7 text-primary/15 transition-colors group-hover:text-primary/30"
                aria-hidden="true"
              />
            </CardHeader>

            <CardContent className="flex-1">
              <p className="text-sm leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </p>
            </CardContent>

            <CardFooter className="gap-3">
              <Avatar className="size-10 ring-2 ring-primary/10">
                <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/5 text-xs font-bold text-primary">
                  {getInitials(t.name)}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {t.role}
                </p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
